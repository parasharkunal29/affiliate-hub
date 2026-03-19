import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import ProductShowcase from "@/components/home/ProductShowcase";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <p className="text-center text-xs text-gray-500 py-1 bg-black/30">Impact-Site-Verification: 929cefb2-3949-441f-a1af-7e69fe26be74</p>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
