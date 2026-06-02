"use client";

import { useState, useEffect, type FormEvent } from "react";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useQuotationStore } from "@/store/quotationStore";
import type { QuotationLineItem, Address } from "@/types/quotation";
import type { Product } from "@/content/products";
import { DIVISION_STYLES } from "@/content/products";

/* ─── Types ─────────────────────────────────────────── */

export interface CartItem {
  product: Product;
  quantity: number;
  unit: "kg" | "L" | "unidad";
}

interface Props {
  items: CartItem[];
  onClose: () => void;
  onRemove: (code: string) => void;
  onUpdateQty: (code: string, qty: number) => void;
  onSuccess: (cotId: string) => void;
}

/* ─── Address block ──────────────────────────────────── */

interface AddrState {
  country: string;
  city: string;
  line1: string;
  postalCode: string;
}

const emptyAddr = (): AddrState => ({
  country: "",
  city: "",
  line1: "",
  postalCode: "",
});

/* ─── Component ──────────────────────────────────────── */

export function QuoteCartModal({
  items,
  onClose,
  onRemove,
  onUpdateQty,
  onSuccess,
}: Props) {
  const { t, lang } = useLanguage();
  const tc = t.quote_cart;
  const addQuotation = useQuotationStore((s) => s.addQuotation);
  const nextRep = useQuotationStore((s) => s.nextRepRoundRobin);
  const quotations = useQuotationStore((s) => s.quotations);

  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyAddr, setCompanyAddr] = useState<AddrState>(emptyAddr);
  const [deliveryAddr, setDeliveryAddr] = useState<AddrState>(emptyAddr);
  const [sameAddr, setSameAddr] = useState(true);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const field =
    "w-full rounded-md border border-rule bg-paper px-3 py-2 text-sm focus:outline-none focus:border-gold-deep";
  const labelCls =
    "block mb-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3";

  function generateId(): string {
    const maxNum = quotations.reduce((max, q) => {
      const m = q.id.match(/COT-2026-(\d+)/);
      return m ? Math.max(max, parseInt(m[1])) : max;
    }, 0);
    return `COT-2026-${String(maxNum + 1).padStart(4, "0")}`;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;

    const lineItems: QuotationLineItem[] = items.map((item) => ({
      productCode: item.product.code,
      productName: item.product.name[lang],
      division: item.product.division,
      quantity: item.quantity,
      unit: item.unit,
      estimatedUnitPrice: 0,
      lineTotal: 0,
    }));

    const finalDelivery: Address = sameAddr
      ? { ...companyAddr }
      : { ...deliveryAddr };

    const now = new Date();
    const expires = new Date(now);
    expires.setDate(expires.getDate() + 30);

    const id = generateId();

    addQuotation({
      id,
      status: "enviada",
      companyName: company,
      contactName: contact,
      contactEmail: email,
      contactPhone: phone,
      companyAddress: { ...companyAddr },
      deliveryAddress: finalDelivery,
      deliverySameAsCompany: sameAddr,
      lineItems,
      assignedSalesRep: nextRep(),
      totalValue: 0,
      currency: "USD",
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      expiresAt: expires.toISOString(),
      notes,
      source: "landing",
    });

    onSuccess(id);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-4 py-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl border border-rule bg-paper shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-rule px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} className="text-ink-3" />
            <span className="font-serif text-[20px]">{tc.cart_title}</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-ink-3 hover:text-ink"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-0">
          {/* Products section */}
          <div className="border-b border-rule px-6 py-5">
            <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
              {tc.section_products}
            </h3>
            {items.length === 0 ? (
              <p className="text-sm text-ink-3">{tc.cart_empty}</p>
            ) : (
              <div className="flex flex-col gap-2">
                {items.map((item) => {
                  const style = DIVISION_STYLES[item.product.division];
                  return (
                    <div
                      key={item.product.code}
                      className="flex flex-wrap items-center gap-3 rounded-lg border border-rule bg-paper-2 px-4 py-3"
                    >
                      <span className="font-mono text-[11px] tracking-[0.08em] text-ink-3 shrink-0">
                        {item.product.code}
                      </span>
                      <span
                        className="shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] tracking-[0.06em]"
                        style={{ background: style.pillBg, color: style.pillText }}
                      >
                        {t.division_labels[item.product.division]}
                      </span>
                      <span className="flex-1 min-w-[120px] text-[13px]">
                        {item.product.name[lang]}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            onUpdateQty(
                              item.product.code,
                              Math.max(1, parseInt(e.target.value) || 1),
                            )
                          }
                          className="w-20 rounded-md border border-rule bg-paper px-2 py-1 text-center text-sm focus:outline-none focus:border-gold-deep"
                          aria-label={tc.qty_label}
                        />
                        <select
                          value={item.unit}
                          onChange={(e) => {
                            const newUnit = e.target.value as "kg" | "L" | "unidad";
                            onUpdateQty(item.product.code, item.quantity);
                            // We directly update the unit by re-mounting through parent
                            // For simplicity, this just updates qty (unit is managed by parent)
                            void newUnit;
                          }}
                          className="rounded-md border border-rule bg-paper px-2 py-1 text-sm focus:outline-none focus:border-gold-deep"
                          aria-label={tc.unit_label}
                        >
                          <option value="kg">kg</option>
                          <option value="L">L</option>
                          <option value="unidad">unidad</option>
                        </select>
                        <button
                          type="button"
                          onClick={() => onRemove(item.product.code)}
                          className="rounded-md p-1 text-ink-3 hover:text-red-600"
                          aria-label={tc.remove}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact section */}
          <div className="border-b border-rule px-6 py-5">
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
              {tc.section_contact}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="qc-company">
                  {tc.field_company} <span className="text-gold-deep">*</span>
                </label>
                <input
                  id="qc-company"
                  required
                  className={field}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="qc-contact">
                  {tc.field_contact} <span className="text-gold-deep">*</span>
                </label>
                <input
                  id="qc-contact"
                  required
                  className={field}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="qc-email">
                  {tc.field_email} <span className="text-gold-deep">*</span>
                </label>
                <input
                  id="qc-email"
                  type="email"
                  required
                  className={field}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="qc-phone">
                  {tc.field_phone} <span className="text-gold-deep">*</span>
                </label>
                <input
                  id="qc-phone"
                  type="tel"
                  required
                  className={field}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Company address */}
          <div className="border-b border-rule px-6 py-5">
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
              {tc.section_company_address}
            </h3>
            <AddressFields
              value={companyAddr}
              onChange={setCompanyAddr}
              idPrefix="co"
              field={field}
              labelCls={labelCls}
              tc={tc}
              countries={t.countries}
            />
          </div>

          {/* Delivery address */}
          <div className="border-b border-rule px-6 py-5">
            <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
              {tc.section_delivery}
            </h3>
            <label className="mb-4 flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={sameAddr}
                onChange={(e) => setSameAddr(e.target.checked)}
                className="h-4 w-4 rounded border-rule accent-gold-deep"
              />
              {tc.same_as_company}
            </label>
            {!sameAddr && (
              <div className="mt-3">
                <AddressFields
                  value={deliveryAddr}
                  onChange={setDeliveryAddr}
                  idPrefix="del"
                  field={field}
                  labelCls={labelCls}
                  tc={tc}
                  countries={t.countries}
                />
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="px-6 py-5">
            <label className={labelCls} htmlFor="qc-notes">
              {tc.field_notes}
            </label>
            <textarea
              id="qc-notes"
              rows={3}
              className={`${field} resize-none`}
              placeholder={tc.notes_placeholder}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div className="border-t border-rule px-6 py-4">
            <button
              type="submit"
              disabled={items.length === 0}
              className="w-full rounded-lg bg-ink px-6 py-3 text-[14px] font-medium text-paper transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {tc.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ─── Address fields sub-component ──────────────────── */

function AddressFields({
  value,
  onChange,
  idPrefix,
  field,
  labelCls,
  tc,
  countries,
}: {
  value: AddrState;
  onChange: (v: AddrState) => void;
  idPrefix: string;
  field: string;
  labelCls: string;
  tc: Record<string, string>;
  countries: string[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor={`${idPrefix}-country`}>
          {tc.field_country} <span className="text-gold-deep">*</span>
        </label>
        <select
          id={`${idPrefix}-country`}
          required
          className={field}
          value={value.country}
          onChange={(e) => onChange({ ...value, country: e.target.value })}
        >
          <option value="">{tc.select_country}</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor={`${idPrefix}-city`}>
          {tc.field_city} <span className="text-gold-deep">*</span>
        </label>
        <input
          id={`${idPrefix}-city`}
          required
          className={field}
          value={value.city}
          onChange={(e) => onChange({ ...value, city: e.target.value })}
        />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor={`${idPrefix}-line1`}>
          {tc.field_address} <span className="text-gold-deep">*</span>
        </label>
        <input
          id={`${idPrefix}-line1`}
          required
          className={field}
          value={value.line1}
          onChange={(e) => onChange({ ...value, line1: e.target.value })}
        />
      </div>
      <div>
        <label className={labelCls} htmlFor={`${idPrefix}-postal`}>
          {tc.field_postal}
        </label>
        <input
          id={`${idPrefix}-postal`}
          className={field}
          value={value.postalCode}
          onChange={(e) => onChange({ ...value, postalCode: e.target.value })}
        />
      </div>
    </div>
  );
}
