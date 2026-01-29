import { ScraperPage } from '../../components/ScraperPage'

export function Reddit() {
  return (
    <ScraperPage
      platform="Reddit"
      tagline="The Scalable Reddit Data Engine"
      description="Bypass the API pricing wall. Extract full discussion threads, user karma, subreddit trends, and nested comments. Perfect for LLM training, sentiment analysis, and product research."
      color="#FF4500"
      features={[
        {
          title: 'Full Thread Extraction',
          description: 'Capture entire comment trees with parent-child relationships intact.',
        },
        {
          title: 'User Karma & History',
          description: 'Get account age, karma breakdown, and posting patterns.',
        },
        {
          title: 'Subreddit Analytics',
          description: 'Track subscriber growth, posting frequency, and mod activity.',
        },
        {
          title: 'Award Detection',
          description: 'Identify gilded and highly-awarded content automatically.',
        },
        {
          title: 'Flair & Tag Parsing',
          description: 'Extract post flairs and user tags for categorization.',
        },
        {
          title: 'Cross-Post Tracking',
          description: 'Follow content as it spreads across subreddits.',
        },
      ]}
      useCases={[
        'LLM Training Data (conversational)',
        'Product Research & Feedback Mining',
        'Stock Sentiment (r/wallstreetbets)',
        'Trend Detection & Viral Prediction',
        'Customer Support Intelligence',
        'Academic Research',
      ]}
      codeExample={[
        '$ curl -X POST https://api.hyprstrm.com/v1/reddit/scrape \\',
        '  -H "Authorization: Bearer YOUR_API_KEY" \\',
        '  -d \'{"subreddit": "wallstreetbets", "limit": 100}\'',
        '',
        '# Returns structured JSON with posts, comments, and metadata',
      ]}
    />
  )
}
