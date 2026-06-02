"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";
import { AdminLogo } from "./admin-logo";
import { NAV_GROUPS, SECONDARY } from "./nav";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen flex-col overflow-y-auto border-r-[0.5px] border-admin-border-strong bg-white max-[900px]:hidden">
      <div className="border-b-[0.5px] border-admin-border px-[22px] pb-[18px] pt-[22px]">
        <AdminLogo />
        <div className="mt-2 text-[11px] tracking-[0.02em] text-admin-gray-500">
          Plataforma de gestión empresarial
        </div>
      </div>

      {NAV_GROUPS.map((group) => (
        <div key={group.label}>
          <div className="px-[22px] pb-2 pt-[18px] text-[10.5px] font-semibold uppercase tracking-[0.12em] text-admin-gray-400">
            {group.label}
          </div>
          <nav className="flex flex-col gap-0.5 px-3">
            {group.items.map((n) => {
              const active =
                n.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(n.href);
              return (
                <Link
                  key={n.id}
                  href={n.href}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-[9px] text-[13.5px] font-medium transition-colors",
                    active
                      ? "bg-admin-blue-50 text-admin-blue"
                      : "text-admin-gray-700 hover:bg-admin-gray-100",
                  )}
                >
                  <Icon name={n.icon} size={18} />
                  <span>{n.label}</span>
                  {n.badge && (
                    <span
                      className={cn(
                        "ml-auto rounded-full px-[7px] py-px text-[10.5px] font-semibold text-white",
                        n.badgeCls === "red"
                          ? "bg-admin-red"
                          : n.badgeCls === "amber"
                            ? "bg-admin-amber"
                            : "bg-admin-blue",
                      )}
                    >
                      {n.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      ))}

      <div className="px-[22px] pb-2 pt-[18px] text-[10.5px] font-semibold uppercase tracking-[0.12em] text-admin-gray-400">
        Sistema
      </div>
      <nav className="flex flex-col gap-0.5 px-3">
        {SECONDARY.map((n) => (
          <button
            key={n.label}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-[9px] text-left text-[13.5px] font-medium text-admin-gray-700 transition-colors hover:bg-admin-gray-100"
          >
            <Icon name={n.icon} size={18} />
            <span>{n.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto flex items-center justify-between border-t-[0.5px] border-admin-border px-[22px] py-4 text-[11.5px] text-admin-gray-500">
        <span className="flex items-center gap-2">
          <span className="size-[7px] rounded-full bg-admin-green" /> Producción
        </span>
        <span className="font-mono">v2.5.0</span>
      </div>
    </aside>
  );
}
