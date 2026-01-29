import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { Home, About, Docs, Tokenomics, Canary, CaseStudies } from './pages'
import { Reddit, Twitter, TikTok, YouTube, Instagram, Twitch, LinkedIn, Google } from './pages/scrapers'
import { Terms, Privacy, Payment, Imprint } from './pages/legal'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/canary" element={<Canary />} />
          <Route path="/case-studies" element={<CaseStudies />} />

          {/* Scraper Pages */}
          <Route path="/scrapers/reddit" element={<Reddit />} />
          <Route path="/scrapers/twitter" element={<Twitter />} />
          <Route path="/scrapers/tiktok" element={<TikTok />} />
          <Route path="/scrapers/youtube" element={<YouTube />} />
          <Route path="/scrapers/instagram" element={<Instagram />} />
          <Route path="/scrapers/twitch" element={<Twitch />} />
          <Route path="/scrapers/linkedin" element={<LinkedIn />} />
          <Route path="/scrapers/google" element={<Google />} />

          {/* Legal Pages */}
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/payment" element={<Payment />} />
          <Route path="/legal/imprint" element={<Imprint />} />

          {/* 404 Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
