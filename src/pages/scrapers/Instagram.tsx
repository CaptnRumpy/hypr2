import { ScraperPage } from '../../components/ScraperPage'

export function Instagram() {
  return (
    <ScraperPage
      platform="Instagram"
      tagline="Public Profile & Content Extraction"
      description="Ethically extract public profiles, Reels, and post metrics at scale. Perfect for influencer vetting, hashtag analytics, and content research without account bans."
      color="#E4405F"
      features={[
        {
          title: 'Profile Scraping',
          description: 'Bio, followers, following, post count, and verification.',
        },
        {
          title: 'Reels Analytics',
          description: 'Views, plays, likes, and comments for Reels content.',
        },
        {
          title: 'Post Metadata',
          description: 'Full post data including carousels and tagged users.',
        },
        {
          title: 'Hashtag Monitoring',
          description: 'Track hashtag volume and top posts in real-time.',
        },
        {
          title: 'OCR Extraction',
          description: 'Read text from images, stories, and Reels.',
        },
        {
          title: 'Engagement Rate Calc',
          description: 'Automatic engagement rate calculation per post.',
        },
      ]}
      useCases={[
        'Influencer Marketing Campaigns',
        'Brand Monitoring',
        'Hashtag Research',
        'Competitive Analysis',
        'User-Generated Content Discovery',
        'Fashion & Beauty Trend Tracking',
      ]}
      codeExample={[
        '$ curl -X POST https://api.hyprstrm.com/v1/instagram/profile \\',
        '  -H "Authorization: Bearer YOUR_API_KEY" \\',
        '  -d \'{"username": "targetuser", "include_posts": true}\'',
        '',
        '# Returns profile data with recent posts and engagement',
      ]}
    />
  )
}
