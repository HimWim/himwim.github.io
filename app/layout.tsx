import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Himanshu Kumar | AI & Machine Learning Engineer",
  description:
    "Portfolio of Himanshu Kumar, AI & Machine Learning Engineer specializing in Deep Learning, LLMs, Generative AI, and intelligent systems.",
  metadataBase: new URL("https://himanshu-ai-portfolio.example.com"),
  openGraph: {
    title: "Himanshu Kumar | AI & ML Engineer",
    description:
      "AI & Machine Learning Engineer building intelligent systems with Deep Learning, LLMs, and Generative AI.",
    url: "https://himanshu-ai-portfolio.example.com",
    siteName: "Himanshu Kumar Portfolio",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-body bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

