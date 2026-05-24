"use client";

import { Helmet } from "react-helmet-async";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Star } from "lucide-react";
import { servicePages, SITE_NAME } from "@/lib/seo-data";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicePages.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className="text-4xl font-display font-bold">Service Not Found</h1>
        <p className="text-muted-foreground">That service page doesn't exist.</p>
        <Link href="/" className="text-primary hover:underline">← Back to home</Link>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": "https://groverconsult.com",
    },
    "areaServed": ["Philippines", "Indonesia", "Southeast Asia"],
  };

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://groverconsult.com/services/${service.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
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
              <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{service.title}</span>
            </div>

            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6 leading-tight max-w-4xl">{service.headline}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{service.intro}</p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                href="/#contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Speak with an Expert
              </Link>
              <Link
                href="/#services"
                className="border border-white/20 hover:border-primary/50 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl font-display font-bold mb-10">Why Choose Grover Consult</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <Star className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 border-b border-white/5 bg-card/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">What We Deliver</h2>
                <p className="text-muted-foreground mb-8">Our engagements are structured to deliver tangible, measurable outcomes — not just advisory documents.</p>
                <Link href="/#contact" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
                  Discuss Your Requirements
                </Link>
              </div>
              <ul className="space-y-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs.length > 0 && (
          <section className="py-20 border-b border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <h2 className="text-2xl font-display font-bold mb-10 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {service.faqs.map((faq, i) => (
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
            <h2 className="text-3xl font-display font-bold mb-4">Start Your {service.title} Journey</h2>
            <p className="text-muted-foreground mb-8">
              Reach out to discuss your specific situation and how Grover Consult can help your institution achieve its transformation goals.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Request a Consultation
            </Link>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 border-t border-white/5 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-xl font-display font-bold mb-8">Other Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {servicePages
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="bg-card border border-white/5 hover:border-primary/30 rounded-xl p-5 transition-all group"
                  >
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{s.intro.substring(0, 100)}…</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
