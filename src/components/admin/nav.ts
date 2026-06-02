export type NavItem = {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: string;
  badgeCls?: "red" | "amber";
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Principal",
    items: [
      { id: "dashboard", label: "Dashboard ejecutivo", icon: "layout-dashboard", href: "/admin" },
      { id: "crm",       label: "Clientes CRM",        icon: "users",            href: "/admin/crm",      badge: "342" },
      { id: "inactive",  label: "Inactivos",           icon: "user-off",         href: "/admin/inactive", badge: "18", badgeCls: "red" },
      { id: "history",   label: "Historial de compras",icon: "history",          href: "/admin/history" },
    ],
  },
  {
    label: "Ventas",
    items: [
      { id: "pipeline",  label: "Pipeline de ventas",  icon: "chart-funnel",     href: "/admin/pipeline" },
      { id: "quotes",    label: "Cotizaciones",         icon: "file-invoice",     href: "/admin/quotes" },
      { id: "leads",     label: "Leads",                icon: "user-plus",        href: "/admin/leads" },
    ],
  },
  {
    label: "Finanzas",
    items: [
      { id: "invoices",  label: "Facturas",             icon: "receipt",          href: "/admin/invoices", badge: "9", badgeCls: "amber" },
    ],
  },
  {
    label: "Operación",
    items: [
      { id: "products",  label: "Productos & I+D",      icon: "flask",            href: "/admin/products" },
      { id: "orders",    label: "Órdenes",              icon: "package",          href: "/admin/orders",   badge: "78" },
      { id: "ai",        label: "Asistente IA",         icon: "sparkles",         href: "/admin/ai" },
    ],
  },
];

export const SECONDARY: { label: string; icon: string }[] = [
  { label: "Configuración", icon: "settings" },
  { label: "Ayuda",         icon: "help" },
];

export const VIEW_META: Record<string, { title: string; crumb: string }> = {
  "/admin":           { title: "Dashboard ejecutivo",  crumb: "Resumen · 10 países · 5 divisiones" },
  "/admin/crm":       { title: "Clientes CRM",         crumb: "342 clientes activos en LATAM + USA" },
  "/admin/inactive":  { title: "Clientes inactivos",   crumb: "18 clientes · $1.84M en riesgo de ingresos" },
  "/admin/history":   { title: "Historial de compras", crumb: "Análisis de gasto por cliente y período" },
  "/admin/pipeline":  { title: "Pipeline de ventas",   crumb: "89 oportunidades · $4.04M en juego" },
  "/admin/quotes":    { title: "Cotizaciones",          crumb: "24 cotizaciones activas · 41% de conversión" },
  "/admin/leads":     { title: "Leads & Prospección",  crumb: "47 leads · 29% de conversión" },
  "/admin/invoices":  { title: "Facturas & Cobranza",  crumb: "$312K por cobrar · $187K vencido" },
  "/admin/products":  { title: "Productos & I+D",      crumb: "Top SKUs por demanda · 7 proyectos activos" },
  "/admin/orders":    { title: "Órdenes",              crumb: "78 órdenes abiertas · seguimiento en tiempo real" },
  "/admin/ai":        { title: "Asistente IA",         crumb: "Insights diarios y automatizaciones activas" },
};
