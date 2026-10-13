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
    <section id="process" className="py-8 md:py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-[#f3f3f3] text-[#141414] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          HOW IT WORKS
        </span>
        <h2 className="text-3xl sm:text-5xl font-[650] text-[#141414] max-w-3xl mx-auto tracking-[-0.02em] leading-[1.08]">
          4 Easy Steps.{' '}
          <span className="text-[#707070] block sm:inline">
            We handle all the tech work.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg font-[300] text-[#707070] max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
          A simple, stress-free process to take your business online and bring in new customers.
        </p>

        {/* 4-Step Grid — Mobbin 24px cards with hairline outlines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {steps.map((s, i) => (
            <div
              key={i}
              className="card-mobbin flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Squircle Step Number */}
                  <span className="w-9 h-9 rounded-[30%] bg-[#f3f3f3] text-[#141414] text-xs font-bold flex items-center justify-center">
                    {s.num}
                  </span>
                  <span className="bg-[#f3f3f3] text-[#707070] text-xs font-semibold px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-xl font-[650] text-[#141414] mb-2.5 tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-sm font-normal text-[#707070] leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs font-semibold text-[#707070]">
                <span>Phase {i + 1}</span>
                <span>Step {i + 1} of 4 →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
