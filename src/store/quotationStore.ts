import { create } from "zustand";
import type { Quotation, QuotationStatus } from "@/types/quotation";

const SALES_REPS = [
  "A. Vega",
  "J. Cárdenas",
  "P. Méndez",
  "R. Soto",
  "M. Ortiz",
  "C. Quispe",
  "L. Ruiz",
];

function addr(country: string, city: string, line1: string, postalCode: string) {
  return { country, city, line1, postalCode };
}

const SEED_QUOTATIONS: Quotation[] = [
  {
    id: "COT-2026-0142",
    status: "en_negociacion",
    companyName: "Nestlé Latam",
    contactName: "Patricia Rojas",
    contactEmail: "projas@nestle.com",
    contactPhone: "+506 2200-1100",
    companyAddress: addr("Costa Rica", "San José", "Av. Central 150, Torre Empresarial", "10101"),
    deliveryAddress: addr("Costa Rica", "San José", "Av. Central 150, Torre Empresarial", "10101"),
    deliverySameAsCompany: true,
    lineItems: [
      { productCode: "SAB-0142", productName: "Sabor Mango Tropical", division: "flavors", quantity: 500, unit: "kg", estimatedUnitPrice: 142, lineTotal: 71000 },
      { productCode: "SAB-0201", productName: "Sabor Maracuyá Premium", division: "flavors", quantity: 500, unit: "kg", estimatedUnitPrice: 142, lineTotal: 71000 },
    ],
    assignedSalesRep: "A. Vega",
    totalValue: 142000,
    currency: "USD",
    createdAt: "2026-05-10T09:00:00Z",
    updatedAt: "2026-05-18T14:30:00Z",
    expiresAt: "2026-06-09T23:59:59Z",
    notes: "Cliente requiere muestras previo a aprobación de volumen.",
    source: "manual",
  },
  {
    id: "COT-2026-0138",
    status: "enviada",
    companyName: "Empresas Polar",
    contactName: "Carlos Medina",
    contactEmail: "cmedina@polar.com",
    contactPhone: "+58 212 900-4000",
    companyAddress: addr("Venezuela", "Caracas", "Calle 1 con Av. Libertador, Torre Polar", "1060"),
    deliveryAddress: addr("Venezuela", "Caracas", "Calle 1 con Av. Libertador, Torre Polar", "1060"),
    deliverySameAsCompany: true,
    lineItems: [
      { productCode: "SAB-0089", productName: "Sabor Vainilla Bourbon", division: "flavors", quantity: 700, unit: "kg", estimatedUnitPrice: 140, lineTotal: 98000 },
    ],
    assignedSalesRep: "J. Cárdenas",
    totalValue: 98000,
    currency: "USD",
    createdAt: "2026-05-02T08:00:00Z",
    updatedAt: "2026-05-02T08:00:00Z",
    expiresAt: "2026-06-01T23:59:59Z",
    notes: "",
    source: "manual",
  },
  {
    id: "COT-2026-0135",
    status: "enviada",
    companyName: "Alicorp",
    contactName: "Sofía Paredes",
    contactEmail: "sparedes@alicorp.com.pe",
    contactPhone: "+51 1 315-0800",
    companyAddress: addr("Perú", "Lima", "Av. Argentina 4793, Callao", "07001"),
    deliveryAddress: addr("Perú", "Lima", "Av. Argentina 4793, Callao", "07001"),
    deliverySameAsCompany: true,
    lineItems: [
      { productCode: "ING-0011", productName: "Oleorresina de Páprika", division: "ingredients", quantity: 300, unit: "kg", estimatedUnitPrice: 140, lineTotal: 42000 },
      { productCode: "ING-0028", productName: "Extracto de Vainilla Natural", division: "ingredients", quantity: 200, unit: "kg", estimatedUnitPrice: 170, lineTotal: 34000 },
    ],
    assignedSalesRep: "P. Méndez",
    totalValue: 76000,
    currency: "USD",
    createdAt: "2026-04-28T10:00:00Z",
    updatedAt: "2026-04-28T10:00:00Z",
    expiresAt: "2026-05-30T23:59:59Z",
    notes: "Solicitan desglose de precios por volumen.",
    source: "manual",
  },
  {
    id: "COT-2026-0141",
    status: "ganada",
    companyName: "Grupo Nutresa",
    contactName: "Juliana Torres",
    contactEmail: "jtorres@nutresa.com",
    contactPhone: "+57 4 519-8000",
    companyAddress: addr("Colombia", "Medellín", "Cra 44a No. 18 sur-76, Envigado", "055420"),
    deliveryAddress: addr("Colombia", "Bogotá", "Calle 100 No. 7-33, Centro Empresarial", "110221"),
    deliverySameAsCompany: false,
    lineItems: [
      { productCode: "FRG-0031", productName: "Fragancia Lavanda Alpina", division: "fragrances", quantity: 400, unit: "kg", estimatedUnitPrice: 160, lineTotal: 64000 },
    ],
    assignedSalesRep: "R. Soto",
    totalValue: 64000,
    currency: "USD",
    createdAt: "2026-05-08T11:00:00Z",
    updatedAt: "2026-05-22T09:15:00Z",
    expiresAt: "2026-06-07T23:59:59Z",
    notes: "",
    source: "manual",
  },
  {
    id: "COT-2026-0129",
    status: "enviada",
    companyName: "Arcor",
    contactName: "Marcos Giordano",
    contactEmail: "mgiordano@arcor.com.ar",
    contactPhone: "+54 11 5554-1200",
    companyAddress: addr("Paraguay", "Asunción", "Av. España 1845, Edificio Aurora", "1209"),
    deliveryAddress: addr("Paraguay", "Asunción", "Av. España 1845, Edificio Aurora", "1209"),
    deliverySameAsCompany: true,
    lineItems: [
      { productCode: "FRG-0055", productName: "Fragancia Cítrica Premium", division: "fragrances", quantity: 200, unit: "kg", estimatedUnitPrice: 155, lineTotal: 31000 },
      { productCode: "FRG-0031", productName: "Fragancia Lavanda Alpina", division: "fragrances", quantity: 170, unit: "kg", estimatedUnitPrice: 159, lineTotal: 27000 },
    ],
    assignedSalesRep: "M. Ortiz",
    totalValue: 58000,
    currency: "USD",
    createdAt: "2026-04-20T14:00:00Z",
    updatedAt: "2026-04-20T14:00:00Z",
    expiresAt: "2026-05-20T23:59:59Z",
    notes: "",
    source: "manual",
  },
  {
    id: "COT-2026-0144",
    status: "borrador",
    companyName: "Florida Bebidas",
    contactName: "Andrés Villegas",
    contactEmail: "avillegas@florida.co.cr",
    contactPhone: "+506 2240-8800",
    companyAddress: addr("Costa Rica", "Heredia", "Barreal de Heredia, Zona Industrial", "40101"),
    deliveryAddress: addr("Costa Rica", "Heredia", "Barreal de Heredia, Zona Industrial", "40101"),
    deliverySameAsCompany: true,
    lineItems: [
      { productCode: "SAB-0142", productName: "Sabor Mango Tropical", division: "flavors", quantity: 300, unit: "kg", estimatedUnitPrice: 153, lineTotal: 46000 },
    ],
    assignedSalesRep: "A. Vega",
    totalValue: 46000,
    currency: "USD",
    createdAt: "2026-05-12T16:00:00Z",
    updatedAt: "2026-05-12T16:00:00Z",
    expiresAt: "2026-06-11T23:59:59Z",
    notes: "Pendiente aprobación interna.",
    source: "manual",
  },
  {
    id: "COT-2026-0122",
    status: "en_negociacion",
    companyName: "Postobón",
    contactName: "Valentina Cruz",
    contactEmail: "vcruz@postobon.com.co",
    contactPhone: "+57 1 425-6000",
    companyAddress: addr("Colombia", "Bogotá", "Calle 100 No. 19-61, Torre Colpatria", "110221"),
    deliveryAddress: addr("Colombia", "Bogotá", "Calle 100 No. 19-61, Torre Colpatria", "110221"),
    deliverySameAsCompany: true,
    lineItems: [
      { productCode: "SAB-0089", productName: "Sabor Vainilla Bourbon", division: "flavors", quantity: 280, unit: "kg", estimatedUnitPrice: 139, lineTotal: 39000 },
    ],
    assignedSalesRep: "J. Cárdenas",
    totalValue: 39000,
    currency: "USD",
    createdAt: "2026-04-15T09:30:00Z",
    updatedAt: "2026-05-10T11:00:00Z",
    expiresAt: "2026-05-29T23:59:59Z",
    notes: "Solicitan muestras de nuevas formulaciones.",
    source: "manual",
  },
  {
    id: "COT-2026-0131",
    status: "enviada",
    companyName: "Industrias Mafam",
    contactName: "Roberto Herrera",
    contactEmail: "rherrera@mafam.com.py",
    contactPhone: "+595 21 510-800",
    companyAddress: addr("Paraguay", "Asunción", "Ruta Mcal. Estigarribia Km 14.5", "1120"),
    deliveryAddress: addr("Paraguay", "Asunción", "Ruta Mcal. Estigarribia Km 14.5", "1120"),
    deliverySameAsCompany: true,
    lineItems: [
      { productCode: "PET-0018", productName: "Palatabilizante Carne/Res", division: "pets", quantity: 350, unit: "kg", estimatedUnitPrice: 117, lineTotal: 41000 },
    ],
    assignedSalesRep: "L. Ruiz",
    totalValue: 41000,
    currency: "USD",
    createdAt: "2026-04-22T10:00:00Z",
    updatedAt: "2026-04-22T10:00:00Z",
    expiresAt: "2026-05-22T23:59:59Z",
    notes: "",
    source: "manual",
  },
  {
    id: "COT-2026-0140",
    status: "perdida",
    companyName: "Pollos Bilbao",
    contactName: "Miguel Ángel Soria",
    contactEmail: "msoria@pollosbilbao.bo",
    contactPhone: "+591 2 244-5500",
    companyAddress: addr("Bolivia", "La Paz", "Av. Arce 2408, Edificio Multicine", "0100"),
    deliveryAddress: addr("Bolivia", "La Paz", "Av. Arce 2408, Edificio Multicine", "0100"),
    deliverySameAsCompany: true,
    lineItems: [
      { productCode: "ZOO-0044", productName: "Aditivo Palatabilizante Aves", division: "zoo", quantity: 300, unit: "kg", estimatedUnitPrice: 93, lineTotal: 28000 },
    ],
    assignedSalesRep: "C. Quispe",
    totalValue: 28000,
    currency: "USD",
    createdAt: "2026-05-06T08:00:00Z",
    updatedAt: "2026-05-25T16:00:00Z",
    expiresAt: "2026-06-05T23:59:59Z",
    notes: "Cliente decidió proveedor local.",
    source: "manual",
  },
];

