export type NavItem = {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: string;
};

export const NAV: NavItem[] = [
  { id: "dashboard", label: "Dashboard ejecutivo", icon: "layout-dashboard", href: "/admin" },
  { id: "crm", label: "Clientes CRM", icon: "users", href: "/admin/crm", badge: "342" },
  { id: "pipeline", label: "Pipeline de ventas", icon: "chart-funnel", href: "/admin/pipeline" },
  { id: "products", label: "Productos & I+D", icon: "flask", href: "/admin/products" },
  { id: "orders", label: "Órdenes", icon: "package", href: "/admin/orders", badge: "78" },
  { id: "ai", label: "Asistente IA", icon: "sparkles", href: "/admin/ai" },
];

export const SECONDARY: { label: string; icon: string }[] = [
  { label: "Configuración", icon: "settings" },
  { label: "Ayuda", icon: "help" },
];

export const VIEW_META: Record<string, { title: string; crumb: string }> = {
  "/admin": { title: "Dashboard ejecutivo", crumb: "Resumen · 10 países · 5 divisiones" },
  "/admin/crm": { title: "Clientes CRM", crumb: "342 clientes activos en LATAM + USA" },
  "/admin/pipeline": { title: "Pipeline de ventas", crumb: "89 oportunidades · $4.04M en juego" },
  "/admin/products": { title: "Productos & I+D", crumb: "Top SKUs por demanda · 7 proyectos activos" },
  "/admin/orders": { title: "Órdenes", crumb: "78 órdenes abiertas · seguimiento en tiempo real" },
  "/admin/ai": { title: "Asistente IA", crumb: "Insights diarios y automatizaciones activas" },
};
