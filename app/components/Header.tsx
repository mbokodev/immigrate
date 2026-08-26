"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="La Cavalerie — Accueil"><span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span><span>La Cavalerie<small>Études & mobilité internationale</small></span></Link>
    {isHome ? <p className="header-location"><span /> Cameroun</p> : <nav className="main-nav" aria-label="Navigation principale"><Link className={pathname === "/belgique" ? "active" : ""} href="/belgique">Belgique</Link><Link className={pathname === "/canada" ? "active" : ""} href="/canada">Canada</Link><a className="button button-primary button-small" href="#demarrer">Démarrer mon projet</a></nav>}
  </header>;
}
