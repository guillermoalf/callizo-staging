"use client";

import { Shell } from "@/components/ui/shell";
import { CERTIFICATIONS } from "@/content/site";
import { useLanguage } from "@/contexts/language-context";

const LOCATIONS_COLUMN = [
  "Heredia, CR · HQ",
  "Alajuela, CR",
  "Guadalajara, MX",
  "Lima, PE",
  "Itá, PY",
  "Palestine, TX · US",
  "Bogotá, CO",
];

const CONNECT_ITEMS = ["LinkedIn", "Instagram", "Newsletter", "info@callizoaromas.com"];

const FOOTER_CITIES =
  "HEREDIA · ALAJUELA · GUADALAJARA · LIMA · ITÁ · PALESTINE TX · BOGOTÁ";

export function SiteFooter() {
  const { t } = useLanguage();
  const f = t.footer;

  const columns = [
    {
      heading: f.col_divisions,
      items: [f.div_flavors, f.div_fragrances, f.div_pets, f.div_zoo, f.div_ingredients],
    },
    {
      heading: f.col_locations,
      items: LOCATIONS_COLUMN,
    },
    {
      heading: f.col_company,
      items: [f.co_about, f.co_craft, f.co_sustainability, f.co_careers, f.co_press],
    },
    {
      heading: f.col_connect,
      items: CONNECT_ITEMS,
    },
  ];

  return (
    <footer className="border-t border-rule bg-paper pb-8 pt-20">
      <Shell>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2 font-serif text-[44px]">
              <span className="size-2 -translate-y-[3px] rounded-full bg-gold" />
              <span>Callizo</span>
            </div>
            <div className="mt-3 font-serif text-[18px] italic text-gold-deep">
              {f.tagline}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h5 className="mb-[18px] font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                {col.heading}
              </h5>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="cursor-pointer text-sm text-ink hover:text-gold-deep">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-7 font-mono text-[11px] tracking-[0.08em] text-ink-3">
          <span>{f.copyright}</span>
          <div className="flex flex-wrap items-center gap-[22px]">
            {CERTIFICATIONS.map((c) => (
              <span key={c} className="font-serif text-sm italic text-ink-2">
                {c}
              </span>
            ))}
          </div>
          <span>{FOOTER_CITIES}</span>
        </div>
      </Shell>
    </footer>
  );
}
