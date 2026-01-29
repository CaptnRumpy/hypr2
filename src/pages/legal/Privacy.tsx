import { motion } from 'framer-motion'
import { Section, Card } from '../../components/ui'

export function Privacy() {
  return (
    <Section className="pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          <span className="text-brand-accent">Privacy</span> Policy
        </h1>
        <p className="text-brand-muted mb-12">Last Updated: 27.01.2026</p>

        <Card hover={false} className="border-brand-accent/30 mb-12">
          <p className="text-brand-muted">At Hyprstrm, we operate on a philosophy of <strong className="text-white">Data Minimization by Design</strong>. We believe that the best way to protect your data is not to collect it in the first place.</p>
        </Card>

        <div className="space-y-8">
          <p className="text-brand-muted">This Privacy Notice explains how we handle your information across our distributed infrastructure, in compliance with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and international data sovereignty principles.</p>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. What We Collect (And What We Don't)</h2>
            <p className="text-brand-muted mb-4">We differentiate between Account Data (you, the customer) and Intelligence Data (the public content we make accesible).</p>
            
            <h3 className="text-xl font-bold text-brand-accent mb-3">A. Account Data (Your Info)</h3>
            <p className="text-brand-muted mb-4">We strictly adhere to a No-KYC (Know Your Customer) policy for standard tiers.</p>
            <ul className="text-brand-muted space-y-2 mb-4">
              <li><strong className="text-white">Collected:</strong> Email address (can be anonymous/protonmail), Encrypted Password, Wallet Addresses (if paying via Crypto).</li>
              <li><strong className="text-white">NOT Collected:</strong> We do not require your real name, physical address, phone number, or government ID to operate a Free, Pro, or Business/Enterprise account.</li>
              <li><strong className="text-white">Payment Data:</strong> If you pay via Credit Card, your payment details are processed entirely by our third-party merchant of record (Anonymized see Payment Policy). Hyprstrm never touches or stores raw credit card numbers.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-brand-accent mb-3">B. Usage Logs</h3>
            <ul className="text-brand-muted space-y-2 mb-4">
              <li><strong className="text-white">Ephemeral Logs:</strong> We monitor API usage logs (IP address, endpoint access) strictly for security, rate-limiting, and abuse prevention.</li>
              <li><strong className="text-white">Retention Policy:</strong> These logs are stored in a Least Recently Used (LRU) rolling cache and are automatically overwritten/purged every 30 days. We do not maintain historical browsing logs of our users.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-brand-accent mb-3">C. Intelligence Data (Content we make accesible)</h3>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Public Source:</strong> Our infrastructure scrapes data that has been voluntarily made public by users on third-party platforms (TikTok, X, etc.).</li>
              <li><strong className="text-white">Processing Role:</strong> In the context of GDPR, Hyprstrm acts as a Data Processor. You (the client) are the Data Controller. We process this public data solely on your instructions via the API.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Legal Basis for Processing</h2>
            <h3 className="text-xl font-bold text-brand-accent mb-3">For European Users (GDPR)</h3>
            <p className="text-brand-muted mb-4">We process your data under the following legal bases:</p>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Contractual Necessity:</strong> To deliver the API services you purchased.</li>
              <li><strong className="text-white">Legitimate Interest:</strong> To analyze public market trends and social sentiment. We assert that scraping publicly available data for commercial intelligence constitutes a Legitimate Interest, provided we respect the privacy settings of the source platform (i.e., we do not scrape private/friends-only accounts).</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. International Data Transfers</h2>
            <p className="text-brand-muted mb-4">Hyprstrm is a decentralized, borderless infrastructure.</p>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Distributed Processing:</strong> Your API requests may be routed through nodes located in the United States, European Union, or Asia-Pacific depending on network load and the target platform's location.</li>
              <li><strong className="text-white">Standard Contractual Clauses (SCCs):</strong> By using our service, you acknowledge that data may flow across borders. We rely on standard data protection addendums with our cloud providers to ensure security equivalence regardless of jurisdiction.</li>
              <li><strong className="text-white">Data Sovereignty (Enterprise):</strong> For Enterprise and Custom Solution clients, we offer Data Residency Pinning (e.g., ensuring all scraping and storage happens exclusively within EU/US/IN etc. servers).</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention & Deletion</h2>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">User Right to be Forgotten:</strong> You may delete your account at any time via the dashboard. Upon deletion, your email and cryptographic hashes are immediately removed from our active database.</li>
              <li><strong className="text-white">Scraped Data Lifecycle:</strong> We do not archive the internet. Scraped video content and text are processed in-memory (RAM) or temporary storage and delivered to your webhook. Once delivered, we generally do not retain a copy unless cached for performance deduplication.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies & Tracking</h2>
            <p className="text-brand-muted mb-4">We hate trackers as much as you do.</p>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Essential Cookies Only:</strong> We use local storage tokens solely to keep you logged in to the dashboard.</li>
              <li><strong className="text-white">Third-Party Analytics:</strong> We may use Google Analytics or similar anlaytics tools to count Website traffic.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Security Measures</h2>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Encryption:</strong> All data in transit is encrypted.</li>
              <li><strong className="text-white">Hashing:</strong> Passwords are salted and hashed.</li>
              <li><strong className="text-white">Access Control:</strong> Our internal architecture follows the Principle of Least Privilege. No human admin has direct read-access to user API streams.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
            <p className="text-brand-muted mb-4">Under GDPR/CCPA, you have the right to:</p>
            <ul className="text-brand-muted space-y-2 mb-4 list-disc list-inside">
              <li>Access the personal data we hold about you (which is mostly just an email address).</li>
              <li>Request deletion of your data.</li>
              <li>Object to processing.</li>
            </ul>
            <p className="text-brand-muted">To exercise these rights:</p>
            <p className="text-brand-muted">Email: <a href="mailto:hyprstrm@pm.me" className="text-brand-accent hover:underline">hyprstrm@pm.me</a></p>
            <p className="text-brand-muted text-sm mt-4">Note: Since we do not verify identities (KYC), you must email us from the exact email address associated with the account to prove ownership.</p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p className="text-brand-muted">We may update this policy to reflect legal or technical changes. Significant changes will be announced via the Changelog and, if applicable, the Warrant Canary.</p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
