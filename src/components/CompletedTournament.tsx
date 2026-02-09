import type { Tournament } from '../data/tournaments';
import PlayerPodium from './PlayerPodium';

interface CompletedTournamentProps {
  tournament: Tournament;
}

const CompletedTournament = ({ tournament }: CompletedTournamentProps) => {
  return (
    <div
      id={tournament.id}
      className="rounded-lg overflow-hidden hover-lift"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%)',
        border: '1px solid #2a2a2a',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Top accent line */}
      <div
        className="h-1"
        style={{ background: 'linear-gradient(to right, transparent, #4a7c59, transparent)' }}
      />

      <div className="p-6 md:p-8">
        {/* Header with badge */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span
              className="inline-block px-3 py-1 text-xs font-semibold rounded mb-2 uppercase tracking-wider"
              style={{
                backgroundColor: 'rgba(74, 124, 89, 0.15)',
                color: '#5a9c6a',
                border: '1px solid rgba(74, 124, 89, 0.3)',
              }}
            >
              Ukončeno
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-100 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {tournament.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{tournament.date}</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            {tournament.location && (
              <p className="text-gray-500 text-sm flex items-center md:justify-end gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {tournament.location}
              </p>
            )}
          </div>
        </div>

        {tournament.description && (
          <p className="text-gray-400 mb-6">{tournament.description}</p>
        )}

        {/* Top players podium */}
        {tournament.topPlayers && tournament.topPlayers.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #2a2a2a)' }} />
              <h4
                className="text-lg font-semibold text-gray-400 uppercase tracking-wider"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Výsledky
              </h4>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #2a2a2a)' }} />
            </div>
            <PlayerPodium players={tournament.topPlayers} />
          </div>
        )}

        {/* Prizes */}
        <div className="mt-6 pt-6" style={{ borderTop: '1px solid #1a1a1a' }}>
          <h4
            className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Ceny
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tournament.prizes.map((prize) => (
              <div
                key={prize.place}
                className={`prize-card p-4 ${
                  prize.place === 1
                    ? 'prize-card-gold'
                    : prize.place === 2
                    ? 'prize-card-silver'
                    : prize.place === 3
                    ? 'prize-card-bronze'
                    : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded flex items-center justify-center text-sm font-bold"
                    style={{
                      background:
                        prize.place === 1
                          ? 'linear-gradient(135deg, #c9a227, #8a6914)'
                          : prize.place === 2
                          ? 'linear-gradient(135deg, #8a8a8a, #5a5a5a)'
                          : prize.place === 3
                          ? 'linear-gradient(135deg, #cd7f32, #8b4513)'
                          : '#2a2a2a',
                      color: prize.place <= 3 ? '#000' : '#666',
                      border: '1px solid #3a3a3a',
                    }}
                  >
                    {prize.place}.
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-200 text-sm">{prize.description}</p>
                    {prize.value && (
                      <p className="text-gray-500 text-xs mt-0.5">{prize.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTournament;
