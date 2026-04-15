import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

interface FanfinityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FanfinityModal = ({ isOpen, onClose }: FanfinityModalProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:left-auto sm:right-4 z-10 text-gray-400 hover:text-white bg-gray-800/80 hover:bg-gray-700 rounded-full p-1.5 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center px-6 sm:px-8 pt-8 sm:pt-10 pb-6 border-b border-gray-800 flex-shrink-0">
          <img
            src={getAssetPath('/fanfinity-grail-logo.png')}
            alt="Fanfinity X Grail Series"
            className="h-32 sm:h-44 w-auto mx-auto"
          />
        </div>

        {/* Scrollable body */}
        <div className="modal-scrollbar overflow-y-auto flex-1 min-h-0 px-6 sm:px-8 py-6 text-gray-300 text-[15px] leading-relaxed">
          {/* Intro */}
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('fanfinityIntroText') }} />

          <p className="mb-6 text-white text-center italic">
            {t('fanfinityPartnership')}
          </p>

          {/* Section: Grail Fanfinity Week timeline */}
          <section className="mb-5 p-5 bg-gray-800/40 border border-gray-700/50 rounded-xl">
            <h3 className="text-white font-bold text-base mb-4 text-center">
              Grail Fanfinity Week
            </h3>
            <div className="space-y-4">
              {/* Step 1: Grail Series */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <span className="text-orange-400 text-lg font-bold">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{t('fanfinityStep1Title')}</p>
                  <p className="text-gray-400 text-xs mt-1">{t('fanfinityStep1Desc')}</p>
                </div>
              </div>

              {/* Step 2: Najáda */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <span className="text-orange-400 text-lg font-bold">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{t('fanfinityStep2Title')}</p>
                  <p className="text-gray-400 text-xs mt-1">{t('fanfinityStep2Desc')}</p>
                </div>
              </div>

              {/* Step 3: Černý Rytíř */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <span className="text-orange-400 text-lg font-bold">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{t('fanfinityStepRytirTitle')}</p>
                  <p className="text-gray-400 text-xs mt-1">{t('fanfinityStepRytirDesc')}</p>
                </div>
              </div>

              {/* Step 4: Fanfinity tournament */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <span className="text-orange-400 text-lg font-bold">4</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{t('fanfinityStep3Title')}</p>
                  <p className="text-gray-400 text-xs mt-1">{t('fanfinityStep3Desc')}</p>
                </div>
              </div>
            </div>

            {/* Highlight callout */}
            <div className="mt-5 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg text-center">
              <p className="text-orange-400 text-sm font-medium">
                {t('fanfinityHighlight')}
              </p>
            </div>
          </section>

          {/* Section: Struktura */}
          <section className="mb-5 p-5 bg-gray-800/40 border border-gray-700/50 rounded-xl">
            <h3 className="text-white font-bold text-base mb-3">
              {t('fanfinityStructureTitle')}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-3 bg-gray-900/60 border border-gray-700/40 rounded-lg">
                <p className="text-orange-400 font-semibold text-sm">{t('fanfinityStructureGroup1Label')}</p>
                <p className="text-gray-300 text-sm mt-1">{t('fanfinityStructureGroup1Desc')}</p>
              </div>
              <div className="p-3 bg-gray-900/60 border border-gray-700/40 rounded-lg">
                <p className="text-orange-400 font-semibold text-sm">{t('fanfinityStructureGroup2Label')}</p>
                <p className="text-gray-300 text-sm mt-1">{t('fanfinityStructureGroup2Desc')}</p>
              </div>
            </div>
          </section>

          {/* Section: Posouváme laťku */}
          <section className="mb-5 p-5 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-xl">
            <h3 className="text-white font-bold text-base mb-3">
              {t('fanfinityRaiseBarTitle')}
            </h3>
            <ul className="space-y-2.5">
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-lg leading-tight">🔥</span>
                <span dangerouslySetInnerHTML={{ __html: t('fanfinityRaiseBar1') }} />
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-lg leading-tight">🔥</span>
                <span dangerouslySetInnerHTML={{ __html: t('fanfinityRaiseBar2') }} />
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-lg leading-tight">💎</span>
                <span dangerouslySetInnerHTML={{ __html: t('fanfinityRaiseBar3') }} />
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-lg leading-tight">🔥</span>
                <span dangerouslySetInnerHTML={{ __html: t('fanfinityRaiseBar4') }} />
              </li>
            </ul>
          </section>

          {/* Section: Fanfinity bonus */}
          <section className="mb-5 p-5 bg-gray-800/40 border border-gray-700/50 rounded-xl">
            <h3 className="text-white font-bold text-base mb-3">
              {t('fanfinityBonusTitle')}
            </h3>
            <p className="mb-3" dangerouslySetInnerHTML={{ __html: t('fanfinityBonusDesc') }} />
            <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: t('fanfinityBonusNote') }} />
          </section>

          {/* Section: Ceny mimo Top 8 */}
          <section className="mb-5 p-5 bg-gray-800/40 border border-gray-700/50 rounded-xl">
            <h3 className="text-white font-bold text-base mb-3">
              {t('fanfinityPrizesTitle')}
            </h3>
            <p className="mb-3 text-sm text-gray-400">{t('fanfinityPrizesIntro')}</p>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-orange-400 flex-shrink-0 mt-0.5">▸</span>
                <span dangerouslySetInnerHTML={{ __html: t('fanfinityPrizes1') }} />
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-orange-400 flex-shrink-0 mt-0.5">▸</span>
                <span dangerouslySetInnerHTML={{ __html: t('fanfinityPrizes2') }} />
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-orange-400 flex-shrink-0 mt-0.5">▸</span>
                <span dangerouslySetInnerHTML={{ __html: t('fanfinityPrizes3') }} />
              </li>
            </ul>
          </section>

          {/* TIER note */}
          <div className="mb-5 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-sm">
            <p className="text-gray-300">
              <strong className="text-blue-300">ℹ️ {t('fanfinityTierNoteLabel')}</strong>{' '}
              <span dangerouslySetInnerHTML={{ __html: t('fanfinityTierNoteText') }} />
            </p>
          </div>

          {/* Partners thanks */}
          <p
            className="mb-5 text-sm text-gray-400 text-center"
            dangerouslySetInnerHTML={{ __html: t('fanfinityThanks') }}
          />

          {/* Closing */}
          <div className="p-4 bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-orange-500/20 border border-orange-500/40 rounded-xl text-center">
            <p className="text-orange-400 font-semibold">
              {t('fanfinityClosing')}
            </p>
          </div>
        </div>

        {/* Registration buttons - sticky footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-gray-800 bg-gray-900/95 flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScDTxiljSxTt4wO6Z5yiFhgjGKqXt8KzRTa7OgfieDu11qCGQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              {t('registerGrail')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://my.fanfinity.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              {t('registerFanfinity')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanfinityModal;
