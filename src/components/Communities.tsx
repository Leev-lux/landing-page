import { ArrowRight, BriefcaseBusiness, Check, Home, KeyRound, MessageCircle, Sun } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { whatsappOwners } from '../data/properties';

const guestItems = [
  { key: 'executive', icon: BriefcaseBusiness },
  { key: 'families', icon: Home },
  { key: 'tenants', icon: KeyRound },
  { key: 'getaways', icon: Sun },
] as const;

export function Communities() {
  const { t } = useLang();
  const c = ui.communities;

  return (
    <section id="comunidades" className="scroll-mt-20 bg-warm-white py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(c.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(c.title)}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-charcoal/70">
          {t(c.intro)}
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_1fr] lg:gap-6">
          {/* Guests & tenants */}
          <article className="flex flex-col rounded-3xl border border-charcoal/10 bg-cream/60 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
              {t(c.guests.label)}
            </p>
            <h3 className="mt-3 text-[26px] font-medium leading-tight text-charcoal sm:text-[30px]">
              {t(c.guests.title)}
            </h3>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {guestItems.map(({ key, icon: Icon }) => (
                <li key={key} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-warm-white text-gold-dark">
                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-lg font-medium text-charcoal font-display">{t(c[key].title)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/70">
                      {t(c[key].description)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <a href="/estadias" className="btn-primary group">
                {t(c.guests.cta)}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>

          {/* Property owners */}
          <article className="flex flex-col rounded-3xl bg-charcoal p-6 text-warm-white sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {t(c.owners.label)}
            </p>
            <h3 className="mt-3 text-[26px] font-medium leading-tight sm:text-[30px]">
              {t(c.owners.title)}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-warm-white/75">{t(c.owners.intro)}</p>

            <ul className="mt-6 space-y-3">
              {c.owners.items.map((item) => (
                <li key={item.es} className="flex gap-3 text-sm leading-relaxed text-warm-white/90">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  {t(item)}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <a
                href={whatsappOwners}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                <MessageCircle size={16} />
                {t(c.owners.cta)}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
