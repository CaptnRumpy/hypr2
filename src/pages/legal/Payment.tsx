import { motion } from 'framer-motion'
import { Section, Card } from '../../components/ui'

export function Payment() {
  return (
    <Section className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-brand-text mb-4">Payment Policy</h1>
        <p className="text-xl text-brand-accent mb-8">The Prepaid Token Economy</p>

        <Card hover={false} className="prose prose-invert max-w-none">
          <div className="space-y-8 text-brand-muted">
            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Payment Model</h2>
              <p>
                HYPRSTRM operates on a prepaid token model. You purchase tokens in advance, 
                and they are consumed as you use the API. There are no surprise charges or overages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Accepted Payment Methods</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cryptocurrency:</strong> Bitcoin (BTC), Ethereum (ETH), Monero (XMR), USDC</li>
                <li><strong>Traditional:</strong> Credit/Debit cards via Stripe (with KYC)</li>
              </ul>
              <p className="mt-4 text-sm">
                Note: Cryptocurrency payments allow for fully anonymous use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Billing Cycles</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monthly tiers renew on the same date each month</li>
                <li>Unused tier tokens do not roll over</li>
                <li>Purchased token packs never expire</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Refund Policy</h2>
              <p>
                <strong>All sales are final.</strong> Due to the nature of digital services and our 
                privacy-first approach, we do not offer refunds. We encourage you to start with the 
                free tier to evaluate the service before purchasing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Overage Protection</h2>
              <p>
                When your tokens are depleted, your streams pause gracefully. We will never charge 
                you automatically for overages. Top up when you're ready, and your streams resume.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Disputes</h2>
              <p>
                For billing disputes, contact us at{' '}
                <a href="mailto:hyprstrm@pm.me" className="text-brand-accent hover:underline">
                  hyprstrm@pm.me
                </a>
                . We aim to resolve all disputes within 48 hours.
              </p>
            </section>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}
