import Link from "next/link";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { products } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ProductShowcase() {
  const featured = products.slice(0, 3);
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-emerald-500/20">
              <TrendingUp size={14} className="text-emerald-400" />
              <span className="text-sm text-emerald-300">Top performing products</span>
            </div>
            <h2 className="text-4xl font-black text-white">
              Trending <span className="gradient-text">Products</span>
            </h2>
          </div>
          <Link href="/products">
            <Button variant="outline" size="sm" className="group">
              View All Products
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((product) => (
            <div key={product.id} className="glass rounded-2xl border border-white/5 overflow-hidden hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group">
              <div className="relative overflow-hidden h-48">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <Badge color={product.badgeColor as "purple" | "cyan" | "emerald"}>{product.badge}</Badge>
                </div>
                <div className="absolute top-3 right-3 glass rounded-lg px-2 py-1">
                  <span className="text-xs font-bold text-emerald-400">{product.commission}% comm.</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-white font-semibold mb-3 leading-snug">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-white font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gray-600 text-xs">({product.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-white">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                  </div>
                  <Button size="sm" variant="outline">Promote</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
