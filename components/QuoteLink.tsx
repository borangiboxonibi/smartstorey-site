"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuote } from "@/lib/quote";
export default function QuoteLink({ onClick }: { onClick?: () => void }) {
  const items = useQuote();
  const [bump, setBump] = useState(false);
  useEffect(() => { if (!items.length) return; setBump(true); const t = setTimeout(() => setBump(false), 500); return () => clearTimeout(t); }, [items]);
  const n = items.length;
  return (
    <Link href="/quote/" className={bump ? "quote-link bump" : "quote-link"} onClick={onClick} aria-label={`Quote list, ${n} item${n === 1 ? "" : "s"}`}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v4h4M9 12h7M9 16h5" /></svg>
      <span className="mono ql-txt">Quote</span>
      {n > 0 && <span className="ql-n">{n}</span>}
    </Link>
  );
}
