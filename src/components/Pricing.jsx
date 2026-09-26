import { useState } from 'react'

const plans = [
  {
    name: 'Starter Setup',
    priceMonthly: '$490',
    priceYearly: '$390',
    desc: 'Perfect for small local businesses getting started online.',
    features: [
      'Custom fast-loading website',
      'Mobile & tablet friendly design',
      'Google Maps & business listing setup',
      'Contact form & call button setup',
      'Dedicated email & phone support',
    ],
    cta: 'Get Starter Plan',
    featured: false,
  },
  {
    name: 'Business Growth',
    badge: 'Most Popular',
    priceMonthly: '$990',
    priceYearly: '$790',
    desc: 'For businesses wanting steady new customer leads every month.',
    features: [
      'Everything in Starter Setup',
      'Custom web or mobile application',
      'Google & Facebook ad campaign setup',
      'Monthly customer lead reports',
      'Direct WhatsApp & phone support',
    ],
    cta: 'Start Growing',
    featured: true, // Featured card!
  },
  {
    name: 'Full Service',
    priceMonthly: '$1,990',
    priceYearly: '$1,590',
    desc: 'We handle all your digital marketing, website, and ads completely.',
    features: [
      'Everything in Business Growth',
      'iOS & Android mobile apps',
      'Daily Google & Meta ad management',
      'Social media content & graphics',
      'Priority 24/7 fast support',
    ],
    cta: 'Get Full Service',
    featured: false,
  },
  {
    name: 'Custom Partner',
    priceMonthly: 'Custom',
    priceYearly: 'Custom',
    desc: 'For multi-location businesses needing custom digital systems.',
    features: [
      'Multi-branch / location setup',
      'Custom business software & APIs',
      'Dedicated account manager',
      'Tailored ad budgets & strategies',
    ],
    cta: 'Talk to Us',
    featured: false,
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 max-w-3xl mx-auto">
          Simple, clear pricing.{' '}
          <span className="text-slate-500 font-normal italic">Choose what fits your business.</span>
        </h2>
        <p className="mt-4 font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          No hidden fees or complex contracts. Transparent pricing built to help your business win.
        </p>

        {/* Toggle Switch with HeyRetro badge */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className={`font-body text-sm font-semibold ${!isYearly ? 'text-charcoal' : 'text-charcoal-subtle'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 rounded-full bg-charcoal p-1 transition-colors relative"
            aria-label="Toggle Billing Interval"
          >
            <div
              className={`w-6 h-6 rounded-full bg-white transition-transform ${
                isYearly ? 'translate-x-6 bg-coral' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`font-body text-sm font-semibold flex items-center gap-2 ${isYearly ? 'text-charcoal' : 'text-charcoal-subtle'}`}>
            Yearly
            <span className="bg-coral-light text-coral font-bold text-xs px-2.5 py-0.5 rounded-full border border-coral/20">
              Save ~20%
            </span>
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                p.featured
                  ? 'bg-dark-surface text-white border-2 border-coral shadow-2xl scale-[1.03] z-10'
                  : 'card-white bg-white border border-black/[0.08]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-display text-xl font-bold ${p.featured ? 'text-white' : 'text-charcoal'}`}>
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span className="text-[10px] uppercase font-extrabold tracking-wider bg-coral text-white px-2.5 py-1 rounded-full shadow-xs">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className={`font-body text-xs mb-6 ${p.featured ? 'text-gray-400' : 'text-charcoal-muted'}`}>
                  {p.desc}
                </p>

                <div className="mb-6">
                  <span className={`font-display text-4xl font-extrabold ${p.featured ? 'text-white' : 'text-charcoal'}`}>
                    {isYearly ? p.priceYearly : p.priceMonthly}
                  </span>
                  {p.priceMonthly !== 'Custom' && (
                    <span className={`font-body text-xs ${p.featured ? 'text-gray-400' : 'text-charcoal-subtle'}`}>
                      /month
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {p.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-medium">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold ${
                        p.featured ? 'bg-coral text-white' : 'bg-coral-light text-coral'
                      }`}>
                        ✓
                      </span>
                      <span className={p.featured ? 'text-gray-200' : 'text-charcoal-muted'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-3.5 rounded-full font-display text-xs font-bold text-center transition-all ${
                  p.featured
                    ? 'btn-coral text-white shadow-md'
                    : 'bg-cream-100 hover:bg-coral hover:text-white text-charcoal border border-black/10'
                }`}
              >
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
