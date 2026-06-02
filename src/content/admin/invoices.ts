export type InvoiceStatus = "paid" | "pending" | "overdue" | "disputed";

export type Invoice = {
  id: string;
  client: string;
  country: string;
  issue: string;
  due: string;
  amount: number;
  overdue: number;
  status: InvoiceStatus;
};

export type AgingBucket = {
  label: string;
  value: number;
  color: string;
};

export const INVOICES: Invoice[] = [
  { id: "FAC-2026-1042", client: "Nestlé Latam",              country: "MX", issue: "02 May 2026", due: "01 Jun 2026", amount:  86_400, overdue:  0, status: "pending" },
  { id: "FAC-2026-1038", client: "Alicorp",                   country: "PE", issue: "18 Mar 2026", due: "17 Abr 2026", amount:  54_200, overdue: 41, status: "overdue" },
  { id: "FAC-2026-1035", client: "Arcor",                     country: "PY", issue: "02 Mar 2026", due: "01 Abr 2026", amount:  42_100, overdue: 57, status: "disputed" },
  { id: "FAC-2026-1041", client: "Grupo Nutresa",             country: "CO", issue: "28 Abr 2026", due: "28 May 2026", amount:  48_700, overdue:  0, status: "pending" },
  { id: "FAC-2026-1029", client: "Industrias La Constancia",  country: "GT", issue: "10 Feb 2026", due: "12 Mar 2026", amount:  38_400, overdue: 77, status: "overdue" },
  { id: "FAC-2026-1044", client: "Grupo Bimbo",               country: "MX", issue: "08 May 2026", due: "07 Jun 2026", amount:  72_900, overdue:  0, status: "pending" },
  { id: "FAC-2026-1018", client: "Florida Bebidas",           country: "CR", issue: "20 Mar 2026", due: "19 Abr 2026", amount:  31_600, overdue: 39, status: "overdue" },
  { id: "FAC-2026-1009", client: "Backus & Johnston",         country: "PE", issue: "12 Abr 2026", due: "12 May 2026", amount:  25_400, overdue: 16, status: "pending" },
  { id: "FAC-2026-0998", client: "Postobón",                  country: "CO", issue: "05 Abr 2026", due: "05 May 2026", amount:  28_900, overdue: 23, status: "pending" },
  { id: "FAC-2026-0987", client: "Grupo Pantaleón",           country: "GT", issue: "01 Mar 2026", due: "31 Mar 2026", amount:  19_800, overdue: 58, status: "overdue" },
  { id: "FAC-2026-1046", client: "Quala",                     country: "CO", issue: "10 May 2026", due: "09 Jun 2026", amount:  22_700, overdue:  0, status: "paid" },
  { id: "FAC-2026-1024", client: "Empresas Carozzi",          country: "PE", issue: "26 Abr 2026", due: "26 May 2026", amount:  18_200, overdue:  0, status: "paid" },
];

export const AGING_BUCKETS: AgingBucket[] = [
  { label: "0–30 días",  value: 125_000, color: "#1d9e75" },
  { label: "31–60 días", value:  92_000, color: "#ba7517" },
  { label: "61–90 días", value:  61_000, color: "#c64646" },
  { label: "90+ días",   value:  34_000, color: "#8a2f2f" },
];

export const INVOICE_STATUS_MAP: Record<InvoiceStatus, { cls: string; label: string }> = {
  paid:     { cls: "green",  label: "Pagada" },
  pending:  { cls: "blue",   label: "Pendiente" },
  overdue:  { cls: "red",    label: "Vencida" },
  disputed: { cls: "amber",  label: "En disputa" },
};
