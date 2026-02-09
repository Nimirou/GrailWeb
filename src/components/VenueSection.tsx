import { useLanguage } from '../i18n/LanguageContext';

const VenueSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-8 sm:py-12 bg-gray-900/50">
      <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Location */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{t('venueTitle')}</h3>
                <p className="text-gray-300 text-sm">The Gail Klub deskových her</p>
                <p className="text-gray-500 text-sm">Viktora Huga 287/5</p>
                <p className="text-gray-500 text-sm">150 00 Praha 5 - Smíchov</p>
                <a
                  href="https://maps.google.com/?q=Viktora+Huga+287/5,+Praha+5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-gray-400 hover:text-white text-xs transition-colors"
                >
                  {t('openInMaps')} &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Standings link */}
          <a
            href="https://mrazfilip.github.io/TheGrailSeries/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-4 sm:p-6 hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">{t('currentStandings')}</h3>
                <p className="text-gray-400 text-sm">{t('viewStandings')}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-bold">1.</span>
                <span className="text-gray-300">Michal Hrubý</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-bold">2.</span>
                <span className="text-gray-300">Marek Voráček</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">3.</span>
                <span className="text-gray-300">Miroslav Kalina</span>
              </div>
            </div>
          </a>

          {/* ELO Tracker link */}
          <a
            href="https://matthewgrygar.github.io/dc_elo/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-4 sm:p-6 flex items-center gap-4 hover:bg-gray-700 transition-colors"
          >
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">{t('eloTracker')}</h3>
              <p className="text-gray-400 text-sm">{t('viewElo')}</p>
            </div>
          </a>

          {/* Twitch */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">{t('watchLive')}</h3>
                <p className="text-gray-400 text-sm">{t('streamDescription')}</p>
              </div>
            </div>
            <a
              href="https://www.twitch.tv/prague_dc_series"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
            >
              twitch.tv/prague_dc_series
            </a>
          </div>
        </div>

        {/* Twitch Embed */}
        <div className="mt-6">
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <iframe
              src="https://player.twitch.tv/?channel=prague_dc_series&parent=localhost&parent=grail-series.cz&muted=true"
              height="300"
              width="100%"
              allowFullScreen
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
