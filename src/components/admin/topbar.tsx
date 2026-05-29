"use client";

import { usePathname } from "next/navigation";
import { Icon } from "./icon";
import { VIEW_META } from "./nav";

export function AdminTopbar() {
  const pathname = usePathname();
  const meta = VIEW_META[pathname] ?? VIEW_META["/admin"];
  const today = "Miércoles, 27 de mayo de 2026";

  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 border-b-[0.5px] border-admin-border-strong bg-white/70 px-7 py-3.5 backdrop-blur-[8px]">
      <div>
        <h1 className="text-[17px] font-semibold tracking-[-0.01em]">{meta.title}</h1>
        <div className="mt-0.5 text-[12px] text-admin-gray-500">{meta.crumb}</div>
      </div>

      <div className="flex-1" />

      <div className="relative w-[280px] max-[700px]:hidden">
        <Icon
          name="search"
          size={15}
          className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-admin-gray-400"
        />
        <input
          placeholder="Buscar clientes, SKU, órdenes…"
          className="w-full rounded-lg border-[0.5px] border-admin-border-strong bg-white py-[7px] pl-8 pr-2.5 text-[13px] outline-none focus:border-admin-blue focus:ring-[3px] focus:ring-admin-blue/12"
        />
      </div>

      <span className="inline-flex items-center gap-1.5 rounded-full border-[0.5px] border-admin-border-strong bg-white px-3 py-1.5 text-[12.5px] font-medium text-admin-gray-700 max-[700px]:hidden">
        <Icon name="calendar" size={14} /> {today}
      </span>

      <button
        title="Notificaciones"
        className="relative inline-flex size-[34px] items-center justify-center rounded-lg border-[0.5px] border-admin-border bg-white text-admin-gray-600 hover:bg-admin-gray-100"
      >
        <Icon name="bell" size={17} />
        <span className="absolute right-[5px] top-[5px] flex size-[14px] items-center justify-center rounded-full border-[1.5px] border-white bg-admin-red text-[9px] font-bold text-white">
          4
        </span>
      </button>

      <button
        title="Comandos"
        className="inline-flex size-[34px] items-center justify-center rounded-lg border-[0.5px] border-admin-border bg-white text-admin-gray-600 hover:bg-admin-gray-100 max-[700px]:hidden"
      >
        <Icon name="command" size={17} />
      </button>

      <div className="flex cursor-pointer items-center gap-2.5 rounded-full border-[0.5px] border-admin-border bg-white py-1 pl-1 pr-2.5">
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-admin-ink text-[11px] font-semibold text-white">
          MR
        </span>
        <div className="leading-[1.15] max-[700px]:hidden">
          <div className="text-[12.5px] font-semibold">María Robles</div>
          <div className="text-[10.5px] text-admin-gray-500">Directora General</div>
        </div>
      </div>
    </header>
  );
}
