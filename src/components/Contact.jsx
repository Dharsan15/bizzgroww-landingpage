import { useState } from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'hello@bizgroww.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,4 12,13 2,4" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 98765 43210',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 11.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Chennai, India',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

const socials = [
  {
    name: 'LinkedIn',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for reaching out! Our team will contact you within 24 hours.')
    setForm({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-50 border-t border-black/[0.05]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-charcoal">
            Let's build something great.
          </h2>
          <p className="mt-3 font-body text-base text-charcoal-muted max-w-xl mx-auto">
            Ready to accelerate your product growth? Send us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="card-white p-8 bg-white mb-6">
              <h3 className="font-display text-lg font-bold text-charcoal mb-6">
                Direct Contact Details
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center text-coral shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-charcoal-subtle uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="font-display font-bold text-charcoal text-sm sm:text-base">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="card-white p-6 bg-white">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
                Follow Bizgroww
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-charcoal-muted hover:border-coral hover:text-coral hover:scale-110 transition-all bg-cream-50"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 card-white p-8 sm:p-10 bg-white border border-black/[0.08] shadow-lg rounded-3xl"
          >
            {[
              { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
              { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Inc.' },
            ].map((field) => (
              <div key={field.name} className="mb-5">
                <label className="block font-body text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.name !== 'company'}
                  className="w-full bg-cream-50 border border-black/10 rounded-xl px-4 py-3.5 text-charcoal placeholder-charcoal-subtle font-body text-sm transition-all focus:border-coral focus:ring-2 focus:ring-coral/20 focus:outline-none"
                />
              </div>
            ))}

            <div className="mb-6">
              <label className="block font-body text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
                Project Goal / Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project timeline and revenue goals..."
                rows={5}
                required
                className="w-full bg-cream-50 border border-black/10 rounded-xl px-4 py-3.5 text-charcoal placeholder-charcoal-subtle font-body text-sm resize-none transition-all focus:border-coral focus:ring-2 focus:ring-coral/20 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn-coral w-full py-4 text-base shadow-md cursor-pointer"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}


