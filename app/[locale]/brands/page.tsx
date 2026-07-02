import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { getBrands, getProductsByBrandId, getCategories, categoryName } from "@/lib/hdctool";

const FEATURED_BRANDS = ["MILWAUKEE", "KNIPEX", "WERA", "Facom", "FESTOOL"];

export default async function BrandsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const [allBrands, categories] = await Promise.all([getBrands(), getCategories()]);

  const order = new Map(FEATURED_BRANDS.map((n, i) => [n, i]));
  const brands = allBrands
    .filter((b) => order.has(b.brandNameEnglish))
    .sort((a, b) => order.get(a.brandNameEnglish)! - order.get(b.brandNameEnglish)!);

  const brandsWithProducts = await Promise.all(
    brands.map(async (brand) => ({
      ...brand,
      products: await getProductsByBrandId(brand.id, 50),
    }))
  );

  return (
    <>
      <Nav />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-ink px-6 pb-24 pt-[150px] md:px-14">
          <h1 className="mb-6 text-[52px] font-black uppercase leading-[0.9] tracking-[-3px] text-white md:text-[72px]">
            {isEn ? (
              <>
                Quality Brands
                <br />
                We Distribute
              </>
            ) : (
              <>
                Ποιοτικές Μάρκες
                <br />
                που Διανέμουμε
              </>
            )}
          </h1>
          <p className="max-w-[600px] text-lg text-white">
            {isEn
              ? "Kolleris partners with the world's most trusted tool and equipment brands. Every partnership reflects our commitment to quality and reliability."
              : "Η Kolleris συνεργάζεται με τις πιο αξιόπιστες μάρκες εργαλείων και εξοπλισμού του κόσμου. Κάθε συνεργασία αντανακλά τη δέσμευσή μας στην ποιότητα και την αξιοπιστία."}
          </p>
        </section>

        {/* Brand Sections */}
        {brandsWithProducts.map((brand) => (
          <section key={brand.id} className="border-t border-neutral-200">
            {/* Brand Header */}
            <div className="bg-neutral-50 px-6 py-20 md:px-14">
              <div className="mb-8">
                {brand.brandLogo && (
                  <div className="relative mb-8 flex h-[100px] items-center">
                    <Image
                      src={brand.brandLogo}
                      alt={brand.brandNameEnglish}
                      width={250}
                      height={100}
                      unoptimized
                      className="h-full object-contain"
                    />
                  </div>
                )}
              </div>
              <h2 className="mb-4 text-[42px] font-black uppercase leading-[0.9] tracking-[-2px] text-ink">
                {brand.brandNameEnglish}
              </h2>
              <p className="text-lg text-neutral-600">
                {brand.products.length}{" "}
                {isEn ? "selected products" : "επιλεγμένα προϊόντα"}
              </p>

              {brand.brandNameEnglish === "MILWAUKEE" && (
                <a
                  href="https://milwaukeetoolshdc.gr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 flex max-w-[560px] items-center gap-5 border-2 border-ink bg-ink p-5 transition-colors hover:border-red"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-red text-[11px] font-black uppercase leading-[1.1] text-white">
                    HD
                    <br />
                    Store
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[2px] text-red">
                      {isEn ? "Milwaukee Heavy Duty Centre" : "Milwaukee Heavy Duty Centre"}
                    </div>
                    <div className="mt-1 text-[17px] font-black uppercase leading-tight text-white">
                      {isEn
                        ? "The First Official Milwaukee HDC Store"
                        : "Το Πρώτο Επίσημο Milwaukee HDC Store"}
                    </div>
                    <div className="mt-1 text-[13px] text-white/50 group-hover:text-white/80">
                      milwaukeetoolshdc.gr →
                    </div>
                  </div>
                </a>
              )}
            </div>

            {/* Products Grid */}
            <div className="px-6 py-16 md:px-14">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {brand.products.map((product) => (
                  <div
                    key={product.code}
                    className="group cursor-pointer border border-neutral-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="relative h-[240px] overflow-hidden bg-neutral-50">
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={
                            product.images.find((img) => img.isFeature)?.url ??
                            product.images[0]?.url ??
                            "/placeholder.png"
                          }
                          alt={product.name}
                          fill
                          unoptimized
                          className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[11px] uppercase tracking-[2px] text-neutral-300">
                          {isEn ? "No Image" : "Χωρίς Εικόνα"}
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-red/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-[13px] font-bold uppercase tracking-[1px] text-white">
                          {isEn ? "View →" : "Δείτε →"}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="mb-2 line-clamp-2 text-[12px] font-bold uppercase leading-[1.4] tracking-[0.3px]">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-neutral-500">
                        {categoryName(categories, product)}
                      </p>
                      <p className="mt-2 text-[10px] text-neutral-400">
                        {isEn ? "Code" : "Κωδικός"}: {product.code}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
}
