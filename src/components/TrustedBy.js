import { partners } from '@/data/mockData'

export default function TrustedBy() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          {partners.map((name) => (
            <div
              key={name}
              className="text-gray-400 font-display font-600 text-lg hover:text-brand-500 transition-colors cursor-default select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
