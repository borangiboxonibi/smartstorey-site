export const site = {
  name: "Smartstorey",
  legal: "Smartstorey LLP",
  email: "sales@smartstorey.com",
  phones: ["+91 80889 92110", "+91 96504 45779"],
  whatsapp: "918088992110",
  factory: "1759/A, 34th Cross Rd, near SLV Meadows, Kadarenahalli Park, Banashankari 2nd Stage, Bengaluru 560070",
  office: "Regus, Supreme Overseas Exports Building, Krishna Rajendra Rd, 7th Block, Jayanagar, Bengaluru 560070",
  socials: {
    LinkedIn: "https://www.linkedin.com/company/smartstorey",
    Instagram: "https://www.instagram.com/smartstorey",
    Facebook: "https://www.facebook.com/smartstoreysocial",
    YouTube: "https://www.youtube.com/channel/UCAM04lQOrRY_9HHKLyH_SIg",
  },
};

export const stats = [
  { value: 90, suffix: "+", label: "Projects delivered" },
  { value: 40, suffix: "+", label: "Cities served" },
  { value: 11000, suffix: "+", label: "Rooms furnished" },
  { value: 40, suffix: "+", label: "Renowned clients" },
];

export const factoryStats = [
  { value: 60, suffix: "+", label: "Years of combined experience" },
  { value: 70, suffix: "+", label: "Craftspeople & specialists" },
  { value: 2016, suffix: "", label: "Making furniture since" },
];

export const clients = ["OYO Townhouse", "Stanza Living", "IndiQube", "Zolo", "Your-Space", "Table Space", "Karachi Bakery", "Lvyue Hotels", "Pearl Tree"];

export type Sector = {
  slug: string; img: string; no: string; name: string; short: string; h1: string; intro: string;
  makes: string[]; points: { t: string; d: string }[]; cta: string; seo: string;
};

export const sectors: Sector[] = [
  {
    slug: "hotels", img: "/img/photo/cover-hotel.webp", no: "01", name: "Hotels & Resorts",
    short: "Guest-ready rooms, lobbies and dining, built for high footfall.",
    h1: "Hotel furniture, made to outlast the guests.",
    intro: "From boutique stays to 150-property chains, we design and manufacture room, lobby and dining furniture that holds its finish under constant use and carries your brand into every room.",
    makes: ["Beds & headboards", "Wardrobes & consoles", "Lobby & reception", "Restaurant & bar seating", "Outdoor & gazebo", "Doors & paneling"],
    points: [
      { t: "Brand-matched", d: "Material palettes and finishes aligned to your brand standards, property by property." },
      { t: "Built for check-ins", d: "Hardware, edging and upholstery specified for thousands of guest cycles." },
      { t: "Rollout ready", d: "Repeatable room packages for multi-city chains, delivered on a schedule." },
    ],
    cta: "Designing or upgrading a hotel? Let's furnish it.",
    seo: "Hotel Furniture Manufacturer in Bangalore & India",
  },
  {
    slug: "co-living", img: "/img/photo/cover-coliving.webp", no: "02", name: "Co-living & Hostels",
    short: "Beds, bunks, wardrobes and study units that install fast and take daily wear.",
    h1: "Co-living furniture, engineered for 1,000 move-ins.",
    intro: "We have furnished more than 8,000 co-living and student rooms across India. Modular metal and pre-laminated systems that ship flat, install in hours and stand up to everyday life.",
    makes: ["Metal & bunk beds", "Hydraulic storage beds", "Wardrobes", "Study tables", "Dining & café", "Lounge & common areas"],
    points: [
      { t: "Space-smart", d: "Layouts that fit more comfort into compact rooms without feeling cramped." },
      { t: "Fast install", d: "Flat-pack modular systems our crews assemble in hours, not days." },
      { t: "Lifecycle cost", d: "Durable materials and replaceable parts keep refurb costs down." },
    ],
    cta: "Planning your next co-living property? Let's plan the rooms.",
    seo: "Co-living, Hostel & PG Furniture Manufacturer in India",
  },
  {
    slug: "workspaces", img: "/img/photo/cover-workspace.webp", no: "03", name: "Workspaces & Co-working",
    short: "Modular desks, pods and café zones that move as teams grow.",
    h1: "Workspace furniture that scales with the team.",
    intro: "For co-working operators and growing companies, we build workstations, meeting pods, conference tables and café zones that reconfigure as fast as your floor plan changes.",
    makes: ["Workstations", "Meeting pods", "Conference tables", "Café & breakout", "Lobby & reception", "Storage"],
    points: [
      { t: "Modular by design", d: "Reconfigure layouts without replacing the furniture." },
      { t: "Rugged finish", d: "Metal, ply, laminate and waterproof fabrics for heavy co-working use." },
      { t: "Multi-site", d: "One spec delivered consistently across cities." },
    ],
    cta: "Fitting out a workspace? Let's design it to flex.",
    seo: "Office & Co-working Furniture Manufacturer in Bangalore",
  },
  {
    slug: "cafes-retail", img: "/img/photo/terrace-cafe.webp", no: "04", name: "Cafés & Retail",
    short: "Counters, kiosks and seating fabricated off-site, fitted in hours.",
    h1: "Counters, kiosks and cafés, fitted in hours.",
    intro: "We fabricate store fronts, racks, counters and café seating in our factory, then assemble on site with minimal downtime. Proven in live airport environments.",
    makes: ["Store fronts", "Kiosks & counters", "Racks & storage", "Café seating", "Display units", "Signage frames"],
    points: [
      { t: "Off-site build", d: "Fabricated and finished in our factory to cut on-site time." },
      { t: "Hours, not days", d: "Kiosks assembled within hours at live retail locations." },
      { t: "Built to sell", d: "Layouts that move customers and show product well." },
    ],
    cta: "Opening an outlet? Let's build it off-site.",
    seo: "Café Furniture & Retail Kiosk Manufacturer in India",
  },
];

