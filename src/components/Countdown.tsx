import { useState, useEffect } from 'react';
import { tournaments } from '../data/tournaments';
import { useLanguage } from '../i18n/LanguageContext';

const Countdown = () => {
  const { t } = useLanguage();
  // Find next upcoming tournament
  const nextTournament = tournaments.find(t => t.status === 'upcoming');

  // Countdown logic
  const getTargetDate = () => {
    if (!nextTournament) return null;
    const months: Record<string, number> = {
      'ledna': 0, 'února': 1, 'března': 2, 'dubna': 3, 'května': 4, 'června': 5,
      'července': 6, 'srpna': 7, 'září': 8, 'října': 9, 'listopadu': 10, 'prosince': 11
    };
    const parts = nextTournament.date.split(' ');
    const day = parseInt(parts[0]);
    const month = months[parts[1]];
    const year = parseInt(parts[2]);
    return new Date(year, month, day, 10, 0, 0);
  };

  const targetDate = getTargetDate();

  const calculateTimeLeft = () => {
    if (!targetDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!nextTournament) return null;

  return (
    <div className="py-6 sm:py-8 text-center">
      <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 px-4">
        {t('nextTournament')}: <span className="text-white font-medium">{nextTournament.name}</span>
        <span className="text-gray-500 ml-2 block sm:inline">({nextTournament.date})</span>
      </p>
      <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-6">
        {[
          { value: timeLeft.days, label: t('days') },
          { value: timeLeft.hours, label: t('hours') },
          { value: timeLeft.minutes, label: t('minutes') },
          { value: timeLeft.seconds, label: t('seconds') },
        ].map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 min-w-[70px] sm:min-w-[90px] md:min-w-[110px]">
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-white font-mono">
              {String(item.value).padStart(2, '0')}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          const element = document.getElementById(nextTournament.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
        className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors text-lg"
      >
        {t('register')}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  );
};

export default Countdown;
