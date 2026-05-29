export type Product = {
  code: string;
  name: string;
  division: string;
  reqs: number;
  status: "En producción" | "Estable" | "Reabastecimiento";
};

export type RDProject = {
  code: string;
  name: string;
  division: string;
  /** 1=Concepto, 2=Formulación, 3=Piloto, 4=Validación. */
  phase: number;
  target: string;
  lead: string;
};

export const PHASE_NAMES = ["Concepto", "Formulación", "Piloto", "Validación"];

export const PRODUCTS: Product[] = [
  { code: "SAB-0142", name: "Vainilla natural Premium", division: "Sabores", reqs: 142, status: "En producción" },
  { code: "SAB-0118", name: "Cítrico tropical", division: "Sabores", reqs: 118, status: "En producción" },
  { code: "FRG-0031", name: "Fresia floral", division: "Fragancias", reqs: 96, status: "Estable" },
  { code: "SAB-0205", name: "Cacao tostado intenso", division: "Sabores", reqs: 88, status: "En producción" },
  { code: "PET-0018", name: "Atún sabor concentrado", division: "Mascotas", reqs: 74, status: "Estable" },
  { code: "FRG-0044", name: "Lavanda mediterránea", division: "Fragancias", reqs: 62, status: "Reabastecimiento" },
  { code: "ZOO-0044", name: "Premix mineral aviar", division: "Zootecnia", reqs: 58, status: "En producción" },
  { code: "ING-0011", name: "Maltodextrina especial", division: "Ingredientes", reqs: 51, status: "Estable" },
  { code: "PET-0036", name: "Hígado en polvo", division: "Mascotas", reqs: 44, status: "Estable" },
  { code: "ZOO-0072", name: "Aminoácidos porcino", division: "Zootecnia", reqs: 39, status: "Reabastecimiento" },
];

export const RD_PROJECTS: RDProject[] = [
  { code: "RD-2026-014", name: "Sabor café cold-brew", division: "Sabores", phase: 4, target: "30 Jun 2026", lead: "A. Vega" },
  { code: "RD-2026-021", name: "Fragancia detergente verde", division: "Fragancias", phase: 3, target: "15 Jul 2026", lead: "R. Soto" },
  { code: "RD-2026-019", name: "Snack mascotas gourmet", division: "Mascotas", phase: 2, target: "22 Ago 2026", lead: "P. Méndez" },
  { code: "RD-2026-025", name: "Premix lechón post-destete", division: "Zootecnia", phase: 1, target: "10 Sep 2026", lead: "C. Quispe" },
  { code: "RD-2026-031", name: "Edulcorante natural fibra+", division: "Ingredientes", phase: 2, target: "05 Oct 2026", lead: "L. Ruiz" },
  { code: "RD-2026-027", name: "Sabor mango maracuyá", division: "Sabores", phase: 3, target: "18 Jul 2026", lead: "M. Ortiz" },
  { code: "RD-2026-008", name: "Fragancia ambiental cítrica", division: "Fragancias", phase: 4, target: "28 Jun 2026", lead: "J. Cárdenas" },
];
