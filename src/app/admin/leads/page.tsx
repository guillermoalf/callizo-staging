import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { Btn } from "@/components/admin/btn";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { LEADS, LEAD_STAGES, SOURCE_COLOR, STAGE_COLOR, type LeadStage } from "@/content/admin/leads";
import { COUNTRIES } from "@/content/admin/countries";

export default function LeadsPage() {
  const byStage = (stage: LeadStage) => LEADS.filter((l) => l.stage === stage);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Total leads"       icon="user-plus"  value="47"       delta="+12 este mes"    deltaDir="up"   foot="Pipeline de prospección" />
        <Kpi label="Tasa de conversión" icon="percentage" value="29%"     delta="+4 pp QoQ"       deltaDir="up"   foot="Lead → cliente" />
        <Kpi label="Días para convertir" icon="clock"    value="43"       delta="–6 d vs 2025"    deltaDir="up"   foot="Promedio del ciclo" />
        <Kpi label="Fuente principal"  icon="award"      value="Referidos" delta="38% de leads"   deltaDir="up"   foot="Mejor tasa de cierre" />
      </div>

      {/* Kanban board */}
      <Card>
        <CardHead
          title="Tablero de leads"
          meta="6 etapas · arrastra para mover (demo)"
          action={<Btn variant="primary">+ Agregar lead</Btn>}
        />
        <div className="overflow-x-auto">
          <div className="grid min-w-[900px] grid-cols-6 gap-3">
            {LEAD_STAGES.map((stage) => {
              const cards = byStage(stage);
              const headerColor =
                stage === "Convertido" ? "text-admin-green" :
                stage === "Perdido" ? "text-admin-red" :
                "text-admin-gray-800";
              return (
                <div
                  key={stage}
                  className="rounded-[10px] border-[0.5px] border-admin-border bg-admin-gray-50 p-2.5"
                >
                  <div className="mb-2.5 flex items-center justify-between px-0.5">
                    <span className={`text-[12px] font-bold ${headerColor}`}>{stage}</span>
                    <span className="rounded-full border-[0.5px] border-admin-border bg-white px-1.5 py-px text-[11px] font-semibold text-admin-gray-500">
                      {cards.length}
                    </span>
                  </div>
                  {cards.map((l, i) => {
                    const country = COUNTRIES.find((c) => c.code === l.country);
                    const border =
                      stage === "Convertido" ? "border-l-[3px] border-l-admin-green" :
                      stage === "Perdido" ? "border-l-[3px] border-l-admin-red" : "";
                    return (
                      <div
                        key={i}
                        className={`mb-2 cursor-grab rounded-[9px] border-[0.5px] border-admin-border-strong bg-white p-2.5 last:mb-0 ${border}`}
                      >
                        <div className="mb-1 text-[12.5px] font-semibold">{l.company}</div>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-admin-gray-500">
                          <span>{country?.flag}</span>
                          <span>{l.division}</span>
                          <span>·</span>
                          <span>{l.source}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Leads table */}
      <Card>
        <CardHead
          title="Todos los leads"
          meta={`${LEADS.length} leads · vista de lista`}
          action={<Btn>Filtrar</Btn>}
        />
        <Table>
          <thead>
            <tr>
              <Th>Empresa</Th>
              <Th>Contacto</Th>
              <Th>País</Th>
              <Th>División de interés</Th>
              <Th>Fuente</Th>
              <Th>Rep. asignado</Th>
              <Th>Fecha alta</Th>
              <Th>Etapa</Th>
            </tr>
          </thead>
          <tbody>
            {LEADS.map((l, i) => {
              const country = COUNTRIES.find((c) => c.code === l.country);
              return (
                <tr key={i}>
                  <Td className="font-semibold">{l.company}</Td>
                  <Td className="text-admin-gray-500">{l.contact}</Td>
                  <Td>
                    <span className="mr-1.5">{country?.flag}</span>
                    <span className="text-admin-gray-500">{country?.code}</span>
                  </Td>
                  <Td>{l.division}</Td>
                  <Td>
                    <Pill tone={SOURCE_COLOR[l.source] as PillTone}>{l.source}</Pill>
                  </Td>
                  <Td className="text-admin-gray-500">{l.rep}</Td>
                  <Td className="text-admin-gray-500">{l.added}</Td>
                  <Td>
                    <Pill tone={STAGE_COLOR[l.stage] as PillTone}>{l.stage}</Pill>
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
