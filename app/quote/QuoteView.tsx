"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import Qty from "@/components/Qty";
import { useQuote, setQty, removeItem, clearQuote, totalPieces, type QuoteItem } from "@/lib/quote";

const DRAFT = "smartstorey-quote-contact-v1";
const line = (x: QuoteItem, n: number) => `${n}. ${x.code ? `${x.code} – ` : ""}${x.name}${x.finish ? ` | Finish: ${x.finish}` : ""}${x.size ? ` | Size: ${x.size}` : ""} | ${x.kind === "package" ? "Rooms" : "Qty"}: ${x.qty}`;

export default function QuoteView() {
  const items = useQuote();
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<"" | "wa" | "mail">("");
  useEffect(() => { setReady(true); try { setDraft(JSON.parse(localStorage.getItem(DRAFT) || "{}")); } catch {} }, []);
  const upd = (k: string, v: string) => { const d = { ...draft, [k]: v }; setDraft(d); try { localStorage.setItem(DRAFT, JSON.stringify(d)); } catch {} };

  if (!ready) return <div className="quote-empty" aria-busy="true" />;
  if (items.length === 0) return (
    <div className="quote-empty">
      <p className="display-sm">Your quote list is empty.</p>
      <p className="dim">Browse the collection, choose a finish and quantity, and tap <em>Add to quote</em> on any piece or room package.</p>
      <Link className="btn" href="/products/">Browse products</Link>
    </div>
  );

  const message = () => {
    const d = draft;
    return [
      "REQUEST FOR QUOTE – smartstorey.com",
      "",
      ...items.map((x, i) => line(x, i + 1)),
      "",
      `Total pieces / rooms: ${totalPieces(items)}`,
      "",
      `Name: ${d.name || "-"}`, `Company: ${d.company || "-"}`, `Phone: ${d.phone || "-"}`, `Email: ${d.email || "-"}`,
      `City / site: ${d.city || "-"}`, `Property type: ${d.type || "Hotel"}`, `Needed by: ${d.timeline || "-"}`,
      ...(d.notes ? ["", `Notes: ${d.notes}`] : []),
    ].join("\n");
  };
  const send = (via: "wa" | "mail") => (e: React.MouseEvent) => {
    const form = (e.currentTarget as HTMLElement).closest("form") as HTMLFormElement;
    if (!form.reportValidity()) return;
    const m = message();
    if (via === "wa") window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(m)}`, "_blank", "noopener");
    else window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Quote request – ${draft.company || draft.name || "website"} (${items.length} line${items.length > 1 ? "s" : ""})`)}&body=${encodeURIComponent(m)}`;
    setSent(via);
  };

  return (
    <div className="quote">
      <div className="quote-list">
        <div className="quote-head"><span className="mono">{items.length} line{items.length > 1 ? "s" : ""} · {totalPieces(items)} pieces</span>
          <button type="button" className="mono quote-clear" onClick={() => { if (confirmClear()) clearQuote(); }}>Clear list</button></div>
        <ul>
          {items.map((x) => (
            <li key={x.key} className="qi">
              <Link href={x.href || "/products/"} className="qi-img">{x.img ? <img src={x.img} alt="" loading="lazy" /> : <span className="mono">{x.code || "—"}</span>}</Link>
              <div className="qi-body">
                {x.code && <span className="mono qi-code">{x.code}</span>}
                <h3>{x.name}</h3>
                <p className="dim">{[x.finish, x.size].filter(Boolean).join(" · ") || (x.kind === "package" ? "Finishes tailored to your brand" : "Finish to your specification")}</p>
              </div>
              <div className="qi-qty"><span className="mono">{x.kind === "package" ? "Rooms" : "Qty"}</span><Qty value={x.qty} onChange={(n) => setQty(x.key, n)} label={`Quantity of ${x.name}`} /></div>
              <button type="button" className="qi-x" aria-label={`Remove ${x.name}`} onClick={() => removeItem(x.key)}>×</button>
            </li>
          ))}
        </ul>
        <Link className="link mono" href="/products/">+ Add more pieces</Link>
      </div>

      <form className="form quote-form" onSubmit={(e) => e.preventDefault()}>
        <p className="mono eyebrow">Your details</p>
        <div className="f2"><label>Name<input name="name" required value={draft.name || ""} onChange={(e) => upd("name", e.target.value)} autoComplete="name" /></label>
          <label>Company<input name="company" value={draft.company || ""} onChange={(e) => upd("company", e.target.value)} autoComplete="organization" /></label></div>
        <div className="f2"><label>Phone<input name="phone" type="tel" required value={draft.phone || ""} onChange={(e) => upd("phone", e.target.value)} autoComplete="tel" /></label>
          <label>Email<input name="email" type="email" value={draft.email || ""} onChange={(e) => upd("email", e.target.value)} autoComplete="email" /></label></div>
        <div className="f2"><label>City / site<input name="city" value={draft.city || ""} onChange={(e) => upd("city", e.target.value)} /></label>
          <label>Property type<select name="type" value={draft.type || "Hotel"} onChange={(e) => upd("type", e.target.value)}><option>Hotel</option><option>Resort</option><option>Co-living / Hostel</option><option>Workspace</option><option>Café / Retail</option><option>Other</option></select></label></div>
        <label>Needed by<input name="timeline" placeholder="e.g. March 2027" value={draft.timeline || ""} onChange={(e) => upd("timeline", e.target.value)} /></label>
        <label>Notes for our team<textarea name="notes" rows={3} placeholder="Room counts, custom sizes, fabric or branding requirements" value={draft.notes || ""} onChange={(e) => upd("notes", e.target.value)} /></label>
        <div className="quote-send">
          <button type="button" className="btn" onClick={send("wa")}>Send on WhatsApp</button>
          <button type="button" className="btn btn-ghost" onClick={send("mail")}>Send by email</button>
        </div>
        <p className="mono small dim">No prices are shown online. Every quote is prepared for your project by our sales team.</p>
        {sent && <p className="mono small o" role="status">{sent === "wa" ? "Opening WhatsApp with your list…" : "Opening your email app with your list…"} Your list stays here until you clear it.</p>}
      </form>
    </div>
  );
}
function confirmClear() { return typeof window !== "undefined" ? window.confirm("Remove every item from your quote list?") : false; }
