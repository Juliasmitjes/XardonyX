interface ButterflyProps {
  className?: string;
  size?: number;
  delay?: number;
}

const Butterfly = ({ className = "", size = 40, delay = 0 }: ButterflyProps) => {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="animate-float opacity-60"
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Left wing */}
        <path
          d="M50 50 Q20 20 15 45 Q10 65 30 75 Q45 80 50 50"
          fill="url(#wingGradient)"
          className="origin-right animate-flutter"
          style={{ animationDelay: `${delay * 0.1}s` }}
        />
        {/* Right wing */}
        <path
          d="M50 50 Q80 20 85 45 Q90 65 70 75 Q55 80 50 50"
          fill="url(#wingGradient)"
          className="origin-left animate-flutter"
          style={{ animationDelay: `${delay * 0.1 + 0.15}s` }}
        />
        {/* Body */}
        <ellipse cx="50" cy="55" rx="3" ry="15" fill="hsl(0 0% 20%)" />
        {/* Antennae */}
        <path d="M48 42 Q45 35 42 30" stroke="hsl(0 0% 30%)" strokeWidth="1" fill="none" />
        <path d="M52 42 Q55 35 58 30" stroke="hsl(0 0% 30%)" strokeWidth="1" fill="none" />
        <defs>
          <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(42 75% 55%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(35 70% 40%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(280 40% 20%)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Butterfly;
