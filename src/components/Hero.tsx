import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { whatsappPrefilled } from '../data/properties';
import { scrollToSection } from '../utils/scroll';

export function Hero() {
  const { t } = useLang();

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[72px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_0%,rgba(198,167,123,0.12),transparent)]" />
      <div className="container-leev grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="section-eyebrow animate-fade-up">{t(ui.hero.eyebrow)}</p>
          <h1
            className="animate-fade-up text-[34px] font-medium leading-[1.15] text-charcoal sm:text-[42px] lg:text-[56px] lg:leading-[1.1]"
            style={{ animationDelay: '60ms' }}
          >
            {t(ui.hero.title)}
          </h1>
          <p
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-charcoal/75 sm:text-lg"
            style={{ animationDelay: '120ms' }}
          >
            {t(ui.hero.text)}
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '180ms' }}
          >
            <button
              type="button"
              onClick={() => scrollToSection('propiedades')}
              className="btn-primary group"
            >
              {t(ui.hero.primaryCta)}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href={whatsappPrefilled}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={16} />
              {t(ui.hero.secondaryCta)}
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="animate-fade-up" style={{ animationDelay: '120ms' }}>
              <img
                src="/a80b52d0-a8f7-4661-a536-9d436b3128a2.JPG"
                alt="Leev Luxury Stays"
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-sm"
              />
            </div>
            <div className="mt-8 grid gap-4 sm:gap-5">
              <div
                className="animate-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                <img
                  src="/d9113e38-c482-4cdf-81d7-ac52f782acc4.JPG"
                  alt="Leev Luxury Stays"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
                />
              </div>
              <div
                className="animate-fade-up"
                style={{ animationDelay: '280ms' }}
              >
                <img
                  src="/IMG_93033OIcWf.jpg"
                  alt="Leev Luxury Stays"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
