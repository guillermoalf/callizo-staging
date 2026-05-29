export type Automation = {
  name: string;
  meta: string;
  on: boolean;
  icon: string;
};

export const AUTOMATIONS: Automation[] = [
  { name: "Alerta de cliente sin contacto 30+ días", meta: "Diaria · 06:00 GMT-6 · 7 alertas enviadas", on: true, icon: "clock-pause" },
  { name: "Reporte semanal de órdenes con retraso", meta: "Lunes 08:00 · enviado a Operaciones", on: true, icon: "truck-delivery" },
  { name: "Resumen ejecutivo mensual automático", meta: "Día 1 de cada mes · CEO + Directores", on: true, icon: "report-analytics" },
  { name: "Detección de oportunidades estancadas", meta: "Cada 48h · disparo automático Slack", on: true, icon: "target" },
  { name: "Forecast de demanda por división", meta: "Modelo refrescado cada 24h", on: false, icon: "chart-arrows" },
  { name: "Score de renovación de contrato", meta: "Recalculado al cierre de cada orden", on: true, icon: "refresh-dot" },
  { name: "Monitor de menciones en prensa LATAM", meta: "Web scraping cada 6h · 12 fuentes", on: false, icon: "news" },
];
