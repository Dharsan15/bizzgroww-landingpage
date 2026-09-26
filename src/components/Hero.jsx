export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-8 md:pt-32 md:pb-10 overflow-hidden bg-slate-50"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-5">
          <span className="badge-pill">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            GROW YOUR BUSINESS ONLINE
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight max-w-4xl mx-auto">
          We help your business{' '}
          <span className="text-slate-500 font-normal italic block sm:inline">
            get more customers online
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 font-body text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          <strong className="text-slate-900 font-semibold">bizgrw</strong> builds modern websites, mobile apps, and online ads that bring real paying customers straight to your door — zero technical knowledge needed.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center mt-7">
          <a
            href="#contact"
            className="btn-primary px-8 py-3.5 text-base shadow-md w-full sm:w-auto"
          >
            Get More Customers Now
          </a>
        </div>

        <p className="mt-5 font-body text-xs font-semibold tracking-widest text-slate-400 uppercase">
          WE BUILD YOUR WEBSITE • WE RUN YOUR ADS • YOU GROW YOUR BUSINESS
        </p>
      </div>
    </section>
  )
}
