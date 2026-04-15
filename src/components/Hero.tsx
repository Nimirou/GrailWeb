import { useState } from 'react';
import TournamentRoadmap from './TournamentRoadmap';
import GrailLogo from './GrailLogo';
import Countdown from './Countdown';
import FanfinityModal from './FanfinityModal';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';
import { trackPartnerClick } from '../utils/analytics';

const Hero = () => {
  const { t } = useLanguage();
  const [showFanfinityModal, setShowFanfinityModal] = useState(false);

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
          <p className="text-gray-400 text-sm sm:text-base max-w-4xl mx-auto mb-2 px-2 line-clamp-2">
            {t('heroDescription')}
          </p>
        </div>
      </div>

      {/* Partner logos */}
      <div className="flex flex-col items-center pb-4">
        <div className="relative mb-6 max-w-4xl w-full px-4 sm:px-0">
          <div className="relative rounded-2xl px-8 sm:px-14 py-7 sm:py-10 overflow-hidden border border-white/10 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.06) 100%)' }}>
            {/* Tilted logo background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <img
                src={getAssetPath('/fanfinity-grail-logo.png')}
                alt=""
                aria-hidden="true"
                className="w-[140%] sm:w-[110%] max-w-none opacity-[0.07] select-none"
                style={{ transform: 'rotate(-15deg)' }}
              />
            </div>
            {/* Glass reflection */}
            <div className="absolute inset-0 pointer-events-none glass-shine" />
            {/* Top edge highlight */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
              <div className="flex flex-col items-center sm:items-start flex-shrink-0">
                <span className="text-orange-400 text-xs uppercase tracking-widest font-bold mb-3">
                  &#9733; {t('specialPartner')} &#9733;
                </span>
                <img
                  src={getAssetPath('/fanfinity-grail-logo.png')}
                  alt="Fanfinity X Grail Series"
                  className="h-24 sm:h-32 md:h-40 w-auto drop-shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                />
              </div>
              <div className="hidden sm:block w-px h-24 bg-gradient-to-b from-transparent via-orange-500/40 to-transparent flex-shrink-0" />
              <div className="flex flex-col items-center sm:items-start flex-1">
                <p className="text-gray-300 text-base sm:text-lg mb-4 text-center sm:text-left">{t('fanfinityDescription')}</p>
                <button
                  onClick={() => setShowFanfinityModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-semibold rounded-xl transition-all text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                >
                  {t('moreInfo')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <span className="text-gray-600 text-xs uppercase tracking-wider mb-3">{t('partners')}</span>
        {/* Mobile: vertical stack, Desktop: horizontal with Najada in center */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Najada - shown first on mobile only */}
          <a
            href="https://www.najada.games/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity sm:hidden"
            onClick={() => trackPartnerClick('Najada')}
          >
            <img
              src={getAssetPath('/partner-logo.svg')}
              alt="Najada Games"
              className="h-12 w-auto"
            />
          </a>
          <div className="w-16 h-px bg-orange-500/60 sm:hidden" />
          {/* Desktop layout: HASEK-SHOP | Najada | onStack */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.cardmarket.com/en/Magic/Users/HASEK-SHOP"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center gap-2"
              onClick={() => trackPartnerClick('HASEK-SHOP')}
            >
              <img
                src={getAssetPath('/partner-hasek.jpg')}
                alt="Hašek shop"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg object-cover"
              />
              <span className="text-gray-300 text-xs sm:text-sm font-bold">HASEK-SHOP</span>
            </a>
            <div className="hidden sm:block w-px h-12 bg-orange-500/60" />
            <a
              href="https://www.najada.games/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity hidden sm:block"
              onClick={() => trackPartnerClick('Najada')}
            >
              <img
                src={getAssetPath('/partner-logo.svg')}
                alt="Najada Games"
                className="h-14 md:h-20 w-auto"
              />
            </a>
            <div className="hidden sm:block w-px h-12 bg-orange-500/60" />
            <a
              href="https://www.youtube.com/channel/UCFuTqx9aSmodjlrTFzeykEQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center gap-2"
              onClick={() => trackPartnerClick('onStack')}
            >
              <img
                src={getAssetPath('/partner-onstack.jpg')}
                alt="onStack"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg object-cover"
              />
              <span className="text-gray-300 text-xs sm:text-sm font-bold">onStack</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tournament Roadmap */}
      <TournamentRoadmap />

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 py-6">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-orange-500/40" />
        <div className="w-2 h-2 rotate-45 bg-orange-500/60" />
        <div className="w-8 h-px bg-orange-500/40" />
        <svg className="w-4 h-4 text-orange-500/70 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 16l-6-6h12l-6 6z" />
        </svg>
        <div className="w-8 h-px bg-orange-500/40" />
        <div className="w-2 h-2 rotate-45 bg-orange-500/60" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-orange-500/40" />
      </div>

      {/* Countdown */}
      <Countdown />

      <FanfinityModal isOpen={showFanfinityModal} onClose={() => setShowFanfinityModal(false)} />
    </section>
  );
};

export default Hero;
