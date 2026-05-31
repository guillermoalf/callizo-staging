"use client";

import { Button } from "@/components/ui/button";
import { Shell } from "@/components/ui/shell";
import { Arrow } from "@/components/icons";
import { useLanguage, type Lang, type Translations } from "@/contexts/language-context";

type NavKey = keyof Translations["nav"];

const NAV_LINKS: { href: string; key: NavKey }[] = [
  { href: "#catalog", key: "catalog" },
  { href: "#pets", key: "divisions" },
  { href: "#why", key: "capabilities" },
  { href: "#map", key: "locations" },
  { href: "#resources", key: "insights" },
  { href: "#contact", key: "contact" },
];

const LANGS: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export function SiteNav() {
  const { t, lang, setLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 border-b border-rule bg-[oklch(0.972_0.01_82/0.86)] backdrop-blur-[10px]">
      <Shell className="flex h-[72px] items-center justify-between">
        <div className="flex items-baseline gap-2 font-serif text-[26px] tracking-[-0.01em]">
          <span className="size-2 -translate-y-[3px] rounded-full bg-gold" />
          <span>Callizo</span>
          <span className="ml-1.5 -translate-y-1 font-mono text-[10px] tracking-[0.14em] text-ink-3">
            AROMAS · EST 1993
          </span>
        </div>
        <div className="hidden gap-[30px] lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2 text-sm font-medium text-ink hover:text-gold-deep"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-[22px]">
          <div className="hidden items-center rounded-full border border-rule bg-paper-2 font-mono text-[11px] tracking-[0.08em] sm:flex">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={
                  lang === code
                    ? "rounded-full bg-ink px-3 py-1.5 text-paper"
                    : "cursor-pointer px-3 py-1.5 text-ink-3 hover:text-ink"
                }
              >
                {label}
              </button>
            ))}
          </div>
          <Button href="#catalog" size="sm">
            {t.nav.cta} <Arrow size={12} />
          </Button>
        </div>
      </Shell>
    </nav>
  );
}
