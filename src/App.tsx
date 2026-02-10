import Hero from './components/Hero';
import TokenSection from './components/TokenSection';
import VenueSection from './components/VenueSection';
import PricingSection from './components/PricingSection';
import TournamentSection from './components/TournamentSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';
import { tournaments } from './data/tournaments';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#0f0f1a' }}>
        <Hero />

        {/* Upcoming tournament - above stats */}
        {tournaments.filter(t => t.status === 'upcoming').map((tournament, index) => (
          <TournamentSection
            key={tournament.id}
            tournament={tournament}
            index={index}
            total={tournaments.length}
          />
        ))}

        {/* Token section (stats) */}
        <TokenSection />

        {/* Venue & Stream info */}
        <VenueSection />

        {/* Pricing section */}
        <PricingSection />

        {/* Completed and announced tournaments */}
        {[
          ...tournaments.filter(t => t.status === 'completed'),
          ...tournaments.filter(t => t.status === 'announced'),
        ].map((tournament, index) => (
          <TournamentSection
            key={tournament.id}
            tournament={tournament}
            index={index}
            total={tournaments.length}
          />
        ))}

        <PartnerSection />

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
