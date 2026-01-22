import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mutakilu Mukailu | AI Engineer & Researcher",
    template: "%s | Mutakilu Mukailu",
  },
  description: "AI Engineer, Researcher, and Founder. Building intelligent systems with strong mathematical foundations.",
  keywords: ["AI Engineer", "Machine Learning", "Researcher", "Startup Founder", "Artificial Intelligence"],
  authors: [{ name: "Mutakilu Mukailu" }],
  creator: "Mutakilu Mukailu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mutakilu.dev",
    title: "Mutakilu Mukailu | AI Engineer & Researcher",
    description: "AI Engineer, Researcher, and Founder. Building intelligent systems with strong mathematical foundations.",
    siteName: "Mutakilu Mukailu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutakilu Mukailu | AI Engineer & Researcher",
    description: "AI Engineer, Researcher, and Founder. Building intelligent systems with strong mathematical foundations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <StructuredData />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
