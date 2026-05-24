import { ChevronRight, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <footer className="bg-card pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href={basePath} className="flex items-center gap-1.5 mb-6 outline-none">
              <span className="font-display font-bold tracking-widest text-xl text-white">
                GROVER
              </span>
              <span className="font-display font-bold tracking-widest text-xl text-white">
                CONSULT
              </span>
              <ChevronRight className="w-5 h-5 text-primary" strokeWidth={3} />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Southeast Asia's specialist BFSI consulting firm — digital transformation, core banking implementation, sales enablement, and system integration for banks in the Philippines and Indonesia.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/grover-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Grover Consult on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:inquiries@groverconsult.com"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email Grover Consult"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <a href={`${basePath}services/digital-transformation-consulting`} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-primary" /> Digital Transformation Consulting
                </a>
              </li>
              <li>
                <a href={`${basePath}services/core-banking-implementation`} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-primary" /> Core Banking Implementation
                </a>
              </li>
              <li>
                <a href={`${basePath}services/sales-enablement-consulting`} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-primary" /> Sales Enablement Consulting
                </a>
              </li>
              <li>
                <a href={`${basePath}services/system-integration-implementation`} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-primary" /> System Integration & Implementation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Markets</h3>
            <ul className="space-y-4">
              <li>
                <a href={`${basePath}philippines`} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-primary" /> Philippines
                </a>
              </li>
              <li>
                <a href={`${basePath}indonesia`} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-primary" /> Indonesia
                </a>
              </li>
              <li>
                <a href="/#partners" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-primary" /> Solution Partners
                </a>
              </li>
              <li>
                <a href="/#clients" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-primary" /> Clients
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Philippines &amp; Indonesia<br />Operating across Southeast Asia</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:inquiries@groverconsult.com" className="hover:text-primary transition-colors">
                  inquiries@groverconsult.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Grover Consult. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href={`${basePath}privacy`} className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href={`${basePath}terms`} className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
