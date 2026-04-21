'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/mockData'

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-display font-500 text-gray-900 text-sm leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">FAQ</span>
          <h2 className="section-heading mb-4">Common questions, answered</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Still have questions? Our team is happy to walk you through everything.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
          <button
            onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Talk to our team
          </button>
        </div>
      </div>
    </section>
  )
}
