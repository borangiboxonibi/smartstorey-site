import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";
export function generateStaticParams() { return categories.map((c) => ({ cat: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params; const c = categories.find((x) => x.slug === cat);
  return c ? { title: `${c.name} for hotels & co-living`, description: c.short } : {};
}
export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params; const c = categories.find((x) => x.slug === cat); if (!c) notFound();
  const list = products.filter((p) => p.cat === c.slug);
  const idx = categories.indexOf(c); const next = categories[(idx + 1) % categories.length];
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <p className="mono eyebrow"><Link href="/products/">Products</Link> / {String(idx + 1).padStart(2, "0")}</p>
        <h1>{c.name}</h1><p className="lede">{c.short} Made to order, in your sizes and finishes.</p>
        <nav className="cat-nav mono" aria-label="Product categories">{categories.map((x) => <Link key={x.slug} href={`/products/${x.slug}/`} className={x.slug === c.slug ? "on" : undefined}>{x.name}</Link>)}</nav>
      </div></section>
      <section className="section"><div className="wrap">
        <div className="prod-grid">{list.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}</div>
      </div></section>
      <section className="section alt"><div className="wrap band" data-reveal>
        <h2>Furnishing whole rooms? <span className="o">See our room packages.</span></h2>
        <div className="row"><Link className="btn" href="/products/#packages">Room packages</Link><Link className="btn btn-ghost" href={`/products/${next.slug}/`}>Next: {next.name} →</Link></div>
      </div></section>
    </>
  );
}
