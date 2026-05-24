"use client";

import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Grover Consult</title>
        <meta name="description" content="Terms of Service for Grover Consult — the conditions governing use of our website and consulting services." />
        <link rel="canonical" href="https://groverconsult.com/terms" />
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: March 2026</p>

          <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using this website (groverconsult.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website. These terms apply to all visitors, users, and other persons who access or use our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">2. About Grover Consult</h2>
              <p>Grover Consult is a specialist BFSI digital transformation consulting firm providing advisory, consulting, and implementation services to banks and financial institutions primarily in the Philippines and Indonesia. These Terms govern use of our website; separate engagement agreements govern the provision of professional services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">3. Website Use</h2>
              <p>This website is provided for general informational purposes about Grover Consult and its services. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the website.</p>
              <p className="mt-4">You must not:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Use the website in any way that is unlawful, fraudulent, or harmful</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
                <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
                <li>Reproduce, duplicate, copy, or exploit any content on this website for commercial purposes without written consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">4. Intellectual Property</h2>
              <p>All content on this website — including text, graphics, logos, icons, images, and data compilations — is the property of Grover Consult or its content suppliers and is protected by applicable intellectual property laws. Partner and client logos are the property of their respective owners and are used with permission.</p>
              <p className="mt-4">You may view, print, and download extracts from this website for personal, non-commercial use only, provided you retain all copyright and proprietary notices.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">5. Information Accuracy</h2>
              <p>While we take reasonable care to ensure the accuracy of information on this website, Grover Consult makes no warranties or representations as to its accuracy, completeness, or fitness for any particular purpose. Content on this website is provided for general information only and does not constitute professional advice. You should always seek specific professional advice relevant to your particular circumstances.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">6. Third-Party Links</h2>
              <p>This website may contain links to third-party websites. These links are provided for your convenience only. Grover Consult has no control over the content of those websites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, Grover Consult shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of this website or reliance on any content contained herein.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">8. Governing Law</h2>
              <p>These Terms are governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the Philippines.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">9. Changes to These Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any such changes constitutes your acceptance of the new Terms. Please review this page periodically.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">10. Contact</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p className="mt-3"><a href="mailto:inquiries@groverconsult.com" className="text-primary hover:underline">inquiries@groverconsult.com</a></p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
