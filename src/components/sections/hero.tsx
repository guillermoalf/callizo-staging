import { Button } from "@/components/ui/button";
import { Shell } from "@/components/ui/shell";
import { Placeholder } from "@/components/ui/placeholder";
import { Arrow } from "@/components/icons";
import { HERO_STATS } from "@/content/site";

// STUB — filled out in the section pass.
export function Hero() {
  return (
    <section className="relative pb-[92px] pt-16">
      <Shell>
        <div className="grid items-end gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              Somos Alquimistas Sensoriales
            </div>
            <h1 className="mt-[18px] font-serif text-[clamp(56px,9vw,104px)] font-normal leading-[0.98] tracking-[-0.012em] [&_em]:italic [&_em]:text-gold-deep">
              We craft<br />
              the <em>sensations</em><br />
              of flavor, scent<br />
              &amp; color.
            </h1>
            <p className="mt-7 max-w-[44ch] text-[18px] leading-[1.5] text-ink-2">
              For thirty years, a family-run partner to CPG manufacturers across
              the Americas — building custom sensory systems with the rigor of a
              global supplier and the responsiveness of a regional one.
            </p>
            <div className="mt-9 flex gap-3">
              <Button href="#contact">
                Request a sample <Arrow />
              </Button>
              <Button href="#contact" variant="ghost">
                Talk to our team
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5]">
            <Placeholder
              tone="dark"
              className="absolute inset-0 size-full"
              label="image · macro · passion fruit pulp"
              meta={
                <>
                  COMP-0142 · MARACUYÁ
                  <br />
                  <b>NOTE</b> top — green, sulfurous, juicy
                  <br />
                  <b>ORIGIN</b> Cartago Valley, CR
                  <br />
                  <b>BATCH</b> 2026-04-17
                </>
              }
            />
          </div>
        </div>

        <div className="mt-[88px] grid grid-cols-2 border-b border-t border-rule lg:grid-cols-4">
          {HERO_STATS.map(([n, l]) => (
            <div key={n} className="border-r border-rule py-7 pr-6 last:border-r-0">
              <div className="font-serif text-[56px] leading-none">{n}</div>
              <div className="mt-2.5 max-w-[22ch] text-[13px] text-ink-2">{l}</div>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
