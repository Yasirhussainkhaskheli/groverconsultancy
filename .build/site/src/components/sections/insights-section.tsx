import { motion } from "framer-motion";
import { Link } from "wouter";
import { useGetInsights } from "@workspace/api-client-react";
import type { Insight } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { formatShortDate } from "@/lib/date";

type InsightPreview = Pick<
  Insight,
  "id" | "title" | "slug" | "excerpt" | "category" | "publishedAt"
>;

const fallbackInsights: InsightPreview[] = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Decision Making",
    category: "Digital Transformation",
    excerpt:
      "How forward-thinking executives are moving beyond generative AI experiments to core systemic implementations that drive real ROI.",
    publishedAt: "2026-03-14T00:00:00.000Z",
    slug: "future-of-ai",
  },
  {
    id: 2,
    title: "Optimizing Sales Enablement in a Digital-First World",
    category: "Sales Enablement",
    excerpt:
      "Strategies for aligning marketing, technology, and sales teams to accelerate deal velocity and improve win rates.",
    publishedAt: "2026-03-09T00:00:00.000Z",
    slug: "sales-enablement-digital",
  },
  {
    id: 3,
    title: "Navigating Core Banking Modernization",
    category: "System Implementation",
    excerpt:
      "Key lessons from successful core banking transformations. Minimizing risk while accelerating the transition to agile infrastructure.",
    publishedAt: "2026-03-02T00:00:00.000Z",
    slug: "core-banking-modernization",
  },
];

export function InsightsSection() {
  const { data: insights, isLoading } = useGetInsights();

  // If the API returns empty or fails gracefully, we'll show mock data just to demonstrate the design
  // The app will function normally when API is wired to a DB
  const displayData: InsightPreview[] =
    insights && insights.length > 0 ? insights.slice(0, 3) : fallbackInsights;

  return (
    <section id="insights" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Thought Leadership</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Latest <span className="text-primary">Insights</span></h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/insights"
              className="group flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="bg-card border-white/5 overflow-hidden">
                <div className="h-48 bg-muted/20 animate-pulse" />
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="h-6 w-1/3 bg-white/10" />
                  <Skeleton className="h-8 w-full bg-white/10" />
                  <Skeleton className="h-8 w-4/5 bg-white/10" />
                  <Skeleton className="h-20 w-full bg-white/10 mt-4" />
                </CardContent>
              </Card>
            ))
          ) : (
            displayData.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <Card className="h-full bg-card border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl shadow-black/20 hover-elevate">
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        <BookOpen className="w-3 h-3" /> {insight.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatShortDate(insight.publishedAt)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {insight.excerpt}
                    </p>
                    
                    <Link href={`/insights/${insight.slug}`} className="mt-auto flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors w-fit">
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
