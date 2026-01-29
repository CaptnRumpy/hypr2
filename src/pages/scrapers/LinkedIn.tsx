import { ScraperPage } from '../../components/ScraperPage'

export function LinkedIn() {
  return (
    <ScraperPage
      platform="LinkedIn"
      tagline="The Professional Intelligence Engine"
      description="Extract public profiles, company data, and map professional networks at scale. Perfect for B2B lead generation, sales intelligence, talent sourcing, and competitive research."
      color="#0077B5"
      features={[
        {
          title: 'Profile Extraction',
          description: 'Experience, education, skills, and endorsements.',
        },
        {
          title: 'Company Data',
          description: 'Employee count, industry, headquarters, and growth.',
        },
        {
          title: 'Job Listings',
          description: 'Track open positions and hiring trends.',
        },
        {
          title: 'Network Mapping',
          description: 'Visualize professional connections and org charts.',
        },
        {
          title: 'Post Analytics',
          description: 'Engagement metrics on professional content.',
        },
        {
          title: 'Skills Intelligence',
          description: 'Aggregate skill trends by industry and role.',
        },
      ]}
      useCases={[
        'B2B Lead Generation',
        'Sales Intelligence',
        'Talent Sourcing & Recruiting',
        'Competitive Intelligence',
        'Market Research',
        'Investment Due Diligence',
      ]}
      codeExample={[
        '$ curl -X POST https://api.hyprstrm.com/v1/linkedin/profile \\',
        '  -H "Authorization: Bearer YOUR_API_KEY" \\',
        '  -d \'{"profile_url": "https://linkedin.com/in/target"}\'',
        '',
        '# Returns structured profile data with experience history',
      ]}
    />
  )
}
