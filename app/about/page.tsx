import type { Metadata } from "next";
import Link from "next/link";
import Counter from "@/components/Counter";
import { stats, factoryStats, process } from "@/lib/data";
export const metadata: Metadata = { title: "About", description: "The story, team and factory behind Smartstorey, Bengaluru's B2B contract furniture manufacturer." };
const team = [{ n: "Vikas N Jain", r: "Founder" }, { n: "Vivek Mehta", r: "Co-Founder" }];
export default function About() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <p className="mono eyebrow">About</p><h1>Design intelligence, <span className="o">crafted for business.</span></h1>
        <p className="lede">We started on the ground, inside busy hotels and growing co-living buildings. We saw projects stall on slow procurement, rigid designs and hard-to-source custom pieces. Smartstorey was built to fix that.</p>
      </div></section>
      <section className="section"><div className="wrap feature">
        <div className="feature-img" data-reveal><img src="/img/photo/reception.webp" alt="Fluted reception counter made by Smartstorey" loading="lazy" /></div>
        <div data-reveal><p className="mono eyebrow">Our story</p><h2>A smarter way to <span className="o">furnish a business.</span></h2>
          <div className="prose" style={{ marginTop: 28 }}>
            <p>Today we deliver precision-made, fully customisable furniture that removes delays, unlocks design freedom and sets a higher bar for quality. Creative, modular and stylish pieces for hospitality, delivered on a quick turnaround.</p>
            <p>Our ambition is simple: to be India&apos;s premier furniture partner for the businesses that host people.</p>
            <p className="pull">It&apos;s not just furniture. It&apos;s a business asset that works as hard as you do.</p>
          </div>
        </div>
      </div></section>
      <section className="section alt"><div className="wrap feature rev">
        <div className="feature-img" data-reveal><div className="feature-pair"><img src="/img/photo/metal-bed.webp" alt="Steel bed frame finished in the Smartstorey factory" loading="lazy" style={{ aspectRatio: "4/5", objectFit: "cover" }} /><img src="/img/photo/welding.webp" alt="Welding in the metal workshop" loading="lazy" style={{ objectFit: "cover" }} /></div></div>
        <div data-reveal><p className="mono eyebrow">The factory</p><h2>Wood, steel and upholstery <span className="o">under one roof.</span></h2>
          <p className="dim" style={{ marginTop: 22, maxWidth: 480 }}>Our Banashankari factory runs carpentry, metal fabrication and upholstery side by side, so a single order can combine solid wood, powder-coated steel and fabric without a second vendor. Every piece is checked before it ships.</p>
          <div className="stats-grid three" style={{ marginTop: 36, borderTop: "1px solid var(--line)" }}>{factoryStats.map((s) => <div key={s.label} className="stat"><div className="stat-n"><Counter value={s.value} suffix={s.suffix} /></div><div className="mono">{s.label}</div></div>)}</div>
        </div>
      </div></section>
      <section className="stats"><div className="wrap stats-grid">{stats.map((s) => <div key={s.label} className="stat" data-reveal><div className="stat-n"><Counter value={s.value} suffix={s.suffix} /></div><div className="mono">{s.label}</div></div>)}</div></section>
      <section className="section"><div className="wrap">
        <div className="sec-head" data-reveal><p className="mono eyebrow">Leadership</p><h2>The people <span className="o">behind the storey.</span></h2></div>
        <div className="team">{team.map((t) => <div key={t.n} className="member" data-reveal><div className="avatar">{t.n.split(" ").map((w) => w[0]).join("").slice(0, 2)}</div><h3>{t.n}</h3><p className="mono dim">{t.r}, Smartstorey LLP</p></div>)}</div>
      </div></section>
      <section className="section alt"><div className="wrap">
        <div className="sec-head" data-reveal><p className="mono eyebrow">How we work</p><h2>Four steps, <span className="o">one accountable team.</span></h2></div>
        <ol className="rail">{process.map((s, i) => <li key={s.t} data-reveal><span className="rail-node" data-n={i + 1} /><span className="mono">{s.time}</span><h3>{s.t}</h3><p className="dim">{s.d}</p></li>)}</ol>
        <div className="row" style={{ marginTop: 40 }}><Link className="btn" href="/contact/">Start a project</Link></div>
      </div></section>
    </>
  );
}
