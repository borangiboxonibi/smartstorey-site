import type { Product } from "@/lib/data";
import { site } from "@/lib/data";
const finishes = ["exotic-teak", "classic-walnut", "thansau-maple"];
export default function ProductCard({ p, i }: { p: Product; i: number }) {
  const msg = encodeURIComponent(`Hi Smartstorey, I'd like a quote for: ${p.code ? `${p.code} – ` : ""}${p.name}`);
  return (
    <article className="prod" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }} id={p.slug}>
      {p.img ? (
        <div className="prod-mat"><span className="no mono">{String(i + 1).padStart(2, "0")}</span><img src={p.img} alt={p.name} loading="lazy" /></div>
      ) : (
        <div className="prod-mat prod-spec" aria-hidden="true">
          <span className="no mono">{String(i + 1).padStart(2, "0")}</span>
          <span className="code">{p.code}</span>
          <span className="sw">{finishes.map((f) => <img key={f} src={`/img/finishes/${f}.webp`} alt="" loading="lazy" />)}</span>
          <span className="mono hint">Photography on request</span>
        </div>
      )}
      <div>
        <h3>{p.name}</h3>
        <p>{p.note}</p>
        {p.sizes && <dl className="sizes">{p.sizes.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}</dl>}
        <p className="for mono" style={{ marginTop: 10 }}>{p.for.join(" · ")}</p>
      </div>
      <a className="link mono" href={`https://wa.me/${site.whatsapp}?text=${msg}`} target="_blank" rel="noopener">Request a quote →</a>
    </article>
  );
}
