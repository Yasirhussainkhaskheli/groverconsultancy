"use client";

import { Helmet } from "react-helmet-async";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { solutionPages, SITE_NAME } from "@/lib/seo-data";

export default function SolutionPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutionPages.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className="text-4xl font-display font-bold">Solution Not Found</h1>
        <p className="text-muted-foreground">That partner solution page doesn't exist.</p>
        <Link href="/" className="text-primary hover:underline">← Back to home</Link>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": solution.headline,
    "description": solution.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": "https://groverconsult.com",
    },
    "areaServed": ["Philippines", "Indonesia", "Southeast Asia"],
    "serviceType": solution.category,
  };

  return (
    <>
      <Helmet>
        <title>{solution.metaTitle}</title>
        <meta name="description" content={solution.metaDescription} />
        <meta property="og:title" content={solution.metaTitle} />
        <meta property="og:description" content={solution.metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://groverconsult.com/solutions/${solution.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Nav bar */}
        <header className="sticky top-0 z-50 bg-background/95 border-b border-white/10 backdrop-blur">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="font-display font-bold text-lg tracking-tight flex items-center gap-2 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              GROVER CONSULT
            </Link>
            <Link
              href="/#contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm px-5 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-20 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/#partners" className="hover:text-primary transition-colors">Solutions</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{solution.partnerName}</span>
            </div>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-14 flex-shrink-0 rounded-lg bg-white p-1.5 overflow-hidden">
                <img
                  src={`./assets/logos/partners/${solution.logo}`}
                  alt={`${solution.partnerName} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">{solution.category}</span>
                <h1 className="text-3xl md:text-5xl font-display font-bold mt-1 leading-tight">{solution.headline}</h1>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{solution.intro}</p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                href="/#contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Talk to a Specialist
              </Link>
              <Link
                href="/#partners"
                className="border border-white/20 hover:border-primary/50 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                All Solution Partners
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities + Use Cases */}
        <section className="py-20 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-display font-bold mb-6">Key Capabilities</h2>
                <ul className="space-y-3">
                  {solution.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h2 className="text-2xl font-display font-bold mb-6">Common Use Cases</h2>
                <ul className="space-y-3">
                  {solution.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{uc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4">Industries Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((ind, i) => (
                      <span key={i} className="bg-white/5 border border-white/10 text-sm text-muted-foreground px-3 py-1 rounded-full">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {solution.faqs.length > 0 && (
          <section className="py-20 border-b border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <h2 className="text-2xl font-display font-bold mb-10 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {solution.faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card border border-white/5 rounded-xl p-6"
                  >
                    <h3 className="font-semibold text-white mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Implement {solution.partnerName}?</h2>
            <p className="text-muted-foreground mb-8">
              Contact Grover Consult for a no-obligation conversation about how {solution.partnerName} can address your institution's specific needs.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Request a Consultation
            </Link>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-16 border-t border-white/5 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-xl font-display font-bold mb-8">Explore Other Solution Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {solutionPages
                .filter((s) => s.slug !== solution.slug)
                .slice(0, 8)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/solutions/${s.slug}`}
                    className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 rounded-xl p-4 transition-all duration-200 group"
                  >
                    <div className="w-full h-8 bg-white rounded p-0.5 overflow-hidden">
                      <img
                        src={`./assets/logos/partners/${s.logo}`}
                        alt={s.partnerName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-white text-center transition-colors">{s.partnerName}</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
