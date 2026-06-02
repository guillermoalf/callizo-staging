"use client";

import { useState } from "react";
import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { Btn } from "@/components/admin/btn";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { SpendBarChart, SpendDonutChart } from "@/components/admin/history-charts";
import {
  PURCHASE_HISTORY,
  HISTORY_CLIENTS,
  type HistoryClientName,
} from "@/content/admin/history";
import { ORDER_STATUS_META } from "@/content/admin/orders";
import { fmtUSD, fmtUSDFull } from "@/content/admin/format";

type Period = "3M" | "6M" | "12M";

export default function HistoryPage() {
  const [client, setClient] = useState<HistoryClientName>("Nestlé Latam");
  const [period, setPeriod] = useState<Period>("12M");

  const rec = PURCHASE_HISTORY[client];
  const monthly = rec.monthly[period];

  return (
    <>
      {/* Client + period selectors */}
      <Card>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <div className="mb-1 text-[11.5px] font-semibold uppercase tracking-[0.04em] text-admin-gray-500">
              Cliente
            </div>
            <select
              value={client}
              onChange={(e) => setClient(e.target.value as HistoryClientName)}
              className="rounded-lg border-[0.5px] border-admin-border-strong bg-white px-3 py-[7px] text-[13px] font-semibold text-admin-ink outline-none focus:border-admin-blue"
            >
              {HISTORY_CLIENTS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="ml-auto">
            <div className="mb-1 text-[11.5px] font-semibold uppercase tracking-[0.04em] text-admin-gray-500">
              Período
            </div>
            <div className="flex overflow-hidden rounded-lg border-[0.5px] border-admin-border-strong">
              {(["3M", "6M", "12M"] as Period[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`border-none px-3.5 py-[7px] text-[12.5px] font-semibold ${
                    period === p
                      ? "bg-admin-ink text-white"
                      : "bg-white text-admin-gray-600 hover:bg-admin-gray-50"
                  } [&+button]:border-l-[0.5px] [&+button]:border-admin-border`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Total en el período" icon="cash"    value={fmtUSD(rec.kpi.total)} delta="+14% vs anterior" deltaDir="up"   foot={client} />
        <Kpi label="Valor medio de orden" icon="receipt" value={fmtUSD(rec.kpi.avg)}  delta="estable"          deltaDir="flat" foot="AOV del período" />
        <Kpi label="Número de órdenes"   icon="package" value={String(rec.kpi.count)} delta="+1 vs anterior"   deltaDir="up"   foot={`En los últimos ${period}`} />
        <Kpi label="División principal"  icon="award"   value={rec.kpi.top}           delta="68% del gasto"    deltaDir="up"   foot="Mayor participación" />
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-4 max-[1100px]:grid-cols-1">
        <Card>
          <CardHead title="Gasto mensual" meta={`USD · ${period}`} />
          <SpendBarChart data={monthly} period={period} />
        </Card>
        <Card>
          <CardHead title="Gasto por división" meta={period} />
          <SpendDonutChart split={rec.divisionSplit} />
        </Card>
      </div>

      <Card>
        <CardHead
          title="Historial de órdenes"
          meta={`${rec.orders.length} órdenes · ${client}`}
          action={<Btn>Exportar</Btn>}
        />
        <Table>
          <thead>
            <tr>
              <Th>Nº orden</Th>
              <Th>SKU</Th>
              <Th>Cantidad</Th>
              <Th>Precio unitario</Th>
              <Th>Total</Th>
              <Th>Entrega</Th>
              <Th>Estado</Th>
            </tr>
          </thead>
          <tbody>
            {rec.orders.map((o) => {
              const st = ORDER_STATUS_META[o.status];
              return (
                <tr key={o.id}>
                  <Td><span className="font-mono text-[12px] font-semibold">{o.id}</span></Td>
                  <Td><span className="font-mono text-[12px]">{o.sku}</span></Td>
                  <Td className="text-admin-gray-500">{o.qty}</Td>
                  <Td className="font-mono text-[12px] text-admin-gray-500">{o.unit}</Td>
                  <Td className="font-semibold tabular-nums">{fmtUSDFull(o.total)}</Td>
                  <Td className="text-admin-gray-500">{o.deliver}</Td>
                  <Td>
                    {st ? (
                      <Pill tone={st.cls as PillTone}>{st.label}</Pill>
                    ) : (
                      <Pill tone="gray">{o.status}</Pill>
                    )}
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
