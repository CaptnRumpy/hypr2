import { motion } from 'framer-motion'
import { Section, Card } from '../../components/ui'

export function Privacy() {
  return (
    <Section className="pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-brand-text mb-4">Privacy Policy</h1>
        <p className="text-xl text-brand-accent mb-8">Data Minimization by Design</p>

        <Card hover={false} className="prose prose-invert max-w-none">
          <div className="space-y-8 text-brand-muted">
            <section>
              <p className="text-lg italic border-l-2 border-brand-accent pl-4">
                "The best way to protect your data is not to collect it."
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Our Philosophy</h2>
              <p>
                HYPRSTRM is built on the principle of data minimization. We collect only what is 
                strictly necessary to provide our service, and we delete what we can as soon as possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">What We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email Address:</strong> For account creation and essential communications only</li>
                <li><strong>API Usage Logs:</strong> Endpoint, timestamp, and token consumption (purged after 72 hours)</li>
                <li><strong>Payment Information:</strong> Processed by third-party providers; we never see your card</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">What We Don't Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your real name or identity documents</li>
                <li>Your physical address</li>
                <li>The content you scrape (streamed directly to you)</li>
                <li>Behavioral analytics or tracking data</li>
                <li>Third-party cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Your Rights (GDPR/CCPA)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your data</li>
                <li><strong>Deletion:</strong> Request complete account deletion</li>
                <li><strong>Portability:</strong> Export your data in standard formats</li>
                <li><strong>Opt-Out:</strong> Decline marketing communications (we don't send any)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>API logs: 72 hours</li>
                <li>Account data: Until deletion requested</li>
                <li>Payment records: As required by law (typically 7 years)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-text mb-4">Contact</h2>
              <p>
                For privacy inquiries:{' '}
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
