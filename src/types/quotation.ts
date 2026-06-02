export type QuotationStatus =
  | "borrador"
  | "enviada"
  | "en_negociacion"
  | "ganada"
  | "perdida"
  | "vencida";

export interface Address {
  country: string;
  city: string;
  line1: string;
  postalCode: string;
}

export interface QuotationLineItem {
  productCode: string;
  productName: string;
  division: string;
  quantity: number;
  unit: "kg" | "L" | "unidad";
  estimatedUnitPrice: number;
  lineTotal: number;
}

export interface Quotation {
  id: string;
  status: QuotationStatus;
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  companyAddress: Address;
  deliveryAddress: Address;
  deliverySameAsCompany: boolean;
  lineItems: QuotationLineItem[];
  assignedSalesRep: string;
  totalValue: number;
  currency: "USD";
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
  notes: string;
  source: "landing" | "manual";
}

export const QUOTATION_STATUS_LABELS: Record<QuotationStatus, string> = {
  borrador: "Borrador",
  enviada: "Enviada",
  en_negociacion: "En negociación",
  ganada: "Ganada",
  perdida: "Perdida",
  vencida: "Vencida",
};

export const QUOTATION_STATUS_PILL: Record<
  QuotationStatus,
  "gray" | "blue" | "purple" | "green" | "red" | "amber"
> = {
  borrador: "gray",
  enviada: "blue",
  en_negociacion: "purple",
  ganada: "green",
  perdida: "red",
  vencida: "gray",
};
