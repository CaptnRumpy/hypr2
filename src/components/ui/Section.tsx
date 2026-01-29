import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  grid?: boolean
}

export function Section({ children, className = '', id, grid = false }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      {grid && <div className="absolute inset-0 grid-bg pointer-events-none" />}
      <div className="relative max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs tracking-widest text-brand-accent border border-brand-accent/30 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4 glow-text">
        {title}
      </h2>
      {description && (
        <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
