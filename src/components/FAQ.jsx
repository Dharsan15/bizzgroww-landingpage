import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need any technical knowledge?',
    a: 'Not at all! We handle everything for you — from domain setup and website design to running ads and managing updates. You just tell us about your business goals.',
  },
  {
    q: 'How fast will my website be live?',
    a: 'Most custom websites go live in 2 to 4 weeks. We work quickly and share regular updates with you so you see steady progress every step of the way.',
  },
  {
    q: 'How will bizgrw help me get new local customers?',
    a: 'We design your website to make it super easy for visitors to call, book, or visit you. Plus, we launch simple, effective ads on Google & Facebook targeting people right in your area.',
  },
  {
    q: 'What happens after my website goes live?',
    a: 'We don’t disappear after launch. We offer ongoing support, site updates, security monitoring, and continuous ad management so your business keeps growing.',
  },
  {
    q: 'What if I already have a website that isn’t bringing sales?',
    a: 'We can redesign your existing website or build a fresh, high-converting site from scratch that actually turns visitors into paying clients.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream-50 border-t border-black/[0.05]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal">
            Common questions.
          </h2>
          <p className="mt-3 font-body text-base text-charcoal-muted">
            Have another question? Reach out to our strategy team at{' '}
            <a href="mailto:hello@bizgroww.com" className="text-coral underline font-semibold">
              hello@bizgroww.com
            </a>
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="card-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-charcoal focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-coral text-white' : 'text-charcoal-subtle'}`}>
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 font-body text-sm text-charcoal-muted leading-relaxed border-t border-black/[0.04]">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
