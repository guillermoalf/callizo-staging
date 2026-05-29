export type Country = {
  code: string;
  flag: string;
  name: string;
  value: number;
};

export const COUNTRIES: Country[] = [
  { code: "MX", flag: "🇲🇽", name: "México", value: 2_640_000 },
  { code: "CO", flag: "🇨🇴", name: "Colombia", value: 1_820_000 },
  { code: "PE", flag: "🇵🇪", name: "Perú", value: 1_410_000 },
  { code: "US", flag: "🇺🇸", name: "USA", value: 980_000 },
  { code: "CR", flag: "🇨🇷", name: "Costa Rica", value: 870_000 },
  { code: "EC", flag: "🇪🇨", name: "Ecuador", value: 620_000 },
  { code: "GT", flag: "🇬🇹", name: "Guatemala", value: 510_000 },
  { code: "PY", flag: "🇵🇾", name: "Paraguay", value: 420_000 },
  { code: "BO", flag: "🇧🇴", name: "Bolivia", value: 310_000 },
  { code: "VE", flag: "🇻🇪", name: "Venezuela", value: 180_000 },
];

export function countryByCode(code: string): Country | undefined {
  return COUNTRIES.find((c) => c.code === code);
}
