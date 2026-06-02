"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip as PieTooltip,
} from "recharts";
import type { DivisionSplit } from "@/content/admin/history";
import { fmtUSD } from "@/content/admin/format";

const MONTHS_3 = ["Mar", "Abr", "May"];
const MONTHS_6 = ["Dic", "Ene", "Feb", "Mar", "Abr", "May"];
const MONTHS_12 = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export function SpendBarChart({ data, period }: { data: number[]; period: "3M" | "6M" | "12M" }) {
  const labels = period === "3M" ? MONTHS_3 : period === "6M" ? MONTHS_6 : MONTHS_12;
  const chartData = data.map((v, i) => ({ month: labels[i] ?? String(i), value: v * 1000 }));

  return (
    <div className="h-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 4, right: 4, left: 4, bottom: 0 }} barCategoryGap="40%">
          <CartesianGrid vertical={false} stroke="rgba(20,20,16,0.05)" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "#76766f", fontSize: 11 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#76766f", fontSize: 11 }} tickFormatter={(v) => fmtUSD(v)} />
          <Tooltip formatter={(v) => [fmtUSD(Number(v)), "Gasto"]} cursor={{ fill: "rgba(20,20,16,0.04)" }} />
          <Bar dataKey="value" fill="#378add" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SpendDonutChart({ split }: { split: DivisionSplit[] }) {
  return (
    <div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={split} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="60%" outerRadius="82%" paddingAngle={2} isAnimationActive={false}>
              {split.map((s, i) => <Cell key={i} fill={s.color} />)}
            </Pie>
            <PieTooltip formatter={(v) => [fmtUSD(Number(v)), ""]} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {split.map((s) => (
          <div key={s.name} className="grid grid-cols-[12px_1fr_auto] items-center gap-2 text-[12.5px]">
            <span className="inline-block size-2.5 rounded-sm" style={{ background: s.color }} />
            <span>{s.name}</span>
            <span className="font-semibold tabular-nums">{fmtUSD(s.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
