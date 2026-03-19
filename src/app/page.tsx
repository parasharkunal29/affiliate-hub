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
