import { motion } from 'framer-motion'
import { Section, SectionHeader, Card, Button } from '../components/ui'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    tokens: '5,000',
    features: [
      '5,000 tokens/month',
      'Basic platforms (Reddit, X)',
      'Standard delivery',
      'Community support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/month',
    tokens: '100,000',
    features: [
      '100,000 tokens/month',
      'All platforms',
      'OCR & ASR included',
      'Webhook delivery',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$299',
    period: '/month',
    tokens: '500,000',
    features: [
      '500,000 tokens/month',
      'All platforms + priority',
      'Full AI enrichment',
      'WebSocket streams',
      'Priority support',
      '5-min poll intervals',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Enterprise',
    price: '$899',
    period: '/month',
    tokens: '2,000,000',
    features: [
      '2M+ tokens/month',
      'Dedicated workers',
      'Custom integrations',
      '1-min poll intervals',
      'SLA guarantee',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const tokenRates = [
  { operation: 'Basic Scrape (metadata only)', cost: '1 token' },
  { operation: 'Full Scrape (with media URLs)', cost: '2 tokens' },
  { operation: 'OCR Processing (per image)', cost: '5 tokens' },
  { operation: 'ASR Processing (per minute)', cost: '10 tokens' },
  { operation: 'Sentiment Analysis', cost: '3 tokens' },
  { operation: 'E5 Embedding Generation', cost: '5 tokens' },
]

export function Tokenomics() {
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

      {/* Pricing Tiers */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                hover={false}
                className={`h-full flex flex-col ${
                  tier.highlighted ? 'border-brand-accent/50 ring-1 ring-brand-accent/20' : ''
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs bg-brand-accent text-white rounded-full">
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
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-brand-muted">
                      <span className="text-brand-accent">✓</span>
                      {feature}
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

      {/* Token Rates */}
      <Section grid>
        <SectionHeader
          badge="TOKEN CONSUMPTION"
          title="WHAT COSTS WHAT"
          description="Transparent pricing for every operation. No hidden multipliers."
        />
        <Card hover={false} className="max-w-2xl mx-auto overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 text-sm text-brand-muted">Operation</th>
                <th className="text-right py-3 text-sm text-brand-muted">Cost</th>
              </tr>
            </thead>
            <tbody>
              {tokenRates.map((rate) => (
                <tr key={rate.operation} className="border-b border-white/5">
                  <td className="py-3 text-sm text-brand-text">{rate.operation}</td>
                  <td className="py-3 text-sm text-brand-accent text-right font-semibold">{rate.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          badge="FAQ"
          title="COMMON QUESTIONS"
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: 'Do tokens expire?',
              a: 'No. Purchased tokens never expire. Monthly tier tokens reset each billing cycle.',
            },
            {
              q: 'Can I pay anonymously?',
              a: 'Yes. We accept Monero (XMR), Bitcoin (BTC), and other privacy-focused cryptocurrencies.',
            },
            {
              q: 'What happens if I run out of tokens?',
              a: 'Your streams pause gracefully. No overage charges. Top up when ready.',
            },
          ].map((faq) => (
            <Card key={faq.q} hover={false}>
              <h4 className="text-brand-text font-semibold mb-2">{faq.q}</h4>
              <p className="text-sm text-brand-muted">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
