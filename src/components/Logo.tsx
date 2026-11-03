interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

const logoSrc = '/Imagen_7-21-26_a_las_12.52_p.m..png';

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="Leev Luxury Stays"
      className={`h-14 w-14 object-contain ${className}`}
    />
  );
}
