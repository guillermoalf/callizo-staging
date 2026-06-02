import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { AiCallout } from "@/components/admin/ai-callout";
import { Btn } from "@/components/admin/btn";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { Avatar } from "@/components/admin/avatar";
import { PIPELINE, OPPORTUNITIES } from "@/content/admin/pipeline";
import { fmtUSD, fmtUSDFull } from "@/content/admin/format";

const STAGE_TONE: Record<string, PillTone> = {
  "Prospecto":          "gray",
  "Propuesta enviada":  "blue",
  "Muestra / Test":     "purple",
  "Negociación":        "amber",
  "Cierre":             "green",
};

const FUNNEL_COLORS = ["#4f9fe2", "#378add", "#2c75c0", "#225f9d", "#1a4a7d"];

export default function PipelinePage() {
  const totalValue = PIPELINE.reduce((s, x) => s + x.value, 0);
  const totalCount = PIPELINE.reduce((s, x) => s + x.count, 0);
  const stalled = OPPORTUNITIES.filter((o) => o.stalled);
  const stalledValue = stalled.reduce((s, o) => s + o.value, 0);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Pipeline total"    icon="chart-funnel"  value={fmtUSD(totalValue)} delta="+8.1% MoM"    deltaDir="up"   foot={`${totalCount} oportunidades activas`} />
        <Kpi label="Cierre estimado Q3" icon="target"        value="$1.62M"            delta="40% conversión" deltaDir="up"   foot="Modelo: probabilidad ponderada" />
        <Kpi label="Estancadas"         icon="clock-pause"   value={String(stalled.length)} delta="+2 esta semana" deltaDir="down" foot={`${fmtUSD(stalledValue)} expuestos`} />
        <Kpi label="Ciclo medio"        icon="clock"         value="48 d"              delta="vs 51d 2025"    deltaDir="flat" foot="Prospecto → Cierre" />
      </div>

      {/* Funnel */}
      <Card>
        <CardHead
          title="Embudo de ventas"
          meta="5 etapas · vista por valor y conteo"
          action={
            <div className="flex gap-1.5">
              <span className="rounded-full bg-admin-ink px-3 py-1.5 text-[12.5px] font-medium text-white">Todas divisiones</span>
              <span className="rounded-full border-[0.5px] border-admin-border-strong bg-white px-3 py-1.5 text-[12.5px] font-medium text-admin-gray-700">Q3 2026</span>
            </div>
          }
        />
        <div className="grid grid-cols-5 gap-2.5 max-[1100px]:grid-cols-2">
          {PIPELINE.map((s, i) => (
            <div
              key={s.stage}
              className="flex flex-col gap-1 overflow-hidden rounded-[10px] px-3.5 pb-4 pt-3.5 text-white"
              style={{ background: FUNNEL_COLORS[i] }}
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] opacity-80">
                Etapa {s.stage}
              </span>
              <span className="text-[14px] font-semibold">{s.name}</span>
              <span className="mt-1.5 text-[22px] font-bold tabular-nums tracking-tight">
                {fmtUSD(s.value)}
              </span>
              <span className="text-[11.5px] opacity-85">{s.count} oportunidades</span>
            </div>
          ))}
        </div>
      </Card>

      <AiCallout
        title="Alerta IA · Oportunidades estancadas"
        action={<Btn variant="primary">Ver plan de acción</Btn>}
      >
        &ldquo;{stalled.length} oportunidades llevan más de 21 días sin avance, con un valor combinado de {fmtUSD(stalledValue)}. Las más críticas son Alicorp (Muestra/Test, día 34) y Arcor (Negociación, día 28). Recomendado: programar llamada ejecutiva esta semana.&rdquo;
      </AiCallout>

      {/* Opportunities table */}
      <Card>
        <CardHead
          title="Oportunidades activas"
          meta="Ordenadas por valor · top 10"
          action={
            <div className="flex gap-2">
              <Btn><span className="flex items-center gap-1.5">Filtrar</span></Btn>
              <Btn variant="primary"><span className="flex items-center gap-1.5">+ Nueva oportunidad</span></Btn>
            </div>
          }
        />
        <Table>
          <thead>
            <tr>
              <Th>Cliente</Th>
              <Th>División</Th>
              <Th>Valor</Th>
              <Th>Etapa</Th>
              <Th>Días en etapa</Th>
              <Th>Estado</Th>
            </tr>
          </thead>
          <tbody>
            {OPPORTUNITIES.map((o, i) => (
              <tr key={i}>
                <Td>
                  <div className="flex items-center gap-2.5">
                    <Avatar initials={o.client.split(" ").map((w) => w[0]).join("").slice(0, 2)} />
                    <span className="font-semibold">{o.client}</span>
                  </div>
                </Td>
                <Td>{o.division}</Td>
                <Td className="font-semibold tabular-nums">{fmtUSDFull(o.value)}</Td>
                <Td>
                  <Pill tone={STAGE_TONE[o.stage] ?? "gray"}>{o.stage}</Pill>
                </Td>
                <Td className="text-admin-gray-500">{8 + i * 3} d</Td>
                <Td>
                  <Pill tone={o.stalled ? "red" : "green"}>
                    {o.stalled ? "Estancada" : "En movimiento"}
                  </Pill>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
