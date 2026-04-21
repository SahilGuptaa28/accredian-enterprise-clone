'use client'
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const cols = [
  {
    heading: 'Solutions',
    links: ['Custom Cohorts', 'Analytics Dashboard', 'Mentorship Programs', 'Certification', 'API & Integrations'],
  },
  {
    heading: 'Programs',
    links: ['Data Science & AI', 'Product Management', 'Full Stack Dev', 'Engineering Leadership', 'View All Programs'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
  },
]

const socials = [
  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: Twitter,  href: 'https://twitter.com',  label: 'Twitter' },
  { Icon: Youtube,  href: 'https://youtube.com',  label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA banner */}
      <div className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Start transforming your workforce today
          </h2>
          <p className="text-white/70 mb-8 text-sm max-w-xl mx-auto">
            Join 500+ enterprises that have partnered with Accredian to build future-ready teams.
          </p>
          <button
            onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-brand-700 font-medium px-8 py-3 rounded-xl hover:bg-yellow-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Get a Free Demo
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm font-bold">A</span>
              <span className="font-display font-700 text-lg">Accredian</span>
              <span className="text-xs font-medium text-brand-300 bg-brand-900/40 px-2 py-0.5 rounded-full">Enterprise</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's leading enterprise learning platform — delivering cohort-based upskilling
              programs with IIT &amp; IIM faculty for modern organisations.
            </p>
            <div className="space-y-2 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2"><Mail size={14} className="text-brand-400" /> enterprise@accredian.com</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-brand-400" /> +91 9625 113 388</div>
              <div className="flex items-center gap-2"><MapPin size={14} className="text-brand-400" /> Bengaluru, India</div>
            </div>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <h4 className="font-display font-600 text-white text-sm mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Accredian. All rights reserved.</span>
          <span>Made with care for enterprise learning</span>
        </div>
      </div>
    </footer>
  )
}
