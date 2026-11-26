import type { Metadata } from "next";
import Link from "next/link";
import AddPackage from "@/components/AddPackage";
import { categories, products, packages } from "@/lib/data";
export const metadata: Metadata = { title: "Products", description: "Hotel, co-living and workspace furniture by Smartstorey: beds, wardrobes, desks, consoles, seating, reception and café furniture, plus complete room packages." };
export default function Products() {
  return (
    <>
      <section className="page-hero img">
        <img src="/img/photo/pearltree-suite.webp" alt="" />
        <div className="wrap">
          <p className="mono eyebrow">Products</p><h1>The Smartstorey <span className="o">collection.</span></h1>
          <p className="lede">{products.length} pieces across seven families, each made to order in our Bengaluru factory. Every design can be resized, re-finished and re-upholstered to your brand.</p>
          <nav className="cat-nav mono" aria-label="Product categories">{categories.map((c) => <Link key={c.slug} href={`/products/${c.slug}/`}>{c.name}</Link>)}</nav>
        </div>
      </section>
      <section className="section"><div className="wrap">
        <div className="tiles three">
          {categories.map((c, i) => {
            const n = products.filter((p) => p.cat === c.slug).length;
            return (
              <Link key={c.slug} href={`/products/${c.slug}/`} className={c.specs ? "tile wide" : "tile"} data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <img src={c.img} alt={c.name} loading="lazy" />
                <span className="mono dim">{n} pieces</span><h3>{c.name}</h3><p>{c.short}</p><span className="arrow mono">View range →</span>
              </Link>
            );
          })}
        </div>
      </div></section>
      <section className="section alt" id="packages"><div className="wrap">
        <div className="sec-head" data-reveal><p className="mono eyebrow">Room packages</p><h2>Complete rooms, <span className="o">specified in one go.</span></h2>
          <p className="dim">Three ready-to-specify room packages, from premium suites to high-turnover co-living. We tailor the finishes, sizes and fabrics to your brand and room plan.</p></div>
        <div className="pkgs">
          {packages.map((k, i) => (
            <div key={k.name} className="pkg" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <img src={k.img} alt={`${k.name} room package`} loading="lazy" />
              <div>
                <span className="mono label">{k.tier}</span><h3>{k.name}</h3><p className="dim">{k.d}</p>
                <ul>{k.items.map((x) => <li key={x}>{x}</li>)}</ul>
                <AddPackage name={k.name} tier={k.tier} img={k.img} />
              </div>
            </div>
          ))}
        </div>
      </div></section>
      <section className="section"><div className="wrap band" data-reveal><h2>Need a piece that isn&apos;t here? <span className="o">We make to drawing.</span></h2><Link className="btn" href="/contact/">Share your drawings</Link></div></section>
    </>
  );
}
