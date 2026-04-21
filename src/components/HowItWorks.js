'use client'
import { howItWorksSteps } from '@/data/mockData'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Process</span>
          <h2 className="section-heading mb-4">From onboarding to outcomes <br className="hidden md:block" />in 4 simple steps</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We handle everything — so your team can focus on learning, not logistics.
          </p>
        </div>

        <div className="relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-500 via-accent-400 to-brand-500 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorksSteps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center relative">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-brand-100 flex items-center justify-center mb-5 shadow-sm z-10 relative">
                  <span className="font-display font-bold text-2xl text-brand-500">{s.step}</span>
                </div>
                <h3 className="font-display font-600 text-gray-900 text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#lead-form"
            onClick={e => { e.preventDefault(); document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary inline-flex"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}
