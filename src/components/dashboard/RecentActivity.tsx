import { ShoppingCart, MousePointer, Clock } from "lucide-react";
import { recentActivity } from "@/lib/data";
import Badge from "@/components/ui/Badge";

export default function RecentActivity() {
  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold text-lg">Recent Activity</h3>
        <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors">View all</button>
      </div>
      <div className="space-y-3">
        {recentActivity.map((item) => (
          <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
              item.type === "sale" ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-cyan-500/10 border border-cyan-500/20"
            }`}>
              {item.type === "sale"
                ? <ShoppingCart size={14} className="text-emerald-400" />
                : <MousePointer size={14} className="text-cyan-400" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{item.product}</p>
              <p className="text-gray-500 text-xs">{item.user}</p>
            </div>
            <div className="text-right flex-shrink-0">
              {item.type === "sale" && (
                <p className="text-emerald-400 text-sm font-bold">+${item.amount.toFixed(2)}</p>
              )}
              <Badge color={item.type === "sale" ? "emerald" : "cyan"} className="text-xs">
                {item.type}
              </Badge>
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-xs flex-shrink-0">
              <Clock size={10} />
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
