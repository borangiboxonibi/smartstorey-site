import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Reveal from "@/components/Reveal";
import QuoteToast from "@/components/QuoteToast";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://smartstorey.com"),
  title: { default: "Smartstorey | Hotel, Co-living & Workspace Furniture Manufacturer, Bengaluru", template: "%s | Smartstorey" },
  description: "Bespoke and modular contract furniture for hotels, co-living, hostels, co-working and cafés. Designed and made in Bengaluru, installed across 40+ cities.",
  openGraph: { siteName: "Smartstorey", type: "website" },
  robots: { index: false, follow: false }, // preview only: remove at launch
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "LocalBusiness", additionalType: "https://schema.org/Manufacturer",
  name: site.legal, url: "https://smartstorey.com", email: site.email, telephone: site.phones[0], foundingDate: "2016",
  address: { "@type": "PostalAddress", streetAddress: "1759/A, 34th Cross Rd, Kadarenahalli Park, Banashankari 2nd Stage", addressLocality: "Bengaluru", addressRegion: "Karnataka", postalCode: "560070", addressCountry: "IN" },
  sameAs: Object.values(site.socials),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#11100e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Loader />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Reveal />
        <QuoteToast />
      </body>
    </html>
  );
}
