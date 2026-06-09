import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'سارا محمدی',
    role: 'دانشجوی کارشناسی ارشد در برلین',
    text: 'با راهنمایی تیم مسیر اروپا تونستم پذیرش دانشگاه و ویزای تحصیلیم رو بدون استرس بگیرم. واقعاً تو هر مرحله کنارم بودن.',
  },
  {
    name: 'امیر رضایی',
    role: 'مهندس نرم‌افزار در مونیخ',
    text: 'دوره زبان آلمانی از A1 تا B2 و کمک برای پیدا کردن کار باعث شد خیلی سریع‌تر از چیزی که فکر می‌کردم به آلمان مهاجرت کنم.',
  },
  {
    name: 'نگار احمدی',
    role: 'پرستار در وین',
    text: 'پشتیبانی بعد از ورود فوق‌العاده بود؛ از پیدا کردن خونه تا کارهای اداری همه‌چیز رو راهنمایی کردن.',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            داستان موفقیت مهاجران ما
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            صدها نفر مسیر خود به اروپا را با ما آغاز کرده‌اند.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7"
            >
              <Quote className="size-8 text-primary" />
              <blockquote className="text-pretty leading-relaxed text-foreground">
                {item.text}
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-bold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
