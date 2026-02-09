const MagicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg,
              #0f0f1a 0%,
              #1a1a2e 25%,
              #16213e 50%,
              #1a1a2e 75%,
              #0f0f1a 100%
            )
          `,
        }}
      />

      {/* Magical glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(232, 93, 4, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDuration: '4s',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDuration: '5s',
          animationDelay: '1s',
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDuration: '6s',
          animationDelay: '2s',
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 ? '#e85d04' : i % 3 === 1 ? '#9333ea' : '#3b82f6',
            opacity: 0.3 + Math.random() * 0.4,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Magic circles */}
      <svg
        className="absolute top-10 right-10 w-64 h-64 opacity-[0.03] animate-spin"
        style={{ animationDuration: '60s' }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#e85d04" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#e85d04" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#e85d04" strokeWidth="0.5" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="5"
            x2="50"
            y2="95"
            stroke="#e85d04"
            strokeWidth="0.3"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </svg>

      <svg
        className="absolute bottom-20 left-20 w-48 h-48 opacity-[0.03] animate-spin"
        style={{ animationDuration: '45s', animationDirection: 'reverse' }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#9333ea" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#9333ea" strokeWidth="0.5" />
        {[0, 72, 144, 216, 288].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="5"
            x2="50"
            y2="95"
            stroke="#9333ea"
            strokeWidth="0.3"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </svg>

      {/* Mana-like symbols scattered */}
      <div className="absolute top-[15%] left-[10%] text-4xl opacity-[0.03] rotate-12">⬡</div>
      <div className="absolute top-[30%] right-[15%] text-3xl opacity-[0.03] -rotate-12">✦</div>
      <div className="absolute bottom-[25%] left-[20%] text-5xl opacity-[0.03] rotate-45">◈</div>
      <div className="absolute bottom-[40%] right-[10%] text-4xl opacity-[0.03] -rotate-30">⬢</div>
      <div className="absolute top-[60%] left-[5%] text-3xl opacity-[0.03] rotate-15">✧</div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 93, 4, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 93, 4, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
};

export default MagicBackground;
