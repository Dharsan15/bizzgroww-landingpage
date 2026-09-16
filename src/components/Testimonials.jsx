const testimonials = [
  {
    quote:
      "Bizgroww didn't just build our website — they rebuilt how we think about our digital presence. Revenue from organic traffic is up 140% in six months.",
    name: 'Priya Sharma',
    role: 'Founder at NovaByte Solutions',
    initials: 'PS',
  },
  {
    quote:
      "Most agencies talk about being partners. Bizgroww actually shows up like one. They're in our Slack, they know our metrics, and they care about our wins.",
    name: 'Arjun Mehta',
    role: 'CEO at CloudLeap Technologies',
    initials: 'AM',
  },
  {
    quote:
      'We needed to move fast for our product launch. Bizgroww delivered a production-ready app in 8 weeks that our users genuinely love using.',
    name: 'Kavitha Rajan',
    role: 'Head of Product at FinEdge',
    initials: 'KR',
  },
]

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1.25l1.88 3.81 4.21.61-3.04 2.96.72 4.2L8 10.27l-3.77 2.26.72-4.2L1.91 5.67l4.21-.61L8 1.25z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-cream-50 border-t border-black/[0.05]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal">
            What our partners say.
          </h2>
          <p className="mt-3 font-body text-base text-charcoal-muted max-w-xl mx-auto">
            Real feedback from founders, product leads, and growth teams who scaled with Bizgroww.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-white p-8 bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between h-full hover:border-coral/30"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 text-coral mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>

                {/* Quote text */}
                <p className="font-body text-charcoal-muted italic leading-relaxed mb-8 text-sm sm:text-base">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-black/[0.06] pt-5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-coral-light flex items-center justify-center shrink-0 border border-coral/20">
                  <span className="font-display text-xs font-bold text-coral">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-charcoal text-sm">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-charcoal-subtle">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


