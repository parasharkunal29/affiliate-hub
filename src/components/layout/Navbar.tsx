"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu, X, Zap, ChevronDown, User, LogOut, LayoutDashboard } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">AffiliateHub</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</Link>
            <Link href="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Products</Link>
            <Link href="/#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</Link>
            <Link href="/#testimonials" className="text-gray-400 hover:text-white text-sm transition-colors">Reviews</Link>
          </div>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 glass rounded-xl px-3 py-2 hover:bg-white/10 transition-all"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                    {session.user?.name?.[0] ?? "U"}
                  </div>
                  <span className="text-sm text-gray-300">{session.user?.name}</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass rounded-xl border border-white/10 py-1 shadow-xl">
                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setUserMenuOpen(false)}>
                      <LayoutDashboard size={14} /> Dashboard
                    </Link>
                    <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setUserMenuOpen(false)}>
                      <User size={14} /> Profile
                    </Link>
                    <hr className="border-white/10 my-1" />
                    <button onClick={() => signOut()} className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors">
                      <LogOut size={14} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">Sign In</Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm">Get Started Free</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-4 py-4 space-y-3">
          <Link href="/#features" className="block text-gray-400 hover:text-white text-sm py-2" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="/products" className="block text-gray-400 hover:text-white text-sm py-2" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/#pricing" className="block text-gray-400 hover:text-white text-sm py-2" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/#testimonials" className="block text-gray-400 hover:text-white text-sm py-2" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <div className="flex gap-3 pt-2">
            {session ? (
              <Link href="/dashboard" className="flex-1"><Button variant="outline" size="sm" className="w-full">Dashboard</Button></Link>
            ) : (
              <>
                <Link href="/auth/login" className="flex-1"><Button variant="outline" size="sm" className="w-full">Sign In</Button></Link>
                <Link href="/auth/register" className="flex-1"><Button size="sm" className="w-full">Get Started</Button></Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
