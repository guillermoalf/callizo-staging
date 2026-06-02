"use client";

import { useState, useMemo } from "react";
import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { Btn } from "@/components/admin/btn";
import { Avatar } from "@/components/admin/avatar";
import { CLIENTS, type ClientStatus } from "@/content/admin/clients";
import { COUNTRIES } from "@/content/admin/countries";
import { fmtUSD, fmtUSDFull } from "@/content/admin/format";

const STATUS_TONE: Record<ClientStatus, PillTone> = {
  active:  "green",
  renewal: "amber",
  risk:    "red",
};
const STATUS_LABEL: Record<ClientStatus, string> = {
  active:  "Activo",
  renewal: "Por renovar",
  risk:    "En riesgo",
};

function RiskCell({ score }: { score: number }) {
  const tone = score <= 30 ? "green" : score <= 65 ? "amber" : "red";
  const colors = {
    green: { fill: "#1d9e75", text: "text-admin-green" },
    amber: { fill: "#ba7517", text: "text-admin-amber" },
    red:   { fill: "#c64646", text: "text-admin-red" },
  };
  const c = colors[tone];
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-1.5 w-[84px] overflow-hidden rounded-full bg-admin-gray-100">
        <div className="h-full rounded-full" style={{ width: `${score}%`, background: c.fill }} />
      </div>
      <span className={`min-w-[22px] text-[12.5px] font-bold tabular-nums ${c.text}`}>{score}</span>
    </div>
  );
}

const DIVISIONS = ["all", "Sabores", "Fragancias", "Mascotas", "Zootecnia", "Ingredientes"];
const STATUS_FILTERS = [
  { id: "all",     label: "Todos" },
  { id: "active",  label: "Activos" },
  { id: "renewal", label: "Por renovar" },
  { id: "risk",    label: "En riesgo" },
] as const;

