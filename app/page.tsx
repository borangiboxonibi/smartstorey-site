import Link from "next/link";
import Counter from "@/components/Counter";
import ProjectCard from "@/components/ProjectCard";
import { stats, clients, sectors, projects, process, categories } from "@/lib/data";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src="/img/photo/hero-suite.webp" alt="Hotel suite furnished by Smartstorey" fetchPriority="high" />
        <div className="wrap hero-in">
          <p className="mono eyebrow">Contract furniture · Bengaluru · Since 2016</p>
          <h1>Rooms that hold their beauty, <span className="o">guest after guest.</span></h1>
          <p className="lede">Bespoke and modular furniture for hotels, co-living and workspaces. Designed and made in our Bengaluru factory, installed across 40+ cities.</p>
          <div className="row"><Link className="btn" href="/products/">Explore products</Link><Link className="btn btn-ghost" href="/contact/">Start a project</Link></div>
          <div className="hero-foot"><div className="hero-tags mono"><span>Design</span><span>Manufacture</span><span>Deliver</span><span>Install</span></div><span className="mono dim">Scroll</span></div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat" data-reveal><div className="stat-n"><Counter value={s.value} suffix={s.suffix} /></div><div className="mono">{s.label}</div></div>
          ))}
        </div>
      </section>

      <div className="marquee" aria-label="Clients">
        <div className="marquee-track">{[...clients, ...clients].map((c, i) => <span key={i}>{c}<i>◆</i></span>)}</div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="sec-head split" data-reveal>
            <div><p className="mono eyebrow">The collection</p><h2>Every piece a room needs, <span className="o">made in one factory.</span></h2></div>
            <Link className="btn btn-ghost" href="/products/">All products</Link>
          </div>
          <div className="tiles three">
            {categories.map((c, i) => (
              <Link key={c.slug} href={`/products/${c.slug}/`} className={c.specs ? "tile wide" : "tile"} data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <img src={c.img} alt={c.name} loading="lazy" />
                <span className="mono dim">{String(i + 1).padStart(2, "0")}</span><h3>{c.name}</h3><p>{c.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head" data-reveal><p className="mono eyebrow">Sectors</p><h2>One partner for every room <span className="o">your business runs.</span></h2></div>
          <div className="tiles">
            {sectors.map((s, i) => (
              <Link key={s.slug} href={`/sectors/${s.slug}/`} className="tile" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <img src={s.img} alt={s.name} loading="lazy" />
                <span className="mono dim">{s.no}</span><h3>{s.name}</h3><p>{s.short}</p><span className="arrow mono">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap feature">
          <div className="feature-img" data-reveal><div className="feature-pair"><img src="/img/photo/timber-yard.webp" alt="Seasoned timber at the Smartstorey factory" loading="lazy" style={{ aspectRatio: "4/5", objectFit: "cover" }} /><img src="/img/photo/welding.webp" alt="Welding a steel bed frame" loading="lazy" style={{ objectFit: "cover" }} /></div></div>
          <div data-reveal>
            <p className="mono eyebrow">Why Smartstorey</p><h2>Not just furniture. <span className="o">A business asset.</span></h2>
            <div className="why-list" style={{ marginTop: 36 }}>
              {[
                ["One partner, design to handover", "Design, materials, manufacturing and installation under one contract. No vendor juggling."],
                ["Built for wear", "Metal, ply, laminate and solid-wood systems engineered for thousands of check-ins."],
                ["Scale without delay", "Factory capacity and install crews for multi-city rollouts on a fixed schedule."],
              ].map(([t, d], i) => (
                <div key={t} className="why-item"><span className="mono o">0{i + 1}</span><div><h3>{t}</h3><p className="dim">{d}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head split" data-reveal><div><p className="mono eyebrow">Projects</p><h2>Live, installed, <span className="o">in use every day.</span></h2></div><Link className="btn btn-ghost" href="/projects/">All projects</Link></div>
          <div className="pgrid">{featured.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-reveal><p className="mono eyebrow">Process</p><h2>From brief to handover <span className="o">in four steps.</span></h2></div>
          <ol className="rail">
            {process.map((s, i) => (
              <li key={s.t} data-reveal style={{ transitionDelay: `${i * 90}ms` }}><span className="rail-node" data-n={i + 1} /><span className="mono">{s.time}</span><h3>{s.t}</h3><p className="dim">{s.d}</p></li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
