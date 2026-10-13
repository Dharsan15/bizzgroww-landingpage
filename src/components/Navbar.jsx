import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="fixed top-3 sm:top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <div className="w-full max-w-4xl flex items-center justify-between nav-pill-floating shadow-none pointer-events-auto">
        {/* Placeholder Logo with 30% squircle mark */}
        <a
          href="#home"
          className="flex items-center group focus-visible:outline-none pl-0.5 sm:pl-1 shrink-0"
        >
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#141414] transition-colors hover:text-[#707070] focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex btn-outline-sm whitespace-nowrap"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="btn-primary text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 whitespace-nowrap shrink-0"
          >
            Book a call
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-full text-[#141414] hover:bg-[#e8e8e8] transition-colors focus:outline-none shrink-0"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (attached smoothly under floating nav) */}
      {mobileOpen && (
        <div className="fixed inset-x-4 top-20 bg-[#ffffff] border border-[#e0e0e0] rounded-3xl p-6 shadow-xl space-y-4 md:hidden pointer-events-auto z-50">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-semibold text-[#141414] hover:text-[#707070] py-2 border-b border-[#f0f0f0]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full py-3 text-center text-sm"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
