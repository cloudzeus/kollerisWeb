import "server-only";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is required but was not set. Add ${name} to .env.local or your deployment environment.`
    );
  }
  return value;
}

const BASE_URL = requiredEnv("HDCTOOL_BASE_URL");
const EMAIL = requiredEnv("HDCTOOL_EMAIL");
const PASSWORD = requiredEnv("HDCTOOL_PASSWORD");

export type Brand = {
  id: string;
  brandNameGreek: string;
  brandNameEnglish: string;
  brandLogo: string | null;
  brandImage: string | null;
};

export type ProductImage = {
  url: string;
  isFeature: boolean;
};

export type Product = {
  code: string;
  name: string;
  images: ProductImage[];
  brand: { id: string; name: string; logo: string | null; mtrmark: number };
  category: { mtrcategory: number | null; mtrgroup: number | null; cccSubgroup2: number | null };
};

export type Category = {
  id: string;
  parentId: string | null;
  erpType: "CATEGORY" | "GROUP" | "SUBGROUP";
  erpCode: string;
  order: number;
  nameGreek: string;
  nameEnglish: string;
  mainImage: string | null;
  heroImage: string | null;
};

export type CategoryWithCount = Category & {
  productCount: number;
  subcategoryCount: number;
};

let cachedSessionId: string | null = null;
let cachedAt = 0;
const SESSION_TTL_MS = 20 * 60 * 1000;

async function authenticate(): Promise<string> {
  const res = await fetch(`${BASE_URL}/api/public/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
    cache: "no-store",
  });
  const data = await res.json();
  if (!data.success && !data.sessionId) {
    throw new Error(`hdctool auth failed: ${JSON.stringify(data)}`);
  }
  cachedSessionId = data.sessionId;
  cachedAt = Date.now();
  return data.sessionId;
}

async function getSessionId(): Promise<string> {
  if (cachedSessionId && Date.now() - cachedAt < SESSION_TTL_MS) {
    return cachedSessionId;
  }
  return authenticate();
}

async function hdcFetch<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const sessionId = await getSessionId();
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionId}`,
    },
    body: JSON.stringify(body),
    next: { revalidate: 3600 },
  });
  return res.json() as Promise<T>;
}

export async function getBrands(): Promise<Brand[]> {
  const data = await hdcFetch<{ brands: Brand[] }>("/api/public/brands", {
    page: 1,
    limit: 200,
  });
  return data.brands ?? [];
}

export async function getProductsByBrandId(
  brandId: string,
  limit = 4
): Promise<Product[]> {
  const data = await hdcFetch<{ products: Product[] }>("/api/public/products", {
    page: 1,
    limit,
    brandId,
  });
  return data.products ?? [];
}

export async function getTotalProductCount(): Promise<number> {
  const data = await hdcFetch<{ pagination: { total: number } }>(
    "/api/public/products",
    { page: 1, limit: 1 }
  );
  return data.pagination?.total ?? 0;
}

export async function getCategories(): Promise<Category[]> {
  const data = await hdcFetch<{ categories: Category[] }>(
    "/api/public/categories",
    {}
  );
  return data.categories ?? [];
}

export function categoryName(categories: Category[], product: Product): string {
  const group = categories.find(
    (c) => c.erpType === "GROUP" && c.erpCode === String(product.category.mtrgroup)
  );
  if (group) return group.nameGreek;
  const category = categories.find(
    (c) => c.erpType === "CATEGORY" && c.erpCode === String(product.category.mtrcategory)
  );
  return category?.nameGreek ?? "Εργαλεία";
}

/** Locale-aware display name from an API record that carries both languages. */
export function localeName(
  item: { nameGreek: string; nameEnglish: string },
  locale: string
): string {
  if (locale === "en") return item.nameEnglish || item.nameGreek;
  return item.nameGreek || item.nameEnglish;
}

async function getCategoryProductCount(categoryId: string): Promise<number> {
  const data = await hdcFetch<{ pagination: { total: number } }>(
    "/api/public/products",
    { page: 1, limit: 1, categoryId }
  );
  return data.pagination?.total ?? 0;
}

/**
 * Top-level categories enriched with real product counts and the number of
 * groups + subgroups nested beneath each. Empty categories are dropped and the
 * result is sorted by product count (largest first).
 */
export async function getCategoriesWithCounts(): Promise<CategoryWithCount[]> {
  const all = await getCategories();
  const topLevel = all.filter((c) => c.erpType === "CATEGORY");
  const groups = all.filter((c) => c.erpType === "GROUP");
  const subgroups = all.filter((c) => c.erpType === "SUBGROUP");

  const enriched = await Promise.all(
    topLevel.map(async (cat) => {
      const productCount = await getCategoryProductCount(cat.id);
      const catGroups = groups.filter((g) => g.parentId === cat.id);
      const groupIds = new Set(catGroups.map((g) => g.id));
      const catSubgroups = subgroups.filter((s) => groupIds.has(s.parentId ?? ""));
      return {
        ...cat,
        productCount,
        subcategoryCount: catGroups.length + catSubgroups.length,
      };
    })
  );

  return enriched
    .filter((c) => c.productCount > 0)
    .sort((a, b) => b.productCount - a.productCount);
}

/** All distinct brand display names (Greek), with placeholder rows removed. */
export async function getBrandNames(): Promise<string[]> {
  const brands = await getBrands();
  const seen = new Set<string>();
  const names: string[] = [];
  for (const b of brands) {
    const name = (b.brandNameGreek || b.brandNameEnglish || "").trim();
    if (!name) continue;
    if (name.toUpperCase() === "UNKNOWN") continue;
    if (/^MTRMARK\s+\d+$/i.test(name)) continue;
    const key = name.toUpperCase();
    if (seen.has(key)) continue;
    seen.add(key);
    names.push(name);
  }
  return names.sort((a, b) => a.localeCompare(b, "el"));
}
