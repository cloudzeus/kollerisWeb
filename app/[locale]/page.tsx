import { getTranslations } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { ProblemSection } from "@/components/ProblemSection";
import { CategoriesPreview } from "@/components/CategoriesPreview";
import type { CategoryItem } from "@/components/CategoriesIndex";
import { BrandsScroller } from "@/components/BrandsScroller";
import { ProductsGrid, type DisplayProduct } from "@/components/ProductsGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import {
  getBrands,
  getBrandNames,
  getCategories,
  getCategoriesWithCounts,
  getProductsByBrandId,
  categoryName,
  localeName,
} from "@/lib/hdctool";

const FEATURED_BRAND_NAMES = ["MILWAUKEE", "KNIPEX", "WERA", "Facom", "FESTOOL"];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const [allBrands, categories, categoriesWithCounts, brandNames] =
    await Promise.all([
      getBrands(),
      getCategories(),
      getCategoriesWithCounts(),
      getBrandNames(),
    ]);

  const featuredBrands = FEATURED_BRAND_NAMES.map((name) =>
    allBrands.find((b) => b.brandNameEnglish === name)
  ).filter((b): b is NonNullable<typeof b> => Boolean(b?.brandLogo));

  const productsByBrand = await Promise.all(
    featuredBrands.map((brand) => getProductsByBrandId(brand.id, 3))
  );

  const products: DisplayProduct[] = productsByBrand
    .flat()
    .slice(0, 8)
    .map((product) => ({
      code: product.code,
      name: product.name,
      brandName: product.brand.name,
      categoryName: categoryName(categories, product),
      imageUrl:
        product.images.find((img) => img.isFeature)?.url ?? product.images[0]?.url ?? null,
    }));

  const categoryItems: CategoryItem[] = categoriesWithCounts.map((c) => ({
    id: c.id,
    name: localeName(c, locale),
    productCount: c.productCount,
    subcategoryCount: c.subcategoryCount,
    mainImage: c.mainImage,
  }));

  const tb = await getTranslations({ locale, namespace: "brands" });

  return (
    <>
      <Nav />
      <Hero locale={locale} />
      <StatsBand />
      <ProblemSection />
      <CategoriesPreview categories={categoryItems} locale={locale} />
      <BrandsScroller
        brands={brandNames}
        eyebrow={tb("eyebrow")}
        title={tb("title")}
        note={tb("note", { count: brandNames.length })}
      />
      <ProductsGrid products={products} />
      <CTASection />
      <Footer />
    </>
  );
}
