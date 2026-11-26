"use client";
import type { Finish } from "@/lib/data";
export const FINISH_LABEL: Record<Finish, string> = { teak: "Exotic Teak", walnut: "Classic Planked Walnut", maple: "Thansau Maple" };
const SWATCH: Record<Finish, string> = { teak: "exotic-teak", walnut: "classic-walnut", maple: "thansau-maple" };
export default function FinishImage({ base, finishes, name, no, value, onChange, illustration }: { illustration?: boolean; base: string; finishes: Finish[]; name: string; no: string; value: Finish; onChange: (f: Finish) => void }) {
  return (
    <div className="prod-scene">
      <span className="no mono">{no}</span>
      {illustration && <span className="illus mono">Illustration</span>}
      {finishes.map((x) => (
        <img key={x} src={`${base}-${x}.webp`} alt={`${name} in ${FINISH_LABEL[x]}`} loading="lazy" className={x === value ? "on" : ""} aria-hidden={x !== value} />
      ))}
      <div className="fin" role="radiogroup" aria-label="Finish">
        {finishes.map((x) => (
          <button key={x} type="button" role="radio" aria-checked={x === value} title={FINISH_LABEL[x]} onClick={() => onChange(x)} className={x === value ? "on" : ""}>
            <img src={`/img/finishes/${SWATCH[x]}.webp`} alt="" />
          </button>
        ))}
        <span className="mono">{FINISH_LABEL[value]}</span>
      </div>
    </div>
  );
}
