import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export type SessionUser = {
  id: string
  email: string
  name: string
  role: string
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) return null
  const u = session.user as typeof session.user & { role?: string }
  return {
    id: u.id,
    email: u.email,
    name: u.name,
    role: u.role ?? 'user',
  }
}

// Use in server actions / route handlers — throws instead of redirecting.
export async function requireUserId(): Promise<string> {
  const user = await getSessionUser()
  if (!user) throw new Error('Unauthorized')
  return user.id
}

export async function requireAdmin(): Promise<SessionUser> {
  const user = await getSessionUser()
  if (!user) throw new Error('Unauthorized')
  if (user.role !== 'admin') throw new Error('Forbidden')
  return user
}

// Use in server components / pages — redirects when not allowed.
export async function requireUserPage(): Promise<SessionUser> {
  const user = await getSessionUser()
  if (!user) redirect('/login')
  return user
}

export async function requireAdminPage(): Promise<SessionUser> {
  const user = await getSessionUser()
  if (!user) redirect('/login')
  if (user.role !== 'admin') redirect('/dashboard')
  return user
}
