"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Zap, Mail, Lock, User, Eye, EyeOff, Chrome, Check } from "lucide-react";
import Button from "@/components/ui/Button";

const perks = ["Free forever plan", "No credit card required", "Up to 25% commission", "Weekly payouts"];

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate registration — redirect to dashboard
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Zap size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">AffiliateHub</span>
          </Link>
          <h1 className="text-2xl font-black text-white">Create your account</h1>
          <p className="text-gray-400 text-sm mt-1">Start earning in minutes</p>
        </div>

        {/* Perks */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-1.5 glass rounded-full px-3 py-1 border border-emerald-500/20">
              <Check size={11} className="text-emerald-400" />
              <span className="text-xs text-gray-300">{p}</span>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-8 border border-white/10">
          <button
            onClick={() => {}}
            className="w-full flex items-center justify-center gap-3 glass rounded-xl py-3 border border-white/10 hover:bg-white/5 transition-all text-sm text-gray-300 hover:text-white mb-6"
          >
            <Chrome size={16} />
            Sign up with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-600 text-xs">or with email</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  className="w-full glass rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-gray-600 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="secondary" className="w-full" size="md" disabled={loading}>
              {loading ? "Creating account..." : "Create Free Account"}
            </Button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-cyan-400 hover:text-cyan-300">Terms</a> and{" "}
            <a href="#" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
          </p>

          <p className="text-center text-gray-500 text-sm mt-4">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
