import { useLang, ui } from '../context/LanguageContext';
import { principles } from '../data/content';

export function LeevStandard() {
  const { t } = useLang();

  return (
    <section id="estandar" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.standard.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.standard.title)}
        </h2>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="h-px w-full bg-gold/30" />
          <ul className="divide-y divide-gold/20">
            {principles.map((principle) => (
              <li
                key={principle.title.en}
                className="grid gap-4 py-7 sm:grid-cols-12 sm:gap-8 sm:py-8"
              >
                <div className="sm:col-span-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-medium text-charcoal sm:text-2xl">
                      {t(principle.title)}
                    </h3>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-charcoal/70 sm:col-span-7">
                  {t(principle.description)}
                </p>
              </li>
            ))}
          </ul>
          <div className="h-px w-full bg-gold/30" />
        </div>
      </div>
    </section>
  );
}
