import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-white pt-[100px]">
        {/* Hero */}
        <section className="bg-ink px-6 py-24 md:px-14">
          <h1 className="text-[52px] font-black uppercase leading-[0.9] tracking-[-3px] text-white md:text-[72px]">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-[600px] text-lg text-white">{t("subtitle")}</p>
        </section>

        {/* Contact Info Grid */}
        <section className="px-6 py-24 md:px-14">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Contact Details */}
            <div>
              <h2 className="mb-12 text-[38px] font-black uppercase leading-[0.9] tracking-[-2px]">
                {t("detailsA")}
                <br />
                {t("detailsB")}
              </h2>

              <div className="space-y-10">
                {/* Phone */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[2px] text-red">
                    {t("phone")}
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+302104111355"
                      className="block text-lg text-ink transition-colors hover:text-red"
                    >
                      +30 210 411 1355
                    </a>
                    <a
                      href="tel:+306940816338"
                      className="block text-lg text-ink transition-colors hover:text-red"
                    >
                      +30 694 081 6338
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[2px] text-red">
                    {t("email")}
                  </h3>
                  <a
                    href="mailto:info@kolleris.com"
                    className="text-lg text-ink transition-colors hover:text-red"
                  >
                    info@kolleris.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[2px] text-red">
                    {t("address")}
                  </h3>
                  <p className="text-lg leading-relaxed text-ink">
                    Κ. Μαυρομιχάλη 4<br />
                    18545 Πειραιάς
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[2px] text-red">
                    {t("hours")}
                  </h3>
                  <div className="space-y-2 text-lg text-ink">
                    <p>
                      <span className="font-semibold">{t("weekdays")}:</span> 9:00 - 19:00
                    </p>
                    <p>
                      <span className="font-semibold">{t("saturday")}:</span>{" "}
                      <span className="text-neutral-500">{t("closed")}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-[500px] w-full items-center justify-center rounded-lg bg-neutral-100">
                <div className="text-center">
                  <div className="mb-4 text-4xl">📍</div>
                  <p className="text-neutral-600">Κ. Μαυρομιχάλη 4, Πειραιάς</p>
                  <p className="mt-2 text-sm text-neutral-500">{t("mapNote")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-red px-6 py-24 md:px-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border-[80px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-32 right-60 h-[260px] w-[260px] rounded-full border-[40px] border-white/[0.04]" />

          <div className="relative z-10 max-w-[700px]">
            <h2 className="mb-8 text-[48px] font-black uppercase leading-[0.9] tracking-[-2px] text-white">
              {t("cta")}
            </h2>
            <p className="mb-8 text-lg text-white/90">{t("ctaText")}</p>
            <a
              href="mailto:info@kolleris.com"
              className="inline-block bg-white px-12 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-red transition-all hover:bg-ink hover:text-white"
            >
              {t("sendEmail")}
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
