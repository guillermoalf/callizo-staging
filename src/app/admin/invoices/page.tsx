import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { Btn } from "@/components/admin/btn";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { INVOICES, AGING_BUCKETS, INVOICE_STATUS_MAP } from "@/content/admin/invoices";
import { COUNTRIES } from "@/content/admin/countries";
import { fmtUSDFull } from "@/content/admin/format";

const maxAging = Math.max(...AGING_BUCKETS.map((b) => b.value));

export default function InvoicesPage() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Total por cobrar"      icon="receipt"         value="$312K"  delta="32 facturas abiertas"   deltaDir="flat" foot="Cuentas por cobrar (AR)" />
        <Kpi label="Vencido +30 días"      icon="alert-triangle"  value="$187K"  delta="60% del total AR"       deltaDir="down" foot="Requiere gestión activa" />
        <Kpi label="Días promedio de pago" icon="clock"           value="38 d"   delta="–4 d vs trimestre"      deltaDir="up"   foot="DSO · término neto 30" />
        <Kpi label="Vencen esta semana"    icon="calendar-due"    value="4"      delta="$96K combinados"        deltaDir="flat" foot="Enviar recordatorios" />
      </div>

      <div className="grid grid-cols-2 gap-4 max-[1100px]:grid-cols-1">
        {/* Aging */}
        <Card>
          <CardHead title="Antigüedad de saldos (aging)" meta="Distribución de cuentas por cobrar" />
          <div className="mt-1.5">
            {AGING_BUCKETS.map((b) => (
              <div key={b.label} className="border-b-[0.5px] border-admin-border py-3 last:border-b-0">
                <div className="mb-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-medium">
                    <span className="inline-block size-[9px] rounded-sm" style={{ background: b.color }} />
                    {b.label}
                  </div>
                  <span className="font-semibold tabular-nums text-[13px]">{fmtUSDFull(b.value)}</span>
                </div>
                <div className="h-[6px] overflow-hidden rounded-full bg-admin-gray-100">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(b.value / maxAging) * 100}%`, background: b.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Month summary */}
        <Card>
          <CardHead title="Resumen del mes" meta="Mayo 2026" />
          <div className="flex flex-col">
            {[
              { icon: "✅", color: "text-admin-green", label: "Cobrado este mes",        value: "$248K" },
              { icon: "📄", color: "text-admin-blue",  label: "Emitido este mes",         value: "$294K" },
              { icon: "🚩", color: "text-admin-red",   label: "Cliente más moroso",       value: "Arcor" },
              { icon: "🔔", color: "text-admin-amber", label: "Recordatorios enviados",   value: "14" },
              { icon: "⚖",  color: "text-admin-gray-500", label: "Facturas en disputa",  value: "1 · $42K" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between border-b-[0.5px] border-admin-border py-3 last:border-b-0">
                <span className={`flex items-center gap-2 text-[12.5px] text-admin-gray-600`}>
                  <span>{row.icon}</span>
                  {row.label}
                </span>
                <span className="text-[14px] font-bold tabular-nums">{row.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Invoices table */}
      <Card>
        <CardHead
          title="Facturas"
          meta={`${INVOICES.length} facturas · datos en vivo`}
          action={
            <div className="flex gap-2">
              <Btn>Exportar</Btn>
              <Btn variant="primary">+ Nueva factura</Btn>
            </div>
          }
        />
        <Table>
          <thead>
            <tr>
              <Th>Nº factura</Th>
              <Th>Cliente</Th>
              <Th>País</Th>
              <Th>Emisión</Th>
              <Th>Vencimiento</Th>
              <Th>Monto</Th>
              <Th>Días vencido</Th>
              <Th>Estado</Th>
              <Th>Acciones</Th>
            </tr>
          </thead>
          <tbody>
            {INVOICES.map((inv) => {
              const country = COUNTRIES.find((c) => c.code === inv.country);
              const statusInfo = INVOICE_STATUS_MAP[inv.status];
              return (
                <tr key={inv.id}>
                  <Td>
                    <span className="font-mono text-[12px] font-semibold">{inv.id}</span>
                  </Td>
                  <Td className="font-semibold">{inv.client}</Td>
                  <Td>
                    <span className="mr-1.5">{country?.flag}</span>
                    <span className="text-admin-gray-500">{country?.code}</span>
                  </Td>
                  <Td className="text-admin-gray-500">{inv.issue}</Td>
                  <Td className="text-admin-gray-500">{inv.due}</Td>
                  <Td className="font-semibold tabular-nums">{fmtUSDFull(inv.amount)}</Td>
                  <Td>
                    {inv.overdue > 0 ? (
                      <span
                        className={`font-bold tabular-nums ${inv.overdue > 30 ? "text-admin-red" : "text-admin-amber"}`}
                      >
                        {inv.overdue} d
                      </span>
                    ) : (
                      <span className="text-admin-gray-400">—</span>
                    )}
                  </Td>
                  <Td>
                    <Pill tone={statusInfo.cls as PillTone}>{statusInfo.label}</Pill>
                  </Td>
                  <Td>
                    <div className="flex gap-1.5">
                      {inv.status === "overdue" && (
                        <Btn className="py-1 px-2 text-[11.5px]">Escalar</Btn>
                      )}
                      {(inv.status === "pending" || inv.status === "overdue") && (
                        <Btn className="py-1 px-2 text-[11.5px]">Recordatorio</Btn>
                      )}
                      {inv.status !== "paid" && (
                        <Btn variant="primary" className="py-1 px-2 text-[11.5px]">Marcar pagada</Btn>
                      )}
                      {inv.status === "paid" && (
                        <span className="text-[12px] text-admin-gray-400">—</span>
                      )}
                    </div>
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
