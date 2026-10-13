import Logo from './Logo'

export default function CTASection() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="card-soft p-10 sm:p-14 text-center">
          {/* Mobbin Placeholder Logo */}
          <div className="flex justify-center mb-8">
            <Logo />
          </div>

          <h2 className="text-3xl sm:text-5xl font-[650] text-[#141414] max-w-2xl mx-auto leading-[1.08] tracking-[-0.02em]">
            Ready to get more customers for your business?
          </h2>

          <p className="mt-5 text-base sm:text-lg font-[300] text-[#707070] max-w-xl mx-auto leading-relaxed">
            Talk with the <strong className="text-[#141414] font-medium">bizgrw</strong> team today. We’ll show you exactly how to get more calls, website visits, and sales — with simple, hassle-free steps.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href="#contact"
              className="btn-primary px-9 py-4 text-base"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
