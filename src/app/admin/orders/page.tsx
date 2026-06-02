"use client";

import { useState, useMemo } from "react";
import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { Btn } from "@/components/admin/btn";
import { ORDERS, ORDER_STATUS_META, type OrderStatus } from "@/content/admin/orders";
import { COUNTRIES } from "@/content/admin/countries";
import { fmtUSDFull } from "@/content/admin/format";

export default function OrdersPage() {
  const [statusFilter, setStatusFilter] = useState<"all" | OrderStatus>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return ORDERS.filter((o) => {
      if (statusFilter !== "all" && o.status !== statusFilter) return false;
      if (query) {
        const q = query.toLowerCase();
        if (![o.id, o.client, o.sku].join(" ").toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [statusFilter, query]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: ORDERS.length };
    for (const k of Object.keys(ORDER_STATUS_META)) {
      c[k] = ORDERS.filter((o) => o.status === k).length;
    }
    return c;
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Órdenes abiertas" icon="package"        value="78"  delta="Estable WoW"       deltaDir="flat" foot="Valor combinado: $1.84M" />
        <Kpi label="En tránsito"      icon="truck-delivery" value={String(counts.transit + 28)} delta="SLA 96%" deltaDir="up" foot="17 días promedio entrega" />
        <Kpi label="Retrasadas"       icon="alert-triangle" value="3"   delta="+1 vs ayer"        deltaDir="down" foot="Acción requerida — Alicorp PE" />
        <Kpi label="En quality hold"  icon="shield-half"    value="1"   delta="Arcor / FRG-0031"  deltaDir="flat" foot="Revisión sensorial en curso" />
      </div>

      <Card>
        <CardHead
          title="Seguimiento de órdenes"
          meta={`Mostrando ${filtered.length} órdenes · datos en vivo`}
          action={
            <div className="flex gap-2">
              <Btn>Refrescar</Btn>
              <Btn>Exportar</Btn>
              <Btn variant="primary">+ Nueva orden</Btn>
            </div>
          }
        />

        {/* Filter toolbar */}
        <div className="mb-3.5 flex flex-wrap items-center gap-2">
          <div className="relative w-[280px]">
            <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-admin-gray-400 text-[13px]">
              🔍
            </span>
            <input
              placeholder="Buscar nº orden, cliente o SKU…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border-[0.5px] border-admin-border-strong bg-white py-[7px] pl-8 pr-3 text-[13px] outline-none focus:border-admin-blue"
            />
          </div>
          <button
            onClick={() => setStatusFilter("all")}
            className={`inline-flex items-center gap-1.5 rounded-full border-[0.5px] px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
              statusFilter === "all"
                ? "border-admin-ink bg-admin-ink text-white"
                : "border-admin-border-strong bg-white text-admin-gray-700 hover:bg-admin-gray-50"
            }`}
          >
            Todas <span className="opacity-60">{counts.all}</span>
          </button>
          {(Object.entries(ORDER_STATUS_META) as [OrderStatus, typeof ORDER_STATUS_META[OrderStatus]][]).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setStatusFilter(k)}
              className={`inline-flex items-center gap-1.5 rounded-full border-[0.5px] px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                statusFilter === k
                  ? "border-admin-ink bg-admin-ink text-white"
                  : "border-admin-border-strong bg-white text-admin-gray-700 hover:bg-admin-gray-50"
              }`}
            >
              {v.label} <span className="opacity-60">{counts[k]}</span>
            </button>
          ))}
        </div>

        <Table>
          <thead>
            <tr>
              <Th>Nº orden</Th>
              <Th>Cliente</Th>
              <Th>País</Th>
              <Th>SKU</Th>
              <Th>Valor</Th>
              <Th>Entrega</Th>
              <Th>Estado</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => {
              const country = COUNTRIES.find((c) => c.code === o.country);
              const st = ORDER_STATUS_META[o.status];
              return (
                <tr key={o.id}>
                  <Td>
                    <span className="font-mono text-[12px] font-semibold">{o.id}</span>
                  </Td>
                  <Td className="font-semibold">{o.client}</Td>
                  <Td>
                    <span className="mr-1.5">{country?.flag}</span>
                    <span className="text-admin-gray-500">{country?.code}</span>
                  </Td>
                  <Td>
                    <span className="font-mono text-[12px]">{o.sku}</span>
                  </Td>
                  <Td className="font-semibold tabular-nums">{fmtUSDFull(o.value)}</Td>
                  <Td className="text-admin-gray-500">{o.deliver}</Td>
                  <Td>
                    <Pill tone={st.cls as PillTone}>{st.label}</Pill>
                  </Td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <Td colSpan={7} className="py-8 text-center text-admin-gray-500">
                  Sin órdenes para los filtros aplicados.
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
