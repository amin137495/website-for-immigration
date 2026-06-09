import { BookingForm } from './booking-form'
import { Clock, MapPin, Phone } from 'lucide-react'

const info = [
  { icon: Phone, label: 'تماس و واتس‌اپ', value: '۰۲۱ - ۱۲۳۴ ۵۶۷۸' },
  { icon: Clock, label: 'ساعات کاری', value: 'شنبه تا چهارشنبه، ۹ تا ۱۸' },
  { icon: MapPin, label: 'دفتر مرکزی', value: 'تهران، خیابان ولیعصر' },
]

export function BookingSection() {
  return (
    <section id="booking" className="bg-secondary/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            رزرو مشاوره
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            اولین قدم را همین امروز بردارید
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            فرم زیر را تکمیل کنید تا کارشناسان ما برای یک جلسه مشاوره رایگان با
            شما تماس بگیرند. اطلاعات شما کاملاً محرمانه باقی می‌ماند.
          </p>

          <div className="mt-2 flex flex-col gap-4">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-card text-primary shadow-sm">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  )
}
