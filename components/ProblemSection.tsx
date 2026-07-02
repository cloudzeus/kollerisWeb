import { getTranslations } from "next-intl/server";
import { ScrollReveal } from "./ScrollReveal";

type ProblemItem = { title: string; body: string };

export async function ProblemSection() {
  const t = await getTranslations("problem");
  const items = t.raw("items") as ProblemItem[];

  return (
    <section className="bg-white px-6 pt-24 md:px-14">
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

      <div className="grid grid-cols-1 gap-px bg-neutral-200 md:grid-cols-3">
        {items.map((p, i) => (
          <ScrollReveal key={i} className="bg-white p-10 md:p-13">
            <div className="mb-5 text-[88px] font-black leading-none text-red/[0.08]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-3.5 text-[15px] font-bold uppercase tracking-[0.5px]">
              {p.title}
            </h3>
            <p className="text-sm leading-[1.85] text-neutral-600">{p.body}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
