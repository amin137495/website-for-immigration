import { NextResponse } from "next/server"
import { pool } from "@/lib/db"

// Aligns the database to the Drizzle schema in lib/db/schema.ts.
// Better Auth tables are created if missing; app tables are dropped and
// recreated so their columns exactly match the schema (safe: no real data yet).
const statements = [
  // ---- Better Auth (create if missing) ----
  `CREATE TABLE IF NOT EXISTS "user" (
    "id" text PRIMARY KEY,
    "name" text NOT NULL,
    "email" text NOT NULL UNIQUE,
    "emailVerified" boolean NOT NULL DEFAULT false,
    "image" text,
    "role" text NOT NULL DEFAULT 'user',
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  `CREATE TABLE IF NOT EXISTS "session" (
    "id" text PRIMARY KEY,
    "expiresAt" timestamp NOT NULL,
    "token" text NOT NULL UNIQUE,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now(),
    "ipAddress" text,
    "userAgent" text,
    "userId" text NOT NULL REFERENCES "user"("id") ON DELETE CASCADE
  );`,
  `CREATE TABLE IF NOT EXISTS "account" (
    "id" text PRIMARY KEY,
    "accountId" text NOT NULL,
    "providerId" text NOT NULL,
    "userId" text NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "accessToken" text,
    "refreshToken" text,
    "idToken" text,
    "accessTokenExpiresAt" timestamp,
    "refreshTokenExpiresAt" timestamp,
    "scope" text,
    "password" text,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  `CREATE TABLE IF NOT EXISTS "verification" (
    "id" text PRIMARY KEY,
    "identifier" text NOT NULL,
    "value" text NOT NULL,
    "expiresAt" timestamp NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  // ---- App tables (drop + recreate to match Drizzle schema exactly) ----
  `DROP TABLE IF EXISTS "site_content";`,
  `CREATE TABLE "site_content" (
    "section" text PRIMARY KEY,
    "data" jsonb NOT NULL,
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  `DROP TABLE IF EXISTS "application_documents";`,
  `DROP TABLE IF EXISTS "application_stages";`,
  `DROP TABLE IF EXISTS "applications";`,
  `CREATE TABLE "applications" (
    "id" serial PRIMARY KEY,
    "userId" text NOT NULL,
    "title" text NOT NULL DEFAULT 'پرونده مهاجرتی',
    "type" text,
    "status" text NOT NULL DEFAULT 'pending',
    "currentStage" integer NOT NULL DEFAULT 0,
    "notes" text,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  `CREATE TABLE "application_stages" (
    "id" serial PRIMARY KEY,
    "applicationId" integer NOT NULL,
    "title" text NOT NULL,
    "description" text,
    "status" text NOT NULL DEFAULT 'pending',
    "orderIndex" integer NOT NULL DEFAULT 0,
    "completedAt" timestamp,
    "createdAt" timestamp NOT NULL DEFAULT now()
  );`,
  `CREATE TABLE "application_documents" (
    "id" serial PRIMARY KEY,
    "applicationId" integer NOT NULL,
    "userId" text NOT NULL,
    "name" text NOT NULL,
    "status" text NOT NULL DEFAULT 'required',
    "fileUrl" text,
    "fileName" text,
    "uploadedBy" text,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
]

export async function GET() {
  const done: string[] = []
  try {
    for (const sql of statements) {
      await pool.query(sql)
      done.push(sql.slice(0, 44).replace(/\s+/g, " "))
    }
    return NextResponse.json({ ok: true, done })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: (err as Error).message, done },
      { status: 500 },
    )
  }
}
