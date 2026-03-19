import { DollarSign, MousePointer, ShoppingCart, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Earnings", value: "$3,240.50", change: "+18.2%", icon: DollarSign, color: "purple" },
  { label: "Total Clicks", value: "12,847", change: "+24.1%", icon: MousePointer, color: "cyan" },
  { label: "Conversions", value: "342", change: "+12.5%", icon: ShoppingCart, color: "emerald" },
  { label: "Conversion Rate", value: "2.66%", change: "+0.4%", icon: TrendingUp, color: "orange" },
];

const colorMap = {
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", icon: "text-purple-400", change: "text-purple-400" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-400", change: "text-cyan-400" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400", change: "text-emerald-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "text-orange-400", change: "text-orange-400" },
};

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const c = colorMap[stat.color as keyof typeof colorMap];
        return (
          <div key={stat.label} className={`glass rounded-2xl p-5 border ${c.border}`}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center`}>
                <stat.icon size={16} className={c.icon} />
              </div>
            </div>
            <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
            <p className={`text-xs font-medium ${c.change}`}>{stat.change} this month</p>
          </div>
        );
      })}
    </div>
  );
}
