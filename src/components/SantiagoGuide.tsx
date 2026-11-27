import { useMemo, useState } from 'react';
import { ArrowUpRight, Car, Footprints, MapPin, Phone } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import {
  guideBuildings,
  guideCategories,
  guidePlaces,
  type GuideCategory,
} from '../data/guide';

/** Straight-line distance in km between two coordinates. */
function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(a));
}

/** Rough door-to-door estimate: streets add ~35% to the straight line. */
function estimate(km: number) {
  const road = km * 1.35;
  if (road <= 1) {
    return { mode: 'walk' as const, minutes: Math.max(2, Math.round((road / 4.8) * 60)), km: road };
  }
  const speed = road < 5 ? 22 : 38; // city traffic vs. avenues/highway
  return { mode: 'car' as const, minutes: Math.max(3, Math.round((road / speed) * 60)), km: road };
}

function mapsUrl(name: string, placeId: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${name}, Santiago`,
  )}&query_place_id=${placeId}`;
}

export function SantiagoGuide() {
  const { lang, t } = useLang();
  const [buildingId, setBuildingId] = useState(guideBuildings[0].id);
  const [category, setCategory] = useState<GuideCategory | 'all'>('all');

  const building = guideBuildings.find((b) => b.id === buildingId)!;

  const places = useMemo(
    () =>
      guidePlaces
        .filter((p) => !p.only || p.only.includes(buildingId))
        // 'Todo' leaves out the long rent-a-car list; it has its own tab.
        .filter((p) => (category === 'all' ? p.category !== 'cars' : p.category === category))
        .map((p) => ({
          ...p,
          trip: estimate(haversineKm(building.lat, building.lng, p.lat, p.lng)),
        }))
        .sort((a, b) => a.trip.km - b.trip.km),
    [building, buildingId, category],
  );

  const categoryLabel = (id: GuideCategory) =>
    t(guideCategories.find((c) => c.id === id)!.label);

  const pill = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
      active
        ? 'border-charcoal bg-charcoal text-warm-white'
        : 'border-charcoal/15 text-charcoal/75 hover:border-charcoal/40 hover:text-charcoal'
    }`;

  return (
    <section id="guia" className="scroll-mt-20 bg-warm-white py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.guide.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.guide.title)}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-charcoal/70">
          {t(ui.guide.intro)}
        </p>

        <div className="mx-auto mt-10 max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
            {t(ui.guide.stayingAt)}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2" role="tablist">
            {guideBuildings.map((b) => (
              <button
                key={b.id}
                type="button"
                role="tab"
                aria-selected={b.id === buildingId}
                onClick={() => setBuildingId(b.id)}
                className={pill(b.id === buildingId)}
              >
                {b.name}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-charcoal/10 pt-6">
            {(['all', ...guideCategories.map((c) => c.id)] as const).map((id) => {
              const active = category === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setCategory(id)}
                  aria-pressed={active}
                  className={`border-b-2 pb-1 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                    active
                      ? 'border-gold text-charcoal'
                      : 'border-transparent text-charcoal/55 hover:text-charcoal'
                  }`}
                >
                  {id === 'all' ? t(ui.guide.all) : categoryLabel(id)}
                </button>
              );
            })}
          </div>

          <ul className="mt-8 divide-y divide-charcoal/10 overflow-hidden rounded-2xl border border-charcoal/10 bg-cream/50">
            {places.map((p) => {
              const Icon = p.trip.mode === 'walk' ? Footprints : Car;
              const how = p.trip.mode === 'walk' ? t(ui.guide.walk) : t(ui.guide.drive);
              return (
                <li
                  key={`${p.placeId}-${p.category}`}
                  className="grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-6"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                      {categoryLabel(p.category)}
                    </p>
                    <h3 className="mt-1 text-xl font-medium leading-snug text-charcoal">{p.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{t(p.note)}</p>
                    {p.phone && (
                      <a
                        href={`tel:${p.phone.replace(/[^+\d]/g, '')}`}
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium tabular-nums text-charcoal/80 transition-colors hover:text-gold-dark"
                      >
                        <Phone size={14} className="text-gold-dark" aria-hidden="true" />
                        {p.phone}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium tabular-nums text-charcoal">
                      <Icon size={16} className="text-gold-dark" aria-hidden="true" />
                      {p.trip.minutes} min {how}
                      <span className="text-charcoal/45">
                        · {p.trip.km.toLocaleString(lang === 'es' ? 'es-DO' : 'en-US', {
                          maximumFractionDigits: 1,
                        })}{' '}
                        km
                      </span>
                    </span>
                    <a
                      href={mapsUrl(p.name, p.placeId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-charcoal/70 transition-colors hover:text-gold-dark"
                    >
                      <MapPin size={14} aria-hidden="true" />
                      {t(ui.guide.map)}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 text-center text-xs italic text-charcoal/50">
            {t(ui.guide.disclaimer)}
          </p>
        </div>
      </div>
    </section>
  );
}
