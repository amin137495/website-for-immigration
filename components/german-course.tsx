import { Check } from 'lucide-react'

const levels = [
  {
    level: 'A1',
    title: 'مبتدی',
    desc: 'آشنایی با الفبا، جملات ساده و مکالمات روزمره پایه.',
  },
  {
    level: 'A2',
    title: 'مقدماتی',
    desc: 'گفت‌وگو درباره موضوعات آشنا و نیازهای روزمره.',
  },
  {
    level: 'B1',
    title: 'متوسط',
    desc: 'بیان تجربه‌ها، توصیف اهداف و درک متون عمومی.',
  },
  {
    level: 'B2',
    title: 'فوق متوسط',
    desc: 'مکالمه روان و درک متون پیچیده برای کار و تحصیل.',
  },
]

const features = [
  'کلاس‌های آنلاین و حضوری',
  'اساتید مجرب و دارای مدرک بین‌المللی',
  'آمادگی برای آزمون‌های Goethe و TestDaF',
  'گروه‌های کوچک و مکالمه‌محور',
]

export function GermanCourse() {
  return (
    <section id="german" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            {levels.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                  {item.level}
                </span>
                <h4 className="mt-3 font-bold text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex flex-col items-start gap-6 md:order-2">
          <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            دوره آمادگی زبان آلمانی
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            از سطح A1 تا B2، گام‌به‌گام تا تسلط
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            دوره‌های زبان آلمانی ما به‌صورت مرحله‌ای طراحی شده‌اند تا شما را برای
            زندگی، تحصیل و کار در کشورهای آلمانی‌زبان آماده کنند. در پایان دوره
            برای آزمون‌های رسمی زبان آماده خواهید بود.
          </p>
          <ul className="grid gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            ثبت‌نام در دوره زبان
          </a>
        </div>
      </div>
    </section>
  )
}
