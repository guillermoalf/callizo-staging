"use client";

import { useState, useMemo } from "react";
import { X, Globe } from "lucide-react";
import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { AiCallout } from "@/components/admin/ai-callout";
import { Btn } from "@/components/admin/btn";
import { Pill, type PillTone } from "@/components/admin/pill";
import { Table, Th, Td } from "@/components/admin/table";
import { useQuotationStore } from "@/store/quotationStore";
import {
  QUOTATION_STATUS_LABELS,
  QUOTATION_STATUS_PILL,
  type QuotationStatus,
  type Quotation,
} from "@/types/quotation";
import { fmtUSDFull } from "@/content/admin/format";

const STATUS_OPTIONS: QuotationStatus[] = [
  "borrador",
  "enviada",
  "en_negociacion",
  "ganada",
  "perdida",
  "vencida",
];

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-CR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* ─── Detail panel ───────────────────────────────────── */

function DetailPanel({
  q,
  onClose,
  onStatusChange,
}: {
  q: Quotation;
  onClose: () => void;
  onStatusChange: (id: string, s: QuotationStatus) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-admin-ink/30">
      <div className="flex h-full w-full max-w-[480px] flex-col overflow-y-auto bg-white shadow-xl">
        {/* header */}
        <div className="flex items-center justify-between border-b border-admin-border-strong px-5 py-4">
          <div>
            <span className="font-mono text-[12px] font-semibold tracking-[0.04em]">
              {q.id}
            </span>
            {q.source === "landing" && (
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-admin-blue-50 px-2 py-0.5 text-[10.5px] font-semibold text-admin-blue">
                <Globe size={10} />
                Landing
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-admin-gray-400 hover:text-admin-ink"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-5 px-5 py-5">
          {/* Status + rep */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.06em] text-admin-gray-500">
                Estado
              </div>
              <select
                value={q.status}
                onChange={(e) =>
                  onStatusChange(q.id, e.target.value as QuotationStatus)
                }
                className="w-full rounded-lg border-[0.5px] border-admin-border-strong bg-white py-[7px] pl-3 pr-3 text-[13px] outline-none focus:border-admin-blue"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {QUOTATION_STATUS_LABELS[s]}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.06em] text-admin-gray-500">
                Rep. asignado
              </div>
              <div className="rounded-lg border-[0.5px] border-admin-border-strong bg-admin-gray-50 px-3 py-[7px] text-[13px]">
                {q.assignedSalesRep}
              </div>
            </div>
          </div>

          {/* Contact */}
          <section>
            <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.06em] text-admin-gray-500">
              Contacto
            </h4>
            <div className="rounded-lg border-[0.5px] border-admin-border-strong bg-admin-gray-50 px-4 py-3 text-[13px]">
              <div className="font-semibold">{q.companyName}</div>
              <div className="text-admin-gray-500">{q.contactName}</div>
              <div className="text-admin-gray-500">{q.contactEmail}</div>
              <div className="text-admin-gray-500">{q.contactPhone}</div>
            </div>
          </section>

          {/* Addresses */}
          <section>
            <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.06em] text-admin-gray-500">
              Dirección empresa
            </h4>
            <div className="rounded-lg border-[0.5px] border-admin-border-strong bg-admin-gray-50 px-4 py-3 text-[13px] text-admin-gray-600">
              <div>{q.companyAddress.line1}</div>
              <div>
                {q.companyAddress.city}, {q.companyAddress.country}{" "}
                {q.companyAddress.postalCode}
              </div>
            </div>
          </section>

          {!q.deliverySameAsCompany && (
            <section>
              <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.06em] text-admin-gray-500">
                Dirección de entrega
              </h4>
              <div className="rounded-lg border-[0.5px] border-admin-border-strong bg-admin-gray-50 px-4 py-3 text-[13px] text-admin-gray-600">
                <div>{q.deliveryAddress.line1}</div>
                <div>
                  {q.deliveryAddress.city}, {q.deliveryAddress.country}{" "}
                  {q.deliveryAddress.postalCode}
                </div>
              </div>
            </section>
          )}

          {/* Line items */}
          <section>
            <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.06em] text-admin-gray-500">
              Productos ({q.lineItems.length})
            </h4>
            <div className="flex flex-col gap-1.5">
              {q.lineItems.map((li) => (
                <div
                  key={li.productCode}
                  className="flex items-center justify-between rounded-lg border-[0.5px] border-admin-border-strong bg-admin-gray-50 px-4 py-2.5 text-[13px]"
                >
                  <div>
                    <span className="font-mono text-[11px] text-admin-gray-500">
                      {li.productCode}
                    </span>
                    <div className="font-medium">{li.productName}</div>
                  </div>
                  <div className="text-right text-admin-gray-500">
                    <div className="font-semibold tabular-nums">
                      {li.quantity} {li.unit}
                    </div>
                    {li.lineTotal > 0 && (
                      <div>{fmtUSDFull(li.lineTotal)}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Total */}
          {q.totalValue > 0 && (
            <div className="flex items-center justify-between rounded-lg bg-admin-blue-50 px-4 py-3 text-[13px]">
              <span className="font-medium text-admin-blue">Valor total estimado</span>
              <span className="font-semibold tabular-nums text-admin-blue">
                {fmtUSDFull(q.totalValue)}
              </span>
            </div>
          )}

          {/* Notes */}
          {q.notes && (
            <section>
              <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.06em] text-admin-gray-500">
                Notas
              </h4>
              <p className="rounded-lg border-[0.5px] border-admin-border-strong bg-admin-gray-50 px-4 py-3 text-[13px] text-admin-gray-600">
                {q.notes}
              </p>
            </section>
          )}

          {/* Dates */}
          <section className="text-[11.5px] text-admin-gray-500">
            <div>Creada: {fmtDate(q.createdAt)}</div>
            <div>Actualizada: {fmtDate(q.updatedAt)}</div>
            <div>Vence: {fmtDate(q.expiresAt)}</div>
            <div>Origen: {q.source === "landing" ? "Landing page" : "Manual"}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────── */

export default function QuotesPage() {
  const quotations = useQuotationStore((s) => s.quotations);
  const updateStatus = useQuotationStore((s) => s.updateQuotationStatus);
  const convRate = useQuotationStore((s) => s.getConversionRate)();

  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<Quotation | null>(null);

  const now = new Date();
  const in7Days = new Date(now);
  in7Days.setDate(in7Days.getDate() + 7);
  const ago14Days = new Date(now);
  ago14Days.setDate(ago14Days.getDate() - 14);

  const activeCount = useMemo(
    () =>
      quotations.filter((q) =>
        ["enviada", "en_negociacion"].includes(q.status),
      ).length,
    [quotations],
  );

  const expiringSoon = useMemo(
    () =>
      quotations.filter((q) => {
        const exp = new Date(q.expiresAt);
        return (
          ["enviada", "en_negociacion", "borrador"].includes(q.status) &&
          exp <= in7Days &&
          exp >= now
        );
      }).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [quotations],
  );

  const noResponse = useMemo(
    () =>
      quotations.filter((q) => {
        const upd = new Date(q.updatedAt);
        return q.status === "enviada" && upd <= ago14Days;
      }).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [quotations],
  );

  const activeValue = useMemo(
    () =>
      quotations
        .filter((q) => ["enviada", "en_negociacion"].includes(q.status))
        .reduce((s, q) => s + q.totalValue, 0),
    [quotations],
  );

  const filtered = useMemo(() => {
    if (!query) return quotations;
    const q = query.toLowerCase();
    return quotations.filter((x) =>
      [x.id, x.companyName, ...x.lineItems.map((l) => l.productCode)]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query, quotations]);

  // Sync detail panel when store updates
  const detailFromStore = detail
    ? quotations.find((q) => q.id === detail.id) ?? null
    : null;

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi
          label="Cotizaciones activas"
          icon="file-invoice"
          value={String(activeCount)}
          delta={`${fmtUSDFull(activeValue)} en valor`}
          deltaDir="up"
          foot="Enviadas + En negociación"
        />
        <Kpi
          label="Tasa de conversión"
          icon="percentage"
          value={`${convRate}%`}
          delta="Enviadas → Ganadas"
          deltaDir={convRate >= 30 ? "up" : "down"}
          foot="Calculado en tiempo real"
        />
        <Kpi
          label="Expiran en < 7 días"
          icon="clock-exclamation"
          value={String(expiringSoon)}
          delta="Renovar o cerrar"
          deltaDir="flat"
          foot="Activas próximas a vencer"
        />
        <Kpi
          label="Sin respuesta +14 días"
          icon="message-off"
          value={String(noResponse)}
          delta="Requieren seguimiento"
          deltaDir={noResponse > 0 ? "down" : "flat"}
          foot="Estado enviada sin actualizar"
        />
      </div>

      <AiCallout
        title="Insight IA · Seguimiento de cotizaciones"
        action={<Btn variant="primary">Enviar recordatorios</Btn>}
      >
        &ldquo;{noResponse} cotizaciones llevan más de 14 días sin respuesta. Las cotizaciones
        aceptadas han sido movidas automáticamente a etapa Negociación en el pipeline.&rdquo;
      </AiCallout>

      <Card>
        <CardHead
          title="Cotizaciones"
          meta={`Mostrando ${filtered.length} de ${quotations.length}`}
          action={
            <div className="flex gap-2">
              <div className="relative w-[230px]">
                <input
                  placeholder="Buscar nº, empresa o SKU…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-lg border-[0.5px] border-admin-border-strong bg-white py-[7px] pl-3 pr-3 text-[13px] outline-none focus:border-admin-blue"
                />
              </div>
              <Btn variant="primary">+ Nueva cotización</Btn>
            </div>
          }
        />
        <Table>
          <thead>
            <tr>
              <Th>Nº cotización</Th>
              <Th>Cliente</Th>
              <Th>Productos</Th>
              <Th>Valor</Th>
              <Th>Emisión</Th>
              <Th>Vencimiento</Th>
              <Th>Rep.</Th>
              <Th>Estado</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((q) => {
              const pillTone = QUOTATION_STATUS_PILL[q.status] as PillTone;
              const statusLabel = QUOTATION_STATUS_LABELS[q.status];
              const expDate = new Date(q.expiresAt);
              const isExpiring =
                ["enviada", "en_negociacion", "borrador"].includes(q.status) &&
                expDate <= in7Days &&
                expDate >= now;
              const isNoResponse =
                q.status === "enviada" &&
                new Date(q.updatedAt) <= ago14Days;

              return (
                <tr
                  key={q.id}
                  className={`cursor-pointer hover:bg-admin-gray-50 ${isNoResponse ? "bg-admin-red-50/30" : ""}`}
                  onClick={() => setDetail(q)}
                >
                  <Td>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[12px] font-semibold">
                        {q.id}
                      </span>
                      {q.source === "landing" && (
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-admin-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-admin-blue">
                          <Globe size={9} />
                          Landing
                        </span>
                      )}
                    </div>
                  </Td>
                  <Td className="font-semibold">{q.companyName}</Td>
                  <Td>
                    <div className="flex flex-wrap gap-1">
                      {q.lineItems.map((li) => (
                        <span
                          key={li.productCode}
                          className="rounded bg-admin-gray-100 px-1.5 py-px font-mono text-[11.5px]"
                        >
                          {li.productCode}
                        </span>
                      ))}
                    </div>
                  </Td>
                  <Td className="font-semibold tabular-nums">
                    {q.totalValue > 0 ? fmtUSDFull(q.totalValue) : "—"}
                  </Td>
                  <Td className="text-admin-gray-500">{fmtDate(q.createdAt)}</Td>
                  <Td>
                    {isExpiring ? (
                      <span className="font-semibold text-admin-amber">
                        ⚠ {fmtDate(q.expiresAt)}
                      </span>
                    ) : (
                      <span className="text-admin-gray-500">
                        {fmtDate(q.expiresAt)}
                      </span>
                    )}
                  </Td>
                  <Td className="text-admin-gray-500">{q.assignedSalesRep}</Td>
                  <Td onClick={(e) => e.stopPropagation()}>
                    <select
                      value={q.status}
                      onChange={(e) =>
                        updateStatus(q.id, e.target.value as QuotationStatus)
                      }
                      className="rounded-md border-[0.5px] border-admin-border-strong bg-white px-2 py-1 text-[12px] outline-none focus:border-admin-blue"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {QUOTATION_STATUS_LABELS[s]}
                        </option>
                      ))}
                    </select>
                    <span className="ml-1.5">
                      <Pill tone={pillTone}>{statusLabel}</Pill>
                    </span>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>

      {detailFromStore && (
        <DetailPanel
          q={detailFromStore}
          onClose={() => setDetail(null)}
          onStatusChange={(id, s) => {
            updateStatus(id, s);
          }}
        />
      )}
    </>
  );
}
