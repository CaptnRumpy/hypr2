import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section } from '../../components/ui'

export function Imprint() {
  return (
    <Section className="pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">
          Legal Notice / <span className="text-brand-accent">International Imprint</span>
        </h1>

        <div className="space-y-8">
          {/* Service Provider */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Service Provider</h2>
            <p className="text-brand-muted">Hyprstrm.com<br />A Decentralized Data Infrastructure Service</p>
          </div>

          {/* Operating Status */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Operating Status</h2>
            <p className="text-brand-muted">Hyprstrm operates as a digital-first, international entity without a fixed physical establishment in any single national jurisdiction. The service is provided globally in accordance with International Law and the principles of digital neutrality.</p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">General Inquiries:</strong> hyprstrm@pm.me</li>
              <li><strong className="text-white">Legal & Compliance:</strong> hyprstrm@pm.me</li>
              <li><strong className="text-white">Support:</strong> hyprstrm@pm.me</li>
            </ul>
            <p className="text-brand-muted mt-4 text-sm">Please note: As a decentralized infrastructure provider, we do not maintain a physical office for public visitation or postal service. All official communication must be conducted digitally.</p>
          </div>

          {/* Legal Representation & Liability */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Legal Representation & Liability</h2>
            <p className="text-brand-muted mb-4"><strong className="text-white">Responsible for Content:</strong> The Hyprstrm Administration Team.</p>
            <p className="text-brand-muted mb-4"><strong className="text-white">Liability for Content:</strong> As a service provider, we are responsible for our own content on these pages in accordance with general international laws. However, we are not obligated to monitor transmitted or stored third-party information (scraped data) or to investigate circumstances that indicate illegal activity.</p>
            <p className="text-brand-muted"><strong className="text-white">Liability for Links:</strong> Our service contains links to external websites of third parties (e.g., social media platforms, payment gateways). We have no influence on the contents of those websites; therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.</p>
          </div>

          {/* Dispute Resolution & Jurisdiction */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution & Jurisdiction</h2>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Jurisdiction:</strong> International Law.</li>
              <li><strong className="text-white">Arbitration:</strong> All disputes are subject to binding arbitration under the UNCITRAL Arbitration Rules, as outlined in our <Link to="/legal/terms" className="text-brand-accent hover:underline">Terms of Use</Link>.</li>
              <li><strong className="text-white">Consumer Dispute Resolution:</strong> We are not willing or obliged to participate in dispute resolution proceedings before a national consumer arbitration board.</li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Copyright</h2>
            <p className="text-brand-muted">The content and works created by the site operators on these pages (including the API architecture, dashboard design, and documentation) are subject to international copyright protection. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.</p>
          </div>

          {/* Payment & Financial Services */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Payment & Financial Services</h2>
            <p className="text-brand-muted">Hyprstrm.com is a software provider. We are not a financial institution, payment processor, or money transmitter. All payments, including cryptocurrency transactions, are processed securely by independent third-party licensed providers.</p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
