import { motion } from 'framer-motion'
import { Section, SectionHeader, Card, Button } from '../components/ui'
import { useSEO } from '../lib/seo'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    tokens: '5,000',
    tokenNote: 'Trial Capacity',
    features: [
      { text: 'Data Scraping (Metadata Only)', included: true },
      { text: 'Creator Ingestion (10/day)', included: true },
      { text: 'Data Delivery (10/item)', included: true },
      { text: 'Static OCR', included: false },
      { text: 'Video OCR', included: false },
      { text: 'Audio ASR', included: false },
      { text: 'Topic Modeling', included: false },
      { text: 'Embeddings', included: false },
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/month',
    tokens: '500,000',
    tokenNote: 'Standard Rate',
    features: [
      { text: 'Data Scraping', included: true },
      { text: 'Image OCR (Static Text)', included: true },
      { text: 'Creator Ingestion (10/day)', included: true },
      { text: 'Data Delivery (10/item)', included: true },
      { text: 'Static OCR (50/image)', included: true },
      { text: 'Video OCR', included: false },
      { text: 'Audio ASR', included: false },
      { text: 'Embeddings', included: false },
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$299',
    period: '/month',
    tokens: '3,000,000',
    tokenNote: 'Save ~25%',
    features: [
      { text: 'Video Intelligence (ASR + Video OCR)', included: true },
      { text: 'Topic Modeling', included: true },
      { text: 'Static OCR (50/image)', included: true },
      { text: 'Video OCR (100+ tokens)', included: true },
      { text: 'Audio ASR (250+ tokens)', included: true },
      { text: 'Creator Ingestion (10/day)', included: true },
      { text: 'Data Delivery (10/item)', included: true },
      { text: 'Vector Embeddings', included: false },
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Enterprise',
    price: '$899',
    period: '/month',
    tokens: '15,000,000',
    tokenNote: 'Save ~50%',
    features: [
      { text: 'Full AI Suite', included: true },
      { text: 'Vector Embeddings (RAG)', included: true },
      { text: 'Priority GPU Access', included: true },
      { text: 'All Video Intelligence', included: true },
      { text: 'Topic Modeling', included: true },
      { text: 'Embeddings (20/item)', included: true },
      { text: 'Dedicated Support', included: true },
      { text: 'Custom Integrations', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const fixedCosts = [
  {
    name: 'Creator Ingestion',
    cost: '10 Tokens',
    unit: '/ day',
    description: 'Maintains the "Watch" on a specific profile to detect new posts.',
  },
  {
    name: 'Discovery Search',
    cost: '50 Tokens',
    unit: '/ query',
    description: 'Usage of the Search API or Smart Query to find new influencers.',
  },
]

const variableCosts = [
  {
    name: 'Data Delivery',
    cost: '10 Tokens',
    unit: '/ item',
    description: 'Pushing the clean JSON to your Webhook or WebSocket.',
  },
  {
    name: 'Embeddings',
    cost: '20 Tokens',
    unit: '/ item',
    description: 'Generating E5 Vectors for semantic search (Enterprise Only).',
    enterprise: true,
  },
  {
    name: 'Static OCR',
    cost: '50 Tokens',
    unit: '/ image',
    description: 'Extracting text from Instagram posts, LinkedIn slides, or X images.',
  },
]

const videoCosts = [
  {
    name: 'Video OCR (Visual Text)',
    base: '100 Tokens',
    baseNote: 'First 0–30s',
    overage: '+100 Tokens',
    overageNote: 'Per extra 30s',
  },
  {
    name: 'Audio ASR (Speech-to-Text)',
    base: '250 Tokens',
    baseNote: 'First 0–30s',
    overage: '+250 Tokens',
    overageNote: 'Per extra 30s',
  },
]

const tokenPacks = [
  {
    name: 'Starter Pack',
    price: '$19',
    tokens: '50,000',
    perToken: '$0.00038',
    capacity: '~1.6 Hours of Video',
    tierNote: null,
  },
  {
    name: 'Growth Pack',
    price: '$79',
    tokens: '500,000',
    perToken: '$0.00016',
    capacity: '~16 Hours of Video',
    tierNote: null,
  },
  {
    name: 'Boost Pack',
    price: '$149',
    tokens: '1,000,000',
    perToken: '$0.00015',
    capacity: '~33 Hours of Video',
    tierNote: null,
  },
  {
    name: 'Scale Pack',
    price: '$299',
    tokens: '3,000,000',
    perToken: '$0.00010',
    capacity: '~100 Hours of Video',
    tierNote: 'Business+',
  },
  {
    name: 'Volume Pack',
    price: '$499',
    tokens: '6,000,000',
    perToken: '$0.00008',
    capacity: '~200 Hours of Video',
    tierNote: 'Business+',
  },
  {
    name: 'Enterprise Pack',
    price: '$999',
    tokens: '15,000,000',
    perToken: '$0.00006',
    capacity: '~500 Hours of Video',
    tierNote: 'Enterprise',
  },
]

export function Tokenomics() {
  useSEO({
    title: 'Pricing & Tokenomics',
    description: 'HYPRSTRM pricing plans and token economy. Free tier available. Pay-as-you-go with transparent token costs. Accept crypto payments including Monero and Bitcoin.',
    keywords: 'pricing, API pricing, token economy, crypto payments, Monero, Bitcoin, subscription plans'
  })

  return (
    <>
      {/* Hero */}
      <Section grid className="pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs tracking-widest text-brand-accent border border-brand-accent/30 rounded-full">
              PRICING
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
              THE HYPRSTRM <span className="gradient-text">TOKEN ECONOMY</span>
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed">
              Fair, Transparent, and Built for Scale. No hidden fees. No surprise charges. 
              Just predictable, prepaid access to the world's data.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Subscription Tiers */}
      <Section>
        <SectionHeader
          badge="SUBSCRIPTION TIERS"
          title="CHOOSE YOUR PLAN"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <Card
                hover={false}
                className={`h-full flex flex-col ${
                  tier.highlighted ? 'border-brand-accent/50 ring-1 ring-brand-accent/20' : ''
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs bg-brand-accent text-white rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-brand-text mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-brand-text">{tier.price}</span>
                    <span className="text-brand-muted">{tier.period}</span>
                  </div>
                  <p className="text-sm text-brand-accent mt-2">{tier.tokens} tokens</p>
                  <p className="text-xs text-brand-muted">{tier.tokenNote}</p>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2 text-sm">
                      <span className={feature.included ? 'text-green-400' : 'text-red-400/50'}>
                        {feature.included ? '✓' : '✗'}
                      </span>
                      <span className={feature.included ? 'text-brand-muted' : 'text-brand-muted/50'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  to={tier.name === 'Enterprise' ? undefined : '/docs'}
                  href={tier.name === 'Enterprise' ? 'mailto:hyprstrm@pm.me' : undefined}
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Fixed Monitoring Costs */}
      <Section grid>
        <SectionHeader
          badge="FIXED COSTS"
          title="MONITORING COSTS"
          description="Daily costs to maintain a connection to a target."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {fixedCosts.map((cost, index) => (
            <motion.div
              key={cost.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover={false} className="h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-brand-text">{cost.name}</h3>
                </div>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-brand-accent">{cost.cost}</span>
                  <span className="text-brand-muted text-sm"> {cost.unit}</span>
                </div>
                <p className="text-sm text-brand-muted">{cost.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Variable Compute Costs */}
      <Section>
        <SectionHeader
          badge="VARIABLE COSTS"
          title="COMPUTE COSTS"
          description="Applied per item only when content is processed."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {variableCosts.map((cost, index) => (
            <motion.div
              key={cost.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover={false} className="h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-brand-text">{cost.name}</h3>
                  {cost.enterprise && (
                    <span className="text-xs px-2 py-1 bg-brand-accent/20 text-brand-accent rounded">
                      Enterprise
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-brand-accent">{cost.cost}</span>
                  <span className="text-brand-muted text-sm"> {cost.unit}</span>
                </div>
                <p className="text-sm text-brand-muted">{cost.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Video Analysis Costs */}
      <Section grid>
        <SectionHeader
          badge="VIDEO ANALYSIS"
          title="HIGH-PERFORMANCE VIDEO COSTS"
          description="Costs scale based on video duration."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {videoCosts.map((cost, index) => (
            <motion.div
              key={cost.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover={false}>
                <h3 className="text-lg font-semibold text-brand-text mb-4">{cost.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-brand-gray/50 rounded">
                    <div>
                      <span className="text-brand-accent font-bold">{cost.base}</span>
                      <p className="text-xs text-brand-muted">{cost.baseNote}</p>
                    </div>
                    <span className="text-xs text-brand-muted">BASE</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-brand-gray/50 rounded">
                    <div>
                      <span className="text-brand-accent font-bold">{cost.overage}</span>
                      <p className="text-xs text-brand-muted">{cost.overageNote}</p>
                    </div>
                    <span className="text-xs text-brand-muted">OVERAGE</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Token Packs */}
      <Section>
        <SectionHeader
          badge="TOP-UP PACKS"
          title="TOKEN PACKS"
          description="One-time purchases to add capacity. Tokens never expire."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokenPacks.map((pack, index) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="text-center relative">
                {pack.tierNote && (
                  <span className="absolute -top-2 right-4 px-2 py-0.5 text-xs bg-brand-accent/20 text-brand-accent rounded border border-brand-accent/30">
                    {pack.tierNote}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-brand-text mb-2">{pack.name}</h3>
                <div className="text-3xl font-bold text-brand-accent mb-1">{pack.price}</div>
                <div className="text-brand-text font-semibold mb-4">{pack.tokens} tokens</div>
                <div className="space-y-1 text-sm text-brand-muted">
                  <p>{pack.perToken} per token</p>
                  <p>{pack.capacity}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Tier Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <Card hover={false} className="border-white/10">
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tier-Based Pack Pricing
            </h4>
            <div className="space-y-3 text-sm text-brand-muted">
              <p>
                <strong className="text-white">Scale Pack & Volume Pack:</strong> Discounted per-token rates apply only to 
                <span className="text-brand-accent"> Business</span> and <span className="text-brand-accent">Enterprise</span> subscribers. 
                Pro users purchasing these packs pay the Growth Pack rate ($0.00016/token).
              </p>
              <p>
                <strong className="text-white">Enterprise Pack:</strong> Maximum discount available exclusively to 
                <span className="text-brand-accent"> Enterprise</span> subscribers. Business users pay the Scale Pack rate ($0.00010/token). 
                Pro users pay the Growth Pack rate ($0.00016/token).
              </p>
              <p className="text-xs text-brand-muted/70 pt-2 border-t border-white/5">
                This ensures fair pricing aligned with your subscription commitment. Higher tiers unlock better rates on bulk purchases.
              </p>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section grid>
        <SectionHeader
          badge="FAQ"
          title="COMMON QUESTIONS"
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: 'Do tokens expire?',
              a: 'Purchased token packs never expire. Monthly tier tokens reset each billing cycle.',
            },
            {
              q: 'Can I pay anonymously?',
              a: 'Yes. We accept Monero (XMR), Bitcoin (BTC), and other privacy-focused cryptocurrencies.',
            },
            {
              q: 'What happens if I run out of tokens?',
              a: 'Your streams pause gracefully. No overage charges. Top up when ready.',
            },
            {
              q: 'Can I upgrade mid-cycle?',
              a: 'Yes. You can upgrade anytime and your new tokens are added immediately. Downgrades take effect next billing cycle.',
            },
            {
              q: 'What counts as "video duration"?',
              a: 'We charge based on the actual video length. A 45-second TikTok would cost the base rate (0-30s) plus one overage increment (30-60s).',
            },
            {
              q: 'Why do pack prices vary by subscription tier?',
              a: 'Bulk token packs reward committed subscribers. Higher subscription tiers unlock lower per-token rates on Scale, Volume, and Enterprise packs.',
            },
          ].map((faq) => (
            <Card key={faq.q} hover={false}>
              <h4 className="text-brand-text font-semibold mb-2">{faq.q}</h4>
              <p className="text-sm text-brand-muted">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-brand-text mb-4">
            READY TO GET STARTED?
          </h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Start with the free tier. Upgrade when you need more power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/docs" size="lg">
              Start Free
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
