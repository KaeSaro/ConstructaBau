/**
 * Wartung: derzeit aus (Go-live). Wieder an: Env `MAINTENANCE_MODE` / `NEXT_PUBLIC_MAINTENANCE_MODE` + Logik
 * aus Git-Historie wiederherstellen (gleiche Bedingung wie zuvor in middleware.ts).
 */
export function maintenanceEnabled(): boolean {
  return false;
}
