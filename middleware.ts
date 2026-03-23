import { NextRequest, NextResponse } from 'next/server';

/**
 * Env-Zugriff nur hier (nicht aus `lib/` importieren), damit Next die Werte ins Edge-Bundle übernimmt.
 * Auf Vercel ist `MAINTENANCE_MODE` manchmal zur Laufzeit nicht gesetzt wie lokal – zusätzlich
 * `NEXT_PUBLIC_MAINTENANCE_MODE` setzen (gleicher Wert `true`), dann wird er beim Build zuverlässig eingebunden.
 * Hinweis: `NEXT_PUBLIC_*` ist im Client-JS sichtbar (für einen Wartungs-Schalter unkritisch).
 */
function maintenanceEnabled(): boolean {
  const norm = (v: string | undefined) => v?.replace(/^\uFEFF/, '').trim().toLowerCase();
  // Lokal: Wenn Windows/Terminal schon MAINTENANCE_MODE=true setzt, ignoriert Next die .env.local-Zeile.
  // SKIP_MAINTENANCE=true in .env.local erzwingt normale Site (nur lokal setzen, nicht auf Vercel).
  if (norm(process.env.SKIP_MAINTENANCE) === 'true') {
    return false;
  }
  return (
    norm(process.env.MAINTENANCE_MODE) === 'true' ||
    norm(process.env.NEXT_PUBLIC_MAINTENANCE_MODE) === 'true'
  );
}

/** Statische Wartungsseite – kein Next/React, direkt aus dem Edge. */
const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Constructa Bau – Wartung</title>
<style>
  :root { color-scheme: light dark; }
  body {
    font-family: ui-sans-serif, system-ui, sans-serif;
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: #fafafa;
    color: #1a1a1a;
  }
  @media (prefers-color-scheme: dark) {
    body { background: #111; color: #e5e5e5; }
  }
  main { max-width: 36rem; }
  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #D0312D;
    margin-right: 6px;
    vertical-align: middle;
  }
  .label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    line-height: 1.1;
    margin: 0 0 1rem;
  }
  p {
    line-height: 1.5;
    margin: 0;
    opacity: 0.92;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 0.875rem;
  }
</style>
</head>
<body>
  <main>
    <div class="label"><span class="dot" aria-hidden="true"></span>Wartung</div>
    <h1>Unsere Website wird gewartet</h1>
    <p>Wir arbeiten gerade an der Seite und sind in Kürze wieder für Sie da. Bitte schauen Sie später noch einmal vorbei.</p>
  </main>
</body>
</html>`;

export function middleware(request: NextRequest) {
  // Pathname-Header für Root-Layout (Payload-Admin braucht kein eigenes html/body-Wrapper)
  const response = maintenanceEnabled()
    ? handleMaintenance(request)
    : NextResponse.next();
  response.headers.set('x-pathname', request.nextUrl.pathname);
  return response;
}

function handleMaintenance(request: NextRequest) {

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next')) {
    return NextResponse.next();
  }
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }
  if (pathname.startsWith('/api')) {
    return new NextResponse(
      JSON.stringify({
        error: 'Wartungsmodus',
        message: 'Die Website wird derzeit gewartet.',
      }),
      {
        status: 503,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        },
      }
    );
  }

  return new NextResponse(MAINTENANCE_HTML, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

/**
 * Wichtig: Nur `"/((?!…).*)"` matcht die Startseite `/` in Next oft NICHT – Middleware lief dann nie.
 * Explizit `'/'` + ein Pattern für alle übrigen Pfade.
 */
export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico).*)'],
};
