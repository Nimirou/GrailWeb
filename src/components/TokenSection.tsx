import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

const TokenSection = () => {
  const { t, language } = useLanguage();
  const tokens = [
    { image: getAssetPath('/token-saproling.png'), name: 'Nguyen Tien Dung', type: 'Saproling' },
    { image: getAssetPath('/token-monarch.png'), name: 'Dominik Mašík', type: 'Monarch' },
    { image: getAssetPath('/token-goblin.png'), name: 'Alan Stehlík', type: 'Goblin Shaman' },
    { image: getAssetPath('/token-treasure.png'), name: 'Jakub Vojta', type: 'Treasure' },
    { image: getAssetPath('/token-storm.png'), name: 'Michal Hrubý', type: 'Storm' },
  ];

  const prizesValue = language === 'cs' ? '100 000+ Kč' : '4 000+ €';

  const stats = [
    { value: '6', label: t('tournaments') },
    { value: '130+', label: t('uniquePlayers') },
    { value: prizesValue, label: t('inPrizes') },
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

          {/* Token gallery - fan layout */}
          <div className="lg:w-2/3 flex justify-center items-end" style={{ height: '220px' }}>
            {tokens.map((token, index) => {
              const rotations = [-20, -10, 0, 10, 20];
              const translateY = [15, 5, 0, 5, 15];
              return (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden transition-all duration-300 shadow-xl shadow-black/50 w-24 sm:w-28 md:w-32 -ml-6 first:ml-0 hover:scale-150 hover:z-20 hover:shadow-2xl hover:shadow-black/70"
                  style={{
                    transform: `rotate(${rotations[index]}deg) translateY(${translateY[index]}px)`,
                    zIndex: index === 2 ? 5 : 4 - Math.abs(index - 2),
                  }}
                >
                  <img
                    src={token.image}
                    alt={`${token.name} - ${token.type}`}
                    className="w-full aspect-[2.5/3.5] object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