export type Project = {
  slug: string; name: string; sector: string; sectorSlug: string; location: string;
  scope: string[]; size: string[]; blurb: string; featured?: boolean; gallery?: string[];
};

export const projects: Project[] = [
  { slug: "oyo-townhouse", gallery: ["/img/photo/oyo-eok.webp"], name: "OYO Townhouse", sector: "Hotels", sectorSlug: "hotels", location: "Pan India · 20+ cities", scope: ["Room furniture", "Dining furniture", "Kitchen equipment"], size: ["3,150+ rooms", "150+ properties"], blurb: "A modular metal and plywood collection for one of India's fastest-growing hotel chains, built to roll out quickly property after property.", featured: true },
  { slug: "stanza-living", gallery: ["/img/photo/stanza-room.webp"], name: "Stanza Living", sector: "Co-living", sectorSlug: "co-living", location: "Pan India · 300+ locations", scope: ["Hostel furniture", "Lobby furniture", "Bunk beds", "Kitchen equipment"], size: ["3,800+ rooms", "120+ properties"], blurb: "Affordable, flexible furniture for the fast-growing student co-living sector. Metal and pre-laminated board systems with quick, hassle-free installation.", featured: true },
  { slug: "your-space", gallery: ["/img/photo/yourspace-twin.webp"], name: "Your-Space", sector: "Co-living", sectorSlug: "co-living", location: "Pan India · 20+ cities", scope: ["Wardrobes", "Metal beds", "Study tables", "Café & lobby"], size: ["4,500+ rooms", "20+ cities"], blurb: "Room systems for student residences: wardrobes, metal beds and study tables designed for affordability and quick installation." },
  { slug: "indiqube", gallery: ["/img/photo/indiqube-lobby.webp"], name: "IndiQube", sector: "Workspaces", sectorSlug: "workspaces", location: "Bangalore · Mumbai · Chennai", scope: ["Café furniture", "Lobby furniture", "Meeting pods", "Conference tables"], size: ["13+ offices"], blurb: "Vibrant, highly functional co-working furniture in metal, plywood, laminate, solid wood and waterproof upholstery, built for rugged everyday use.", featured: true },
  { slug: "kushal-pally", name: "Kushal Pally Resort", sector: "Hotels", sectorSlug: "hotels", location: "Ajodhya Hills, West Bengal", scope: ["Villa furniture", "Café furniture", "Lobby furniture"], size: ["80 villas"], blurb: "A durable, elegant collection for a resort in the Ajodhya hills, with acacia wood accents, marble tops and refined laminates." },
  { slug: "olive-living", featured: true, gallery: ["/img/photo/olive-cafeteria-wide.webp", "/img/photo/lounge.webp", "/img/photo/olive-cafeteria.webp"], name: "Olive Living", sector: "Hotels", sectorSlug: "hotels", location: "Adugodi, Bangalore", scope: ["Bedroom furniture", "Common room furniture"], size: ["64 rooms"], blurb: "Modern, cozy rooms with high-quality finishes, warm tones and earthy accents for a relaxing guest experience." },
  { slug: "pearl-tree", gallery: ["/img/photo/pearltree-suite.webp"], name: "Pearl Tree", sector: "Hotels", sectorSlug: "hotels", location: "Kolkata", scope: ["Suite furniture", "Lounge seating", "TV consoles"], size: ["Premium room package"], blurb: "Warm ash-wood lounge seating, open-shelf coffee tables and slim consoles for a premium hotel's suites.", featured: true },
  { slug: "table-space", featured: true, gallery: ["/img/photo/tablespace-cafe.webp"], name: "Table Space", sector: "Workspaces", sectorSlug: "workspaces", location: "Pune · Chennai · Bangalore · Hyderabad", scope: ["Café furniture", "Lobby furniture", "Workstations"], size: ["9+ offices"], blurb: "Simple, modular office café furniture that rearranges easily, in wood and metal with leatherette upholstery." },
  { slug: "lvyue", name: "Lvyue Hotel", sector: "Hotels", sectorSlug: "hotels", location: "Gurgaon", scope: ["Room furniture", "Doors", "Reception", "Dining area"], size: ["60 rooms", "35,000+ sq ft"], blurb: "Sophisticated furniture in warm hues, tailored for a global business hotel." },
  { slug: "fountain-tree", name: "Fountain Tree Hotel", sector: "Hotels", sectorSlug: "hotels", location: "Electronic City, Bangalore", scope: ["Room furniture"], size: ["52 rooms"], blurb: "Elegant rooms with seamless finishes, neutral tones and contemporary accents." },
  { slug: "karachi-bakery", name: "Karachi Bakery", sector: "Retail", sectorSlug: "cafes-retail", location: "Chandigarh Airport", scope: ["Store fronts", "Racks", "Storage counters"], size: ["4 airport outlets"], blurb: "Kiosks and counters manufactured in our factory and assembled within hours at a live airport." },
  { slug: "kerala-guest-house", name: "Corporate Guest House", sector: "Hotels", sectorSlug: "hotels", location: "Kerala", scope: ["Room furniture", "Outdoor furniture", "Living & dining"], size: ["60+ units"], blurb: "An exclusive collection in African teak for a corporate client's guest house." },
  { slug: "wellington-residence", name: "Private Residence", sector: "Residential", sectorSlug: "hotels", location: "Wellington, New Zealand", scope: ["Bedroom", "Living & dining", "Outdoor & gazebo"], size: ["7-bedroom villa", "13,000 sq ft"], blurb: "A complete furniture package designed and exported for a 7-bedroom villa in New Zealand." },
];

