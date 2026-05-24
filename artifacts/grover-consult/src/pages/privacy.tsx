import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Grover Consult</title>
        <meta name="description" content="Grover Consult's privacy policy — how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://groverconsult.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/95 border-b border-white/10 backdrop-blur">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="font-display font-bold text-lg tracking-tight flex items-center gap-2 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              GROVER CONSULT
            </Link>
            <Link href="/#contact" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm px-5 py-2 rounded-lg transition-colors">
              Get in Touch
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: March 2026</p>

          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">1. Who We Are</h2>
              <p>Grover Consult ("we", "our", or "us") is a specialist BFSI digital transformation consulting firm operating in the Philippines, Indonesia, and Southeast Asia. Our registered contact email is <a href="mailto:inquiries@groverconsult.com" className="text-primary hover:underline">inquiries@groverconsult.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Name, job title, and company name</li>
                <li>Business email address and phone number</li>
                <li>Details of the enquiry or project you submit through our contact form</li>
                <li>Communication preferences</li>
              </ul>
              <p className="mt-4">We do not collect sensitive personal data (e.g., financial account numbers, government ID numbers) through this website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your enquiries and provide consulting services</li>
                <li>Send you relevant thought leadership content and service updates (only where you have opted in)</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">4. Legal Basis for Processing</h2>
              <p>We process your personal data on the following legal bases:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-white">Legitimate interests</strong> — responding to business enquiries and managing client relationships</li>
                <li><strong className="text-white">Consent</strong> — for marketing communications, where separately obtained</li>
                <li><strong className="text-white">Legal obligation</strong> — where required by applicable law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">5. Data Sharing</h2>
              <p>We do not sell or rent your personal information to third parties. We may share data with:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Trusted service providers who assist in operating our website and business (under confidentiality obligations)</li>
                <li>Regulators, law enforcement, or courts where required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">6. Data Retention</h2>
              <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Business contact information is typically retained for up to five years after the conclusion of a business relationship.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:inquiries@groverconsult.com" className="text-primary hover:underline">inquiries@groverconsult.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">8. Cookies</h2>
              <p>Our website uses essential cookies required for the website to function. We do not use third-party advertising or tracking cookies. You may disable cookies through your browser settings, though this may affect some website functionality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Material changes will be indicated by an updated "Last updated" date at the top of this page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">10. Contact Us</h2>
              <p>For any privacy-related questions or to exercise your rights, please contact us at:</p>
              <p className="mt-3"><a href="mailto:inquiries@groverconsult.com" className="text-primary hover:underline">inquiries@groverconsult.com</a></p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
