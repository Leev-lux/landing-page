import { useLang, ui } from '../context/LanguageContext';

export function StayFinder() {
  const { t } = useLang();

  return (
    <section id="buscador" className="bg-warm-white py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.stayFinder.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.stayFinder.title)}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-charcoal/70">
          {t(ui.stayFinder.intro)}
        </p>

        {/* Replaceable placeholder for a future custom Stay Finder tool.
            To embed a custom tool, replace the inner content of this block
            with your own HTML/iframe. Target ~620px desktop, ~640px mobile. */}
        <div
          className="mt-10 flex w-full items-center justify-center rounded-3xl border border-dashed border-gold/40 bg-cream/60 px-6 py-16 text-center sm:py-20"
          role="region"
          aria-label={t(ui.stayFinder.eyebrow)}
          style={{ minHeight: 'clamp(320px, 50vh, 620px)' }}
        >
          <p className="max-w-md text-sm font-medium uppercase tracking-[0.22em] text-charcoal/45">
            {t(ui.stayFinder.placeholder)}
          </p>
        </div>
      </div>
    </section>
  );
}
