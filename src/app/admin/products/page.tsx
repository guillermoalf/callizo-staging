import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { AiCallout } from "@/components/admin/ai-callout";
import { Btn } from "@/components/admin/btn";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { Avatar } from "@/components/admin/avatar";
import { PRODUCTS, RD_PROJECTS, PHASE_NAMES } from "@/content/admin/products";

const DIVISION_COLORS: Record<string, string> = {
  Sabores:      "#378add",
  Fragancias:   "#7f77dd",
  Mascotas:     "#1d9e75",
  Zootecnia:    "#ba7517",
  Ingredientes: "#54544e",
};

const STATUS_TONE: Record<string, PillTone> = {
  "En producción":    "green",
  "Estable":          "blue",
  "Reabastecimiento": "amber",
};

const maxReqs = Math.max(...PRODUCTS.map((p) => p.reqs));

export default function ProductsPage() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="SKUs activos"        icon="package"  value="214"                   delta="+9 nuevos YTD"    deltaDir="up"   foot="5 divisiones" />
        <Kpi label="Proyectos I+D activos" icon="flask"  value={String(RD_PROJECTS.length)} delta="2 en validación"  deltaDir="flat" foot="Próximo lanzamiento: Jun 2026" />
        <Kpi label="Time-to-Market"      icon="clock"    value="142 d"                 delta="–11% vs 2025"     deltaDir="up"   foot="Concepto → Validación" />
        <Kpi label="Tasa de éxito I+D"   icon="target"   value="73%"                   delta="+6 pp YoY"        deltaDir="up"   foot="Proyectos que llegan a producción" />
      </div>

      <Card>
        <CardHead
          title="Top SKUs por demanda"
          meta="Solicitudes recibidas en los últimos 30 días"
          action={
            <div className="flex gap-2">
              <Btn>División</Btn>
              <Btn>Exportar</Btn>
            </div>
          }
        />
        <Table>
          <thead>
            <tr>
              <Th>Código SKU</Th>
              <Th>Producto</Th>
              <Th>División</Th>
              <Th>Solicitudes / mes</Th>
              <Th>Estado de producción</Th>
              <Th />
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.code}>
                <Td>
                  <span className="font-mono text-[12px] font-semibold">{p.code}</span>
                </Td>
                <Td>{p.name}</Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="inline-block size-2 rounded-full"
                      style={{ background: DIVISION_COLORS[p.division] ?? "#999" }}
                    />
                    {p.division}
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center gap-2.5">
                    <span className="min-w-[28px] font-semibold tabular-nums">{p.reqs}</span>
                    <div className="h-[5px] w-[110px] overflow-hidden rounded-full bg-admin-gray-100">
                      <div
                        className="h-full rounded-full bg-admin-blue"
                        style={{ width: `${(p.reqs / maxReqs) * 100}%` }}
                      />
                    </div>
                  </div>
                </Td>
                <Td>
                  <Pill tone={STATUS_TONE[p.status] ?? "gray"}>{p.status}</Pill>
                </Td>
                <Td>
                  <button className="inline-flex size-7 items-center justify-center rounded-lg border-[0.5px] border-admin-border bg-white text-admin-gray-500 hover:bg-admin-gray-50">
                    •••
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <AiCallout title="Insight I+D · Callizo IA">
        &ldquo;Las solicitudes de SAB-0142 (Vainilla natural Premium) crecieron 31% en 60 días.
        Considere mover RD-2026-027 (mango maracuyá) a Validación temprana para anticipar
        demanda Q4 en MX y CO.&rdquo;
      </AiCallout>

      <Card>
        <CardHead
          title="Proyectos de I+D activos"
          meta={`${RD_PROJECTS.length} proyectos · fase actual y fecha objetivo`}
          action={<Btn variant="primary">+ Nuevo proyecto</Btn>}
        />
        <Table>
          <thead>
            <tr>
              <Th>Código</Th>
              <Th>Proyecto</Th>
              <Th>División</Th>
              <Th>Fase</Th>
              <Th>Fecha objetivo</Th>
              <Th>Líder</Th>
            </tr>
          </thead>
          <tbody>
            {RD_PROJECTS.map((p) => (
              <tr key={p.code}>
                <Td>
                  <span className="font-mono text-[12px] font-semibold">{p.code}</span>
                </Td>
                <Td>{p.name}</Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="inline-block size-2 rounded-full"
                      style={{ background: DIVISION_COLORS[p.division] ?? "#999" }}
                    />
                    {p.division}
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-[3px]">
                      {[1, 2, 3, 4].map((i) => (
                        <span
                          key={i}
                          className="block h-1 w-3.5 rounded-sm"
                          style={{
                            background: i <= p.phase ? "#7f77dd" : "#ececea",
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-[12px] text-admin-gray-700">
                      {PHASE_NAMES[p.phase - 1]}
                    </span>
                  </div>
                </Td>
                <Td className="text-admin-gray-500">{p.target}</Td>
                <Td>
                  <div className="flex items-center gap-2">
                    <Avatar
                      initials={p.lead.split(" ").map((w) => w[0]).join("")}
                      size={28}
                      className="bg-admin-purple"
                    />
                    <span>{p.lead}</span>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
