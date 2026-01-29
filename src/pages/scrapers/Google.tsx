import { ScraperPage } from '../../components/ScraperPage'

export function Google() {
  return (
    <ScraperPage
      platform="Google"
      tagline="The Precision SERP Scraper"
      description="Extract search results, featured snippets, local pack, and competitive intelligence at scale. Perfect for SEO rank tracking, content research, and ad intelligence."
      color="#4285F4"
      features={[
        {
          title: 'Organic Results',
          description: 'Title, URL, snippet, and position for all results.',
        },
        {
          title: 'Featured Snippets',
          description: 'Extract answer boxes, tables, and lists.',
        },
        {
          title: 'Local Pack',
          description: 'Business listings with ratings and contact info.',
        },
        {
          title: 'People Also Ask',
          description: 'Related questions and their answers.',
        },
        {
          title: 'Ad Intelligence',
          description: 'Track paid ads, positions, and ad copy.',
        },
        {
          title: 'Knowledge Panel',
          description: 'Entity data from Google Knowledge Graph.',
        },
      ]}
      useCases={[
        'SEO Rank Tracking',
        'Keyword Research',
        'Competitive Analysis',
        'Content Gap Analysis',
        'Local SEO Monitoring',
        'PPC Intelligence',
      ]}
      codeExample={[
        '$ curl -X POST https://api.hyprstrm.com/v1/google/serp \\',
        '  -H "Authorization: Bearer YOUR_API_KEY" \\',
        '  -d \'{"query": "best api scraper", "location": "US"}\'',
        '',
        '# Returns full SERP with organic, ads, and features',
      ]}
    />
  )
}
