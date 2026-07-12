import { AlertTriangle } from 'lucide-react'

export function Disclaimer() {
  return (
    <section className="bg-secondary/40 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <AlertTriangle className="size-5" />
            </span>
            <h3 className="text-lg font-bold text-foreground">توجه مهم</h3>
          </div>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            اینجانب مشاور مالیاتی (Steuerberater) یا وکیل/مشاور حقوقی
            (Rechtsanwalt) نیستم و مشاوره رسمی مالیاتی یا حقوقی ارائه
            نمی‌دهم. خدمات ارائه‌شده صرفاً جنبه راهنمایی، هماهنگی و معرفی به
            متخصصان مربوطه دارد. این مجموعه توسط یک شخص حقیقی اداره می‌شود و
            شرکت یا مؤسسه رسمی محسوب نمی‌شود.
          </p>
          <hr className="border-border" />
          <p
            className="text-pretty leading-relaxed text-muted-foreground"
            dir="ltr"
          >
            Hinweis: Ich bin weder Steuerberater noch Rechtsanwalt und biete
            keine steuerliche oder rechtliche Beratung an. Die angebotenen
            Leistungen beschränken sich auf allgemeine Unterstützung,
            Koordination und Vermittlung an entsprechende Fachpersonen. Es
            handelt sich hierbei um eine Einzelperson, nicht um ein
            Unternehmen oder eine zugelassene Kanzlei bzw.
            Steuerberatungsgesellschaft.
          </p>
        </div>
      </div>
    </section>
  )
}
