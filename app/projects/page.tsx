import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
export const metadata: Metadata = { title: "Projects", description: "Hotels, co-living, co-working and retail projects furnished by Smartstorey across India and abroad." };
export default function Projects() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <p className="mono eyebrow">Projects</p><h1>Smart design. <span className="o">Enduring impact.</span></h1>
        <p className="lede">From 150-property hotel rollouts to airport kiosks, here is the work our factory and install crews have delivered.</p>
      </div></section>
      <section className="section"><div className="wrap"><div className="pgrid">{[...projects].sort((a, b) => (b.gallery ? 1 : 0) - (a.gallery ? 1 : 0)).map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}</div></div></section>
    </>
  );
}
