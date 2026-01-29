import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section, Card, Button } from '../components/ui'

export function About() {
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
              ABOUT <span className="text-brand-accent glow-text">HYPRSTRM</span>
            </h1>
            <p className="text-2xl text-brand-muted">We Are the Signal in the Noise.</p>
          </motion.div>
        </div>
      </Section>

      {/* Main Content */}
      <Section className="bg-brand-dark border-y border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xl text-white mb-6">Hyprstrm is not a data broker. We are an infrastructure utility.</p>
          <p className="text-brand-muted mb-6">The modern internet is becoming a "Walled Garden." Platforms like TikTok, LinkedIn, and X are locking public human discourse behind algorithmic gates and anti-bot captchas. We believe that public data belongs to the public, but retrieving it requires industrial-grade engineering.</p>
          <p className="text-brand-accent font-bold">We build the drills, the pipelines, and the refineries. You bring the strategy.</p>
        </motion.div>
      </Section>

      {/* Philosophy Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Philosophy: <span className="text-brand-accent">"Adversarial Engineering"</span></h2>
          
          <p className="text-brand-muted mb-6">Data extraction is an arms race. Target platforms update their DOM structures and security fingerprints daily. Most scrapers fail because they treat this as a static problem. We treat it as a war.</p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4 bg-black p-6 border border-white/10">
              <span className="text-brand-accent">▸</span>
              <p className="text-brand-muted">We don't just "parse HTML." We run a distributed network of headless browsers backed by GPU-accelerated Computer Vision (OCR) and Neural Audio Analysis (ASR).</p>
            </div>
            <div className="flex items-start gap-4 bg-black p-6 border border-white/10">
              <span className="text-brand-accent">▸</span>
              <p className="text-brand-muted">We don't "guess." Our infrastructure adapts in real-time to changes in platform architecture, ensuring that your data pipeline is resilient to the chaos of the open web.</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Trust Architecture Section */}
      <Section className="bg-brand-dark border-y border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Trust Architecture</h2>
          <p className="text-brand-muted mb-12">Because we operate in the "Grey Zone" of the internet, trust is not given—it is cryptographic. We have architected our entire company around Plausible Deniability and Data Minimization.</p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-brand-accent mb-4">1. The Tokenized Economy</h3>
              <p className="text-brand-muted mb-4">We rejected the standard "Monthly Subscription" model because it requires a paper trail.</p>
              <ul className="space-y-2 text-brand-muted">
                <li><strong className="text-white">Pay-as-you-Go:</strong> Our Token Model allows you to pay strictly for the compute you use.</li>
                <li><strong className="text-white">Anonymous On-ramps:</strong> We accept crypto-native payments to ensure that access to information remains permissionless.</li>
                <li><strong className="text-white">No "Shelfware":</strong> You are paying for work performed (extraction cycles), not for intellectual property we don't own.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-brand-accent mb-4">2. Radical Privacy (No-KYC)</h3>
              <p className="text-brand-muted mb-4">We do not want your data. In fact, our architecture is designed to repel it.</p>
              <ul className="space-y-2 text-brand-muted">
                <li><strong className="text-white">No Identity Verification:</strong> As stated in our Privacy Policy, we do not require government ID or phone numbers for standard access.</li>
                <li><strong className="text-white">Ram-Disk Operations:</strong> We process scraped data in ephemeral memory. Once delivered to your webhook, it is purged from our cache. We cannot leak what we do not store.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-brand-accent mb-4">3. The Warrant Canary</h3>
              <p className="text-brand-muted mb-4">We operate under strict transparency.</p>
              <ul className="space-y-2 text-brand-muted">
                <li><strong className="text-white">Government Requests:</strong> We maintain a live Warrant Canary to inform our users if we have received any gag orders, subpoenas, or national security letters.</li>
                <li><strong className="text-white">The "Dead Man's Switch":</strong> If that page stops updating, you know the platform is compromised. We trust code, not promises.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Legal Fortress Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Legal Fortress</h2>
          <p className="text-brand-muted mb-6">We are a "Neutral Infrastructure Provider." We provide the tools; you provide the intent. As detailed in our Terms of Use, we strictly prohibit the use of our tools for credential stuffing, harassment, or PII harvesting.</p>
          <p className="text-brand-muted">We maintain a delicate balance: We protect the infrastructure so you can access the data. By adhering to strict legal boundaries and limiting our liability, we ensure that Hyprstrm remains online and operational when others get shut down.</p>
        </motion.div>
      </Section>

      {/* Network Section */}
      <Section className="bg-brand-dark border-y border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Network</h2>
          <p className="text-brand-muted mb-8">We are a distributed collective of engineers, data scientists, and privacy advocates.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-black p-6 border border-white/10">
              <div className="text-sm text-brand-muted uppercase mb-2">Headquarters</div>
              <div className="text-xl font-bold text-white">Decentralized</div>
            </div>
            <div className="bg-black p-6 border border-white/10">
              <div className="text-sm text-brand-muted uppercase mb-2">Infrastructure</div>
              <div className="text-xl font-bold text-green-500">Running</div>
            </div>
          </div>
          
          <p className="text-2xl text-brand-accent font-bold text-center">We are the pipes. You are the water.</p>
        </motion.div>
      </Section>

      {/* Verify Section */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Verify Us.</h2>
          <p className="text-brand-muted mb-12">Don't take our word for it. Check the pulse of the machine.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="#" variant="secondary">
              <span className="text-green-500 mr-2">🟢</span> View Network Status
            </Button>
            <Button to="/canary" variant="secondary">
              <span className="mr-2">🐣</span> Check Warrant Canary
            </Button>
            <Button to="/docs" variant="secondary">
              DOCS
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
