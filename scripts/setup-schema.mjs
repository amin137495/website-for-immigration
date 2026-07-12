import { Pool } from "pg"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

const statements = [
  // Better Auth: account
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
  // Better Auth: verification
  `CREATE TABLE IF NOT EXISTS "verification" (
    "id" text PRIMARY KEY,
    "identifier" text NOT NULL,
    "value" text NOT NULL,
    "expiresAt" timestamp NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  // Site content (CMS)
  `CREATE TABLE IF NOT EXISTS "site_content" (
    "id" serial PRIMARY KEY,
    "section" text NOT NULL UNIQUE,
    "content" jsonb NOT NULL DEFAULT '{}'::jsonb,
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  // Applications
  `CREATE TABLE IF NOT EXISTS "applications" (
    "id" serial PRIMARY KEY,
    "userId" text NOT NULL,
    "type" text NOT NULL DEFAULT 'immigration',
    "title" text NOT NULL,
    "status" text NOT NULL DEFAULT 'pending',
    "currentStage" integer NOT NULL DEFAULT 0,
    "notes" text,
    "createdAt" timestamp NOT NULL DEFAULT now(),
    "updatedAt" timestamp NOT NULL DEFAULT now()
  );`,
  // Application stages
  `CREATE TABLE IF NOT EXISTS "application_stages" (
    "id" serial PRIMARY KEY,
    "applicationId" integer NOT NULL,
    "title" text NOT NULL,
    "description" text,
    "status" text NOT NULL DEFAULT 'pending',
    "orderIndex" integer NOT NULL DEFAULT 0,
    "completedAt" timestamp,
    "createdAt" timestamp NOT NULL DEFAULT now()
  );`,
  // Application documents
  `CREATE TABLE IF NOT EXISTS "application_documents" (
    "id" serial PRIMARY KEY,
    "applicationId" integer NOT NULL,
    "userId" text NOT NULL,
    "name" text NOT NULL,
    "url" text,
    "status" text NOT NULL DEFAULT 'pending',
    "required" boolean NOT NULL DEFAULT true,
    "uploadedAt" timestamp,
    "createdAt" timestamp NOT NULL DEFAULT now()
  );`,
]

for (const sql of statements) {
  await pool.query(sql)
  console.log("[v0] executed:", sql.slice(0, 60).replace(/\s+/g, " "), "...")
}

await pool.end()
console.log("[v0] schema setup complete")
