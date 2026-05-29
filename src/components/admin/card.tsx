import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[12px] border-[0.5px] border-admin-border-strong bg-admin-card px-5 py-[18px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHead({
  title,
  meta,
  action,
}: {
  title: string;
  meta?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-3.5 flex items-center justify-between gap-3">
      <div>
        <h3 className="text-[13.5px] font-semibold tracking-[-0.005em]">{title}</h3>
        {meta && <div className="mt-0.5 text-[11.5px] text-admin-gray-500">{meta}</div>}
      </div>
      {action}
    </div>
  );
}
