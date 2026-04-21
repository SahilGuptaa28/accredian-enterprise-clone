import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import TrustedBy    from '@/components/TrustedBy'
import Features     from '@/components/Features'
import HowItWorks   from '@/components/HowItWorks'
import Stats        from '@/components/Stats'
import Programs     from '@/components/Programs'
import Testimonials from '@/components/Testimonials'
import LeadForm     from '@/components/LeadForm'
import FAQ          from '@/components/FAQ'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Stats />
      <Programs />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  )
}
