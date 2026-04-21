import { Zap, BarChart2, Users, Award, Headphones, Globe } from 'lucide-react'
import { features } from '@/data/mockData'

const iconMap   = { Zap, BarChart2, Users, Award, Headphones, Globe }
const colorMap  = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
  pink:   { bg: 'bg-pink-50',   text: 'text-pink-600',   border: 'border-pink-100' },
  green:  { bg: 'bg-green-50',  text: 'text-green-600',  border: 'border-green-100' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
  teal:   { bg: 'bg-teal-50',   text: 'text-teal-600',   border: 'border-teal-100' },
}

function FeatureCard({ icon, title, description, color }) {
  const Icon   = iconMap[icon]
  const colors = colorMap[color]
  return (
    <div className={`bg-white rounded-2xl p-6 border ${colors.border} card-hover`}>
      <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
        <Icon size={22} className={colors.text} />
      </div>
      <h3 className="font-display font-600 text-gray-900 text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Why Accredian</span>
          <h2 className="section-heading mb-4">
            Everything your L&amp;D team needs,{' '}
            <span className="gradient-text">in one platform</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Purpose-built for enterprises that want real skill transformation —
            not just course completions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <FeatureCard key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
