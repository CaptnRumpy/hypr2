import { motion } from 'framer-motion'
import { Section, SectionHeader, Card, Button, CodeBlock } from './ui'

interface Feature {
  title: string
  description: string
}

interface ScraperPageProps {
  platform: string
  tagline: string
  description: string
  color: string
  features: Feature[]
  useCases: string[]
  codeExample: string[]
}

export function ScraperPage({
  platform,
  tagline,
  description,
  color,
  features,
  useCases,
  codeExample,
}: ScraperPageProps) {
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
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
              style={{ backgroundColor: `${color}20` }}
            >
              <span className="text-4xl" style={{ color }}>●</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
              {platform} <span className="gradient-text">SCRAPER API</span>
            </h1>
            <p className="text-xl text-brand-accent mb-4">{tagline}</p>
            <p className="text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button to="/docs" size="lg">
                View Documentation
              </Button>
              <Button to="/tokenomics" variant="secondary" size="lg">
                See Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader
          badge="CAPABILITIES"
          title="WHAT YOU CAN EXTRACT"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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

      {/* Code Example */}
      <Section grid>
        <SectionHeader
          badge="QUICK START"
          title="START SCRAPING IN SECONDS"
        />
        <div className="max-w-3xl mx-auto">
          <CodeBlock lines={codeExample} />
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <SectionHeader
          badge="USE CASES"
          title="WHAT PEOPLE BUILD"
        />
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="flex items-center gap-3">
                <span className="text-brand-accent">→</span>
                <span className="text-brand-text">{useCase}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section grid className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-brand-text mb-4">
            READY TO START SCRAPING {platform.toUpperCase()}?
          </h2>
          <p className="text-brand-muted mb-8">
            Get your API keys and start extracting data in minutes.
          </p>
          <Button to="/docs" size="lg">
            Get API Keys
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
