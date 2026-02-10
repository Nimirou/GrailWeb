import type { Language } from '../i18n/translations';

const monthTranslations: Record<string, Record<Language, string>> = {
  'ledna': { cs: 'ledna', en: 'January', fr: 'janvier' },
  'února': { cs: 'února', en: 'February', fr: 'février' },
  'března': { cs: 'března', en: 'March', fr: 'mars' },
  'dubna': { cs: 'dubna', en: 'April', fr: 'avril' },
  'května': { cs: 'května', en: 'May', fr: 'mai' },
  'června': { cs: 'června', en: 'June', fr: 'juin' },
  'července': { cs: 'července', en: 'July', fr: 'juillet' },
  'srpna': { cs: 'srpna', en: 'August', fr: 'août' },
  'září': { cs: 'září', en: 'September', fr: 'septembre' },
  'října': { cs: 'října', en: 'October', fr: 'octobre' },
  'listopadu': { cs: 'listopadu', en: 'November', fr: 'novembre' },
  'prosince': { cs: 'prosince', en: 'December', fr: 'décembre' },
};

export const formatDate = (czechDate: string, language: Language): string => {
  if (language === 'cs') return czechDate;

  let result = czechDate;

  for (const [czech, translations] of Object.entries(monthTranslations)) {
    if (result.includes(czech)) {
      result = result.replace(czech, translations[language]);
      break;
    }
  }

  // For English, reorder to "Month Day, Year" format
  if (language === 'en') {
    // Handle date ranges like "27. - 28. června 2026"
    const rangeMatch = result.match(/(\d+)\.\s*-\s*(\d+)\.\s+(\w+)\s+(\d+)/);
    if (rangeMatch) {
      return `${rangeMatch[3]} ${rangeMatch[1]}-${rangeMatch[2]}, ${rangeMatch[4]}`;
    }

    // Handle single dates like "13. September 2025"
    const singleMatch = result.match(/(\d+)\.\s+(\w+)\s+(\d+)/);
    if (singleMatch) {
      return `${singleMatch[2]} ${singleMatch[1]}, ${singleMatch[3]}`;
    }
  }

  // For French, format is "Day month Year" which is similar to Czech
  if (language === 'fr') {
    // Remove the dot after the day number for French
    result = result.replace(/(\d+)\.\s+/, '$1 ');
    // Handle ranges
    result = result.replace(/(\d+)\s*-\s*(\d+)\.\s+/, '$1-$2 ');
  }

  return result;
};
