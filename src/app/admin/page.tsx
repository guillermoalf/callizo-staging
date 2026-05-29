import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { AiCallout } from "@/components/admin/ai-callout";
import { Btn } from "@/components/admin/btn";
import { RevenueChart } from "@/components/admin/revenue-chart";
import { DivisionDonut } from "@/components/admin/division-donut";
import { TopCountries } from "@/components/admin/top-countries";
import { ActivityFeed } from "@/components/admin/activity-feed";

export default function DashboardPage() {
  return (
    <>
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Revenue YTD" icon="cash" value="$9.66M" delta="+12.4% vs 2025" deltaDir="up" foot="Proyección cierre 2026: $11.8M" />
        <Kpi label="Clientes activos" icon="users" value="342" delta="+18 nuevos QTD" deltaDir="up" foot="14 en proceso de renovación" />
        <Kpi label="Órdenes abiertas" icon="package" value="78" delta="3 con retraso" deltaDir="down" foot="Tiempo medio entrega: 17 días" />
        <Kpi label="Valor pipeline" icon="chart-funnel" value="$4.04M" delta="+8.1% MoM" deltaDir="up" foot="89 oportunidades activas" />
      </div>

      {/* AI insight */}
      <AiCallout title="Insight del día · Callizo IA" action={<Btn>Ver análisis</Btn>}>
        “El crecimiento sostenido en Mascotas (+18% MoM) en Ecuador y Colombia sugiere acelerar
        el lanzamiento de PET-0018 en Q3. Considere reasignar capacidad de planta MX desde
        Ingredientes (–4% YoY).”
      </AiCallout>

      {/* Charts */}
      <div className="grid grid-cols-[2fr_1fr] gap-4 max-[1100px]:grid-cols-1">
        <Card>
          <CardHead
            title="Revenue mensual por división"
            meta="Enero – Octubre 2026 · cifras en USD"
            action={
              <div className="flex gap-1.5">
                <span className="rounded-full bg-admin-ink px-3 py-1.5 text-[12.5px] font-medium text-white">2026</span>
                <span className="rounded-full border-[0.5px] border-admin-border-strong bg-white px-3 py-1.5 text-[12.5px] font-medium text-admin-gray-700">2025</span>
                <span className="rounded-full border-[0.5px] border-admin-border-strong bg-white px-3 py-1.5 text-[12.5px] font-medium text-admin-gray-700">YoY</span>
              </div>
            }
          />
          <RevenueChart />
        </Card>
        <Card>
          <CardHead title="Distribución por división" meta="YTD" />
          <DivisionDonut />
        </Card>
      </div>

      {/* Countries + activity */}
      <div className="grid grid-cols-[2fr_1fr] gap-4 max-[1100px]:grid-cols-1">
        <Card>
          <CardHead title="Top países por revenue" meta="10 países · LATAM + USA" />
          <TopCountries />
        </Card>
        <Card>
          <CardHead title="Actividad reciente" meta={<a href="#" className="text-admin-blue">Ver todo</a>} />
          <ActivityFeed />
        </Card>
      </div>
    </>
  );
}
