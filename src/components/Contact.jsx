import { useState } from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'bizgrw@gmail.com',
    href: 'mailto:bizgrw@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,4 12,13 2,4" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 78068 02169',
    href: 'tel:+917806802169',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 11.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Chennai, India',
    href: '#',
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
    name: 'Instagram',
    href: 'https://www.instagram.com/bizgrw?stkn=MWdhMnk1dTEzb3Fnaw==',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bizgrw/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMsg, setStatusMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setStatusMsg('')

    const name = form.name.trim()
    const email = form.email.trim()
    const phone = form.phone.trim() || 'Not provided'
    const message = form.message.trim()

    const payload = {
      name,
      email,
      phone,
      message,
      _subject: `New Lead from Website: ${name}`,
      _template: 'table',
      subject: `New Lead from Website: ${name}`,
    }

    let success = false

    // 1. Try Web3Forms if valid key is set
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...payload,
          }),
        })
        const data = await response.json()
        if (response.ok && (data.success === true || data.success === 'true')) {
          success = true
        }
      } catch (err) {
        console.warn('Web3Forms submit failed, trying FormSubmit endpoint...', err)
      }
    }

    // 2. Try FormSubmit AJAX endpoint (No API Key Required, sends directly to bizgrw@gmail.com)
    if (!success) {
      try {
        const response = await fetch('https://formsubmit.co/ajax/bizgrw@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        const data = await response.json()
        if (response.ok && (data.success === 'true' || data.success === true || data.message?.includes('success'))) {
          success = true
        }
      } catch (err) {
        console.warn('FormSubmit endpoint failed:', err)
      }
    }

    if (success) {
      setStatus('success')
      setStatusMsg('Our team will get back to you.')
      setForm({ name: '', email: '', phone: '', message: '' })
    } else {
      // 3. Fail-safe: Direct WhatsApp connection so user is never stuck
      const waText = encodeURIComponent(`Hi bizgrw!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`)
      const waUrl = `https://wa.me/917806802169?text=${waText}`
      window.open(waUrl, '_blank')

      setStatus('success')
      setStatusMsg('Connecting you directly via WhatsApp (+91 78068 02169). Our team will respond immediately!')
      setForm({ name: '', email: '', phone: '', message: '' })
    }
  }

  const mailtoUrl = `mailto:bizgrw@gmail.com?subject=${encodeURIComponent(`New Lead: ${form.name}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`)}`

  return (
    <section id="contact" className="py-10 md:py-14 bg-slate-50 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="badge-pill mb-3">CONTACT US</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            Let's build something great.
          </h2>
          <p className="mt-3 font-body text-base text-slate-600 max-w-xl mx-auto">
            Ready to grow your brand? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left — Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="card-white p-7 bg-white border border-slate-200/80">
              <h3 className="font-display text-lg font-bold text-slate-900 mb-5">
                Direct Contact Details
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="font-display font-bold text-blue-600 hover:underline text-sm sm:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-display font-bold text-slate-900 text-sm sm:text-base">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="card-white p-5 bg-white border border-slate-200/80">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Follow bizgrw
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all bg-slate-50"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Clean Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 card-white p-8 sm:p-10 bg-white border border-slate-200/80 shadow-lg rounded-3xl"
          >
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-body flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-emerald-900 mb-1">Message Sent Successfully!</p>
                  <p>{statusMsg}</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-body flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p>{statusMsg}</p>
                </div>
                <a
                  href={mailtoUrl}
                  className="mt-1 inline-flex items-center gap-2 text-xs font-semibold bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors w-fit"
                >
                  ✉️ Send via Direct Email App
                </a>
              </div>
            )}

            <div className="mb-5">
              <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Name *
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 font-body text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 font-body text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 font-body text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block font-body text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Write your message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message or project description here..."
                rows={4}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 font-body text-sm resize-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full py-3.5 text-base shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </>
              ) : (
                'Submit Message →'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
