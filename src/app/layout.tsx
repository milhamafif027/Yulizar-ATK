import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Yulizar ATK",
  description: "Toko alat tulis terpercaya untuk sekolah dan kantor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col font-sans">
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