export const process = [
  { t: "Consultation & brief", d: "Share your plans, references and requirements. We listen for the details that matter.", time: "Week 1" },
  { t: "Tailored proposal", d: "Pieces, material palette, timeline and budget, aligned to your project.", time: "Week 1–2" },
  { t: "Precision manufacturing", d: "Made in our Bengaluru factory with quality checks at every stage.", time: "Week 3–8" },
  { t: "White-glove installation", d: "On-time delivery, on-site assembly and final inspection before handover.", time: "On site" },
];

export type Category = { slug: string; name: string; short: string; img: string; specs?: [string, string][] };
export const categories: Category[] = [
  { slug: "beds", name: "Beds & Headboards", short: "Platform, upholstered and wall-to-wall headboard beds, in wood, laminate and steel.", img: "/img/products/s3-bed.webp" },
  { slug: "storage", name: "Wardrobes & Storage", short: "Fluted, open and hinged wardrobes, hanging niches and floating shelves.", img: "/img/products/v-ward.webp" },
  { slug: "desks-consoles", name: "Desks & Consoles", short: "Writing desks, TV and minibar consoles, tea stations and work ledges.", img: "/img/products/e-desk.webp" },
  { slug: "tables", name: "Tables & Bedsides", short: "Coffee tables, bedsides and side tables in solid wood, veneer and marble.", img: "/img/products/e-table.webp" },
  { slug: "seating", name: "Seating & Sofas", short: "Lounge chairs, armchairs, bed benches and sofas, upholstered to order.", img: "/img/photo/lounge.webp" },
  { slug: "commercial", name: "Reception, Café & Bar", short: "Reception counters, café counters, bar seating and dining sets.", img: "/img/photo/reception.webp" },
  { slug: "engineered-wood", name: "Engineered Wood Range", short: "Ready-to-specify beds, bedsides, study tables and wardrobes in engineered wood, made in 10 working days.", img: "/img/finishes/classic-walnut.webp",
    specs: [["Finishes", "Exotic Teak · Classic Planked Walnut · Thansau Maple"], ["Edge banding", "2 mm and 0.8 mm"], ["Board density", "650–680 kg/m³"], ["Hardware", "Ebco"], ["Lead time", "10 working days"]] },
];

