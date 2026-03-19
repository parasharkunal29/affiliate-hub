import { Check, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    sub: "Forever",
    color: "cyan",
    features: ["Up to 50 affiliate links", "Basic analytics", "1,000 products catalog", "Email support", "Weekly payouts"],
    cta: "Get Started Free",
    href: "/auth/register",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    sub: "per month",
    color: "purple",
    features: ["Unlimited affiliate links", "Advanced analytics & reports", "Full 10,000+ product catalog", "Priority support", "Daily payouts", "Custom link slugs", "API access"],
    cta: "Start Pro Trial",
    href: "/auth/register",
    popular: true,
  },
  {
    name: "Agency",
    price: "$99",
    sub: "per month",
    color: "emerald",
    features: ["Everything in Pro", "Up to 10 team members", "White-label dashboard", "Dedicated account manager", "Instant payouts", "Custom integrations", "SLA guarantee"],
    cta: "Contact Sales",
    href: "/auth/register",
    popular: false,
  },
];

const borderColor = { purple: "border-purple-500/50", cyan: "border-cyan-500/20", emerald: "border-emerald-500/20" };
const priceColor = { purple: "text-purple-400", cyan: "text-cyan-400", emerald: "text-emerald-400" };
const checkColor = { purple: "text-purple-400", cyan: "text-cyan-400", emerald: "text-emerald-400" };

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Start free, scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className={`glass rounded-2xl p-6 border ${borderColor[plan.color as keyof typeof borderColor]} relative ${plan.popular ? "scale-105 shadow-2xl shadow-purple-500/20" : ""} transition-all`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full px-4 py-1 text-xs font-bold text-white">
                    <Zap size={10} /> Most Popular
                  </div>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${priceColor[plan.color as keyof typeof priceColor]}`}>{plan.price}</span>
                  <span className="text-gray-500 text-sm">/{plan.sub}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={14} className={checkColor[plan.color as keyof typeof checkColor]} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href}>
                <Button variant={plan.popular ? "primary" : "outline"} className="w-full">{plan.cta}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
