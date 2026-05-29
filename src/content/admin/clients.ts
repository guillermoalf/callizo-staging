export type ClientStatus = "active" | "renewal" | "risk";

export type Client = {
  name: string;
  short: string;
  country: string;
  division: string;
  acv: number;
  last: string;
  status: ClientStatus;
};

export const CLIENTS: Client[] = [
  { name: "Nestlé Latam", short: "NL", country: "MX", division: "Sabores", acv: 1_240_000, last: "12 May 2026", status: "active" },
  { name: "Grupo Bimbo", short: "GB", country: "MX", division: "Sabores", acv: 980_000, last: "08 May 2026", status: "active" },
  { name: "Alicorp", short: "AL", country: "PE", division: "Ingredientes", acv: 720_000, last: "22 Abr 2026", status: "renewal" },
  { name: "Grupo Nutresa", short: "GN", country: "CO", division: "Sabores", acv: 680_000, last: "15 May 2026", status: "active" },
  { name: "Arcor", short: "AR", country: "PY", division: "Fragancias", acv: 540_000, last: "02 Mar 2026", status: "risk" },
  { name: "Florida Bebidas", short: "FB", country: "CR", division: "Sabores", acv: 460_000, last: "10 May 2026", status: "active" },
  { name: "Industrias Mafam", short: "IM", country: "EC", division: "Mascotas", acv: 390_000, last: "28 Abr 2026", status: "active" },
  { name: "Postobón", short: "PB", country: "CO", division: "Sabores", acv: 380_000, last: "01 May 2026", status: "renewal" },
  { name: "Grupo Pantaleón", short: "GP", country: "GT", division: "Zootecnia", acv: 320_000, last: "18 Abr 2026", status: "active" },
  { name: "Backus & Johnston", short: "BJ", country: "PE", division: "Fragancias", acv: 295_000, last: "30 Abr 2026", status: "active" },
  { name: "Industrias La Constancia", short: "IC", country: "GT", division: "Sabores", acv: 240_000, last: "12 Feb 2026", status: "risk" },
  { name: "Quala", short: "QA", country: "CO", division: "Fragancias", acv: 210_000, last: "05 May 2026", status: "active" },
  { name: "Empresas Carozzi", short: "EC", country: "PE", division: "Ingredientes", acv: 180_000, last: "26 Abr 2026", status: "renewal" },
  { name: "Pollos Bilbao", short: "PB", country: "BO", division: "Zootecnia", acv: 160_000, last: "14 Abr 2026", status: "active" },
  { name: "Grupo Mondelez MX", short: "GM", country: "MX", division: "Sabores", acv: 140_000, last: "08 May 2026", status: "active" },
];
