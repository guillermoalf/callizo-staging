export type InsightSeverity = "high" | "medium" | "info" | "positive";

export type Insight = {
  sev: InsightSeverity;
  icon: string;
  title: string;
  desc: string;
};

export const INSIGHTS: Insight[] = [
  { sev: "high", icon: "alert-triangle", title: "3 clientes en riesgo de churn", desc: "Arcor (PY), Industrias La Constancia (GT) y Empresas Polar (VE) llevan 45+ días sin actividad. ACV combinado de $920K." },
  { sev: "medium", icon: "package", title: "Stock bajo en SAB-0142", desc: "Inventario actual cubre 11 días al ritmo de pedidos. Sugerido: lote de producción de 4,200 kg para la planta MX." },
  { sev: "medium", icon: "trending-down", title: "Pipeline estancado — Negociación", desc: "9 oportunidades llevan > 21 días en Negociación. Valor expuesto: $620K. Revisar con equipo comercial." },
  { sev: "positive", icon: "trending-up", title: "Mascotas crece +18% MoM", desc: "Mercado EC y CO muestran demanda sostenida. Recomendado: priorizar PET-0018 en plan comercial Q3." },
  { sev: "info", icon: "search", title: "Nueva señal de mercado — Bebidas funcionales", desc: "Tendencia detectada en redes y registros sanitarios MX: ingredientes adaptógenos +34% YoY." },
];
