/**
 * Zeigt alle Admin-E-Mail-Adressen aus der Payload-Datenbank.
 * Ausführen: node scripts/list-admin-emails.js
 *
 * .env.local wird automatisch geladen (Node 20+ mit --env-file).
 * Alternativ: npx dotenv -e .env.local -- node scripts/list-admin-emails.js
 */

import pg from 'pg';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// .env.local laden
const envPath = join(__dirname, '..', '.env.local');
if (existsSync(envPath)) {
  const content = readFileSync(envPath, 'utf-8').replace(/\r/g, '');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq > 0) {
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
      process.env[key] = value;
    }
  }
}

const connectionString =
  process.env.DATABASE_URI || process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (!connectionString) {
  console.error('Fehler: DATABASE_URI, DATABASE_URL oder POSTGRES_URL in .env.local erforderlich.');
  process.exit(1);
}

const client = new pg.Client({ connectionString, ssl: { rejectUnauthorized: true } });

try {
  await client.connect();

  // Payload 3: Tabelle heißt meist "users" (Collection-Slug)
  const tables = await client.query(`
    SELECT tablename FROM pg_tables 
    WHERE schemaname = 'public' AND tablename LIKE '%user%'
  `);

  let found = false;
  for (const { tablename } of tables.rows) {
    try {
      const result = await client.query(`
        SELECT id, email 
        FROM "${tablename}" 
        ORDER BY id ASC
      `);

      if (result.rows.length > 0) {
        found = true;
        console.log('\n=== Admin-Benutzer (' + tablename + ') ===\n');
        result.rows.forEach((row, i) => {
          console.log(`${i + 1}. E-Mail: ${row.email}`);
          console.log(`   ID: ${row.id}\n`);
        });
      }
    } catch (e) {
      // Tabelle hat andere Spalten, ignorieren
    }
  }

  if (!found) {
    try {
      const result = await client.query('SELECT id, email FROM users ORDER BY id ASC');
      if (result.rows.length > 0) {
        console.log('\n=== Admin-Benutzer ===\n');
        result.rows.forEach((row, i) => {
          console.log(`${i + 1}. E-Mail: ${row.email}`);
          console.log(`   ID: ${row.id}\n`);
        });
      } else {
        console.log('Keine Benutzer in der Datenbank gefunden.');
      }
    } catch (e) {
      console.log('Keine Benutzer gefunden. Fehler:', e.message);
    }
  }
} catch (err) {
  console.error('Datenbankfehler:', err.message);
  process.exit(1);
} finally {
  await client.end();
}
