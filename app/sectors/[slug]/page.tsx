import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import ProductCard from "@/components/ProductCard";
import { sectors, projects, products } from "@/lib/data";

const tag: Record<string, string[]> = { hotels: ["Hotels", "Resorts"], "co-living": ["Co-living", "Hostels"], workspaces: ["Workspaces"], "cafes-retail": ["Cafés"] };
export function generateStaticParams() { return sectors.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const s = sectors.find((x) => x.slug === slug); return s ? { title: s.seo, description: s.intro } : {};
}
export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const s = sectors.find((x) => x.slug === slug); if (!s) notFound();
  const list = projects.filter((p) => p.sectorSlug === s.slug);
  const picks = products.filter((p) => p.for.some((f) => tag[s.slug]?.includes(f))).slice(0, 6);
  return (
    <>
      <section className="page-hero img">
        <img src={s.img} alt={s.name} />
        <div className="wrap">
          <p className="mono eyebrow">{s.no} / {s.name}</p><h1>{s.h1}</h1><p className="lede">{s.intro}</p>
          <div className="row"><Link className="btn" href="/contact/">Get a quote</Link><Link className="btn btn-ghost" href="/products/">Browse products</Link></div>
        </div>
      </section>
      <section className="section"><div className="wrap why">
        <div data-reveal><p className="mono eyebrow">What we make</p><ul className="chips">{s.makes.map((m) => <li key={m}>{m}</li>)}</ul></div>
        <div className="why-list">{s.points.map((p, i) => <div key={p.t} className="why-item" data-reveal><span className="mono o">0{i + 1}</span><div><h3>{p.t}</h3><p className="dim">{p.d}</p></div></div>)}</div>
      </div></section>
      {picks.length > 0 && <section className="section alt"><div className="wrap">
        <div className="sec-head split" data-reveal><div><p className="mono eyebrow">From the collection</p><h2>Pieces made for <span className="o">{s.name.toLowerCase()}.</span></h2></div><Link className="btn btn-ghost" href="/products/">All products</Link></div>
        <div className="prod-grid">{picks.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}</div>
      </div></section>}
      {list.length > 0 && <section className="section"><div className="wrap">
        <div className="sec-head" data-reveal><p className="mono eyebrow">Selected work</p><h2>{s.name} <span className="o">we&apos;ve furnished.</span></h2></div>
        <div className="pgrid">{list.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div>
      </div></section>}
      <section className="section"><div className="wrap band" data-reveal><h2>{s.cta}</h2><Link className="btn" href="/contact/">Start a project</Link></div></section>
    </>
  );
}
