import { motion } from 'framer-motion'
import { Section, SectionHeader, Card } from '../components/ui'

const principles = [
  {
    title: 'Adversarial Engineering',
    description: 'We design under the assumption that platforms will actively resist us. Our systems are built to adapt, not to rely on fragile workarounds.',
  },
  {
    title: 'Data Minimization',
    description: 'We collect only what is necessary to provide our service. We don\'t build profiles on our users.',
  },
  {
    title: 'Transparency',
    description: 'Our Canary page is a public commitment. If we are ever compromised, you will know.',
  },
]

const trustFeatures = [
  {
    icon: '🔐',
    title: 'No-KYC Onboarding',
    description: 'Use our service with nothing but an email and a crypto wallet.',
  },
  {
    icon: '💳',
    title: 'Anonymous Payments',
    description: 'We accept Monero, Bitcoin, and other privacy-preserving cryptocurrencies.',
  },
  {
    icon: '📝',
    title: 'Ephemeral Logs',
    description: 'Request logs are automatically purged after 72 hours.',
  },
  {
    icon: '🛡️',
    title: 'Zero User Data Storage',
    description: 'The data you scrape is streamed directly to you. We don\'t keep copies.',
  },
]

export function About() {
  return (
    <>
      {/* Hero */}
      <Section grid className="min-h-[60vh] flex items-center">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">
              WE ARE THE <span className="gradient-text">SIGNAL</span> IN THE NOISE
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed">
              Hyprstrm is not a startup. It's an infrastructure utility. We built the data layer that fuels 
              intelligence agencies, hedge funds, and the next generation of AI models. We are not in the business 
              of tracking you—we are in the business of tracking public social data for you.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <SectionHeader
          badge="PHILOSOPHY"
          title="OUR CORE PRINCIPLES"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card>
                <h3 className="text-xl font-semibold text-brand-text mb-3">{principle.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{principle.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Trust Architecture */}
      <Section grid>
        <SectionHeader
          badge="TRUST ARCHITECTURE"
          title="BUILT FOR PARANOIA"
          description="We assume you have good reasons for valuing your privacy. We designed our entire stack around that assumption."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="flex gap-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-text mb-1">{feature.title}</h3>
                  <p className="text-sm text-brand-muted">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Legal Fortress */}
      <Section>
        <SectionHeader
          badge="LEGAL"
          title="THE LEGAL FORTRESS"
        />
        <Card hover={false} className="max-w-3xl mx-auto">
          <p className="text-brand-muted leading-relaxed mb-4">
            Our operational structure is designed for resilience. We operate across multiple jurisdictions 
            with no single point of legal failure. Our core infrastructure is hosted in privacy-respecting 
            regions with strong data protection laws.
          </p>
          <p className="text-brand-muted leading-relaxed">
            We do not comply with requests from governments or corporations seeking to identify our users 
            or access their scraped data. We have structured our systems so that we often cannot comply, 
            even if compelled.
          </p>
        </Card>
      </Section>

      {/* Team */}
      <Section grid>
        <SectionHeader
          badge="THE TEAM"
          title="GHOSTS IN THE MACHINE"
        />
        <Card hover={false} className="max-w-3xl mx-auto text-center">
          <p className="text-brand-muted leading-relaxed">
            We are a distributed, pseudonymous team of engineers, data scientists, and former intelligence 
            professionals. We don't do press tours. We don't have a headquarters. We build infrastructure 
            that works, and we let the results speak for themselves.
          </p>
          <p className="text-brand-accent mt-6 font-semibold">
            hyprstrm@pm.me
          </p>
        </Card>
      </Section>
    </>
  )
}
