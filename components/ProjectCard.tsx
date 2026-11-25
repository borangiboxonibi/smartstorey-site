import Link from "next/link";
import type { Project } from "@/lib/data";
export default function ProjectCard({ p, i }: { p: Project; i: number }) {
  const img = p.gallery?.[0];
  return (
    <Link href={`/projects/${p.slug}/`} className="pcard" data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
      {img ? (
        <div className="pcard-img"><img src={img} alt={`${p.name}, furnished by Smartstorey`} loading="lazy" /><span className="tag mono">{p.sector}</span></div>
      ) : (
        <div className="pcard-img pcard-type"><span className="tag mono">{p.sector}</span><span className="big">{p.size[0]}</span></div>
      )}
      <div className="pcard-body">
        <h3>{p.name}</h3>
        <div className="meta mono"><span>{p.location}</span><span className="arrow">View →</span></div>
      </div>
    </Link>
  );
}
