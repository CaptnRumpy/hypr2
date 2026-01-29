import { ScraperPage } from '../../components/ScraperPage'

export function Twitch() {
  return (
    <ScraperPage
      platform="Twitch"
      tagline="Deep VOD & Clip Analytics"
      description="Extract derived engagement metrics, content archives, and viewing patterns. Perfect for streamer analytics, clip compilations, and esports research."
      color="#9146FF"
      features={[
        {
          title: 'VOD Metadata',
          description: 'Duration, views, game category, and stream date.',
        },
        {
          title: 'Clip Analytics',
          description: 'Views, creation date, creator info, and game context.',
        },
        {
          title: 'Channel Stats',
          description: 'Followers, average viewers, and streaming schedule.',
        },
        {
          title: 'Chat Archives',
          description: 'Historical chat logs with emote and badge data.',
        },
        {
          title: 'Live Detection',
          description: 'Real-time monitoring of stream status changes.',
        },
        {
          title: 'Game Tracking',
          description: 'Track which games are trending and who plays them.',
        },
      ]}
      useCases={[
        'Esports Analytics',
        'Streamer Discovery',
        'Clip Compilation Services',
        'Gaming Trend Research',
        'Sponsorship Valuation',
        'Community Sentiment Analysis',
      ]}
      codeExample={[
        '$ curl -X POST https://api.hyprstrm.com/v1/twitch/channel \\',
        '  -H "Authorization: Bearer YOUR_API_KEY" \\',
        '  -d \'{"username": "streamer", "include_vods": true}\'',
        '',
        '# Returns channel data with VOD history and clips',
      ]}
    />
  )
}
