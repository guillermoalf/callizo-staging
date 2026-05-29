export type PipelineStage = {
  stage: number;
  name: string;
  count: number;
  value: number;
};

export type Opportunity = {
  client: string;
  division: string;
  value: number;
  stage: string;
  stalled: boolean;
};

export const PIPELINE: PipelineStage[] = [
  { stage: 1, name: "Prospecto", count: 38, value: 1_240_000 },
  { stage: 2, name: "Propuesta enviada", count: 22, value: 980_000 },
  { stage: 3, name: "Muestra / Test", count: 14, value: 760_000 },
  { stage: 4, name: "Negociación", count: 9, value: 620_000 },
  { stage: 5, name: "Cierre", count: 6, value: 440_000 },
];

export const OPPORTUNITIES: Opportunity[] = [
  { client: "Nestlé Latam", division: "Sabores", value: 340_000, stage: "Negociación", stalled: false },
  { client: "Alicorp", division: "Ingredientes", value: 280_000, stage: "Muestra / Test", stalled: true },
  { client: "Grupo Nutresa", division: "Fragancias", value: 215_000, stage: "Propuesta enviada", stalled: false },
  { client: "Arcor", division: "Mascotas", value: 198_000, stage: "Negociación", stalled: true },
  { client: "Postobón", division: "Sabores", value: 165_000, stage: "Cierre", stalled: false },
  { client: "Empresas Polar", division: "Sabores", value: 142_000, stage: "Prospecto", stalled: false },
  { client: "Pollos Bilbao", division: "Zootecnia", value: 120_000, stage: "Muestra / Test", stalled: false },
  { client: "Quala", division: "Fragancias", value: 110_000, stage: "Propuesta enviada", stalled: true },
  { client: "Industrias Mafam", division: "Mascotas", value: 92_000, stage: "Cierre", stalled: false },
  { client: "Florida Bebidas", division: "Sabores", value: 78_000, stage: "Prospecto", stalled: false },
];
