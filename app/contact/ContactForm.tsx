"use client";
import { useState } from "react";
import { site } from "@/lib/data";
// v1: composes a WhatsApp message. Swap for a form endpoint / CRM once the client confirms where leads go.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      const f = new FormData(e.currentTarget);
      const msg = ["New project enquiry", ...["name", "company", "type", "size", "city", "timeline", "notes"].map((k) => `${k}: ${f.get(k) || "-"}`)].join("\n");
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      setSent(true);
    }}>
      <div className="f2"><label>Name<input name="name" required /></label><label>Company<input name="company" /></label></div>
      <div className="f2"><label>Property type<select name="type" defaultValue="Hotel"><option>Hotel</option><option>Resort</option><option>Co-living / Hostel</option><option>Workspace</option><option>Café / Retail</option><option>Other</option></select></label>
        <label>Rooms or area<input name="size" placeholder="e.g. 60 rooms" /></label></div>
      <div className="f2"><label>City<input name="city" /></label><label>Timeline<input name="timeline" placeholder="e.g. March 2027" /></label></div>
      <label>Anything else<textarea name="notes" rows={4} /></label>
      <button className="btn" type="submit">Send enquiry</button>
      {sent && <p className="mono small o">Opening WhatsApp with your brief…</p>}
    </form>
  );
}
