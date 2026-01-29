import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already responded to cookie notice
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      // Small delay before showing to avoid flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-brand-text font-medium mb-1">Privacy Notice</p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  We do not use cookies or tracking. We only count anonymous page visits to understand traffic. 
                  No personal data is collected or stored.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 justify-end">
              <button
                onClick={handleDecline}
                className="px-3 py-1.5 text-xs font-medium text-brand-muted hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-3 py-1.5 text-xs font-medium text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
