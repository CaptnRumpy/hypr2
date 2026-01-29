import { motion } from 'framer-motion'
import { Section, Card } from '../components/ui'

export function Canary() {
  return (
    <>
      {/* Hero */}
      <Section grid className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              TRANSPARENCY REPORT & <span className="text-brand-accent glow-text">WARRANT CANARY</span>
            </h1>
            
            <Card hover={false} className="border-green-500/30 mt-12">
              <div className="text-4xl mb-4">🟢</div>
              <h2 className="text-3xl font-bold text-green-500 mb-2">ALIVE & KICKING</h2>
              <p className="text-brand-muted">Current Status</p>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-black p-4 border border-white/10">
                <div className="text-xs text-brand-muted uppercase mb-1">Last Updated</div>
                <div className="text-white font-bold">27.01.2026</div>
              </div>
              <div className="bg-black p-4 border border-white/10">
                <div className="text-xs text-brand-muted uppercase mb-1">Next Update Due</div>
                <div className="text-white font-bold">27.02.2026</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Canary Statement */}
      <Section className="bg-brand-dark border-y border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-brand-accent mb-6">The Canary Statement</h2>
          <p className="text-brand-muted mb-8">To the best of our knowledge (and our AI's sentiment analysis), the Hyprstrm infrastructure remains uncompromised.</p>
          
          <p className="text-brand-muted mb-6">As of 27.01.2026, we, the faceless entities behind the Hyprstrm DAO, verify the following:</p>
          
          <div className="space-y-4">
            <div className="bg-black p-4 border border-green-500/30 flex items-start gap-4">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <h3 className="font-bold text-white">No Warrants</h3>
                <p className="text-sm text-brand-muted">We have NOT received any National Security Letters, FISA court orders, or secretive subpoenas from guys in suits wearing sunglasses indoors.</p>
              </div>
            </div>
            <div className="bg-black p-4 border border-green-500/30 flex items-start gap-4">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <h3 className="font-bold text-white">No Gags</h3>
                <p className="text-sm text-brand-muted">We are NOT under any "Gag Order" preventing us from telling you that we are being watched.</p>
              </div>
            </div>
            <div className="bg-black p-4 border border-green-500/30 flex items-start gap-4">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <h3 className="font-bold text-white">No Backdoors</h3>
                <p className="text-sm text-brand-muted">We have NOT been forced to modify our source code to include a "Gov_Access_V1" backdoor.</p>
              </div>
            </div>
            <div className="bg-black p-4 border border-green-500/30 flex items-start gap-4">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <h3 className="font-bold text-white">No Seizures</h3>
                <p className="text-sm text-brand-muted">No hardware, assets, or novelty coffee mugs have been seized by any law enforcement agency, tax authority, or angry ex-spouses.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Terms of Service Note */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-brand-accent mb-6">A Note on Our Terms of Service Architecture</h2>
          
          <p className="text-brand-muted mb-6">If you have read our Terms of Use, you noticed they are strict. They include waivers, heavy indemnification, and aggressive liability caps.</p>
          
          <p className="text-brand-muted mb-8">We want to be transparent about why they are written this way. We are not trying to trap you, and we are not looking for reasons to sue our own community. We are builders, just like you.</p>
          
          <div className="space-y-6">
            <div className="bg-black p-6 border border-white/10">
              <h3 className="font-bold text-white mb-3">The Reality of the "Grey Zone"</h3>
              <p className="text-sm text-brand-muted">We provide infrastructure in an adversarial industry. The platforms we monitor actively try to cease innitiatives like these. To guarantee 99.9% uptime and ensure that we are here for you next year, our legal armor must be impenetrable.</p>
            </div>
            
            <div className="bg-black p-6 border border-white/10">
              <h3 className="font-bold text-white mb-3">Mutually Assured Survival</h3>
              <p className="text-sm text-brand-muted">We cannot fight trillion-dollar tech monopolies if we are also fighting frivolous lawsuits from users. Our strict Terms allow us to focus 100% of our resources on engineering and bypassing "collection problems", rather than legal defense.</p>
            </div>
            
            <div className="bg-black p-6 border border-white/10">
              <h3 className="font-bold text-white mb-3">The "Shield" Logic</h3>
              <p className="text-sm text-brand-muted">These clauses (like the Mass Arbitration Waiver) are defensive weapons. They sit dormant unless a bad actor tries to weaponize the legal system to destroy the platform.</p>
            </div>
            
            <div className="bg-black p-6 border border-white/10">
              <h3 className="font-bold text-white mb-3">For the Builders</h3>
              <p className="text-sm text-brand-muted">If you are here to build, scrape, and analyze data legitimately, these terms are simply the walls of the fortress that keep you safe. We are on the same team.</p>
            </div>
          </div>
          
          <Card hover={false} className="border-brand-accent/30 mt-8">
            <p className="text-brand-muted"><strong className="text-white">Our Pledge:</strong> We enforce our Terms strictly against abuse (DDoS, illegal activity, reverse engineering). We do not weaponize them against legitimate developers building value on our stack.</p>
            <p className="text-brand-accent font-bold mt-4">We hold the shield so you can hold the data.</p>
          </Card>
        </motion.div>
      </Section>

      {/* Transparency Log */}
      <Section className="bg-brand-dark border-y border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-brand-accent mb-6">The "Transparency" Log</h2>
          <p className="text-brand-muted mb-8">We believe in radical transparency. Here is a complete list of government requests, legal threats, and angry emails we have received since inception:</p>
          
          <div className="bg-black p-12 border border-white/10 text-center">
            <div className="text-6xl font-bold text-green-500 mb-4">NONE</div>
            <p className="text-brand-muted">No requests received</p>
          </div>
        </motion.div>
      </Section>

      {/* Why We're Safe */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-brand-accent mb-8">Why We Are (Probably) Safe</h2>
          <p className="text-brand-muted mb-8">We operate on a philosophy of "Plausible Deniability via Architecture."</p>
          
          <div className="space-y-6">
            <div className="bg-black p-6 border border-white/10">
              <h3 className="font-bold text-white mb-3">1. We Don't Know Who You Are</h3>
              <p className="text-sm text-brand-muted">We don't collect your name. We don't want your address. We don't want your credit card (hello, crypto!). If a government agency asks us for your data, we can honestly say: "We have a wallet address and an email that looks like a cat walked on a keyboard. That's it."</p>
            </div>
            
            <div className="bg-black p-6 border border-white/10">
              <h3 className="font-bold text-white mb-3">2. We Don't Store Scraped Data</h3>
              <p className="text-sm text-brand-muted">We are a pipeline, not a bucket. Data comes in from TikTok, hits your Webhook, and vanishes from our RAM. We practice "Log-less Architecture"—not because we are brave privacy warriors, but because hard drive storage costs money and we are cheap.</p>
            </div>
            
            <div className="bg-black p-6 border border-white/10">
              <h3 className="font-bold text-white mb-3">3. Distributed Jurisdiction</h3>
              <p className="text-sm text-brand-muted">Our servers are scattered across so many jurisdictions that serving a valid warrant would require a meeting of the United Nations General Assembly.</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Formal Declarations */}
      <Section className="bg-brand-dark border-y border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-brand-accent mb-2">Section II: Formal Legal Declarations</h2>
          <p className="text-brand-muted mb-8">(The Serious Stuff)</p>
          
          <p className="text-brand-muted mb-8">While the above is written in the spirit of our community, we take the legal status of our infrastructure seriously. As of the date timestamped above, Hyprstrm and its operators explicitly state the following:</p>
          
          <h3 className="text-xl font-bold text-white mb-6">1. Specific Negative Confirmations</h3>
          <p className="text-brand-muted mb-6">We have NOT received any of the following:</p>
          
          <ul className="space-y-3 text-brand-muted mb-12">
            <li className="flex items-start gap-2"><span className="text-green-500">✓</span> National Security Letters (NSLs) requesting user data under Title 18, U.S. Code, Section 2709.</li>
            <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Orders under the Foreign Intelligence Surveillance Act (FISA) or Section 702.</li>
            <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Orders under Section 215 of the USA PATRIOT Act (allowing for the collection of tangible things).</li>
            <li className="flex items-start gap-2"><span className="text-green-500">✓</span> EU Preservation Orders demanding the secret retention of user metadata beyond our standard operational logs.</li>
            <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Any court order or subpoena requiring us to implement a backdoor, modify our cryptographic architecture, or weaken our security protocols.</li>
            <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Any "Gag Order" preventing us from disclosing the existence of any of the above.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-white mb-6">2. Data Minimization Statement</h3>
          <p className="text-brand-muted mb-6">Our operational logging practices remain as described in our Privacy Policy. We do not engage in bulk data retention or user surveillance beyond what is strictly necessary for security and billing.</p>
          
          <h3 className="text-xl font-bold text-white mb-6">3. Infrastructure Integrity</h3>
          <p className="text-brand-muted">To our knowledge, no third party (governmental or otherwise) has gained unauthorized access to our core infrastructure, cryptographic keys, or user database.</p>
        </motion.div>
      </Section>

      {/* Dead Man's Switch */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-brand-accent mb-6">The "Dead Man's Switch"</h2>
          <p className="text-brand-muted mb-8">If this page is ever taken down, or if the monthly update fails to appear without prior notice, assume the worst. The canary has stopped singing.</p>
          
          <Card hover={false} className="border-brand-accent/30">
            <p className="text-brand-muted">We will continue to update this page on a monthly basis. If we are ever served with a secret order that prohibits us from updating, the silence will speak for itself.</p>
            <p className="text-brand-accent font-bold mt-4">Fiat justitia ruat caelum.</p>
            <p className="text-brand-muted text-sm mt-2">(Let justice be done, though the heavens fall.)</p>
          </Card>
        </motion.div>
      </Section>
    </>
  )
}
