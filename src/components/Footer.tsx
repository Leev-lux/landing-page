import { Phone, Instagram, MessageCircle } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { Logo } from './Logo';
import {
  phonePrimary,
  phoneSecondary,
  whatsappPrimary,
  instagramUrl,
  airbnbHostUrl,
} from '../data/properties';

const footerNav = [
  { id: 'propiedades', label: ui.nav.stays },
  { id: 'servicios', label: ui.nav.about },
  { id: 'guia', label: ui.nav.guide },
  { id: 'contacto', label: ui.nav.contact },
];

export function Footer() {
  const { t } = useLang();

  const handleAnchor = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-charcoal/10 bg-cream pt-16">
      <div className="container-leev">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-charcoal/70">
              {t(ui.footer.description)}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/70 transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={airbnbHostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-charcoal/15 px-4 text-sm font-medium text-charcoal/70 transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
                aria-label="Airbnb host profile"
              >
                Airbnb
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/50">
              {t(ui.footer.links)}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleAnchor(e, link.id)}
                    className="text-base text-charcoal/75 transition-colors hover:text-charcoal"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/50">
              {t(ui.footer.contact)}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-charcoal/80 transition-colors hover:text-charcoal"
                >
                  <MessageCircle size={18} className="text-gold-dark" />
                  {phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${phoneSecondary.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-charcoal/80 transition-colors hover:text-charcoal"
                >
                  <Phone size={18} className="text-gold-dark" />
                  {phoneSecondary}
                </a>
              </li>
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/50">
              {t(ui.footer.legal)}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-base text-charcoal/75 transition-colors hover:text-charcoal"
                >
                  {t(ui.footer.privacy)}
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-base text-charcoal/75 transition-colors hover:text-charcoal"
                >
                  {t(ui.footer.terms)}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal/10 py-6 sm:flex-row">
          <p className="text-sm text-charcoal/55">
            © {new Date().getFullYear()} Lee Luxury Stays. {t(ui.footer.rights)}
          </p>
          <p className="text-sm text-charcoal/45">Santiago, República Dominicana</p>
        </div>
      </div>
    </footer>
  );
}
