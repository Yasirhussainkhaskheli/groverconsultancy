import type { PoolClient } from "pg";

const ARTICLES = [
  {
    title: "Navigating Core Banking Modernization in Southeast Asia",
    slug: "core-banking-modernization-southeast-asia",
    category: "System Implementation",
    excerpt:
      "Key lessons from successful core banking transformations across the Philippines and Indonesia — minimizing risk while accelerating the transition to modern, agile infrastructure.",
    daysAgo: 0,
    content: `Core banking modernization is no longer optional for Southeast Asian banks. As neobanks, e-wallets, and embedded finance providers reset customer expectations, traditional banks running 20+ year-old core systems are finding it impossible to launch new products at speed, integrate with fintech ecosystems, or deliver the real-time experiences modern customers demand.

Yet core banking transformation remains one of the highest-risk programmes a bank will ever undertake. Industry data shows that more than 70% of large core banking projects globally run over budget, miss deadlines, or fail to deliver expected business outcomes. The stakes — operational continuity, regulatory compliance, customer trust — are simply too high to get wrong.

Across our engagements with universal and commercial banks in the Philippines and Indonesia, we have observed a consistent pattern: the banks that succeed treat core modernization as a business transformation programme that happens to involve technology, not the other way around. They start with a clear articulation of the customer and product capabilities they need to deliver in five years, then work backwards to the technology architecture required to support them.

A second consistent pattern is the deliberate decoupling of the modernization journey into manageable, value-generating phases. The "big bang" core replacement — once the dominant model — has largely given way to progressive renovation: hollowing out the legacy core by lifting customer, product, and channel layers into modern platforms while the underlying ledger and accounts continue to operate. This approach reduces risk dramatically and allows banks to start delivering customer value within 12 to 18 months rather than waiting three to five years for a single go-live.

Vendor selection is where many programmes go wrong before they begin. The right choice is rarely the platform with the longest feature list. It is the platform whose architecture, deployment model, partner ecosystem, and roadmap most closely match the bank's specific business model, regulatory environment, and operating preferences. For Philippine and Indonesian banks specifically, considerations include compliance with BSP and OJK requirements, support for local payment rails like InstaPay, PESONet, and BI-FAST, and the availability of skilled local implementation resources.

Data migration consistently proves to be the single most underestimated workstream. Decades of accumulated customer and transaction data — often poorly documented, with significant quality issues and edge cases — must be reconciled, cleansed, and migrated into the new platform without loss or corruption. Successful programmes start data quality remediation 12 to 18 months before any planned migration, treating it as a standalone programme with its own governance and resourcing.

Finally, the human dimension of core transformation deserves equal attention to the technology. Branch staff, operations teams, and relationship managers must be retrained on new systems and processes. Risk and compliance teams must validate new controls. Customers must be communicated to and supported through any service changes. Banks that under-invest in change management consistently see slower benefit realization, regardless of how successfully the technology itself is delivered.

Core banking modernization is hard, but it is no longer optional. The banks that approach it with clear strategy, phased delivery, rigorous vendor selection, disciplined data management, and serious change leadership will emerge stronger and better positioned to compete in the next decade of Southeast Asian financial services.`,
  },
  {
    title: "AI-Driven Decisioning in Philippine Banking: Beyond the Hype",
    slug: "ai-driven-decisioning-philippine-banking",
    category: "Digital Transformation",
    excerpt:
      "How forward-thinking Philippine and Indonesian banks are moving beyond generative AI experiments to core systemic implementations that deliver measurable ROI in lending, fraud, and customer service.",
    daysAgo: 4,
    content: `Two years into the generative AI wave, the conversation in Southeast Asian banking is finally maturing. The initial rush to deploy chatbots and proof-of-concept assistants has given way to harder, more important questions: where exactly does AI generate measurable returns, how do we govern it responsibly, and how do we build the data and engineering foundations required to scale it across the bank?

The most consistent ROI we are seeing across our Philippine and Indonesian client engagements comes from three application areas: credit decisioning, financial crime, and operational document processing. Each of these areas shares a common profile: large volumes of repetitive decisions, structured and semi-structured data inputs, and clear ground-truth outcomes that allow models to be trained and continuously improved.

In credit decisioning, AI is delivering particular value in the underserved segments that traditional bureau-based scoring cannot reach. Rural farmers, microenterprise owners, and gig economy workers — the foundation of much of the Philippine and Indonesian economies — typically have thin or non-existent credit files. AI models trained on alternative data signals such as utility payments, mobile usage patterns, e-wallet transactions, and cooperative membership are enabling banks and microfinance institutions to extend credit responsibly to populations that were previously excluded.

Financial crime is the second area where AI is delivering clear ROI. Traditional rules-based transaction monitoring systems generate enormous volumes of false positive alerts — sometimes more than 95% of all alerts raised — consuming compliance team capacity without preventing real financial crime. Machine learning models that score transactions based on behavioural patterns rather than static rules are reducing false positive rates by 50% to 70% in production deployments, freeing investigators to focus on genuinely suspicious activity.

Document processing is the third high-ROI area, and arguably the easiest to start with. Banks process millions of documents per year — KYC documents, loan application packages, trade finance paperwork, regulatory submissions — most of which still require manual review and data entry. Modern intelligent document processing platforms combine OCR, layout understanding, and large language models to extract structured data with accuracy that now meets or exceeds human reviewers, at a fraction of the cost and turnaround time.

What separates banks that capture this value from those that struggle is rarely the underlying AI technology. The technology is increasingly commoditized and accessible. The differentiators are data foundations, governance frameworks, and delivery operating models. Banks that have invested in clean, well-governed customer and transaction data — typically through a modern data lakehouse architecture — can deploy AI use cases in weeks. Banks with fragmented, low-quality data spend years on foundations before they see any AI value at all.

AI governance is where Philippine and Indonesian banks need to move quickly. BSP and OJK have both signalled increasing regulatory focus on responsible AI use in financial services. Banks that proactively establish model risk management, bias testing, explainability frameworks, and human-in-the-loop controls will be well positioned. Banks that deploy AI without these guardrails risk both regulatory action and serious reputational harm if a model behaves unexpectedly in production.

The opportunity for AI in Philippine and Indonesian banking is real and substantial — but capturing it requires moving beyond proof-of-concept thinking. The banks that will lead the next decade are those that treat AI as a core operating capability requiring serious investment in data, talent, governance, and delivery — not as a technology procurement exercise.`,
  },
  {
    title: "Digital Lending Transformation for Microfinance and Rural Banks",
    slug: "digital-lending-microfinance-southeast-asia",
    category: "Sales Enablement",
    excerpt:
      "How Southeast Asian microfinance institutions and rural banks are leveraging digital lending platforms to scale responsibly, lower cost-to-serve, and reach the financially underserved.",
    daysAgo: 8,
    content: `Microfinance institutions and rural banks sit at the front line of financial inclusion across the Philippines and Indonesia. Together they serve tens of millions of customers — small farmers, sari-sari store owners, market vendors, gig workers — for whom access to formal credit is the difference between economic security and vulnerability. Yet the cost of serving these segments through traditional branch and agent-led models has long made profitable, scalable lending difficult.

Digital lending transformation is changing this equation. Modern digital lending platforms — covering origination, decisioning, disbursement, servicing, and collections — are enabling microfinance institutions and rural banks to dramatically reduce the cost of acquiring and serving each borrower, while also opening up access to underserved populations that were previously unreachable through physical channels.

The most impactful starting point for most institutions is digital origination. Replacing paper application forms and manual data entry with mobile-based digital application flows typically reduces processing time from days to minutes, eliminates data quality errors, and allows credit officers to spend their time on relationship building rather than paperwork. For institutions serving geographically dispersed customer bases — common across the Philippine archipelago and Indonesian islands — the productivity gains compound rapidly.

Decisioning is where digital transformation enables a fundamental rethink of the lending model. Traditional microfinance has relied heavily on group lending methodologies and the personal judgement of credit officers — both of which are difficult to scale and inconsistent in quality. Modern decisioning platforms allow institutions to combine traditional credit scoring with alternative data signals such as e-wallet transaction history, utility payments, telco data, and behavioural patterns to make faster, more consistent, and often more accurate credit decisions, particularly for thin-file borrowers.

Disbursement and repayment digitization is the third pillar. Direct-to-wallet or direct-to-bank disbursement eliminates the cost and risk of cash handling, while mobile and e-wallet repayment channels make it dramatically easier for borrowers to stay current on their loans. Institutions that have moved to fully digital disbursement and repayment typically see meaningful improvements in portfolio-at-risk metrics, alongside the obvious operational cost savings.

Collections is often the workstream institutions get to last, but it deserves earlier attention. Modern collections platforms combine automated multi-channel customer contact, behavioural segmentation, and data-driven prioritization to focus collector effort where it will have the greatest impact. For high-volume, low-balance microfinance portfolios in particular, the productivity gains from intelligent collections can be substantial.

A critical implementation consideration for Philippine and Indonesian institutions is regulatory compliance. BSP, BSP Microfinance, and OJK each have specific requirements around customer disclosure, interest rate caps, fair collections practices, and data protection. Digital lending platforms must be configured carefully to ensure compliance with these requirements while still delivering the speed and convenience benefits of digital channels.

Financial inclusion is perhaps the greatest opportunity. Mobile penetration across the Philippines and Indonesia has reached the point where digital-first lending is now technically feasible for the majority of underserved segments. Institutions that combine appropriate digital lending technology with deep local market knowledge and responsible lending practices have the opportunity to dramatically expand both their reach and their impact over the coming decade.

The institutions that will lead the next phase of microfinance and rural banking in Southeast Asia are those that treat digital lending transformation not as a technology project but as a fundamental business model evolution — one that requires equal investment in technology, people, processes, and customer education.`,
  },
];

export async function seedInsights(client: PoolClient): Promise<void> {
  const { rows } = await client.query<{ count: string }>(
    "SELECT COUNT(*)::text AS count FROM insights",
  );
  const count = Number(rows[0]?.count ?? "0");
  if (count > 0) {
    return;
  }

  for (const a of ARTICLES) {
    await client.query(
      `INSERT INTO insights (title, slug, excerpt, content, category, published_at)
       VALUES ($1, $2, $3, $4, $5, NOW() - ($6 || ' days')::interval)
       ON CONFLICT (slug) DO NOTHING`,
      [a.title, a.slug, a.excerpt, a.content, a.category, String(a.daysAgo)],
    );
  }
  console.log(`Seeded ${ARTICLES.length} default insights`);
}
