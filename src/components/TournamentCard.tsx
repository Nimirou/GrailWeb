import type { Tournament } from '../data/tournaments';
import CompletedTournament from './CompletedTournament';
import UpcomingTournament from './UpcomingTournament';

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  if (tournament.status === 'completed') {
    return <CompletedTournament tournament={tournament} />;
  }
  return <UpcomingTournament tournament={tournament} />;
};

export default TournamentCard;
