import { ScraperPage } from '../../components/ScraperPage'

export function YouTube() {
  return (
    <ScraperPage
      platform="YouTube"
      tagline="Complete Video & Channel Intelligence"
      description="Extract video metadata, comments, channel stats, and Shorts data. Detect live streams, track subscriber growth, and analyze content performance at scale."
      color="#FF0000"
      features={[
        {
          title: 'Video Metadata',
          description: 'Views, likes, comments, duration, and publish date.',
        },
        {
          title: 'Channel Analytics',
          description: 'Subscribers, total views, video count, and growth rate.',
        },
        {
          title: 'Shorts Scraping',
          description: 'Full support for YouTube Shorts with all metrics.',
        },
        {
          title: 'Live Detection',
          description: 'Real-time detection of live streams and premieres.',
        },
        {
          title: 'Comment Extraction',
          description: 'Full comment threads with replies and engagement.',
        },
        {
          title: 'ASR Transcription',
          description: 'Automatic speech-to-text for video content.',
        },
      ]}
      useCases={[
        'Content Strategy Research',
        'Influencer Discovery & Vetting',
        'Competitive Analysis',
        'Live Stream Monitoring',
        'Podcast & Interview Mining',
        'Educational Content Aggregation',
      ]}
      codeExample={[
        '$ curl -X POST https://api.hyprstrm.com/v1/youtube/channel \\',
        '  -H "Authorization: Bearer YOUR_API_KEY" \\',
        '  -d \'{"channel_id": "UCxxxxxx", "include_videos": true}\'',
        '',
        '# Returns channel data with recent videos and metrics',
      ]}
    />
  )
}
