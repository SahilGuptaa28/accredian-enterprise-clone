'use client'
import { useEffect, useState } from 'react'
import { Building2, Users, BookOpen, Star, Award, Layers } from 'lucide-react'

const iconMap = { building: Building2, users: Users, book: BookOpen, star: Star, award: Award, layers: Layers }

const FALLBACK = [
  { id: 1, value: '500+',     label: 'Enterprise Partners', icon: 'building' },
  { id: 2, value: '1,20,000+', label: 'Learners Upskilled',  icon: 'users' },
  { id: 3, value: '200+',     label: 'Learning Programs',   icon: 'book' },
  { id: 4, value: '95%',      label: 'Learner Satisfaction', icon: 'star' },
  { id: 5, value: '40+',      label: 'Expert Mentors',      icon: 'award' },
  { id: 6, value: '15+',      label: 'Industry Domains',    icon: 'layers' },
]

export default function Stats() {
  const [stats,   setStats]   = useState(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/stats')
      .then(r => r.json())
      .then(d => { if (d.success) setStats(d.data) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="stats" className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Numbers that speak for themselves
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm">
            Accredian Enterprise has delivered measurable impact across India's fastest-growing companies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map(s => {
            const Icon = iconMap[s.icon] || Star
            return (
              <div key={s.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center stat-card-hover">
                <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="font-display font-bold text-2xl text-white mb-1">{s.value}</div>
                <div className="text-white/60 text-xs leading-snug">{s.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
