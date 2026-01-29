import { motion } from 'framer-motion'
import { Section, Card } from '../../components/ui'

export function Terms() {
  return (
    <Section className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-brand-text mb-8">Terms of Use</h1>
        <p className="text-sm text-brand-muted mb-8">Effective Date: January 1, 2026</p>

        <Card hover={false} className="prose prose-invert max-w-none">
          <div className="space-y-8 text-brand-muted">
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using HYPRSTRM ("Service"), you agree to be bound by these Terms of Use. 
                If you do not agree, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">2. Description of Service</h2>
              <p>
                HYPRSTRM provides data extraction and analysis services for publicly available information 
                on social media platforms. We do not access private or protected content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">3. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service only for lawful purposes</li>
                <li>Comply with all applicable laws and platform terms of service</li>
                <li>Not use the Service for harassment, stalking, or illegal surveillance</li>
                <li>Not resell access to the Service without authorization</li>
                <li>Maintain the security of your API credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">4. Prohibited Uses</h2>
              <p className="mb-4">The following uses are strictly prohibited:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Targeting individuals for harassment or doxxing</li>
                <li>Building surveillance tools for authoritarian purposes</li>
                <li>Scraping private or protected content</li>
                <li>Violating GDPR, CCPA, or other privacy regulations</li>
                <li>Any activity that could harm minors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">5. Limitation of Liability</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. HYPRSTRM SHALL NOT BE 
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM 
                YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">6. Dispute Resolution</h2>
              <p>
                Any disputes shall be resolved through binding arbitration under UNCITRAL rules. 
                The arbitration shall take place in a neutral jurisdiction agreed upon by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">7. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the Service 
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">8. Contact</h2>
              <p>
                For questions about these terms, contact:{' '}
                <a href="mailto:hyprstrm@pm.me" className="text-brand-accent hover:underline">
                  hyprstrm@pm.me
                </a>
              </p>
            </section>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}
