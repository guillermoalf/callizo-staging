export type QuoteStatus = "draft" | "sent" | "accepted" | "rejected" | "expired" | "negotiation";
export type QuoteFlag = "expiring" | "noresponse" | null;

export type Quote = {
  id: string;
  client: string;
  skus: string[];
  value: number;
  issue: string;
  expiry: string;
  rep: string;
  status: QuoteStatus;
  flag: QuoteFlag;
};

export const QUOTES: Quote[] = [
  { id: "COT-2026-0142", client: "Nestlé Latam",     skus: ["SAB-0142","SAB-0205"], value: 142_000, issue: "10 May 2026", expiry: "09 Jun 2026", rep: "A. Vega",     status: "negotiation", flag: null },
  { id: "COT-2026-0138", client: "Empresas Polar",   skus: ["SAB-0118"],            value:  98_000, issue: "02 May 2026", expiry: "01 Jun 2026", rep: "J. Cárdenas", status: "sent",        flag: "noresponse" },
  { id: "COT-2026-0135", client: "Alicorp",          skus: ["ING-0011","ING-0024"], value:  76_000, issue: "28 Abr 2026", expiry: "30 May 2026", rep: "P. Méndez",   status: "sent",        flag: "expiring" },
  { id: "COT-2026-0141", client: "Grupo Nutresa",    skus: ["FRG-0031"],            value:  64_000, issue: "08 May 2026", expiry: "07 Jun 2026", rep: "R. Soto",     status: "accepted",    flag: null },
  { id: "COT-2026-0129", client: "Arcor",            skus: ["FRG-0044","FRG-0031"], value:  58_000, issue: "20 Abr 2026", expiry: "20 May 2026", rep: "M. Ortiz",    status: "sent",        flag: "noresponse" },
  { id: "COT-2026-0144", client: "Florida Bebidas",  skus: ["SAB-0142"],            value:  46_000, issue: "12 May 2026", expiry: "11 Jun 2026", rep: "A. Vega",     status: "draft",       flag: null },
  { id: "COT-2026-0122", client: "Postobón",         skus: ["SAB-0118"],            value:  39_000, issue: "15 Abr 2026", expiry: "29 May 2026", rep: "J. Cárdenas", status: "negotiation", flag: "expiring" },
  { id: "COT-2026-0118", client: "Quala",            skus: ["FRG-0031"],            value:  34_000, issue: "08 Abr 2026", expiry: "08 May 2026", rep: "R. Soto",     status: "expired",     flag: null },
  { id: "COT-2026-0140", client: "Pollos Bilbao",    skus: ["ZOO-0072"],            value:  28_000, issue: "06 May 2026", expiry: "05 Jun 2026", rep: "C. Quispe",   status: "rejected",    flag: null },
  { id: "COT-2026-0131", client: "Industrias Mafam", skus: ["PET-0018"],            value:  41_000, issue: "22 Abr 2026", expiry: "22 May 2026", rep: "L. Ruiz",     status: "sent",        flag: "noresponse" },
];

export const QUOTE_STATUS_MAP: Record<QuoteStatus, { cls: string; label: string }> = {
  draft:       { cls: "gray",   label: "Borrador" },
  sent:        { cls: "blue",   label: "Enviada" },
  accepted:    { cls: "green",  label: "Aceptada" },
  rejected:    { cls: "red",    label: "Rechazada" },
  expired:     { cls: "gray",   label: "Expirada" },
  negotiation: { cls: "purple", label: "Negociación" },
};
