"use client";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
// Brief brand reveal on first visit per session; CSS fades it out even if JS is slow.
export default function Loader() {
  const [p, setP] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem("ss-loaded")) { setDone(true); return; } } catch {}
    let v = 0;
    const id = setInterval(() => {
      v = Math.min(100, v + 7 + Math.ceil(Math.random() * 8)); setP(v);
      if (v >= 100) { clearInterval(id); setTimeout(() => { setDone(true); try { sessionStorage.setItem("ss-loaded", "1"); } catch {} }, 450); }
    }, 60);
    return () => clearInterval(id);
  }, []);
  if (done) return null;
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-mark"><LogoMark size={96} /></div>
      <div className="mono loader-label">Smartstorey</div>
      <div className="loader-bar"><i style={{ width: `${p}%` }} /></div>
    </div>
  );
}
