import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ZModal - Deployments",
  description: "ZModal deployment management dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className="min-w-90 font-sans text-darkest bg-light antialiased">
        <div className="w-full min-h-screen lg:pl-55 lg:pt-17.25 relative lg:flex bg-light">

          <Sidebar />

          <main className="max-w-full md:flex-1">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}