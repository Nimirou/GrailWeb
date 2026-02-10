import GrailLogo from './GrailLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 sm:py-16 bg-gray-950">
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

        {/* Main content - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Left - Logo & Info */}
          <div className="text-center md:text-left">
            <GrailLogo size="sm" className="mx-auto md:mx-0 mb-4 opacity-70" />
            <p className="text-gray-400 text-sm">
              {t('nextTournamentsAnnounced')}
            </p>
          </div>

          {/* Center - Partner */}
          <div className="text-center">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              {t('mainPartner')}
            </p>
            <a
              href="https://www.najada.games/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img
                src={getAssetPath('/partner-logo.svg')}
                alt="Najada Games"
                className="h-20 w-auto mx-auto"
              />
            </a>
          </div>

          {/* Right - Web creator */}
          <div className="text-center md:text-right">
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
