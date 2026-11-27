import { useEffect, useState } from 'react';
import { useLang, ui } from '../context/LanguageContext';
import { properties, type StayTag } from '../data/properties';
import { PropertyCard } from './PropertyCard';

type Filter = StayTag | 'todos';

const filters: { id: Filter; label: { es: string; en: string } }[] = [
  { id: 'todos', label: ui.stayTypes.all },
  { id: 'familias', label: ui.stayTypes.families },
  { id: 'ejecutivos', label: ui.stayTypes.executive },
  { id: 'escapadas', label: ui.stayTypes.getaways },
  { id: 'estadias-largas', label: ui.stayTypes.longStays },
];

/** Reads ?tipo=familias from the address so community cards can open a filtered list. */
function filterFromUrl(): Filter {
  const tipo = new URLSearchParams(window.location.search).get('tipo');
  return filters.some((f) => f.id === tipo) ? (tipo as Filter) : 'todos';
}

export function Properties() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState<Filter>(() =>
    typeof window === 'undefined' ? 'todos' : filterFromUrl(),
  );

  useEffect(() => {
    const onPop = () => setFilter(filterFromUrl());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const choose = (id: Filter) => {
    setFilter(id);
    // Keep the address in sync so a filtered list can be shared.
    const url = id === 'todos' ? window.location.pathname : `${window.location.pathname}?tipo=${id}`;
    window.history.replaceState({}, '', url);
  };

  const shown = filter === 'todos' ? properties : properties.filter((p) => p.tags?.includes(filter));

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

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label={t(ui.stayTypes.label)}>
          {filters.map((f) => {
            const active = filter === f.id;
            const count =
              f.id === 'todos' ? properties.length : properties.filter((p) => p.tags?.includes(f.id as StayTag)).length;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => choose(f.id)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  active
                    ? 'border-charcoal bg-charcoal text-warm-white'
                    : 'border-charcoal/15 bg-warm-white text-charcoal/75 hover:border-charcoal/40 hover:text-charcoal'
                }`}
              >
                {t(f.label)}
                <span className={`ml-1.5 tabular-nums ${active ? 'text-warm-white/60' : 'text-charcoal/40'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {shown.map((property) => (
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
