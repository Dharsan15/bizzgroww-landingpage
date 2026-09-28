const steps = [
  {
    num: '01',
    title: 'Share Your Goal',
    desc: 'Tell us about your business and what you want to achieve. We keep it simple, listen to your needs, and make a custom plan.',
    tag: 'Step 1',
  },
  {
    num: '02',
    title: 'See the Preview',
    desc: 'We create a clean design for your website or app and show you a complete preview so you can approve it before we build.',
    tag: 'Step 2',
  },
  {
    num: '03',
    title: 'We Build Everything',
    desc: 'Our team builds your website or mobile app so it loads fast, looks great, and works perfectly on all phones and computers.',
    tag: 'Step 3',
  },
  {
    num: '04',
    title: 'Get New Customers',
    desc: 'We launch your site online and run targeted local ads so new customers start calling, messaging, and visiting your business.',
    tag: 'Step 4',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-10 md:py-14 bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <span className="badge-pill mb-3">HOW IT WORKS</span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 max-w-3xl mx-auto mt-2">
          4 Easy Steps.{' '}
          <span className="text-slate-500 font-normal italic">We handle all the tech work.</span>
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          A simple, stress-free process to take your business online and bring in new customers.
        </p>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((s, i) => (
            <div key={i} className="card-white p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 font-display text-xs font-bold flex items-center justify-center border border-blue-100">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-xs text-slate-500 leading-relaxed mb-4">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600">Phase {i + 1}</span>
                <span className="text-slate-400 font-mono text-xs">Step {i + 1} of 4 →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
