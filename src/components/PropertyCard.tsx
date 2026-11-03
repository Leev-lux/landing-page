import { BedDouble, Bath, Users, DoorOpen, Sofa, ArrowUpRight } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import type { PropertyRecord } from '../data/properties';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PropertyCardProps {
  property: PropertyRecord;
  lang: 'es' | 'en';
}

function formatBathrooms(value: number, lang: 'es' | 'en'): string {
  const label = lang === 'es' ? ui.properties.bathrooms.es : ui.properties.bathrooms.en;
  return `${value % 1 === 0 ? value.toString() : value.toString()} ${label}`;
}

export function PropertyCard({ property, lang }: PropertyCardProps) {
  const t = (field: { es: string; en: string }) => field[lang];

  const details: { icon: typeof Users; value: string }[] = [];
  if (property.guests) {
    details.push({
      icon: Users,
      value: `${property.guests} ${t(ui.properties.guests)}`,
    });
  }
  if (property.bedrooms) {
    details.push({
      icon: DoorOpen,
      value: `${property.bedrooms} ${t(ui.properties.bedrooms)}`,
    });
  }
  if (property.beds) {
    details.push({
      icon: BedDouble,
      value: `${property.beds} ${t(ui.properties.beds)}`,
    });
  }
  if (property.bathrooms) {
    details.push({
      icon: Bath,
      value: formatBathrooms(property.bathrooms, lang),
    });
  }

  const imageAlt = property.imageAlt
    ? t(property.imageAlt)
    : t(ui.properties.imagePlaceholder);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-warm-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_-18px_rgba(30,30,30,0.25)]">
      <div className="relative overflow-hidden">
        {property.image ? (
          <img
            src={property.image}
            alt={imageAlt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder
            aspect="aspect-[4/3]"
            className="rounded-none"
            label={property.id}
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-warm-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/70 backdrop-blur-sm">
          {property.id}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-medium leading-snug text-charcoal sm:text-xl">
          {property.title}
        </h3>

        {property.location && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-charcoal/60">
            <Sofa size={14} className="text-gold-dark" aria-hidden="true" />
            {property.location}
          </p>
        )}

        {details.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-charcoal/75">
            {details.map(({ icon: Icon, value }, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <Icon size={15} className="text-gold-dark" aria-hidden="true" />
                {value}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
          <a
            href={property.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group/cta w-full !px-5 !py-3 text-[13px]"
          >
            {t(ui.properties.viewOnAirbnb)}
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
