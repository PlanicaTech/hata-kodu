# Arıza Kod Listesi - PWA

A Next.js Progressive Web App for searching diagnostic error codes offline.

## Features

- 🔍 Search diagnostic codes by P-Code, SPN, FMI, DTCB, or all fields
- 📱 Mobile-first responsive design
- 🔌 Offline-capable PWA
- 🌐 Multi-language descriptions (English, Turkish, Chinese)
- ⚡ Fast client-side search

## Setup

1. Install dependencies:
```bash
npm install
```

2. Generate PWA icons (optional but recommended):
   - Create 192x192 and 512x512 PNG icons
   - Place them in `public/icons/` as `icon-192.png` and `icon-512.png`
   - You can use any image editor or online tool to create these

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── codes/[no]/     # Detail page for individual codes
│   ├── layout.tsx       # Root layout with header
│   ├── page.tsx        # Search page
│   └── globals.css     # Tailwind CSS imports
├── components/
│   ├── ResultsTable.tsx           # Search results table
│   ├── SearchBar.tsx              # Search input and field selector
│   └── ServiceWorkerRegistration.tsx  # PWA service worker registration
├── data/
│   └── ariza_kod_listesi.json    # Diagnostic codes data
├── lib/
│   ├── mapper.ts       # Data normalization mapper
│   └── search.ts       # Search logic
├── public/
│   ├── icons/          # PWA icons (192x192, 512x512)
│   ├── manifest.webmanifest  # PWA manifest
│   └── sw.js           # Service worker
└── types/
    └── diagnostic-code.ts  # TypeScript type definitions
```

## Usage

1. **Search**: Type in the search box and select a field to search (P-Code, SPN, FMI, DTCB, or All)
2. **View Details**: Click on any row in the results table to see full details
3. **Install PWA**: On supported browsers, you'll see an install prompt to add the app to your home screen

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- PWA (Service Worker + Web Manifest)

