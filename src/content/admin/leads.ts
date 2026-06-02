export type LeadStage =
  | "Nuevo"
  | "Contactado"
  | "Calificado"
  | "Propuesta"
  | "Convertido"
  | "Perdido";

export type LeadSource = "Referido" | "Web" | "Feria" | "Frío";

export type Lead = {
  company: string;
  contact: string;
  country: string;
  division: string;
  source: LeadSource;
  rep: string;
  added: string;
  stage: LeadStage;
};

export const LEAD_STAGES: LeadStage[] = [
  "Nuevo",
  "Contactado",
  "Calificado",
  "Propuesta",
  "Convertido",
  "Perdido",
];

export const LEADS: Lead[] = [
  { company: "Aromas Premium SA",  contact: "Diego Salas",   country: "MX", division: "Fragancias",   source: "Referido", rep: "A. Vega",     added: "22 May 2026", stage: "Nuevo" },
  { company: "NutriPet LATAM",     contact: "Carla Fuentes", country: "CO", division: "Mascotas",     source: "Web",      rep: "P. Méndez",   added: "21 May 2026", stage: "Nuevo" },
  { company: "Dulces del Norte",   contact: "Hugo Ramírez",  country: "GT", division: "Sabores",      source: "Feria",    rep: "J. Cárdenas", added: "20 May 2026", stage: "Contactado" },
  { company: "BioAgro Andina",     contact: "Sofía Lema",    country: "PE", division: "Zootecnia",    source: "Frío",     rep: "C. Quispe",   added: "18 May 2026", stage: "Contactado" },
  { company: "Esencias Tropic",    contact: "Marco Díaz",    country: "EC", division: "Fragancias",   source: "Referido", rep: "M. Ortiz",    added: "17 May 2026", stage: "Calificado" },
  { company: "Snacks Saludables",  contact: "Lucía Peña",    country: "CR", division: "Sabores",      source: "Web",      rep: "A. Vega",     added: "15 May 2026", stage: "Calificado" },
  { company: "Ingredientes MX",    contact: "Raúl Cano",     country: "MX", division: "Ingredientes", source: "Feria",    rep: "L. Ruiz",     added: "12 May 2026", stage: "Propuesta" },
  { company: "PetGourmet Co.",     contact: "Ana Beltrán",   country: "CO", division: "Mascotas",     source: "Referido", rep: "P. Méndez",   added: "10 May 2026", stage: "Propuesta" },
  { company: "Sabores del Valle",  contact: "Iván Torres",   country: "BO", division: "Sabores",      source: "Web",      rep: "C. Quispe",   added: "06 May 2026", stage: "Convertido" },
  { company: "FraganTech",         contact: "Elena Ríos",    country: "MX", division: "Fragancias",   source: "Referido", rep: "M. Ortiz",    added: "02 May 2026", stage: "Convertido" },
  { company: "Granjas Unidas",     contact: "Pablo Vidal",   country: "PY", division: "Zootecnia",    source: "Frío",     rep: "R. Soto",     added: "28 Abr 2026", stage: "Perdido" },
  { company: "Confitería Real",    contact: "Nadia Gómez",   country: "GT", division: "Sabores",      source: "Feria",    rep: "J. Cárdenas", added: "24 Abr 2026", stage: "Perdido" },
];

export const SOURCE_COLOR: Record<LeadSource, string> = {
  "Referido": "green",
  "Web":      "blue",
  "Feria":    "purple",
  "Frío":     "gray",
};

export const STAGE_COLOR: Record<LeadStage, string> = {
  "Nuevo":      "gray",
  "Contactado": "blue",
  "Calificado": "purple",
  "Propuesta":  "amber",
  "Convertido": "green",
  "Perdido":    "red",
};
