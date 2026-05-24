export type Insight = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string | null;
  publishedAt: string;
};

export const insightsData: Insight[] = [
  {
    id: 1,
    title: "The Future of Core Banking: Modernizing Legacy Systems in BFSI",
    slug: "future-core-banking-modernizing-legacy-systems",
    excerpt:
      "Banks across the ASEAN region face the challenge of aging core systems. We explore the strategic path to modernisation without disruption.",
    content:
      "Legacy core banking systems are increasingly becoming a bottleneck for innovation. Financial institutions across the Philippines and ASEAN region are grappling with how to modernise without risking operational continuity. At Grover Consult, we have guided numerous institutions through this transformation journey, leveraging platforms like TCS BaNCS and Arttha to deliver phased, risk-managed migrations that unlock digital capabilities while preserving stability.",
    category: "Digital Transformation",
    imageUrl: null,
    publishedAt: "2025-11-15T00:00:00.000Z",
  },
  {
    id: 2,
    title: "AI-Driven Sales Enablement: Turning Data into Revenue",
    slug: "ai-driven-sales-enablement-data-to-revenue",
    excerpt:
      "How AI-powered insights and agentic systems are revolutionising B2B sales cycles in financial services.",
    content:
      "The traditional B2B sales cycle in banking and fintech is long, complex, and relationship-driven. AI is changing that. By leveraging platforms like IntentAI and intelligent CRM tools, our clients are identifying high-intent prospects earlier, personalising outreach at scale, and closing deals faster. This insight explores how sales enablement powered by data and AI can transform your revenue pipeline.",
    category: "Sales Enablement",
    imageUrl: null,
    publishedAt: "2025-12-02T00:00:00.000Z",
  },
  {
    id: 3,
    title: "Zero-Failure Delivery: Why PMO Excellence Determines Project Outcomes",
    slug: "zero-failure-delivery-pmo-excellence",
    excerpt:
      "A strong Project Management Office is the backbone of successful digital transformation. Here is what best-in-class PMO looks like.",
    content:
      "Many digital transformation initiatives fail not because of bad technology choices, but because of poor execution governance. Through our joint delivery capability with CAS Total Solutions, we have built a PMO model that prioritises outcome ownership, deep diagnostics, and agile relationship management. Our 100% success rate on complex, multi-layered transformation projects is a testament to the power of disciplined delivery frameworks.",
    category: "Delivery Excellence",
    imageUrl: null,
    publishedAt: "2026-01-20T00:00:00.000Z",
  },
  {
    id: 4,
    title: "Cybersecurity in the Age of Open Banking: Protecting Your Digital Perimeter",
    slug: "cybersecurity-open-banking-digital-perimeter",
    excerpt:
      "As financial institutions open their APIs and embrace ecosystem models, the attack surface grows. A proactive security posture is non-negotiable.",
    content:
      "Open banking and API-first architectures have unlocked enormous value for financial institutions, but they have also expanded the threat landscape significantly. At Grover Consult, we work with best-in-class cybersecurity partners to help our clients build resilient security postures that protect their digital assets, customer data, and regulatory standing without slowing down innovation.",
    category: "Cybersecurity",
    imageUrl: null,
    publishedAt: "2026-02-10T00:00:00.000Z",
  },
  {
    id: 5,
    title: "Identity Verification at Scale: Reducing Fraud While Improving Customer Experience",
    slug: "identity-verification-scale-reducing-fraud",
    excerpt:
      "KYC need not be a friction-filled nightmare. Modern identity verification solutions verify users in under 30 seconds while stopping fraudsters at the gate.",
    content:
      "Customer onboarding is the first impression your institution makes. Legacy KYC processes that take days are simply not acceptable in a world where digital-native competitors onboard customers in minutes. Through our partnership with HyperVerge, we help banks and fintechs deploy AI-powered identity verification that achieves high straight-through processing rates, reduces fraud through liveness and de-duplication checks, and maintains full regulatory compliance across markets.",
    category: "Digital Transformation",
    imageUrl: null,
    publishedAt: "2026-03-05T00:00:00.000Z",
  },
];

