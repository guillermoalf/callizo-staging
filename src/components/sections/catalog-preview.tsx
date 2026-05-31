"use client";

import { useState, useEffect, type FormEvent } from "react";
import { X } from "lucide-react";
import { Section, Shell } from "@/components/ui/shell";
import { SectionHead } from "@/components/ui/section-head";
import { Button } from "@/components/ui/button";
import { FichaTecnica } from "@/components/FichaTecnica";
import { useLanguage, type Translations } from "@/contexts/language-context";
import { PRODUCTS, DIVISION_STYLES, type Product } from "@/content/products";
import type { DivisionId } from "@/content/divisions";

/* ─── Quote modal ──────────────────────────────────────────────── */

interface ModalProps {
  product: Product;
  onClose: () => void;
  t: Translations;
  lang: "es" | "en";
}

function QuoteModal({ product, onClose, t, lang }: ModalProps) {
  const tc = t.catalog;
  const style = DIVISION_STYLES[product.division];
  const divLabel = t.division_labels[product.division];

  const [form, setForm] = useState({
    company: "",
    contact: "",
    email: "",
    country: "",
    volume: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.company || !form.contact || !form.email || !form.country) return;
    setSubmitted(true);
  };

  const field = "w-full rounded-md border border-rule bg-paper px-3 py-2 text-sm focus:outline-none focus:border-gold-deep";
  const label = "block mb-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-rule bg-paper"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-rule px-6 py-4">
          <span className="font-serif text-[18px]">{tc.modal_title}</span>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-ink-3 hover:text-ink"
            aria-label={tc.close}
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="font-serif text-[22px]">{tc.success_title}</div>
              <p className="mt-2 text-sm text-ink-2">{tc.success_body}</p>
              <Button className="mt-6" onClick={onClose}>
                {tc.close}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* product (read-only) */}
              <div>
                <span className={label}>{tc.field_product}</span>
                <div className="flex items-center gap-2 rounded-md border border-rule bg-paper-2 px-3 py-2">
                  <span className="font-mono text-[11px] tracking-[0.08em] text-ink-3">
                    {product.code}
                  </span>
                  <span
                    className="rounded px-1.5 py-0.5 font-mono text-[10px] tracking-[0.06em]"
                    style={{ background: style.pillBg, color: style.pillText }}
                  >
                    {divLabel}
                  </span>
                  <span className="text-sm">{product.name[lang]}</span>
                </div>
              </div>

              {/* company */}
              <div>
                <label className={label} htmlFor="q-company">
                  {tc.field_company} <span className="text-gold-deep">*</span>
                </label>
                <input
                  id="q-company"
                  required
                  className={field}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>

              {/* contact name */}
              <div>
                <label className={label} htmlFor="q-contact">
                  {tc.field_contact} <span className="text-gold-deep">*</span>
                </label>
                <input
                  id="q-contact"
                  required
                  className={field}
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                />
              </div>

              {/* email */}
              <div>
                <label className={label} htmlFor="q-email">
                  {tc.field_email} <span className="text-gold-deep">*</span>
                </label>
                <input
                  id="q-email"
                  type="email"
                  required
                  className={field}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* country */}
              <div>
                <label className={label} htmlFor="q-country">
                  {tc.field_country} <span className="text-gold-deep">*</span>
                </label>
                <select
                  id="q-country"
                  required
                  className={field}
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                >
                  <option value="">{tc.select_country}</option>
                  {t.countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* volume (optional) */}
              <div>
                <label className={label} htmlFor="q-volume">
                  {tc.field_volume}
                </label>
                <input
                  id="q-volume"
                  type="number"
                  min="0"
                  className={field}
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                />
              </div>

              {/* notes (optional) */}
              <div>
                <label className={label} htmlFor="q-notes">
                  {tc.field_notes}
                </label>
                <textarea
                  id="q-notes"
                  rows={3}
                  className={`${field} resize-none`}
                  placeholder={tc.notes_placeholder}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </div>

              <Button type="submit" className="mt-1 w-full">
                {tc.submit}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Product card ─────────────────────────────────────────────── */

interface CardProps {
  product: Product;
  onQuote: (p: Product) => void;
  onFicha: (p: Product) => void;
  t: Translations;
  lang: "es" | "en";
}

function ProductCard({ product, onQuote, onFicha, t, lang }: CardProps) {
  const style = DIVISION_STYLES[product.division];
  const divLabel = t.division_labels[product.division];

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-rule bg-paper-2 p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] tracking-[0.08em] text-ink-3">
          {product.code}
        </span>
        <span
          className="shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] tracking-[0.06em]"
          style={{ background: style.pillBg, color: style.pillText }}
        >
          {divLabel}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-serif text-[18px] leading-[1.2]">
          {product.name[lang]}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.5] text-ink-2">
          {product.description[lang]}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Button size="sm" onClick={() => onQuote(product)}>
          {t.catalog.request_quote}
        </Button>
        <Button size="sm" variant="ghost" onClick={() => onFicha(product)}>
          {t.ficha.title}
        </Button>
      </div>
    </div>
  );
}

/* ─── Division filter ──────────────────────────────────────────── */

const DIVISION_ORDER: DivisionId[] = [
  "flavors",
  "fragrances",
  "pets",
  "zoo",
  "ingredients",
];

/* ─── Main section ─────────────────────────────────────────────── */

export function CatalogPreview() {
  const { t, lang } = useLanguage();
  const [activeDiv, setActiveDiv] = useState<DivisionId | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [fichaProduct, setFichaProduct] = useState<Product | null>(null);

  const filtered =
    activeDiv === null
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.division === activeDiv);

  return (
    <>
      <Section id="catalog" anno="§ 02 / CATALOG">
        <Shell>
          <SectionHead
            num={t.catalog.section_label}
            eyebrow={t.catalog.eyebrow}
            title={
              <>
                {t.catalog.title_1}
                <br />
                <em>{t.catalog.title_2}</em>
              </>
            }
            side={t.catalog.side}
          />

          {/* Division filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveDiv(null)}
              className={
                activeDiv === null
                  ? "rounded-full bg-ink px-4 py-1.5 font-mono text-[11px] tracking-[0.08em] text-paper"
                  : "rounded-full border border-rule px-4 py-1.5 font-mono text-[11px] tracking-[0.08em] text-ink-3 hover:text-ink"
              }
            >
              {t.catalog.all}
            </button>
            {DIVISION_ORDER.map((div) => {
              const style = DIVISION_STYLES[div];
              const active = activeDiv === div;
              return (
                <button
                  key={div}
                  onClick={() => setActiveDiv(active ? null : div)}
                  className="rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.08em] transition-colors"
                  style={
                    active
                      ? { background: style.activeBg, color: style.activeText }
                      : { background: style.pillBg, color: style.pillText }
                  }
                >
                  {t.division_labels[div]}
                </button>
              );
            })}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard
                key={p.code}
                product={p}
                onQuote={setSelectedProduct}
                onFicha={setFichaProduct}
                t={t}
                lang={lang}
              />
            ))}
          </div>
        </Shell>
      </Section>

      {selectedProduct && (
        <QuoteModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          t={t}
          lang={lang}
        />
      )}

      {fichaProduct && (
        <FichaTecnica
          product={fichaProduct}
          onClose={() => setFichaProduct(null)}
          onQuote={(p) => {
            setFichaProduct(null);
            setSelectedProduct(p);
          }}
        />
      )}
    </>
  );
}
