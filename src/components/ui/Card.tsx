import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`glass-card rounded-lg p-6 ${hover ? 'hover-glow cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <div className="text-brand-accent mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-brand-text mb-2">{title}</h3>
      <p className="text-sm text-brand-muted leading-relaxed">{description}</p>
    </Card>
  )
}
