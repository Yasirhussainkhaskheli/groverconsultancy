"use client";

import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useGetInsights } from "@workspace/api-client-react";
import type { Insight } from "@workspace/api-client-react";
import { ArrowRight, Calendar, BookOpen, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { formatShortDate } from "@/lib/date";

export default function InsightsPage() {
  const { data: insights, isLoading } = useGetInsights();

  return (
    <>
      <Helmet>
        <title>Insights & Thought Leadership | Grover Consult</title>
        <meta name="description" content="Expert perspectives on BFSI digital transformation, core banking modernisation, sales enablement, and fintech implementation from Grover Consult." />
        <link rel="canonical" href="https://groverconsult.com/insights" />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-20">
        {/* Header */}
        <section className="py-16 border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Insights</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-primary rounded-full" />
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Thought Leadership</span>
              <span className="w-8 h-1 bg-primary rounded-full" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Latest <span className="text-primary">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              Expert perspectives on BFSI digital transformation, core banking modernisation, sales enablement, and technology implementation across Southeast Asia.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="bg-card border border-white/5 rounded-xl p-6 space-y-4">
                    <Skeleton className="h-5 w-1/3 bg-white/10" />
                    <Skeleton className="h-7 w-full bg-white/10" />
                    <Skeleton className="h-7 w-4/5 bg-white/10" />
                    <Skeleton className="h-20 w-full bg-white/10" />
                    <Skeleton className="h-5 w-1/4 bg-white/10" />
                  </div>
                ))}
              </div>
            ) : insights && insights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insights.map((insight: Insight, index: number) => (
                  <motion.article
                    key={insight.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group h-full"
                  >
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="bg-card border border-white/5 hover:border-primary/30 rounded-xl p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl shadow-black/20 transition-all duration-300 block"
                    >
                      <div className="flex items-center gap-3 mb-5 flex-wrap">
                        <span className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          <BookOpen className="w-3 h-3" /> {insight.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {formatShortDate(insight.publishedAt)}
                        </span>
                      </div>
                      <h2 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 flex-grow-0">
                        {insight.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow line-clamp-3">
                        {insight.excerpt}
                      </p>
                      <span className="mt-auto flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 text-muted-foreground">
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">No articles published yet. Check back soon.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
