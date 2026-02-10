import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-10 sm:py-16 bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {t('howToJoin')}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            {t('pricingSubtext')}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Single Entry */}
          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white font-semibold text-lg">{t('singleEntry')}</span>
                <span className="text-gray-500 text-sm">• {t('oneTournament')}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('singleEntryDesc')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-white">700 Kč</span>
            </div>
          </div>

          {/* Season Pass */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-5 border border-gray-700 flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-bl-lg font-medium">
              {t('save')} 200 Kč
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white font-semibold text-lg">{t('seasonPass')}</span>
                <span className="text-gray-500 text-sm">• {t('fiveTournaments')}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('seasonPassDesc')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-2xl font-bold text-white">3 300 Kč</span>
                <p className="text-gray-500 text-xs">660 Kč {t('perTournament')}</p>
              </div>
            </div>
          </div>

          {/* Ambassador */}
          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white font-semibold text-lg">{t('ambassador')}</span>
                <span className="text-gray-500 text-sm">• {t('vipSupport')}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('ambassadorDesc')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-white">5 000 Kč</span>
            </div>
          </div>
        </div>

        {/* Finals note */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            {t('finalsNote')} <span className="text-white">Finals</span> {t('finalsBoughtSeparately')}
          </p>
        </div>

        {/* Organizers & Contact */}
        <div className="mt-6 sm:mt-8 bg-gray-800/30 rounded-xl p-4 sm:p-6">
          <p className="text-gray-300 text-center mb-4">
            Pro možnost zakoupení kontaktujte nás na Discordu nebo zde na Facebooku
          </p>

          {/* Organizer medallions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Ervin Kuč */}
            <div className="bg-gray-800/50 rounded-xl p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                <img
                  src={getAssetPath('/organizer-ervin.png')}
                  alt="Ervin Kuč"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">Ervin Kuč</p>
                <p className="text-gray-400 text-sm">Hlavní organizátor</p>
              </div>
            </div>

            {/* Matthew Grygar */}
            <div className="bg-gray-800/50 rounded-xl p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                <img
                  src={getAssetPath('/organizer-matthew.jpg')}
                  alt="Matthew Grygar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">Matthew Grygar</p>
                <p className="text-gray-400 text-sm">Hlavní organizátor</p>
              </div>
            </div>
          </div>

          {/* Contact buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="https://discord.gg/your-discord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572945407797"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
