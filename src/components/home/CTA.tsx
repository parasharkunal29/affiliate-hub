import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl p-12 border border-purple-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-purple-500/30">
              <Zap size={14} className="text-purple-400" />
              <span className="text-sm text-purple-300">Start in 5 minutes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Ready to Start <span className="gradient-text">Earning?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join 50,000+ affiliates already making money with AffiliateHub. Free to start, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="group">
                  Create Free Account
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">Browse Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
