import * as React from "react";
import { cn } from "@/lib/utils";

export function Btn({
  variant = "default",
  className,
  children,
  ...props
}: {
  variant?: "default" | "primary" | "dark";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-lg border-[0.5px] px-[13px] py-[7px] text-[12.5px] font-semibold transition-colors",
        variant === "default" &&
          "border-admin-border-strong bg-white text-admin-gray-700 hover:bg-admin-gray-50",
        variant === "primary" &&
          "border-admin-blue bg-admin-blue text-white hover:bg-[#2d77c4]",
        variant === "dark" && "border-admin-ink bg-admin-ink text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
