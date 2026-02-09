import type { Tournament } from '../data/tournaments';

interface UpcomingTournamentProps {
  tournament: Tournament;
}

const UpcomingTournament = ({ tournament }: UpcomingTournamentProps) => {
  const isAnnounced = tournament.status === 'announced';

  return (
    <div
      id={tournament.id}
      className="rounded-lg overflow-hidden hover-lift relative"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%)',
        border: `1px solid ${isAnnounced ? '#2a2a2a' : '#3a3a1a'}`,
        boxShadow: isAnnounced
          ? '0 4px 30px rgba(0, 0, 0, 0.5)'
          : '0 4px 30px rgba(201, 162, 39, 0.1)',
      }}
    >
      {/* Top accent line */}
      <div
        className="h-1"
        style={{
          background: isAnnounced
            ? 'linear-gradient(to right, transparent, #3a3a3a, transparent)'
            : 'linear-gradient(to right, transparent, #c9a227, transparent)',
        }}
      />

      {/* Shimmer effect for upcoming */}
      {!isAnnounced && (
        <div
          className="absolute inset-0 pointer-events-none shimmer-bg"
          style={{ opacity: 0.5 }}
        />
      )}

      <div className="p-6 md:p-8 relative z-10">
        {/* Header with badge */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold rounded mb-2 uppercase tracking-wider ${
                !isAnnounced ? 'animate-pulse' : ''
              }`}
              style={{
                backgroundColor: isAnnounced
                  ? 'rgba(100, 100, 100, 0.15)'
                  : 'rgba(201, 162, 39, 0.15)',
                color: isAnnounced ? '#666' : '#c9a227',
                border: `1px solid ${isAnnounced ? 'rgba(100, 100, 100, 0.3)' : 'rgba(201, 162, 39, 0.3)'}`,
              }}
            >
              {isAnnounced ? 'Oznámeno' : 'Nadcházející'}
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-100 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {tournament.name}
            </h3>
            <p
              className="text-sm mt-1"
              style={{ color: isAnnounced ? '#666' : '#c9a227' }}
            >
              {tournament.date}
            </p>
          </div>

          {!isAnnounced && tournament.location && (
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-gray-500 text-sm flex items-center md:justify-end gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {tournament.location}
              </p>
            </div>
          )}
        </div>

        {tournament.description && (
          <p className="text-gray-400 mb-6">{tournament.description}</p>
        )}

        {/* Registration info */}
        {tournament.registrationInfo && (
          <div
            className="rounded-lg p-4 mb-6"
            style={{
              backgroundColor: 'rgba(201, 162, 39, 0.08)',
              border: '1px solid rgba(201, 162, 39, 0.2)',
            }}
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 flex-shrink-0"
                style={{ color: '#c9a227' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm" style={{ color: '#dbb42c' }}>
                {tournament.registrationInfo}
              </p>
            </div>
          </div>
        )}

        {/* Prizes */}
        <div className="mb-6">
          <h4
            className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Ceny k vyhráni
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
                      color: typeof prize.place === 'number' && prize.place <= 3 ? '#000' : '#666',
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

        {/* CTA button for upcoming */}
        {!isAnnounced && (
          <div className="text-center pt-4">
            <button
              className="font-semibold px-8 py-3 rounded transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #c9a227, #8a6914)',
                color: '#000',
                fontFamily: "'Cinzel', serif",
                boxShadow: '0 4px 20px rgba(201, 162, 39, 0.3)',
              }}
            >
              Registrovat se
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingTournament;
