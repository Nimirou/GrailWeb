import type { Language } from '../i18n/translations';

// Exchange rate: 1 EUR ≈ 25 CZK
const CZK_TO_EUR = 25;

export const formatCurrency = (czkAmount: number, language: Language): string => {
  if (language === 'cs') {
    return `${czkAmount.toLocaleString('cs-CZ')} Kč`;
  }

  const eurAmount = Math.round(czkAmount / CZK_TO_EUR);

  // Both EN and FR: amount followed by €
  return `${eurAmount.toLocaleString('en-US')} €`;
};

// Helper for strings like "50 000+ Kč"
export const formatCurrencyString = (czkString: string, language: Language): string => {
  if (language === 'cs') return czkString;

  // Extract number and suffix (like "+")
  const match = czkString.match(/^([\d\s]+)\+?\s*Kč$/);
  if (!match) return czkString;

  const numberStr = match[0].replace(/[^\d]/g, '');
  const amount = parseInt(numberStr, 10);
  const hasPlus = czkString.includes('+');

  const eurAmount = Math.round(amount / CZK_TO_EUR);
  const plusSign = hasPlus ? '+' : '';

  if (language === 'en') {
    return `€${eurAmount.toLocaleString('en-US')}${plusSign}`;
  }

  // French
  return `${eurAmount.toLocaleString('fr-FR')}${plusSign} €`;
};
