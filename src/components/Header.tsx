import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { scrollToSection } from '../utils/scroll';
import type { PageId } from '../routes';

const navLinks: { page: PageId; href: string; label: { es: string; en: string } }[] = [
  { page: 'stays', href: '/estadias', label: ui.nav.stays },
  { page: 'services', href: '/servicios', label: ui.nav.services },
  { page: 'guide', href: '/guia', label: ui.nav.guide },
  { page: 'gallery', href: '/galeria', label: ui.nav.gallery },
  { page: 'faq', href: '/preguntas', label: ui.nav.faq },
];

export function Header({ current }: { current: PageId }) {
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

  // Page links are handled by the app router; just close the mobile menu.
  const closeMenu = () => setMenuOpen(false);

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection('contacto');
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
          href="/"
          onClick={closeMenu}
          className="shrink-0"
          aria-label="Leev Luxury Stays — inicio"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const active = current === link.page;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`border-b-2 pb-1 text-[15px] font-medium transition-colors ${
                  active
                    ? 'border-gold text-charcoal'
                    : 'border-transparent text-charcoal/75 hover:text-charcoal'
                }`}
              >
                {t(link.label)}
              </a>
            );
          })}
          <a
            href="#contacto"
            onClick={goToContact}
            className="border-b-2 border-transparent pb-1 text-[15px] font-medium text-charcoal/75 transition-colors hover:text-charcoal"
          >
            {t(ui.nav.contact)}
          </a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher variant="dark" />
          <a
            href="/estadias"
            className="btn-gold !px-5 !py-2.5 text-[13px]"
          >
            {t(ui.nav.cta)}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher variant="dark" />
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
            <a
              href="/"
              onClick={closeMenu}
              className={`rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-beige/40 ${
                current === 'home' ? 'bg-beige/40 text-charcoal' : 'text-charcoal/85'
              }`}
            >
              {t(ui.nav.home)}
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={current === link.page ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-beige/40 ${
                  current === link.page ? 'bg-beige/40 text-charcoal' : 'text-charcoal/85'
                }`}
              >
                {t(link.label)}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={goToContact}
              className="rounded-xl px-4 py-3 text-base font-medium text-charcoal/85 transition-colors hover:bg-beige/40"
            >
              {t(ui.nav.contact)}
            </a>
            <a
              href="/estadias"
              onClick={closeMenu}
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
