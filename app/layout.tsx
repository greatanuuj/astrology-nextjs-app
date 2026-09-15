import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "दिव्य दृष्टि - संपूर्ण वैदिक ज्योतिष, टैरो, अंकशास्त्र, वास्तु व राशिफल",
  description: "Comprehensive Online Vedic Astrology, Kundli, Tarot, Numerology, Vastu, Rashifal & 36 Guna Milan Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className="min-h-screen bg-[#faf6ee] text-[#0f172a] antialiased">
        {/* Vedic Auspicious Shloka Banner */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white text-xs md:text-sm py-1.5 text-center font-medium shadow-sm">
          🕉️ ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्माऽमृतं गमय ॥ दिव्य दृष्टि ज्योतिष महा-मंच ॥
        </div>
        {children}
        <footer className="mt-16 border-t border-amber-200/80 bg-white/70 py-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} दिव्य दृष्टि ज्योतिष (Divya Drishti Astrology Platform). All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
