import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { countryPages, solutionPages, servicePages, SITE_NAME } from "@/lib/seo-data";

export default function CountryPage() {
  const [location] = useLocation();
  const slug = location.replace(/^\//, "");
  const page = countryPages.find((c) => c.slug === slug);

  if (!page) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className="text-4xl font-display font-bold">Page Not Found</h1>
        <Link href="/" className="text-primary hover:underline">← Back to home</Link>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${SITE_NAME} — ${page.country}`,
    "description": page.metaDescription,
    "provider": { "@type": "Organization", "name": SITE_NAME, "url": "https://groverconsult.com" },
    "areaServed": page.country,
  };

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <link rel="canonical" href={`https://groverconsult.com/${page.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/95 border-b border-white/10 backdrop-blur">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="font-display font-bold text-lg tracking-tight flex items-center gap-2 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              GROVER CONSULT
            </Link>
            <Link href="/#contact" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm px-5 py-2 rounded-lg transition-colors">
              Get Started
            </Link>
          </div>
        </header>

        <section className="py-20 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{page.country}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{page.flag}</span>
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Country Focus</span>
                <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">{page.headline}</h1>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">{page.intro}</p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">{page.context}</p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <Link href="/#contact" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg transition-colors">
                Talk to Our {page.country} Team
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Key Projects in {page.country}</h2>
                <ul className="space-y-3">
                  {page.keyProjects.map((proj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Regulatory Expertise</h2>
                <div className="bg-card border border-white/5 rounded-xl p-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">{page.regulatoryContext}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl font-display font-bold mb-10">Our Services in {page.country}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {servicePages.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-card border border-white/5 hover:border-primary/30 rounded-xl p-5 transition-all group"
                >
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.intro.substring(0, 120)}…</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-white/5 bg-card/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl font-display font-bold mb-10">Solution Partners Serving {page.country}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {solutionPages.map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 rounded-xl p-3 transition-all group"
                >
                  <div className="w-full h-8 bg-white rounded p-0.5 overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}logos/partners/${s.logo}`}
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

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Start Your Transformation in {page.country}</h2>
            <p className="text-muted-foreground mb-8">
              Contact our {page.country} team to discuss how Grover Consult can accelerate your bank's digital transformation programme.
            </p>
            <Link href="/#contact" className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
              Request a Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
