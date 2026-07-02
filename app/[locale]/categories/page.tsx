import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CategoriesIndex, type CategoryItem } from "@/components/CategoriesIndex";
import { getCategoriesWithCounts, localeName } from "@/lib/hdctool";

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const categories = await getCategoriesWithCounts();

  const items: CategoryItem[] = categories.map((c) => ({
    id: c.id,
    name: localeName(c, locale),
    productCount: c.productCount,
    subcategoryCount: c.subcategoryCount,
    mainImage: c.mainImage,
  }));

  return (
    <>
      <Nav />
      <CategoriesIndex categories={items} />
      <Footer />
    </>
  );
}
