import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md border-b border-black/[0.06] shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-xl font-extrabold text-charcoal transition-opacity hover:opacity-80 focus-visible:outline-none"
          >
            <span className="w-8 h-8 rounded-lg bg-coral text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-coral/30">
              B
            </span>
            <span>Bizgroww</span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-sm border border-black/[0.06] px-6 py-2 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-charcoal-muted transition-colors hover:text-coral focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="font-body text-sm font-medium text-charcoal-muted hover:text-charcoal transition-colors px-3 py-2"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="btn-coral px-5 py-2.5 text-sm shadow-sm"
            >
              Start Your Growth →
            </a>
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-black/5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-50 border-b border-black/[0.06] px-6 py-6 space-y-4 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-display text-base font-semibold text-charcoal hover:text-coral py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-coral w-full py-3 text-sm text-center"
            >
              Start Your Growth →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

