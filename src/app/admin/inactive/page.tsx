import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { AiCallout } from "@/components/admin/ai-callout";
import { Btn } from "@/components/admin/btn";
import { Table, Th, Td } from "@/components/admin/table";
import { Avatar } from "@/components/admin/avatar";
import { INACTIVE, INACTIVITY_BUCKETS, BUCKET_COLORS } from "@/content/admin/inactive";
import { COUNTRIES } from "@/content/admin/countries";
import { fmtUSDFull } from "@/content/admin/format";
import { InactiveRankChart } from "@/components/admin/inactive-rank-chart";

const sorted = [...INACTIVE].sort((a, b) => b.days - a.days);
const maxBucket = Math.max(...INACTIVITY_BUCKETS.map((b) => b.count));

export default function InactivePage() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Clientes inactivos"     icon="user-off"         value="18"   delta="+4 vs mes anterior" deltaDir="down" foot="Sin orden en 60+ días" />
        <Kpi label="Valor en riesgo"         icon="cash-off"         value="$1.84M" delta="19% del ACV total"  deltaDir="down" foot="Ingreso anual combinado" />
        <Kpi label="Días inactivos (prom.)"  icon="clock-exclamation" value="74"  delta="mediana 81 d"       deltaDir="flat" foot="Desde la última orden" />
        <Kpi label="Tasa de re-enganche"     icon="rotate-2"         value="43%"  delta="+7 pp QoQ"          deltaDir="up"   foot="Última campaña: 3 de 7" />
      </div>

      <div className="grid grid-cols-2 gap-4 max-[1100px]:grid-cols-1">
        <Card>
          <CardHead title="Top 10 inactivos por valor anual" meta="Priorización por ingreso en riesgo" />
          <InactiveRankChart />
        </Card>
        <Card>
          <CardHead title="Distribución por antigüedad" meta="Clientes por rango de inactividad" />
          <div className="mt-1.5">
            {INACTIVITY_BUCKETS.map((b) => (
              <div key={b.range} className="border-b-[0.5px] border-admin-border py-3 last:border-b-0">
                <div className="mb-1.5 flex justify-between">
                  <span className="text-[13px] font-medium">{b.label}</span>
                  <span className="text-[12.5px] font-bold">{b.count} clientes</span>
                </div>
                <div className="h-[6px] overflow-hidden rounded-full bg-admin-gray-100">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(b.count / maxBucket) * 100}%`,
                      background: BUCKET_COLORS[b.range],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <CardHead
          title="Clientes inactivos"
          meta="Ordenados por días sin actividad"
          action={
            <div className="flex gap-2">
              <Btn>Exportar</Btn>
              <Btn variant="primary">Campaña de re-enganche</Btn>
            </div>
          }
        />
        <Table>
          <thead>
            <tr>
              <Th>Cliente</Th>
              <Th>País</Th>
              <Th>División</Th>
              <Th>Última orden</Th>
              <Th>Días inactivo</Th>
              <Th>Valor anual</Th>
              <Th>Rep. asignado</Th>
              <Th />
            </tr>
          </thead>
          <tbody>
            {sorted.map((c, i) => {
              const country = COUNTRIES.find((x) => x.code === c.country);
              return (
                <tr key={i}>
                  <Td>
                    <div className="flex items-center gap-2.5">
                      <Avatar initials={c.short} />
                      <span className="font-semibold">{c.name}</span>
                    </div>
                  </Td>
                  <Td>
                    <span className="mr-1.5">{country?.flag}</span>
                    <span className="text-admin-gray-500">{country?.code}</span>
                  </Td>
                  <Td>{c.division}</Td>
                  <Td className="text-admin-gray-500">{c.last}</Td>
                  <Td>
                    <span className="font-bold tabular-nums text-admin-red">{c.days} d</span>
                  </Td>
                  <Td className="font-semibold tabular-nums">{fmtUSDFull(c.acv)}</Td>
                  <Td className="text-admin-gray-500">{c.rep}</Td>
                  <Td>
                    <Btn className="py-[5px] px-2.5 text-[11.5px]">Re-enganchar</Btn>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>

      <AiCallout title="Insight IA · Re-enganche prioritario" action={<Btn variant="primary">Generar plan</Btn>}>
        &ldquo;Estos 5 clientes representan $474K en ingresos anuales en riesgo. La última campaña
        recuperó 3 de 7 clientes inactivos. Priorizar Arcor y Snacks &amp; Co. por volumen.&rdquo;
      </AiCallout>
    </>
  );
}