export type Product = { slug: string; name: string; cat: string; img?: string; note: string; for: string[]; code?: string; sizes?: [string, string][] };
const P = (slug: string, name: string, cat: string, img: string, note: string, f: string[]): Product => ({ slug, name, cat, img, note, for: f });
const pi = (n: string) => `/img/products/${n}.webp`;
const ph = (n: string) => `/img/photo/${n}.webp`;
export const products: Product[] = [
  P("channel-tufted-bed", "Channel-tufted upholstered bed", "beds", pi("v-bed"), "Fabric-wrapped headboard with vertical channels, box base", ["Hotels"]),
  P("panelled-headboard-bed", "Panelled-headboard queen bed", "beds", pi("e-bed"), "Upholstered panel headboard, integrated reading lights", ["Hotels"]),
  P("buttoned-teak-bed", "Teak bed with buttoned headboard", "beds", pi("h-bed"), "Solid-wood frame, leatherette buttoned headboard", ["Hotels", "Resorts"]),
  P("floating-platform-bed", "Floating platform bed", "beds", pi("s2-bed"), "Recessed plinth for a floating look, oak-finish laminate", ["Hotels", "Co-living"]),
  P("oak-platform-bed", "Oak-finish platform bed", "beds", pi("s3-bed"), "Clean-edge platform with matching bedside ledges", ["Hotels"]),
  P("wall-headboard", "Full-wall timber headboard", "beds", pi("s3-head"), "Wall-to-wall laminate panel with sconces and switch cut-outs", ["Hotels"]),
  P("wall-to-wall-headboard-bed", "Wall-to-wall headboard bed", "beds", pi("s4-bed"), "Continuous headboard spanning bed and bedsides", ["Hotels"]),
  P("metal-base-bed", "Metal-base hotel bed", "beds", pi("s1-bed"), "Powder-coated steel base, slim profile, easy to service", ["Hotels", "Co-living"]),
  P("twin-bed-set", "Twin beds with bedside unit", "beds", pi("s2-twin"), "Pair of singles with shared bedside and headboard", ["Hotels", "Co-living"]),
  P("steel-bed-frame", "Steel bed frame, upholstered back", "beds", ph("metal-bed"), "Welded steel frame with ply deck and padded headboard", ["Co-living", "Hostels"]),
  P("fluted-wardrobe", "Fluted-shutter wardrobe", "storage", pi("v-ward"), "Full-height fluted shutters in walnut finish", ["Hotels"]),
  P("open-wardrobe", "Open wardrobe with luggage bay", "storage", pi("e-ward"), "Hanging rail, drawer and luggage shelf in one unit", ["Hotels"]),
  P("hanging-niche", "Lit hanging niche", "storage", pi("s1-ward"), "Open hanging bay with concealed LED and shelves", ["Hotels", "Co-living"]),
  P("floating-shelf", "Metal-and-wood floating shelf", "storage", pi("s1-shelf"), "Black steel hangers, timber shelves, LED strip", ["Hotels", "Cafés"]),
  P("curved-desk", "Curved writing desk", "desks-consoles", pi("e-desk"), "Radius-edge desk with tea tray ledge and task chair", ["Hotels"]),
  P("tv-minibar-console", "TV console with minibar", "desks-consoles", pi("e-tv"), "Long-span console, open minibar bay, wire management", ["Hotels"]),
  P("tea-station", "Minibar & tea station", "desks-consoles", pi("s1-bar"), "Glass-front fridge bay, kettle top, concealed storage", ["Hotels"]),
  P("work-ledge", "Long-span desk & console", "desks-consoles", pi("s1-desk"), "Wall-hung work ledge over closed cabinets", ["Hotels", "Co-living"]),
  P("wall-desk", "Wall-mounted desk & TV ledge", "desks-consoles", pi("v-desk"), "Floating desk with drawer, TV panel above", ["Hotels"]),
  P("glass-top-desk", "Writing desk with glass top", "desks-consoles", pi("s2-desk"), "Timber desk, glass top, matching chair", ["Hotels"]),
  P("fluted-oval-table", "Fluted oval coffee table", "tables", pi("l-oval"), "Black fluted drum, marble top, brass legs", ["Hotels", "Lounges"]),
  P("round-wood-table", "Round solid-wood table", "tables", pi("e-table"), "Solid timber top on splayed tapered legs", ["Hotels", "Cafés"]),
  P("open-shelf-coffee-table", "Open-shelf coffee table", "tables", pi("h-coffee"), "Ash-finish frame with display shelves", ["Hotels"]),
  P("waterfall-bedside", "Waterfall bedside", "tables", pi("e-side"), "Continuous curved panel, charging point above", ["Hotels"]),
  P("cabriole-side-table", "Cabriole side table", "tables", pi("h-side"), "Carved solid-wood legs, single drawer", ["Hotels", "Residences"]),
  P("emerald-velvet-sofa", "Emerald velvet sofa", "seating", pi("l-sofa"), "Three-seater in deep green velvet, tight back", ["Hotels", "Lounges"]),
  P("navy-velvet-sofa", "Navy velvet sofa", "seating", pi("e-sofa"), "Low-arm three-seater with loose scatter cushions", ["Hotels"]),
  P("two-seater-sofa", "Two-seater room sofa", "seating", pi("v-sofa"), "Compact footprint for suites and lounges", ["Hotels", "Co-living"]),
  P("cane-lounge-chair", "Cane-back lounge chair", "seating", pi("h-chair"), "Solid-wood arms, woven cane sides, deep seat", ["Hotels", "Resorts"]),
  P("accent-chair", "Upholstered accent chair", "seating", pi("e-chair"), "Slim black frame, upholstered seat and back", ["Hotels"]),
  P("bentwood-armchair", "Bentwood armchair", "seating", pi("h-arm"), "Curved ash frame with padded back", ["Hotels"]),
  P("cabriole-bed-bench", "Cabriole bed bench", "seating", pi("h-bench"), "Upholstered top on carved solid-wood legs", ["Hotels"]),
  P("lounge-armchairs", "Lounge armchairs & side table", "seating", ph("lounge"), "Timber-arm lounge pair for common areas", ["Co-living", "Hotels"]),
  P("fluted-reception", "Fluted reception counter", "commercial", ph("reception"), "Solid-surface top, fluted timber base, LED plinth", ["Hotels", "Co-living", "Workspaces"]),
  P("cafe-counter", "Café service counter", "commercial", ph("tribe-counter"), "Oak-finish counter sized for coffee equipment", ["Workspaces", "Cafés"]),
  P("rattan-cafe-chairs", "Rattan café chairs & coffee bar", "commercial", ph("rattan-counter"), "Woven rattan chairs with a compact coffee bar", ["Co-living", "Cafés"]),
  P("bar-stools", "Upholstered bar stools", "commercial", ph("bar-stools"), "Steel-frame stools with leatherette seats", ["Cafés", "Co-living"]),
  P("cane-dining-sets", "Cane dining chairs & benches", "commercial", ph("olive-cafeteria"), "Solid-wood cane chairs, padded benches, laminate tables", ["Hotels", "Co-living"]),
  P("cafe-dining-sets", "Café dining sets", "commercial", ph("cafe-tables"), "Compact tables and chairs for terraces and cafés", ["Workspaces", "Cafés"]),
];

