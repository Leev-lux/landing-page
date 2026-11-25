import { ArrowRight } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { properties } from '../data/properties';

const AIRBNB = 'https://a0.muscache.com/im/pictures/';

/** Home page cards that open each section of the site. */
export function SectionTeasers() {
  const { t } = useLang();

  const cards = [
    {
      href: '/estadias',
      title: ui.nav.stays,
      text: ui.teasers.stays,
      image: properties.find((p) => p.airbnbId === '545498928051919866')?.image,
      count: `${properties.length}`,
    },
    {
      href: '/servicios',
      title: ui.nav.services,
      text: ui.teasers.services,
      image: `${AIRBNB}hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM1MTQ4Njg1ODE2MDExMzI2MQ==/original/9bc7ac56-a398-43c7-a201-ff72688efe16.png?im_w=960`,
    },
    {
      href: '/guia',
      title: ui.nav.guide,
      text: ui.teasers.guide,
      image: '/IMG_93033OIcWf.jpg',
    },
    {
      href: '/galeria',
      title: ui.nav.gallery,
      text: ui.teasers.gallery,
      image: '/COMEDOR.jpg.jpeg',
    },
  ];

  return (
    <section id="apartados" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.teasers.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.teasers.title)}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group relative flex min-h-[260px] overflow-hidden rounded-2xl bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:min-h-[320px]"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <span className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
              <span className="relative mt-auto flex w-full items-end justify-between gap-4 p-6 sm:p-8">
                <span>
                  <span className="block text-[26px] font-medium leading-tight text-warm-white sm:text-[30px] font-display">
                    {t(card.title)}
                  </span>
                  <span className="mt-2 block max-w-sm text-sm leading-relaxed text-warm-white/80">
                    {t(card.text)}
                  </span>
                </span>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-warm-white text-charcoal transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-charcoal/65">
          {t(ui.teasers.faqLead)}{' '}
          <a href="/preguntas" className="font-semibold text-charcoal underline decoration-gold underline-offset-4 hover:text-gold-dark">
            {t(ui.teasers.faqLink)}
          </a>
        </p>
      </div>
    </section>
  );
}
