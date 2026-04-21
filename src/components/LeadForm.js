'use client'
import { useState } from 'react'
import { CheckCircle, Loader2, ArrowRight, Building2, Mail, Phone, Users, MessageSquare } from 'lucide-react'

const teamSizes = ['1–10', '11–50', '51–200', '201–500', '500+']

const inputCls = `
  w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900
  placeholder-gray-400 bg-white
  focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
  transition-all duration-150
`

export default function LeadForm() {
  const [form,    setForm]    = useState({ name: '', company: '', email: '', phone: '', teamSize: '', message: '' })
  const [errors,  setErrors]  = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [apiErr,  setApiErr]  = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.company.trim()) e.company = 'Company is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    return e
  }

  const handleChange = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setApiErr('')
    try {
      const res  = await fetch('/api/leads', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setForm({ name: '', company: '', email: '', phone: '', teamSize: '', message: '' })
      } else {
        setApiErr(data.error || 'Something went wrong.')
      }
    } catch {
      setApiErr('Network error — please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lead-form" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — copy */}
          <div>
            <span className="section-tag">Get Started</span>
            <h2 className="section-heading mb-5">
              Ready to transform your <span className="gradient-text">workforce?</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Talk to our enterprise team and get a free, no-obligation demo
              tailored to your organisation's goals and team size.
            </p>

            <div className="space-y-4">
              {[
                { icon: CheckCircle, text: 'Free 30-min discovery call with our L&D consultants' },
                { icon: CheckCircle, text: 'Custom program proposal within 48 hours' },
                { icon: CheckCircle, text: 'Pilot cohort of up to 20 learners at no cost' },
                { icon: CheckCircle, text: 'Dedicated account manager from day one' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social proof mini-card */}
            <div className="mt-10 bg-brand-50 rounded-2xl p-5 border border-brand-100">
              <p className="text-sm text-gray-700 italic mb-3">
                "We went from signing the contract to rolling out our first cohort in under 3 weeks.
                The Accredian team was exceptional."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold">SK</div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">Sneha Kulkarni</div>
                  <div className="text-xs text-gray-500">Head of HR, Swiggy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="font-display font-600 text-gray-900 text-xl mb-2">You're all set!</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Our enterprise team will reach out within 24 hours to schedule your demo.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-brand-500 text-sm font-medium hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-display font-600 text-gray-900 text-lg mb-6">Request a free demo</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name *</label>
                    <input
                      className={`${inputCls} ${errors.name ? 'border-red-300 ring-1 ring-red-200' : ''}`}
                      placeholder="Priya Menon"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Company *</label>
                    <input
                      className={`${inputCls} ${errors.company ? 'border-red-300 ring-1 ring-red-200' : ''}`}
                      placeholder="Flipkart"
                      value={form.company}
                      onChange={e => handleChange('company', e.target.value)}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      className={`${inputCls} ${errors.email ? 'border-red-300 ring-1 ring-red-200' : ''}`}
                      placeholder="priya@company.com"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      className={inputCls}
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Team Size</label>
                  <select
                    className={inputCls}
                    value={form.teamSize}
                    onChange={e => handleChange('teamSize', e.target.value)}
                  >
                    <option value="">Select team size…</option>
                    {teamSizes.map(s => <option key={s} value={s}>{s} employees</option>)}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">What are you looking to upskill?</label>
                  <textarea
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder="e.g. Data Science for our analytics team of 30 engineers…"
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                  />
                </div>

                {apiErr && (
                  <div className="mb-4 px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600">
                    {apiErr}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 size={16} className="animate-spin" /> Submitting…</>
                  ) : (
                    <>Request Demo <ArrowRight size={16} /></>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  No spam. We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
