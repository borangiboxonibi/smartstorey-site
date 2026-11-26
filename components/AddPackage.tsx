"use client";
import { useState } from "react";
import Qty from "@/components/Qty";
import { addToQuote } from "@/lib/quote";
export default function AddPackage({ name, tier, img }: { name: string; tier: string; img: string }) {
  const [qty, setQ] = useState(10);
  const [done, setDone] = useState(false);
  return (
    <div className="addq" style={{ marginTop: 18 }}>
      <span className="mono addq-hint">Number of rooms</span>
      <div className="addq-row">
        <Qty value={qty} onChange={setQ} label={`Rooms for the ${name} package`} />
        <button type="button" className={done ? "btn btn-sm addq-btn ok" : "btn btn-sm addq-btn"} onClick={() => {
          addToQuote({ slug: `package-${name.toLowerCase()}`, name: `${name} room package (${tier})`, img, qty, kind: "package", href: "/products/#packages" });
          setDone(true); setTimeout(() => setDone(false), 1800);
        }}>{done ? "Added ✓" : "Add to quote"}</button>
      </div>
    </div>
  );
}
