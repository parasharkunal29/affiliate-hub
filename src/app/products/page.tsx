"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data";
import { Search, SlidersHorizontal, TrendingUp } from "lucide-react";

const categories = ["All", "Electronics", "Wearables", "Furniture", "Photography", "Gaming"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");

  const filtered = products
    .filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sort === "commission") return b.commission - a.commission;
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return b.reviews - a.reviews;
    });

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-purple-500/20">
              <TrendingUp size={14} className="text-purple-400" />
              <span className="text-sm text-purple-300">10,000+ products available</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-2">
              Product <span className="gradient-text">Catalog</span>
            </h1>
            <p className="text-gray-400">Find high-converting products to promote and earn commissions.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} className="text-gray-500" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="glass rounded-xl px-4 py-3 text-sm text-gray-300 border border-white/10 focus:outline-none bg-transparent"
              >
                <option value="popular" className="bg-gray-900">Most Popular</option>
                <option value="commission" className="bg-gray-900">Highest Commission</option>
                <option value="price-low" className="bg-gray-900">Price: Low to High</option>
                <option value="price-high" className="bg-gray-900">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25"
                    : "glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-gray-500 text-sm mb-6">{filtered.length} products found</p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found</p>
              <p className="text-gray-600 text-sm mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
