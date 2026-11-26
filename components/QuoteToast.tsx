"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function QuoteToast() {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const on = (e: Event) => { setMsg((e as CustomEvent<string>).detail); clearTimeout(t); t = setTimeout(() => setMsg(null), 3600); };
    window.addEventListener("smartstorey-added", on);
    return () => { window.removeEventListener("smartstorey-added", on); clearTimeout(t); };
  }, []);
  return (
    <div className={msg ? "qtoast on" : "qtoast"} role="status" aria-live="polite">
      {msg && <><span><span className="mono o">Added to quote</span><br />{msg}</span><Link className="btn btn-sm" href="/quote/" onClick={() => setMsg(null)}>View quote</Link></>}
    </div>
  );
}
