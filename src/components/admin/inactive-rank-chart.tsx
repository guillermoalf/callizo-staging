"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { INACTIVE } from "@/content/admin/inactive";
import { fmtUSD } from "@/content/admin/format";

const data = [...INACTIVE]
  .sort((a, b) => b.acv - a.acv)
  .slice(0, 10)
  .map((c) => ({ name: c.name, acv: c.acv }));

export function InactiveRankChart() {
  return (
    <div className="h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 4, right: 16, left: 4, bottom: 4 }}
        >
          <CartesianGrid horizontal={false} stroke="rgba(20,20,16,0.05)" />
          <XAxis
            type="number"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#76766f", fontSize: 10.5 }}
            tickFormatter={(v) => fmtUSD(v)}
          />
          <YAxis
            type="category"
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#36362f", fontSize: 11 }}
            width={140}
          />
          <Tooltip
            formatter={(v) => [fmtUSD(Number(v)), "Valor anual"]}
            cursor={{ fill: "rgba(20,20,16,0.04)" }}
          />
          <Bar dataKey="acv" fill="#c64646" radius={[0, 4, 4, 0]} barSize={16} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
