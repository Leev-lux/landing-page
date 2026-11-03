import { useLang, ui } from '../context/LanguageContext';

export function SantiagoGuide() {
  const { t } = useLang();

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

        {/* Replaceable placeholder for a future custom Santiago Guide embed.
            Replace the inner content with your own HTML/iframe/map. */}
        <div
          className="mt-10 flex w-full items-center justify-center rounded-3xl border border-dashed border-gold/40 bg-cream/60 px-6 py-16 text-center"
          role="region"
          aria-label={t(ui.guide.eyebrow)}
          style={{ minHeight: 'clamp(320px, 42vh, 420px)' }}
        >
          <p className="max-w-md text-sm font-medium uppercase tracking-[0.22em] text-charcoal/45">
            {t(ui.guide.placeholder)}
          </p>
        </div>
      </div>
    </section>
  );
}
