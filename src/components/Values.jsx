export default function Values() {
  return (
    <section id="enterprise" className="py-16 md:py-24 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-dark-surface text-white rounded-3xl p-8 sm:p-14 border border-dark-border shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-coral bg-coral/15 px-3 py-1 rounded-full border border-coral/20 mb-4">
              ● Enterprise & Scale
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Built for high-growth brands and enterprise scale.
            </h2>
            <p className="mt-4 font-body text-base sm:text-lg text-gray-400 leading-relaxed">
              Bizgroww provides dedicated engineering teams, strict SLA guarantees, and enterprise security frameworks for companies looking to move fast without breaking systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-coral px-7 py-3.5 text-sm shadow-md"
              >
                Schedule Enterprise Call →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/20 text-white font-display text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Request Custom SLA
              </a>
            </div>
          </div>

          {/* Grid of Enterprise Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-dark-border">
            {[
              {
                title: 'Dedicated Growth Engineering',
                desc: 'Full-time senior engineers, product designers, and growth strategists embedded in your Slack or Teams.',
              },
              {
                title: 'SOC-2 & Enterprise Security',
                desc: 'Bank-grade data encryption, compliance-ready code standards, and secure deployment pipelines.',
              },
              {
                title: 'Guaranteed Delivery SLA',
                desc: 'Production releases delivered on strict 8-week sprints backed by uptime & performance SLAs.',
              },
            ].map((f, i) => (
              <div key={i} className="bg-dark-card p-6 rounded-2xl border border-dark-border">
                <div className="w-8 h-8 rounded-lg bg-coral/20 text-coral font-bold flex items-center justify-center mb-4 text-sm">
                  ✓
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-xs text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


