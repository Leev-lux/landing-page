import { ArrowRight, BriefcaseBusiness, Building2, Home, UsersRound, Waves } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { whatsappPrefilled } from '../data/properties';
import { scrollToSection } from '../utils/scroll';

const communityItems = [
  { key: 'executive', icon: BriefcaseBusiness, action: 'properties' },
  { key: 'tenants', icon: Building2, action: 'contact' },
  { key: 'families', icon: Home, action: 'properties' },
  { key: 'owners', icon: UsersRound, action: 'contact' },
  { key: 'hosts', icon: Waves, action: 'contact' },
] as const;

type CommunityKey = (typeof communityItems)[number]['key'];

export function Communities() {
  const { t } = useLang();

  const content = (key: CommunityKey) => ui.communities[key];

  const handleProperties = () => scrollToSection('propiedades');

  return (
    <section id="comunidades" className="scroll-mt-20 bg-warm-white py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.communities.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.communities.title)}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-charcoal/70">
          {t(ui.communities.intro)}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {communityItems.map(({ key, icon: Icon, action }) => {
            const item = content(key);
            const isProperties = action === 'properties';

            return (
              <article
                key={key}
                className="group flex flex-col rounded-2xl border border-charcoal/10 bg-cream/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_38px_-22px_rgba(30,30,30,0.24)] sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-warm-white text-gold-dark transition-colors group-hover:bg-gold group-hover:text-charcoal">
                  <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-medium leading-snug text-charcoal">
                  {t(item.title)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                  {t(item.description)}
                </p>
                {isProperties ? (
                  <button
                    type="button"
                    onClick={handleProperties}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {t(item.cta)}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <a
                    href={whatsappPrefilled}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {t(item.cta)}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
