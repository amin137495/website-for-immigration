import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import './globals.css'

const vazir = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic', 'latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'مهاجرت به اروپا | مشاوره ویزای تحصیلی و کاری و دوره زبان آلمانی',
  description:
    'مشاوره تخصصی برای مهاجرت ایرانیان به اروپا از طریق ویزای تحصیلی یا پیشنهاد شغلی، همراه با دوره آمادگی زبان آلمانی از سطح A1 تا B2.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
