import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

const navLinks = [
  { id: 'propiedades', label: ui.nav.stays },
  { id: 'servicios', label: ui.nav.about },
  { id: 'guia', label: ui.nav.guide },
  { id: 'comunidades', label: ui.nav.communities },
  { id: 'contacto', label: ui.nav.contact },
];

export function Header() {
  const { lang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleAnchor = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const headerClass = `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-warm-white/95 shadow-[0_1px_0_0_rgba(30,30,30,0.06)] backdrop-blur-md'
      : 'bg-warm-white/70 backdrop-blur-sm'
  }`;

  return (
    <header className={headerClass}>
      <div className="container-leev flex h-[72px] items-center justify-between gap-4">
        <a
          href="#inicio"
          onClick={(e) => handleAnchor(e, 'inicio')}
          className="shrink-0"
          aria-label="Leev Luxury Stays — inicio"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleAnchor(e, link.id)}
              className="text-[15px] font-medium text-charcoal/80 transition-colors hover:text-charcoal"
            >
              {t(link.label)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <a
            href="#propiedades"
            onClick={(e) => handleAnchor(e, 'propiedades')}
            className="btn-gold !px-5 !py-2.5 text-[13px]"
          >
            {t(ui.nav.cta)}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:bg-beige/40"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden animate-slide-down bg-warm-white border-t border-charcoal/5"
        >
          <nav className="container-leev flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleAnchor(e, link.id)}
                className="rounded-xl px-4 py-3 text-base font-medium text-charcoal/85 transition-colors hover:bg-beige/40"
              >
                {t(link.label)}
              </a>
            ))}
            <a
              href="#propiedades"
              onClick={(e) => handleAnchor(e, 'propiedades')}
              className="btn-gold mt-3 w-full"
            >
              {t(ui.nav.cta)}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
