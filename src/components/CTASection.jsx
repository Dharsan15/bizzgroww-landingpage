export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="card-white bg-white p-10 sm:p-16 text-center border border-black/[0.08] shadow-xl rounded-3xl relative overflow-hidden">
          {/* Top Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-coral-light flex items-center justify-center text-coral text-2xl shadow-xs border border-coral/20">
              🚀
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal max-w-2xl mx-auto leading-tight">
            Start growing your revenue today.
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-charcoal-muted max-w-xl mx-auto">
            Book a free 30-minute growth call. We’ll analyze your current product, identify high-leverage acquisition channels, and map out your sprint.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-coral px-8 py-4 text-base shadow-md w-full sm:w-auto"
            >
              Start free strategy call →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-black/10 text-charcoal font-display text-sm font-semibold hover:bg-black/5 transition-colors w-full sm:w-auto"
            >
              Discuss custom scope →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
