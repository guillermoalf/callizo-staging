import { Button } from "@/components/ui/button";
import { Shell } from "@/components/ui/shell";
import { Arrow } from "@/components/icons";
import { NAV_LINKS, LANGUAGES } from "@/content/site";

// STUB — filled out in the section pass.
export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-rule bg-[oklch(0.972_0.01_82/0.86)] backdrop-blur-[10px]">
      <Shell className="flex h-[72px] items-center justify-between">
        <div className="flex items-baseline gap-2 font-serif text-[26px] tracking-[-0.01em]">
          <span className="size-2 -translate-y-[3px] rounded-full bg-gold" />
          <span>Callizo</span>
          <span className="ml-1.5 -translate-y-1 font-mono text-[10px] tracking-[0.14em] text-ink-3">
            AROMAS · EST 1995
          </span>
        </div>
        <div className="hidden gap-[30px] lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2 text-sm font-medium text-ink hover:text-gold-deep"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-[22px]">
          <div className="hidden items-center gap-0.5 font-mono text-[11px] tracking-[0.08em] sm:flex">
            {LANGUAGES.map((l, i) => (
              <span
                key={l}
                className={
                  i === 0
                    ? "rounded bg-paper-2 px-2 py-1.5 text-ink"
                    : "cursor-pointer px-2 py-1.5 text-ink-3"
                }
              >
                {l}
              </span>
            ))}
          </div>
          <Button href="#contact" size="sm">
            Request a sample <Arrow size={12} />
          </Button>
        </div>
      </Shell>
    </nav>
  );
}
