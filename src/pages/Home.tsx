import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section, SectionHeader, Card, CodeBlock, Button } from '../components/ui'
import { useSEO } from '../lib/seo'

const platforms = [
  { 
    name: 'Reddit', 
    path: '/scrapers/reddit', 
    color: '#FF4500',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    )
  },
  { 
    name: 'X / Twitter', 
    path: '/scrapers/twitter', 
    color: '#1DA1F2',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  { 
    name: 'TikTok', 
    path: '/scrapers/tiktok', 
    color: '#00F2EA',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    )
  },
  { 
    name: 'YouTube', 
    path: '/scrapers/youtube', 
    color: '#FF0000',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    path: '/scrapers/instagram', 
    color: '#E4405F',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
      </svg>
    )
  },
  { 
    name: 'Twitch', 
    path: '/scrapers/twitch', 
    color: '#9146FF',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    path: '/scrapers/linkedin', 
    color: '#0077B5',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    name: 'Google', 
    path: '/scrapers/google', 
    color: '#4285F4',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    )
  },
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
  useSEO({
    keywords: 'social media scraper, data extraction, TikTok scraper, YouTube scraper, Instagram scraper, Reddit scraper, API, web scraping, OCR, ASR'
  })

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
              Turn public social data into actionable insights. Scrape TikTok, YouTube, Instagram, Google, 
              and more—with zero infrastructure headaches. No coding required: use our visual dashboard, 
              or integrate via our High-Performance API.
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
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${platform.color}20`, color: platform.color }}
                  >
                    {platform.icon}
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
