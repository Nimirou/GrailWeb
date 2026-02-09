import GrailLogo from './GrailLogo';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-10 sm:py-16 bg-gray-950">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        {/* Logo */}
        <GrailLogo size="sm" className="mx-auto mb-4 sm:mb-6 opacity-50" />

        {/* Next season */}
        <div className="mb-6 sm:mb-8">
          <p className="text-gray-500 text-xs sm:text-sm mb-2">
            {t('nextTournamentsAnnounced')}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-white">
            2027
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-3 mb-8">
          <a
            href="https://www.facebook.com/profile.php?id=61572945407797"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-sm">
            © 2026 Grail Series
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
