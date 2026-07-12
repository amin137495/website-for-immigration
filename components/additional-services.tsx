import { Stethoscope, Calculator, KeyRound, Scale, Plane, Stamp } from 'lucide-react'

const additionalServices = [
  {
    icon: Stethoscope,
    title: 'همراهی در قرار ملاقات‌ها و امور اداری',
    description:
      'همراهی برای مراجعه به پزشک و ترجمه مکالمات، انجام امور اداری روزمره و کمک برای ثبت شرکت.',
    points: ['همراهی در ویزیت پزشک', 'ترجمه شفاهی و کتبی', 'ثبت شرکت و امور اداری'],
  },
  {
    icon: Calculator,
    title: 'راهنمایی برای ارتباط با مشاور مالیاتی',
    description:
      'کمک برای پیدا کردن و هماهنگی با مشاور مالیاتی (Steuerberater) متناسب با نیاز شما.',
    points: ['معرفی مشاور مالیاتی مناسب', 'هماهنگی جلسات', 'راهنمایی اولیه'],
  },
  {
    icon: KeyRound,
    title: 'کمک برای پیدا کردن مسکن در آلمان',
    description:
      'راهنمایی در جستجوی خانه، آماده‌سازی مدارک اجاره و هماهنگی با موجر یا آژانس املاک.',
    points: ['جستجوی مسکن مناسب', 'آماده‌سازی مدارک اجاره', 'هماهنگی با موجر'],
  },
  {
    icon: Scale,
    title: 'ارتباط با مشاوران حقوقی',
    description:
      'کمک برای پیدا کردن و برقراری ارتباط با وکیل یا مشاور حقوقی (Rechtsanwalt) متناسب با موضوع شما.',
    points: ['معرفی وکیل متخصص', 'هماهنگی اولیه', 'راهنمایی عمومی'],
  },
  {
    icon: Plane,
    title: 'برنامه‌ریزی سفر در اروپا و آلمان',
    description:
      'کمک در برنامه‌ریزی سفرهای داخل اروپا و آلمان، از رزرو بلیط تا تنظیم برنامه سفر.',
    points: ['برنامه‌ریزی مسیر سفر', 'رزرو بلیط و اقامتگاه', 'مشاوره سفر'],
  },
  {
    icon: Stamp,
    title: 'امور ویزا، اقامت و رفع مشکلات مهاجرتی',
    description:
      'پیگیری و راهنمایی برای امور ویزا، اقامت کاری و تحصیلی و کمک برای رفع موانع مهاجرتی.',
    points: ['پیگیری امور ویزا', 'اقامت کاری و تحصیلی', 'رفع موانع مهاجرتی'],
  },
]

export function AdditionalServices() {
  return (
    <section id="additional-services" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            خدمات تکمیلی
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            فراتر از ویزا و زبان، در کنار شما برای شروعی آسان‌تر در زندگی جدید.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {additionalServices.map((service) => (
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
