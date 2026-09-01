import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lacavalerie-corp.com";

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: { default: "La Cavalerie | Études & mobilité internationale", template: "%s | La Cavalerie" },
  description: "Un accompagnement clair et humain pour construire votre projet d’études ou de mobilité vers la Belgique et le Canada.",
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "La Cavalerie",
    title: "La Cavalerie | Études & mobilité internationale",
    description: "Un accompagnement clair et humain pour construire votre projet d’études ou de mobilité vers la Belgique et le Canada.",
    images: [{ url: "/logo_main.png", width: 1536, height: 1024, alt: "La Cavalerie — Études et mobilité internationale" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Cavalerie | Études & mobilité internationale",
    description: "Un accompagnement clair et humain pour construire votre projet d’études ou de mobilité vers la Belgique et le Canada.",
    images: ["/logo_main.png"],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body><Header /><main>{children}</main><Footer /></body></html>; }
