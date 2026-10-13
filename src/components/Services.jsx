const featureCards = [
  {
    title: 'Website',
    desc: 'Fast, mobile-friendly websites that help local businesses turn visitors into calls and enquiries.',
    tag: 'Website + WhatsApp Button',
    icon: (
      <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Mobile App',
    desc: 'Simple iPhone & Android apps for businesses that want customers to book, order and come back.',
    tag: 'Booking & Ordering Apps',
    icon: (
      <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    desc: 'Google & Facebook ads for local shops and service businesses, built to bring real phone calls and store visits.',
    tag: 'Google & Meta Ads Setup',
    icon: (
      <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    desc: 'Reels, posters and captions made for cafés, clinics and local brands that want to look professional online.',
    tag: 'Reels, Posters & Captions',
    icon: (
      <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Social Media Management',
    desc: 'Regular Instagram & Facebook posting so your business stays active, consistent and trusted.',
    tag: 'Monthly Posting Plan',
    icon: (
      <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-8 md:py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block bg-[#f3f3f3] text-[#141414] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            WHAT WE DO FOR YOU
          </span>
          <h2 className="text-3xl sm:text-5xl font-[650] text-[#141414] max-w-3xl mx-auto tracking-[-0.02em] leading-[1.08]">
            Everything you need to grow.{' '}
            <span className="text-[#707070] block sm:inline">
              Without the tech stress.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-[300] text-[#707070] max-w-2xl mx-auto leading-relaxed">
            We create your website, run your online ads, and manage your social media so new customers find you every single day.
          </p>
        </div>

        {/* 5 Card Grid — Mobbin 24px rounded corners, #f0f0f0 hairline border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8 md:mb-10">
          {featureCards.map((f, i) => (
            <div
              key={i}
              className="card-mobbin flex flex-col justify-between"
            >
              <div>
                {/* 30% iOS Squircle Icon Tile */}
                <div className="w-10 h-10 rounded-[30%] bg-[#f3f3f3] flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-[650] text-[#141414] mb-2.5 tracking-[-0.01em]">
                  {f.title}
                </h3>
                <p className="text-sm font-normal text-[#707070] leading-relaxed mb-6">
                  {f.desc}
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-block bg-[#f3f3f3] text-[#141414] text-xs font-semibold px-3 py-1.5 rounded-full w-full text-center">
                  {f.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Online Growth Section — 2-Column with Modern Floating Outcome Cards */}
        <div className="card-soft relative overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#141414] border border-[#e0e0e0] text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141414] inline-block" />
                SIMPLE ONLINE GROWTH
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-[650] text-[#141414] tracking-[-0.03em] leading-[1.08] mb-6">
                We handle your online presence so you can focus on your business.
              </h3>
              <p className="text-[#707070] text-base md:text-lg font-[300] leading-relaxed mb-8">
                From building your custom website to running targeted Google and Facebook ads, <strong className="font-semibold text-[#141414]">bizgrw</strong> manages everything for you so you get real calls, visits, and sales.
              </p>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <span>Get Started Today</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
            </div>

            {/* Right Column: Aesthetic Floating Outcome Cards Composition */}
            <div className="lg:col-span-6 relative py-4 lg:py-6 flex items-center justify-center min-h-[460px]">
              {/* Multi-layered Ambient Glows Behind Floating Cards */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-emerald-200/35 via-teal-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-tr from-indigo-200/35 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neutral-200/20 rounded-full blur-2xl pointer-events-none" />

              {/* Outer Floating Composition Layout */}
              <div className="relative w-full max-w-[460px] flex flex-col gap-4 text-left">
                {/* CARD 1: Local Customer Reach (Offset Left / Top) */}
                <div className="animate-float-1 card-glass rounded-2xl p-5 border border-white/80 shadow-[0_18px_38px_-12px_rgba(0,0,0,0.07)] hover:border-neutral-200/90 relative z-20 sm:w-[94%] sm:self-start">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      {/* Gradient Icon Badge */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 flex items-center justify-center text-white shadow-sm shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <circle cx="8.5" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="20" x2="20" y1="8" y2="14" />
                          <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="23" x2="17" y1="11" y2="11" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#707070]">Brand Reach</div>
                        <div className="text-xl sm:text-2xl font-black tracking-tight text-[#141414]">50,000+ <span className="text-base sm:text-lg font-bold text-neutral-700">Views</span></div>
                      </div>
                    </div>
                    {/* Growth Badge */}
                    <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-1 rounded-full text-xs font-bold shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                      <span>+140% growth</span>
                    </div>
                  </div>
                  {/* Sparkline & Platform Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium bg-neutral-100/80 px-2.5 py-1 rounded-full">
                      <svg className="w-3.5 h-3.5 text-pink-600 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      </svg>
                      <span>Instagram Reels</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <span className="text-[11px] font-semibold text-neutral-400 hidden xs:inline">Reels bringing walk-ins</span>
                      <svg className="w-20 h-6 text-emerald-500 overflow-visible" fill="none" viewBox="0 0 80 24">
                        <path d="M2 18 C 15 17, 24 10, 36 12 C 48 14, 56 4, 78 2" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                        <circle cx="78" cy="2" fill="currentColor" r="3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* CARD 2: Direct Customer Inquiries (Offset Right / Center) */}
                <div className="animate-float-2 card-glass rounded-2xl p-5 border border-white/80 shadow-[0_20px_42px_-12px_rgba(0,0,0,0.08)] hover:border-neutral-200/90 relative z-30 sm:w-[94%] sm:self-end sm:-mt-2">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      {/* WhatsApp / Phone Icon Badge */}
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#707070]">Customer Inquiries</span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Live
                          </span>
                        </div>
                        <div className="text-xl sm:text-2xl font-black tracking-tight text-[#141414]">320+ <span className="text-base sm:text-lg font-bold text-neutral-700">Leads</span></div>
                      </div>
                    </div>
                    {/* Badge */}
                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-[#141414] bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200/60 inline-flex items-center gap-1">
                        <span className="text-emerald-600 font-extrabold">Calls &amp; WhatsApp</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100 mt-2">
                    <div className="text-xs text-[#707070] font-medium">
                      Direct customer bookings &amp; orders
                    </div>
                    <div className="flex items-end gap-1 h-5">
                      <div className="w-1.5 bg-neutral-200 rounded-xs h-2" />
                      <div className="w-1.5 bg-neutral-200 rounded-xs h-3" />
                      <div className="w-1.5 bg-emerald-300 rounded-xs h-3.5" />
                      <div className="w-1.5 bg-emerald-400 rounded-xs h-4" />
                      <div className="w-1.5 bg-emerald-500 rounded-xs h-5" />
                      <div className="w-1.5 bg-emerald-600 rounded-xs h-full" />
                    </div>
                  </div>
                </div>

                {/* CARD 3: Sales Generated (Offset Center/Left / Bottom) */}
                <div className="animate-float-3 card-glass rounded-2xl p-5 border border-white/80 shadow-[0_22px_44px_-12px_rgba(0,0,0,0.08)] hover:border-neutral-200/90 relative z-20 sm:w-[94%] sm:self-start sm:-mt-2">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#141414] text-emerald-400 flex items-center justify-center shadow-sm shrink-0 font-black text-sm">
                        <span>5×</span>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#707070]">Sales Generated</div>
                        <div className="text-xl sm:text-2xl font-black tracking-tight text-[#141414]">₹1.84 Lakhs <span className="text-xs sm:text-sm font-semibold text-[#707070]">in Orders</span></div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1 bg-emerald-500 text-white px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                      <span>5× Return</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100 mt-2">
                    <div className="text-xs font-semibold text-neutral-700">
                      <strong className="text-[#141414] font-bold">From ₹34,000 ad budget</strong>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#707070] bg-neutral-100 px-2.5 py-1 rounded-full">
                      <span>Google &amp; Meta Ads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
