export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-6">
          <span className="badge-pill">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            DIGITAL AGENCY
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight max-w-4xl mx-auto">
          Growth your team{' '}
          <span className="text-slate-500 font-normal italic block sm:inline">
            will look forward to
          </span>
        </h1>

        {/* Subtitle - simplified for customer clarity */}
        <p className="mt-6 font-body text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          <strong className="text-slate-900 font-semibold">bizgrw</strong> helps ambitious brands build fast websites, mobile apps, and high-converting marketing campaigns that compound revenue from day one.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
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
            Book a demo
          </a>
        </div>

        <p className="mt-4 font-body text-xs font-semibold tracking-widest text-slate-400 uppercase">
          GROW YOUR BRAND. GROW YOUR BUSINESS.
        </p>
      </div>
    </section>
  )
}
