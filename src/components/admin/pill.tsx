import { cn } from "@/lib/utils";

export type PillTone = "green" | "amber" | "red" | "blue" | "purple" | "gray";

const TONE: Record<PillTone, string> = {
  green: "text-admin-green bg-admin-green-50",
  amber: "text-admin-amber bg-admin-amber-50",
  red: "text-admin-red bg-admin-red-50",
  blue: "text-admin-blue bg-admin-blue-50",
  purple: "text-admin-purple bg-admin-purple-50",
  gray: "text-admin-gray-600 bg-admin-gray-100",
};

export function Pill({
  tone = "gray",
  dot = true,
  children,
}: {
  tone?: PillTone;
  dot?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[5px] whitespace-nowrap rounded-full px-[9px] py-0.5 text-[11.5px] font-semibold tracking-[0.01em]",
        TONE[tone],
      )}
    >
      {dot && <span className="size-[5px] rounded-full bg-current" />}
      {children}
    </span>
  );
}
