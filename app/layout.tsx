import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import NextTopLoader from "nextjs-toploader";
import NavBar from "./NavBar";
import QueryClientProvider from "./QueryClientProvider";
import { ViewTransitions } from "next-view-transitions";
import type { Metadata } from "next";

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
            </Providers>
          </QueryClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
