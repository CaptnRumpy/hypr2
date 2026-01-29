import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Section, Card } from '../components/ui'

// Animated counter component
function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value])
  
  return <span>{count}</span>
}

// Pulsing status indicator
function StatusPulse() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-40" />
      <div className="relative w-4 h-4 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
    </div>
  )
}

const declarations = [
  { icon: '🔒', title: 'NO WARRANTS', desc: 'Zero National Security Letters, FISA orders, or secret subpoenas received.' },
  { icon: '🤐', title: 'NO GAG ORDERS', desc: 'We are not under any order preventing disclosure of surveillance.' },
  { icon: '🚫', title: 'NO BACKDOORS', desc: 'No forced modifications to our cryptographic architecture.' },
  { icon: '📦', title: 'NO SEIZURES', desc: 'No hardware, assets, or infrastructure confiscated by any authority.' },
]

const legalConfirmations = [
  'NSLs under 18 U.S.C. § 2709',
  'FISA Court Orders (Section 702)',
  'USA PATRIOT Act § 215',
  'EU Preservation Orders',
  'Forced Backdoor Implementations',
  'Gag Orders of Any Kind',
]

export function Canary() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Hero - Status Dashboard */}
      <Section grid className="pt-32 pb-12">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 border border-green-500/30 text-green-500 text-xs font-mono uppercase tracking-widest mb-6">
              System Integrity Verified
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              WARRANT <span className="text-brand-accent glow-text">CANARY</span>
            </h1>
            <p className="text-brand-muted max-w-2xl mx-auto">
              A cryptographic commitment to transparency. If this page goes dark, assume the worst.
            </p>
          </motion.div>

          {/* Main Status Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 rounded-xl blur-xl" />
            <div className="relative glass-card rounded-xl border border-green-500/20 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
                    <div className="absolute inset-2 bg-green-500/30 rounded-full animate-pulse" />
                    <div className="relative text-5xl">🐦</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-black text-green-500 mb-1">
                      ALIVE
                    </div>
                    <div className="text-brand-muted text-sm font-mono">
                      Canary is singing
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-black/50 px-6 py-4 rounded-lg border border-white/5">
                    <div className="text-2xl font-bold text-white font-mono">27.01.26</div>
                    <div className="text-xs text-brand-muted uppercase tracking-wider">Last Update</div>
                  </div>
                  <div className="bg-black/50 px-6 py-4 rounded-lg border border-white/5">
                    <div className="text-2xl font-bold text-white font-mono">27.02.26</div>
                    <div className="text-xs text-brand-muted uppercase tracking-wider">Next Due</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Declaration Cards */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {declarations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative bg-black border border-green-500/20 hover:border-green-500/50 rounded-lg p-6 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-full" />
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <StatusPulse />
                        <span className="text-sm font-bold text-green-500 uppercase tracking-wider">{item.title}</span>
                      </div>
                      <p className="text-sm text-brand-muted">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-brand-dark border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Government Requests', value: 0 },
              { label: 'Subpoenas Received', value: 0 },
              { label: 'User Data Shared', value: 0 },
              { label: 'Compromises', value: 0 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-green-500 mb-2">
                  {mounted ? <AnimatedNumber value={stat.value} /> : stat.value}
                </div>
                <div className="text-xs text-brand-muted uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Legal Confirmations Terminal */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="text-brand-accent">FORMAL</span> NEGATIVE CONFIRMATIONS
            </h2>
            
            <div className="bg-black rounded-xl border border-white/10 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-brand-muted font-mono">canary_verification.sh</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="text-brand-muted">
                  <span className="text-green-500">$</span> ./verify_canary --all-confirmations
                </div>
                <div className="text-brand-muted">Scanning legal request database...</div>
                <div className="h-px bg-white/10 my-4" />
                
                {legalConfirmations.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-500">✓</span>
                    <span className="text-brand-muted">{item}</span>
                    <span className="text-green-500 ml-auto">NOT RECEIVED</span>
                  </motion.div>
                ))}
                
                <div className="h-px bg-white/10 my-4" />
                <div className="text-green-500">
                  <span className="text-brand-muted">Status:</span> ALL CHECKS PASSED
                </div>
                <div className="text-brand-muted">
                  <span className="text-green-500">$</span> <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Why We're Safe */}
      <Section className="bg-brand-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              PLAUSIBLE <span className="text-brand-accent">DENIABILITY</span>
            </h2>
            <p className="text-brand-muted text-center mb-12">Why we can't betray you, even if we wanted to.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '👤',
                  title: 'We Don\'t Know You',
                  desc: 'No names, no addresses, no credit cards. Just a wallet address and an email that looks like keyboard smash.',
                },
                {
                  icon: '💨',
                  title: 'Data Evaporates',
                  desc: 'We\'re a pipeline, not a bucket. Your data hits your webhook and vanishes from our RAM.',
                },
                {
                  icon: '🔐',
                  title: 'Privacy by Design',
                  desc: 'Our architecture is built so we cannot access your data. We can\'t share what we don\'t have.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-brand-muted">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Dead Man's Switch */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-accent/50 via-red-500/50 to-brand-accent/50 mb-8">
              <div className="bg-brand-black rounded-full px-6 py-2">
                <span className="text-sm font-mono text-brand-accent uppercase tracking-widest">Dead Man's Switch</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IF THE CANARY <span className="text-red-500">STOPS SINGING</span>
            </h2>
            
            <p className="text-brand-muted mb-8">
              This page updates monthly. If an update is missed without notice, or if this page disappears—assume compromise. 
              The silence will speak louder than any statement we could make.
            </p>
            
            <div className="glass-card p-8 border border-brand-accent/20 rounded-xl">
              <p className="text-xl italic text-brand-muted mb-4">
                "Fiat justitia ruat caelum."
              </p>
              <p className="text-sm text-brand-accent">
                Let justice be done, though the heavens fall.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
