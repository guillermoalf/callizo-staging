export type Division = {
  name: string;
  value: number;
  /** Brand hex used in charts/legends. */
  color: string;
  pct: number;
  /** Monthly revenue in thousands USD, Ene–Oct. */
  monthly: number[];
};

export const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct"];

export const DIVISIONS: Division[] = [
  { name: "Sabores",      value: 4_250_000, color: "#378add", pct: 44, monthly: [340, 365, 392, 378, 410, 425, 460, 472, 495, 511] },
  { name: "Fragancias",   value: 2_480_000, color: "#7f77dd", pct: 25, monthly: [220, 232, 245, 258, 248, 265, 278, 290, 302, 310] },
  { name: "Mascotas",     value: 1_430_000, color: "#1d9e75", pct: 15, monthly: [128, 135, 144, 152, 159, 168, 175, 182, 190, 198] },
  { name: "Zootecnia",    value: 1_120_000, color: "#ba7517", pct: 12, monthly: [95, 102, 110, 118, 124, 131, 138, 145, 150, 156] },
  { name: "Ingredientes", value:   380_000, color: "#54544e", pct:  4, monthly: [60, 64, 68, 71, 75, 78, 82, 86, 89, 92] },
];

/** Total revenue YTD across divisions ($9.66M, shown in the donut center). */
export const REVENUE_YTD_LABEL = "$9.66M";
