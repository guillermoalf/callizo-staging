import { cn } from "@/lib/utils";
import { Icon } from "./icon";

type Dir = "up" | "down" | "flat";

const DELTA: Record<Dir, { cls: string; icon: string }> = {
  up: { cls: "text-admin-green bg-admin-green-50", icon: "trending-up" },
  down: { cls: "text-admin-red bg-admin-red-50", icon: "trending-down" },
  flat: { cls: "text-admin-gray-600 bg-admin-gray-100", icon: "minus" },
};

export function Kpi({
  label,
  icon,
  value,
  delta,
  deltaDir = "flat",
  foot,
}: {
  label: string;
  icon: string;
  value: React.ReactNode;
  delta: string;
  deltaDir?: Dir;
  foot: string;
}) {
  const d = DELTA[deltaDir];
  return (
    <div className="flex min-h-[124px] flex-col gap-2.5 rounded-[12px] border-[0.5px] border-admin-border-strong bg-admin-card px-5 py-[18px]">
      <div className="flex items-center gap-1.5 text-[11.5px] font-medium uppercase tracking-[0.04em] text-admin-gray-500">
        <Icon name={icon} className="text-admin-gray-400" size={14} />
        {label}
      </div>
      <div className="text-[26px] font-semibold tracking-[-0.02em] tabular-nums">{value}</div>
      <div
        className={cn(
          "inline-flex w-fit items-center gap-1 rounded-full px-[7px] py-0.5 text-[11.5px] font-semibold",
          d.cls,
        )}
      >
        <Icon name={d.icon} size={13} />
        {delta}
      </div>
      <div className="mt-auto text-[11.5px] text-admin-gray-500">{foot}</div>
    </div>
  );
}
