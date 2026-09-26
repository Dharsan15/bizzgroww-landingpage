const featureCards = [
  {
    title: 'Website Development',
    desc: 'Modern, fast websites built to showcase your business and turn visitors into paying customers.',
    tag: 'Websites & Apps',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    desc: 'Easy-to-use iPhone & Android apps designed to keep your customers coming back to you.',
    tag: 'iOS & Android',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    desc: 'Targeted Google & Facebook ads that drive real phone calls, store visits, and sales.',
    tag: 'Google & Meta Ads',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    desc: 'Eye-catching photos, graphics, and clear text that explain your services effortlessly.',
    tag: 'Graphics & Copy',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Social Media Management',
    desc: 'Regular posts and management on Instagram & Facebook to keep your business active and trusted.',
    tag: 'Social Presence',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-14 bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="badge-pill mb-3">WHAT WE DO FOR YOU</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 max-w-3xl mx-auto mt-2">
            Everything you need to grow.{' '}
            <span className="text-slate-500 font-normal italic">Without the tech stress.</span>
          </h2>
          <p className="mt-3 font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            We create your website, run your online ads, and manage your social media so new customers find you every single day.
          </p>
        </div>

        {/* 5 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {featureCards.map((f, i) => (
            <div key={i} className="card-white p-5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center mb-3 border border-blue-100">
                  {f.icon}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-xs text-slate-500 leading-relaxed mb-3">
                  {f.desc}
                </p>
              </div>
              <span className="inline-block text-[11px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-center">
                {f.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Dark Container Callout Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-display text-xs font-bold uppercase tracking-wider border border-blue-500/20 mb-5">
              ● SIMPLE ONLINE GROWTH
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              We handle your online presence so you can focus on your business.
            </h3>
            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              From building your custom website to running targeted Google and Facebook ads, <strong className="text-white font-semibold">bizgrw</strong> manages everything for you so you get real calls, visits, and sales.
            </p>

            <div>
              <a
                href="#contact"
                className="btn-primary px-7 py-3.5 text-sm inline-flex"
              >
                Get Started Today →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
