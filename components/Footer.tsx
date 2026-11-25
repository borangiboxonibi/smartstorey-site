import Link from "next/link";
import { Logo } from "./Logo";
import { site, sectors, categories } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-cta" data-reveal>
          <p className="mono eyebrow">Let&apos;s talk</p>
          <h2>Send us the floor plan. <span className="o">We&apos;ll return a plan, a quote and a timeline.</span></h2>
          <div className="row"><Link className="btn" href="/contact/">Start a project</Link><a className="btn btn-ghost" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">WhatsApp us</a></div>
        </div>
        <div className="foot-grid">
          <div><Logo /><p className="dim small">Bespoke and modular furniture for hotels, co-living and workspaces. Designed and made in Bengaluru since 2016.</p></div>
          <div><p className="mono label">Products</p>{categories.map((c) => <Link key={c.slug} href={`/products/${c.slug}/`}>{c.name}</Link>)}</div>
          <div><p className="mono label">Sectors</p>{sectors.map((s) => <Link key={s.slug} href={`/sectors/${s.slug}/`}>{s.name}</Link>)}</div>
          <div><p className="mono label">Company</p><Link href="/projects/">Projects</Link><Link href="/about/">About</Link><Link href="/contact/">Contact</Link></div>
          <div><p className="mono label">Reach us</p><a href={`mailto:${site.email}`}>{site.email}</a>{site.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>)}
            <div className="socials">{Object.entries(site.socials).map(([k, v]) => <a key={k} href={v} target="_blank" rel="noopener">{k}</a>)}</div></div>
        </div>
        <div className="foot-bottom mono"><span>© {new Date().getFullYear()} {site.legal}</span><span>Banashankari · Jayanagar · Bengaluru</span></div>
      </div>
    </footer>
  );
}
