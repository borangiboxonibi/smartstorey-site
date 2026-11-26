"use client";
import { useState } from "react";
import type { Finish } from "@/lib/data";
const LABEL: Record<Finish, string> = { teak: "Exotic Teak", walnut: "Classic Planked Walnut", maple: "Thansau Maple" };
const SWATCH: Record<Finish, string> = { teak: "exotic-teak", walnut: "classic-walnut", maple: "thansau-maple" };
export default function FinishImage({ base, finishes, name, no }: { base: string; finishes: Finish[]; name: string; no: string }) {
  const [f, setF] = useState<Finish>(finishes[0]);
  return (
    <div className="prod-scene">
      <span className="no mono">{no}</span>
      {finishes.map((x) => (
        <img key={x} src={`${base}-${x}.webp`} alt={`${name} in ${LABEL[x]}`} loading="lazy" className={x === f ? "on" : ""} aria-hidden={x !== f} />
      ))}
      <div className="fin" role="radiogroup" aria-label="Finish">
        {finishes.map((x) => (
          <button key={x} type="button" role="radio" aria-checked={x === f} title={LABEL[x]} onClick={() => setF(x)} className={x === f ? "on" : ""}>
            <img src={`/img/finishes/${SWATCH[x]}.webp`} alt="" />
          </button>
        ))}
        <span className="mono">{LABEL[f]}</span>
      </div>
    </div>
  );
}
