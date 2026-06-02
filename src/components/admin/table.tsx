import * as React from "react";
import { cn } from "@/lib/utils";

/** Styled data table matching the reference `.tbl` look. */
export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[13px] [&_tbody_tr:hover_td]:bg-admin-gray-50 [&_tbody_tr:last-child_td]:border-b-0">
        {children}
      </table>
    </div>
  );
}

export function Th({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <th
      className={cn(
        "whitespace-nowrap border-b-[0.5px] border-admin-border bg-admin-gray-50 px-3.5 py-2.5 text-left text-[11.5px] font-medium uppercase tracking-[0.04em] text-admin-gray-500",
        className,
      )}
    >
      {children}
    </th>
  );
}

export function Td({
  className,
  colSpan,
  onClick,
  children,
}: {
  className?: string;
  colSpan?: number;
  onClick?: React.MouseEventHandler<HTMLTableCellElement>;
  children?: React.ReactNode;
}) {
  return (
    <td
      colSpan={colSpan}
      onClick={onClick}
      className={cn(
        "border-b-[0.5px] border-admin-border px-3.5 py-3 align-middle",
        className,
      )}
    >
      {children}
    </td>
  );
}
