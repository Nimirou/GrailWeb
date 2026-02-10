import { useEffect, useRef, useState } from 'react';
import type { Tournament } from '../data/tournaments';
import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

interface TournamentSectionProps {
  tournament: Tournament;
  index: number;
  total: number;
}

// Helper function to get winner photo
const getWinnerPhoto = (name: string): string => {
  const winnerPhotos: Record<string, string> = {
    'nguyen tien dung': getAssetPath('/winner-nguyen.jpg'),
    'michal hrubý': getAssetPath('/winner-hruby.jpg'),
  };

  const nameLower = name.toLowerCase();
  return winnerPhotos[nameLower] || getAssetPath('/token-card.jpg');
};

// Helper function to get commander card images
const getCommanderImages = (deckName: string | undefined): string[] => {
  if (!deckName) return [getAssetPath('/slimefoot-and-squee.jpg')];

  // Map of commander names to their images
  const commanderImages: Record<string, string> = {
    'rograkh': getAssetPath('/rograkh.jpg'),
    'ikra shidiqi': getAssetPath('/ikra-shidiqi.png'),
    'ikra': getAssetPath('/ikra-shidiqi.png'),
    'slimefoot and squee': getAssetPath('/slimefoot-and-squee.jpg'),
    'aragorn': getAssetPath('/aragorn.jpg'),
  };

  const deckLower = deckName.toLowerCase();

  // Check if it's a partner commander (contains "+")
  if (deckLower.includes('+')) {
    const parts = deckLower.split('+').map(p => p.trim());
    const images: string[] = [];

    for (const part of parts) {
      // Find matching commander
      for (const [name, image] of Object.entries(commanderImages)) {
        if (part.includes(name)) {
          images.push(image);
          break;
        }
      }
    }

    if (images.length > 0) return images;
  }

  // Check for single commander
  for (const [name, image] of Object.entries(commanderImages)) {
    if (deckLower.includes(name)) {
      return [image];
    }
  }

  // Default fallback
  return [getAssetPath('/slimefoot-and-squee.jpg')];
};

