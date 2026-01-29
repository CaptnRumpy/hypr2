import { motion } from 'framer-motion'
import { Section, Card } from '../../components/ui'

export function Terms() {
  return (
    <Section className="pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          <span className="text-brand-accent">Terms</span> of Use
        </h1>
        <p className="text-brand-muted mb-12">Last Updated: 27.01.2025</p>

        {/* Important Disclaimer */}
        <Card hover={false} className="border-brand-accent mb-12">
          <h2 className="text-xl font-bold text-brand-accent mb-4">IMPORTANT LEGAL DISCLAIMER & LIABILITY WAIVER</h2>
          <p className="text-brand-muted text-sm mb-4">READ THIS SECTION CAREFULLY. IT LIMITS THE LIABILITY OF HYPRSTRM.COM TO THE MAXIMUM EXTENT PERMITTED BY LAW.</p>
          <p className="text-brand-muted text-sm mb-4">HYPRSTRM.COM ("THE SERVICE") IS A NEUTRAL INFRASTRUCTURE PROVIDER. WE PROVIDE SOFTWARE TOOLS FOR DATA EXTRACTION, OCR, AND ASR ANALYSIS. WE DO NOT CREATE, CONTROL, OR CLAIM OWNERSHIP OF ANY DATA ACCESSED THROUGH OUR TOOLS.</p>
          <p className="text-brand-muted text-sm mb-4">YOU ASSUME FULL LEGAL RESPONSIBILITY. BY USING THIS SERVICE, YOU ACKNOWLEDGE THAT YOU ARE SOLELY RESPONSIBLE FOR COMPLYING WITH ALL APPLICABLE LAWS, INCLUDING INTERNATIONAL COPYRIGHT TREATIES, DATA PRIVACY LAWS (GDPR, CCPA), AND THE TERMS OF SERVICE OF ANY THIRD-PARTY PLATFORMS. HYPRSTRM SHALL NOT BE HELD LIABLE FOR YOUR VIOLATION OF ANY THIRD-PARTY CONTRACTS OR INTERNATIONAL REGULATIONS.</p>
          <p className="text-brand-muted text-sm">USE AT YOUR OWN RISK. HYPRSTRM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.</p>
        </Card>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction & Acceptance</h2>
            <p className="text-brand-muted mb-4">These Terms of Use ("Terms") govern your access to and use of Hyprstrm.com (including all subdomains, APIs, and dashboards). By accessing or using the Service, you agree to be bound by these Terms.</p>
            <p className="text-brand-muted mb-4">These Terms constitute a binding legal agreement between you and Hyprstrm. The software, plugins, and API services are offered "as is" to facilitate API communication and data parsing. Hyprstrm is not responsible for any misuse, illegal activity, or data privacy violations committed by its clients.</p>
            
            <h3 className="text-lg font-bold text-brand-accent mb-3">1.1 Beta Services</h3>
            <p className="text-brand-muted mb-4">Certain features of the Service may be designated as "Alpha," "Beta," or "Experimental" ("Beta Features"). You acknowledge that Beta Features: (a) Are still under development and may contain bugs, errors, or cause data loss. (b) May be subject to sudden modification or deprecation without notice. (c) Are provided "AS IS" with no warranties whatsoever. Hyprstrm shall have no liability for any harm arising out of your use of Beta Features.</p>
            
            <h3 className="text-lg font-bold text-brand-accent mb-3">1.2 Business-to-Business (B2B) Relationship</h3>
            <p className="text-brand-muted">You expressly represent and warrant that you are purchasing the Service for trade, business, or professional purposes only, and not as a "Consumer" (as defined by EU Directive 2011/83/EU or similar local statutes). Consumer Rights Waiver: To the fullest extent permitted by law, you hereby waive any "Consumer" rights, including cooling-off periods, implied warranties of merchantability, and strict liability protections, acknowledging that this is a commercial contract between sophisticated entities.</p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description & Tokens</h2>
            <p className="text-brand-muted mb-4">Hyprstrm operates on a prepaid token model where tokens fund usage and tiers unlock features. The Service: Includes the Natural Language Query Interpreter, Collection Workers, and Delivery Service via Webhooks or WebSocket. Token Usage: Tokens are consumed for operations based on the state of our Tokenomics.</p>
            
            <h3 className="text-lg font-bold text-brand-accent mb-3">2.1 API Key Security & Absolute Liability</h3>
            <p className="text-brand-muted">You are solely responsible for maintaining the confidentiality of your API Keys and cryptographic secrets. You accept full responsibility and liability for all activities, charges, and damages that occur under your API Key, whether authorized by you or not. Hyprstrm shall not be liable for any loss or damage arising from your failure to secure your credentials (e.g., accidentally committing keys to public GitHub repositories).</p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Payments, Anonymity & Crypto Services</h2>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Anonymous Payments:</strong> To ensure user privacy, Hyprstrm accepts anonymous payments via third-party cryptocurrency gateways and services.</li>
              <li><strong className="text-white">Third-Party Processing:</strong> All payment processing is handled securely through licensed third-party providers. Hyprstrm does not store your financial details, private keys, or wallet addresses.</li>
              <li><strong className="text-white">User Responsibility:</strong> While we facilitate anonymous payments for privacy, you acknowledge that you remain legally responsible for the source of funds. You warrant that any funds used to purchase Tokens are not derived from illegal activities.</li>
              <li><strong className="text-white">No Refunds:</strong> Due to the nature of digital tokens and anonymous transactions, all sales are final. We do not offer refunds, chargebacks, or credits for partially used token balances or "Partial month" usage.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Service Usage & Restrictions</h2>
            <p className="text-brand-muted mb-4">You agree to use Hyprstrm solely for lawful purposes. You acknowledge that the ethical extraction of data may conflict with the terms of service of specific platforms and accept this risk.</p>
            
            <h3 className="text-lg font-bold text-brand-accent mb-3">Prohibited Activities:</h3>
            <ul className="text-brand-muted space-y-2 mb-4 list-disc list-inside">
              <li>Engage in "Credential Stuffing" or use stolen authentication tokens.</li>
              <li>Disrupt, flood, or degrade the performance of target third-party servers ("DDoS").</li>
              <li>Scrape data in violation of the Computer Fraud and Abuse Act (CFAA) or clear "Cease and Desist" warnings sent directly to you by content owners.</li>
            </ul>

            <h3 className="text-lg font-bold text-brand-accent mb-3">Sanctions & Export Control (OFAC):</h3>
            <p className="text-brand-muted mb-4">By using the Service, you represent and warrant that you are not located in, under the control of, or a national or resident of any country subject to United States or EU trade sanctions (including but not limited to Iran, North Korea, Syria, Cuba, and Russia). You further warrant that you are not listed on the U.S. Treasury Department's "Specially Designated Nationals" (SDN) list. Use of this Service by sanctioned persons or entities is strictly prohibited.</p>

            <h3 className="text-lg font-bold text-brand-accent mb-3">4.1 Copyright Complaints (DMCA)</h3>
            <p className="text-brand-muted mb-4">Hyprstrm respects the intellectual property rights of others. If you believe that your copyrighted work has been scraped and stored on our servers in a way that constitutes copyright infringement, please report it to legal@hyprstrm.com. Repeat Infringers: It is our policy to terminate the accounts of users who are found to be repeat infringers of copyright.</p>

            <h3 className="text-lg font-bold text-brand-accent mb-3">4.2 Prohibition on FCRA Use (No Eligibility Decisions)</h3>
            <p className="text-brand-muted mb-4">Hyprstrm is NOT a Consumer Reporting Agency as defined by the Fair Credit Reporting Act (FCRA), 15 U.S.C. § 1681 et seq., or similar international statutes. You are strictly prohibited from using the Service or any extracted data to determine an individual's eligibility for: (a) Credit or insurance (personal, business, or mortgage). (b) Employment, promotion, or reassignment. (c) Tenancy or housing. (d) Government licenses or benefits. You hereby warrant that you will not use any data from Hyprstrm as a factor in establishing an individual's eligibility for any of the above.</p>

            <h3 className="text-lg font-bold text-brand-accent mb-3">4.4 Prohibition on Sensitive Data Processing</h3>
            <p className="text-brand-muted">You are strictly prohibited from using the Service to scrape, parse, or process: (a) "Protected Health Information" (PHI) as defined by HIPAA. (b) Payment Card Industry (PCI) data (e.g., credit card numbers + CVV). (c) Government-issued Identification Numbers (SSN, Passport, Driver's License). Hyprstrm accepts no liability for the accidental ingestion of such data and reserves the right to immediately purge such records.</p>
          </div>

          {/* Section 5 */}
          <Card hover={false} className="border-brand-accent">
            <h2 className="text-2xl font-bold text-brand-accent mb-4">5. Maximum Limitation of Liability</h2>
            <p className="text-brand-muted text-sm mb-4">YOU ACKNOWLEDGE THAT DATA EXTRACTION IS AN ADVERSARIAL INDUSTRY. TARGET PLATFORMS (E.G., TIKTOK, LINKEDIN) FREQUENTLY CHANGE THEIR CODE, API STRUCTURES, AND ANTI-BOT DEFENSES. HYPRSTRM DOES NOT GUARANTEE CONTINUOUS ACCESS TO ANY SPECIFIC THIRD-PARTY PLATFORM. WE SHALL NOT BE LIABLE FOR SERVICE INTERRUPTIONS, "BROKEN" SCRAPERS, OR ACCOUNT BANS RESULTING FROM THIRD-PARTY UPDATES OR SECURITY PATCHES.</p>
            
            <h3 className="text-lg font-bold text-white mb-3">Limitation of Damages:</h3>
            <p className="text-brand-muted text-sm mb-4">TO THE FULLEST EXTENT PERMITTED BY INTERNATIONAL LAW, IN NO EVENT SHALL HYPRSTRM, ITS OPERATORS, OR AFFILIATES BE LIABLE FOR:</p>
            <ul className="text-brand-muted text-sm space-y-2 mb-4">
              <li><strong className="text-white">Lost Profits or Data:</strong> Any loss of revenue, data, goodwill, or business reputation.</li>
              <li><strong className="text-white">Third-Party Actions:</strong> Any legal action, Cease & Desist orders, or IP bans taken against you by third-party platforms.</li>
              <li><strong className="text-white">Accuracy:</strong> The accuracy, truthfulness, or completeness of any data extracted or AI-generated insights (Topic Modeling, Sentiment).</li>
            </ul>
            <p className="text-brand-muted text-sm"><strong className="text-white">Monetary Cap:</strong> HYPRSTRM'S TOTAL CUMULATIVE LIABILITY FOR ANY CLAIMS ARISING OUT OF THIS AGREEMENT SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO HYPRSTRM IN THE ONE (1) MONTH PERIOD IMMEDIATELY PRECEDING THE INCIDENT.</p>
          </Card>

          {/* Section 5.1 */}
          <div>
            <h3 className="text-lg font-bold text-brand-accent mb-3">5.1 Artificial Intelligence & Output Accuracy</h3>
            <p className="text-brand-muted mb-4">You acknowledge that the Service utilizes probabilistic systems (Neural Networks, Large Language Models, OCR, ASR) that may produce inaccurate, incomplete, or offensive results ("Hallucinations").</p>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">No Reliance:</strong> Hyprstrm provides raw data processing only. You agree not to rely solely on the Service for critical decision-making, including but not limited to financial trading, medical advice, or legal compliance.</li>
              <li><strong className="text-white">User Verification:</strong> It is your sole responsibility to verify the accuracy of any transcribed text, extracted data, or sentiment score before acting upon it. Hyprstrm disclaims all liability for actions taken based on AI-generated insights.</li>
            </ul>
          </div>

          {/* Section 5.2 */}
          <div>
            <h3 className="text-lg font-bold text-brand-accent mb-3">5.2 High-Risk Activities</h3>
            <p className="text-brand-muted">The Service is not designed, verified, or intended for use in hazardous environments requiring fail-safe performance, including but not limited to: nuclear facilities, aircraft navigation, air traffic control, life support systems, or weapons systems. Hyprstrm expressly disclaims any express or implied warranty of fitness for such High-Risk Activities.</p>
          </div>

          {/* Section 5.3 */}
          <div>
            <h3 className="text-lg font-bold text-brand-accent mb-3">5.3 Statute of Limitations</h3>
            <p className="text-brand-muted">To the maximum extent permitted by applicable law, you agree that any claim or cause of action arising out of or related to these Terms or the Service must be filed within one (1) year after such claim arose. Otherwise, such claim is permanently barred.</p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Indemnification (Total Hold Harmless)</h2>
            <p className="text-brand-muted mb-4">You agree to defend, indemnify, and hold harmless Hyprstrm and its affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney's fees) arising from:</p>
            <ul className="text-brand-muted space-y-2 mb-4 list-disc list-inside">
              <li>Your use of the Service.</li>
              <li>Your violation of these Terms.</li>
              <li>Your violation of any third-party right, including copyright, property, or privacy rights.</li>
              <li>Your violation of any third-party platform's Terms of Service.</li>
            </ul>
            
            <h3 className="text-lg font-bold text-brand-accent mb-3">6.1 Content Indemnity</h3>
            <p className="text-brand-muted">You specifically agree to indemnify Hyprstrm against any claims arising from the content of the data you extract. This includes, but is not limited to, claims of Defamation, Libel, Violation of Publicity Rights (Right of Likeness), or distribution of Obscene Material. You acknowledge that Hyprstrm is a passive conduit and has no editorial control over the content hosted on third-party platforms.</p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Representations & Warranties</h2>
            <p className="text-brand-muted mb-4">By inputting any URL, Keyword, or Search Term into Hyprstrm, you represent and warrant that:</p>
            <ul className="text-brand-muted space-y-2">
              <li><strong className="text-white">Authorization:</strong> You have the legal right to access the target URL and extract the data contained therein.</li>
              <li><strong className="text-white">Compliance:</strong> Your use of the extracted data will comply with all applicable laws, including GDPR (EU), CCPA (California), and the Terms of Service of the source platform.</li>
              <li><strong className="text-white">No PII Storage:</strong> You will not use Hyprstrm to build databases of private individuals' PII (Personally Identifiable Information) for the purpose of harassment, doxxing, or identity theft.</li>
              <li><strong className="text-white">Processor Role:</strong> You agree that in relation to any Personal Data processed, You are the Data Controller and Hyprstrm is acting solely as a Data Processor on your behalf.</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-brand-muted">
              For questions about these terms, contact:{' '}
              <a href="mailto:hyprstrm@pm.me" className="text-brand-accent hover:underline">
                hyprstrm@pm.me
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
