import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

const colorMap = {
  purple: "border-purple-500/20 hover:border-purple-500/40",
  cyan: "border-cyan-500/20 hover:border-cyan-500/40",
  emerald: "border-emerald-500/20 hover:border-emerald-500/40",
};

const avatarColor = {
  purple: "from-purple-600 to-purple-400",
  cyan: "from-cyan-600 to-cyan-400",
  emerald: "from-emerald-600 to-emerald-400",
};

const earningColor = {
  purple: "text-purple-400",
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Real People, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Join thousands of affiliates who are already earning with AffiliateHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className={`glass rounded-2xl p-6 border ${colorMap[t.color as keyof typeof colorMap]} transition-all duration-300 hover:bg-white/5`}>
              <Quote size={24} className="text-gray-700 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.content}</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColor[t.color as keyof typeof avatarColor]} flex items-center justify-center text-sm font-bold text-white`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-black text-lg ${earningColor[t.color as keyof typeof earningColor]}`}>{t.earnings}</p>
                  <p className="text-gray-600 text-xs">avg. monthly</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