const TournamentSection = ({ tournament, index, total }: TournamentSectionProps) => {
  const { t } = useLanguage();
  const isCompleted = tournament.status === 'completed';
  const isUpcoming = tournament.status === 'upcoming';
  const isAnnounced = tournament.status === 'announced';
  const isFinals = tournament.isFinals;
  const winner = isCompleted && tournament.topPlayers?.[0];

  // Capacity data for upcoming tournament
  const firstMilestone = 100;
  const secondMilestone = 160;
  const registered = 31;
  const spotsToFirstMilestone = firstMilestone - registered;

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusBadge = () => {
    if (isCompleted) return { text: t('finished'), bg: 'bg-gray-700', color: 'text-gray-300' };
    if (isUpcoming) return { text: t('upcoming'), bg: 'bg-orange-500', color: 'text-white' };
    return { text: t('planned'), bg: 'bg-gray-800', color: 'text-gray-400' };
  };

  const status = getStatusBadge();

  // Compact version for announced tournaments
  if (isAnnounced) {
    return (
      <section
        ref={sectionRef}
        id={tournament.id}
        className="py-12 border-b border-gray-700/30"
        style={{ backgroundColor: index % 2 === 0 ? '#111827' : '#0f172a' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className={`flex flex-col md:flex-row md:items-center gap-6 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Number or Trophy for finals */}
              {isFinals ? (
                <img
                  src={getAssetPath('/grail-trophy.png')}
                  alt="Grail Finals"
                  className="w-16 h-16 md:w-20 md:h-20 opacity-50 flex-shrink-0"
                />
              ) : (
                <span
                  className="text-6xl md:text-8xl font-black text-gray-700/50 flex-shrink-0"
                  style={{ fontFamily: 'system-ui' }}
                >
                  {index + 1}
                </span>
              )}

              {/* Info */}
              <div className="flex-1">
                <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${status.bg} ${status.color} mb-2`}>
                  {status.text}
                </span>
                <h3 className={`text-2xl font-bold mb-1 ${isFinals ? 'text-yellow-500' : 'text-white'}`}>{tournament.name}</h3>
                <p className="text-gray-400">{tournament.date}</p>
              </div>

              {/* Brief info */}
              <div className="text-right">
                <p className={`text-sm ${isFinals ? 'text-yellow-600 font-medium' : 'text-gray-500'}`}>
                  {isFinals ? 'Brzy bude odhaleno' : t('detailsSoon')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id={tournament.id}
      className="min-h-[80vh] sm:min-h-screen flex items-center py-8 sm:py-16"
      style={{ backgroundColor: index % 2 === 0 ? '#111827' : '#0f172a' }}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-8 lg:gap-16">

            {/* Left side - Big number or Finals logo */}
            <div
              className={`flex-shrink-0 text-center lg:text-left order-2 lg:order-1 transition-all duration-1000 ease-out hidden sm:block ${
                isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-75'
              }`}
            >
              {isFinals ? (
                <img
                  src={getAssetPath('/grail-trophy.png')}
                  alt="Grail Finals"
                  className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto opacity-30"
                />
              ) : (
                <span
                  className="block text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none text-gray-700/50"
                  style={{ fontFamily: 'system-ui' }}
                >
                  {index + 1}
                </span>
              )}
              <p className={`text-gray-600 text-sm mt-2 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                {isFinals ? t('finals') : `${t('tournament')} ${index + 1} / ${total - 1}`}
              </p>
            </div>

            {/* Right side - Details */}
            <div
              className={`flex-1 w-full order-1 lg:order-2 transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Status badge */}
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${status.bg} ${status.color} mb-4`}>
                {status.text}
              </span>

              {/* Tournament name */}
              <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold mb-3 ${isFinals ? 'text-yellow-500' : 'text-white'}`}>
                {tournament.name}
              </h2>

              {/* Date & Location */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <p className="text-gray-400 text-base sm:text-lg">
                  {tournament.date}
                </p>
                {tournament.location && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{tournament.location}</span>
                  </div>
                )}
              </div>

              {/* Finals promo image - show for 4th tournament only */}
              {index === 3 && !isFinals && (
                <div
                  className={`mb-6 transition-all duration-700 delay-300 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <img
                    src={getAssetPath('/finals-promo.jpg')}
                    alt="Grail Finals 2026"
                    className="w-full rounded-2xl shadow-2xl shadow-black/50"
                  />
                </div>
              )}

              {/* Coming soon for finals */}
              {isFinals && (
                <div
                  className={`mb-6 py-16 text-center transition-all duration-700 delay-300 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <p className="text-4xl md:text-5xl font-bold text-gray-500">
                    Brzy bude odhaleno
                  </p>
                </div>
              )}

              {/* Winner section for completed tournaments */}
              {winner && (
                <div
                  className={`bg-gray-800/60 border border-gray-700/50 rounded-2xl p-4 sm:p-6 mb-6 shadow-lg transition-all duration-700 delay-400 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-3 sm:mb-4">
                    {t('winner')}
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    {/* Player photo */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-700 overflow-hidden flex-shrink-0 border-2 border-yellow-500/50">
                      <img
                        src={getWinnerPhoto(winner.name)}
                        alt={winner.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-yellow-500 text-xs font-medium mb-1">1. {t('place')}</p>
                      <p className="text-white text-xl sm:text-2xl font-bold">{winner.name}</p>
                      {winner.deck && (
                        <p className="text-gray-400 text-sm sm:text-base mt-1">{winner.deck}</p>
                      )}
                    </div>

                    {/* Commander card(s) */}
                    <div className="flex-shrink-0 flex items-center justify-center" style={{ minWidth: getCommanderImages(winner.deck).length > 1 ? '180px' : 'auto' }}>
                      {getCommanderImages(winner.deck).map((img, idx) => {
                        const images = getCommanderImages(winner.deck);
                        const isFan = images.length > 1;
                        return (
                          <div
                            key={idx}
                            className="w-16 sm:w-24 md:w-32 h-22 sm:h-32 md:h-44 rounded-xl bg-gray-700 overflow-hidden shadow-lg shadow-black/30"
                            style={{
                              transform: isFan
                                ? `rotate(${idx === 0 ? '-12deg' : '12deg'}) translateX(${idx === 0 ? '15px' : '-15px'})`
                                : 'none',
                              zIndex: idx === 0 ? 1 : 2,
                            }}
                          >
                            <img
                              src={img}
                              alt={`Commander ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Top 8 results table for completed */}
              {isCompleted && tournament.topPlayers && tournament.topPlayers.length > 1 && (
                <div
                  className={`mb-6 transition-all duration-700 delay-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-3">
                    {t('top8')}
                  </h3>
                  <div className="bg-gray-800/50 border border-gray-700/40 rounded-xl overflow-hidden shadow-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700/60 bg-gray-800/40">
                          <th className="text-left text-gray-500 text-xs font-medium px-4 py-2 w-12">#</th>
                          <th className="text-left text-gray-500 text-xs font-medium px-4 py-2">{t('player')}</th>
                          <th className="text-left text-gray-500 text-xs font-medium px-4 py-2">{t('commander')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tournament.topPlayers.slice(0, 8).map((player) => (
                          <tr
                            key={player.place}
                            className={`border-b border-gray-700/50 last:border-0 ${
                              player.place === 1 ? 'bg-yellow-900/20' :
                              player.place === 2 ? 'bg-gray-700/20' :
                              player.place === 3 ? 'bg-orange-900/20' : ''
                            }`}
                          >
                            <td className="px-4 py-2">
                              <span className={`font-bold ${
                                player.place === 1 ? 'text-yellow-500' :
                                player.place === 2 ? 'text-gray-400' :
                                player.place === 3 ? 'text-orange-500' : 'text-gray-600'
                              }`}>
                                {player.place}.
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              <span className="text-white font-medium text-sm">{player.name}</span>
                            </td>
                            <td className="px-4 py-2">
                              <span className="text-gray-400 text-sm">{player.deck}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Prizes - hide for 4th tournament and finals */}
              {index !== 3 && !isFinals && (
                <div
                  className={`mb-6 transition-all duration-700 delay-600 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-3">
                    {t('prizes')}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {tournament.prizes.slice(0, 4).map((prize) => (
                      <div
                        key={String(prize.place)}
                        className="flex items-center gap-3 p-3 bg-gray-800/60 border border-gray-700/40 rounded-xl"
                      >
                        <span
                          className={`font-bold text-lg min-w-[40px] ${
                            prize.place === 1 ? 'text-yellow-500' :
                            prize.place === 2 ? 'text-gray-400' :
                            String(prize.place).includes('3') ? 'text-orange-500' : 'text-gray-600'
                          }`}
                        >
                          {prize.place}.
                        </span>
                        <span className="text-gray-300 text-sm">{prize.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Registration for upcoming */}
              {isUpcoming && (
                <div
                  className={`transition-all duration-700 delay-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Capacity bar */}
                  <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 mb-6 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm text-gray-500 uppercase tracking-wide">
                        {t('capacity')}
                      </h3>
                      <span className="text-white font-medium">
                        {registered} / {secondMilestone}
                      </span>
                    </div>

                    {/* Progress bar with milestones */}
                    <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden mb-3">
                      {/* First milestone marker */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-gray-500 z-10"
                        style={{ left: `${(firstMilestone / secondMilestone) * 100}%` }}
                      />
                      {/* Progress */}
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000"
                        style={{ width: `${(registered / secondMilestone) * 100}%` }}
                      />
                    </div>

                    {/* Milestone labels */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>0</span>
                      <span style={{ marginLeft: `${(firstMilestone / secondMilestone) * 100 - 10}%` }}>
                        {firstMilestone} (1. milník)
                      </span>
                      <span>{secondMilestone}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-orange-400 text-sm font-medium">
                        {spotsToFirstMilestone} {t('spotsLeft')} do 1. milníku
                      </p>
                      <a
                        href="https://docs.google.com/spreadsheets/d/1064B3BlMIntIgXDHZBf2JmqqHSiSun18FYTakwLgcaU/edit?gid=0#gid=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
                      >
                        <span>Zobrazit hráče</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {tournament.registrationInfo && (
                    <p className="text-gray-500 text-sm mb-4">{tournament.registrationInfo}</p>
                  )}

                  <a
                    href="https://forms.gle/8RSZVwB4Ebsw82897"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors text-lg"
                  >
                    {t('registerNow')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;
