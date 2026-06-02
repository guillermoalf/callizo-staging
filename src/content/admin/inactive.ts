export type InactiveClient = {
  name: string;
  short: string;
  country: string;
  division: string;
  last: string;
  days: number;
  acv: number;
  rep: string;
  bucket: string;
};

export type InactivityBucket = {
  label: string;
  range: string;
  count: number;
};

export const INACTIVE: InactiveClient[] = [
  { name: "Arcor",                     short: "AR", country: "PY", division: "Fragancias",   last: "02 Mar 2026", days: 87,  acv: 540_000, rep: "R. Soto",     bucket: "76-90" },
  { name: "Industrias La Constancia",  short: "IC", country: "GT", division: "Sabores",      last: "12 Feb 2026", days: 105, acv: 240_000, rep: "P. Méndez",   bucket: "91-110" },
  { name: "Snacks & Co.",              short: "SC", country: "MX", division: "Sabores",      last: "20 Feb 2026", days: 97,  acv: 318_000, rep: "A. Vega",     bucket: "91-110" },
  { name: "Distribuidora Andina",      short: "DA", country: "BO", division: "Zootecnia",    last: "08 Mar 2026", days: 81,  acv: 142_000, rep: "C. Quispe",   bucket: "76-90" },
  { name: "Lácteos del Valle",         short: "LV", country: "EC", division: "Ingredientes", last: "15 Mar 2026", days: 74,  acv: 196_000, rep: "L. Ruiz",     bucket: "60-75" },
  { name: "Frigorífico Sur",           short: "FS", country: "PY", division: "Zootecnia",    last: "28 Feb 2026", days: 89,  acv: 128_000, rep: "R. Soto",     bucket: "76-90" },
  { name: "Aromas del Caribe",         short: "AC", country: "VE", division: "Fragancias",   last: "10 Ene 2026", days: 138, acv:  92_000, rep: "M. Ortiz",    bucket: "110+" },
  { name: "Golosinas Tica",            short: "GT", country: "CR", division: "Sabores",      last: "18 Mar 2026", days: 71,  acv: 154_000, rep: "A. Vega",     bucket: "60-75" },
  { name: "Petfoods Andinos",          short: "PA", country: "PE", division: "Mascotas",     last: "05 Mar 2026", days: 84,  acv: 110_000, rep: "P. Méndez",   bucket: "76-90" },
  { name: "Conservas Pacífico",        short: "CP", country: "EC", division: "Ingredientes", last: "22 Mar 2026", days: 67,  acv: 138_000, rep: "L. Ruiz",     bucket: "60-75" },
  { name: "Embutidos Real",            short: "ER", country: "GT", division: "Zootecnia",    last: "12 Dic 2025", days: 167, acv:  84_000, rep: "C. Quispe",   bucket: "110+" },
  { name: "Bebidas Tropicales",        short: "BT", country: "CO", division: "Sabores",      last: "16 Mar 2026", days: 73,  acv: 176_000, rep: "J. Cárdenas", bucket: "60-75" },
];

export const INACTIVITY_BUCKETS: InactivityBucket[] = [
  { label: "60–75 días",  range: "60-75",  count: 5 },
  { label: "76–90 días",  range: "76-90",  count: 6 },
  { label: "91–110 días", range: "91-110", count: 4 },
  { label: "110+ días",   range: "110+",   count: 3 },
];

export const BUCKET_COLORS: Record<string, string> = {
  "110+":   "#8a2f2f",
  "91-110": "#c64646",
  "76-90":  "#ba7517",
  "60-75":  "#378add",
};