export default function CrmPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | ClientStatus>("all");
  const [division, setDivision] = useState("all");

  const filtered = useMemo(() => {
    return CLIENTS.filter((c) => {
      if (status !== "all" && c.status !== status) return false;
      if (division !== "all" && c.division !== division) return false;
      if (query) {
        const q = query.toLowerCase();
        if (!c.name.toLowerCase().includes(q) && !c.country.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [query, status, division]);

  const counts = useMemo(() => ({
    all:     CLIENTS.length,
    active:  CLIENTS.filter((c) => c.status === "active").length,
    renewal: CLIENTS.filter((c) => c.status === "renewal").length,
    risk:    CLIENTS.filter((c) => c.status === "risk").length,
  }), []);

  const totalACV = filtered.reduce((sum, c) => sum + c.acv, 0);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Total clientes" icon="users"          value="342" delta="+18 QTD"              deltaDir="up"   foot="10 países · 5 divisiones" />
        <Kpi label="Activos"        icon="circle-check"   value="298" delta="87% del total"         deltaDir="flat" foot="Last order < 90 días" />
        <Kpi label="Por renovar"    icon="refresh"        value="31"  delta="Q3 prioridad"          deltaDir="up"   foot="$2.4M ACV en juego" />
        <Kpi label="En riesgo"      icon="alert-triangle" value="13"  delta="+4 vs mes anterior"   deltaDir="down" foot="Sin contacto 45+ días" />
      </div>

      {/* Risk engine explainer */}
      <Card>
        <CardHead
          title="Motor de Risk Score"
          meta="Cómo se calcula el riesgo de cada cliente (0–100) · recalculado a diario por Callizo IA"
          action={<Pill tone="blue">Auto</Pill>}
        />
        <div className="grid grid-cols-3 gap-3 max-[1100px]:grid-cols-1">
          {[
            { tone: "red" as const,   borderColor: "#c64646", pts: "+30 pts", ptsTone: "text-admin-red",   icon: "🔥", label: "Crítico",  items: ["Sin orden en 60+ días", "Renovación en < 45 días sin engagement"] },
            { tone: "amber" as const, borderColor: "#ba7517", pts: "+20 pts", ptsTone: "text-admin-amber", icon: "⚠",  label: "Alerta",   items: ["Órdenes –40% vs promedio histórico", "Facturas impagas +30 días de vencimiento"] },
            { tone: "blue" as const,  borderColor: "#378add", pts: "+10 pts", ptsTone: "text-admin-blue",  icon: "📞", label: "Atención", items: ["Sin contacto comercial registrado en 30+ días"] },
          ].map((e) => (
            <div
              key={e.label}
              className="rounded-[10px] border-[0.5px] border-admin-border-strong border-l-[3px] p-4"
              style={{ borderLeftColor: e.borderColor }}
            >
              <div className={`mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.04em] ${e.ptsTone}`}>
                {e.icon} {e.label} · {e.pts}
              </div>
              <ul className="list-disc pl-4 text-[12.5px] text-admin-gray-600 leading-relaxed space-y-0.5">
                {e.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-3.5 h-px bg-admin-border" />
        <div className="mt-2.5 flex flex-wrap gap-4 text-[12px] text-admin-gray-600">
          <span><span className="font-bold text-admin-green">0–30</span> &nbsp;Saludable</span>
          <span><span className="font-bold text-admin-amber">31–65</span> &nbsp;Vigilar</span>
          <span><span className="font-bold text-admin-red">66–100</span> &nbsp;En riesgo</span>
        </div>
      </Card>

      {/* Clients table */}
      <Card>
        <CardHead
          title="Cartera de clientes"
          meta={`Mostrando ${filtered.length} de ${CLIENTS.length} · ACV total ${fmtUSD(totalACV)}`}
          action={
            <div className="flex gap-2">
              <Btn>Exportar</Btn>
              <Btn variant="primary">+ Nuevo cliente</Btn>
            </div>
          }
        />

        {/* Filter toolbar */}
        <div className="mb-3.5 flex flex-wrap items-center gap-2">
          <div className="relative w-[280px]">
            <input
              placeholder="Buscar por nombre o país…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border-[0.5px] border-admin-border-strong bg-white py-[7px] pl-3 pr-3 text-[13px] outline-none focus:border-admin-blue"
            />
          </div>
          <span className="h-[22px] w-px bg-admin-border-strong" />
          {STATUS_FILTERS.map((s) => (
            <button
              key={s.id}
              onClick={() => setStatus(s.id as typeof status)}
              className={`inline-flex items-center gap-1.5 rounded-full border-[0.5px] px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                status === s.id
                  ? "border-admin-ink bg-admin-ink text-white"
                  : "border-admin-border-strong bg-white text-admin-gray-700 hover:bg-admin-gray-50"
              }`}
            >
              {s.label} <span className="opacity-60">{counts[s.id as keyof typeof counts]}</span>
            </button>
          ))}
          <span className="h-[22px] w-px bg-admin-border-strong" />
          {DIVISIONS.map((d) => (
            <button
              key={d}
              onClick={() => setDivision(d)}
              className={`inline-flex items-center gap-1.5 rounded-full border-[0.5px] px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                division === d
                  ? "border-admin-ink bg-admin-ink text-white"
                  : "border-admin-border-strong bg-white text-admin-gray-700 hover:bg-admin-gray-50"
              }`}
            >
              {d === "all" ? "Todas divisiones" : d}
            </button>
          ))}
        </div>

        <Table>
          <thead>
            <tr>
              <Th>Cliente</Th>
              <Th>País</Th>
              <Th>División</Th>
              <Th>ACV</Th>
              <Th>Risk score</Th>
              <Th>Última orden</Th>
              <Th>Estado</Th>
              <Th />
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => {
              const country = COUNTRIES.find((x) => x.code === c.country);
              return (
                <tr key={i}>
                  <Td>
                    <div className="flex items-center gap-2.5">
                      <Avatar initials={c.short} size={30} />
                      <div>
                        <div className="font-semibold">{c.name}</div>
                        <div className="text-[11px] text-admin-gray-500">
                          ID #CL-{(2000 + i).toString().padStart(4, "0")}
                        </div>
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <span className="mr-1.5">{country?.flag}</span>
                    <span className="text-admin-gray-500">{country?.name}</span>
                  </Td>
                  <Td>{c.division}</Td>
                  <Td className="font-semibold tabular-nums">{fmtUSDFull(c.acv)}</Td>
                  <Td><RiskCell score={c.risk} /></Td>
                  <Td className="text-admin-gray-500">{c.last}</Td>
                  <Td>
                    <Pill tone={STATUS_TONE[c.status]}>{STATUS_LABEL[c.status]}</Pill>
                  </Td>
                  <Td>
                    <button className="inline-flex size-7 items-center justify-center rounded-lg border-[0.5px] border-admin-border bg-white text-admin-gray-500 hover:bg-admin-gray-50">
                      •••
                    </button>
                  </Td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <Td colSpan={8} className="py-8 text-center text-admin-gray-500">
                  Ningún cliente coincide con los filtros aplicados.
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
