'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { KollerisLogo } from './KollerisLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Nav() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}#products`, label: t('products') },
    { href: `/${locale}/categories`, label: t('categories') },
    { href: `/${locale}/brands`, label: t('brands') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <>
    <nav className="fixed inset-x-0 top-0 z-50 flex h-[68px] animate-nav-in items-center justify-between bg-ink px-6 md:px-14">
      <Link href={`/${locale}`} className="relative z-50" onClick={() => setOpen(false)}>
        <KollerisLogo />
      </Link>

      {/* Desktop */}
      <div className="hidden items-center gap-9 md:flex">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[11.5px] font-semibold uppercase tracking-[1.2px] text-white/55 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <div className="h-6 w-px bg-white/20" />
        <LanguageSwitcher />
        <Link
          href={`/${locale}/contact`}
          className="bg-red px-6 py-2.5 text-[11.5px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-red/80"
        >
          {t('contact')}
        </Link>
      </div>

      {/* Mobile controls */}
      <div className="flex items-center gap-4 md:hidden">
        <LanguageSwitcher />
        <button
          type="button"
          aria-label={open ? t('close') : t('menu')}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>
    </nav>

    {/* Mobile overlay menu, kept outside the nav element to avoid its transform containing block */}
    <div
      className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-ink px-8 pt-[68px] transition-opacity duration-300 md:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={() => setOpen(false)}
          className="border-b border-white/10 py-5 text-[30px] font-black uppercase tracking-[-1px] text-white transition-colors hover:text-red"
        >
          {link.label}
        </Link>
      ))}
      <Link
        href={`/${locale}/contact`}
        onClick={() => setOpen(false)}
        className="mt-8 inline-block self-start bg-red px-10 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-white"
      >
        {t('contact')}
      </Link>
    </div>
    </>
  );
}
