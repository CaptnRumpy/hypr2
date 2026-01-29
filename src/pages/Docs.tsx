import { motion } from 'framer-motion'
import { Section, Button } from '../components/ui'

export function Docs() {
  return (
    <Section grid className="min-h-[80vh] flex items-center">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs tracking-widest text-brand-accent border border-brand-accent/30 rounded-full">
            COMING SOON
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">
            API DOCUMENTATION
          </h1>
          <p className="text-lg text-brand-muted mb-8 leading-relaxed">
            Our comprehensive API documentation is currently being finalized. 
            Get notified when we launch.
          </p>

          {/* Countdown Timer */}
          <div className="glass-card rounded-lg p-8 mb-8">
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
            <Button href="mailto:hyprstrm@pm.me" size="lg">
              Request Early Access
            </Button>
            <Button to="/" variant="secondary" size="lg">
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
