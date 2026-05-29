export type ActivityColor = "green" | "blue" | "red" | "purple" | "amber";

export type ActivityItem = {
  /** Icon key resolved via src/components/admin/icon.tsx. */
  icon: string;
  color: ActivityColor;
  title: string;
  meta: string;
};

export const ACTIVITY: ActivityItem[] = [
  { icon: "file-check", color: "green", title: "Contrato firmado — Grupo Nutresa", meta: "Sabores · $680K ACV · hace 14 min" },
  { icon: "flask", color: "blue", title: "Muestra enviada a Alicorp", meta: "ING-0011 · Lima, PE · hace 1 h" },
  { icon: "alert-triangle", color: "red", title: "Riesgo de churn detectado — Arcor", meta: "Sin contacto hace 47 días · hace 2 h" },
  { icon: "package", color: "purple", title: "Orden OC-26-04812 confirmada", meta: "Nestlé Latam · $86,400 · hace 3 h" },
  { icon: "bulb", color: "amber", title: "Proyecto RD-2026-014 pasó a Validación", meta: "Sabor café cold-brew · hace 5 h" },
  { icon: "refresh", color: "blue", title: "Renovación próxima — Postobón", meta: "Vence en 23 días · hace 6 h" },
  { icon: "file-check", color: "green", title: "Contrato firmado — Florida Bebidas", meta: "Sabores · $460K ACV · ayer" },
];
