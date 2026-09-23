const featureCards = [
  {
    title: 'Website Development',
    desc: 'High-converting websites built to turn visitors into paying customers.',
    tag: 'Web Apps',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Mobile App Dev',
    desc: 'Engaging mobile apps designed to keep users active and loyal.',
    tag: 'iOS & Android',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    desc: 'Performance ads on Meta & Google that drive real revenue.',
    tag: 'Ad Campaigns',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    desc: 'Clear copy, graphics, and video that explain your product easily.',
    tag: 'Copy & Design',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Social Management',
    desc: 'Consistent brand presence that builds trust across all social channels.',
    tag: 'Social Growth',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-pill mb-4">OUR SERVICES</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 max-w-3xl mx-auto mt-2">
            One dedicated team.{' '}
            <span className="text-slate-500 font-normal italic">Keep your revenue compounding.</span>
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything your business needs — from website development to targeted marketing — under one roof.
          </p>
        </div>

        {/* 5 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {featureCards.map((f, i) => (
            <div key={i} className="card-white p-6 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                  {f.icon}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-xs text-slate-500 leading-relaxed mb-4">
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
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-display text-xs font-bold uppercase tracking-wider border border-blue-500/20 mb-6">
              ● YOUR DIGITAL PARTNER FOR GROWTH
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              We take care of everything you need to grow your business digitally.
            </h3>
            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              From building high-converting websites to managing performance ad campaigns, <strong className="text-white font-semibold">bizgrw</strong> handles your complete digital strategy so you can focus on running your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="btn-primary px-7 py-3.5 text-sm w-full sm:w-auto"
              >
                Book a call →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-slate-700 bg-slate-800/80 text-white font-display text-sm font-semibold hover:border-slate-500 transition-colors w-full sm:w-auto"
              >
                Explore services
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
