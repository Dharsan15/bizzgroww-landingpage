export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-cream-50"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral-light text-coral font-body text-xs sm:text-sm font-semibold border border-coral/15 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
            Digital Growth Agency
          </span>
        </div>

        {/* Two-tone main headline (HeyRetro style) */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-charcoal leading-[1.08] tracking-tight max-w-4xl mx-auto">
          Growth your team{' '}
          <span className="text-charcoal-subtle font-normal italic block sm:inline">will look forward to</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 font-body text-base sm:text-lg md:text-xl text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
          Bizgroww partners with ambitious brands to build digital products, high-converting apps, and growth campaigns that compound revenue from day one.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#contact"
            className="btn-coral px-8 py-4 text-base shadow-md w-full sm:w-auto"
          >
            Start free growth call →
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-black/10 bg-white text-charcoal font-display text-base font-semibold transition-all hover:bg-black/5 hover:border-black/20 w-full sm:w-auto shadow-xs"
          >
            Explore services
          </a>
        </div>

        <p className="mt-3 font-body text-xs text-charcoal-subtle">
          Zero commitment • Free strategy breakdown included
        </p>

        {/* Trust strip */}
        <div className="mt-12 pt-8 border-t border-black/[0.05]">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-charcoal-subtle mb-4">
            Trusted by 50+ growing brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-display text-sm font-bold text-charcoal/40 tracking-wide">
            <span>NovaByte</span>
            <span className="text-black/15">•</span>
            <span>CloudLeap</span>
            <span className="text-black/15">•</span>
            <span>FinEdge</span>
            <span className="text-black/15">•</span>
            <span>TechVault</span>
            <span className="text-black/15">•</span>
            <span>DataPrime</span>
          </div>
        </div>

        {/* HeyRetro Visual Showcase Card */}
        <div className="mt-12 md:mt-16 relative">
          <div className="card-white p-4 sm:p-8 bg-white border border-black/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.06)] rounded-3xl max-w-5xl mx-auto text-left">
            {/* Top window bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-body text-xs text-charcoal-subtle font-medium hidden sm:inline">
                  bizgroww.io / analytics / sprint-growth-24
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-body text-xs font-semibold border border-emerald-200">
                  ● Live Workspace Active
                </span>
              </div>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 — Growth Sprint */}
              <div className="bg-cream-50 rounded-2xl p-6 border border-black/[0.05]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-coral">
                    Revenue Sprint
                  </span>
                  <span className="text-xs bg-coral-light text-coral font-semibold px-2 py-0.5 rounded-full">
                    +140% YoY
                  </span>
                </div>
                <p className="font-display text-3xl font-extrabold text-charcoal mb-2">
                  $248,500
                </p>
                <p className="font-body text-xs text-charcoal-muted mb-4">
                  Organic traffic & platform conversion rate increased by 2.4x.
                </p>
                <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-black/5">
                  <div className="bg-coral h-full w-[85%] rounded-full" />
                </div>
              </div>

              {/* Card 2 — Partners & Delivery */}
              <div className="bg-cream-50 rounded-2xl p-6 border border-black/[0.05]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-charcoal">
                    Avg. Delivery
                  </span>
                  <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
                    8 Weeks
                  </span>
                </div>
                <p className="font-display text-3xl font-extrabold text-charcoal mb-2">
                  50+ Brands
                </p>
                <p className="font-body text-xs text-charcoal-muted mb-4">
                  Production-ready apps and web systems delivered on schedule.
                </p>
                <div className="flex gap-1">
                  {['Web', 'Mobile', 'SEO', 'Ads', 'Design'].map((tag, i) => (
                    <span key={i} className="text-[10px] bg-white border border-black/10 px-2 py-0.5 rounded-md font-medium text-charcoal-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3 — Automated Growth Engine */}
              <div className="bg-dark-surface text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Growth Engine Active
                  </div>
                  <p className="font-display text-lg font-bold text-white mb-2">
                    Continuous Growth System
                  </p>
                  <p className="font-body text-xs text-gray-400 leading-relaxed mb-4">
                    Automated conversion tracking, page speed optimization, and sales funnels.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="btn-coral text-xs py-2 px-4 w-full text-center"
                >
                  Start Growth Strategy →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


