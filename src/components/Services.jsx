const featureCards = [
  {
    title: 'Web Engineering',
    desc: 'High-converting web platforms built to turn visitors into paying customers.',
    tag: 'Web Platforms',
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Dev',
    desc: 'Engaging mobile apps designed to keep customers active and coming back daily.',
    tag: 'Mobile Growth',
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    desc: 'Performance campaigns turning ad spend into measurable MRR growth.',
    tag: 'Meta & Google Ads',
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    desc: 'Strategic copy, video, and design assets that build market authority and trust.',
    tag: 'Copy & Design',
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Social Management',
    desc: 'Brand presence and customer engagement across every major platform.',
    tag: 'Social Growth',
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream-50 border-t border-black/[0.05]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section 1: 5-Column Feature Bar ("One growth team...") */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal max-w-3xl mx-auto">
            One dedicated team.{' '}
            <span className="text-charcoal-subtle font-normal italic">Keep your revenue compounding.</span>
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto">
            Everything your digital product needs from initial concept to high-scale customer acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-24">
          {featureCards.map((f, i) => (
            <div key={i} className="card-white p-6 flex flex-col justify-between hover:border-coral/30">
              <div>
                <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-display text-base font-bold text-charcoal mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-xs text-charcoal-muted leading-relaxed mb-4">
                  {f.desc}
                </p>
              </div>
              <span className="inline-block text-[11px] font-semibold bg-cream-100 text-charcoal-subtle px-2.5 py-1 rounded-md text-center">
                {f.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Section 2: HeyRetro Split Feature Spotlight #1 — Engineering & Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-coral font-display">
              ● Product Engineering & Design
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal mt-2 mb-4 leading-tight">
              Digital products built for maximum revenue.
            </h3>
            <p className="font-body text-charcoal-muted leading-relaxed mb-6">
              We build digital experiences designed specifically to move your business forward. Our engineering and design teams create websites and mobile apps focused on customer retention, high conversion rates, and reliable performance.
            </p>

            <ul className="space-y-4 font-body text-sm font-medium text-charcoal">
              {[
                { title: 'Lightning-Fast Load Times', desc: 'Never lose potential customers to slow page speeds or laggy loading.' },
                { title: 'High-Converting User Journeys', desc: 'Frictionless signup and checkout flows engineered to boost sales.' },
                { title: 'Built to Scale With Traffic', desc: 'Reliable systems designed to handle 10x traffic spikes effortlessly.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-coral-light text-coral flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✓
                  </span>
                  <div>
                    <p className="font-bold text-charcoal">{item.title}</p>
                    <p className="text-xs text-charcoal-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="card-white p-6 sm:p-8 bg-white border border-black/[0.08] shadow-lg rounded-3xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06]">
                <span className="font-mono text-xs text-charcoal-subtle">
                  bizgroww.io/growth-dashboard/platform-metrics
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">
                  Launch Ready
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cream-50 p-5 rounded-xl border border-black/5">
                  <p className="text-xs font-semibold text-charcoal-subtle mb-1">Customer Experience</p>
                  <p className="font-display text-lg font-bold text-charcoal">Instant Speed & Load</p>
                  <p className="text-xs text-emerald-600 mt-2 font-medium">99.9% Visitor Retention</p>
                </div>
                <div className="bg-cream-50 p-5 rounded-xl border border-black/5">
                  <p className="text-xs font-semibold text-charcoal-subtle mb-1">Sales Conversion</p>
                  <p className="font-display text-lg font-bold text-coral">+140% Revenue Growth</p>
                  <p className="text-xs text-coral mt-2 font-medium">+2.4x Industry Benchmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: HeyRetro Split Feature Spotlight #2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 lg:order-1 order-2">
            <div className="card-white p-6 sm:p-8 bg-white border border-black/[0.08] shadow-lg rounded-3xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06]">
                <span className="font-mono text-xs text-coral font-semibold">
                  AI Growth Client Connected
                </span>
                <span className="text-xs bg-coral-light text-coral px-2.5 py-0.5 rounded-full font-semibold">
                  Live Campaigns
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { channel: 'Google Search Ads', val: '$4.20 CAC', status: 'Active' },
                  { channel: 'Meta Retargeting', val: '+340% ROAS', status: 'Scaling' },
                  { channel: 'SEO Organic Pipeline', val: '+12,400 Visits', status: 'Compounding' },
                ].map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-cream-50 rounded-xl border border-black/5">
                    <span className="font-display text-sm font-bold text-charcoal">{c.channel}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-coral">{c.val}</span>
                      <span className="text-[10px] bg-white border border-black/10 px-2 py-0.5 rounded-md font-semibold text-charcoal-muted">{c.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:order-2 order-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-coral font-display">
              ● Performance Acquisition
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal mt-2 mb-4 leading-tight">
              Turn ad spend into measurable revenue.
            </h3>
            <p className="font-body text-charcoal-muted leading-relaxed mb-6">
              Stop burning budgets on vanity traffic. We run data-driven acquisition campaigns with custom landing pages that convert cold visitors into long-term paying customers.
            </p>
            <a
              href="#contact"
              className="btn-coral px-6 py-3 text-sm shadow-sm"
            >
              Request Custom Quote →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}


