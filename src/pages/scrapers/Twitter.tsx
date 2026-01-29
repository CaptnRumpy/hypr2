import { ScraperPage } from '../../components/ScraperPage'

export function Twitter() {
  return (
    <ScraperPage
      platform="X / Twitter"
      tagline="The Unrestricted X Data Scraper"
      description="Bypass official API limits. Extract tweets, threads, user profiles, and engagement metrics at scale. Perfect for crypto sentiment, brand monitoring, and lead generation."
      color="#1DA1F2"
      features={[
        {
          title: 'Tweet & Thread Extraction',
          description: 'Get full threads with quote tweets and reply chains.',
        },
        {
          title: 'Profile Scraping',
          description: 'Bio, followers, following, verified status, and join date.',
        },
        {
          title: 'Cashtag Monitoring',
          description: 'Real-time tracking of $TICKER mentions for trading signals.',
        },
        {
          title: 'Hashtag Analytics',
          description: 'Volume, velocity, and top contributors for any hashtag.',
        },
        {
          title: 'Media Extraction',
          description: 'Download images, videos, and GIFs with full metadata.',
        },
        {
          title: 'Historical Search',
          description: 'Access tweets going back years, not just 7 days.',
        },
      ]}
      useCases={[
        'Crypto & Stock Sentiment Analysis',
        'Brand Monitoring & Reputation',
        'Influencer Discovery',
        'Lead Generation (B2B)',
        'Breaking News Detection',
        'Political & Social Research',
      ]}
      codeExample={[
        '$ curl -X POST https://api.hyprstrm.com/v1/twitter/search \\',
        '  -H "Authorization: Bearer YOUR_API_KEY" \\',
        '  -d \'{"query": "$BTC OR $ETH", "since": "2024-01-01"}\'',
        '',
        '# Returns tweets with engagement metrics and user data',
      ]}
    />
  )
}
