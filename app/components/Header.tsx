"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="La Cavalerie — Accueil"><Image className="brand-logo" src="/logo_inline.png" alt="La Cavalerie — Études et mobilité internationale" width={2084} height={488} priority /></Link>
    {isHome ? <p className="header-location"><span /> Cameroun</p> : <nav className="main-nav" aria-label="Navigation principale"><Link className={pathname === "/belgique" ? "active" : ""} href="/belgique">Belgique</Link><Link className={pathname === "/canada" ? "active" : ""} href="/canada">Canada</Link><a className="button button-primary button-small" href="#demarrer">Démarrer mon projet</a></nav>}
  </header>;
}
