const TournamentDivider = () => {
  return (
    <div className="py-8 flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
      <div className="flex items-center gap-4">
        <div className="w-24 h-px bg-gradient-to-r from-transparent to-orange-500/50" />
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rotate-45 bg-orange-500/40" />
          <div className="w-2 h-2 rotate-45 bg-orange-500/70" />
          <div className="w-1.5 h-1.5 rotate-45 bg-orange-500/40" />
        </div>
        <div className="w-24 h-px bg-gradient-to-l from-transparent to-orange-500/50" />
      </div>
    </div>
  );
};

export default TournamentDivider;
