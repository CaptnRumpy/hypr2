import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Section, Card } from '../components/ui'

// Animated heartbeat line
function HeartbeatLine() {
  return (
    <svg className="w-full h-12" viewBox="0 0 400 50" preserveAspectRatio="none">
      <motion.path
        d="M0,25 L80,25 L90,25 L100,10 L110,40 L120,15 L130,35 L140,25 L160,25 L400,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-green-500"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
              <PulsingDot />
              <span className="text-green-500 text-sm font-mono uppercase tracking-wider">System Integrity Verified</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              WARRANT <span className="text-brand-accent">CANARY</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              A cryptographic commitment to transparency. Updated monthly. If this page goes dark, assume compromise.
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
              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <span className="text-xs text-brand-muted font-mono">canary_status.sys</span>
                </div>
                <div className="text-xs text-brand-muted font-mono">
                  {currentTime.toISOString().slice(0, 19).replace('T', ' ')} UTC
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

                {/* Heartbeat line */}
                <div className="mt-8 opacity-50">
                  <HeartbeatLine />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Declaration Grid */}
      <Section>
        <div className="max-w-6xl mx-auto">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Government Requests', value: '0' },
              { label: 'Subpoenas Received', value: '0' },
              { label: 'User Data Shared', value: '0' },
              { label: 'Compromises', value: '0' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-brand-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
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
              FORMAL <span className="text-brand-accent">NEGATIVE</span> CONFIRMATIONS
            </h2>
            <p className="text-brand-muted text-center mb-8">Legal declarations as of the last update</p>
            
            <div className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden font-mono text-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                </div>
                <span className="ml-3 text-brand-muted">verify_canary --all</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 space-y-1">
                <div className="text-brand-muted">
                  <span className="text-green-500">$</span> Scanning legal request database...
                </div>
                <div className="text-brand-muted mb-4">
                  <span className="text-green-500">$</span> Running verification protocol...
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
                  ALL_CHECKS_PASSED
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Privacy Architecture */}
      <Section className="bg-brand-dark border-y border-white/5">
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
                  desc: 'No names, addresses, or payment details. Just a wallet address and an anonymized identifier.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Ephemeral Processing',
                  desc: 'Data flows through RAM and hits your webhook. Nothing persists. We are a pipeline, not storage.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Privacy by Design',
                  desc: 'Our architecture is built so we cannot access your data. We cannot share what we do not have.',
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
                  className="text-center p-8 rounded-xl bg-black/40 border border-white/5"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-muted">{item.desc}</p>
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
            <div className="inline-block mb-8">
              <div className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5">
                <span className="text-sm font-mono text-red-500 uppercase tracking-widest">Dead Man's Switch</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IF THE CANARY <span className="text-red-500">STOPS SINGING</span>
            </h2>
            
            <p className="text-brand-muted mb-10 text-lg">
              This page updates monthly. If an update is missed without notice, or if this page disappears—assume compromise. The silence will speak louder than any statement.
            </p>
            
            <div className="inline-block p-8 rounded-2xl bg-black/40 border border-white/5">
              <p className="text-2xl italic text-white/80 mb-3">
                "Fiat justitia ruat caelum"
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
