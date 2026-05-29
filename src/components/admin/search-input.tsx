import { cn } from "@/lib/utils";
import { Icon } from "./icon";

export function SearchInput({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <Icon
        name="search"
        size={15}
        className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-admin-gray-400"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border-[0.5px] border-admin-border-strong bg-white py-[7px] pl-8 pr-2.5 text-[13px] outline-none focus:border-admin-blue focus:ring-[3px] focus:ring-admin-blue/12"
      />
    </div>
  );
}
