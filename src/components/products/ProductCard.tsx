"use client";
import { Star, Copy, ExternalLink, Heart } from "lucide-react";
import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  commission: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  badgeColor: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://affiliatehub.com/go/p-${product.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="glass rounded-2xl border border-white/5 overflow-hidden hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3">
          <Badge color={product.badgeColor as "purple" | "cyan" | "emerald"}>{product.badge}</Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <button onClick={() => setLiked(!liked)}
            className="w-8 h-8 glass rounded-lg flex items-center justify-center transition-all hover:bg-white/10">
            <Heart size={14} className={liked ? "text-red-400 fill-red-400" : "text-gray-400"} />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 glass rounded-lg px-2 py-1">
          <span className="text-xs font-bold text-red-400">-{discount}% OFF</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-white font-semibold mb-2 leading-snug flex-1">{product.name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} />
            ))}
          </div>
          <span className="text-sm text-white font-medium">{product.rating}</span>
          <span className="text-gray-600 text-xs">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="glass rounded-xl p-3 mb-4 border border-emerald-500/20">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Your commission</span>
            <span className="text-emerald-400 font-bold text-sm">{product.commission}% · ${((product.price * product.commission) / 100).toFixed(2)}/sale</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xl font-black text-white">${product.price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1" onClick={handleCopy}>
            <Copy size={13} />
            {copied ? "Copied!" : "Copy Link"}
          </Button>
          <button className="w-9 h-9 glass rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all">
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
