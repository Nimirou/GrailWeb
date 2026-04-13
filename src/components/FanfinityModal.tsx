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
        className="relative bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <img
            src={getAssetPath('/partner-fanfinity.png')}
            alt="Fanfinity"
            className="h-12 sm:h-16 w-auto mx-auto mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Grail Fanfinity Week
          </h2>
          <p className="text-orange-400 text-sm font-medium">{t('fanfinitySubtitle')}</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {t('fanfinityModalDescription')}
        </p>

        {/* Timeline */}
        <div className="space-y-4 mb-6">
          {/* Grail Series */}
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
              <span className="text-orange-400 text-lg">1</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{t('fanfinityStep1Title')}</p>
              <p className="text-gray-400 text-xs mt-1">{t('fanfinityStep1Desc')}</p>
            </div>
          </div>

          {/* Najada + Rytíř */}
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
              <span className="text-orange-400 text-lg">2</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{t('fanfinityStep2Title')}</p>
              <p className="text-gray-400 text-xs mt-1">{t('fanfinityStep2Desc')}</p>
            </div>
          </div>

          {/* Fanfinity tournament */}
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
              <span className="text-orange-400 text-lg">3</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{t('fanfinityStep3Title')}</p>
              <p className="text-gray-400 text-xs mt-1">{t('fanfinityStep3Desc')}</p>
            </div>
          </div>
        </div>

        {/* Highlight box */}
        <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl text-center mb-6">
          <p className="text-orange-400 text-sm font-medium">
            {t('fanfinityHighlight')}
          </p>
        </div>

        {/* Registration buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://forms.gle/8RSZVwB4Ebsw82897"
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
            href="#"
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
  );
};

export default FanfinityModal;
