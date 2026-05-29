import { COUNTRIES } from "@/content/admin/countries";
import { fmtUSD } from "@/content/admin/format";

export function TopCountries() {
  const rows = COUNTRIES.slice(0, 8);
  const max = Math.max(...rows.map((c) => c.value));
  return (
    <div>
      {rows.map((c) => (
        <div key={c.code} className="grid grid-cols-[24px_1fr_auto] items-center gap-3 py-[9px]">
          <span className="text-base" aria-hidden>{c.flag}</span>
          <div className="flex flex-col gap-[3px]">
            <span className="text-[12.5px] font-medium">{c.name}</span>
            <div className="h-1.5 overflow-hidden rounded-full bg-admin-gray-100">
              <div
                className="h-full rounded-full bg-admin-blue"
                style={{ width: (c.value / max) * 100 + "%" }}
              />
            </div>
          </div>
          <span className="text-[12px] font-semibold tabular-nums">{fmtUSD(c.value)}</span>
        </div>
      ))}
    </div>
  );
}
