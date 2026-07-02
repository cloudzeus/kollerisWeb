import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ScrollReveal } from "./ScrollReveal";

export type DisplayProduct = {
  code: string;
  name: string;
  brandName: string;
  categoryName: string;
  imageUrl: string | null;
};

export async function ProductsGrid({
  products,
}: {
  products: DisplayProduct[];
  totalCount?: number;
}) {
  const t = await getTranslations("products");

  return (
    <section id="products" className="bg-white px-6 py-24 md:px-14">
      <ScrollReveal direction="left">
        <div className="mb-5 text-[10px] font-bold uppercase tracking-[4px] text-red">
          {t("eyebrow")}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <h2 className="mb-16 text-[38px] font-black uppercase leading-[0.92] tracking-[-2px] md:text-[68px]">
          {t("titleA")}
          <br />
          {t("titleB")}
          <br />
          <span className="text-red">{t("titleC")}</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ScrollReveal key={product.code}>
            <div className="group cursor-pointer bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-[240px] overflow-hidden bg-neutral-50">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[11px] uppercase tracking-[2px] text-neutral-300">
                    {t("noImage")}
                  </div>
                )}
                <div className="absolute inset-0 bg-red/90 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white font-bold uppercase tracking-[1px] text-[13px]">
                    {t("view")}
                  </span>
                </div>
              </div>
              <div className="p-5 border-t border-neutral-100">
                <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px] text-red">
                  {product.brandName}
                </div>
                <h4 className="mb-2 text-[12px] font-bold uppercase leading-[1.4] tracking-[0.3px] line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-[11px] text-neutral-500">{product.categoryName}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="pt-16 text-center">
        <a
          href="https://magento.kolleris.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red px-10 py-[17px] text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-red/80"
        >
          {t("viewAll")}
        </a>
      </div>
    </section>
  );
}
