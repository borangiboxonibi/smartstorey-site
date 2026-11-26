"use client";
import { useState } from "react";
import type { Finish, Product } from "@/lib/data";
import FinishImage, { FINISH_LABEL } from "@/components/FinishImage";
import Qty from "@/components/Qty";
import { addToQuote } from "@/lib/quote";
const swatches = ["exotic-teak", "classic-walnut", "thansau-maple"];
export default function ProductCard({ p, i }: { p: Product; i: number }) {
  const no = String(i + 1).padStart(2, "0");
  const [finish, setFinish] = useState<Finish | undefined>(p.finishes?.[0]);
  const multiSize = (p.sizes?.length || 0) > 1;
  const [size, setSize] = useState<string | undefined>(multiSize ? p.sizes![0][0] : undefined);
  const [qty, setQ] = useState(1);
  const [done, setDone] = useState(false);
  const img = p.imgBase && finish ? `${p.imgBase}-${finish}.webp` : p.img;
  const add = () => {
    addToQuote({ slug: p.slug, name: p.name, code: p.code, img, finish: finish ? FINISH_LABEL[finish] : undefined, size, qty, kind: "product", href: `/products/${p.cat}/#${p.slug}` });
    setDone(true); setTimeout(() => setDone(false), 1800);
  };
  return (
    <article className="prod" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }} id={p.slug}>
      {p.finishes && p.imgBase && finish ? (
        <FinishImage base={p.imgBase} finishes={p.finishes} name={p.name} no={no} value={finish} onChange={setFinish} illustration={p.illustration} />
      ) : p.img ? (
        <div className="prod-mat"><span className="no mono">{no}</span><img src={p.img} alt={p.name} loading="lazy" /></div>
      ) : (
        <div className="prod-mat prod-spec" aria-hidden="true">
          <span className="no mono">{no}</span>
          <span className="code">{p.code}</span>
          <span className="sw">{swatches.map((f) => <img key={f} src={`/img/finishes/${f}.webp`} alt="" loading="lazy" />)}</span>
          <span className="mono hint">Photography on request</span>
        </div>
      )}
      <div>
        <h3>{p.name}</h3>
        <p>{p.note}</p>
        {p.sizes && <dl className="sizes">{p.sizes.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}</dl>}
        <p className="for mono" style={{ marginTop: 10 }}>{p.for.join(" · ")}</p>
      </div>
      <div className="addq">
        {multiSize && (
          <label className="addq-size"><span className="mono">Size</span>
            <select value={size} onChange={(e) => setSize(e.target.value)}>{p.sizes!.map(([k]) => <option key={k}>{k}</option>)}</select>
          </label>
        )}
        <div className="addq-row">
          <Qty value={qty} onChange={setQ} label={`Quantity of ${p.name}`} />
          <button type="button" className={done ? "btn btn-sm addq-btn ok" : "btn btn-sm addq-btn"} onClick={add}>{done ? "Added ✓" : "Add to quote"}</button>
        </div>
      </div>
    </article>
  );
}
