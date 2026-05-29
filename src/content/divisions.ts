export type DivisionId =
  | "flavors"
  | "fragrances"
  | "pets"
  | "zoo"
  | "ingredients";

export type Division = {
  id: DivisionId;
  name: string;
  /** Spanish name, shown in serif italic. */
  es: string;
  count: number;
  desc: string;
  tags: string[];
  /** oklch hue for the division's accent swatch. */
  hue: number;
};

export const DIVISIONS: Division[] = [
  {
    id: "flavors",
    name: "Flavors",
    es: "Sabores",
    count: 248,
    hue: 25,
    desc: "Sweet, savory and beverage flavor systems — including tropical and regional profiles few global suppliers carry at scale.",
    tags: ["sweet", "beverage", "dairy", "bakery", "snack"],
  },
  {
    id: "fragrances",
    name: "Fragrances",
    es: "Fragancias",
    count: 164,
    hue: 310,
    desc: "Fine and functional fragrance for personal care, home care and air care, with stability-tested compositions for tropical markets.",
    tags: ["personal care", "home care", "air care"],
  },
  {
    id: "pets",
    name: "Pets",
    es: "Mascotas",
    count: 62,
    hue: 60,
    desc: "Palatability systems engineered with feeding-trial validation — for dry, wet and treat formats across companion species.",
    tags: ["palatants", "dry food", "wet food", "treats"],
  },
  {
    id: "zoo",
    name: "Zootechnics",
    es: "Zootecnia",
    count: 48,
    hue: 140,
    desc: "Performance additives for livestock and aquaculture — flavor masking, intake enhancement, and species-specific feed solutions.",
    tags: ["aquaculture", "poultry", "swine", "ruminant"],
  },
  {
    id: "ingredients",
    name: "Ingredients",
    es: "Ingredientes",
    count: 96,
    hue: 210,
    desc: "Stevia systems, natural colorants, essential oils and specialty botanicals — sourced and refined within our own network.",
    tags: ["stevia", "colorants", "essential oils", "botanicals"],
  },
];

/** Total references claimed across the full catalog (mockup copy: "of 618"). */
export const TOTAL_REFERENCES = 618;
