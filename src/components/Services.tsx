import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { services } from '../data/content';
import { whatsappPrefilled } from '../data/properties';
import { ImagePlaceholder } from './ImagePlaceholder';
import { scrollToSection } from '../utils/scroll';

export function Services() {
  const { t } = useLang();

  return (
    <section id="servicios" className="scroll-mt-20 bg-warm-white py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.services.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.services.title)}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => {
            const ctaHref =
              service.ctaType === 'whatsapp' ? whatsappPrefilled : service.ctaHref;
            const isExternal = service.ctaType === 'whatsapp';

            return (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-cream/40 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_18px_40px_-22px_rgba(30,30,30,0.22)]"
              >
                <div className="relative overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.imageAlt ? t(service.imageAlt) : t(service.tagline)}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder
                      aspect="aspect-[16/9]"
                      className="rounded-none"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-[22px] font-medium leading-snug text-charcoal sm:text-2xl">
                    {t(service.tagline)}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/70">
                    {t(service.description)}
                  </p>

                  {service.ctaLabel.es && (
                    <div className="mt-auto pt-6">
                      {isExternal ? (
                        <a
                          href={ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline group/cta w-fit !px-5 !py-3 text-[13px]"
                        >
                          <MessageCircle size={15} />
                          {t(service.ctaLabel)}
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => scrollToSection('propiedades')}
                          className="btn-outline group/cta w-fit !px-5 !py-3 text-[13px]"
                        >
                          {t(service.ctaLabel)}
                          <ArrowRight
                            size={15}
                            className="transition-transform group-hover/cta:translate-x-0.5"
                          />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
