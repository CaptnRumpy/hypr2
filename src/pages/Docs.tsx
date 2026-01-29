import { motion } from 'framer-motion'
import { Section, Button, Card } from '../components/ui'

export function Docs() {
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
          <Card hover={false} className="mb-8 text-left border-brand-accent/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">We Are Live</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">
                  HYPRSTRM is currently operational and serving enterprise clients. Our infrastructure is 
                  production-ready for <strong className="text-white">custom solutions</strong> requiring 
                  high-volume data extraction (100M+ items/month).
                </p>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Public API access and self-serve documentation are being finalized. In the meantime, 
                  we work directly with clients to build tailored data pipelines.
                </p>
              </div>
            </div>
          </Card>

          <p className="text-lg text-brand-muted mb-8 leading-relaxed">
            Our comprehensive API documentation for self-serve access is being finalized. 
            Enterprise clients can request immediate access to our infrastructure.
          </p>

          {/* Countdown Timer */}
          <div className="glass-card rounded-lg p-8 mb-8">
            <p className="text-sm text-brand-muted mb-4 uppercase tracking-wider">Public API Launch</p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: '07', label: 'DAYS' },
                { value: '14', label: 'HOURS' },
                { value: '32', label: 'MINS' },
                { value: '58', label: 'SECS' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-brand-accent mb-2">
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
            <Button href="mailto:hyprstrm@pm.me?subject=Custom%20Solution%20Inquiry" size="lg">
              Request Custom Solution
            </Button>
            <Button to="/" variant="secondary" size="lg">
              Back to Home
            </Button>
          </div>

          {/* Custom Solution Info */}
          <div className="mt-12 p-6 rounded-xl bg-black/40 border border-white/5 text-left">
            <h4 className="text-white font-bold mb-3">Custom Solutions Include:</h4>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-brand-muted">
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">→</span>
                Dedicated infrastructure & priority GPU access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">→</span>
                Custom data schemas & delivery formats
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">→</span>
                High-volume pricing (100M+ items/month)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">→</span>
                Direct engineering support & SLAs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">→</span>
                White-label & on-premise options
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-accent">→</span>
                Custom AI/ML model integration
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
