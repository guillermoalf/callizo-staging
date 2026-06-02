export type ClientStatus = "active" | "renewal" | "risk";

export type Client = {
  name: string;
  short: string;
  country: string;
  division: string;
  acv: number;
  last: string;
  status: ClientStatus;
  /** Risk score 0–100. Computed daily; stored here for the demo. */
  risk: number;
};

export const CLIENTS: Client[] = [
  { name: "Nestlé Latam",              short: "NL", country: "MX", division: "Sabores",      acv: 1_240_000, last: "12 May 2026", status: "active",  risk: 12 },
  { name: "Grupo Bimbo",               short: "GB", country: "MX", division: "Sabores",      acv:   980_000, last: "08 May 2026", status: "active",  risk: 18 },
  { name: "Alicorp",                   short: "AL", country: "PE", division: "Ingredientes", acv:   720_000, last: "22 Abr 2026", status: "renewal", risk: 58 },
  { name: "Grupo Nutresa",             short: "GN", country: "CO", division: "Sabores",      acv:   680_000, last: "15 May 2026", status: "active",  risk:  9 },
  { name: "Arcor",                     short: "AR", country: "PY", division: "Fragancias",   acv:   540_000, last: "02 Mar 2026", status: "risk",    risk: 84 },
  { name: "Florida Bebidas",           short: "FB", country: "CR", division: "Sabores",      acv:   460_000, last: "10 May 2026", status: "active",  risk: 22 },
  { name: "Industrias Mafam",          short: "IM", country: "EC", division: "Mascotas",     acv:   390_000, last: "28 Abr 2026", status: "active",  risk: 34 },
  { name: "Postobón",                  short: "PB", country: "CO", division: "Sabores",      acv:   380_000, last: "01 May 2026", status: "renewal", risk: 47 },
  { name: "Grupo Pantaleón",           short: "GP", country: "GT", division: "Zootecnia",    acv:   320_000, last: "18 Abr 2026", status: "active",  risk: 28 },
  { name: "Backus & Johnston",         short: "BJ", country: "PE", division: "Fragancias",   acv:   295_000, last: "30 Abr 2026", status: "active",  risk: 19 },
  { name: "Industrias La Constancia",  short: "IC", country: "GT", division: "Sabores",      acv:   240_000, last: "12 Feb 2026", status: "risk",    risk: 91 },
  { name: "Quala",                     short: "QA", country: "CO", division: "Fragancias",   acv:   210_000, last: "05 May 2026", status: "active",  risk: 15 },
  { name: "Empresas Carozzi",          short: "EC", country: "PE", division: "Ingredientes", acv:   180_000, last: "26 Abr 2026", status: "renewal", risk: 52 },
  { name: "Pollos Bilbao",             short: "PB", country: "BO", division: "Zootecnia",    acv:   160_000, last: "14 Abr 2026", status: "active",  risk: 31 },
  { name: "Grupo Mondelez MX",         short: "GM", country: "MX", division: "Sabores",      acv:   140_000, last: "08 May 2026", status: "active",  risk: 24 },
];
