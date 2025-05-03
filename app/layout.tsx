import type React from "react";
import "@/app/globals.css";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@livekit/components-styles";

// Use Poppins for headings
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// Use Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Phonio.ai - 1st Phone AI Platform",
  description:
    "AI phone platform for marketers, e-commerce, sales, customer service, retention, and growing businesses",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/favicon.svg" },
  },
  metadataBase: new URL("https://phonio.ai"),
  verification: {
    google: "pZTAkatNPMhH-qGOyl_zsnIfsnkcs1QGiYollHc3c1g",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
