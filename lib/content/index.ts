import { db } from '@/lib/db'
import { siteContent } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { defaultContent, type SectionKey, type SiteContentMap } from './defaults'

/**
 * Returns the content for a single section, falling back to the built-in
 * defaults when an admin has not customized it yet. DB values fully replace the
 * default for that section (the admin form is always seeded from the current
 * effective value, so a saved row is already complete).
 */
export async function getSection<K extends SectionKey>(
  section: K,
): Promise<SiteContentMap[K]> {
  try {
    const rows = await db
      .select()
      .from(siteContent)
      .where(eq(siteContent.section, section))
      .limit(1)

    if (rows.length > 0 && rows[0].data) {
      return { ...defaultContent[section], ...(rows[0].data as object) } as SiteContentMap[K]
    }
  } catch (err) {
    console.error('[v0] getSection failed for', section, err)
  }
  return defaultContent[section]
}

/** Loads every section at once for the homepage. */
export async function getAllContent(): Promise<SiteContentMap> {
  try {
    const rows = await db.select().from(siteContent)
    const overrides = new Map(rows.map((r) => [r.section, r.data]))
    const result = {} as SiteContentMap
    for (const key of Object.keys(defaultContent) as SectionKey[]) {
      const override = overrides.get(key)
      result[key] = (
        override ? { ...defaultContent[key], ...(override as object) } : defaultContent[key]
      ) as SiteContentMap[typeof key]
    }
    return result
  } catch (err) {
    console.error('[v0] getAllContent failed', err)
    return defaultContent
  }
}
