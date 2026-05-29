import { cn } from "@/lib/utils";
import { Icon } from "./icon";

/** Filter chip with an active (inverted) state. */
export function Chip({
  active = false,
  icon,
  count,
  onClick,
  children,
}: {
  active?: boolean;
  icon?: string;
  count?: number;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-full border-[0.5px] px-3 py-1.5 text-[12.5px] font-medium transition-colors",
        active
          ? "border-admin-ink bg-admin-ink text-white"
          : "border-admin-border-strong bg-white text-admin-gray-700 hover:bg-admin-gray-50",
      )}
    >
      {icon && <Icon name={icon} size={14} />}
      {children}
      {count !== undefined && <span className="opacity-60">{count}</span>}
    </button>
  );
}
