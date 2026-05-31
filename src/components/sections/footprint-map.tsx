"use client";

import { useState } from "react";
import { Section, Shell } from "@/components/ui/shell";
import { SectionHead } from "@/components/ui/section-head";
import { LOCATIONS, HQ_ID } from "@/content/locations";
import { useLanguage } from "@/contexts/language-context";

/* Hand-authored, recognizable (simplified) Americas silhouette in a 600×720
   viewBox — North America tapering through Mexico, a thin Central-American
   isthmus, and South America bulging north-east then tapering to the southern
   cone. Not geographically precise; tuned to read clearly at this scale. */
const NORTH_AMERICA =
  "M150 120 L210 95 L290 88 L360 92 L420 110 L430 150 L415 195 L398 230 L388 252 L394 286 L384 290 L376 258 L350 256 L320 260 L300 268 L304 300 L312 336 L326 354 L314 362 L292 340 L276 308 L258 278 L235 268 L205 258 L185 235 L170 195 L158 155 Z";

const CENTRAL_AMERICA =
  "M312 360 L330 378 L352 396 L368 408 L362 414 L346 400 L326 382 L306 364 Z";

const SOUTH_AMERICA =
  "M358 412 L400 414 L440 424 L466 446 L482 472 L492 516 L482 562 L458 610 L432 648 L406 682 L388 700 L378 662 L366 606 L352 546 L338 488 L330 450 L336 426 L346 414 Z";

const CARIBBEAN = [
  { cx: 408, cy: 390, r: 5 },
  { cx: 428, cy: 400, r: 4 },
  { cx: 448, cy: 410, r: 3 },
];

export function FootprintMap() {
  const { t } = useLanguage();
  const m = t.map;
  const [active, setActive] = useState(HQ_ID);
  const hq = LOCATIONS.find((l) => l.id === HQ_ID)!;
  const cur = LOCATIONS.find((l) => l.id === active) ?? hq;

  return (
    <Section id="map" tone="dark" anno="§ 05 / FOOTPRINT">
      <Shell>
        <SectionHead
          tone="dark"
          num={m.section_label}
          eyebrow={m.eyebrow}
          title={
            <>
              {m.title_1}
              <br />
              <em>{m.title_2}</em>
            </>
          }
          side={m.side}
        />

        <div className="grid border border-[oklch(0.32_0.01_60)] lg:grid-cols-[1.4fr_1fr]">
          {/* —— map panel —— */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[oklch(0.245_0.012_60)]">
            <div className="map-grid" />
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 600 720"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* landmass */}
              <g fill="oklch(0.275 0.012 60)" stroke="oklch(0.40 0.012 60)" strokeWidth={1}>
                <path d={NORTH_AMERICA} />
                <path d={CENTRAL_AMERICA} />
                <path d={SOUTH_AMERICA} />
                {CARIBBEAN.map((c, i) => (
                  <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
                ))}
              </g>

              {/* HQ → plant connectors */}
              {LOCATIONS.filter((l) => l.kind === "plant" && l.id !== HQ_ID).map((l) => (
                <line
                  key={`line-${l.id}`}
                  x1={hq.x}
                  y1={hq.y}
                  x2={l.x}
                  y2={l.y}
                  stroke="oklch(0.74 0.13 75 / 0.25)"
                  strokeWidth={1}
                  strokeDasharray="2 4"
                />
              ))}

              {/* pins */}
              {LOCATIONS.map((l, i) => (
                <g
                  key={l.id}
                  className={`pin ${active === l.id ? "active" : ""}`}
                  transform={`translate(${l.x} ${l.y})`}
                  onMouseEnter={() => setActive(l.id)}
                  onClick={() => setActive(l.id)}
                >
                  {l.kind === "plant" && (
                    <circle className="pin-pulse" r={6} style={{ animationDelay: `${i * 0.3}s` }} />
                  )}
                  <circle className="pin-ring" r={16} />
                  {l.kind === "plant" ? (
                    <circle className="pin-core" r={5} />
                  ) : (
                    <circle r={4} fill="none" stroke="var(--gold)" strokeWidth={1.5} />
                  )}
                  {active === l.id && (
                    <text className="map-label" x={14} y={4}>
                      {l.city.toUpperCase()}
                    </text>
                  )}
                </g>
              ))}

              {/* compass / scale */}
              <g
                transform="translate(40 660)"
                fill="oklch(0.55 0.01 65)"
                style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}
              >
                <text>N ↑</text>
                <text y={20}>SCALE · SCHEMATIC</text>
              </g>
            </svg>
          </div>

          {/* —— side panel —— */}
          <div className="flex flex-col overflow-hidden bg-[oklch(0.205_0.012_60)] px-9 pb-7 pt-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[oklch(0.65_0.01_65)]">
              {m.selected_location}
            </span>
            <div className="mt-1 font-serif text-[28px] leading-[1.05] text-[oklch(0.94_0.02_75)]">
              {cur.city}, {cur.country}
            </div>
            <div className="text-[13px] text-[oklch(0.65_0.01_65)]">{cur.type}</div>
            {cur.address && (
              <div className="mt-1 line-clamp-2 text-[12px] leading-[1.4] text-[oklch(0.55_0.01_65)]">
                {cur.address}
              </div>
            )}
            {cur.phone && (
              <div className="mt-1 font-mono text-[11px] tracking-[0.04em] text-[oklch(0.62_0.01_65)]">
                {cur.phone}
              </div>
            )}

            <div className="mt-6 min-h-0 flex-1 overflow-y-auto">
              {LOCATIONS.map((l) => {
                const on = active === l.id;
                return (
                  <div
                    key={l.id}
                    className="grid cursor-pointer grid-cols-[18px_1fr_auto] items-center gap-[14px] border-b border-[oklch(0.30_0.01_60)] py-[14px]"
                    onMouseEnter={() => setActive(l.id)}
                    onClick={() => setActive(l.id)}
                  >
                    <span
                      className={`size-2 rounded-full ${
                        l.kind === "office" ? "border border-gold bg-transparent" : "bg-gold"
                      }`}
                    />
                    <div>
                      <div
                        className={`font-serif text-[19px] transition-colors ${
                          on ? "text-gold" : "text-[oklch(0.94_0.02_75)]"
                        }`}
                      >
                        {l.city}
                      </div>
                      <span className="mt-0.5 block font-mono text-[10px] tracking-[0.08em] text-[oklch(0.62_0.01_65)]">
                        {l.type}
                      </span>
                    </div>
                    <div className="font-mono text-[11px] tracking-[0.08em] text-[oklch(0.62_0.01_65)]">
                      {l.countryCode}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-[18px] flex gap-6 font-mono text-[11px] tracking-[0.06em] text-[oklch(0.62_0.01_65)]">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold" /> {m.plant}
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full border border-gold" /> {m.sales_office}
              </span>
            </div>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
