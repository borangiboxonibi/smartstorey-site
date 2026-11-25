import type { Product } from "@/lib/data";
import { site } from "@/lib/data";
export default function ProductCard({ p, i }: { p: Product; i: number }) {
  const msg = encodeURIComponent(`Hi Smartstorey, I'd like a quote for: ${p.name}`);
  return (
    <article className="prod" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }} id={p.slug}>
      <div className="prod-mat"><span className="no mono">{String(i + 1).padStart(2, "0")}</span><img src={p.img} alt={p.name} loading="lazy" /></div>
      <div>
        <h3>{p.name}</h3>
        <p>{p.note}</p>
        <p className="for mono" style={{ marginTop: 10 }}>{p.for.join(" · ")}</p>
      </div>
      <a className="link mono" href={`https://wa.me/${site.whatsapp}?text=${msg}`} target="_blank" rel="noopener">Request a quote →</a>
    </article>
  );
}
