import TournamentRoadmap from './TournamentRoadmap';
import GrailLogo from './GrailLogo';
import Countdown from './Countdown';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-float-medium" />

        {/* Animated floating card shapes */}
        <div className="absolute top-32 left-[5%] w-16 h-24 border border-gray-700/30 rounded-lg rotate-12 opacity-20 animate-card-1" />
        <div className="absolute top-48 right-[8%] w-14 h-20 border border-gray-700/30 rounded-lg -rotate-6 opacity-20 animate-card-2" />
        <div className="absolute bottom-40 left-[12%] w-12 h-18 border border-gray-700/30 rounded-lg rotate-6 opacity-15 animate-card-3" />
        <div className="absolute bottom-32 right-[15%] w-16 h-24 border border-gray-700/30 rounded-lg -rotate-12 opacity-20 animate-card-4" />
        <div className="absolute top-[60%] left-[3%] w-10 h-14 border border-gray-700/30 rounded-lg rotate-3 opacity-15 animate-card-5" />
        <div className="absolute top-[30%] right-[4%] w-12 h-18 border border-gray-700/30 rounded-lg -rotate-9 opacity-15 animate-card-6" />
      </div>
      {/* Header */}
      <div className="container mx-auto px-4 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="text-center relative">
          {/* Decorative cards next to logo */}
          <div className="hidden lg:block absolute left-[0%] top-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute w-40 h-56 bg-gray-600/30 rounded-2xl -rotate-12 animate-card-1 top-0 left-0 blur-sm" />
              <div className="absolute w-36 h-52 bg-gray-600/25 rounded-2xl rotate-6 animate-card-2 top-40 left-40 blur-sm" />
              <div className="absolute w-32 h-48 bg-gray-600/20 rounded-2xl -rotate-3 animate-card-3 top-72 left-12 blur-md" />
              <div className="absolute w-28 h-44 bg-gray-600/20 rounded-2xl rotate-12 animate-card-5 -top-32 left-32 blur-md" />
            </div>
          </div>
          <div className="hidden lg:block absolute right-[0%] top-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute w-40 h-56 bg-gray-600/30 rounded-2xl rotate-12 animate-card-4 top-0 right-0 blur-sm" />
              <div className="absolute w-36 h-52 bg-gray-600/25 rounded-2xl -rotate-6 animate-card-5 top-40 right-40 blur-sm" />
              <div className="absolute w-32 h-48 bg-gray-600/20 rounded-2xl rotate-3 animate-card-6 top-72 right-12 blur-md" />
              <div className="absolute w-28 h-44 bg-gray-600/20 rounded-2xl -rotate-12 animate-card-2 -top-32 right-32 blur-md" />
            </div>
          </div>

          {/* Logo */}
          <GrailLogo size="lg" className="mx-auto mb-6 relative z-10" />

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-2 px-2">
            {t('heroDescription')}
          </p>
        </div>
      </div>

      {/* Countdown */}
      <Countdown />

      {/* Tournament Roadmap */}
      <TournamentRoadmap />

      {/* Partner logo */}
      <div className="flex items-center justify-center gap-4 py-8">
        <span className="text-gray-600 text-xs uppercase tracking-wider">{t('mainPartner')}</span>
        <a
          href="https://www.najada.games/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src={getAssetPath('/partner-logo.svg')}
            alt="Najada Games"
            className="h-12 md:h-16 w-auto"
          />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="text-center pb-8">
        <div className="inline-flex flex-col items-center text-gray-600">
          <span className="text-xs mb-2">{t('scrollDown')}</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
