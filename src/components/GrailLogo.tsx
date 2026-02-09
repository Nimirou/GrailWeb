import { getAssetPath } from '../utils/assets';

interface GrailLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const GrailLogo = ({
  className = '',
  size = 'md',
}: GrailLogoProps) => {
  const sizeClasses = {
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-32 sm:h-40 md:h-56 lg:h-64',
  };

  return (
    <img
      src={getAssetPath('/logo.png')}
      alt="Grail Series"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
};

export default GrailLogo;
