"use client";

import {
  Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { DIVISIONS, MONTHS } from "@/content/admin/divisions";
import { fmtUSD } from "@/content/admin/format";

// Top 4 divisions, stacked. monthly[] is in thousands → ×1000 for real USD.
const TOP = DIVISIONS.slice(0, 4);
const DATA = MONTHS.map((month, i) => {
  const row: Record<string, number | string> = { month };
  for (const d of TOP) row[d.name] = d.monthly[i] * 1000;
  return row;
});

export function RevenueChart() {
  return (
    <div className="h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DATA} margin={{ top: 8, right: 4, left: 4, bottom: 0 }} barCategoryGap="30%">
          <CartesianGrid vertical={false} stroke="rgba(20,20,16,0.05)" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#76766f", fontSize: 11 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={48}
            tick={{ fill: "#76766f", fontSize: 11 }}
            tickFormatter={(v) => fmtUSD(Number(v))}
          />
          <Tooltip
            cursor={{ fill: "rgba(20,20,16,0.04)" }}
            formatter={(value, name) => [fmtUSD(Number(value)), name]}
            contentStyle={{
              border: "0.5px solid rgba(20,20,16,0.14)",
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Legend
            iconType="circle"
            iconSize={9}
            wrapperStyle={{ fontSize: 11.5, color: "#54544e", paddingTop: 8 }}
          />
          {TOP.map((d, i) => (
            <Bar
              key={d.name}
              dataKey={d.name}
              stackId="rev"
              fill={d.color}
              radius={i === TOP.length - 1 ? [4, 4, 0, 0] : 0}
              maxBarSize={34}
              isAnimationActive={false}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
