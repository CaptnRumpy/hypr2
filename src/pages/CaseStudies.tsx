import { motion } from 'framer-motion'
import { Section, SectionHeader, Card, Button } from '../components/ui'

const caseStudies = [
  {
    tag: 'FINANCE',
    title: 'The Quantitative Hedge Fund',
    subtitle: 'Real-time social sentiment for earnings prediction',
    challenge: 'A quantitative hedge fund needed to incorporate real-time social sentiment into their earnings prediction models. Traditional financial data providers were too slow, and their in-house scraping attempts were constantly blocked.',
    solution: 'We deployed dedicated workers for X (cashtags), Reddit (r/wallstreetbets, r/stocks), and YouTube (financial influencer channels). The fund receives a unified, deduplicated stream of posts mentioning their target tickers, enriched with our sentiment scores.',
    results: [
      'Sub-5-minute latency on breaking social chatter',
      '15% improvement in short-term earnings surprise prediction accuracy',
      'Eliminated a 3-person internal scraping team',
    ],
  },
  {
    tag: 'AI / ML',
    title: 'The LLM Research Lab',
    subtitle: 'Training data for a multilingual conversational AI',
    challenge: 'A well-funded AI research lab was training a next-generation multilingual LLM. They needed billions of tokens of diverse, authentic human conversation that wasn\'t already overrepresented in existing datasets like Common Crawl.',
    solution: 'We provided continuous, high-volume streams from Reddit (non-English subreddits), TikTok (comment sections in 15 languages), and YouTube (community posts). All data was delivered with our ASR transcriptions for video content and language-tagged for easy filtering.',
    results: [
      'Ingested 50 billion tokens of novel conversational data over 6 months',
      'Significantly improved benchmark scores on low-resource languages',
      'Reduced data acquisition costs by 70% compared to their previous vendor',
    ],
  },
  {
    tag: 'MARKETING',
    title: 'The Influencer Marketing Agency',
    subtitle: 'Vetting creators at scale for brand safety',
    challenge: 'A top-10 global influencer marketing agency needed to vet thousands of potential creators each month. Manual review was slow and expensive, and they had no good way to analyze the actual content of videos at scale.',
    solution: 'We built a custom pipeline combining Instagram, TikTok, and YouTube profile scraping with our full OCR/ASR stack. The agency receives a daily report of flagged creators whose content (spoken or on-screen) contains brand-unsafe keywords.',
    results: [
      'Reduced creator vetting time from 2 weeks to 48 hours',
      'Caught 3 major brand-safety violations that manual review missed',
      '40% reduction in influencer fraud (fake followers, engagement pods)',
    ],
  },
  {
    tag: 'CONSULTING',
    title: 'The Geopolitical Risk Consultancy',
    subtitle: 'Open-source intelligence for crisis detection',
    challenge: 'A boutique risk consultancy advising Fortune 500 clients on geopolitical risk needed a real-time feed of emerging crises from social media, but lacked the technical infrastructure to build one.',
    solution: 'We provided a multi-platform monitoring stream focused on specific geographic regions and conflict-related keywords across X, Telegram, and TikTok. The feed includes geotagged posts when available and is filtered for high-engagement content to reduce noise.',
    results: [
      'Identified the onset of a regional conflict 4 hours before major news outlets',
      'Reduced analyst workload by 60% through intelligent pre-filtering',
      'Became a key differentiator in their client pitches',
    ],
  },
]

export function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <Section grid className="pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs tracking-widest text-brand-accent border border-brand-accent/30 rounded-full">
              CASE STUDIES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
              THE HALL OF <span className="gradient-text">MIRRORS</span>
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed">
              What People Are Building in the Dark. We don't reveal our clients. 
              But we can show you what's possible.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <Card hover={false} className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Header */}
                  <div className="md:col-span-1">
                    <span className="inline-block px-3 py-1 mb-4 text-xs tracking-widest text-brand-accent border border-brand-accent/30 rounded">
                      {study.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-text mb-2">{study.title}</h3>
                    <p className="text-brand-muted">{study.subtitle}</p>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-sm tracking-widest text-brand-muted mb-2">THE CHALLENGE</h4>
                      <p className="text-brand-text">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm tracking-widest text-brand-muted mb-2">OUR SOLUTION</h4>
                      <p className="text-brand-text">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm tracking-widest text-brand-muted mb-2">THE RESULTS</h4>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-brand-text">
                            <span className="text-brand-accent">→</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section grid className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-brand-text mb-4">
            READY TO BUILD SOMETHING?
          </h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Your use case might be the next entry in our hall. Let's talk.
          </p>
          <Button href="mailto:hyprstrm@pm.me" size="lg">
            Contact Us
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
