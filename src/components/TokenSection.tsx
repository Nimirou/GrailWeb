import { useLanguage } from '../i18n/LanguageContext';

const TokenSection = () => {
  const { t } = useLanguage();
  const tokens = [
    { image: '/token-card.jpg', name: 'Ervin Kuč', type: 'Cat' },
    { image: '/token-card.jpg', name: 'Ervin Kuč', type: 'Cat' },
    { image: '/token-card.jpg', name: 'Ervin Kuč', type: 'Cat' },
  ];

  const stats = [
    { value: '3', label: t('tournaments') },
    { value: '130+', label: t('uniquePlayers') },
    { value: '50 000+ Kč', label: t('inPrizes') },
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-900">
      {/* Stats */}
      <div className="container mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
        <h2 className="text-center text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
          {t('statsTitle')}
        </h2>
        <div className="flex justify-center gap-6 sm:gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          {/* Text */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t('winnerTokens')}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              {t('tokenDescription')}
            </p>
          </div>

          {/* Token gallery */}
          <div className="lg:w-2/3 flex justify-center gap-2 sm:gap-4">
            {tokens.map((token, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 shadow-xl shadow-black/30 w-24 sm:w-32 md:w-40"
              >
                <img
                  src={token.image}
                  alt={`${token.name} - ${token.type}`}
                  className="w-full aspect-[2.5/3.5] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
