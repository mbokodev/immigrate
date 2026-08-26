import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
export const metadata: Metadata = { metadataBase: new URL("https://lacavalerie.com"), title: { default: "La Cavalerie | Études & mobilité internationale", template: "%s | La Cavalerie" }, description: "Un accompagnement clair et humain pour construire votre projet d’études ou de mobilité vers la Belgique et le Canada.", icons: { icon: "/favicon.png" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body className={manrope.variable}><Header /><main>{children}</main><Footer /></body></html>; }
