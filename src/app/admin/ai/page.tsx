"use client";

import { useState } from "react";
import { Kpi } from "@/components/admin/kpi";
import { Card, CardHead } from "@/components/admin/card";
import { Pill } from "@/components/admin/pill";
import { Btn } from "@/components/admin/btn";
import { Icon } from "@/components/admin/icon";
import { AUTOMATIONS, type Automation } from "@/content/admin/automations";
import { INSIGHTS } from "@/content/admin/insights";

const SEV_STYLES = {
  high:     { bg: "bg-admin-red-50",    text: "text-admin-red",    label: "Crítico",     labelTone: "red" as const },
  medium:   { bg: "bg-admin-amber-50",  text: "text-admin-amber",  label: null,          labelTone: null },
  info:     { bg: "bg-admin-blue-50",   text: "text-admin-blue",   label: null,          labelTone: null },
  positive: { bg: "bg-admin-green-50",  text: "text-admin-green",  label: "Oportunidad", labelTone: "green" as const },
};

export default function AiPage() {
  const [automations, setAutomations] = useState<Automation[]>(AUTOMATIONS);
  const activeCount = automations.filter((a) => a.on).length;

  const toggle = (i: number) => {
    setAutomations((arr) => arr.map((a, idx) => (idx === i ? { ...a, on: !a.on } : a)));
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2">
        <Kpi label="Insights hoy"         icon="sparkles"      value={String(INSIGHTS.length)} delta="2 críticos"         deltaDir="up"   foot="Generados a las 06:00 GMT-6" />
        <Kpi label="Automatizaciones"     icon="bolt"          value={`${activeCount}/${automations.length}`}              delta="activas"   deltaDir="flat" foot="37 acciones ejecutadas hoy" />
        <Kpi label="Tiempo ahorrado"      icon="clock"         value="12.4 h"                  delta="esta semana"        deltaDir="up"   foot="≈ 1.5 FTE liberados" />
        <Kpi label="Precisión de alertas" icon="circle-check"  value="91%"                     delta="+3 pp QoQ"          deltaDir="up"   foot="Validadas por equipo comercial" />
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-4 max-[1100px]:grid-cols-1">
        {/* Insights list */}
        <Card>
          <CardHead
            title="Insights diarios"
            meta="Generados automáticamente por Callizo IA"
            action={
              <div className="flex gap-1.5">
                <span className="rounded-full bg-admin-ink px-3 py-1.5 text-[12.5px] font-medium text-white">Hoy</span>
                <span className="rounded-full border-[0.5px] border-admin-border-strong bg-white px-3 py-1.5 text-[12.5px] font-medium text-admin-gray-700">Semana</span>
                <span className="rounded-full border-[0.5px] border-admin-border-strong bg-white px-3 py-1.5 text-[12.5px] font-medium text-admin-gray-700">Mes</span>
              </div>
            }
          />
          <div className="flex flex-col gap-2.5">
            {INSIGHTS.map((ins, i) => {
              const s = SEV_STYLES[ins.sev];
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-[10px] border-[0.5px] border-admin-border p-3.5"
                >
                  <div className={`flex size-[34px] shrink-0 items-center justify-center rounded-[9px] ${s.bg} ${s.text}`}>
                    <Icon name={ins.icon} size={17} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-0.5 text-[13.5px] font-semibold">
                      {ins.title}
                      {s.labelTone && (
                        <span className="ml-1.5 inline-flex">
                          <Pill tone={s.labelTone}>{s.label}</Pill>
                        </span>
                      )}
                    </div>
                    <div className="text-[12.5px] text-admin-gray-600">{ins.desc}</div>
                    <div className="mt-2 flex gap-2">
                      <Btn><span className="flex items-center gap-1"><Icon name="eye" size={13} /> Ver detalle</span></Btn>
                      <Btn><span className="flex items-center gap-1"><Icon name="message" size={13} /> Asignar</span></Btn>
                      {ins.sev === "high" && (
                        <Btn variant="primary">
                          <span className="flex items-center gap-1"><Icon name="bolt" size={13} /> Acción inmediata</span>
                        </Btn>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Chat */}
        <Card>
          <CardHead
            title="Chat con Callizo IA"
            action={<Pill tone="green">En línea</Pill>}
          />
          <div className="mb-3.5 flex flex-col gap-2.5">
            <div className="rounded-[10px] bg-admin-gray-100 p-2.5 text-[12.5px]">
              <div className="mb-0.5 font-semibold">María Robles</div>
              ¿Cuál es la proyección de cierre para Nestlé este trimestre?
            </div>
            <div className="rounded-[10px] bg-admin-blue-50 p-2.5 text-[12.5px]">
              <div className="mb-0.5 font-semibold text-admin-blue">Callizo IA</div>
              <span className="italic">
                Nestlé Latam tiene 4 oportunidades activas con valor combinado de $640K.
                Probabilidad ponderada: $412K para Q3. La negociación clave (SAB-0142, $340K)
                tiene 78% de cierre.
              </span>
            </div>
          </div>
          <div className="relative">
            <input
              placeholder="Pregunta algo a Callizo IA…"
              className="w-full rounded-[10px] border-[0.5px] border-admin-border-strong bg-white py-2.5 pl-3 pr-10 text-[13px] outline-none focus:border-admin-blue"
            />
            <button className="absolute right-1 top-1 flex size-[30px] items-center justify-center rounded-lg bg-admin-blue text-white">
              <Icon name="send" size={14} />
            </button>
          </div>
          <div className="my-3.5 h-px bg-admin-border" />
          <div className="mb-1.5 text-[11.5px] font-semibold uppercase tracking-[0.04em] text-admin-gray-500">
            Sugerencias
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              "¿Qué clientes están en riesgo de churn?",
              "Compara Sabores vs Fragancias este Q",
              "¿Cuál es el ROI de la planta de Costa Rica?",
            ].map((q) => (
              <button
                key={q}
                className="flex w-full items-center gap-2 rounded-full border-[0.5px] border-admin-border-strong bg-white px-3 py-1.5 text-left text-[12.5px] font-medium text-admin-gray-700 hover:bg-admin-gray-50"
              >
                <Icon name="sparkles" size={13} className="text-admin-blue" />
                {q}
              </button>
            ))}
          </div>
        </Card>
      </div>

      {/* Automations */}
      <Card>
        <CardHead
          title="Automatizaciones activas"
          meta={`${activeCount} de ${automations.length} en ejecución`}
          action={<Btn variant="primary">+ Nueva automatización</Btn>}
        />
        <div>
          {automations.map((a, i) => (
            <div
              key={a.name}
              className="grid grid-cols-[36px_1fr_auto_auto] items-center gap-3.5 border-b-[0.5px] border-admin-border py-3.5 last:border-b-0"
            >
              <div className="flex size-9 items-center justify-center rounded-[9px] bg-admin-gray-100 text-admin-gray-700">
                <Icon name={a.icon} size={18} />
              </div>
              <div>
                <div className="text-[13.5px] font-medium">{a.name}</div>
                <div className="text-[11.5px] text-admin-gray-500">{a.meta}</div>
              </div>
              <Pill tone={a.on ? "green" : "gray"}>{a.on ? "Activa" : "Pausada"}</Pill>
              {/* Toggle */}
              <button
                onClick={() => toggle(i)}
                className={`relative h-[18px] w-8 shrink-0 rounded-full transition-colors ${
                  a.on ? "bg-admin-green" : "bg-admin-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 size-3.5 rounded-full bg-white transition-transform ${
                    a.on ? "left-[calc(100%-16px)]" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
