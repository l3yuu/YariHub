interface CircuitPatternProps {
  side: 'left' | 'right';
  className?: string;
}

const CircuitPattern = ({ side, className = '' }: CircuitPatternProps) => {
  const flip = side === 'right' ? 'scale-x-[-1]' : '';

  return (
    <div
      className={`pointer-events-none absolute top-0 bottom-0 w-32 sm:w-48 lg:w-64 opacity-40 ${side === 'left' ? 'left-0' : 'right-0'} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-full w-full ${flip}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M20 40 L20 120 L80 120" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 180 L20 260 L100 260" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 320 L20 400 L60 400" stroke="#BFDBFE" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 460 L20 540 L120 540" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="80" cy="120" r="4" fill="#60A5FA" />
        <circle cx="100" cy="260" r="4" fill="#60A5FA" />
        <circle cx="60" cy="400" r="4" fill="#BFDBFE" />
        <circle cx="120" cy="540" r="4" fill="#60A5FA" />
        <line x1="40" y1="80" x2="40" y2="200" stroke="#DBEAFE" strokeWidth="1" />
        <line x1="60" y1="140" x2="60" y2="300" stroke="#DBEAFE" strokeWidth="1" />
        <line x1="30" y1="240" x2="30" y2="480" stroke="#DBEAFE" strokeWidth="1" />
        <line x1="50" y1="360" x2="50" y2="560" stroke="#DBEAFE" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default CircuitPattern;
