/* ============================================================
   EMNEX AI — Site content
   Copy, links and categories preserved from the existing site.
   ============================================================ */

export const WHATSAPP_NUMBER = "2348162983333";

export const waLink = (project?: string) =>
  project
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hello EMNEX AI! I saw your ${project} project and I'd like to discuss a similar website for my business.`
      )}`
    : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello EMNEX AI! I'm interested in getting a website for my business. I'd like to discuss my project."
      )}`;

export const EMAIL = "Emnexai@gmail.com";

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/emnex_ai/?hl=en" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61564717200555",
  },
  {
    label: "Contra",
    href: "https://contra.com/emmanuel_bodas_yh6m4xwt/work?r=emmanuel_bodas_yh6m4xwt",
  },
  { label: "Behance", href: "https://www.behance.net/httpsmrbodasnet" },
  { label: "WhatsApp", href: waLink() },
];

export type FilterKey =
  | "all"
  | "travel"
  | "realestate"
  | "hospitality"
  | "creative"
  | "business"
  | "nonprofit";

export const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "travel", label: "Travel" },
  { key: "realestate", label: "Real Estate" },
  { key: "hospitality", label: "Hospitality" },
  { key: "creative", label: "Creative" },
  { key: "business", label: "Business" },
  { key: "nonprofit", label: "Nonprofit" },
];

export interface Project {
  id: string;
  index: string;
  name: string;
  category: string;
  filter: Exclude<FilterKey, "all">;
  url: string;
  domain: string | null;
  description: string;
  heroShot: string;
  altShot: string;
}

/* The five selected projects shown on the homepage. */
export const PROJECTS: Project[] = [
  {
    id: "wandermark",
    index: "01",
    name: "Wandermark",
    category: "Travel & Tourism",
    filter: "travel",
    url: "https://e1q3g8174391-d.space-z.ai/",
    domain: "wandermark.travel",
    description:
      "A refined travel website designed around guided journeys, destination discovery, and memorable travel experiences across 60+ countries.",
    heroShot: "/projects/wandermark-hero.jpg",
    altShot: "/projects/wandermark-mid.jpg",
  },
  {
    id: "velmora",
    index: "02",
    name: "Velmora Estates",
    category: "Luxury Real Estate",
    filter: "realestate",
    url: "https://c1t3f82gps61-d.space-z.ai/",
    domain: "velmoraestates.com",
    description:
      "A sophisticated real-estate experience designed to present premium properties through an elegant, editorial interface.",
    heroShot: "/projects/velmora-hero.jpg",
    altShot: "/projects/velmora-mid.jpg",
  },
  {
    id: "marlowe",
    index: "03",
    name: "Marlowe & Hart",
    category: "Architecture & Interiors",
    filter: "creative",
    url: "https://q193a8gadev0-d.space-z.ai/",
    domain: "marlowehart.com",
    description:
      "A sophisticated studio website designed to present architecture, interiors, projects, and creative direction through an editorial visual experience.",
    heroShot: "/projects/marlowe-hero.jpg",
    altShot: "/projects/marlowe-mid.jpg",
  },
  {
    id: "sizzlestack",
    index: "04",
    name: "Sizzle Stack",
    category: "Restaurant & Hospitality",
    filter: "hospitality",
    url: "https://p1d3y8hn52n0-d.space-z.ai/",
    domain: null,
    description:
      "A bold restaurant website designed around food presentation, menu discovery, promotions, and clear ordering actions.",
    heroShot: "/projects/sizzlestack-hero.jpg",
    altShot: "/projects/sizzlestack-mid.jpg",
  },
  {
    id: "vanta",
    index: "05",
    name: "Vanta Motorgroup",
    category: "Luxury Automotive",
    filter: "business",
    url: "https://c1k3y83101a1-d.space-z.ai/",
    domain: null,
    description:
      "A premium automotive website designed to showcase luxury vehicles and create a polished digital experience for prospective customers.",
    heroShot: "/projects/vanta-hero.jpg",
    altShot: "/projects/vanta-mid.jpg",
  },
];

export const PROBLEMS = [
  {
    index: "01",
    title: "Invisible where it matters",
    body: "Customers search online every day, but if your business doesn't show up with a proper website, they find your competitors instead.",
  },
  {
    index: "02",
    title: "Social media doing all the work",
    body: "A social page is rented land. Algorithms change, accounts get restricted, and you still have no real home that belongs to your business.",
  },
  {
    index: "03",
    title: "Outdated or unprofessional presence",
    body: "An old, slow, or poorly designed website quietly tells customers that quality isn't a priority, even when your work says otherwise.",
  },
  {
    index: "04",
    title: "Costs that feel overwhelming",
    body: "Between development quotes and monthly hosting subscriptions, getting online can feel like a bill you'll be paying forever.",
  },
  {
    index: "05",
    title: "Credibility slipping away",
    body: "When potential customers can't find a proper website, they hesitate, and hesitation is where good business quietly gets lost.",
  },
];

