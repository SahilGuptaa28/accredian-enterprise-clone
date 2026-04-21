'use client'
import { Clock, PlayCircle, ChevronRight } from 'lucide-react'
import { programs } from '@/data/mockData'

const badgeColors = {
  blue:   'bg-blue-100 text-blue-700',
  pink:   'bg-pink-100 text-pink-700',
  purple: 'bg-purple-100 text-purple-700',
  green:  'bg-green-100 text-green-700',
}

function ProgramCard({ category, title, duration, sessions, badge, badgeColor, topics }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 card-hover flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-full">
          {category}
        </span>
        {badge && (
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[badgeColor] || 'bg-gray-100 text-gray-600'}`}>
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-display font-600 text-gray-900 text-lg mb-3 leading-snug">{title}</h3>

      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
        <span className="flex items-center gap-1"><Clock size={13} /> {duration}</span>
        <span className="flex items-center gap-1"><PlayCircle size={13} /> {sessions}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {topics.map(t => (
          <span key={t} className="text-xs bg-gray-50 text-gray-600 border border-gray-100 px-2.5 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-auto flex items-center gap-1.5 text-brand-500 text-sm font-medium hover:gap-3 transition-all duration-200"
      >
        Learn more <ChevronRight size={15} />
      </button>
    </div>
  )
}

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Programs</span>
          <h2 className="section-heading mb-4">
            Curated learning paths for{' '}
            <span className="gradient-text">every role</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            From data science to product management — we have cohort-based programs
            for every function in your organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(p => <ProgramCard key={p.id} {...p} />)}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  )
}
