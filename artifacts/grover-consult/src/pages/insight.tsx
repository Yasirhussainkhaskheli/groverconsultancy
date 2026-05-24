import { Helmet } from "react-helmet-async";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { useGetInsights } from "@workspace/api-client-react";
import { ArrowLeft, ArrowRight, Calendar, BookOpen, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Skeleton } from "@/components/ui/skeleton";
import NotFound from "@/pages/not-found";

export default function InsightPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: insights, isLoading } = useGetInsights();

  const article = insights?.find((i) => i.slug === slug);
  const related = insights?.filter((i) => i.slug !== slug).slice(0, 3) ?? [];

  const readingTime = article
    ? Math.max(1, Math.ceil(article.content.split(/\s+/).length / 200))
    : 0;

  if (!isLoading && insights && !article) {
    return <NotFound />;
  }

  return (
    <>
      {article && (
        <Helmet>
          <title>{article.title} | Grover Consult Insights</title>
          <meta name="description" content={article.excerpt} />
          <link rel="canonical" href={`https://groverconsult.com/insights/${article.slug}`} />
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={article.publishedAt} />
        </Helmet>
      )}

      <Header />

      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground py-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white truncate max-w-[200px]">
              {isLoading ? "Loading…" : article?.title}
            </span>
          </div>

          {isLoading ? (
            <div className="space-y-6 pb-24">
              <Skeleton className="h-5 w-32 bg-white/10" />
              <Skeleton className="h-12 w-full bg-white/10" />
              <Skeleton className="h-12 w-3/4 bg-white/10" />
              <Skeleton className="h-5 w-48 bg-white/10 mt-4" />
              <div className="space-y-4 mt-10">
                {Array(6).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-5 w-full bg-white/10" />
                ))}
              </div>
            </div>
          ) : article ? (
            <>
              {/* Article Header */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pb-10 border-b border-white/10"
              >
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    <BookOpen className="w-3.5 h-3.5" /> {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "long", day: "numeric", year: "numeric",
                    })}
                  </span>
                  <span className="text-sm text-muted-foreground">· {readingTime} min read</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
                  {article.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </motion.header>

              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="py-12"
              >
                <div className="prose prose-invert prose-lg max-w-none">
                  {article.content.split(/\n\n+/).map((paragraph, i) => (
                    <p key={i} className="text-foreground/90 leading-relaxed mb-6 text-lg">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <div className="bg-card border border-white/10 rounded-2xl p-8 mb-16 text-center">
                <h3 className="text-2xl font-display font-bold mb-3">Ready to Transform Your Organisation?</h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Talk to a Grover Consult specialist about how these insights apply to your bank's digital transformation journey.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Back link */}
              <div className="pb-8">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to all Insights
                </Link>
              </div>

              {/* Related Articles */}
              {related.length > 0 && (
                <section className="border-t border-white/10 py-16">
                  <h2 className="text-2xl font-display font-bold mb-8">More Insights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/insights/${r.slug}`}
                        className="group bg-card border border-white/5 hover:border-primary/30 rounded-xl p-5 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-200 block"
                      >
                        <span className="text-xs text-primary font-semibold">{r.category}</span>
                        <h3 className="font-display font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {r.title}
                        </h3>
                        <span className="text-xs text-muted-foreground mt-auto flex items-center gap-1">
                          Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : null}
        </div>
      </main>

      <Footer />
    </>
  );
}
