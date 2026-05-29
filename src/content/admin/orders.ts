export type OrderStatus = "transit" | "production" | "delayed" | "hold" | "approval";

export type Order = {
  id: string;
  client: string;
  country: string;
  sku: string;
  value: number;
  deliver: string;
  status: OrderStatus;
};

export const ORDER_STATUS_META: Record<
  OrderStatus,
  { label: string; cls: string; icon: string }
> = {
  transit: { label: "En tránsito", cls: "blue", icon: "truck-delivery" },
  production: { label: "En producción", cls: "purple", icon: "building-factory-2" },
  delayed: { label: "Retrasada", cls: "red", icon: "alert-triangle" },
  hold: { label: "Calidad — hold", cls: "amber", icon: "shield-half" },
  approval: { label: "Pend. aprobación", cls: "gray", icon: "clock-pause" },
};

export const ORDERS: Order[] = [
  { id: "OC-26-04812", client: "Nestlé Latam", country: "MX", sku: "SAB-0142", value: 86_400, deliver: "02 Jun 2026", status: "transit" },
  { id: "OC-26-04811", client: "Grupo Bimbo", country: "MX", sku: "SAB-0118", value: 72_900, deliver: "28 May 2026", status: "production" },
  { id: "OC-26-04810", client: "Alicorp", country: "PE", sku: "ING-0011", value: 54_200, deliver: "30 May 2026", status: "delayed" },
  { id: "OC-26-04809", client: "Grupo Nutresa", country: "CO", sku: "SAB-0205", value: 48_700, deliver: "04 Jun 2026", status: "transit" },
  { id: "OC-26-04808", client: "Arcor", country: "PY", sku: "FRG-0031", value: 42_100, deliver: "06 Jun 2026", status: "hold" },
  { id: "OC-26-04807", client: "Florida Bebidas", country: "CR", sku: "SAB-0142", value: 38_400, deliver: "29 May 2026", status: "transit" },
  { id: "OC-26-04806", client: "Industrias Mafam", country: "EC", sku: "PET-0018", value: 34_800, deliver: "01 Jun 2026", status: "production" },
  { id: "OC-26-04805", client: "Postobón", country: "CO", sku: "SAB-0118", value: 31_600, deliver: "03 Jun 2026", status: "approval" },
  { id: "OC-26-04804", client: "Grupo Pantaleón", country: "GT", sku: "ZOO-0044", value: 28_900, deliver: "08 Jun 2026", status: "production" },
  { id: "OC-26-04803", client: "Backus & Johnston", country: "PE", sku: "FRG-0044", value: 25_400, deliver: "10 Jun 2026", status: "transit" },
  { id: "OC-26-04802", client: "Quala", country: "CO", sku: "FRG-0031", value: 22_700, deliver: "11 Jun 2026", status: "production" },
  { id: "OC-26-04801", client: "Pollos Bilbao", country: "BO", sku: "ZOO-0072", value: 19_800, deliver: "12 Jun 2026", status: "approval" },
];
