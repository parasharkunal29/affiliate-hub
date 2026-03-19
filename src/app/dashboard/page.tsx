"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Zap, LayoutDashboard, Package, Link as LinkIcon, BarChart2, Settings, LogOut, Bell, Search } from "lucide-react";
import { signOut } from "next-auth/react";
import StatsCards from "@/components/dashboard/StatsCards";
import EarningsChart from "@/components/dashboard/EarningsChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TopLinks from "@/components/dashboard/TopLinks";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Package, label: "Products", href: "/products" },
  { icon: LinkIcon, label: "My Links", href: "/dashboard/links" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 glass border-r border-white/5 flex flex-col fixed h-full z-40 hidden lg:flex">
        <div className="p-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold gradient-text">AffiliateHub</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                item.active
                  ? "bg-purple-500/15 text-purple-300 border border-purple-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}>
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white">
              {session?.user?.name?.[0] ?? "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{session?.user?.name}</p>
              <p className="text-gray-500 text-xs truncate">{session?.user?.email}</p>
            </div>
          </div>
          <button onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        {/* Top bar */}
        <header className="glass border-b border-white/5 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-white font-bold text-lg">Dashboard</h1>
            <p className="text-gray-500 text-xs">Welcome back, {session?.user?.name?.split(" ")[0]} 👋</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input placeholder="Search products..." className="glass rounded-xl pl-9 pr-4 py-2 text-sm text-gray-300 placeholder-gray-600 border border-white/10 focus:border-purple-500/30 focus:outline-none w-48" />
            </div>
            <button className="relative w-9 h-9 glass rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full" />
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <StatsCards />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <EarningsChart />
            </div>
            <RecentActivity />
          </div>

          <TopLinks />
        </div>
      </main>
    </div>
  );
}
