import GrailLogo from './GrailLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';
import { trackPartnerClick } from '../utils/analytics';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 sm:py-16" style={{ backgroundColor: '#030712' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Ambassadors */}
        <div className="text-center mb-10 pb-8 border-b border-gray-800">
          <p className="text-orange-500/80 text-xs font-medium uppercase tracking-wider mb-3">
            {t('thanksToAmbassadors')}
          </p>
          <p className="text-gray-400 text-sm">
            Vratislav Drábek • Jiří Joska • Dominik Trpák
          </p>
        </div>

        {/* Main content - 3 columns with custom widths */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
          {/* Left - Logo & Info */}
          <div className="text-center md:text-left md:w-40 flex-shrink-0">
            <GrailLogo size="sm" className="mx-auto md:mx-0 mb-4 opacity-70" />
            <p className="text-gray-400 text-xs">
              {t('nextTournamentsAnnounced')}
            </p>
          </div>

          {/* Center - Partners */}
          <div className="text-center flex-1">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              {t('partners')}
            </p>
            {/* Mobile: vertical stack, Desktop: horizontal with Najada in center */}
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Najada - shown first on mobile only */}
              <a
                href="https://www.najada.games/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity sm:hidden"
                onClick={() => trackPartnerClick('Najada')}
              >
                <img
                  src={getAssetPath('/partner-logo.svg')}
                  alt="Najada Games"
                  className="h-12 w-auto"
                />
              </a>
              <div className="w-16 h-px bg-orange-500/60 sm:hidden" />
              {/* Mobile: HASEK-SHOP and onStack stacked */}
              <div className="flex flex-col items-center gap-3 sm:hidden">
                <a
                  href="https://www.cardmarket.com/en/Magic/Users/HASEK-SHOP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                  onClick={() => trackPartnerClick('HASEK-SHOP')}
                >
                  <img
                    src={getAssetPath('/partner-hasek.jpg')}
                    alt="Hašek shop"
                    className="h-8 w-8 rounded-lg object-cover"
                  />
                  <span className="text-gray-300 text-xs font-bold whitespace-nowrap">HASEK-SHOP</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCFuTqx9aSmodjlrTFzeykEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                  onClick={() => trackPartnerClick('onStack')}
                >
                  <img
                    src={getAssetPath('/partner-onstack.jpg')}
                    alt="onStack"
                    className="h-8 w-8 rounded-lg object-cover"
                  />
                  <span className="text-gray-300 text-xs font-bold whitespace-nowrap">onStack</span>
                </a>
              </div>
              {/* Desktop layout: HASEK-SHOP | Najada | onStack */}
              <div className="hidden sm:flex items-center gap-4">
                <a
                  href="https://www.cardmarket.com/en/Magic/Users/HASEK-SHOP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                  onClick={() => trackPartnerClick('HASEK-SHOP')}
                >
                  <img
                    src={getAssetPath('/partner-hasek.jpg')}
                    alt="Hašek shop"
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <span className="text-gray-300 text-xs font-bold whitespace-nowrap">HASEK-SHOP</span>
                </a>
                <div className="w-px h-12 bg-orange-500/60" />
                <a
                  href="https://www.najada.games/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                  onClick={() => trackPartnerClick('Najada')}
                >
                  <img
                    src={getAssetPath('/partner-logo.svg')}
                    alt="Najada Games"
                    className="h-14 w-auto"
                  />
                </a>
                <div className="w-px h-12 bg-orange-500/60" />
                <a
                  href="https://www.youtube.com/channel/UCFuTqx9aSmodjlrTFzeykEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                  onClick={() => trackPartnerClick('onStack')}
                >
                  <img
                    src={getAssetPath('/partner-onstack.jpg')}
                    alt="onStack"
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <span className="text-gray-300 text-xs font-bold whitespace-nowrap">onStack</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Web creator */}
          <div className="text-center md:text-right md:w-40 flex-shrink-0">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              {t('webManagedBy')}
            </p>
            <a
              href="https://www.facebook.com/hon.zzik/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm">Jan Klimeš</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Grail Series
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
