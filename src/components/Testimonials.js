'use client'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/mockData'

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

function TestimonialCard({ name, role, company, avatar, avatarBg, quote, rating }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 card-hover flex flex-col h-full">
      <Quote size={28} className="text-brand-100 mb-4" />
      <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: avatarBg }}
        >
          {avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display font-600 text-gray-900 text-sm truncate">{name}</div>
          <div className="text-gray-400 text-xs truncate">{role} · {company}</div>
        </div>
        <StarRating count={rating} />
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const perPage = 2
  const pages   = Math.ceil(testimonials.length / perPage)
  const slice   = testimonials.slice(active * perPage, active * perPage + perPage)

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-heading mb-4">
            Loved by L&amp;D leaders across India
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Don't take our word for it — hear directly from the people who've transformed their teams.
          </p>
        </div>

        {/* Desktop: all 4 cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
        </div>

        {/* Mobile: paginated 2-at-a-time */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-4 mb-6">
            {slice.map(t => <TestimonialCard key={t.id} {...t} />)}
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setActive(a => Math.max(0, a - 1))}
              disabled={active === 0}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-500 hover:border-brand-200 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-brand-500 w-5' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive(a => Math.min(pages - 1, a + 1))}
              disabled={active === pages - 1}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-500 hover:border-brand-200 disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          {['G2 Score: 4.8/5', '500+ enterprise clients', '1,20,000+ learners', 'NPS: 72'].map(item => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-300" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
