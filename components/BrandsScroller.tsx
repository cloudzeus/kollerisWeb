import { ScrollReveal } from "./ScrollReveal";

type BrandsScrollerProps = {
  brands: string[];
  eyebrow: string;
  title: string;
  note: string;
};

function Row({
  items,
  direction,
}: {
  items: string[];
  direction: "ltr" | "rtl";
}) {
  const loop = [...items, ...items];
  const anim = direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr";

  return (
    <div className="marquee-row relative overflow-hidden py-1">
      <div className={`flex w-max items-center ${anim}`}>
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="group flex shrink-0 items-center whitespace-nowrap px-6 md:px-9"
          >
            <span className="text-[26px] font-black uppercase tracking-[-1px] text-white/35 transition-colors duration-300 hover:text-white md:text-[40px]">
              {name}
            </span>
            <span className="ml-6 text-red md:ml-9">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function BrandsScroller({ brands, eyebrow, title, note }: BrandsScrollerProps) {
  const half = Math.ceil(brands.length / 2);
  const rowA = brands.slice(0, half);
  const rowB = brands.slice(half);

  return (
    <section id="brands" className="mt-px overflow-hidden bg-ink py-24">
      <div className="px-6 md:px-14">
        <ScrollReveal direction="left">
          <div className="mb-5 text-[10px] font-bold uppercase tracking-[4px] text-red">
            {eyebrow}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="mb-4 max-w-[900px] whitespace-pre-line text-[38px] font-black uppercase leading-[0.92] tracking-[-2px] text-white md:text-[68px]">
            {title}
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="mb-14 text-[13px] font-semibold uppercase tracking-[2px] text-white/40">
            {note}
          </p>
        </ScrollReveal>
      </div>

      <div className="relative flex flex-col gap-3 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-24 before:bg-gradient-to-r before:from-ink before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-24 after:bg-gradient-to-l after:from-ink after:to-transparent md:before:w-48 md:after:w-48">
        <Row items={rowA} direction="rtl" />
        <Row items={rowB} direction="ltr" />
      </div>
    </section>
  );
}
