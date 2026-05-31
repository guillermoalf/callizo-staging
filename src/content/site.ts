export const NAV_LINKS = [
  { href: "#catalog", label: "Catalog" },
  { href: "#pets", label: "Divisions" },
  { href: "#why", label: "Capabilities" },
  { href: "#map", label: "Locations" },
  { href: "#resources", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export const LANGUAGES = ["ES", "EN"] as const;

/** Hero stat strip: [value, label]. */
export const HERO_STATS: [string, string][] = [
  ["30+", "years building sensory systems for the Americas"],
  ["6", "manufacturing & R&D centers across the continent"],
  ["500+", "active flavor, fragrance & ingredient references"],
  ["48h", "average sample dispatch from regional lab to client"],
];

export const CERTIFICATIONS = [
  "ISO 9001",
  "FSSC 22000",
  "HACCP",
  "Kosher",
  "Halal",
  "FDA",
  "FEMA",
];

export const INTEREST_OPTIONS = [
  { value: "flavors", label: "Flavors" },
  { value: "fragrances", label: "Fragrances" },
  { value: "pets", label: "Pets & palatability" },
  { value: "zoo", label: "Zootechnics" },
  { value: "ingredients", label: "Ingredients (stevia, colorants, EOs)" },
  { value: "other", label: "Multiple / not sure yet" },
];

export const FOOTER_COLUMNS: { heading: string; items: string[] }[] = [
  {
    heading: "Divisions",
    items: ["Flavors", "Fragrances", "Pets & palatability", "Zootechnics", "Ingredients"],
  },
  {
    heading: "Locations",
    items: ["San José, CR · HQ", "Bogotá, CO", "Querétaro, MX", "Lima, PE", "Asunción, PY", "Miami, US"],
  },
  {
    heading: "Company",
    items: ["About Callizo", "Our craft", "Sustainability", "Careers", "Press"],
  },
  {
    heading: "Connect",
    items: ["LinkedIn", "Instagram", "Newsletter", "info@callizoaromas.com"],
  },
];

export const FOOTER_CITIES = "SAN JOSÉ · BOGOTÁ · QUERÉTARO · LIMA · ASUNCIÓN · MIAMI";
export const FOOTER_TAGLINE = "Somos Alquimistas Sensoriales.";
