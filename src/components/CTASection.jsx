export default function CTASection() {
  return (
    <section className="py-8 md:py-12 bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="card-white bg-white p-8 sm:p-12 text-center border border-slate-200/80 shadow-xl rounded-3xl relative overflow-hidden">
          {/* Prominent Logo Badge in CTA */}
          <div className="flex justify-center mb-5">
            <div className="px-5 py-3 rounded-2xl bg-blue-50/60 flex items-center justify-center border border-blue-100/80 shadow-xs">
              <img
                src="/logo.png"
                alt="bizgrw logo"
                className="h-14 sm:h-16 w-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 max-w-2xl mx-auto leading-tight">
            Ready to get more customers for your business?
          </h2>

          <p className="mt-3 font-body text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Talk with the <strong className="text-slate-900">bizgrw</strong> team today. We’ll show you exactly how to get more calls, website visits, and sales — with simple, hassle-free steps.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <a
              href="#contact"
              className="btn-primary px-8 py-3.5 text-base shadow-md w-full sm:w-auto"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
