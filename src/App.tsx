import Hero from './components/Hero';
import TokenSection from './components/TokenSection';
import VenueSection from './components/VenueSection';
import PricingSection from './components/PricingSection';
import TournamentSection from './components/TournamentSection';
import TournamentDivider from './components/TournamentDivider';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';
import { tournaments } from './data/tournaments';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: '#0f0f1a' }}>
        <Hero />

        {/* Upcoming tournament - above stats */}
        {tournaments.filter(t => t.status === 'upcoming').map((tournament) => (
          <TournamentSection
            key={tournament.id}
            tournament={tournament}
            index={tournaments.findIndex(t => t.id === tournament.id)}
            total={tournaments.length}
          />
        ))}

        {/* Token section (stats) */}
        <TokenSection />

        {/* Venue & Stream info */}
        <VenueSection />

        {/* Pricing section */}
        <PricingSection />

        {/* Completed tournaments */}
        {tournaments.filter(t => t.status === 'completed').map((tournament, idx, arr) => (
          <div key={tournament.id}>
            <TournamentSection
              tournament={tournament}
              index={tournaments.findIndex(t => t.id === tournament.id)}
              total={tournaments.length}
            />
            {idx < arr.length - 1 && <TournamentDivider />}
          </div>
        ))}

        {/* Announced tournaments */}
        {tournaments.filter(t => t.status === 'announced').map((tournament) => (
          <TournamentSection
            key={tournament.id}
            tournament={tournament}
            index={tournaments.findIndex(t => t.id === tournament.id)}
            total={tournaments.length}
          />
        ))}

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
