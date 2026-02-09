export interface Prize {
  place: number | string;
  description: string;
  value?: string;
}

export interface Player {
  name: string;
  place: number;
  deck?: string;
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  status: 'completed' | 'upcoming' | 'announced';
  location?: string;
  image?: string;
  prizes: Prize[];
  topPlayers?: Player[];
  description?: string;
  registrationInfo?: string;
  isFinals?: boolean;
}

export const tournaments: Tournament[] = [
  {
    id: 'opener-2025',
    name: 'Počáteční kvalifikace',
    date: '13. září 2025',
    status: 'completed',
    location: 'The Grail Klub, Praha',
    description: 'Zahajovací turnaj sezóny. Celkem 62 hráčů.',
    prizes: [
      { place: 1, description: 'Tropical Island (LP)' },
      { place: 2, description: 'Scrubland (LP)' },
      { place: '3-4', description: 'Plateau (LP)' },
      { place: '5-8', description: 'Boseiju, Who Endures' },
    ],
    topPlayers: [
      { name: 'Jakub Vojta', place: 1, deck: 'Aragorn, King of Gondor' },
      { name: 'Miroslav Kalina', place: 2, deck: 'Phelia, Exuberant Shepherd' },
      { name: 'Vojtěch Lavička', place: 3, deck: 'Deadpool, Trading Card' },
      { name: 'Jan Hurt', place: 4, deck: 'Magda, the Hoardmaster' },
      { name: 'Michal Hrubý', place: 5, deck: 'Aragorn, King of Gondor' },
      { name: 'Ladislav Majer', place: 6, deck: 'Satya, Aetherflux Genius' },
      { name: 'Jiří Obraz', place: 7, deck: 'Satya, Aetherflux Genius' },
      { name: 'Dung Nguyen', place: 8, deck: 'Tifa Lockhart' },
    ],
  },
  {
    id: 'tournament-2',
    name: 'Druhá kvalifikace',
    date: '22. listopadu 2025',
    status: 'completed',
    location: 'The Grail Klub, Praha',
    description: 'Druhý turnaj sezóny. Celkem 62 hráčů.',
    prizes: [
      { place: 1, description: 'Tropical Island (LP)' },
      { place: 2, description: 'Badlands (LP)' },
      { place: '3-4', description: 'Foil Urza\'s Saga / Solitude' },
      { place: '5-8', description: 'Onslaught Polluted Delta' },
    ],
    topPlayers: [
      { name: 'Michal Hrubý', place: 1, deck: 'Rograkh + Ikra Shidiqi' },
      { name: 'Zbyněk Barták', place: 2, deck: 'Slimefoot and Squee' },
      { name: 'Marek Voráček', place: 3, deck: 'Peter Parker' },
      { name: 'Dominik Mašík', place: 4, deck: 'Spider-Man 2099' },
      { name: 'Jakub Lerl', place: 5, deck: 'Asmoranomardicadaistinaculdacar' },
      { name: 'Josef Böhm', place: 6, deck: 'Glarb, Calamity\'s Augur' },
      { name: 'Jan Hurt', place: 7, deck: 'Slimefoot and Squee' },
      { name: 'Jan Stádník', place: 8, deck: 'Spider-Man 2099' },
    ],
  },
  {
    id: 'tournament-3',
    name: 'Třetí kvalifikace',
    date: '17. ledna 2026',
    status: 'completed',
    location: 'The Grail Klub, Praha',
    description: 'Třetí turnaj sezóny. Celkem 74 hráčů.',
    prizes: [
      { place: 1, description: '2x Booster Box + Promo Set', value: '5 000 Kč' },
      { place: 2, description: 'Booster Box + Sleeves Set', value: '3 000 Kč' },
      { place: 3, description: 'Booster Box', value: '2 500 Kč' },
      { place: 4, description: '10x Booster Pack', value: '1 000 Kč' },
    ],
    topPlayers: [
      { name: 'Marek Voráček', place: 1, deck: 'Rograkh + Ikra Shidiqi' },
      { name: 'Miroslav Kalina', place: 2, deck: 'Phelia, Exuberant Shepherd' },
      { name: 'Jakub Vojta', place: 3, deck: 'Spider-Man 2099' },
      { name: 'Jan Franek', place: 4, deck: 'Zhao, the Moon Slayer' },
      { name: 'Josef Böhm', place: 5, deck: 'Glarb, Calamity\'s Augur' },
      { name: 'Adam Diviš', place: 6, deck: 'Lier, Disciple of the Drowned' },
      { name: 'Michal Hrubý', place: 7, deck: 'Rograkh + Ikra Shidiqi' },
      { name: 'Vojtěch Šenkýř', place: 8, deck: 'Spider-Man 2099' },
    ],
  },
  {
    id: 'tournament-4',
    name: 'Čtvrtá kvalifikace',
    date: '21. března 2026',
    status: 'upcoming',
    location: 'The Grail Klub, Praha',
    description: 'Čtvrtý turnaj sezóny.',
    registrationInfo: 'Registrace otevřena do 14. března 2026',
    prizes: [
      { place: 1, description: 'Booster Box + Kvalifikace na Finals', value: '4 000 Kč' },
      { place: 2, description: 'Booster Box', value: '2 500 Kč' },
      { place: 3, description: '10x Booster Pack', value: '1 000 Kč' },
      { place: 4, description: '6x Booster Pack', value: '600 Kč' },
    ],
  },
  {
    id: 'tournament-5',
    name: 'Pátá kvalifikace',
    date: '23. května 2026',
    status: 'announced',
    location: 'The Grail Klub, Praha',
    description: 'Poslední šance získat body do finále!',
    prizes: [
      { place: 1, description: '2x Booster Box nového setu', value: '5 500 Kč' },
      { place: 2, description: 'Booster Box + Promo karty', value: '3 500 Kč' },
      { place: 3, description: 'Booster Box', value: '2 500 Kč' },
      { place: 4, description: '10x Booster Pack', value: '1 000 Kč' },
    ],
  },
  {
    id: 'finals-2026',
    name: 'Final Kvalifikace + Grail Finals',
    date: '27. - 28. června 2026',
    status: 'announced',
    location: 'The Grail Klub, Praha',
    description: 'Velkolepé finále sezóny pro 16 nejlepších hráčů roku!',
    isFinals: true,
    prizes: [
      { place: 1, description: 'Grand Prize + Trofej Mistra', value: '15 000 Kč' },
      { place: 2, description: '2x Booster Box + Promo Set', value: '7 500 Kč' },
      { place: 3, description: 'Booster Box + Exclusive Sleeves', value: '4 000 Kč' },
      { place: 4, description: 'Booster Box', value: '2 500 Kč' },
    ],
  },
];
