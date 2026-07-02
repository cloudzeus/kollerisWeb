import { getTranslations } from "next-intl/server";

export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "hero" });

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-[148px] pb-20 md:px-14">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.kolleris.com/engineer-walking-past-shipyard-during-sunset-2026-01-22-16-56-28-utc.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div
        className="relative z-10 mb-7 animate-fade-up text-[11px] font-bold uppercase tracking-[4px] text-red"
        style={{ animationDelay: "0.25s" }}
      >
        {t("eyebrow")}
      </div>

      <h1
        className="relative z-10 mb-9 max-w-[920px] animate-fade-up text-[46px] font-black uppercase leading-[0.9] tracking-[-3px] text-white md:text-[92px]"
        style={{ animationDelay: "0.4s" }}
      >
        {t("line1")}
        <br />
        {t("line2")}
        <br />
        <span className="text-red">{t("line3")}</span>
        <br />
        {t("line4")}
      </h1>

      <p
        className="relative z-10 mb-12 max-w-[520px] animate-fade-up text-lg leading-[1.75] text-white"
        style={{ animationDelay: "0.65s" }}
      >
        {t.rich("subheading", {
          hl: (chunks) => <strong className="font-bold text-red">{chunks}</strong>,
        })}
      </p>

      <div
        className="relative z-10 flex animate-fade-up flex-wrap gap-4"
        style={{ animationDelay: "0.8s" }}
      >
        <a
          href="#products"
          className="bg-red px-10 py-[17px] text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-red/80"
        >
          {t("viewProducts")}
        </a>
        <a
          href={`/${locale}/contact`}
          className="border-2 border-white px-10 py-[17px] text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-white hover:text-ink"
        >
          {t("contactUs")}
        </a>
      </div>

      <div
        className="absolute bottom-11 left-6 flex animate-fade-in items-center gap-3 text-[10px] font-bold uppercase tracking-[3px] text-neutral-300 md:left-14"
        style={{ animationDelay: "1.1s" }}
      >
        <div className="h-px w-12 animate-pulse-line bg-red" />
        <span>{t("scroll")}</span>
      </div>
    </section>
  );
}
