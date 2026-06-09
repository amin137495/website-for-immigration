import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const consultationBookings = pgTable('consultation_bookings', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  serviceCategory: text('service_category').notNull(),
  germanLevel: text('german_level'),
  preferredDate: text('preferred_date'),
  preferredTime: text('preferred_time'),
  message: text('message'),
  status: text('status').notNull().default('pending'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
