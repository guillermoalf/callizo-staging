"use client";

import { useState, useMemo } from "react";
import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { AiCallout } from "@/components/admin/ai-callout";
import { Btn } from "@/components/admin/btn";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { QUOTES, QUOTE_STATUS_MAP } from "@/content/admin/quotes";
import { fmtUSDFull } from "@/content/admin/format";

export default function QuotesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return QUOTES;
    const q = query.toLowerCase();
    return QUOTES.filter((x) =>
      [x.id, x.client, ...x.skus].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Cotizaciones activas"    icon="file-invoice"        value="24"  delta="+5 esta semana"    deltaDir="up"   foot="$1.2M en valor cotizado" />
        <Kpi label="Tasa de conversión"      icon="percentage"           value="41%" delta="+3 pp QoQ"         deltaDir="up"   foot="Enviadas → Aceptadas" />
        <Kpi label="Expiran en < 7 días"     icon="clock-exclamation"    value="5"   delta="$218K en juego"    deltaDir="flat" foot="Renovar o cerrar" />
        <Kpi label="Sin respuesta +14 días"  icon="message-off"          value="7"   delta="$380K expuestos"   deltaDir="down" foot="Requiere seguimiento" />
      </div>

      <AiCallout title="Insight IA · Seguimiento de cotizaciones" action={<Btn variant="primary">Enviar recordatorios</Btn>}>
        &ldquo;7 cotizaciones llevan más de 14 días sin respuesta, representando $380K. Las cotizaciones
        aceptadas han sido movidas automáticamente a etapa Negociación en el pipeline.&rdquo;
      </AiCallout>

      <Card>
        <CardHead
          title="Cotizaciones"
          meta={`Mostrando ${filtered.length} de ${QUOTES.length}`}
          action={
            <div className="flex gap-2">
              <div className="relative w-[230px]">
                <input
                  placeholder="Buscar nº, cliente o SKU…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-lg border-[0.5px] border-admin-border-strong bg-white py-[7px] pl-3 pr-3 text-[13px] outline-none focus:border-admin-blue"
                />
              </div>
              <Btn variant="primary">+ Nueva cotización</Btn>
            </div>
          }
        />
        <Table>
          <thead>
            <tr>
              <Th>Nº cotización</Th>
              <Th>Cliente</Th>
              <Th>Productos</Th>
              <Th>Valor</Th>
              <Th>Emisión</Th>
              <Th>Vencimiento</Th>
              <Th>Rep.</Th>
              <Th>Estado</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((q) => {
              const statusInfo = QUOTE_STATUS_MAP[q.status];
              const rowBg = q.flag === "noresponse" ? "bg-admin-red-50/40" : "";
              return (
                <tr key={q.id} className={rowBg}>
                  <Td>
                    <span className="font-mono text-[12px] font-semibold">{q.id}</span>
                  </Td>
                  <Td className="font-semibold">{q.client}</Td>
                  <Td>
                    <div className="flex flex-wrap gap-1">
                      {q.skus.map((s) => (
                        <span
                          key={s}
                          className="rounded bg-admin-gray-100 px-1.5 py-px font-mono text-[11.5px]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </Td>
                  <Td className="font-semibold tabular-nums">{fmtUSDFull(q.value)}</Td>
                  <Td className="text-admin-gray-500">{q.issue}</Td>
                  <Td>
                    {q.flag === "expiring" ? (
                      <span className="font-semibold text-admin-amber">⚠ {q.expiry}</span>
                    ) : (
                      <span className="text-admin-gray-500">{q.expiry}</span>
                    )}
                  </Td>
                  <Td className="text-admin-gray-500">{q.rep}</Td>
                  <Td>
                    <div className="flex items-center gap-1.5">
                      <Pill tone={statusInfo.cls as PillTone}>{statusInfo.label}</Pill>
                      {q.flag === "noresponse" && (
                        <Pill tone="red" dot={false}>✉ —</Pill>
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
