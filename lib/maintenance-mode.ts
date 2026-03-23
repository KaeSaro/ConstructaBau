function norm(v: string | undefined) {
  return v?.replace(/^\uFEFF/, '').trim().toLowerCase();
}

/** Wartung an, wenn eine der Variablen `true` ist (siehe middleware.ts). */
export function maintenanceEnabled(): boolean {
  if (norm(process.env.SKIP_MAINTENANCE) === 'true') {
    return false;
  }
  return norm(process.env.MAINTENANCE_MODE) === 'true' || norm(process.env.NEXT_PUBLIC_MAINTENANCE_MODE) === 'true';
}
