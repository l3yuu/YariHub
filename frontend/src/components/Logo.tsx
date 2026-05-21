interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <img
      src="/logo.png"
      alt="Yari Hub IT Solutions"
      className={`h-[54px] w-auto object-contain ${className}`}
      height={54}
      draggable={false}
    />
  );
};

export default Logo;
