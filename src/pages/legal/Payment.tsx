import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section, Card } from '../../components/ui'

export function Payment() {
  return (
    <Section className="pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          <span className="text-brand-accent">Payment</span> Policy
        </h1>
        <p className="text-brand-muted mb-12">Last Updated: 27.01.2026</p>

        <div className="space-y-8">
          <p className="text-brand-muted">Hyprstrm.com operates on a decentralized, prepaid token economy. This policy outlines the terms regarding the purchase of Tokens, subscription renewals, and our anonymous payment infrastructure. By purchasing Tokens or subscribing to a tier, you agree to these terms.</p>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. The Prepaid Model</h2>
            <p className="text-brand-muted mb-4">Hyprstrm services are not billed in arrears. Access to the platform requires a positive Token balance, which is funded through two methods:</p>
            <ul className="text-brand-muted space-y-2 list-disc list-inside">
              <li><strong className="text-white">Monthly Subscriptions:</strong> Recurring payments that grant a refreshed allowance of Tokens every month.</li>
              <li><strong className="text-white">Token Packs:</strong> One-time purchases to top up your balance.</li>
            </ul>
            <p className="text-brand-muted mt-4 text-sm">Note: Specific costs for platform actions (e.g., ingestion, enrichment) can be found on our <Link to="/tokenomics" className="text-brand-accent hover:underline">Tokenomics</Link> page.</p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Anonymous & Cryptocurrency Payments</h2>
            <p className="text-brand-muted mb-4">To protect user privacy, Hyprstrm prioritizes anonymous payment methods.</p>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Accepted Methods:</strong> We accept major cryptocurrencies (BTC, ETH, USDT, XMR) or Anonymized Credit/Debit and Apple Pay (+22 other payment Methods) via third-party licensed payment gateways.</li>
              <li><strong className="text-white">Anonymity:</strong> We do not require Know Your Customer (KYC) documentation for standard Token purchases. We do not store your wallet private keys, credit card numbers, or physical billing addresses.</li>
              <li><strong className="text-white">Exchange Rates:</strong> Crypto-to-Token conversion rates are locked at the moment of the transaction based on the current USD value of the chosen package.</li>
              <li><strong className="text-white">Network Fees:</strong> You are responsible for any blockchain network fees (gas fees) associated with the transaction.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Billing Cycle & Renewals</h2>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Monthly Refresh:</strong> Subscription tiers renew monthly on the anniversary of your initial purchase. Tokens associated with a recurring subscription are credited to your account immediately upon successful renewal.</li>
              <li><strong className="text-white">No Rollover (Use It or Lose It):</strong> Unused tokens expire at the end of the billing month. They do not roll over to the next month. It is your responsibility to utilize your capacity within the active cycle.</li>
              <li><strong className="text-white">Partial Month:</strong> Billing is calculated based on full-day increments. We do not offer hourly billing.</li>
            </ul>
          </div>

          {/* Section 3.1 */}
          <Card hover={false} className="border-white/10">
            <h3 className="text-lg font-bold text-brand-accent mb-4">3.1 Waiver of Right of Withdrawal (EU/UK Consumers)</h3>
            <p className="text-brand-muted text-sm">By purchasing Tokens or a Subscription, you expressly request that the supply of the digital content begins immediately. YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU LOSE YOUR RIGHT OF WITHDRAWAL (COOLING-OFF PERIOD) ONCE THE PERFORMANCE HAS BEGUN. You agree that the provisioning of Tokens to your account constitutes full performance of our obligation to deliver the digital good, and no refunds shall be issued thereafter under Consumer Rights Directives.</p>
          </Card>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Overage & Auto-Recharge</h2>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Default Behavior (Pause):</strong> If your Token balance reaches zero, your streams and data collection will strictly pause. You will not be automatically charged for overage.</li>
              <li><strong className="text-white">Opt-In Auto-Charge:</strong> You may explicitly opt-in to "Auto-Recharge," which authorizes us to automatically purchase a Token top-up when your balance hits a defined threshold. Without this explicit consent, service simply stops.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Upgrades & Downgrades</h2>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Mid-Cycle Upgrade:</strong> If you upgrade your tier (e.g., from PRO to BUSINESS), the change is effective immediately. The cost is prorated, and the additional Tokens are added to your balance instantly.</li>
              <li><strong className="text-white">Mid-Cycle Downgrade:</strong> Downgrades become effective at the start of the next billing cycle. You will retain your current tier features and token limits until the current month ends.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <Card hover={false} className="border-brand-accent/50">
            <h2 className="text-2xl font-bold text-brand-accent mb-4">6. Refund Policy</h2>
            <p className="text-white font-bold mb-4">ALL SALES ARE FINAL.</p>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">No Refunds:</strong> Due to the irreversible nature of cryptocurrency transactions and the immediate availability of digital Tokens, we do not offer refunds, returns, or exchanges under any circumstances.</li>
              <li><strong className="text-white">No Chargebacks:</strong> You agree not to initiate any chargeback disputes. Doing so will result in the immediate and permanent termination of your account and the blacklisting of your associated API keys.</li>
            </ul>
          </Card>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Tax & Compliance</h2>
            <p className="text-brand-muted"><strong className="text-white">Tax Responsibility:</strong> As an international service user, you are solely responsible for determining any tax obligations (VAT, GST, Sales Tax) applicable to your purchase in your local jurisdiction. Hyprstrm does not collect or remit taxes on your behalf.</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact for Billing Inquiries</h2>
            <p className="text-brand-muted">For issues regarding failed transactions or token crediting errors, please contact: <a href="mailto:hyprstrm@pm.me" className="text-brand-accent hover:underline">hyprstrm@pm.me</a></p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
