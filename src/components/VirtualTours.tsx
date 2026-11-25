import { useState } from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { tours } from '../data/content';
import { properties } from '../data/properties';

/** Builds the Matterport embed URL from a full share link or a bare model id. */
function embedUrl(linkOrId: string): string {
  const match = linkOrId.match(/[?&]m=([A-Za-z0-9]+)/);
  const id = match ? match[1] : linkOrId.trim();
  return `https://my.matterport.com/show/?m=${id}&play=1&qs=1&brand=0`;
}

export function VirtualTours() {
  const { t } = useLang();
  const items = tours
    .map((tour) => ({ ...tour, property: properties.find((p) => p.airbnbId === tour.airbnbId) }))
    .filter((tour) => tour.property);
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);

  // Hide the whole section until at least one tour has been added.
  if (items.length === 0) return null;

  const current = items[Math.min(active, items.length - 1)];
  const property = current.property!;

  const select = (idx: number) => {
    setActive(idx);
    setStarted(false);
  };

  return (
    <section id="recorridos" className="scroll-mt-20 bg-warm-white py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.tours.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.tours.title)}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-charcoal/70">
          {t(ui.tours.intro)}
        </p>

        {items.length > 1 && (
          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label={t(ui.tours.eyebrow)}
          >
            {items.map((item, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={item.airbnbId}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => select(idx)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                    isActive
                      ? 'border-charcoal bg-charcoal text-warm-white'
                      : 'border-charcoal/15 text-charcoal/75 hover:border-charcoal/40 hover:text-charcoal'
                  }`}
                >
                  {item.property!.title.split('|').pop()!.trim()}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-8 overflow-hidden rounded-3xl border border-charcoal/10 bg-cream">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
            {started ? (
              <iframe
                key={current.matterport}
                src={embedUrl(current.matterport)}
                title={`${t(ui.tours.eyebrow)} — ${property.title}`}
                className="absolute inset-0 h-full w-full"
                allow="xr-spatial-tracking; fullscreen; gyroscope; accelerometer"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setStarted(true)}
                className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-gold"
              >
                {property.image && (
                  <img
                    src={property.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
                <span className="absolute inset-0 bg-charcoal/35 transition-colors group-hover:bg-charcoal/45" />
                <span className="relative inline-flex items-center gap-2 rounded-full bg-warm-white px-6 py-3.5 text-sm font-semibold text-charcoal shadow-lg">
                  <Box size={18} aria-hidden="true" />
                  {t(ui.tours.start)}
                </span>
              </button>
            )}
          </div>

          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-lg font-medium text-charcoal sm:text-xl">{property.title}</h3>
              {property.location && (
                <p className="mt-1 text-sm text-charcoal/60">{property.location}</p>
              )}
            </div>
            <a
              href={property.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full !px-5 !py-3 text-[13px] sm:w-auto"
            >
              {t(ui.properties.viewOnAirbnb)}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
