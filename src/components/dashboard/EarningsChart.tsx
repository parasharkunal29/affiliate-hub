"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { earningsData } from "@/lib/data";

export default function EarningsChart() {
  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-bold text-lg">Earnings Overview</h3>
          <p className="text-gray-500 text-sm">Last 7 months</p>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-gray-400">
            <span className="w-3 h-0.5 bg-purple-500 rounded-full inline-block" /> Earnings
          </span>
          <span className="flex items-center gap-1.5 text-gray-400">
            <span className="w-3 h-0.5 bg-cyan-500 rounded-full inline-block" /> Conversions
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={earningsData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="earningsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="convGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }}
            labelStyle={{ color: "#9ca3af" }}
          />
          <Area type="monotone" dataKey="earnings" stroke="#a855f7" strokeWidth={2} fill="url(#earningsGrad)" />
          <Area type="monotone" dataKey="conversions" stroke="#06b6d4" strokeWidth={2} fill="url(#convGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
