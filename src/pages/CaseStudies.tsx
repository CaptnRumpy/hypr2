import { motion } from 'framer-motion'
import { Section, Button } from '../components/ui'
import { useSEO } from '../lib/seo'

export function CaseStudies() {
  useSEO({
    title: 'Case Studies',
    description: 'Real-world applications of HYPRSTRM data extraction. See how hedge funds, AI labs, marketing agencies, and risk consultancies use our platform.',
    keywords: 'case studies, use cases, hedge fund data, AI training data, influencer marketing, risk intelligence'
  })

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
              THE HALL OF <span className="text-brand-accent glow-text">MIRRORS</span>
            </h1>
            <p className="text-xl text-brand-muted">What People Are Building in the Dark.</p>
            <p className="text-brand-muted mt-6 max-w-2xl mx-auto">
              We generally operate in the shadows. However, for specific high-volume partners, we build bespoke infrastructure. 
              Below are four anonymized case studies derived from Custom Enterprise Solutions we engineered for clients with explicit consent.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Case Study 1 */}
      <Section className="bg-brand-dark border-y border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The "Earnings Whisper" Fund</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black p-4 border border-white/10">
              <div className="text-xs text-brand-muted uppercase mb-1">The Client</div>
              <div className="text-white">A Consumer Discretionary Hedge Fund (Long/Short Equity).</div>
            </div>
            <div className="bg-black p-4 border border-white/10">
              <div className="text-xs text-brand-muted uppercase mb-1">The Engagement</div>
              <div className="text-white">Custom Data Pipeline (Enterprise).</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Challenge</h3>
            <p className="text-brand-muted">Traditional analyst reports on retail brands (e.g., Lululemon, Stanley, Nike) lag by weeks. The fund needed to predict quarterly earnings surprises based on real-time consumer excitement, not just historical sales data.</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Custom Solution</h3>
            <p className="text-brand-muted mb-4">We deployed a dedicated scraping cluster monitoring "Haul" and "Unboxing" hashtags for 50 major retail tickers on TikTok and YouTube Shorts.</p>
            <p className="text-brand-muted mb-4"><strong className="text-white">The Signal:</strong> We engineered a custom metric: "Velocity of Enthusiasm."</p>
            <ul className="space-y-2 text-brand-muted">
              <li><strong className="text-white">ASR (Audio):</strong> Captures sentiment keywords like "obsessed," "dupe," or "returning this" in the spoken review.</li>
              <li><strong className="text-white">Video OCR:</strong> Detects the visible colorways and product variants in the video frame to estimate inventory sell-through rates before the company reports them.</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Execution</h3>
            <p className="text-brand-muted">If negative sentiment for a flagship product spikes 2 weeks before earnings, they (for example) short the stock.</p>
          </div>
          
        </motion.div>
      </Section>

      {/* Case Study 2 */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The "Living" Language Model</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black p-4 border border-white/10">
              <div className="text-xs text-brand-muted uppercase mb-1">The Client</div>
              <div className="text-white">An LLM Foundation Model Lab.</div>
            </div>
            <div className="bg-black p-4 border border-white/10">
              <div className="text-xs text-brand-muted uppercase mb-1">The Engagement</div>
              <div className="text-white">Dedicated GPU Cluster & Whitelabel Feed.</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Challenge</h3>
            <p className="text-brand-muted">Static LLMs sound like encyclopedias, not people. They fail to understand Gen Z slang, new idioms, or viral context (e.g., "skibidi," "rizz") until months after the trend is dead.</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Custom Solution</h3>
            <p className="text-brand-muted mb-4">We architected a Continuous Fine-Tuning Pipeline (CFT) that ingests 10,000 hours of social dialogue daily.</p>
            <p className="text-brand-muted mb-4"><strong className="text-white">Data Source:</strong> Comments and short-form video transcripts from TikTok and X (high-velocity conversational text).</p>
            <div className="bg-black p-4 border border-white/10">
              <p className="text-sm text-brand-muted mb-2"><strong className="text-white">The Pipeline:</strong></p>
              <p className="text-sm text-brand-muted">Step 1: Hyprstrm scrapes trending threads and transcribes new viral videos.</p>
              <p className="text-sm text-brand-muted">Step 2: The data is sanitized (PII removed) and formatted into (Instruction, Response) pairs.</p>
              <p className="text-sm text-brand-muted">Step 3: The "Nightly Build" of their model is RLHF-tuned on this fresh dataset.</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Result</h3>
            <p className="text-brand-muted">Their chatbot understands a viral meme reference ~6 hours after it starts trending, whereas competitors take weeks.</p>
          </div>
          
        </motion.div>
      </Section>

      {/* Case Study 3 */}
      <Section className="bg-brand-dark border-y border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The "Dark Social" ROI Auditor</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black p-4 border border-white/10">
              <div className="text-xs text-brand-muted uppercase mb-1">The Client</div>
              <div className="text-white">A Global Influencer Marketing Agency.</div>
            </div>
            <div className="bg-black p-4 border border-white/10">
              <div className="text-xs text-brand-muted uppercase mb-1">The Engagement</div>
              <div className="text-white">Custom Whitelabel Dashboard.</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Challenge</h3>
            <p className="text-brand-muted">Brands pay influencers for 60 seconds of product placement, but often get 10 seconds of blurry footage. Manual verification of 5,000 videos a month was impossible.</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Custom Solution</h3>
            <p className="text-brand-muted mb-4">We built an automated "Proof of Performance" engine integrated into their internal billing system.</p>
            <p className="text-brand-muted mb-4"><strong className="text-white">Visual Audit:</strong> For every sponsored video uploaded, Hyprstrm scans the frames.</p>
            <div className="bg-black p-4 border border-white/10 mb-4">
              <p className="text-sm text-brand-muted mb-2"><strong className="text-white">The Metric:</strong></p>
              <p className="text-sm text-brand-muted"><strong className="text-white">Logo Presence:</strong> How many seconds was the brand logo clearly visible? (OCR).</p>
              <p className="text-sm text-brand-muted"><strong className="text-white">Audio Mention:</strong> Did they say the required legal disclaimer? (ASR).</p>
            </div>
            <p className="text-brand-muted"><strong className="text-white">The Clawback:</strong> If an influencer agreed to 60 seconds of exposure but only provided 15 seconds, the agency automatically adjusts the payout.</p>
          </div>
          
        </motion.div>
      </Section>

      {/* Case Study 4 */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The Breaking News "Seismograph"</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black p-4 border border-white/10">
              <div className="text-xs text-brand-muted uppercase mb-1">The Client</div>
              <div className="text-white">A Risk Consultancy.</div>
            </div>
            <div className="bg-black p-4 border border-white/10">
              <div className="text-xs text-brand-muted uppercase mb-1">The Engagement</div>
              <div className="text-white">On-Premise Deployment (Private VPC).</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Challenge</h3>
            <p className="text-brand-muted">Mainstream news (CNN/BBC) is 20-30 minutes slower than social media during crises (active shooters, fires, earthquakes). Their corporate security clients need instant alerts.</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-accent mb-4">The Custom Solution</h3>
            <p className="text-brand-muted mb-4">We deployed a "Panic Detection" engine covering 50 major cities, hosted directly on the client's secure cloud.</p>
            <p className="text-brand-muted mb-4"><strong className="text-white">The Trigger:</strong> We don't look for keywords like "Fire" (too much noise). We look for "Cluster Density."</p>
            <div className="bg-black p-4 border border-white/10">
              <p className="text-sm text-brand-muted mb-2"><strong className="text-white">Triangulation:</strong> If 50+ videos are uploaded from a 1km radius within 5 minutes, and the ASR detects high-pitch audio frequencies (screaming, sirens) or keywords like "run," "smoke," or "police," an alert is triggered.</p>
              <p className="text-sm text-brand-muted"><strong className="text-white">Validation:</strong> The system pushes the top 3 videos to a human analyst dashboard instantly for verification before alerting clients.</p>
            </div>
          </div>
          
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-dark border-y border-white/5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Your Own Custom Solution</h2>
          <p className="text-brand-muted mb-12">We provide the raw intelligence. The strategy is up to you.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="mailto:hyprstrm@pm.me" size="lg">
              hyprstrm@pm.me
            </Button>
            <Button to="/docs" variant="secondary" size="lg">
              Read the API Docs
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
