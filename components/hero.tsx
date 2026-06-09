import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'ویزای تحصیلی',
  'ویزای کاری',
  'دوره زبان آلمانی A1 تا B2',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            همراه مطمئن شما تا اروپا
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            رویای زندگی در اروپا را به واقعیت تبدیل کنید
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            ما به ایرانیانی که قصد مهاجرت به اروپا از طریق ویزای تحصیلی یا
            پیشنهاد شغلی را دارند مشاوره تخصصی می‌دهیم و شما را برای آزمون‌های
            زبان آلمانی از سطح مبتدی تا پیشرفته آماده می‌کنیم.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="size-5 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#booking"
              className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              رزرو مشاوره رایگان
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-card px-7 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              مشاهده خدمات
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <img
              src="/brandenburg-gate.png"
              alt="دروازه براندنبورگ در برلین، نماد مهاجرت به آلمان"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-2xl border border-border bg-card px-6 py-4 shadow-lg">
            <p className="text-2xl font-bold text-primary">+۱۲۰۰</p>
            <p className="text-sm text-muted-foreground">پرونده موفق</p>
          </div>
        </div>
      </div>
    </section>
  )
}
