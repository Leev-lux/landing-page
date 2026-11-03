import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import type { LegalSection } from '../data/legal';

interface LegalPageProps {
  title: { es: string; en: string };
  sections: LegalSection[];
}

export function LegalPage({ title, sections }: LegalPageProps) {
  const { lang, t } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white pt-[72px]">
      <article className="container-leev max-w-3xl py-16 lg:py-24">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 transition-colors hover:text-charcoal"
        >
          <ArrowLeft size={16} />
          {t(ui.legal.backHome)}
        </a>

        <h1 className="text-[32px] font-medium leading-tight text-charcoal sm:text-[40px]">
          {t(title)}
        </h1>
        <p className="mt-3 text-sm text-charcoal/50">{t(ui.legal.updated)}</p>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold/30 bg-cream/60 px-5 py-4">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-charcoal/70">
            {t(ui.legal.reviewNote)}
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-medium text-charcoal sm:text-2xl">
                {t(section.heading)}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal/75">
                {t(section.body)}
              </p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
