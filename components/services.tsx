import { resolveIcon } from '@/lib/icons'
import type { ServicesContent } from '@/lib/content/defaults'

export function Services({ content }: { content: ServicesContent }) {
  return (
    <section id="services" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {content.items.map((service) => {
            const Icon = resolveIcon(service.icon)
            return (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon className="size-6" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