const EW = (n: string, name: string, note: string, sizes: [string, string][], f: string[] = ["Hotels", "Co-living"]): Product => ({ slug: n.toLowerCase().replace(/\s+/g, "-"), code: n, name, cat: "engineered-wood", note, for: f, sizes });
const BED: [string, string][] = [["King", "1980 D × 1830 L mm"], ["Queen", "1980 D × 1520 L mm"]];
const ST: [string, string][] = [["Standard", "430 D × 450 W mm"]];
const WD: [string, string][] = [["Single door", "1800 H × 400 W × 450 D mm"], ["Double door", "1800 H × 800 W × 515 D mm"], ["Triple door", "2000 H × 1200 W × 550 D mm"]];
products.push(
  EW("EW Bed 1", "Storage bed, low panel headboard", "Box storage under a full-width platform", BED),
  EW("EW Bed 2", "Storage bed, rounded headboard", "Box storage, softened edges on headboard and footboard", BED),
  EW("EW Bed 3", "Storage bed, shelf headboard", "Box storage with an open display headboard", BED),
  EW("EW ST 1", "Open bedside cube", "Single open shelf, clean waterfall sides", ST),
  EW("EW ST 2", "Two-drawer bedside", "Two full-width drawers with bar handles", ST),
  EW("EW ST 3", "Open-shelf bedside", "Two open shelves for books and décor", ST),
  EW("EW ST 4", "Bedside with drawer & niche", "Open niche over a single drawer", ST),
  EW("EW STB 1", "Study table with side shelves", "Writing desk with open side storage", [["Standard", "400 D × 1030 W × 720 H mm"]]),
  EW("EW STB 2", "Study table with drawer unit", "Desk with a drawer and closed cabinet", [["Standard", "400 D × 1030 W × 720 H mm"]]),
  EW("EW STB 3", "Wall-mounted fold-down desk", "Powder-coated 18-gauge steel brackets", [["Standard", "450 D × 600 W mm"]]),
  EW("EW STB 4", "Two-tier study desk", "Monitor shelf on a powder-coated steel frame", [["Standard", "450 D × 800 W × 760 H mm"]]),
  EW("EW STB 5", "C-frame sofa side desk", "Slides over a sofa or bed; steel understructure", [["Standard", "380 D × 600 W × 740 H mm"]]),
  EW("EW WD 1", "Hinged wardrobe, classic", "Shelving and hanging space, single to triple door", WD),
  EW("EW WD 2", "Hinged wardrobe with drawers", "Shelves, hanging rail and base drawers", WD),
  EW("EW WD 3", "Hinged wardrobe, tall handle", "Full-height pull handles, shelving and hanging", [WD[0], WD[2]]),
);

export const packages = [
  { name: "Signature", tier: "Premium", img: pi("h-bed"), d: "Solid wood and veneer, upholstered headboards, marble and fluted accents, lounge seating in every room.", items: ["Upholstered or solid-wood bed", "Fluted wardrobe", "Writing desk & accent chair", "TV & minibar console", "Lounge chair or sofa"] },
  { name: "Classic", tier: "Standard", img: pi("s3-bed"), d: "Oak-finish laminates, floating platform beds and wall-to-wall headboards for business and mid-scale hotels.", items: ["Platform bed & full-wall headboard", "Open wardrobe with luggage bay", "Long-span desk & console", "Tea station", "Accent chair"] },
  { name: "Essential", tier: "Value", img: pi("s1-bed"), d: "Steel and pre-laminated systems that install in hours and take daily wear, for budget hotels and co-living.", items: ["Metal-base or steel-frame bed", "Hanging niche or wardrobe", "Study desk", "Floating shelf", "Café & common-area seating"] },
];
