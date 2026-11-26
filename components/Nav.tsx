"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import QuoteLink from "./QuoteLink";
import { sectors, categories } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  const close = () => setOpen(false);
  const on = (p: string) => (path?.startsWith(p) ? "on" : undefined);
  return (
    <header className={solid || open ? "nav solid" : "nav"}>
      <div className="wrap nav-in">
        <Link href="/" aria-label="Smartstorey home" onClick={close}><Logo /></Link>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main">
          <div className="dd">
            <button type="button" aria-haspopup="true" className={on("/products")}>Products</button>
            <div className="dd-menu">
              {categories.map((c) => <Link key={c.slug} href={`/products/${c.slug}/`} onClick={close}>{c.name}</Link>)}
              <Link className="dd-all" href="/products/" onClick={close}>All products & room packages</Link>
            </div>
          </div>
          <div className="dd">
            <button type="button" aria-haspopup="true" className={on("/sectors")}>Sectors</button>
            <div className="dd-menu">
              {sectors.map((s) => <Link key={s.slug} href={`/sectors/${s.slug}/`} onClick={close}>{s.name}</Link>)}
            </div>
          </div>
          <Link href="/projects/" className={on("/projects")} onClick={close}>Projects</Link>
          <Link href="/about/" className={on("/about")} onClick={close}>About</Link>
          <Link href="/contact/" className="btn btn-sm" onClick={close}>Start a project</Link>
        </nav>
        <QuoteLink onClick={close} />
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
      </div>
    </header>
  );
}
