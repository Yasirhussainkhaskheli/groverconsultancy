"use client";

import { motion } from "framer-motion";
import { ChevronDown, BarChart3, Database, ShieldCheck, Zap, Users, Brain, Target, Globe, Lightbulb, Workflow, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { InsightsSection } from "@/components/sections/insights-section";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

type Partner = {
  name: string;
  logo: string;
  slug: string;
  role: string;
  scale?: number;
};

type Alliance = {
  name: string;
  logo?: string;
};

type TeamMember = {
  name: string;
  title: string;
  photo?: string;
  pos?: string;
};

type ClientLogo = {
  name: string;
  logo: string;
  scale?: number;
};

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 md:pb-10 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-background">
        <img 
          src="./assets/images/hero-bg.png" 
          alt="Abstract corporate background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">Strategic Consulting Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.1] mb-8">
              Driving Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#E0C56B] to-primary">
                Transformation
              </span> Forward
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Grover Consult is a premier boutique firm specializing in digital transformation, 
              sales enablement, and end-to-end system delivery for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base shadow-primary/25 shadow-xl hover-elevate hover:-translate-y-1 transition-transform" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 hover-elevate hover:-translate-y-1 transition-transform" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile to avoid overlapping buttons */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Stats Section Component
function StatsSection() {
  const stats = [
    { label: "Combined Experience", value: "200+ Yrs" },
    { label: "Delivery Legacy", value: "35+ Yrs" },
    { label: "Project Success Rate", value: "100%" },
    { label: "Industry Focus", value: "BFSI" },
  ];

  return (
    <section className="border-y border-white/5 bg-card/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 divide-x divide-white/5 border-x border-white/5">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 sm:p-8 text-center"
            >
              <div className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-[10px] sm:text-sm text-primary font-medium uppercase tracking-wider leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection() {
  const services = [
    { icon: Workflow, title: "Digital Transformation", desc: "Holistic strategy and execution to digitize core operations and enhance customer experiences." },
    { icon: Target, title: "Sales Enablement", desc: "Data-driven strategies and CRM implementations to accelerate lead generation and revenue." },
    { icon: Zap, title: "System Implementation", desc: "End-to-end delivery of complex enterprise systems with a focus on risk mitigation." },
    { icon: Brain, title: "AI & Automation", desc: "Leveraging native AI platforms to automate cognitive tasks and operational workflows." },
    { icon: Cloud, title: "Cloud & Data Engineering", desc: "Scalable data architectures and cloud migrations for resilient enterprise infrastructure." },
    { icon: ShieldCheck, title: "Cybersecurity & Compliance", desc: "Robust security frameworks ensuring regulatory compliance and data protection." },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Capabilities</span>
            <span className="w-8 h-1 bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Enterprise <span className="text-primary">Services</span></h2>
          <p className="text-muted-foreground text-lg">
            We bridge the gap between strategic vision and operational reality through our comprehensive suite of consulting and delivery services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-white/5 hover:border-primary/50 transition-all duration-300 group hover-elevate">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Us Section
function WhyUsSection() {
  const points = [
    { title: "Strategic Advisory", icon: Lightbulb, desc: "C-level guidance grounded in decades of industry experience, turning complex challenges into clear actionable roadmaps." },
    { title: "End-to-End Delivery", icon: Database, desc: "We don't just advise; we execute. Our delivery framework guarantees 100% project success from inception to deployment." },
    { title: "Market Access", icon: Globe, desc: "Leveraging our extensive network to unlock new markets, partnerships, and revenue streams for our clients globally." },
  ];

  return (
    <section className="py-24 bg-card/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[100px] -z-10 rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why <br/><span className="text-primary">Grover Consult</span></h2>
            <p className="text-muted-foreground text-lg mb-8">
              We stand apart by offering a unique blend of strategic foresight and rigorous tactical execution, ensuring your investments yield tangible outcomes.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-elevate" asChild>
              <a href="#team">Learn More About Us</a>
            </Button>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/80 border-t-2 border-primary p-8 rounded-lg shadow-lg"
              >
                <point.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-display font-bold text-lg mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Partners Ecosystem
function PartnersSection() {
  const partners: Partner[] = [
    { name: "HyperVerge",   logo: "hyperverge.png",      slug: "hyperverge",    role: "Identity Verification & Digital Onboarding Solutions" },
    { name: "INT:NT",        logo: "int_ai.png",           slug: "intentai",      role: "AI Native Platform – Building Agentic Systems" },
    { name: "Posidex",       logo: "posidex.webp",         slug: "posidex",       role: "PII Data Vault" },
    { name: "TCS BaNCS",     logo: "tcs-bancs.png",        slug: "tcs-bancs",     role: "Core Banking and Payments" },
    { name: "PureSoftware",  logo: "puresoftware.svg",     slug: "puresoftware",  role: "Lending & Wallet Solutions" },
    { name: "Perforce",      logo: "perforce.png",         slug: "perforce",      role: "DevOps Solutions" },
    { name: "Kyriba",        logo: "kyriba.svg",           slug: "kyriba",        role: "Treasury & Liquidity Management" },
    { name: "Moneythor",     logo: "moneythor.svg",        slug: "moneythor",     role: "Personalize Experiences" },
    { name: "Finartis",      logo: "finartis.svg",         slug: "finartis",      role: "Wealth Solutions" },
    { name: "Apix",          logo: "apix.png",             slug: "apix",          role: "Innovation Ecosystem for Marketplace and Sandbox" },
    { name: "Yappes",        logo: "yappes.png",           slug: "yappes",        role: "API Management System" },
    { name: "Midships",      logo: "midships.png",         slug: "midships",      role: "Cybersecurity Defense" },
    { name: "Flagright",     logo: "flagright.svg",        slug: "flagright",     role: "Financial Crime" },
    { name: "Zafin",         logo: "zafin.png",            slug: "zafin",         role: "Banking Monetization" },
    { name: "Seclore",       logo: "seclore.png",          slug: "seclore",       role: "Data Security" },
    { name: "Geniusto",      logo: "geniusto.png",         slug: "geniusto",      role: "AI-driven Automation & Intelligence Platform" },
    { name: "Expleo",        logo: "expleo.png",           slug: "expleo",        role: "Engineering & Digital Transformation" },
    { name: "Koreminds",     logo: "koreminds.png",        slug: "koreminds",     role: "AI & Intelligent Automation" },
    { name: "CBTW",          logo: "cbtw.png",             slug: "cbtw",          role: "Global Tech Consulting" },
    { name: "FinMechanics",  logo: "finmechanics.png",     slug: "finmechanics",  role: "Capital Markets & Risk Solutions" },
  ];

  const alliances: Alliance[] = [
    { name: "Microsoft",           logo: "microsoft.png" },
    { name: "SGV Ernst & Young",   logo: "sgv.png" },
    { name: "Amazon Web Services", logo: "aws.webp" },
    { name: "IBM",                 logo: "ibm.svg" },
  ];

  return (
    <section id="partners" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-1 bg-primary rounded-full" />
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Network</span>
            <span className="w-8 h-1 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Solution <span className="text-primary">Partners</span></h2>
          <p className="text-muted-foreground text-lg">
            We partner exclusively with market-leading technology providers — rigorously evaluated for product excellence and ethical management.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <Link
                href={`/solutions/${partner.slug}`}
                className="bg-card border border-white/5 rounded-xl p-5 flex flex-col items-center justify-start gap-3 hover:border-primary/40 hover:bg-white/5 transition-all duration-200 group block"
              >
                <div className="w-full h-14 bg-white rounded-md p-1.5 overflow-hidden">
                  <img
                    src={`./assets/logos/partners/${partner.logo}`}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                    style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-white group-hover:text-primary transition-colors leading-tight">{partner.name}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{partner.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-16">
          <h3 className="text-center font-display font-bold text-2xl mb-10">Strategic Alliances</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
            {alliances.map((alliance, index) => (
              alliance.logo ? (
                <div key={index} className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-md p-1.5 h-10 w-32">
                    <img
                      src={`./assets/logos/partners/${alliance.logo}`}
                      alt={`${alliance.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div key={index} className="text-xl md:text-2xl font-bold font-display tracking-tight text-white/70 hover:text-white transition-colors cursor-default opacity-70 hover:opacity-100">
                  {alliance.name}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const team: TeamMember[] = [
    { name: "Krishan Grover",    title: "Chairman",                               photo: "krishan-grover.jpg" },
    { name: "Subir Lohani",      title: "Chief Strategy Officer",                 photo: "subir-lohani.jpg" },
    { name: "Joey Mamon",        title: "Solution Consultant",                    photo: "joey-mamon.jpg" },
    { name: "Andriana Sihono",   title: "Head PMO and Customer Success Manager",  photo: "andriana-sihono.jpg" },
    { name: "Paul Weatherfield", title: "Senior Advisor",                         photo: "paul-weatherfield.jpg" },
    { name: "Ina Nobuta",        title: "Solution Consultant",                    photo: "ina-nobuta.jpg" },
    { name: "Stefano Perera",    title: "Solution Consultant" },
  ];

  const getInitials = (name: string) =>
    name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <section id="team" className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our <span className="text-primary">Leadership</span></h2>
          <p className="text-muted-foreground text-lg">
            A seasoned team of industry veterans bringing diverse expertise from global consulting firms and enterprise technology companies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-primary/30 transition-colors group"
            >
              <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform">
                {member.photo ? (
                  <img
                    src={`./assets/images/team/${member.photo}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.pos ?? "center" }}
                  />
                ) : (
                  <div className="w-full h-full bg-primary flex items-center justify-center font-display font-bold text-2xl text-primary-foreground">
                    {getInitials(member.name)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-bold text-base text-white group-hover:text-primary transition-colors leading-snug">{member.name}</h3>
                <p className="text-muted-foreground text-xs mt-1 leading-snug">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Clients Section
function ClientsSection() {
  const philippines: ClientLogo[] = [
    { name: "BDO",                 logo: "bdo.png" },
    { name: "BPI",                 logo: "bpi.webp" },
    { name: "RCBC",                logo: "rcbc.png" },
    { name: "Security Bank",       logo: "security_bank.jpg" },
    { name: "PNB",                 logo: "pnb.png" },
    { name: "Landbank",            logo: "landbank.png" },
    { name: "DBP",                 logo: "dbp.png" },
    { name: "UnionBank",           logo: "unionbank.png" },
    { name: "City Savings",        logo: "city_savings_bank.png" },
    { name: "China Bank",          logo: "chinabank.svg" },
    { name: "Phil. Business Bank", logo: "philippines_business_bank.png" },
    { name: "Phil. Veterans Bank", logo: "philippine_veterans_bank.jpeg",        scale: 1.4 },
    { name: "Metrobank",           logo: "metrobank.png" },
    { name: "Maya",                logo: "maya_bank.png" },
    { name: "PayMongo",            logo: "paymongo.png" },
    { name: "Lulu Money",          logo: "lulu_money.png" },
    { name: "EastWest Bank",       logo: "eastwest_bank.png" },
  ];

  const indonesia: ClientLogo[] = [
    { name: "Mandiri",             logo: "mandiri.png" },
    { name: "BRI",                 logo: "bri.png" },
    { name: "Sumitomo Mitsui",     logo: "smbc_indonesia.png" },
    { name: "CIMB Niaga",          logo: "cimb_niaga.png" },
    { name: "Panin Bank",          logo: "panin_bank.png" },
    { name: "Danamon",             logo: "danamon.png" },
    { name: "Standard Chartered",  logo: "standard_chartered_indonesia.png" },
  ];

  function LogoCard({ name, logo, scale }: { name: string; logo: string; scale?: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-primary/30 rounded-xl p-4 transition-all duration-200 group"
      >
        <div className="w-full h-11 bg-white rounded-md p-1.5 overflow-hidden">
          <img
            src={`./assets/logos/banks/${logo}`}
            alt={`${name} logo`}
            className="w-full h-full object-contain"
            style={scale ? { transform: `scale(${scale})` } : undefined}
          />
        </div>
        <span className="text-xs text-muted-foreground group-hover:text-white font-medium text-center leading-tight transition-colors">
          {name}
        </span>
      </motion.div>
    );
  }

  return (
    <section id="clients" className="py-24 border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-1 bg-primary rounded-full" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Clients</span>
            <span className="w-8 h-1 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Trusted by Leading <span className="text-primary">Financial Institutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We have proudly partnered with and supported some of the most prominent banks and financial institutions across the Philippines and Indonesia.
          </p>
        </div>

        {/* Philippines */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl">🇵🇭</span>
            <h3 className="text-xl font-display font-semibold text-white">Philippines</h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {philippines.map((client) => (
              <LogoCard key={client.logo} name={client.name} logo={client.logo} scale={client.scale} />
            ))}
          </div>
        </div>

        {/* Indonesia */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl">🇮🇩</span>
            <h3 className="text-xl font-display font-semibold text-white">Indonesia</h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {indonesia.map((client) => (
              <LogoCard key={client.logo} name={client.name} logo={client.logo} scale={client.scale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Grover Consult | BFSI Digital Transformation Consulting Philippines &amp; Indonesia</title>
        <meta name="description" content="Grover Consult is Southeast Asia's specialist BFSI consulting firm — digital transformation, core banking implementation, sales enablement, and system integration for banks in the Philippines and Indonesia." />
      </Helmet>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <WhyUsSection />
          <PartnersSection />
          <ClientsSection />
          <TeamSection />
          <InsightsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
