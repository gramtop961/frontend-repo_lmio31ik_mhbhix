import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Speak with a consultant</h2>
            <p className="mt-3 text-slate-200">Tell us about your goals for UCaaS, CX or security and we’ll propose the fastest path to value.</p>
            <ul className="mt-6 space-y-2 text-slate-300 list-disc list-inside">
              <li>Discovery call within 24 hours</li>
              <li>Solution options and pricing in 1-2 weeks</li>
              <li>Pilot to production with white-glove delivery</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full name" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none" />
              <input name="email" type="email" required placeholder="Work email" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none" />
              <input name="company" placeholder="Company" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none sm:col-span-2" />
              <input name="phone" placeholder="Phone" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none" />
              <select name="interest" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none">
                <option value="UCaaS">UCaaS</option>
                <option value="CX">CX</option>
                <option value="Security">Security</option>
                <option value="Consulting">Consulting</option>
              </select>
              <textarea name="message" rows="4" placeholder="Tell us more" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none sm:col-span-2" />
            </div>
            <button className="mt-4 w-full bg-sky-400 hover:bg-sky-300 text-slate-900 font-semibold px-5 py-3 rounded-lg">Submit</button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-emerald-300' : 'text-rose-300'}`}>
                {status.ok ? 'Thanks! We\'ll be in touch shortly.' : status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}