import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "AffiliateHub — Turn Every Link Into Real Income",
  description: "The modern affiliate marketing & dropshipping platform. Promote 10,000+ products, earn up to 25% commission.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
