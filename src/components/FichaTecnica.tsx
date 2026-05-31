"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { DIVISION_STYLES, type Product } from "@/content/products";

interface Props {
  product: Product;
  onClose: () => void;
  onQuote: (p: Product) => void;
}

export function FichaTecnica({ product, onClose, onQuote }: Props) {
  const { t, lang } = useLanguage();
  const tf = t.ficha;
  const { ficha } = product;
  const style = DIVISION_STYLES[product.division];
  const divLabel = t.division_labels[product.division];

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

  const specs: [string, string][] = [
    [tf.tipo, ficha.tipo],
    [tf.presentacion, ficha.presentacion],
    [tf.dosis, ficha.dosis],
    [tf.ph, ficha.ph],
    [tf.temp, ficha.tempMax],
    [tf.solubilidad, ficha.solubilidad],
    [tf.vidaUtil, ficha.vidaUtil],
    [tf.almacenamiento, ficha.almacenamiento],
  ];

  const sectionLabel = "font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 mb-3";

  return createPortal(
    <div className="ficha-modal-root">
      {/* overlay — neutralised in print via .ficha-overlay CSS */}
      <div
        className="ficha-overlay fixed inset-0 z-[60] flex items-center justify-center p-6 bg-ink/50"
        onClick={onClose}
      >
        {/* panel */}
        <div
          className="ficha-print relative flex w-full max-w-3xl flex-col rounded-xl border border-rule bg-paper"
          style={{ maxHeight: "90vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── header ── */}
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-rule px-7 py-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] tracking-[0.08em] text-ink-3">
                  {product.code}
                </span>
                <span
                  className="rounded px-1.5 py-0.5 font-mono text-[10px] tracking-[0.06em]"
                  style={{ background: style.pillBg, color: style.pillText }}
                >
                  {divLabel}
                </span>
              </div>
              <h2 className="mt-1 font-serif text-[26px] leading-[1.1]">
                {product.name[lang]}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="mt-1 shrink-0 rounded-md p-1 text-ink-3 hover:text-ink print:hidden"
              aria-label={t.catalog.close}
            >
              <X size={20} />
            </button>
          </div>

          {/* ── scrollable body ── */}
          <div className="min-h-0 flex-1 overflow-y-auto px-7 py-6">

            {/* descripción */}
            <div className="mb-8">
              <p className={sectionLabel}>{tf.descripcion}</p>
              <p className="text-[14px] leading-[1.6] text-ink-2">{ficha.descripcion}</p>
            </div>

            {/* specs table */}
            <div className="mb-8">
              <p className={sectionLabel}>{tf.specs}</p>
              <div className="divide-y divide-rule">
                {specs.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[1fr_1.4fr] gap-6 py-2.5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-3">
                      {label}
                    </span>
                    <span className="text-[13px] text-ink">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* aplicaciones */}
            <div className="mb-8">
              <p className={sectionLabel}>{tf.aplicaciones}</p>
              <div className="flex flex-wrap gap-2">
                {ficha.aplicaciones.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-paper-3 px-3 py-1 text-[12px] text-ink-2"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* certificaciones */}
            <div>
              <p className={sectionLabel}>{tf.certificaciones}</p>
              <div className="flex flex-wrap gap-2">
                {ficha.certificaciones.map((c) => (
                  <span
                    key={c}
                    className="rounded bg-gold-soft px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── footer ── */}
          <div className="flex shrink-0 items-center justify-end gap-3 border-t border-rule px-7 py-4 print:hidden">
            <Button variant="ghost" size="sm" onClick={() => window.print()}>
              {tf.descargar}
            </Button>
            <Button
              size="sm"
              onClick={() => {
                onClose();
                onQuote(product);
              }}
            >
              {tf.cotizar}
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
