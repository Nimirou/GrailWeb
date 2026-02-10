import { tournaments } from '../data/tournaments';
import type { Tournament } from '../data/tournaments';
import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

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

  const commanderImages: Record<string, string> = {
    'rograkh': getAssetPath('/rograkh.jpg'),
    'ikra shidiqi': getAssetPath('/ikra-shidiqi.png'),
    'ikra': getAssetPath('/ikra-shidiqi.png'),
    'slimefoot and squee': getAssetPath('/slimefoot-and-squee.jpg'),
  };

  const deckLower = deckName.toLowerCase();

  if (deckLower.includes('+')) {
    const parts = deckLower.split('+').map(p => p.trim());
    const images: string[] = [];

    for (const part of parts) {
      for (const [name, image] of Object.entries(commanderImages)) {
        if (part.includes(name)) {
          images.push(image);
          break;
        }
      }
    }

    if (images.length > 0) return images;
  }

  for (const [name, image] of Object.entries(commanderImages)) {
    if (deckLower.includes(name)) {
      return [image];
    }
  }

  return [getAssetPath('/slimefoot-and-squee.jpg')];
};

const TournamentRoadmap = () => {
  const { t } = useLanguage();
  const scrollToTournament = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const regularTournaments = tournaments.filter(t => !t.isFinals);
  const finalsTournament = tournaments.find(t => t.isFinals);
  const completedCount = tournaments.filter(t => t.status === 'completed').length;

  const getWinner = (tournament: Tournament) => {
    if (tournament.status === 'completed' && tournament.topPlayers && tournament.topPlayers.length > 0) {
      return tournament.topPlayers[0];
    }
    return null;
  };

  const isCompleted = (tournament: Tournament) => tournament.status === 'completed';
  const isUpcoming = (tournament: Tournament) => tournament.status === 'upcoming';

  const renderCard = (tournament: Tournament, position: 'top' | 'bottom') => {
    const winner = getWinner(tournament);
    const completed = isCompleted(tournament);
    const upcoming = isUpcoming(tournament);
    const commanderImages = winner ? getCommanderImages(winner.deck) : [];

    return (
      <button
        key={tournament.id}
        onClick={() => scrollToTournament(tournament.id)}
        className={`group flex flex-col items-center transition-all duration-300 hover:z-[9999] relative`}
        style={{ width: '200px' }}
      >
        {position === 'bottom' && (
          <div className="w-px h-6 bg-gray-600" />
        )}

        <div className="relative" style={{ width: '200px', height: '80px' }}>
          <div
            className={`absolute top-0 left-0 rounded-xl overflow-visible border transition-all duration-300 origin-center
              group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-black/70 ${
              completed
                ? 'border-gray-600 bg-gray-800 group-hover:border-gray-400'
                : upcoming
                  ? 'border-gray-500 bg-gray-800 group-hover:border-orange-500'
                  : 'border-gray-700 bg-gray-800/80 group-hover:border-gray-500'
            }`}
            style={{ width: '200px' }}
          >
            {/* Status badge at top */}
            {(completed || upcoming) && (
              <div className={`text-[10px] font-medium text-center py-1 uppercase tracking-wider rounded-t-xl ${
                completed ? 'bg-gray-700 text-gray-300' : 'bg-gray-600 text-white'
              }`}>
                {completed ? t('played') : t('nextTournamentBadge')}
              </div>
            )}
            {!completed && !upcoming && (
              <div className="bg-gray-700/50 text-gray-500 text-[10px] font-medium text-center py-1 uppercase tracking-wider rounded-t-xl">
                {t('planned')}
              </div>
            )}

            <div className="p-3">
              <p className="text-xs text-gray-400 mb-1">
                {tournament.date}
              </p>

              <p className="text-white font-medium text-sm leading-tight">
                {tournament.name}
              </p>

              {/* Top 3 players - hidden by default, shown on hover */}
              {completed && tournament.topPlayers && tournament.topPlayers.length > 0 && (
                <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[300px] overflow-visible">
                  <div className="mt-3 pt-3 border-t border-gray-700 space-y-2">
                    {tournament.topPlayers.slice(0, 3).map((player, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        {idx === 0 && (
                          <div className="w-6 h-6 rounded-full overflow-hidden border border-yellow-500/50 flex-shrink-0">
                            <img
                              src={getWinnerPhoto(player.name)}
                              alt={player.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        )}
                        {idx !== 0 && (
                          <span className={`text-xs font-bold w-6 text-center ${
                            idx === 1 ? 'text-gray-400' : 'text-orange-500'
                          }`}>
                            {idx + 1}.
                          </span>
                        )}
                        <span className={`text-xs ${idx === 0 ? 'text-yellow-500 font-semibold' : 'text-gray-300'}`}>
                          {player.name}
                        </span>
                      </div>
                    ))}

                    {/* Commander cards for winner */}
                    {winner && winner.deck && (
                      <div className="mt-3 pt-2 border-t border-gray-700/50 overflow-visible">
                        <p className="text-gray-500 text-[10px] uppercase tracking-wider text-center mb-2">
                          {t('commander')}
                        </p>
                        <p className="text-gray-400 text-xs text-center mb-2">{winner.deck}</p>
                        <div className="flex justify-center items-center pb-4" style={{ height: commanderImages.length > 1 ? '95px' : '100px' }}>
                          {commanderImages.map((img, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg overflow-hidden shadow-lg shadow-black/50 transition-transform"
                              style={{
                                width: commanderImages.length > 1 ? '50px' : '65px',
                                height: commanderImages.length > 1 ? '70px' : '91px',
                                transform: commanderImages.length > 1
                                  ? `rotate(${idx === 0 ? '-10deg' : '10deg'}) translateX(${idx === 0 ? '8px' : '-8px'})`
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
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {position === 'top' && (
          <div className="w-px h-6 bg-gray-600" />
        )}
      </button>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-12">
      {/* Desktop Roadmap */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Timeline with 5 tournaments - Grid layout for alignment */}
        <div className="flex-1">
          <div className="grid grid-cols-5 gap-2">
            {/* Top row - cards for indices 0, 2, 4 */}
            {regularTournaments.map((tournament, i) => (
              <div key={`top-${tournament.id}`} className="flex justify-center items-end">
                {i % 2 === 0 ? renderCard(tournament, 'top') : <div style={{ width: '200px' }} />}
              </div>
            ))}

            {/* Timeline bar row with dots */}
            <div className="col-span-5 relative h-4 flex items-center">
              {/* Bar */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-gray-700 rounded-full">
                <div
                  className="absolute top-0 left-0 h-1 rounded-full bg-gray-500 transition-all duration-700"
                  style={{ width: `${(completedCount / regularTournaments.length) * 100}%` }}
                />
              </div>

              {/* Dots on timeline */}
              <div className="relative w-full grid grid-cols-5">
                {regularTournaments.map((t, i) => (
                  <div key={`dot-${t.id}`} className="flex justify-center">
                    <div
                      className={`w-3 h-3 rounded-full z-10 ${
                        i < completedCount
                          ? 'bg-green-500'
                          : t.status === 'upcoming'
                            ? 'bg-orange-500 ring-2 ring-orange-400'
                            : 'bg-gray-700 border border-gray-600'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row - cards for indices 1, 3 */}
            {regularTournaments.map((tournament, i) => (
              <div key={`bottom-${tournament.id}`} className="flex justify-center items-start">
                {i % 2 === 1 ? renderCard(tournament, 'bottom') : <div style={{ width: '200px' }} />}
              </div>
            ))}
          </div>
        </div>

        {/* Finals card */}
        {finalsTournament && (
          <button
            onClick={() => scrollToTournament(finalsTournament.id)}
            className="group transition-all duration-200 hover:scale-105"
            style={{ width: '220px' }}
          >
            <div className="rounded-xl overflow-hidden border-2 border-orange-500/50 bg-gray-800 shadow-lg shadow-orange-500/20 animate-pulse-glow">
              <div className="bg-gray-700 text-gray-200 text-xs font-medium text-center py-2">
                {t('finals')}
              </div>

              <div className="p-5 text-center">
                {/* Trophy icon */}
                <img
                  src={getAssetPath('/grail-trophy.png')}
                  alt="Grail Trophy"
                  className="w-16 h-16 mx-auto mb-3 object-contain"
                />

                <p className="text-gray-400 text-sm mb-1">
                  {finalsTournament.date}
                </p>
                <p className="text-white font-semibold text-base">
                  {finalsTournament.name}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {t('topPlayers')}
                </p>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Mobile - Simple list */}
      <div className="lg:hidden space-y-2">
        {tournaments.map((tournament) => {
          const winner = getWinner(tournament);
          const completed = isCompleted(tournament);
          const upcoming = isUpcoming(tournament);

          return (
            <button
              key={tournament.id}
              onClick={() => scrollToTournament(tournament.id)}
              className={`w-full text-left rounded-xl overflow-hidden border ${
                completed
                  ? 'border-gray-600 bg-gray-800/60'
                  : upcoming
                    ? 'border-gray-500 bg-gray-800'
                    : 'border-gray-700 bg-gray-800/80'
              }`}
            >
              {/* Status badge */}
              {completed && (
                <div className="bg-gray-700 text-gray-300 text-[10px] font-medium text-center py-1 uppercase tracking-wider">
                  {t('played')}
                </div>
              )}
              {upcoming && (
                <div className="bg-gray-600 text-white text-[10px] font-medium text-center py-1 uppercase tracking-wider">
                  {t('nextTournamentBadge')}
                </div>
              )}
              {tournament.isFinals && (
                <div className="bg-gray-700 text-gray-200 text-[10px] font-medium text-center py-1 uppercase tracking-wider">
                  Finals
                </div>
              )}

              <div className="p-3 sm:p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-xs sm:text-sm">{tournament.date}</p>
                    <p className="text-white font-medium text-sm sm:text-base truncate">
                      {tournament.name}
                    </p>

                    {winner && (
                      <div className="mt-2 pt-2 border-t border-gray-700">
                        <p className="text-gray-300 text-xs sm:text-sm">{winner.name}</p>
                        {winner.deck && (
                          <p className="text-gray-500 text-[10px] sm:text-xs truncate">{winner.deck}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Commander card(s) for mobile */}
                  {winner && (
                    <div className="flex flex-shrink-0">
                      {getCommanderImages(winner.deck).map((img, idx) => (
                        <div
                          key={idx}
                          className={`w-12 h-16 rounded-lg overflow-hidden shadow-lg ${
                            idx > 0 ? '-ml-5' : ''
                          }`}
                          style={{ zIndex: getCommanderImages(winner.deck).length - idx }}
                        >
                          <img
                            src={img}
                            alt={`Commander ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default TournamentRoadmap;
