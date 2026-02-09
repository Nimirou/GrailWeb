import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <div className="flex bg-gray-900 backdrop-blur-sm rounded-lg p-1 border border-gray-600 shadow-lg">
        <button
          onClick={() => setLanguage('cs')}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            language === 'cs'
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          CZ
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            language === 'en'
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
