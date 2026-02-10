import { useLanguage } from '../i18n/LanguageContext';

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
          <h3 className="text-white font-semibold text-center mb-4">{t('organizers')}</h3>

          {/* Organizer medallions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Filip Mráz */}
            <div className="bg-gray-800/50 rounded-xl p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Filip Mráz</p>
                <p className="text-gray-400 text-sm">Hlavní organizátor</p>
              </div>
            </div>

            {/* Nguyen Tien Dung */}
            <div className="bg-gray-800/50 rounded-xl p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Nguyen Tien Dung</p>
                <p className="text-gray-400 text-sm">Spoluorganizátor</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">
              {t('subscriptionContact')}
            </p>
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
