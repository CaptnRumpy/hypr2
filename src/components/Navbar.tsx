import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'ABOUT US', path: '/about' },
  { name: 'CANARY', path: '/canary' },
  { name: 'DOCS', path: '/docs' },
  { name: 'TOKENOMICS', path: '/tokenomics' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-wider text-brand-text hover:text-brand-accent transition-colors">
            HYPRSTRM<span className="text-brand-accent">_</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-widest transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-accent'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/docs"
              className="px-4 py-2 text-xs tracking-widest bg-brand-accent text-white rounded hover:bg-brand-accent-hover transition-colors"
            >
              Get API Keys
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-text p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm tracking-widest transition-colors ${
                      location.pathname === link.path
                        ? 'text-brand-accent'
                        : 'text-brand-muted hover:text-brand-text'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/docs"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2 text-sm bg-brand-accent text-white rounded hover:bg-brand-accent-hover transition-colors"
                >
                  Get API Keys
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
