import { tournaments } from '../data/tournaments';
import { useLanguage } from '../i18n/LanguageContext';
import { formatDate } from '../utils/dateFormatter';

const TournamentTimeline = () => {
  const { t, language } = useLanguage();
  const scrollToTournament = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'upcoming':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const completedCount = tournaments.filter(t => t.status === 'completed').length;
  const progressPercentage = (completedCount / (tournaments.length - 1)) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Progress header */}
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm mb-2 tracking-wide uppercase">{t('seasonProgress')}</p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl font-bold" style={{ color: '#e85d04' }}>{completedCount}</span>
          <span className="text-gray-300">/</span>
          <span className="text-2xl font-bold text-gray-300">{tournaments.length}</span>
          <span className="text-gray-400 text-sm ml-2">{t('ofTournaments')}</span>
        </div>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Background track */}
          <div className="absolute top-8 left-0 right-0 h-1 rounded-full" style={{ backgroundColor: '#f0f0f0' }} />

          {/* Progress fill */}
          <div
            className="absolute top-8 left-0 h-1 rounded-full transition-all duration-1000"
            style={{
              width: `${progressPercentage}%`,
              background: 'linear-gradient(to right, #22c55e, #16a34a)',
            }}
          />

          {/* Steps */}
          <div className="relative flex justify-between">
            {tournaments.map((tournament) => (
              <button
                key={tournament.id}
                onClick={() => scrollToTournament(tournament.id)}
                className="group flex flex-col items-center focus:outline-none rounded-lg"
              >
                {/* Step circle */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border-2`}
                  style={{
                    background:
                      tournament.status === 'completed'
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                        : tournament.status === 'upcoming'
                        ? 'linear-gradient(135deg, #e85d04, #dc2f02)'
                        : '#f8f8f8',
                    borderColor:
                      tournament.status === 'completed'
                        ? '#22c55e'
                        : tournament.status === 'upcoming'
                        ? '#e85d04'
                        : '#e5e5e5',
                    color:
                      tournament.status === 'completed' || tournament.status === 'upcoming'
                        ? '#fff'
                        : '#9ca3af',
                    boxShadow:
                      tournament.status === 'completed'
                        ? '0 4px 20px rgba(34, 197, 94, 0.3)'
                        : tournament.status === 'upcoming'
                        ? '0 4px 20px rgba(232, 93, 4, 0.3)'
                        : 'none',
                  }}
                >
                  {getStatusIcon(tournament.status)}

                  {tournament.status === 'upcoming' && (
                    <span
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{ backgroundColor: 'rgba(232, 93, 4, 0.2)' }}
                    />
                  )}
                </div>

                {/* Step info card */}
                <div
                  className="mt-4 p-3 rounded-xl transition-all duration-300 min-w-[140px] border group-hover:shadow-md"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: tournament.status === 'upcoming' ? '#fde68a' : '#f0f0f0',
                  }}
                >
                  <p
                    className="text-xs font-semibold mb-1 tracking-wide"
                    style={{
                      color:
                        tournament.status === 'upcoming'
                          ? '#e85d04'
                          : tournament.status === 'completed'
                          ? '#22c55e'
                          : '#9ca3af',
                    }}
                  >
                    {formatDate(tournament.date, language)}
                  </p>
                  <p className="text-gray-700 font-medium text-sm leading-tight">
                    {tournament.name}
                  </p>
                  {tournament.location && (
                    <p className="text-gray-400 text-xs mt-1 truncate">
                      {tournament.location.split(' - ')[0]}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="md:hidden">
        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-3 top-0 bottom-0 w-0.5 rounded-full"
            style={{ backgroundColor: '#f0f0f0' }}
          />

          {/* Progress fill */}
          <div
            className="absolute left-3 top-0 w-0.5 rounded-full transition-all duration-1000"
            style={{
              height: `${progressPercentage}%`,
              background: 'linear-gradient(to bottom, #22c55e, #16a34a)',
            }}
          />

          {/* Steps */}
          <div className="space-y-6">
            {tournaments.map((tournament) => (
              <button
                key={tournament.id}
                onClick={() => scrollToTournament(tournament.id)}
                className="group flex items-start gap-4 w-full text-left focus:outline-none"
              >
                {/* Step circle */}
                <div
                  className="relative z-10 -ml-8 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 border-2"
                  style={{
                    background:
                      tournament.status === 'completed'
                        ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                        : tournament.status === 'upcoming'
                        ? 'linear-gradient(135deg, #e85d04, #dc2f02)'
                        : '#f8f8f8',
                    borderColor:
                      tournament.status === 'completed'
                        ? '#22c55e'
                        : tournament.status === 'upcoming'
                        ? '#e85d04'
                        : '#e5e5e5',
                    color:
                      tournament.status === 'completed' || tournament.status === 'upcoming'
                        ? '#fff'
                        : '#9ca3af',
                  }}
                >
                  {getStatusIcon(tournament.status)}
                </div>

                {/* Step info card */}
                <div
                  className="flex-1 p-4 rounded-xl transition-all duration-300 border"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: tournament.status === 'upcoming' ? '#fde68a' : '#f0f0f0',
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p
                      className="text-xs font-semibold tracking-wide"
                      style={{
                        color:
                          tournament.status === 'upcoming'
                            ? '#e85d04'
                            : tournament.status === 'completed'
                            ? '#22c55e'
                            : '#9ca3af',
                      }}
                    >
                      {formatDate(tournament.date, language)}
                    </p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor:
                          tournament.status === 'completed'
                            ? '#dcfce7'
                            : tournament.status === 'upcoming'
                            ? '#ffedd5'
                            : '#f3f4f6',
                        color:
                          tournament.status === 'completed'
                            ? '#16a34a'
                            : tournament.status === 'upcoming'
                            ? '#ea580c'
                            : '#6b7280',
                      }}
                    >
                      {tournament.status === 'completed' ? t('finished') :
                       tournament.status === 'upcoming' ? t('soon') : t('planned')}
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium">
                    {tournament.name}
                  </p>
                  {tournament.location && (
                    <p className="text-gray-400 text-sm mt-1">
                      {tournament.location}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
          >
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-gray-500 text-sm">{t('finished')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #e85d04, #dc2f02)' }}
          >
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span className="text-gray-500 text-sm">{t('upcoming')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center border-2"
            style={{ backgroundColor: '#f8f8f8', borderColor: '#e5e5e5' }}
          >
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-gray-500 text-sm">{t('planned')}</span>
        </div>
      </div>
    </div>
  );
};

export default TournamentTimeline;
