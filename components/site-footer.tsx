import { Globe } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Globe className="size-5" />
          </span>
          <span className="text-lg font-bold text-foreground">مسیر اروپا</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          مشاوره مهاجرت تحصیلی و کاری به اروپا و دوره‌های زبان آلمانی
        </p>
        <p className="text-sm text-muted-foreground">
          © ۱۴۰۴ مسیر اروپا. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  )
}
