import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { faqs } from '../data/content';

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-warm-white py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.faq.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.faq.title)}
        </h2>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-charcoal/10 border-y border-charcoal/10">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium text-charcoal sm:text-xl">
                      {t(faq.question)}
                    </span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? 'border-gold bg-gold text-charcoal'
                          : 'border-charcoal/20 text-charcoal/70'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-base leading-relaxed text-charcoal/70">
                      {t(faq.answer)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
