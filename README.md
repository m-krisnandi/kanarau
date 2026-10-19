# Kanarau 仮習う

> Japanese vocabulary learning app with intelligent spaced repetition — focused on JLPT N2 & N1.

## Features

- 📖 **Belajar** — Daily vocabulary decks with quiz sessions
- 🔄 **Review** — SRS-based spaced repetition (auto-rated, no self-assessment bias)
- 🔍 **Jisho** — Search vocabulary & kanji with detailed breakdowns
- 📊 **Progress** — Study calendar, streaks, and statistics
- 📱 **PWA** — Install as mobile app, works offline

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Java 25 + Spring Boot 3.4 |
| Database | PostgreSQL (prod) / H2 (dev) |
| Frontend | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS |
| PWA | Workbox |

## Getting Started

### Prerequisites
- Java 25+
- Maven 3.9+
- Node.js 26+
- PostgreSQL 16+ (for production)

### Development

```bash
# Backend (runs on :8080)
cd api
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Frontend (runs on :5173, proxies API to :8080)
cd web
npm install
npm run dev
```

### Production (Docker)

```bash
docker compose up -d
```

## Credits

- Kanji stroke order data: KanjiVG (Ulrich Apel) CC BY-SA 3.0
- Readings & radicals: Kanji alive CC BY 4.0
- JLPT vocabulary lists: Open source community resources

## License

Private — All rights reserved.
