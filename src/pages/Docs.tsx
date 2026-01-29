import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Section, Button, Card } from '../components/ui'
import { API_LAUNCH_DATE, getCountdown } from '../lib/dates'

export function Docs() {
  const [countdown, setCountdown] = useState(getCountdown(API_LAUNCH_DATE))

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(API_LAUNCH_DATE))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const countdownItems = [
    { value: String(countdown.days).padStart(2, '0'), label: 'DAYS' },
    { value: String(countdown.hours).padStart(2, '0'), label: 'HOURS' },
    { value: String(countdown.mins).padStart(2, '0'), label: 'MINS' },
    { value: String(countdown.secs).padStart(2, '0'), label: 'SECS' },
  ]

  return (
    <Section grid className="min-h-[80vh] flex items-center">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs tracking-widest text-brand-accent border border-brand-accent/30 rounded-full">
            DOCUMENTATION
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">
            API DOCUMENTATION
          </h1>
          
          {/* Operating Status */}
          <Card hover={false} className="mb-8 text-left border-green-500/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Currently in Private Beta</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">
                  We're actively working with select partners on high-volume data pipelines. 
                  If you have enterprise-scale needs (100M+ items/month), we'd love to hear from you.
                </p>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Public API access is coming soon. In the meantime, reach out and we'll see how we can help 
                  with your specific use case.
                </p>
              </div>
            </div>
          </Card>

          <p className="text-lg text-brand-muted mb-8 leading-relaxed">
            We're putting the finishing touches on our self-serve documentation. 
            Want early access? Let's talk.
          </p>

          {/* Countdown Timer */}
          <div className="glass-card rounded-lg p-8 mb-8">
            <p className="text-sm text-brand-muted mb-4 uppercase tracking-wider">Public API Launch</p>
            <div className="grid grid-cols-4 gap-4">
              {countdownItems.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-brand-accent mb-2 font-mono tabular-nums">
                    {item.value}
                  </div>
                  <div className="text-xs text-brand-muted tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:hyprstrm@pm.me?subject=API%20Access%20Inquiry" size="lg">
              Get in Touch
            </Button>
            <Button to="/" variant="secondary" size="lg">
              Back to Home
            </Button>
          </div>

          {/* What We Can Help With */}
          <div className="mt-12 p-6 rounded-xl bg-black/40 border border-white/5 text-left">
            <h4 className="text-white font-bold mb-3">What We Can Help With:</h4>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-brand-muted">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated infrastructure for your workload
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom data schemas & delivery formats
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Volume-based pricing for large datasets
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Direct engineering support
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                White-label & on-premise options
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AI/ML pipeline integration
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
