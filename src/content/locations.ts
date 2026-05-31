export type Location = {
  id: string;
  city: string;
  country: string;
  /** 2-letter ISO code for the side-panel display. */
  countryCode: string;
  type: string;
  address?: string;
  phone?: string;
  /** Stylized coordinates within the schematic 600×720 map viewBox (not real geo). */
  x: number;
  y: number;
  kind: "plant" | "office";
};

export const LOCATIONS: Location[] = [
  {
    id: "cr-heredia",
    city: "Heredia",
    country: "Costa Rica",
    countryCode: "CR",
    type: "Ventas, I+D, Manufactura",
    address: "De Rex Internacional 200m Este y 200m Sur, La Asunción de Belén, Heredia",
    phone: "+506 2239 8001 / +506 2239 8002",
    x: 350,
    y: 402,
    kind: "plant",
  },
  {
    id: "cr-alajuela",
    city: "Alajuela",
    country: "Costa Rica",
    countryCode: "CR",
    type: "Ventas, I+D, Manufactura",
    address: "100m Norte del Salón Centro de Amigos, Tacares de Grecia, Alajuela",
    phone: "+506 2239 2358 / +506 2239 2698",
    x: 357,
    y: 407,
    kind: "plant",
  },
  {
    id: "mx",
    city: "Guadalajara",
    country: "México",
    countryCode: "MX",
    type: "Ventas, I+D, Manufactura",
    address: "Avenida Hidalgo 1000, Jalisco 132, Zapotlanejo, Jalisco 45460",
    phone: "+52 373 106 9512",
    x: 278,
    y: 332,
    kind: "plant",
  },
  {
    id: "pe",
    city: "Lima",
    country: "Perú",
    countryCode: "PE",
    type: "Ventas, I+D, Manufactura",
    address: "Urbanización Vulcano, Ate, Calle Los Plásticos #119, Lima",
    phone: "+51 1 349 0555",
    x: 340,
    y: 516,
    kind: "plant",
  },
  {
    id: "py",
    city: "Itá",
    country: "Paraguay",
    countryCode: "PY",
    type: "Ventas, I+D, Manufactura",
    address: "Francisco Solano López, Km41, Ruta 1, Itá",
    phone: "+595 (0) 213382711",
    x: 418,
    y: 586,
    kind: "plant",
  },
  {
    id: "us",
    city: "Palestine, TX",
    country: "Estados Unidos",
    countryCode: "US",
    type: "Ventas, I+D, Manufactura",
    address: "2220 W Reagan St, Palestine, TX 75801",
    phone: "+1 (903) 817 5404",
    x: 294,
    y: 268,
    kind: "plant",
  },
  {
    id: "co",
    city: "Bogotá",
    country: "Colombia",
    countryCode: "CO",
    type: "Ventas · Callizo Pets",
    address: "Centro Empresarial Muelle Industrial, Fontibón",
    phone: "+57 (305) 814 9448",
    x: 370,
    y: 447,
    kind: "office",
  },
  {
    id: "ec",
    city: "Guayaquil",
    country: "Ecuador",
    countryCode: "EC",
    type: "Solo ventas",
    phone: "+593 997 551 960",
    x: 337,
    y: 473,
    kind: "office",
  },
  {
    id: "gt",
    city: "Ciudad de Guatemala",
    country: "Guatemala",
    countryCode: "GT",
    type: "Solo ventas",
    phone: "+502 5017 6334",
    x: 330,
    y: 379,
    kind: "office",
  },
  {
    id: "bo",
    city: "Santa Cruz",
    country: "Bolivia",
    countryCode: "BO",
    type: "Solo ventas",
    address: "Calle J Este Nro 120, Edificio Rolea Oficina 2C, Barrio Equipetrol Norte",
    phone: "+591 (7) 633 1133",
    x: 413,
    y: 548,
    kind: "office",
  },
  {
    id: "ve",
    city: "Caracas",
    country: "Venezuela",
    countryCode: "VE",
    type: "Solo ventas",
    address: "Zona Industrial La Cumaca, Final Avenida Los Capriles con Calle El Pegón, Paracotos, Estado Miranda",
    phone: "+58 212 3911719",
    x: 428,
    y: 420,
    kind: "office",
  },
];

/** HQ id — origin of the map's connecting lines. */
export const HQ_ID = "cr-heredia";
