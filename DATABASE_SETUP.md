# Datenbankverbindung einrichten

## 1. `.env.local` prüfen

Öffne `.env.local` im Projektordner. Folgende Einträge müssen gesetzt sein:

```env
# Mindestens eine dieser Variablen (mit deiner echten Verbindungs-URL):
DATABASE_URL=postgres://USER:PASSWORT@HOST/DBNAME?sslmode=require

# Oder alternativ:
DATABASE_URI=postgres://...
# Oder:
POSTGRES_URL=postgres://...

# Pflicht für Payload CMS:
PAYLOAD_SECRET=ein-beliebiger-geheimer-string-min-32-zeichen
```

## 2. Neon / PostgreSQL – Verbindungs-URL

### Bei Neon (neon.tech)

1. Gehe zu [neon.tech](https://neon.tech) und melde dich an
2. Wähle dein Projekt (oder lege eines an)
3. Im Dashboard findest du die **Connection string**
4. Wähle **Pooled connection** und kopiere die URL
5. Beispiel: `postgres://user:passwort@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require`

**Wichtig bei Neon:**
- Projekt muss aktiv sein (nicht pausiert)
- Die URL darf keine Platzhalter mehr enthalten (user, passwort, host müssen echte Werte sein)

### Bei anderem PostgreSQL-Anbieter

Format:

```
postgres://BENUTZER:PASSWORT@HOST:PORT/DATENBANKNAME?sslmode=require
```

## 3. `.env.local` anpassen

```env
DATABASE_URL=postgres://dein-user:dein-passwort@dein-host/neondb?sslmode=require
PAYLOAD_SECRET=dein-geheimer-schluessel-min-32-zeichen
```

## 4. Dev-Server neu starten

Nach Änderungen an `.env.local`:

```bash
# Node-Prozesse beenden
# Dann:
npm run dev
```

## 5. Prüfen, ob es funktioniert

- **News-Seite:** http://localhost:3000/news  
- **Payload Admin:** http://localhost:3000/admin  

Falls weiterhin Fehler auftreten:
- Führe `DATABASE_URL` (oder `DATABASE_URI`) genau von deinem Anbieter ein
- Prüfe, ob das Datenbank-Projekt aktiv ist
- Stelle sicher, dass `PAYLOAD_SECRET` gesetzt ist
