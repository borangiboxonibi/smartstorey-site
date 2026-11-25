"use client";
import { useEffect, useRef, useState } from "react";
export default function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value); // render final value for no-JS / SEO; animate on view
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const start = performance.now(), dur = 1600;
      const tick = (t: number) => { const k = Math.min(1, (t - start) / dur); setN(Math.round(value * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{value >= 10000 ? n.toLocaleString("en-IN") : n}{suffix}</span>;
}
