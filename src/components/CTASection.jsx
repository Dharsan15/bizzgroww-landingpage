export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="card-white bg-white p-10 sm:p-16 text-center border border-slate-200/80 shadow-xl rounded-3xl relative overflow-hidden">
          {/* Prominent Logo Badge in CTA */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-4 rounded-3xl bg-blue-50/60 flex items-center justify-center border border-blue-100/80 shadow-xs">
              <img
                src="/logo.png"
                alt="bizgrw logo"
                className="h-16 sm:h-20 w-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 max-w-2xl mx-auto leading-tight">
            Start growing your revenue today.
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Book a quick call with <strong className="text-slate-900">bizgrw</strong>. We’ll review your business goals, suggest clear website improvements, and share a custom growth plan.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary px-8 py-3.5 text-base shadow-md w-full sm:w-auto"
            >
              Book a call
            </a>
            <a
              href="#services"
              className="btn-secondary px-7 py-3.5 text-base w-full sm:w-auto"
            >
              See our services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
