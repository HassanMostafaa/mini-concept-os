import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MenuBar } from "@/components/menu-bar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassan Mohamed - Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MenuBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}