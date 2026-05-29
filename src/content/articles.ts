export type Article = {
  tag: string;
  date: string;
  title: string;
  blurb: string;
  /** Placeholder image caption. */
  img: string;
  /** Gold-accented card (the featured article). */
  accent?: boolean;
};

export const ARTICLES: Article[] = [
  {
    tag: "Application note",
    date: "04 · 2026",
    title: "Stabilizing maracuyá top-notes in shelf-stable RTD beverages",
    blurb: "A regulatory- and process-aware look at preserving the volatile fraction of Passiflora edulis at ambient distribution.",
    img: "image · macro · passion fruit cross-section",
  },
  {
    tag: "Sustainability",
    date: "03 · 2026",
    title: "Inside our Paraguayan stevia program: from leaf to Reb-M",
    blurb: "How a regional supply network compresses the stevia value chain — and what that means for cost, traceability and carbon.",
    img: "image · stevia field · Itapúa, PY",
    accent: true,
  },
  {
    tag: "Regulatory brief",
    date: "02 · 2026",
    title: "FEMA, FDA and Mercosur: a working note on natural-flavor labeling in 2026",
    blurb: "What the cross-jurisdictional changes mean for a beverage developer formulating for both US and Brazilian markets.",
    img: "image · lab notebook · annotated",
  },
];