export const SOLUTIONS = [
  {
    index: "01",
    title: "Professional First Impressions",
    body: "A polished website that reflects the quality of your business, the kind of first impression that makes visitors stay, scroll, and reach out.",
  },
  {
    index: "02",
    title: "Mobile-Friendly Design",
    body: "A responsive experience built for how customers actually browse, on phones, tablets, and desktops, with every screen considered.",
  },
  {
    index: "03",
    title: "Affordable Website Ownership",
    body: "Eligible websites can use suitable free-hosting platforms, reducing recurring hosting expenses. You pay separately for your custom domain and any optional services you choose.",
  },
  {
    index: "04",
    title: "Built Around Your Business",
    body: "A tailored website that showcases your services, your brand identity, and your customer contact options, never a recycled template bolted onto your business.",
  },
];

export const SERVICES = [
  {
    index: "01",
    name: "Business Website Design",
    body: "A complete online home for your company: services, credibility, and contact paths, all working together.",
  },
  {
    index: "02",
    name: "Landing Page Design",
    body: "A single, focused page built around one goal: turning visitors into enquiries, bookings, or sales.",
  },
  {
    index: "03",
    name: "Portfolio Website Design",
    body: "Show your craft properly. A curated, visual-first presence that lets your work speak for itself.",
  },
  {
    index: "04",
    name: "Small Business Website Development",
    body: "Practical, budget-conscious websites for local businesses and growing teams that need to be taken seriously.",
  },
  {
    index: "05",
    name: "Website Redesign",
    body: "Your site looking tired? A thoughtful rebuild that keeps what works and fixes what costs you customers.",
  },
  {
    index: "06",
    name: "AI-Assisted Website Development",
    body: "Modern AI tooling speeds up drafting, structure, and content, so you launch sooner without cutting corners.",
  },
  {
    index: "07",
    name: "Mobile-Responsive Website Design",
    body: "Layouts designed to adapt beautifully to phones, tablets, and desktops, because most customers browse on one.",
  },
];

export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Tell Us About Your Business",
    body: "Share your business, goals, preferred style, and what your website needs to do. A simple WhatsApp conversation is enough to start.",
  },
  {
    index: "02",
    title: "We Plan & Design",
    body: "EMNEX AI develops a website concept tailored to your brand and objectives: structure, copy flow, and visual direction.",
  },
  {
    index: "03",
    title: "Review & Refine",
    body: "You review the design and share feedback. Agreed revisions are worked through until the site feels right for your business.",
  },
  {
    index: "04",
    title: "Launch Your Website",
    body: "Once approved, your website is deployed on an appropriate hosting solution and your custom domain is connected. You're live.",
  },
];

export const FAQS = [
  {
    q: "Do I have to pay for monthly hosting?",
    a: "On eligible projects, no. EMNEX AI builds on suitable free-hosting platforms, so your website can stay online without recurring hosting fees. You only pay for your custom domain, which can cost less than $11 per year depending on the domain extension and provider. If a project genuinely needs paid hosting or extra services, that's confirmed with you up front, before any work begins.",
  },
  {
    q: "What will I need to pay for?",
    a: "Your custom domain and the one-time design fee for your website. Anything optional, such as premium integrations, paid tools, or ongoing updates, is quoted separately and agreed with you clearly before work starts. No surprise subscriptions, no hidden renewals.",
  },
  {
    q: "Can you design a website for my specific business?",
    a: "Yes. Every EMNEX AI website is built around the business it represents: your services, your brand identity, and the way your customers reach you. Nothing is recycled from a template shelf. Tell me what you're building and the structure, copy flow, and visual direction will be shaped around it.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Always. Most of your customers will find you on a phone, so every layout is designed mobile-first and checked across phones, tablets, and desktops before launch. If it doesn't feel right on a small screen, it isn't finished.",
  },
  {
    q: "How long will it take to build my website?",
    a: "Most projects move from first conversation to live website within a few weeks, depending on scope. A focused landing page is faster; a complete multi-page website takes a little longer. Your timeline is confirmed with you up front, so you always know what to expect.",
  },
  {
    q: "How do I get started?",
    a: "Send a message on WhatsApp or email with a short description of your business and what you need. A simple conversation is enough to define scope, timeline, and a clear agreement, and then we begin.",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
