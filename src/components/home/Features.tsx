import { TrendingUp, Package, DollarSign, Link, Shield, Zap } from "lucide-react";
import { features } from "@/lib/data";

const iconMap = { TrendingUp, Package, DollarSign, Link, Shield, Zap };

const colorMap = {
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", icon: "text-purple-400", glow: "hover:shadow-purple-500/10" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-400", glow: "hover:shadow-cyan-500/10" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400", glow: "hover:shadow-emerald-500/10" },
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-cyan-500/20">
            <Zap size={14} className="text-cyan-400" />
            <span className="text-sm text-cyan-300">Everything you need</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Built for <span className="gradient-text">Serious Earners</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Every tool you need to build, scale, and automate your affiliate income — in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            const c = colorMap[feature.color as keyof typeof colorMap];
            return (
              <div key={feature.title}
                className={`glass rounded-2xl p-6 border ${c.border} hover:bg-white/5 hover:shadow-xl ${c.glow} transition-all duration-300 group`}>
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={c.icon} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
