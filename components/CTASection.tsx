import { getLocale, getTranslations } from "next-intl/server";
import { ScrollReveal } from "./ScrollReveal";

export async function CTASection() {
  const t = await getTranslations("cta");
  const locale = await getLocale();

  return (
    <section className="relative mt-px flex flex-col items-start gap-10 overflow-hidden bg-red px-6 py-24 md:flex-row md:items-center md:justify-between md:px-14">
      <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border-[80px] border-white/5" />
      <div className="pointer-events-none absolute -bottom-32 right-60 h-[260px] w-[260px] rounded-full border-[40px] border-white/[0.04]" />

      <ScrollReveal direction="left" className="relative z-10">
        <h2 className="max-w-[600px] text-[32px] font-black uppercase leading-[0.9] tracking-[-2px] text-white md:text-[62px]">
          {t("title")}
        </h2>
      </ScrollReveal>
      <ScrollReveal direction="right" className="relative z-10 flex-shrink-0">
        <a
          href={`/${locale}/contact`}
          className="inline-block whitespace-nowrap bg-white px-11 py-5 text-[13px] font-bold uppercase tracking-[1.5px] text-red transition-colors hover:bg-ink hover:text-white"
        >
          {t("button")}
        </a>
      </ScrollReveal>
    </section>
  );
}
