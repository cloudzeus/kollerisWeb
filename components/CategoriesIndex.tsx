'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export type CategoryItem = {
  id: string;
  name: string;
  productCount: number;
  subcategoryCount: number;
  mainImage: string | null;
};

const STORE_URL = 'https://magento.kolleris.com';

export function CategoriesIndex({
  categories,
}: {
  categories: CategoryItem[];
}) {
  const t = useTranslations('categories');
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const floatRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  useEffect(() => {
    const rows = rowsRef.current.filter(Boolean) as HTMLDivElement[];
    gsap.fromTo(
      rows,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 78%' },
      }
    );
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    if (!floatRef.current) return;
    gsap.to(floatRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className="relative overflow-hidden bg-white px-6 pb-28 pt-[150px] md:px-14"
    >
      {/* Header */}
      <div className="mb-16 md:mb-24">
        <div className="mb-5 text-[11px] font-bold uppercase tracking-[4px] text-red">
          {t('eyebrow')}
        </div>
        <h1 className="max-w-[900px] whitespace-pre-line text-[52px] font-black uppercase leading-[0.88] tracking-[-3px] text-ink md:text-[92px]">
          {t('title')}
        </h1>
        <div className="mt-10 flex flex-wrap items-end gap-x-14 gap-y-6">
          <div>
            <div className="text-[44px] font-black leading-none text-red md:text-[64px]">
              {t('categoriesStat')}
            </div>
            <div className="mt-2 text-[11px] font-bold uppercase tracking-[2px] text-neutral-500">
              {t('categoriesLabel')}
            </div>
          </div>
          <div>
            <div className="text-[44px] font-black leading-none text-ink md:text-[64px]">
              {t('productsStat')}
            </div>
            <div className="mt-2 text-[11px] font-bold uppercase tracking-[2px] text-neutral-500">
              {t('productsLabel')}
            </div>
          </div>
          <p className="max-w-[420px] text-[15px] leading-[1.7] text-neutral-600">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Online-stock index (real e-shop counts) */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-t border-ink pt-8">
        <h2 className="text-[13px] font-bold uppercase tracking-[2px] text-ink">
          {t('listTitle')}
        </h2>
        <p className="max-w-[480px] text-[13px] leading-[1.6] text-neutral-500">
          {t('listNote')}
        </p>
      </div>
      <div className="border-t border-neutral-200">
        {categories.map((cat, i) => (
          <div
            key={cat.id}
            ref={(el) => {
              rowsRef.current[i] = el;
            }}
            onMouseEnter={() => setActiveImg(cat.mainImage)}
            onMouseLeave={() => setActiveImg(null)}
            className="group border-b border-neutral-200"
          >
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 py-6 md:py-7"
            >
              <div className="flex items-baseline gap-5 md:gap-9">
                <span className="w-7 shrink-0 text-[13px] font-bold tabular-nums text-neutral-300 transition-colors group-hover:text-red md:w-10 md:text-[15px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-[24px] font-black uppercase leading-[1.05] tracking-[-1px] text-ink transition-all duration-300 group-hover:translate-x-2 group-hover:text-red md:text-[42px]">
                  {cat.name}
                </h2>
              </div>
              <div className="flex shrink-0 items-baseline gap-5 md:gap-9">
                <span className="hidden text-[11px] font-semibold uppercase tracking-[1px] text-neutral-400 md:inline">
                  {cat.subcategoryCount} {t('subcategories')}
                </span>
                <span className="min-w-[70px] text-right text-[19px] font-black tabular-nums text-red md:min-w-[110px] md:text-[30px]">
                  {cat.productCount.toLocaleString('el-GR')}
                </span>
                <span className="hidden text-[20px] text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red md:inline">
                  →
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[440px] text-[15px] leading-[1.7] text-neutral-600">
          {t('storeNote')}
        </p>
        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block shrink-0 bg-red px-10 py-[17px] text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-transform hover:scale-[1.03]"
        >
          {t('viewAll')} →
        </a>
      </div>

      {/* Cursor-following image reveal (desktop) */}
      <div
        ref={floatRef}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      >
        <div
          className={`transition-opacity duration-300 ${
            activeImg ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: 'translate(28px, -50%)' }}
        >
          {activeImg && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={activeImg}
              alt=""
              className="h-[220px] w-[290px] rounded-xl object-cover shadow-2xl ring-1 ring-black/5"
            />
          )}
        </div>
      </div>
    </section>
  );
}
