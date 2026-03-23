function norm(v: string | undefined) {
  return v?.replace(/^\uFEFF/, '').trim().toLowerCase();
}

/** Wartung an, wenn eine der Variablen `true` ist (siehe middleware.ts Kommentar zu Vercel). */
export function maintenanceEnabled(): boolean {
  return norm(process.env.MAINTENANCE_MODE) === 'true' || norm(process.env.NEXT_PUBLIC_MAINTENANCE_MODE) === 'true';
}
