import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { GermanCourse } from '@/components/german-course'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { BookingSection } from '@/components/booking-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <GermanCourse />
        <Process />
        <Testimonials />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  )
}
