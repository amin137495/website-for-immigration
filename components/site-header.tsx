'use client'

import { Globe } from 'lucide-react'

const links = [
  { href: '#services', label: 'خدمات' },
  { href: '#german', label: 'دوره آلمانی' },
  { href: '#process', label: 'مراحل کار' },
  { href: '#booking', label: 'رزرو مشاوره' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Globe className="size-5" />
          </span>
          <span className="text-lg font-bold text-foreground">مسیر اروپا</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          رزرو مشاوره رایگان
        </a>
      </div>
    </header>
  )
}
