import { useEffect, useState } from 'react';
import type { Tournament } from '../data/tournaments';
import { useLanguage } from '../i18n/LanguageContext';
import { formatDate } from '../utils/dateFormatter';

interface TournamentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  tournament: Tournament;
}

const PIE_COLORS = [
  '#f97316', // orange-500
  '#3b82f6', // blue-500
  '#10b981', // emerald-500
  '#f59e0b', // amber-500
  '#8b5cf6', // violet-500
  '#ef4444', // red-500
  '#06b6d4', // cyan-500
  '#ec4899', // pink-500
  '#14b8a6', // teal-500
  '#a855f7', // purple-500
  '#84cc16', // lime-500
  '#e11d48', // rose-600
];

const OTHERS_COLOR = '#6b7280'; // gray-500

interface PieSegment {
  name: string;
  count: number;
  percentage: number;
  startAngle: number;
  endAngle: number;
  color: string;
}

function buildSegments(
  stats: { name: string; count: number }[],
  othersLabel: string
): PieSegment[] {
  const total = stats.reduce((sum, s) => sum + s.count, 0);

  // Commanders with count >= 2 get their own segment
  const major = stats.filter((s) => s.count >= 2);
  const minorTotal = stats
    .filter((s) => s.count < 2)
    .reduce((sum, s) => sum + s.count, 0);

  const items: { name: string; count: number }[] = [...major];
  if (minorTotal > 0) {
    items.push({ name: othersLabel, count: minorTotal });
  }

  // Sort descending by count
  items.sort((a, b) => b.count - a.count);

  let currentAngle = -90; // start from top
  return items.map((item, i) => {
    const percentage = (item.count / total) * 100;
    const angle = (item.count / total) * 360;
    const segment: PieSegment = {
      name: item.name,
      count: item.count,
      percentage,
      startAngle: currentAngle,
      endAngle: currentAngle + angle,
      color: item.name === othersLabel ? OTHERS_COLOR : PIE_COLORS[i % PIE_COLORS.length],
    };
    currentAngle += angle;
    return segment;
  });
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`,
    'Z',
  ].join(' ');
}

// Wrap long text into multiple lines for SVG
function wrapText(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    if (current && (current + ' ' + word).length > maxChars) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + ' ' + word : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

const PieChart = ({
  segments,
  size = 320,
}: {
  segments: PieSegment[];
  size?: number;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 10;
  const innerR = r * 0.42;

  const hovered = hoveredIndex !== null ? segments[hoveredIndex] : null;
  const nameLines = hovered ? wrapText(hovered.name, 16) : [];

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-[320px] mx-auto"
    >
      {segments.map((seg, i) => {
        const isHovered = hoveredIndex === i;
        if (seg.endAngle - seg.startAngle >= 359.99) {
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill={seg.color}
              opacity={hoveredIndex !== null && !isHovered ? 0.6 : 1}
              className="transition-all duration-200 cursor-pointer"
              style={{
                transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                transformOrigin: `${cx}px ${cy}px`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        }
        return (
          <path
            key={i}
            d={describeArc(cx, cy, r, seg.startAngle, seg.endAngle)}
            fill={seg.color}
            stroke="#1f2937"
            strokeWidth={1.5}
            opacity={hoveredIndex !== null && !isHovered ? 0.6 : 1}
            className="transition-all duration-200 cursor-pointer"
            style={{
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
              transformOrigin: `${cx}px ${cy}px`,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        );
      })}
      {/* Donut hole */}
      <circle cx={cx} cy={cy} r={innerR} fill="#111827" />
      {/* Center label on hover */}
      {hovered && (
        <>
          {nameLines.map((line, i) => (
            <text
              key={`name-${i}`}
              x={cx}
              y={cy - 10 + (i - (nameLines.length - 1) / 2) * 14}
              textAnchor="middle"
              fill="white"
              fontSize="11"
              fontWeight="bold"
            >
              {line}
            </text>
          ))}
          <text
            x={cx}
            y={cy + nameLines.length * 7 + 4}
            textAnchor="middle"
            fill="#9ca3af"
            fontSize="11"
          >
            {hovered.count}x ({hovered.percentage.toFixed(1)}%)
          </text>
        </>
      )}
    </svg>
  );
};

const TournamentDetailModal = ({
  isOpen,
  onClose,
  tournament,
}: TournamentDetailModalProps) => {
  const { t, language } = useLanguage();

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

  const stats = tournament.commanderStats;
  const segments = stats ? buildSegments(stats, t('others')) : [];
  const totalPlayers = stats
    ? stats.reduce((sum, s) => sum + s.count, 0)
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-gray-900 border border-gray-700 rounded-2xl p-5 sm:p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 pr-8">
          {tournament.name}
        </h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 text-sm text-gray-400">
          <span>{formatDate(tournament.date, language)}</span>
          {tournament.location && (
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {tournament.location}
            </span>
          )}
          {totalPlayers && (
            <span>
              {t('playerCount')}: {totalPlayers}
            </span>
          )}
        </div>

        {/* Commander distribution */}
        {stats && stats.length > 0 && (
          <>
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-4">
              {t('commanderDistribution')}
            </h3>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Pie chart */}
              <div className="flex-shrink-0 w-full max-w-[320px]">
                <PieChart segments={segments} />
              </div>

              {/* Legend */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 gap-1.5">
                  {segments.map((seg, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm py-1 px-2 rounded hover:bg-gray-800/50 transition-colors"
                    >
                      <span
                        className="w-3 h-3 rounded-sm flex-shrink-0"
                        style={{ backgroundColor: seg.color }}
                      />
                      <span className="text-gray-300 flex-1 truncate">
                        {seg.name}
                      </span>
                      <span className="text-gray-500 tabular-nums">
                        {seg.count}x
                      </span>
                      <span className="text-gray-600 tabular-nums text-xs w-12 text-right">
                        {seg.percentage.toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TournamentDetailModal;
