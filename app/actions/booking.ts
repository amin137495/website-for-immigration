'use server'

import { db } from '@/lib/db'
import { consultationBookings } from '@/lib/db/schema'

export type BookingState = {
  success: boolean
  message: string
}

export async function createBooking(
  _prevState: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const fullName = String(formData.get('fullName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const serviceCategory = String(formData.get('serviceCategory') ?? '').trim()
  const germanLevel = String(formData.get('germanLevel') ?? '').trim()
  const preferredDate = String(formData.get('preferredDate') ?? '').trim()
  const preferredTime = String(formData.get('preferredTime') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!fullName || !email || !phone || !serviceCategory) {
    return {
      success: false,
      message: 'لطفاً نام، ایمیل، شماره تماس و نوع خدمت را تکمیل کنید.',
    }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { success: false, message: 'لطفاً یک ایمیل معتبر وارد کنید.' }
  }

  try {
    await db.insert(consultationBookings).values({
      fullName,
      email,
      phone,
      serviceCategory,
      germanLevel: germanLevel || null,
      preferredDate: preferredDate || null,
      preferredTime: preferredTime || null,
      message: message || null,
    })

    return {
      success: true,
      message:
        'درخواست شما با موفقیت ثبت شد. کارشناسان ما به‌زودی با شما تماس خواهند گرفت.',
    }
  } catch (error) {
    console.log('[v0] booking insert error:', error)
    return {
      success: false,
      message: 'متأسفانه خطایی رخ داد. لطفاً دوباره تلاش کنید.',
    }
  }
}
