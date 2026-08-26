import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL("https://lacavalerie.com"), title: { default: "La Cavalerie | Études & mobilité internationale", template: "%s | La Cavalerie" }, description: "Un accompagnement clair et humain pour construire votre projet d’études ou de mobilité vers la Belgique et le Canada.", icons: { icon: "/favicon.png" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body><Header /><main>{children}</main><Footer /></body></html>; }
