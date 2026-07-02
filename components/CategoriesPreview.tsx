import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { CategoryItem } from "./CategoriesIndex";
import { ScrollReveal } from "./ScrollReveal";

export async function CategoriesPreview({
  categories,
  locale,
}: {
  categories: CategoryItem[];
  locale: string;
}) {
  const t = await getTranslations("categories");
  const top = categories.slice(0, 7);

  return (
    <section className="bg-white px-6 py-28 md:px-14">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
        {/* Left — statement */}
        <div>
          <ScrollReveal direction="left">
            <div className="mb-5 text-[11px] font-bold uppercase tracking-[4px] text-red">
              {t("eyebrow")}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="whitespace-pre-line text-[42px] font-black uppercase leading-[0.9] tracking-[-2px] text-ink md:text-[64px]">
              {t("title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-8 max-w-[420px] text-[15px] leading-[1.75] text-neutral-600">
              {t("previewText")}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <Link
              href={`/${locale}/categories`}
              className="mt-10 inline-block bg-ink px-10 py-[17px] text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-transform hover:scale-[1.03]"
            >
              {t("viewAll")} →
            </Link>
          </ScrollReveal>
        </div>

        {/* Right — top categories index */}
        <ScrollReveal direction="right">
          <div className="border-t border-neutral-200">
            {top.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/${locale}/categories`}
                className="group flex items-center justify-between gap-4 border-b border-neutral-200 py-5"
              >
                <div className="flex items-baseline gap-5">
                  <span className="w-6 shrink-0 text-[12px] font-bold tabular-nums text-neutral-300 group-hover:text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[18px] font-black uppercase leading-tight tracking-[-0.5px] text-ink transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-red md:text-[22px]">
                    {cat.name}
                  </span>
                </div>
                <span className="shrink-0 text-[15px] font-black tabular-nums text-red md:text-[18px]">
                  {cat.productCount.toLocaleString("el-GR")}
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
