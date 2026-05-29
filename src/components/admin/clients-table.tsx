"use client";

import { useMemo, useState } from "react";
import { CLIENTS, type ClientStatus } from "@/content/admin/clients";
import { countryByCode } from "@/content/admin/countries";
import { fmtUSD, fmtUSDFull } from "@/content/admin/format";
import { Card, CardHead } from "./card";
import { Btn } from "./btn";
import { Chip } from "./chip";
import { Avatar } from "./avatar";
import { Pill } from "./pill";
import { Icon } from "./icon";
import { SearchInput } from "./search-input";
import { Table, Th, Td } from "./table";

const STATUS_FILTERS: { id: "all" | ClientStatus; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "active", label: "Activos" },
  { id: "renewal", label: "Por renovar" },
  { id: "risk", label: "En riesgo" },
];

const DIVISIONS = ["all", "Sabores", "Fragancias", "Mascotas", "Zootecnia", "Ingredientes"];

function StatusPill({ status }: { status: ClientStatus }) {
  if (status === "active") return <Pill tone="green">Activo</Pill>;
  if (status === "renewal") return <Pill tone="amber">Por renovar</Pill>;
  return <Pill tone="red">En riesgo</Pill>;
}

const Divider = () => <span className="h-[22px] w-px bg-admin-border-strong" />;

export function ClientsTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | ClientStatus>("all");
  const [division, setDivision] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CLIENTS.filter((c) => {
      if (status !== "all" && c.status !== status) return false;
      if (division !== "all" && c.division !== division) return false;
      if (q) {
        const country = countryByCode(c.country)?.name ?? "";
        if (!c.name.toLowerCase().includes(q) && !country.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [query, status, division]);

  const countByStatus = {
    all: CLIENTS.length,
    active: CLIENTS.filter((c) => c.status === "active").length,
    renewal: CLIENTS.filter((c) => c.status === "renewal").length,
    risk: CLIENTS.filter((c) => c.status === "risk").length,
  };
  const totalACV = filtered.reduce((sum, c) => sum + c.acv, 0);

  return (
    <Card>
      <CardHead
        title="Cartera de clientes"
        meta={`Mostrando ${filtered.length} de ${CLIENTS.length} · ACV total ${fmtUSD(totalACV)}`}
        action={
          <div className="flex gap-2">
            <Btn>
              <Icon name="download" size={14} />
              Exportar
            </Btn>
            <Btn variant="primary">
              <Icon name="plus" size={14} />
              Nuevo cliente
            </Btn>
          </div>
        }
      />

      <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Buscar por nombre o país…"
          className="w-[280px]"
        />
        <Divider />
        {STATUS_FILTERS.map((s) => (
          <Chip key={s.id} active={status === s.id} count={countByStatus[s.id]} onClick={() => setStatus(s.id)}>
            {s.label}
          </Chip>
        ))}
        <Divider />
        {DIVISIONS.map((d) => (
          <Chip key={d} active={division === d} onClick={() => setDivision(d)}>
            {d === "all" ? "Todas divisiones" : d}
          </Chip>
        ))}
      </div>

      <Table>
        <thead>
          <tr>
            <Th>Cliente</Th>
            <Th>País</Th>
            <Th>División</Th>
            <Th>ACV</Th>
            <Th>Última orden</Th>
            <Th>Estado</Th>
            <Th />
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, i) => {
            const country = countryByCode(c.country);
            return (
              <tr key={c.name}>
                <Td>
                  <div className="flex items-center gap-2.5">
                    <Avatar initials={c.short} />
                    <div>
                      <div className="font-semibold">{c.name}</div>
                      <div className="text-[11px] text-admin-gray-500">
                        ID #CL-{(2000 + i).toString().padStart(4, "0")}
                      </div>
                    </div>
                  </div>
                </Td>
                <Td>
                  <span className="text-base">{country?.flag}</span>{" "}
                  <span className="text-admin-gray-500">{country?.name}</span>
                </Td>
                <Td>{c.division}</Td>
                <Td className="font-semibold tabular-nums">{fmtUSDFull(c.acv)}</Td>
                <Td className="text-admin-gray-500">{c.last}</Td>
                <Td>
                  <StatusPill status={c.status} />
                </Td>
                <Td>
                  <button className="inline-flex size-7 items-center justify-center rounded-lg text-admin-gray-500 hover:bg-admin-gray-100">
                    <Icon name="dots" size={16} />
                  </button>
                </Td>
              </tr>
            );
          })}
          {filtered.length === 0 && (
            <tr>
              <Td colSpan={7} className="py-8 text-center text-admin-gray-500">
                Ningún cliente coincide con los filtros aplicados.
              </Td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
}
