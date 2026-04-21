'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Solutions', href: '#features' },
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-display font-700 text-xl">
            <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm font-bold">A</span>
            <span className={scrolled ? 'text-gray-900' : 'text-white'}>Accredian</span>
            <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full ml-1">Enterprise</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav('#lead-form')}
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              Contact Sales
            </button>

            <button
              onClick={() => handleNav('#lead-form')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2 text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get a Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-3 py-3 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-500 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => handleNav('#lead-form')}
                className="w-full btn-primary justify-center"
              >
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
