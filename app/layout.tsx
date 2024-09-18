import type { Metadata } from "next";
import QueryClientProvider from "./QueryClientProvider";
import { Providers } from "../components/providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextTopLoader from "nextjs-toploader";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import NavBar from "./NavBar";
import { Inter } from "next/font/google";
import Footer from "@/app/Footer"

export const metadata: Metadata = {
  title: "The Minute",
  description: "Access to news from all over the world",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <QueryClientProvider>
            <Providers>
              <NextTopLoader />
              <NavBar />
              {children}
              <Footer />
              <SpeedInsights />
            </Providers>
          </QueryClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
