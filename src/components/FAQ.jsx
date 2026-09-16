import { useState } from 'react'

const faqs = [
  {
    q: 'How fast can our project launch?',
    a: 'Our standard sprint projects ship in 6 to 8 weeks from kickoff. We operate in weekly rapid release cycles so you see live progress every Friday.',
  },
  {
    q: 'What technologies do you use for web and mobile development?',
    a: 'We specialize in modern, high-speed stacks: React 19, Next.js, Vite, TailwindCSS, Node.js, and React Native for iOS/Android mobile apps.',
  },
  {
    q: 'Can we integrate Bizgroww into our existing Slack or Teams?',
    a: 'Yes! On all Growth and Pro plans, your dedicated team joins your Slack or Microsoft Teams workspace for daily communication.',
  },
  {
    q: 'What happens after our product goes live?',
    a: 'We do not disappear after launch. We offer ongoing maintenance, continuous conversion optimization, performance monitoring, and ad campaign scaling.',
  },
  {
    q: 'Do you offer custom enterprise SLAs?',
    a: 'Yes, enterprise plans include guaranteed uptime SLAs, custom SOC-2 security protocols, and dedicated technical account managers.',
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
