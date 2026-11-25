import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = projects.find((x) => x.slug === slug); return p ? { title: `${p.name} project`, description: p.blurb } : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = projects.find((x) => x.slug === slug); if (!p) notFound();
  const idx = projects.indexOf(p); const next = projects[(idx + 1) % projects.length];
  const g = p.gallery ?? [];
  return (
    <>
      <section className={g.length ? "page-hero img" : "page-hero"}>
        {g.length > 0 && <img src={g[0]} alt={`${p.name}, furnished by Smartstorey`} />}
        <div className="wrap"><p className="mono eyebrow"><Link href="/projects/">Projects</Link> / {p.sector}</p><h1>{p.name}</h1><p className="lede">{p.blurb}</p></div>
      </section>
      <section className="section"><div className="wrap">
        <div className="specsheet" data-reveal>
          <div><span className="mono label">Scope</span><p>{p.scope.join(", ")}</p></div>
          <div><span className="mono label">Size</span><p>{p.size.join(" · ")}</p></div>
          <div><span className="mono label">Location</span><p>{p.location}</p></div>
          <div><span className="mono label">Sector</span><p>{p.sector}</p></div>
        </div>
        {g.length > 1 && <div className={g.length === 2 ? "gallery one" : g.length === 3 ? "gallery two" : "gallery"} data-reveal>{g.slice(1, 4).map((src) => <img key={src} src={src} alt={`${p.name} interior`} loading="lazy" />)}</div>}
        {g.length === 0 && <div className="note-card" data-reveal><p className="dim">Photography for this project is available on request, along with the full furniture schedule.</p><a className="link mono" href="/contact/">Request the case study →</a></div>}
      </div></section>
      <section className="section alt"><div className="wrap band" data-reveal>
        <h2>Planning something like this?</h2>
        <div className="row"><Link className="btn" href="/contact/">Start a project</Link><Link className="btn btn-ghost" href={`/projects/${next.slug}/`}>Next: {next.name} →</Link></div>
      </div></section>
    </>
  );
}
