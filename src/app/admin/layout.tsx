import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AdminSidebar } from "@/components/admin/sidebar";
import { AdminTopbar } from "@/components/admin/topbar";

const inter = Inter({ variable: "--font-inter-admin", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Callizo.OS — Plataforma de gestión empresarial",
  description: "Back-office de Callizo Aromas — CRM, pipeline, productos, órdenes e IA.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.variable} grid min-h-screen grid-cols-[248px_1fr] bg-admin-bg font-inter text-admin-ink max-[900px]:grid-cols-1`}
    >
      <AdminSidebar />
      <main className="flex min-w-0 flex-col">
        <AdminTopbar />
        <div className="flex flex-col gap-5 px-7 pb-[60px] pt-6">{children}</div>
      </main>
    </div>
  );
}
