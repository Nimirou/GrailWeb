// Google Analytics event tracking

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackPartnerClick = (partnerName: string) => {
  if (window.gtag) {
    window.gtag('event', 'partner_click', {
      partner_name: partnerName,
    });
  }
};

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};
