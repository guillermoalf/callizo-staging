"use client";

import { useState, useEffect, type FormEvent } from "react";
import { X, ShoppingCart, Check } from "lucide-react";
import { Section, Shell } from "@/components/ui/shell";
import { SectionHead } from "@/components/ui/section-head";
import { Button } from "@/components/ui/button";
import { FichaTecnica } from "@/components/FichaTecnica";
import { QuoteCartModal, type CartItem } from "@/components/sections/quote-cart-modal";
import { useLanguage, type Translations } from "@/contexts/language-context";
import { PRODUCTS, DIVISION_STYLES, type Product } from "@/content/products";
import type { DivisionId } from "@/content/divisions";

/* ─── Quick single-product quote modal ──────────────── */

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
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

  const field =
    "w-full rounded-md border border-rule bg-paper px-3 py-2 text-sm focus:outline-none focus:border-gold-deep";
  const label =
    "block mb-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-rule bg-paper"
        onClick={(e) => e.stopPropagation()}
      >
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

/* ─── Toast notification ─────────────────────────────── */

function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full border border-rule bg-paper px-4 py-2 shadow-lg text-sm">
      <Check size={14} className="text-green-600" />
      {message}
    </div>
  );
}

/* ─── Success screen ─────────────────────────────────── */

function SuccessScreen({
  cotId,
  onClose,
}: {
  cotId: string;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const tc = t.quote_cart;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl border border-rule bg-paper p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
          <Check size={24} className="text-green-600" />
        </div>
        <div className="font-serif text-[22px]">{tc.success_title}</div>
        <p className="mt-2 text-sm text-ink-2">
          {tc.success_body}{" "}
          <span className="font-mono font-semibold">{cotId}</span>
        </p>
        <p className="mt-1 text-sm text-ink-3">{tc.success_footer}</p>
        <Button className="mt-6" onClick={onClose}>
          {tc.success_close}
        </Button>
      </div>
    </div>
  );
}

/* ─── Product card ───────────────────────────────────── */

interface CardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onQuickQuote: (p: Product) => void;
  onFicha: (p: Product) => void;
  t: Translations;
  lang: "es" | "en";
}

function ProductCard({ product, onAddToCart, onQuickQuote, onFicha, t, lang }: CardProps) {
  const style = DIVISION_STYLES[product.division];
  const divLabel = t.division_labels[product.division];
  const tc = t.quote_cart;

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
        <Button size="sm" onClick={() => onAddToCart(product)}>
          {t.catalog.request_quote}
        </Button>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onQuickQuote(product)}
            className="flex-1 text-center font-mono text-[10px] tracking-[0.06em] text-ink-3 underline underline-offset-2 hover:text-ink"
          >
            {tc.quick_quote}
          </button>
          <Button size="sm" variant="ghost" onClick={() => onFicha(product)} className="flex-1">
            {t.ficha.title}
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── Division filter ────────────────────────────────── */

const DIVISION_ORDER: DivisionId[] = [
  "flavors",
  "fragrances",
  "pets",
  "zoo",
  "ingredients",
];

/* ─── Main section ───────────────────────────────────── */

export function CatalogPreview() {
  const { t, lang } = useLanguage();
  const [activeDiv, setActiveDiv] = useState<DivisionId | null>(null);

  // Quick single-product quote modal (legacy path)
  const [quickProduct, setQuickProduct] = useState<Product | null>(null);
  const [fichaProduct, setFichaProduct] = useState<Product | null>(null);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  const filtered =
    activeDiv === null
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.division === activeDiv);

  function handleAddToCart(p: Product) {
    setCartItems((prev) => {
      if (prev.find((x) => x.product.code === p.code)) return prev;
      return [...prev, { product: p, quantity: 1, unit: "kg" }];
    });
    setToast(t.quote_cart.add_toast);
  }

  function handleRemoveFromCart(code: string) {
    setCartItems((prev) => prev.filter((x) => x.product.code !== code));
  }

  function handleUpdateQty(code: string, qty: number) {
    setCartItems((prev) =>
      prev.map((x) => (x.product.code === code ? { ...x, quantity: qty } : x)),
    );
  }

  function handleSuccess(cotId: string) {
    setCartOpen(false);
    setCartItems([]);
    setSuccessId(cotId);
  }

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
                onAddToCart={handleAddToCart}
                onQuickQuote={setQuickProduct}
                onFicha={setFichaProduct}
                t={t}
                lang={lang}
              />
            ))}
          </div>
        </Shell>
      </Section>

      {/* Floating cart button */}
      {cartItems.length > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-paper shadow-lg hover:opacity-90 transition-opacity"
        >
          <ShoppingCart size={16} />
          {t.quote_cart.cart_button_label}
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-deep text-[11px] font-semibold text-paper">
            {cartItems.length}
          </span>
        </button>
      )}

      {/* Toast */}
      {toast && (
        <Toast message={toast} onDone={() => setToast(null)} />
      )}

      {/* Cart modal */}
      {cartOpen && (
        <QuoteCartModal
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemoveFromCart}
          onUpdateQty={handleUpdateQty}
          onSuccess={handleSuccess}
        />
      )}

      {/* Quick single-product modal */}
      {quickProduct && (
        <QuoteModal
          product={quickProduct}
          onClose={() => setQuickProduct(null)}
          t={t}
          lang={lang}
        />
      )}

      {/* Ficha técnica */}
      {fichaProduct && (
        <FichaTecnica
          product={fichaProduct}
          onClose={() => setFichaProduct(null)}
          onQuote={(p) => {
            setFichaProduct(null);
            setQuickProduct(p);
          }}
        />
      )}

      {/* Success screen */}
      {successId && (
        <SuccessScreen cotId={successId} onClose={() => setSuccessId(null)} />
      )}
    </>
  );
}
