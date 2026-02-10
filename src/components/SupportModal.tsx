import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
  const { t } = useLanguage();

  // Close on escape key
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
          {t('supportTitle')}
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          {t('supportSubtitle')}
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-3 rounded-xl">
            <img
              src={getAssetPath('/support-qr.png')}
              alt="QR Code"
              className="w-48 h-48 sm:w-56 sm:h-56"
            />
          </div>
        </div>

        {/* Account details */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center py-2 border-b border-gray-800">
            <span className="text-gray-500">{t('accountNumber')}</span>
            <span className="text-white font-mono">2640017029/3030</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-800">
            <span className="text-gray-500">IBAN</span>
            <span className="text-white font-mono text-xs sm:text-sm">CZ03 3030 0000 0026 4001 7029</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-800">
            <span className="text-gray-500">BIC/SWIFT</span>
            <span className="text-white font-mono">AIRACZPP</span>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
          <p className="text-orange-400 text-sm text-center">
            {t('supportNote')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
