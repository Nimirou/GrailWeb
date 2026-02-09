import type { Player } from '../data/tournaments';

interface PlayerPodiumProps {
  players: Player[];
}

const PlayerPodium = ({ players }: PlayerPodiumProps) => {
  const top3 = players.slice(0, 3);
  const rest = players.slice(3, 8);

  const podiumOrder = [top3[1], top3[0], top3[2]]; // 2nd, 1st, 3rd

  const getMedalStyle = (place: number) => {
    switch (place) {
      case 1:
        return {
          background: 'linear-gradient(135deg, #c9a227, #8a6914)',
          border: '2px solid #dbb42c',
          color: '#000',
        };
      case 2:
        return {
          background: 'linear-gradient(135deg, #8a8a8a, #5a5a5a)',
          border: '2px solid #aaa',
          color: '#000',
        };
      case 3:
        return {
          background: 'linear-gradient(135deg, #cd7f32, #8b4513)',
          border: '2px solid #e8a050',
          color: '#000',
        };
      default:
        return {
          background: '#2a2a2a',
          border: '1px solid #3a3a3a',
          color: '#666',
        };
    }
  };

  const getPodiumHeight = (place: number) => {
    switch (place) {
      case 1:
        return 'h-28';
      case 2:
        return 'h-20';
      case 3:
        return 'h-14';
      default:
        return 'h-10';
    }
  };

  const getPodiumStyle = (place: number) => {
    switch (place) {
      case 1:
        return {
          background: 'linear-gradient(180deg, #3a3a1a 0%, #2a2a0a 100%)',
          borderTop: '3px solid #c9a227',
        };
      case 2:
        return {
          background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
          borderTop: '3px solid #8a8a8a',
        };
      case 3:
        return {
          background: 'linear-gradient(180deg, #2a1a0a 0%, #1a0a0a 100%)',
          borderTop: '3px solid #cd7f32',
        };
      default:
        return {
          background: '#1a1a1a',
          borderTop: '1px solid #2a2a2a',
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Podium for top 3 */}
      <div className="flex justify-center items-end gap-2 md:gap-4">
        {podiumOrder.map((player) => {
          if (!player) return null;
          const medalStyle = getMedalStyle(player.place);
          const podiumStyle = getPodiumStyle(player.place);

          return (
            <div key={player.place} className="flex flex-col items-center">
              {/* Player info */}
              <div className="text-center mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-lg"
                  style={medalStyle}
                >
                  {player.place}
                </div>
                <p className="font-semibold text-gray-200 text-sm md:text-base">
                  {player.name}
                </p>
                {player.deck && (
                  <p className="text-xs text-gray-600">{player.deck}</p>
                )}
              </div>

              {/* Podium block */}
              <div
                className={`w-24 md:w-32 ${getPodiumHeight(player.place)} rounded-t-lg flex items-center justify-center`}
                style={podiumStyle}
              >
                <span
                  className="text-3xl font-bold"
                  style={{
                    color: player.place === 1 ? '#c9a227' : player.place === 2 ? '#8a8a8a' : '#cd7f32',
                    opacity: 0.5,
                  }}
                >
                  {player.place}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rest of top 8 */}
      {rest.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[100px]" style={{ background: 'linear-gradient(to right, transparent, #2a2a2a)' }} />
            <h4 className="text-center text-sm text-gray-500 uppercase tracking-wider">Top 8</h4>
            <div className="h-px flex-1 max-w-[100px]" style={{ background: 'linear-gradient(to left, transparent, #2a2a2a)' }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {rest.map((player) => (
              <div
                key={player.place}
                className="rounded-lg p-3 text-center"
                style={{
                  backgroundColor: '#111',
                  border: '1px solid #222',
                }}
              >
                <span
                  className="font-bold text-sm"
                  style={{ color: '#666' }}
                >
                  {player.place}.
                </span>
                <p className="text-gray-300 text-sm truncate">{player.name}</p>
                {player.deck && (
                  <p className="text-xs text-gray-600 truncate">{player.deck}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerPodium;
