import { Clock, MapPin, Phone, Send } from 'lucide-react'

const info = [
  { icon: Phone, label: 'تماس تلفنی', value: '+49 176 7350 9128' },
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
            برای رزرو مشاوره رایگان، همین حالا در تلگرام با ما گفتگو را شروع
            کنید. اطلاعات شما کاملاً محرمانه باقی می‌ماند.
          </p>

          <div className="mt-2 flex flex-col gap-4">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-card text-primary shadow-sm">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground" dir="ltr">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-border bg-card p-10 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-accent text-primary">
            <Send className="size-9" />
          </span>
          <h3 className="text-2xl font-bold text-foreground">
            گفتگو در تلگرام
          </h3>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            برای دریافت مشاوره رایگان، روی دکمه زیر بزنید و مستقیم با ما در
            تلگرام گفتگو کنید.
          </p>
          <a
            href="https://t.me/mardanamin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Send className="size-5" />
            شروع گفتگو در تلگرام
          </a>
        </div>
      </div>
    </section>
  )
}
