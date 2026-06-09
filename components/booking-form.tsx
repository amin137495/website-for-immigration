'use client'

import { useActionState, useState } from 'react'
import { createBooking, type BookingState } from '@/app/actions/booking'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CalendarCheck, CheckCircle2, Loader2 } from 'lucide-react'

const initialState: BookingState = { success: false, message: '' }

const selectClass =
  'flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function BookingForm() {
  const [state, formAction, isPending] = useActionState(
    createBooking,
    initialState,
  )
  const [category, setCategory] = useState('')

  if (state.success) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent text-primary">
          <CheckCircle2 className="size-9" />
        </span>
        <h3 className="text-2xl font-bold text-foreground">
          درخواست شما ثبت شد!
        </h3>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="fullName">نام و نام خانوادگی</Label>
          <Input id="fullName" name="fullName" required placeholder="مثال: علی محمدی" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">شماره تماس</Label>
          <Input
            id="phone"
            name="phone"
            required
            inputMode="tel"
            dir="ltr"
            placeholder="0912..."
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">ایمیل</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          dir="ltr"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="serviceCategory">نوع خدمت مورد نظر</Label>
        <select
          id="serviceCategory"
          name="serviceCategory"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled>
            یک گزینه را انتخاب کنید
          </option>
          <option value="ویزای تحصیلی">ویزای تحصیلی</option>
          <option value="ویزای کاری">ویزای کاری / پیشنهاد شغلی</option>
          <option value="دوره زبان آلمانی">دوره زبان آلمانی (A1 تا B2)</option>
          <option value="نامشخص / مشاوره کلی">نامشخص / مشاوره کلی</option>
        </select>
      </div>

      {category === 'دوره زبان آلمانی' && (
        <div className="grid gap-2">
          <Label htmlFor="germanLevel">سطح فعلی زبان آلمانی شما</Label>
          <select
            id="germanLevel"
            name="germanLevel"
            className={selectClass}
            defaultValue=""
          >
            <option value="" disabled>
              سطح خود را انتخاب کنید
            </option>
            <option value="بدون دانش قبلی">بدون دانش قبلی</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
          </select>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="preferredDate">تاریخ پیشنهادی مشاوره</Label>
          <Input id="preferredDate" name="preferredDate" type="date" dir="ltr" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="preferredTime">بازه زمانی</Label>
          <select
            id="preferredTime"
            name="preferredTime"
            className={selectClass}
            defaultValue=""
          >
            <option value="">بدون ترجیح</option>
            <option value="صبح">صبح (۹ تا ۱۲)</option>
            <option value="ظهر">ظهر (۱۲ تا ۱۵)</option>
            <option value="عصر">عصر (۱۵ تا ۱۹)</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">توضیحات بیشتر (اختیاری)</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="درباره شرایط و اهداف خود برای ما بنویسید..."
        />
      </div>

      {state.message && !state.success && (
        <p className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            در حال ارسال...
          </>
        ) : (
          <>
            <CalendarCheck className="size-5" />
            ثبت درخواست مشاوره
          </>
        )}
      </button>
    </form>
  )
}