interface QuotationStore {
  quotations: Quotation[];
  _repIndex: number;

  addQuotation: (q: Quotation) => void;
  updateQuotationStatus: (id: string, status: QuotationStatus) => void;
  assignSalesRep: (id: string, rep: string) => void;
  getQuotationById: (id: string) => Quotation | undefined;
  getQuotationsByStatus: (status: QuotationStatus) => Quotation[];
  getConversionRate: () => number;
  nextRepRoundRobin: () => string;
}

export const useQuotationStore = create<QuotationStore>((set, get) => ({
  quotations: SEED_QUOTATIONS,
  _repIndex: 0,

  addQuotation: (q) =>
    set((state) => ({ quotations: [q, ...state.quotations] })),

  updateQuotationStatus: (id, status) =>
    set((state) => ({
      quotations: state.quotations.map((q) =>
        q.id === id ? { ...q, status, updatedAt: new Date().toISOString() } : q,
      ),
    })),

  assignSalesRep: (id, rep) =>
    set((state) => ({
      quotations: state.quotations.map((q) =>
        q.id === id ? { ...q, assignedSalesRep: rep, updatedAt: new Date().toISOString() } : q,
      ),
    })),

  getQuotationById: (id) => get().quotations.find((q) => q.id === id),

  getQuotationsByStatus: (status) =>
    get().quotations.filter((q) => q.status === status),

  getConversionRate: () => {
    const qs = get().quotations;
    const sent = qs.filter((q) =>
      ["enviada", "en_negociacion", "ganada", "perdida"].includes(q.status),
    ).length;
    if (sent === 0) return 0;
    const won = qs.filter((q) => q.status === "ganada").length;
    return Math.round((won / sent) * 100);
  },

  nextRepRoundRobin: () => {
    const idx = get()._repIndex;
    const rep = SALES_REPS[idx % SALES_REPS.length];
    set((s) => ({ _repIndex: s._repIndex + 1 }));
    return rep;
  },
}));
