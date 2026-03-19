"use client";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

const links = [
  { id: 1, name: "Wireless Headphones", url: "affiliatehub.com/go/wh-001", clicks: 1243, earnings: 89.40 },
  { id: 2, name: "Smart Watch", url: "affiliatehub.com/go/sw-002", clicks: 987, earnings: 74.25 },
  { id: 3, name: "Bluetooth Speaker", url: "affiliatehub.com/go/bs-003", clicks: 756, earnings: 34.60 },
  { id: 4, name: "Office Chair", url: "affiliatehub.com/go/oc-004", clicks: 432, earnings: 161.97 },
];

export default function TopLinks() {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (id: number, url: string) => {
    navigator.clipboard.writeText(`https://${url}`);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold text-lg">Top Affiliate Links</h3>
        <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors">+ New Link</button>
      </div>
      <div className="space-y-3">
        {links.map((link) => (
          <div key={link.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{link.name}</p>
              <p className="text-gray-500 text-xs truncate">{link.url}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-white text-sm font-bold">${link.earnings.toFixed(2)}</p>
              <p className="text-gray-500 text-xs">{link.clicks.toLocaleString()} clicks</p>
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleCopy(link.id, link.url)}
                className="w-7 h-7 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Copy size={12} />
              </button>
              <button className="w-7 h-7 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={12} />
              </button>
            </div>
            {copied === link.id && (
              <span className="text-xs text-emerald-400 absolute">Copied!</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
