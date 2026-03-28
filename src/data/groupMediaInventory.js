/**
 * Consolidated inventory from founder documents (website changes folder).
 * Presented as one Mahishmati Media offering — operating / partner entities listed per company.
 */

export const groupMediaIntro = {
  headline: "Unified media access",
  title: "Group media inventory",
  subtitle:
    "Digital and non-digital assets across our network are coordinated under Mahishmati Media. Below, each operating entity’s inventory is summarized in one place for planning and proposals.",
  footnote:
    "Figures and formats are as per supplied specifications; final availability, sizes, and approvals are confirmed at booking. JMRC / RSRTC / IR terms apply where relevant.",
};

/** @type {{ id: string; name: string; role: string; categories: ('digital'|'static'|'rail'|'bus'|'metro')[]; highlights: { title: string; items: string[] }[] }[]} */
export const groupCompanies = [
  {
    id: "vinay-joshi",
    name: "Vinay Joshi",
    role: "Metro & integrated transit — Sindhi Camp",
    categories: ["metro", "digital", "static"],
    highlights: [
      {
        title: "Digital — Sindhi Camp Metro",
        items: [
          "LED at Gate No. 1 — 11.3′ × 7.5′ (×1)",
          "LED — Concourse — 7.5′ × 5.5′ (×2)",
          "LED Smart TV Ultra HD 4K — Concourse — 65″ (×15)",
          "HD LED TV — Concourse — 32″ (×18)",
          "Large LED near RSRTC Central Bus Stand exit — 18.8′ × 9.4′ (×1)",
        ],
      },
      {
        title: "Static — inside station",
        items: [
          "Signage display boards — concourse & platform — multiple sizes (e.g. 10′×5′, 11.5′×4′)",
        ],
      },
      {
        title: "Static — outside station",
        items: [
          "Hoardings at Gate No. 1 — 20′×10′, 10′×20′, 11.5′×4′",
          "Pillar signage — 3′×7′ (multiple units)",
        ],
      },
      {
        title: "Semi-naming & station branding (JMRC)",
        items: [
          "Brand as prefix/suffix to Sindhi Camp Metro Station name — all locations",
          "Neon / entry-exit logo or tagline placements",
          "Themed vinyl on ACP / walls / glass / escalator — up to ~12,000 sq ft (indicative)",
          "Wall painting footprint — up to ~1,00,000 sq ft (indicative)",
          "Minimum campaign duration and JMRC T&Cs apply as per work order",
        ],
      },
    ],
  },
  {
    id: "mahishmati-media",
    name: "Mahishmati Media",
    role: "PBCM, regional rail & bus digital",
    categories: ["rail", "bus", "digital", "static"],
    highlights: [
      {
        title: "Static — PBCM vinyl (two sides)",
        items: [
          "Rajasthan: Jaipur Jn (25), Ajmer / Udaipur City / Bikaner / Jodhpur (25 each), tiered counts at Abu Road, Bhilwara, Falna, Marwar, and smaller stations (15 / 10 / 5 per station groups as per doc)",
          "Outside Rajasthan: Gorakhpur, Lucknow, Hissar, Bhiwani, Sirsa, Amravati, Nasik Road, Bhusaval — counts per station as specified",
        ],
      },
      {
        title: "Digital — PBCM LED TVs",
        items: [
          "Rajasthan: Jaipur Jn (75×43″), major stations (75×43″ each), 32″ / 43″ tiers at secondary and tertiary stations per document",
          "Outside Rajasthan: Gorakhpur, Lucknow, Haryana, Maharashtra clusters — screen counts per spec",
        ],
      },
      {
        title: "LED — eastern Rajasthan rail",
        items: [
          "Kota Jn — 43″ screens (×33)",
          "Sawai Madhopur Jn — 43″ (×25)",
          "Bharatpur Jn — 43″ (×25)",
        ],
      },
      {
        title: "Digital — RSRTC Udaipur",
        items: [
          "RSRTC Central Bus Stand, Udaipur — LED wall 9′ × 6′ — day & night visibility; video / stills (no audio per spec)",
        ],
      },
    ],
  },
  {
    id: "apex-display",
    name: "Apex Display",
    role: "RSRTC bus stands, rail towers, train interior",
    categories: ["bus", "rail", "digital", "static"],
    highlights: [
      {
        title: "Jaipur — Central Bus Stand (Sindhi Camp)",
        items: [
          "RSRTC platform / route / amenity / gate / waiting / ticket windows — branding — ~2500 sq ft (flex / vinyl / sun-board)",
          "Hoardings & large flex faces — multiple sizes (e.g. 8′×19′, 39′×19′, 80′×10′, 60′×10′, 40′×10′, 20′×10′)",
          "Sign boards — platform / waiting — 6′×2′ (double & single sided), 5′×2′",
          "Four-sided pillars — Platforms 1–5 — various face combinations",
          "Railing sign boards — circulating area — 6′×2′ (×120) vinyl",
        ],
      },
      {
        title: "Transport Nagar Bus Stand, Jaipur",
        items: ["Hoardings 60′×10′, 40′×10′, 20′×10′", "Sign boards 6′×2′ (×20)"],
      },
      {
        title: "Bikaner — RSRTC Central Bus Stand",
        items: ["LED screen — 9′ × 6′"],
      },
      {
        title: "Rail — display towers (circulating area)",
        items: [
          "Four-sided towers — 3′ × 8′ each face — Jaipur Jn (×10), Sikar Jn (×2), Ringas Jn (×2) — 96 sq ft advertising space per tower",
        ],
      },
      {
        title: "Train interior — NWR coach mirrors",
        items: [
          "Stickers — 18×8 cm (~9000), 15×5 cm (~4000) on coach mirrors",
        ],
      },
    ],
  },
  {
    id: "kartik-publicity",
    name: "Kartik Publicity",
    role: "Train exterior, bus, multi-city rail digital",
    categories: ["rail", "bus", "digital", "static"],
    highlights: [
      {
        title: "Train exterior",
        items: [
          "20473/74 Chetak SF (Udaipur–Delhi Sarai Rohilla) — ~160 sq ft per coach — 20 coaches × 3 racks",
          "22471/72 Lalgarh (Bikaner)–Delhi Sarai Rohilla — same format per proposal",
        ],
      },
      {
        title: "Bikaner — RSRTC Central Bus Stand",
        items: [
          "Sign boards 4×2 (×20), 6×3 (×36)",
          "Four-sided pillar towers 3×2 (×8)",
          "Display board 10×20 (×5)",
        ],
      },
      {
        title: "Digital — Rajasthan rail",
        items: [
          "Jaipur Jn — LED 18.8′ × 9.4′",
          "Durgapura, Getor Jagatpura, Sanganer, Dahar Ka Balaji, Sikar & Ringas Jn — LED 18.8′ × 9.4′ each",
        ],
      },
      {
        title: "Digital — outside Rajasthan",
        items: [
          "Nasik Road — 43″ LED TVs (×15)",
          "Ahmedabad Jn — 43″ (×40)",
          "Gandhidham, Sabarmati, Asarva — 43″ screens per proposal counts",
        ],
      },
    ],
  },
  {
    id: "sanwaliya-seth",
    name: "Sanwaliya Seth",
    role: "Rail kiosks, Vande Bharat, trains & Nasik",
    categories: ["rail", "bus", "digital", "static"],
    highlights: [
      {
        title: "Jaipur Jn — portrait digital LED kiosks",
        items: ["Dual-sided 43″ — 40 kiosks, 80 screens total"],
      },
      {
        title: "Ajmer — RSRTC Central Bus Stand",
        items: ["LED wall — 9′ × 6′"],
      },
      {
        title: "Vande Bharat — in-train screens",
        items: [
          "Ajmer↔Chandigarh 20977/78 — 40×32″",
          "Ahmedabad↔Mumbai 22961/62 — 40 screens",
          "Ahmedabad↔Okha 22925/26 — 16",
          "Sabarmati↔Veraval 26901/02 — 16",
          "Mumbai↔Sainagar Shirdi 22223/24 — 32",
        ],
      },
      {
        title: "Nasik Railway Station (Maharashtra)",
        items: ["Platform, ticket, waiting — 65×43″ LED"],
      },
      {
        title: "Train exterior & coach branding",
        items: [
          "One-way vision on AC coach windows — 56×32″ / 43×27″ / 46×20″ formats",
          "Full coach exterior vinyl — Ahmedabad↔Mumbai AC double decker 12931/32 — 12 coaches",
        ],
      },
    ],
  },
  {
    id: "shankara-advertising",
    name: "Shankara Advertising",
    role: "Multi-city LED — Pune, Amravati, Rajasthan cluster",
    categories: ["rail", "digital"],
    highlights: [
      {
        title: "Maharashtra",
        items: [
          "Pune Jn — 100×43″ — platforms, entry, waiting, ticketing",
          "Amravati — 40×43″ — same placement mix",
        ],
      },
      {
        title: "Rajasthan — large format LED",
        items: [
          "Ajmer, Bharatpur, Bikaner, Jodhpur, Udaipur, Kota — 1 screen per station — 11.2′ × 7.5′ — station premises",
        ],
      },
    ],
  },
  {
    id: "visual-plush",
    name: "Visual Plush",
    role: "Jaipur Junction density",
    categories: ["rail", "digital"],
    highlights: [
      {
        title: "Jaipur Junction Railway Station",
        items: [
          "LED TV screens — 96 units (88×42″ + 8×32″)",
          "Large LED screen — 11.2′ × 7.5′",
        ],
      },
    ],
  },
];

export const filterLabels = [
  { id: "all", label: "All" },
  { id: "metro", label: "Metro" },
  { id: "rail", label: "Railway" },
  { id: "bus", label: "Bus / RSRTC" },
  { id: "digital", label: "Digital" },
  { id: "static", label: "Non-digital" },
];
