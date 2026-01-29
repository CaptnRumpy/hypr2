import { motion } from 'framer-motion'

interface CodeBlockProps {
  lines: string[]
  className?: string
}

export function CodeBlock({ lines, className = '' }: CodeBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-card rounded-lg p-6 font-mono text-sm overflow-x-auto ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-4 text-xs text-brand-muted">terminal</span>
      </div>
      <div className="space-y-1">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`${
              line.startsWith('➜') || line.startsWith('$')
                ? 'text-brand-accent'
                : line.startsWith('#')
                ? 'text-brand-muted'
                : line.startsWith('✔')
                ? 'text-green-400'
                : line.startsWith('ℹ')
                ? 'text-blue-400'
                : 'text-brand-text'
            }`}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

interface TerminalProps {
  command: string
  output?: string[]
}

export function Terminal({ command, output = [] }: TerminalProps) {
  return (
    <CodeBlock
      lines={[`$ ${command}`, ...output]}
    />
  )
}
