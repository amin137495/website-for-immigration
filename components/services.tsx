import { GraduationCap, Briefcase, FileCheck2, Home } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'ویزای تحصیلی',
    description:
      'انتخاب رشته و دانشگاه، آماده‌سازی مدارک، نامه پذیرش و راهنمایی کامل تا دریافت ویزای تحصیلی اروپا.',
    points: ['انتخاب دانشگاه و رشته', 'تهیه و ترجمه مدارک', 'مصاحبه سفارت'],
  },
  {
    icon: Briefcase,
    title: 'ویزای کاری و پیشنهاد شغلی',
    description:
      'یافتن فرصت شغلی متناسب با مهارت شما، تنظیم رزومه اروپایی و پیگیری قرارداد کاری و ویزای کار.',
    points: ['رزومه و لینکدین حرفه‌ای', 'یافتن کارفرما', 'قرارداد و ویزای کار'],
  },
  {
    icon: FileCheck2,
    title: 'ارزیابی و آماده‌سازی مدارک',
    description:
      'بررسی شرایط شما، ارزیابی شانس پذیرش و آماده‌سازی کامل پرونده مهاجرتی بر اساس قوانین روز.',
    points: ['ارزیابی رایگان اولیه', 'تأیید مدارک', 'بیمه و اقامت'],
  },
  {
    icon: Home,
    title: 'اسکان و پس از ورود',
    description:
      'راهنمایی برای یافتن محل سکونت، افتتاح حساب بانکی و امور اولیه پس از ورود به کشور مقصد.',
    points: ['یافتن مسکن', 'ثبت‌نام شهری', 'پشتیبانی پس از ورود'],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            خدمات مهاجرتی ما
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            از اولین قدم تا استقرار کامل در اروپا، در هر مرحله کنار شما هستیم.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <service.icon className="size-6" />
              </span>
              <h3 className="text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
