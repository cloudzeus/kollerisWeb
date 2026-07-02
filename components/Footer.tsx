import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { KollerisLogo } from "./KollerisLogo";

export async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();

  return (
    <footer className="bg-[#111111] px-6 pb-11 pt-18 md:px-14">
      <div className="mb-9 flex flex-col gap-10 border-b border-white/[0.07] pb-11 md:flex-row md:items-start md:justify-between">
        <div>
          <KollerisLogo height={40} />
          <div className="mt-2.5 text-[10px] uppercase tracking-[2px] text-white/25">
            {t("tagline")}
          </div>
        </div>
        <div className="flex flex-wrap gap-16">
          <div>
            <h5 className="mb-4.5 text-[9.5px] uppercase tracking-[2.5px] text-white/20">
              {t("productsCol")}
            </h5>
            <Link href={`/${locale}/categories`} className="mb-2.5 block text-[13px] text-white/50 hover:text-red">
              {t("categories")}
            </Link>
            <Link href={`/${locale}/brands`} className="mb-2.5 block text-[13px] text-white/50 hover:text-red">
              {t("brands")}
            </Link>
            <a href="https://magento.kolleris.com" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-white/50 hover:text-red">
              E-shop
            </a>
          </div>
          <div>
            <h5 className="mb-4.5 text-[9.5px] uppercase tracking-[2.5px] text-white/20">
              {t("contactCol")}
            </h5>
            <a href="mailto:info@kolleris.com" className="mb-2.5 block text-[13px] text-white/50 hover:text-red">
              info@kolleris.com
            </a>
            <a href="tel:+302104111355" className="mb-2.5 block text-[13px] text-white/50 hover:text-red">
              +30 210 411 1355
            </a>
            <Link href={`/${locale}/contact`} className="block text-[13px] text-white/50 hover:text-red">
              {t("address")}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/18">{t("rights")}</p>
        <div className="h-[3px] w-9 bg-red" />
      </div>
    </footer>
  );
}
