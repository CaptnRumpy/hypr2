import { Link } from 'react-router-dom'

const footerLinks = {
  product: [
    { name: 'Documentation', path: '/docs' },
    { name: 'Pricing', path: '/tokenomics' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'API Status', path: '#' },
  ],
  scrapers: [
    { name: 'Reddit', path: '/scrapers/reddit' },
    { name: 'X / Twitter', path: '/scrapers/twitter' },
    { name: 'TikTok', path: '/scrapers/tiktok' },
    { name: 'YouTube', path: '/scrapers/youtube' },
    { name: 'Instagram', path: '/scrapers/instagram' },
    { name: 'Twitch', path: '/scrapers/twitch' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Canary', path: '/canary' },
    { name: 'Contact', path: 'mailto:hyprstrm@pm.me' },
  ],
  legal: [
    { name: 'Terms of Use', path: '/legal/terms' },
    { name: 'Privacy Policy', path: '/legal/privacy' },
    { name: 'Payment Policy', path: '/legal/payment' },
    { name: 'Imprint', path: '/legal/imprint' },
  ],
}

const socialLinks = [
  { name: 'TWITTER', url: 'https://twitter.com/hyprstrm', icon: 'X' },
  { name: 'GITHUB', url: 'https://github.com/hyprstrm', icon: 'GH' },
  { name: 'DISCORD', url: 'https://discord.gg/hyprstrm', icon: 'DC' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-wider text-brand-text">
              HYPRSTRM<span className="text-brand-accent">_</span>
            </Link>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">
              The Universal Social Media Data Extraction Engine.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded bg-brand-gray text-brand-muted hover:text-brand-accent hover:bg-brand-gray/80 transition-colors text-xs font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs tracking-widest text-brand-text mb-4">PRODUCT</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Scrapers Links */}
          <div>
            <h4 className="text-xs tracking-widest text-brand-text mb-4">SCRAPERS</h4>
            <ul className="space-y-3">
              {footerLinks.scrapers.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs tracking-widest text-brand-text mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('mailto') ? (
                    <a
                      href={link.path}
                      className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs tracking-widest text-brand-text mb-4">LEGAL</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} HYPRSTRM. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">
            Built for builders. No tracking. No BS.
          </p>
        </div>
      </div>
    </footer>
  )
}
