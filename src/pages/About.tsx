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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'No-KYC Onboarding',
    description: 'Use our service with nothing but an email and a crypto wallet.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Anonymous Payments',
    description: 'We accept Monero, Bitcoin, and other privacy-preserving cryptocurrencies.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ephemeral Logs',
    description: 'Request logs are automatically purged after 72 hours.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
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
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0">
                  {feature.icon}
                </div>
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
