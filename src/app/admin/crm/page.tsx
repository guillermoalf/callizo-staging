import { Kpi } from "@/components/admin/kpi";
import { ClientsTable } from "@/components/admin/clients-table";

export default function CrmPage() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Total clientes" icon="users" value="342" delta="+18 QTD" deltaDir="up" foot="10 países · 5 divisiones" />
        <Kpi label="Activos" icon="circle-check" value="298" delta="87% del total" deltaDir="flat" foot="Last order < 90 días" />
        <Kpi label="Por renovar" icon="refresh" value="31" delta="Q3 prioridad" deltaDir="up" foot="$2.4M ACV en juego" />
        <Kpi label="En riesgo" icon="alert-triangle" value="13" delta="+4 vs mes anterior" deltaDir="down" foot="Sin contacto 45+ días" />
      </div>
      <ClientsTable />
    </>
  );
}
