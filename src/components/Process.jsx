const steps = [
  {
    num: '01',
    title: 'Audit & Strategy',
    desc: 'We analyze your current product metrics, user funnels, and growth bottlenecks.',
    tag: 'Sprint Kickoff',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'Interactive Figma prototypes and high-converting UI concepts built in days.',
    tag: 'UI/UX Specs',
  },
  {
    num: '03',
    title: 'High-Velocity Build',
    desc: 'Clean code execution with React, Next.js, or mobile frameworks ready to ship.',
    tag: 'Dev Execution',
  },
  {
    num: '04',
    title: 'Capture & Scale',
    desc: 'Live deployment, automated telemetry, and continuous conversion optimization.',
    tag: 'Revenue Scale',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-cream-50 border-t border-black/[0.05]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal max-w-3xl mx-auto">
          Clear process.{' '}
          <span className="text-charcoal-subtle font-normal italic">Measurable action.</span>
        </h2>
        <p className="mt-4 font-body text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto mb-16">
          Four transparent phases designed to move your digital product from concept to market leadership.
        </p>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((s, i) => (
            <div key={i} className="card-white p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-coral-light text-coral font-display text-xs font-bold flex items-center justify-center border border-coral/20">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-cream-100 text-charcoal-subtle px-2 py-0.5 rounded">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-xs text-charcoal-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-coral">Step {i + 1} of 4</span>
                <span className="text-charcoal-subtle">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
