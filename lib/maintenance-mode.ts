/** Wartung an, wenn Env nach trim (ohne BOM) `true` ist (Groß/Klein egal). */
export function maintenanceEnabled(): boolean {
  const raw = process.env.MAINTENANCE_MODE?.replace(/^\uFEFF/, '').trim().toLowerCase();
  return raw === 'true';
}
