export type CountryCode =
  | "MX" | "CR" | "CO" | "PE" | "BR"
  | "PY" | "CL" | "AR" | "US" | "GT" | "OT";

export type CountryRoute = {
  plant: string;
  lead: string;
  time: string;
};

/**
 * Maps the contact form's selected country to the local team that handles it.
 * Shared by the contact form (live routing banner) and the server action
 * (snapshotting where a submission was routed).
 */
export const COUNTRY_ROUTES: Record<CountryCode, CountryRoute> = {
  MX: { plant: "Querétaro, México", lead: "Equipo México · Andrea Robles", time: "GMT-6" },
  CR: { plant: "San José, Costa Rica", lead: "Equipo HQ · Mariana Calderón", time: "GMT-6" },
  CO: { plant: "Bogotá, Colombia", lead: "Equipo Andino · Felipe Restrepo", time: "GMT-5" },
  PE: { plant: "Lima, Perú", lead: "Equipo Andino · Felipe Restrepo", time: "GMT-5" },
  BR: { plant: "São Paulo office → Asunción plant", lead: "Equipo Brasil · Renata Souza", time: "GMT-3" },
  PY: { plant: "Asunción, Paraguay", lead: "Equipo Cono Sur · Diego Vera", time: "GMT-3" },
  CL: { plant: "Santiago office → Lima plant", lead: "Equipo Cono Sur · Diego Vera", time: "GMT-3" },
  AR: { plant: "Asunción, Paraguay", lead: "Equipo Cono Sur · Diego Vera", time: "GMT-3" },
  US: { plant: "Miami, FL", lead: "US team · Karen Whitfield", time: "GMT-5" },
  GT: { plant: "Guatemala office → San José plant", lead: "Equipo HQ · Mariana Calderón", time: "GMT-6" },
  OT: { plant: "San José, Costa Rica", lead: "Equipo HQ · Mariana Calderón", time: "GMT-6" },
};

export const COUNTRY_OPTIONS: { value: CountryCode; label: string }[] = [
  { value: "MX", label: "México" },
  { value: "CR", label: "Costa Rica" },
  { value: "CO", label: "Colombia" },
  { value: "PE", label: "Perú" },
  { value: "BR", label: "Brasil" },
  { value: "PY", label: "Paraguay" },
  { value: "CL", label: "Chile" },
  { value: "AR", label: "Argentina" },
  { value: "US", label: "United States" },
  { value: "GT", label: "Guatemala" },
  { value: "OT", label: "Other" },
];
