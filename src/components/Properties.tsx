import { useLang, ui } from '../context/LanguageContext';
import { properties } from '../data/properties';
import { PropertyCard } from './PropertyCard';

export function Properties() {
  const { lang, t } = useLang();

  return (
    <section id="propiedades" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.properties.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.properties.title)}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-charcoal/70">
          {t(ui.properties.intro)}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.airbnbId} property={property} lang={lang} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm italic leading-relaxed text-charcoal/55">
          {t(ui.properties.note)}
        </p>
      </div>
    </section>
  );
}
