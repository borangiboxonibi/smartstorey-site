import type { Metadata } from "next";
import QuoteView from "./QuoteView";
export const metadata: Metadata = { title: "Your quote list", description: "Review the pieces and quantities you've picked and send them to Smartstorey for a quote." };
export default function Quote() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <p className="mono eyebrow">Request a quote</p><h1>Your quote list, <span className="o">ready to send.</span></h1>
        <p className="lede">Check the pieces, finishes and quantities, add your details, and our sales team will reply with pricing, lead times and a delivery plan.</p>
      </div></section>
      <section className="section"><div className="wrap"><QuoteView /></div></section>
    </>
  );
}
