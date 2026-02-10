import { useLanguage } from '../i18n/LanguageContext';
import { getAssetPath } from '../utils/assets';

const PartnerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-16 bg-gray-900/50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center">
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
            {t('mainPartner')}
          </p>
          <a
            href="https://www.gail.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <img
              src={getAssetPath('/partner-logo.svg')}
              alt="The Gail"
              className="h-24 md:h-32 w-auto mx-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
