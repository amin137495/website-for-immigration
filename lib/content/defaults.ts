/**
 * Default site content. These values mirror the original hardcoded copy and act
 * as a fallback whenever a section has not been customized by an admin in the DB.
 * The shapes here are the single source of truth for the editable content model.
 */

export type HeroContent = {
  badge: string
  title: string
  description: string
  highlights: string[]
  primaryCtaLabel: string
  secondaryCtaLabel: string
  image: string
  statValue: string
  statLabel: string
}

export type ServiceItem = {
  icon: string
  title: string
  description: string
  points: string[]
}

export type ServicesContent = {
  title: string
  subtitle: string
  items: ServiceItem[]
}

export type GermanLevel = {
  level: string
  title: string
  desc: string
}

export type GermanCourseContent = {
  badge: string
  title: string
  description: string
  ctaLabel: string
  levels: GermanLevel[]
  features: string[]
}

export type ProcessStep = {
  number: string
  title: string
  desc: string
}

export type ProcessContent = {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export type TestimonialItem = {
  name: string
  role: string
  text: string
}

export type TestimonialsContent = {
  title: string
  subtitle: string
  items: TestimonialItem[]
}

export type ContactInfo = {
  icon: string
  label: string
  value: string
}

export type BookingContent = {
  badge: string
  title: string
  description: string
  info: ContactInfo[]
}

export type BrandContent = {
  name: string
  footerTagline: string
  footerCopyright: string
}

export type SiteContentMap = {
  brand: BrandContent
  hero: HeroContent
  services: ServicesContent
  german: GermanCourseContent
  process: ProcessContent
  testimonials: TestimonialsContent
  booking: BookingContent
}

export const defaultContent: SiteContentMap = {
  brand: {
    name: 'مسیر اروپا',
    footerTagline: 'مشاوره مهاجرت تحصیلی و کاری به اروپا و دوره‌های زبان آلمانی',
    footerCopyright: '© ۱۴۰۴ مسیر اروپا. تمامی حقوق محفوظ است.',
  },
  hero: {
    badge: 'همراه مطمئن شما تا اروپا',
    title: 'رویای زندگی در اروپا را به واقعیت تبدیل کنید',
    description:
      'ما به ایرانیانی که قصد مهاجرت به اروپا از طریق ویزای تحصیلی یا پیشنهاد شغلی را دارند مشاوره تخصصی می‌دهیم و شما را برای آزمون‌های زبان آلمانی از سطح مبتدی تا پیشرفته آماده می‌کنیم.',
    highlights: ['ویزای تحصیلی', 'ویزای کاری', 'دوره زبان آلمانی A1 تا B2'],
    primaryCtaLabel: 'رزرو مشاوره رایگان',
    secondaryCtaLabel: 'مشاهده خدمات',
    image: '/brandenburg-gate.png',
    statValue: '+۱۲۰۰',
    statLabel: 'پرونده موفق',
  },
  services: {
    title: 'خدمات مهاجرتی ما',
    subtitle: 'از اولین قدم تا استقرار کامل در اروپا، در هر مرحله کنار شما هستیم.',
    items: [
      {
        icon: 'GraduationCap',
        title: 'ویزای تحصیلی',
        description:
          'انتخاب رشته و دانشگاه، آماده‌سازی مدارک، نامه پذیرش و راهنمایی کامل تا دریافت ویزای تحصیلی اروپا.',
        points: ['انتخاب دانشگاه و رشته', 'تهیه و ترجمه مدارک', 'مصاحبه سفارت'],
      },
      {
        icon: 'Briefcase',
        title: 'ویزای کاری و پیشنهاد شغلی',
        description:
          'یافتن فرصت شغلی متناسب با مهارت شما، تنظیم رزومه اروپایی و پیگیری قرارداد کاری و ویزای کار.',
        points: ['رزومه و لینکدین حرفه‌ای', 'یافتن کارفرما', 'قرارداد و ویزای کار'],
      },
      {
        icon: 'FileCheck2',
        title: 'ارزیابی و آماده‌سازی مدارک',
        description:
          'بررسی شرایط شما، ارزیابی شانس پذیرش و آماده‌سازی کامل پرونده مهاجرتی بر اساس قوانین روز.',
        points: ['ارزیابی رایگان اولیه', 'تأیید مدارک', 'بیمه و اقامت'],
      },
      {
        icon: 'Home',
        title: 'اسکان و پس از ورود',
        description:
          'راهنمایی برای یافتن محل سکونت، افتتاح حساب بانکی و امور اولیه پس از ورود به کشور مقصد.',
        points: ['یافتن مسکن', 'ثبت‌نام شهری', 'پشتیبانی پس از ورود'],
      },
    ],
  },
  german: {
    badge: 'دوره آمادگی زبان آلمانی',
    title: 'از سطح A1 تا B2، گام‌به‌گام تا تسلط',
    description:
      'دوره‌های زبان آلمانی ما به‌صورت مرحله‌ای طراحی شده‌اند تا شما را برای زندگی، تحصیل و کار در کشورهای آلمانی‌زبان آماده کنند. در پایان دوره برای آزمون‌های رسمی زبان آماده خواهید بود.',
    ctaLabel: 'ثبت‌نام در دوره زبان',
    levels: [
      { level: 'A1', title: 'مبتدی', desc: 'آشنایی با الفبا، جملات ساده و مکالمات روزمره پایه.' },
      { level: 'A2', title: 'مقدماتی', desc: 'گفت‌وگو درباره موضوعات آشنا و نیازهای روزمره.' },
      { level: 'B1', title: 'متوسط', desc: 'بیان تجربه‌ها، توصیف اهداف و درک متون عمومی.' },
      { level: 'B2', title: 'فوق متوسط', desc: 'مکالمه روان و درک متون پیچیده برای کار و تحصیل.' },
    ],
    features: [
      'کلاس‌های آنلاین و حضوری',
      'اساتید مجرب و دارای مدرک بین‌المللی',
      'آمادگی برای آزمون‌های Goethe و TestDaF',
      'گروه‌های کوچک و مکالمه‌محور',
    ],
  },
  process: {
    title: 'مسیر همکاری ما',
    subtitle: 'یک فرآیند شفاف و ساده در چهار مرحله.',
    steps: [
      { number: '۱', title: 'مشاوره اولیه رایگان', desc: 'شرایط، اهداف و سوابق شما را بررسی می‌کنیم و بهترین مسیر را پیشنهاد می‌دهیم.' },
      { number: '۲', title: 'طراحی نقشه راه', desc: 'یک برنامه شخصی‌سازی‌شده برای ویزا یا دوره زبان متناسب با شما تنظیم می‌شود.' },
      { number: '۳', title: 'آماده‌سازی و اقدام', desc: 'مدارک، آزمون‌ها و فرآیند درخواست را قدم‌به‌قدم با هم پیش می‌بریم.' },
      { number: '۴', title: 'ورود به اروپا', desc: 'تا دریافت ویزا و استقرار در کشور مقصد در کنار شما خواهیم بود.' },
    ],
  },
  testimonials: {
    title: 'داستان موفقیت مهاجران ما',
    subtitle: 'صدها نفر مسیر خود به اروپا را با ما آغاز کرده‌اند.',
    items: [
      { name: 'سارا محمدی', role: 'دانشجوی کارشناسی ارشد در برلین', text: 'با راهنمایی تیم مسیر اروپا تونستم پذیرش دانشگاه و ویزای تحصیلیم رو بدون استرس بگیرم. واقعاً تو هر مرحله کنارم بودن.' },
      { name: 'امیر رضایی', role: 'مهندس نرم‌افزار در مونیخ', text: 'دوره زبان آلمانی از A1 تا B2 و کمک برای پیدا کردن کار باعث شد خیلی سریع‌تر از چیزی که فکر می‌کردم به آلمان مهاجرت کنم.' },
      { name: 'نگار احمدی', role: 'پرستار در وین', text: 'پشتیبانی بعد از ورود فوق‌العاده بود؛ از پیدا کردن خونه تا کارهای اداری همه‌چیز رو راهنمایی کردن.' },
    ],
  },
  booking: {
    badge: 'رزرو مشاوره',
    title: 'اولین قدم را همین امروز بردارید',
    description:
      'فرم زیر را تکمیل کنید تا کارشناسان ما برای یک جلسه مشاوره رایگان با شما تماس بگیرند. اطلاعات شما کاملاً محرمانه باقی می‌ماند.',
    info: [
      { icon: 'Phone', label: 'تماس و واتس‌اپ', value: '۰۲۱ - ۱۲۳۴ ۵۶۷۸' },
      { icon: 'Clock', label: 'ساعات کاری', value: 'شنبه تا چهارشنبه، ۹ تا ۱۸' },
      { icon: 'MapPin', label: 'دفتر مرکزی', value: 'تهران، خیابان ولیعصر' },
    ],
  },
}

export type SectionKey = keyof SiteContentMap
