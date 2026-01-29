import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Section, Card } from '../components/ui'

// Pulse animation - draws from left to right once on load
function PulseLine() {
  return (
    <div className="relative w-full h-12 overflow-hidden rounded-lg bg-black/30">
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 400 48" 
        preserveAspectRatio="none"
      >
        {/* Background path (dim) */}
        <path
          d="M0,24 L100,24 L120,24 L140,24 L155,8 L170,40 L185,16 L200,32 L215,24 L280,24 L400,24"
          fill="none"
          stroke="rgba(34, 197, 94, 0.1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Animated path that draws in */}
        <path
          d="M0,24 L100,24 L120,24 L140,24 L155,8 L170,40 L185,16 L200,32 L215,24 L280,24 L400,24"
          fill="none"
          stroke="rgba(34, 197, 94, 0.8)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-line"
          style={{
            strokeDasharray: 600,
            strokeDashoffset: 600,
            filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.6))',
          }}
        />
      </svg>
    </div>
  )
}

// Pulsing dot
function PulsingDot({ color = 'green' }: { color?: 'green' | 'red' }) {
  const colorClasses = color === 'green' 
    ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)]' 
    : 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]'
  
  return (
    <span className="relative flex h-3 w-3">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${color === 'green' ? 'bg-green-400' : 'bg-red-400'}`} />
      <span className={`relative inline-flex rounded-full h-3 w-3 ${colorClasses}`} />
    </span>
  )
}

const declarations = [
  { 
    title: 'NO WARRANTS RECEIVED', 
    desc: 'Zero National Security Letters, FISA court orders, or secret subpoenas.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    title: 'NO GAG ORDERS', 
    desc: 'We are not under any order preventing disclosure of surveillance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  { 
    title: 'NO BACKDOORS', 
    desc: 'No forced modifications to our cryptographic architecture.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  { 
    title: 'NO SEIZURES', 
    desc: 'No hardware or infrastructure confiscated by any authority.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
]

const legalConfirmations = [
  'NSLs under 18 U.S.C. § 2709',
  'FISA Court Orders (Section 702)',
  'USA PATRIOT Act § 215',
  'EU Preservation Orders',
  'Forced Backdoor Implementations',
  'Gag Orders of Any Kind',
]

const verificationSteps = [
  { 
    step: '01', 
    title: 'Check the Status', 
    desc: 'Verify the main status panel shows "ALIVE" with a green indicator.' 
  },
  { 
    step: '02', 
    title: 'Verify the Date', 
    desc: 'Confirm the "Last Update" date is within the past 31 days.' 
  },
  { 
    step: '03', 
    title: 'Review Declarations', 
    desc: 'Each declaration should show NOT_RECEIVED status.' 
  },
  { 
    step: '04', 
    title: 'Monitor Monthly', 
    desc: 'Bookmark this page and check back each month. Silence means compromise.' 
  },
]

export function Canary() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              WARRANT <span className="text-brand-accent">CANARY</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-4">
              A cryptographic commitment to transparency. Updated monthly. If this page goes dark, assume compromise.
            </p>
            <p className="text-sm text-brand-muted/70 max-w-xl mx-auto">
              The term "warrant canary" derives from the historic use of canaries in coal mines to detect dangerous gases. 
              Similarly, our canary signals the safety of our infrastructure.
            </p>
          </motion.div>

          {/* Main Status Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-500/10 to-green-500/20 rounded-2xl blur-xl" />
            
            <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl border border-green-500/20 overflow-hidden">
              {/* Header bar with System Integrity badge */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <span className="text-xs text-brand-muted font-mono">canary_status.sys</span>
                  </div>
                  <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5">
                    <PulsingDot />
                    <span className="text-green-500 text-xs font-mono uppercase tracking-wider">System Integrity Verified</span>
                  </div>
                </div>
                <div className="text-xs text-brand-muted font-mono">
                  {currentTime.toISOString().slice(0, 19).replace('T', ' ')} UTC
                </div>
              </div>

              {/* Mobile System Integrity badge */}
              <div className="md:hidden flex justify-center py-3 border-b border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5">
                  <PulsingDot />
                  <span className="text-green-500 text-xs font-mono uppercase tracking-wider">System Integrity Verified</span>
                </div>
              </div>

              {/* Status content */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Status indicator */}
                  <div className="flex items-center gap-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
                      <div className="relative w-24 h-24 rounded-full border-2 border-green-500/50 flex items-center justify-center bg-green-500/5">
                        <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-5xl md:text-6xl font-black text-green-500 tracking-tight">
                        ALIVE
                      </div>
                      <div className="text-brand-muted font-mono text-sm mt-1">
                        All systems nominal
                      </div>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="flex gap-6">
                    <div className="text-center px-6 py-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-2xl font-bold text-white font-mono">27.01.26</div>
                      <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Last Update</div>
                    </div>
                    <div className="text-center px-6 py-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-2xl font-bold text-white font-mono">27.02.26</div>
                      <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">Next Due</div>
                    </div>
                  </div>
                </div>

                {/* Pulse line */}
                <div className="mt-8">
                  <PulseLine />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* What is a Warrant Canary */}
      <Section className="bg-brand-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              WHAT IS A <span className="text-brand-accent">WARRANT CANARY</span>?
            </h2>
            <p className="text-brand-muted text-center mb-8 max-w-2xl mx-auto">
              Understanding how this transparency mechanism protects you
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">The Legal Mechanism</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Many government agencies can serve companies with secret orders (like National Security Letters) 
                  that come with "gag orders" - legal prohibitions against revealing the order's existence.
                </p>
                <p className="text-brand-muted text-sm leading-relaxed">
                  While we cannot legally say "we received a secret order," we CAN stop saying "we have NOT 
                  received any secret orders." The absence of our regular update IS the message.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">How It Protects You</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  As long as this page updates regularly and continues to state that we have received no 
                  secret orders, you can trust that our infrastructure remains uncompromised by government 
                  surveillance.
                </p>
                <p className="text-brand-muted text-sm leading-relaxed">
                  We update this canary monthly. If an update is missed, or if this page disappears, 
                  you should assume that we have been served with a secret order and act accordingly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Declaration Grid */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-2">
              CURRENT <span className="text-brand-accent">STATUS</span>
            </h2>
            <p className="text-brand-muted">Real-time verification of our operational integrity</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {declarations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="group relative h-full bg-black/40 backdrop-blur border border-white/5 hover:border-green-500/30 rounded-xl p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-white tracking-wide">{item.title}</h3>
                        <PulsingDot />
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

      {/* Stats */}
      <Section className="bg-brand-dark border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              TRANSPARENCY <span className="text-brand-accent">METRICS</span>
            </h2>
            <p className="text-brand-muted text-center mb-12">Lifetime statistics since service inception</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Government Requests', value: '0' },
                { label: 'Subpoenas Received', value: '0' },
                { label: 'User Data Shared', value: '0' },
                { label: 'Security Breaches', value: '0' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-brand-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Terminal Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              FORMAL <span className="text-brand-accent">LEGAL</span> DECLARATIONS
            </h2>
            <p className="text-brand-muted text-center mb-8">Specific negative confirmations as of 27.01.2026</p>
            
            <div className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden font-mono text-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                </div>
                <span className="ml-3 text-brand-muted">verify_canary --formal --all</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 space-y-1">
                <div className="text-brand-muted">
                  <span className="text-green-500">$</span> Hyprstrm and its operators explicitly state:
                </div>
                <div className="text-brand-muted mb-4">
                  <span className="text-green-500">$</span> We have NOT received any of the following...
                </div>
                
                <div className="h-px bg-white/5 my-4" />
                
                {legalConfirmations.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-brand-muted">{item}</span>
                    <span className="text-green-500 font-medium">NOT_RECEIVED</span>
                  </motion.div>
                ))}
                
                <div className="h-px bg-white/5 my-4" />
                
                <div className="flex items-center gap-2 text-green-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  VERIFICATION_COMPLETE :: ALL_CHECKS_PASSED
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Verification Protocol */}
      <Section className="bg-brand-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              VERIFICATION <span className="text-brand-accent">PROTOCOL</span>
            </h2>
            <p className="text-brand-muted text-center mb-8">How to verify our canary status yourself</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {verificationSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-black/40 border border-white/5 hover:border-brand-accent/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                    <span className="text-brand-accent font-bold font-mono">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-brand-muted">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Privacy Architecture */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              PRIVACY <span className="text-brand-accent">ARCHITECTURE</span>
            </h2>
            <p className="text-brand-muted text-center mb-12">Why we cannot betray you, even under duress</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Zero Knowledge',
                  desc: 'No names, addresses, or payment details. Just a wallet address and an anonymized identifier. We cannot identify you because we never collected your identity.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Ephemeral Processing',
                  desc: 'Data flows through RAM and hits your webhook. Nothing persists on our servers. We are a real-time pipeline, not a data warehouse.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Privacy by Design',
                  desc: 'Our architecture is built so we cannot access your data. There are no backdoors, no master keys, no admin overrides. We cannot share what we cannot access.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-8 rounded-xl bg-black/40 border border-white/5 hover:border-brand-accent/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Additional Assurances */}
      <Section className="bg-brand-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              ADDITIONAL <span className="text-brand-accent">ASSURANCES</span>
            </h2>
            <p className="text-brand-muted text-center mb-8">Further commitments to our users</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-black/40 border border-white/5">
                <h3 className="font-bold text-white mb-3">Infrastructure Integrity</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  To our knowledge, no third party (governmental or otherwise) has gained unauthorized access 
                  to our core infrastructure, cryptographic keys, or user database. Our security team 
                  continuously monitors for intrusion attempts.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-black/40 border border-white/5">
                <h3 className="font-bold text-white mb-3">Data Minimization</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Our operational logging practices remain minimal by design. We do not engage in bulk 
                  data retention or user surveillance beyond what is strictly necessary for security 
                  and billing purposes.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-black/40 border border-white/5">
                <h3 className="font-bold text-white mb-3">No Compromised Employees</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  To our knowledge, no current or former employee has been coerced, bribed, or otherwise 
                  compromised into providing unauthorized access to our systems or user information.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-black/40 border border-white/5">
                <h3 className="font-bold text-white mb-3">Code Integrity</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  We have not been required to modify our source code, insert vulnerabilities, or weaken 
                  our cryptographic implementations by any third party, governmental or otherwise.
                </p>
              </div>
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
            <div className="inline-block mb-8">
              <div className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5">
                <span className="text-sm font-mono text-red-500 uppercase tracking-widest">Dead Man's Switch</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IF THE CANARY <span className="text-red-500">STOPS SINGING</span>
            </h2>
            
            <p className="text-brand-muted mb-6 text-lg">
              This page updates on the 27th of every month. If an update is missed without prior notice, 
              or if this page becomes inaccessible, you should assume that we have been compromised.
            </p>
            
            <p className="text-brand-muted mb-10">
              The silence will speak louder than any statement we could make. We will continue to 
              update this page monthly. If we are ever served with a secret order that prohibits 
              us from updating, our silence will be your warning.
            </p>
            
            <div className="inline-block p-8 rounded-2xl bg-black/40 border border-white/5">
              <p className="text-2xl text-white/80 mb-3 font-mono">
                "Privacy is not an option, and it shouldn't be the price we accept for just getting on the Internet."
              </p>
              <p className="text-sm text-brand-accent">
                — Gary Kovacs, Former CEO of Mozilla
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
