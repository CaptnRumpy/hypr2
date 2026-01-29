import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

const DEFAULT_TITLE = 'HYPRSTRM | The Universal Social Media Data Extraction Engine'
const DEFAULT_DESCRIPTION = 'Turn public social data into actionable insights. Scrape TikTok, YouTube, Instagram, Google and more with zero infrastructure headaches. No coding required.'
const SITE_URL = 'https://hyprstrm.com'

export function useSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonical,
  ogImage = '/og-image.png'
}: SEOProps = {}) {
  useEffect(() => {
    // Update title
    const fullTitle = title ? `${title} | HYPRSTRM` : DEFAULT_TITLE
    document.title = fullTitle

    // Helper to update or create meta tag
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, name)
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    // Update meta tags
    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)
    
    // Open Graph
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:image', ogImage, true)
    setMeta('og:url', canonical || window.location.href, true)
    
    // Twitter
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    
    // Canonical URL
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical || `${SITE_URL}${window.location.pathname}`

  }, [title, description, keywords, canonical, ogImage])
}

// Structured data for organization
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HYPRSTRM',
  url: 'https://hyprstrm.com',
  logo: 'https://hyprstrm.com/logo.png',
  description: DEFAULT_DESCRIPTION,
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hyprstrm@pm.me',
    contactType: 'customer service'
  },
  sameAs: []
}

// Structured data for software application
export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HYPRSTRM',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  description: DEFAULT_DESCRIPTION
}
