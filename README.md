# Smartstorey website (v2)

Next.js 16 static site. v2: luxury restyle (Cormorant Garamond + Jost, warm charcoal with champagne-gold accents; brand orange kept in the logo), a Products section, and professionally edited photography from the client's Drive.

- `npm install && npm run dev` to work locally; `npm run build` exports static HTML to `out/` (Vercel deploys as-is).
- All content lives in `lib/data.ts`: contact, stats, sectors, projects (with `gallery` photos), product `categories`, 39 `products` and 3 room `packages`.
- Images: `public/img/products/` (catalogue pieces) and `public/img/photo/` (projects, sectors, factory). All are colour-corrected, cropped and exported as WebP.
- Product "Request a quote" links open WhatsApp with the product name prefilled.
- To confirm with client: Pearl Tree project details (Kolkata, scope), room-package names/contents, product names, founder headshots, vector logo.
- `robots: noindex` is set in `app/layout.tsx` for previews: remove at launch.
