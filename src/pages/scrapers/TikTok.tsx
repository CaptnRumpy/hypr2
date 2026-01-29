import { ScraperPage } from '../../components/ScraperPage'

export function TikTok() {
  return (
    <ScraperPage
      platform="TikTok"
      tagline="The High-Speed TikTok Data Scraper"
      description="Extract viral trends, hashtags, and engagement metrics instantly. Unlock For You page data without login barriers. Perfect for trend spotting, influencer vetting, and content research."
      color="#00F2EA"
      features={[
        {
          title: 'Video Metadata',
          description: 'Views, likes, shares, comments, and save counts.',
        },
        {
          title: 'Creator Profiles',
          description: 'Followers, following, total likes, and bio information.',
        },
        {
          title: 'Hashtag Tracking',
          description: 'Real-time volume and velocity for any hashtag.',
        },
        {
          title: 'Sound Analytics',
          description: 'Track which sounds are trending and who is using them.',
        },
        {
          title: 'ASR Transcription',
          description: 'Convert spoken content to searchable text.',
        },
        {
          title: 'OCR Extraction',
          description: 'Read text overlays and captions from videos.',
        },
      ]}
      useCases={[
        'Trend Prediction & Early Detection',
        'Influencer Marketing Research',
        'Competitive Content Analysis',
        'Music & Sound Trend Tracking',
        'E-commerce Product Discovery',
        'Gen-Z Audience Research',
      ]}
      codeExample={[
        '$ curl -X POST https://api.hyprstrm.com/v1/tiktok/trending \\',
        '  -H "Authorization: Bearer YOUR_API_KEY" \\',
        '  -d \'{"region": "US", "category": "fashion"}\'',
        '',
        '# Returns trending videos with full metadata and ASR',
      ]}
    />
  )
}
