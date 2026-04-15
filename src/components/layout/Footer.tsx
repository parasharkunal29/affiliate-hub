import Link from "next/link";
import { Zap, Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">AffiliateHub</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              The modern platform for affiliate marketers and dropshippers to grow their income.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Platform", links: ["Products", "Dashboard", "Analytics", "Link Builder", "Payouts"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Affiliate Agreement"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{link}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/kunal_parasharr?igsh=MXU3dDUwM2FjcGJmag%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-pink-400 text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 AffiliateHub. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Built with Next.js · Tailwind CSS · NextAuth</p>
        </div>
      </div>
    </footer>
  );
}
