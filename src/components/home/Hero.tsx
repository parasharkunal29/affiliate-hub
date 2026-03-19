"use client";
import Link from "next/link";
import { ArrowRight, Play, Star, TrendingUp, Users, DollarSign } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-purple-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-gray-300">Join 50,000+ affiliates earning daily</span>
          <ArrowRight size={14} className="text-gray-400" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
          Turn Every Link Into
          <br />
          <span className="gradient-text">Real Income</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one affiliate marketing & dropshipping platform. Promote 10,000+ products,
          earn up to 25% commission, and track everything in real-time.
          <br /><br />
          <span className="text-base text-gray-300">Impact-Site-Verification: 929cefb2-3949-441f-a1af-7e69fe26be74</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/auth/register">
            <Button size="lg" className="group">
              Start Earning Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-all">
              <Play size={16} className="text-white ml-0.5" />
            </div>
            <span className="text-sm font-medium">Watch Demo</span>
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D", "E"].map((l, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `hsl(${i * 60 + 260}, 70%, 55%)` }}>
                  {l}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-xs text-gray-500">50k+ happy affiliates</p>
            </div>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-6">
            {[
              { icon: DollarSign, label: "$2.4M+", sub: "Paid out" },
              { icon: TrendingUp, label: "98%", sub: "Satisfaction" },
              { icon: Users, label: "50K+", sub: "Affiliates" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  <Icon size={14} className="text-purple-400" />
                  <span className="font-bold text-white">{label}</span>
                </div>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard preview card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass rounded-2xl border border-white/10 p-6 glow-purple">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 glass rounded-lg h-6 mx-4" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[
                { label: "Total Earnings", value: "$3,240", change: "+18%", color: "purple" },
                { label: "Total Clicks", value: "12,847", change: "+24%", color: "cyan" },
                { label: "Conversions", value: "342", change: "+12%", color: "emerald" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-left">
                  <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className={`text-xs font-medium ${stat.color === "purple" ? "text-purple-400" : stat.color === "cyan" ? "text-cyan-400" : "text-emerald-400"}`}>{stat.change} this month</p>
                </div>
              ))}
            </div>
            <div className="glass rounded-xl h-32 flex items-end gap-1 px-4 pb-4">
              {[40, 65, 50, 80, 70, 95, 85, 100, 75, 90, 60, 88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, ${i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#06b6d4" : "#10b981"}, transparent)`,
                  opacity: 0.7,
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
