const steps = [
  {
    number: '۱',
    title: 'مشاوره اولیه رایگان',
    desc: 'شرایط، اهداف و سوابق شما را بررسی می‌کنیم و بهترین مسیر را پیشنهاد می‌دهیم.',
  },
  {
    number: '۲',
    title: 'طراحی نقشه راه',
    desc: 'یک برنامه شخصی‌سازی‌شده برای ویزا یا دوره زبان متناسب با شما تنظیم می‌شود.',
  },
  {
    number: '۳',
    title: 'آماده‌سازی و اقدام',
    desc: 'مدارک، آزمون‌ها و فرآیند درخواست را قدم‌به‌قدم با هم پیش می‌بریم.',
  },
  {
    number: '۴',
    title: 'ورود به اروپا',
    desc: 'تا دریافت ویزا و استقرار در کشور مقصد در کنار شما خواهیم بود.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            مسیر همکاری ما
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            یک فرآیند شفاف و ساده در چهار مرحله.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
