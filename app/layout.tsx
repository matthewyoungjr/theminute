import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import { ThemeSwitcher } from "./ThemeSwitcher";
import NextTopLoader from "nextjs-toploader";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Minute",
  description: "Access to news articles from all over the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextTopLoader />
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
