import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { site } from "@/lib/data";
export const metadata: Metadata = { title: "Contact", description: "Start a furniture project with Smartstorey. Share your floor plan and get a plan, quote and timeline." };
export default function Contact() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <p className="mono eyebrow">Contact</p><h1>Every great space starts <span className="o">with a conversation.</span></h1>
        <p className="lede">Tell us about the property. We&apos;ll come back with a furniture plan, a quote and a timeline.</p>
      </div></section>
      <section className="section"><div className="wrap contact">
        <ContactForm />
        <aside className="contact-info">
          <div><span className="mono label">Sales</span><a href={`mailto:${site.email}`}>{site.email}</a>{site.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>)}</div>
          <div><span className="mono label">WhatsApp</span><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener">Chat with our team →</a></div>
          <div><span className="mono label">Factory</span><p className="dim">{site.factory}</p></div>
          <div><span className="mono label">Office</span><p className="dim">{site.office}</p></div>
        </aside>
      </div></section>
    </>
  );
}
