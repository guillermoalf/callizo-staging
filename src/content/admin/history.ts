import type { OrderStatus } from "@/content/admin/orders";

export type HistoryOrder = {
  id: string;
  sku: string;
  qty: string;
  unit: string;
  total: number;
  deliver: string;
  status: OrderStatus;
};

export type DivisionSplit = {
  name: string;
  value: number;
  color: string;
};

export type HistoryKpi = {
  total: number;
  avg: number;
  count: number;
  top: string;
};

export type ClientHistory = {
  monthly: Record<"3M" | "6M" | "12M", number[]>;
  divisionSplit: DivisionSplit[];
  orders: HistoryOrder[];
  kpi: HistoryKpi;
};

export const HISTORY_CLIENTS = ["Nestlé Latam", "Grupo Bimbo", "Alicorp", "Arcor", "Grupo Rey"] as const;
export type HistoryClientName = (typeof HISTORY_CLIENTS)[number];

export const PURCHASE_HISTORY: Record<HistoryClientName, ClientHistory> = {
  "Nestlé Latam": {
    monthly: {
      "3M":  [98, 112, 110],
      "6M":  [86, 92, 98, 112, 110, 0],
      "12M": [72,78,84,90,88,95,102,98,86,92,98,110],
    },
    divisionSplit: [
      { name: "Sabores",      value: 218_000, color: "#378add" },
      { name: "Fragancias",   value:  62_000, color: "#7f77dd" },
      { name: "Ingredientes", value:  40_000, color: "#54544e" },
    ],
    orders: [
      { id: "OC-26-04812", sku: "SAB-0142", qty: "4,200 kg", unit: "$20.6/kg", total: 86_400, deliver: "02 Jun 2026", status: "transit" },
      { id: "OC-26-04788", sku: "SAB-0205", qty: "2,800 kg", unit: "$24.9/kg", total: 69_700, deliver: "14 May 2026", status: "delivered" },
      { id: "OC-26-04751", sku: "FRG-0031", qty: "1,500 kg", unit: "$41.3/kg", total: 62_000, deliver: "28 Abr 2026", status: "delivered" },
      { id: "OC-26-04702", sku: "SAB-0118", qty: "2,100 kg", unit: "$22.4/kg", total: 47_000, deliver: "09 Abr 2026", status: "delivered" },
      { id: "OC-26-04655", sku: "ING-0011", qty: "3,000 kg", unit: "$13.3/kg", total: 40_000, deliver: "21 Mar 2026", status: "delivered" },
      { id: "OC-26-04610", sku: "SAB-0142", qty: "750 kg",   unit: "$20.0/kg", total: 15_000, deliver: "06 Mar 2026", status: "delivered" },
    ],
    kpi: { total: 320_000, avg: 53_300, count: 6, top: "Sabores" },
  },
  "Grupo Bimbo": {
    monthly: {
      "3M":  [82, 94, 88],
      "6M":  [70, 76, 82, 94, 88, 0],
      "12M": [58,62,68,72,70,75,80,78,70,76,82,88],
    },
    divisionSplit: [
      { name: "Sabores",      value: 198_000, color: "#378add" },
      { name: "Ingredientes", value:  54_000, color: "#54544e" },
    ],
    orders: [
      { id: "OC-26-04811", sku: "SAB-0118", qty: "3,300 kg", unit: "$22.1/kg", total: 72_900, deliver: "28 May 2026", status: "production" },
      { id: "OC-26-04760", sku: "SAB-0142", qty: "2,400 kg", unit: "$20.6/kg", total: 49_400, deliver: "30 Abr 2026", status: "delivered" },
      { id: "OC-26-04712", sku: "ING-0011", qty: "3,600 kg", unit: "$13.3/kg", total: 47_900, deliver: "12 Abr 2026", status: "delivered" },
      { id: "OC-26-04668", sku: "SAB-0118", qty: "1,900 kg", unit: "$22.1/kg", total: 42_000, deliver: "24 Mar 2026", status: "delivered" },
      { id: "OC-26-04620", sku: "SAB-0205", qty: "1,500 kg", unit: "$24.9/kg", total: 37_300, deliver: "08 Mar 2026", status: "delivered" },
    ],
    kpi: { total: 252_000, avg: 50_400, count: 5, top: "Sabores" },
  },
  "Alicorp": {
    monthly: {
      "3M":  [64, 58, 71],
      "6M":  [52, 60, 64, 58, 71, 0],
      "12M": [44,48,52,56,52,60,64,58,52,60,64,71],
    },
    divisionSplit: [
      { name: "Ingredientes", value: 142_000, color: "#54544e" },
      { name: "Sabores",      value:  38_000, color: "#378add" },
    ],
    orders: [
      { id: "OC-26-04810", sku: "ING-0011", qty: "4,100 kg", unit: "$13.2/kg", total: 54_200, deliver: "30 May 2026", status: "transit" },
      { id: "OC-26-04740", sku: "ING-0024", qty: "2,800 kg", unit: "$15.0/kg", total: 42_000, deliver: "20 Abr 2026", status: "delivered" },
      { id: "OC-26-04690", sku: "SAB-0118", qty: "1,700 kg", unit: "$22.1/kg", total: 37_600, deliver: "02 Abr 2026", status: "delivered" },
      { id: "OC-26-04640", sku: "ING-0011", qty: "3,200 kg", unit: "$13.2/kg", total: 42_200, deliver: "15 Mar 2026", status: "delivered" },
    ],
    kpi: { total: 176_000, avg: 44_000, count: 4, top: "Ingredientes" },
  },
  "Arcor": {
    monthly: {
      "3M":  [0, 22, 0],
      "6M":  [38, 0, 0, 22, 0, 0],
      "12M": [42,40,38,0,0,22,0,0,0,0,0,0],
    },
    divisionSplit: [
      { name: "Fragancias", value: 64_000, color: "#7f77dd" },
      { name: "Mascotas",   value: 18_000, color: "#1d9e75" },
    ],
    orders: [
      { id: "OC-26-04808", sku: "FRG-0031", qty: "900 kg", unit: "$46.8/kg", total: 42_100, deliver: "06 Jun 2026", status: "production" },
      { id: "OC-26-04520", sku: "FRG-0044", qty: "520 kg", unit: "$42.3/kg", total: 22_000, deliver: "02 Mar 2026", status: "delivered" },
      { id: "OC-26-04410", sku: "PET-0018", qty: "640 kg", unit: "$28.1/kg", total: 18_000, deliver: "14 Ene 2026", status: "delivered" },
    ],
    kpi: { total: 82_100, avg: 27_400, count: 3, top: "Fragancias" },
  },
  "Grupo Rey": {
    monthly: {
      "3M":  [34, 41, 38],
      "6M":  [28, 32, 34, 41, 38, 0],
      "12M": [22,26,28,30,28,32,34,33,28,32,34,38],
    },
    divisionSplit: [
      { name: "Sabores",  value: 78_000, color: "#378add" },
      { name: "Mascotas", value: 34_000, color: "#1d9e75" },
    ],
    orders: [
      { id: "OC-26-04795", sku: "SAB-0142", qty: "1,800 kg", unit: "$20.6/kg", total: 37_100, deliver: "18 May 2026", status: "delivered" },
      { id: "OC-26-04730", sku: "PET-0036", qty: "1,200 kg", unit: "$26.0/kg", total: 31_200, deliver: "16 Abr 2026", status: "delivered" },
      { id: "OC-26-04680", sku: "SAB-0118", qty: "1,400 kg", unit: "$22.1/kg", total: 31_000, deliver: "28 Mar 2026", status: "delivered" },
      { id: "OC-26-04630", sku: "SAB-0205", qty: "1,100 kg", unit: "$24.9/kg", total: 27_400, deliver: "12 Mar 2026", status: "delivered" },
    ],
    kpi: { total: 132_000, avg: 33_000, count: 4, top: "Sabores" },
  },
};
