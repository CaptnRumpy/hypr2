import { motion } from 'framer-motion'
import { Section, Card } from '../../components/ui'

export function Imprint() {
  return (
    <Section className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-brand-text mb-4">Legal Notice / Imprint</h1>
        <p className="text-xl text-brand-accent mb-8">International Legal Information</p>

        <Card hover={false} className="prose prose-invert max-w-none">
          <div className="space-y-8 text-brand-muted">
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Service Provider</h2>
              <p>
                HYPRSTRM is operated as a decentralized digital service. We maintain operational 
                presence across multiple privacy-respecting jurisdictions to ensure service continuity 
                and user protection.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Contact Information</h2>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hyprstrm@pm.me" className="text-brand-accent hover:underline">
                  hyprstrm@pm.me
                </a>
              </p>
              <p className="mt-2">
                <strong>Response Time:</strong> Within 48 hours for legitimate inquiries
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Legal Representation</h2>
              <p>
                For formal legal matters requiring physical service, please contact us via email 
                to obtain current registered agent information for your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Dispute Resolution</h2>
              <p>
                We are committed to resolving disputes amicably. For unresolved matters, 
                binding arbitration under UNCITRAL rules shall apply, with proceedings 
                conducted in the English language.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Copyright Notice</h2>
              <p>
                © {new Date().getFullYear()} HYPRSTRM. All rights reserved. The HYPRSTRM name, 
                logo, and all associated branding are proprietary. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Disclaimer</h2>
              <p>
                This website and service are provided for informational and commercial purposes. 
                We make no representations regarding the legality of specific use cases in your 
                jurisdiction. Users are responsible for ensuring their own compliance with applicable laws.
              </p>
            </section>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}
