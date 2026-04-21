'use client'
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react'

const bullets = [
  'Cohort-based live learning with IIT/IIM faculty',
  'Dedicated mentors for every team',
  'Real-time analytics & ROI reporting',
]

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">

      {/* Background decorative circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400/10 rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-20 left-1/3 w-40 h-40 bg-white/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
              Trusted by 500+ enterprises across India
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
              Transform Your{' '}
              <span className="text-yellow-300">Workforce</span>
              {' '}with World-Class Learning
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl animate-fade-up animate-delay-100">
              Accredian Enterprise delivers cohort-based upskilling programs built for
              modern teams — with live faculty, dedicated mentors, and measurable outcomes.
            </p>

            <ul className="space-y-3 mb-10">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 text-sm animate-fade-up" style={{ animationDelay: `${(i + 2) * 100}ms` }}>
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-400">
              <button
                onClick={() => scrollTo('#lead-form')}
                className="btn-primary bg-white !text-white hover:bg-yellow-50 !shadow-xl group"
              >
                Get a Free Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform " />
              </button>
              <button
                onClick={() => scrollTo('#programs')}
                className="btn-outline"
              >
                <PlayCircle size={18} />
                View Programs
              </button>
            </div>
          </div>

          {/* Right — floating dashboard card */}
          <div className="hidden lg:flex justify-center items-center animate-float">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-600 text-gray-800 text-sm">Team Progress Overview</h3>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">Live</span>
              </div>

              {/* Mini stat row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { val: '94%', label: 'Completion', color: '#4361ee' },
                  { val: '4.8★', label: 'Satisfaction', color: '#f72585' },
                  { val: '82%',  label: 'Skill Gain', color: '#06d6a0' },
                ].map(s => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="font-display font-bold text-lg" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              {[
                { name: 'Data Science', pct: 88, color: '#4361ee' },
                { name: 'Product Mgmt', pct: 74, color: '#f72585' },
                { name: 'Full Stack Dev', pct: 91, color: '#06d6a0' },
              ].map(p => (
                <div key={p.name} className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>{p.name}</span>
                    <span className="font-medium">{p.pct}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${p.pct}%`, background: p.color }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#4361ee', '#f72585', '#06d6a0', '#fb8500'].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                      {['R', 'A', 'S', 'P'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">48 learners active today</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
