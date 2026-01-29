import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section, SectionHeader, Card, CodeBlock, Button } from '../components/ui'

const platforms = [
  { name: 'Reddit', path: '/scrapers/reddit', color: '#FF4500' },
  { name: 'X / Twitter', path: '/scrapers/twitter', color: '#1DA1F2' },
  { name: 'TikTok', path: '/scrapers/tiktok', color: '#00F2EA' },
  { name: 'YouTube', path: '/scrapers/youtube', color: '#FF0000' },
  { name: 'Instagram', path: '/scrapers/instagram', color: '#E4405F' },
  { name: 'Twitch', path: '/scrapers/twitch', color: '#9146FF' },
  { name: 'LinkedIn', path: '/scrapers/linkedin', color: '#0077B5' },
  { name: 'Google', path: '/scrapers/google', color: '#4285F4' },
]

const terminalLines = [
  '➜ hyprstrm init --target "tiktok" --query "fashion_de"',
  '# Translating intent to parameters...',
  'ℹ Region: DE | Min_Followers: 100k | Content: "fashion"',
  'ℹ OCR: Enabled | ASR: Enabled',
  '✔ Stream established. Receiving JSON objects via WebSocket...',
]

const features = [
  {
    title: 'Automatic Speech Recognition (ASR)',
    description: 'We transcribe audio from TikToks, YouTube Shorts, and Twitch Clips into searchable text.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Optical Character Recognition (OCR)',
    description: 'We extract text overlays from Instagram Reels, LinkedIn slides, and X images.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'AI Enrichment',
    description: 'Every item is pre-processed with topic tagging, sentiment analysis, and E5 embeddings.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const streamFeatures = [
  {
    title: 'Real-Time Delivery',
    description: 'Receive instant updates via Webhooks or low-latency WebSocket streams.',
  },
  {
    title: 'Smart Deduplication',
    description: 'Built-in Bloom filters and LRU caching ensure you never process the same content twice.',
  },
  {
    title: 'Intelligent Scheduling',
    description: 'Automatically adjust poll intervals based on creator activity levels.',
  },
]

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section grid className="min-h-[90vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs tracking-widest text-brand-accent border border-brand-accent/30 rounded-full">
              THE DATA LAYER FOR AI
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-text mb-6 leading-tight">
              THE UNIVERSAL SOCIAL MEDIA{' '}
              <span className="gradient-text">DATA EXTRACTION</span>{' '}
              ENGINE
            </h1>
            <p className="text-lg text-brand-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Turn public social data into actionable insights. Scrape TikTok, YouTube, Instagram, and Twitch 
              with zero infrastructure headaches. Available as a No-Code Dashboard or High-Performance API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/docs" size="lg">
                Start Building →
              </Button>
              <Button to="/docs" variant="secondary" size="lg">
                View Documentation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <CodeBlock lines={terminalLines} />
          </motion.div>
        </div>
      </Section>

      {/* Platforms Section */}
      <Section>
        <SectionHeader
          badge="INTEGRATIONS"
          title="NATIVE WORKERS FOR EVERY MAJOR ECOSYSTEM"
          description="Stream deeply analyzed social data from Reddit, X, TikTok, and more. We handle the scraping, OCR, ASR, and delivery—you just consume the JSON."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to={platform.path}>
                <Card className="text-center group">
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${platform.color}20` }}
                  >
                    <span style={{ color: platform.color }}>●</span>
                  </div>
                  <span className="text-sm text-brand-text group-hover:text-brand-accent transition-colors">
                    {platform.name}
                  </span>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Smart Setup Section */}
      <Section grid>
        <SectionHeader
          badge="NATURAL LANGUAGE"
          title="CONFIGURE COMPLEX FEEDS IN PLAIN ENGLISH"
          description="Don't waste time reading documentation on complex filter objects. Simply tell our Smart Interpreter what you need."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Card hover={false}>
            <p className="text-brand-accent mb-2">"Track gaming streamers who post about Fortnite daily"</p>
            <p className="text-sm text-brand-muted">
              Auto-configures category: gaming, content_filter: fortnite, poll_interval: 1440.
            </p>
          </Card>
          <Card hover={false}>
            <p className="text-brand-accent mb-2">"Find top fashion creators in Germany with over 100K followers"</p>
            <p className="text-sm text-brand-muted">
              Auto-configures region: DE, followers_min: 100000.
            </p>
          </Card>
        </div>
        <p className="text-center text-xs text-brand-muted mt-8">
          Note: This tool translates your intent into precise API parameters—no GPT integration required on your end.
        </p>
      </Section>

      {/* Deep Content Intelligence */}
      <Section>
        <SectionHeader
          badge="OCR & ASR"
          title="DEEP CONTENT INTELLIGENCE"
          description="We Don't Just Scrape Metadata. We 'Watch' and 'Read' the Content."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card>
                <div className="w-14 h-14 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-muted">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* High-Throughput Streams */}
      <Section grid>
        <SectionHeader
          badge="REAL-TIME"
          title="BUILT FOR HIGH-THROUGHPUT STREAMS"
          description="Stop polling APIs. We push normalized data directly to your infrastructure."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {streamFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-brand-text mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-muted">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Dashboard Preview */}
      <Section grid>
        <SectionHeader
          badge="NO-CODE DASHBOARD"
          title="CONFIGURE VISUALLY, STREAM INSTANTLY"
          description="Don't want to write code? Use our intuitive dashboard to set up data streams in minutes."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent/10 via-brand-accent/5 to-brand-accent/10 rounded-2xl blur-2xl" />
          
          {/* Dashboard mockup */}
          <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                </div>
                <span className="ml-3 text-xs text-brand-muted font-mono">dashboard.hyprstrm.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-500 rounded border border-green-500/20">LIVE</span>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Stats */}
                <div className="bg-white/[0.02] rounded-lg p-4 border border-white/5">
                  <div className="text-xs text-brand-muted mb-1">ACTIVE STREAMS</div>
                  <div className="text-2xl font-bold text-white">12</div>
                </div>
                <div className="bg-white/[0.02] rounded-lg p-4 border border-white/5">
                  <div className="text-xs text-brand-muted mb-1">ITEMS TODAY</div>
                  <div className="text-2xl font-bold text-brand-accent">24,847</div>
                </div>
                <div className="bg-white/[0.02] rounded-lg p-4 border border-white/5">
                  <div className="text-xs text-brand-muted mb-1">TOKENS REMAINING</div>
                  <div className="text-2xl font-bold text-white">2.4M</div>
                </div>
              </div>
              
              {/* Stream list */}
              <div className="bg-white/[0.02] rounded-lg border border-white/5 overflow-hidden">
                <div className="px-4 py-2 bg-white/[0.02] border-b border-white/5 text-xs text-brand-muted">
                  ACTIVE DATA STREAMS
                </div>
                <div className="divide-y divide-white/5">
                  {[
                    { platform: 'TikTok', query: 'fashion_de', items: '8,432', status: 'streaming' },
                    { platform: 'Reddit', query: 'r/cryptocurrency', items: '12,201', status: 'streaming' },
                    { platform: 'YouTube', query: 'tech_reviews', items: '4,214', status: 'streaming' },
                  ].map((stream) => (
                    <div key={stream.query} className="flex items-center justify-between px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <div>
                          <div className="text-sm text-white">{stream.platform}</div>
                          <div className="text-xs text-brand-muted">{stream.query}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-brand-accent">{stream.items}</div>
                        <div className="text-xs text-brand-muted">items</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <p className="text-center text-sm text-brand-muted mt-6">
          Create streams, monitor usage, and download data—all from your browser.
        </p>
      </Section>

      {/* AI/ML Section */}
      <Section>
        <SectionHeader
          badge="AI & ML"
          title="FUEL YOUR MODELS WITH REAL-WORLD DATA"
          description="The highest quality multimodal datasets for LLMs, Computer Vision, and Predictive Analytics—delivered via API."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <Card hover={false}>
            <h3 className="text-xl font-semibold text-brand-text mb-4">The "Clean Data" Advantage</h3>
            <p className="text-brand-muted mb-4">Data scientists spend 80% of their time cleaning data. We fix that.</p>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent">→</span>
                <span><strong className="text-brand-text">Structured JSON:</strong> No parsing HTML or fighting DOM changes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent">→</span>
                <span><strong className="text-brand-text">Noise Reduction:</strong> We filter out bot traffic and system messages.</span>
              </li>
            </ul>
          </Card>
          <Card hover={false}>
            <h3 className="text-xl font-semibold text-brand-text mb-4">RAG (Retrieval-Augmented Generation) Ready</h3>
            <p className="text-brand-muted mb-4">Give your AI current context.</p>
            <p className="text-sm text-brand-muted">
              Feed your LLM real-time social sentiment from X and Reddit to answer questions about breaking news or live trends, 
              bridging the gap between your model's training cutoff and "now."
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section grid className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 glow-text">
            READY TO BUILD YOUR STREAM?
          </h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Stop fighting with proxies, CAPTCHAs, and constantly changing HTML structures. Get the data you need in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/tokenomics" size="lg">
              Get Started Free
            </Button>
            <Button href="mailto:hyprstrm@pm.me" variant="secondary" size="lg">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
