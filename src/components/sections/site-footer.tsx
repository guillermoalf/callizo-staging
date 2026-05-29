import { Shell } from "@/components/ui/shell";
import { FOOTER_COLUMNS, FOOTER_TAGLINE, FOOTER_CITIES, CERTIFICATIONS } from "@/content/site";

// STUB — filled out in the section pass.
export function SiteFooter() {
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
              {FOOTER_TAGLINE}
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
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
          <span>© 1995–2026 CALLIZO AROMAS · ALL RIGHTS RESERVED</span>
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
