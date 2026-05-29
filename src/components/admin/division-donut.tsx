"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { DIVISIONS, REVENUE_YTD_LABEL } from "@/content/admin/divisions";
import { fmtUSD } from "@/content/admin/format";

export function DivisionDonut() {
  return (
    <div>
      <div className="relative h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={DIVISIONS}
              dataKey="value"
              nameKey="name"
              innerRadius="68%"
              outerRadius="100%"
              paddingAngle={2}
              stroke="none"
              isAnimationActive={false}
            >
              {DIVISIONS.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [fmtUSD(Number(value)), name]}
              contentStyle={{
                border: "0.5px solid rgba(20,20,16,0.14)",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-admin-gray-500">
            YTD
          </div>
          <div className="text-[22px] font-bold tracking-[-0.02em]">{REVENUE_YTD_LABEL}</div>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        {DIVISIONS.map((d) => (
          <div
            key={d.name}
            className="grid grid-cols-[12px_1fr_auto_auto] items-center gap-2 text-[12.5px]"
          >
            <span className="size-2.5 rounded-[3px]" style={{ background: d.color }} />
            <span>{d.name}</span>
            <span className="font-semibold tabular-nums">{fmtUSD(d.value)}</span>
            <span className="w-10 text-right tabular-nums text-admin-gray-500">{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
