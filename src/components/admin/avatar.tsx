import { cn } from "@/lib/utils";

/** Initials avatar — solid ink circle with white initials. */
export function Avatar({
  initials,
  size = 30,
  className,
}: {
  initials: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex flex-shrink-0 items-center justify-center rounded-full bg-admin-ink font-semibold uppercase text-white",
        className,
      )}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.38) }}
    >
      {initials}
    </span>
  );
}
