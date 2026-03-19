const stats = [
  { value: "$2.4M+", label: "Total Paid Out", sub: "To affiliates this year" },
  { value: "10,000+", label: "Products", sub: "Across 50+ categories" },
  { value: "25%", label: "Max Commission", sub: "Industry-leading rates" },
  { value: "50K+", label: "Active Affiliates", sub: "And growing daily" },
];

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center glass rounded-2xl p-6 border border-white/5">
              <div className={`text-4xl font-black mb-1 ${
                i % 3 === 0 ? "text-purple-400" : i % 3 === 1 ? "text-cyan-400" : "text-emerald-400"
              }`}>{stat.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
