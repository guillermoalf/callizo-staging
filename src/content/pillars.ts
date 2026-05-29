export type Pillar = {
  num: string;
  /** Big serif letter mark, e.g. "A." */
  mark: string;
  title: string;
  body: string;
};

export const PILLARS: Pillar[] = [
  {
    num: "P-01",
    mark: "A.",
    title: "Three decades of sensory expertise.",
    body: "A family-run lab since 1995 — long enough to have institutional memory for ingredient supply cycles, short enough to still answer the phone.",
  },
  {
    num: "P-02",
    mark: "B.",
    title: "Six R&D and manufacturing centers across the Americas.",
    body: "Costa Rica · Colombia · México · Perú · Paraguay · USA. Customers buy locally, formulate locally, ship locally.",
  },
  {
    num: "P-03",
    mark: "C.",
    title: "Custom formulation labs in every plant.",
    body: "Not a sales office with a sample kit — a full bench with a regulatory team, in the same time zone as your R&D group.",
  },
  {
    num: "P-04",
    mark: "D.",
    title: "Tropical & regional flavors at industrial scale.",
    body: "Maracuyá, guanábana, lulo, mango criollo, panela, café de altura — profiles few global suppliers carry, batched for CPG volume.",
  },
];
