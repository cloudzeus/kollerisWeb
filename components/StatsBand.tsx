"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Stat = { target: number; suffix: string; label: string };

export function StatsBand() {
  const bandRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("stats");

  const stats: Stat[] = [
    { target: 46, suffix: "+", label: t("years") },
    { target: 200, suffix: "+", label: t("brands") },
    { target: 50000, suffix: "+", label: t("products") },
    { target: 24, suffix: "h", label: t("delivery") },
  ];

  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;

    const nums = band.querySelectorAll<HTMLElement>("[data-target]");
    let triggered = false;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: band,
        start: "top 92%",
        onEnter: () => {
          if (triggered) return;
          triggered = true;
          nums.forEach((el) => {
            const target = Number(el.dataset.target);
            const suffix = el.dataset.suffix ?? "";
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(obj.val).toLocaleString("el-GR") + suffix;
              },
            });
          });
        },
      });
    }, band);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bandRef} className="flex bg-red px-6 md:px-14">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex-1 border-white/20 py-8 ${i < stats.length - 1 ? "border-r" : ""} ${i > 0 ? "pl-10" : ""} pr-10 last:pr-0`}
        >
          <span
            data-target={stat.target}
            data-suffix={stat.suffix}
            className="block text-[56px] font-black leading-none tracking-[-3px] text-white"
          >
            0{stat.suffix}
          </span>
          <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[2px] text-white/65">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
