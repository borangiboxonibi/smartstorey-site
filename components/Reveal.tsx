"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// Re-scans on every route change so client-side navigations animate too.
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)");
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
