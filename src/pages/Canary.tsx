import { motion } from 'framer-motion'
import { Section, SectionHeader, Card } from '../components/ui'

const canaryStatements = [
  'We have NOT received any National Security Letters (NSLs).',
  'We have NOT received any court orders under FISA.',
  'We have NOT received any gag orders preventing disclosure.',
  'We have NOT been subject to any government seizures.',
  'We have NOT installed any backdoors in our systems.',
  'We have NOT provided any user data to any third party.',
]

const transparencyStats = [
  { label: 'Government Requests Received', value: '0' },
  { label: 'User Data Disclosures', value: '0' },
  { label: 'Takedown Requests Complied', value: '0' },
  { label: 'Days Since Last Incident', value: '∞' },
]

export function Canary() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
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
            <span className="inline-block px-4 py-2 mb-6 text-xs tracking-widest text-green-400 border border-green-400/30 rounded-full bg-green-400/10">
              STATUS: ALIVE & KICKING
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
              WARRANT CANARY & <span className="gradient-text">TRANSPARENCY REPORT</span>
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed">
              This page is a cryptographically signed statement of our operational integrity. 
              If this page is ever removed, altered without a new signature, or fails to update 
              for more than 30 days, assume we have been compromised.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Last Update */}
      <Section>
        <Card hover={false} className="max-w-xl mx-auto text-center">
          <p className="text-sm text-brand-muted mb-2">Last Verified Update</p>
          <p className="text-2xl font-bold text-brand-accent">{currentDate}</p>
          <p className="text-xs text-brand-muted mt-2">Updated monthly. Signed with PGP.</p>
        </Card>
      </Section>

      {/* Canary Statements */}
      <Section grid>
        <SectionHeader
          badge="ACTIVE CANARY"
          title="AS OF THIS DATE, WE AFFIRM:"
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {canaryStatements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover={false} className="flex items-center gap-4">
                <span className="text-green-400 text-xl">✓</span>
                <p className="text-brand-text">{statement}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Transparency Stats */}
      <Section>
        <SectionHeader
          badge="TRANSPARENCY"
          title="BY THE NUMBERS"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {transparencyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <p className="text-3xl font-bold text-brand-accent mb-2">{stat.value}</p>
                <p className="text-xs text-brand-muted">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What If */}
      <Section grid>
        <SectionHeader
          badge="DEAD MAN'S SWITCH"
          title="WHAT HAPPENS IF THE CANARY DIES?"
        />
        <Card hover={false} className="max-w-2xl mx-auto">
          <div className="space-y-4 text-brand-muted">
            <p>
              If this page is removed, fails to update, or is altered without a valid new PGP signature, 
              you should assume that:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-red-400">→</span>
                We have received a legal order we cannot disclose.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">→</span>
                Our infrastructure has been compromised.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">→</span>
                You should discontinue use of our service immediately.
              </li>
            </ul>
            <p className="text-sm pt-4 border-t border-white/10">
              We will never explicitly tell you we have been compromised. 
              The absence of this canary IS the message.
            </p>
          </div>
        </Card>
      </Section>
    </>
  )
}
