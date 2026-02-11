# Grail Series - Tournament League Website

## Přehled projektu
React onepager pro **Grail Series** - nejprestižnější turnajovou sérii v Duel Commanderu v České republice.

**Web:** https://grailseries.cz/
**GitHub:** https://github.com/Nimirou/GrailWeb

## Technologie
- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** pro styling
- **GitHub Pages** s custom doménou (grailseries.cz)
- **GitHub Actions** pro CI/CD deployment

## Struktura projektu
```
tournament-league/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Hlavní sekce s partnery a roadmapou
│   │   ├── TournamentRoadmap.tsx # Timeline turnajů
│   │   ├── CompletedTournament.tsx # Dokončené turnaje (vítěz, top 8)
│   │   ├── UpcomingTournament.tsx  # Nadcházející turnaje
│   │   ├── Countdown.tsx         # Odpočet do dalšího turnaje
│   │   ├── Footer.tsx            # Patička s partnery
│   │   ├── SupportModal.tsx      # Popup pro podporu (QR kód, účet)
│   │   ├── LanguageSwitcher.tsx  # Přepínač jazyků
│   │   └── GrailLogo.tsx         # Logo komponenta
│   ├── hooks/
│   │   └── usePlayerCount.ts     # Fetch počtu hráčů z Google Sheets
│   ├── i18n/
│   │   ├── LanguageContext.tsx   # React Context pro i18n
│   │   └── translations.ts       # Překlady (CS/EN/FR)
│   ├── utils/
│   │   ├── analytics.ts          # Google Analytics tracking
│   │   └── assets.ts             # Helper pro asset paths
│   ├── data/
│   │   └── tournaments.ts        # Data turnajů
│   └── App.tsx, main.tsx, index.css
├── public/
│   ├── grail-trophy.png          # Favicon + OG image
│   ├── partner-logo.svg          # Najada logo
│   ├── partner-hasek.jpg         # HASEK-SHOP logo
│   ├── partner-onstack.jpg       # onStack logo
│   ├── support-qr.png            # QR kód pro podporu
│   └── CNAME                     # Custom doména
└── index.html                    # OG meta tagy, GA script
```

## Klíčové funkce

### Partneři
- **Najada Games** (hlavní partner) - https://www.najada.games/
- **HASEK-SHOP** - https://www.cardmarket.com/en/Magic/Users/HASEK-SHOP
- **onStack** - https://www.youtube.com/channel/UCFuTqx9aSmodjlrTFzeykEQ

Layout:
- Desktop: HASEK-SHOP | Najada (větší, uprostřed) | onStack
- Mobil: Najada nahoře, pak HASEK-SHOP a onStack pod sebou

### Google Analytics
- **ID:** G-WFC3DKTZ4X
- Tracking partner kliků pomocí `trackPartnerClick(partnerName)` v `src/utils/analytics.ts`
- Events: `partner_click` s parametrem `partner_name`

### Dynamický počet hráčů
- Hook `usePlayerCount.ts` tahá data z Google Spreadsheet
- Počítá vyplněné buňky ve sloupci D kde sloupec C má číslo
- Auto-refresh každých 5 minut

### Podpora (SupportModal)
- QR kód pro platbu
- Účet: 2640017029/3030
- IBAN: CZ03 3030 0000 0026 4001 7029
- BIC/SWIFT: AIRACZPP

### i18n (překlady)
- Čeština (CS), Angličtina (EN), Francouzština (FR)
- Kontext v `src/i18n/LanguageContext.tsx`
- Překlady v `src/i18n/translations.ts`

### Open Graph meta tagy
- Titulek, popis a obrázek pro sdílení na FB/Twitter
- Obrázek: grail-trophy.png

## Deployment
GitHub Actions automaticky buildí a deployuje na GitHub Pages při push na main.

**Workflow:** `.github/workflows/deploy.yml`

Pro vynucení refresh FB náhledu: https://developers.facebook.com/tools/debug/

## Časté úpravy

### Přidání nového partnera
1. Přidat logo do `public/`
2. Upravit `Hero.tsx` a `Footer.tsx` - přidat link s `onClick={() => trackPartnerClick('NázevPartnera')}`

### Změna statistik
- Upravit v `translations.ts` klíče jako `totalPrizes`, `tournamentsCount`

### Změna turnajových dat
- Upravit `src/data/tournaments.ts`

## Ambasadoři
Vratislav Drábek, Jiří Joska, Dominik Trpák
