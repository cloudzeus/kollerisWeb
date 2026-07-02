'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (next: string) => {
    setIsOpen(false);
    if (next === locale) return;

    // pathname always starts with the current locale segment (localePrefix: 'always')
    const segments = pathname.split('/');
    if (routing.locales.includes(segments[1] as (typeof routing.locales)[number])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join('/') || `/${next}`);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-semibold uppercase tracking-[1px] text-white transition-colors hover:text-red"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {locale === 'el' ? 'ΕΛ' : 'EN'}
        <span className={`text-[9px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-3 min-w-[130px] overflow-hidden rounded border border-white/10 bg-ink shadow-xl">
          <button
            type="button"
            onClick={() => switchLanguage('el')}
            className={`block w-full px-4 py-2.5 text-left text-[13px] font-semibold uppercase tracking-[1px] transition-colors ${
              locale === 'el' ? 'bg-red text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
            }`}
          >
            Ελληνικά
          </button>
          <button
            type="button"
            onClick={() => switchLanguage('en')}
            className={`block w-full px-4 py-2.5 text-left text-[13px] font-semibold uppercase tracking-[1px] transition-colors ${
              locale === 'en' ? 'bg-red text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
