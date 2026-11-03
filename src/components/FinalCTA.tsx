import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { whatsappPrefilled } from '../data/properties';
import { scrollToSection } from '../utils/scroll';

export function FinalCTA() {
  const { t } = useLang();

  return (
    <section id="contacto" className="scroll-mt-20 bg-charcoal py-20 lg:py-28">
      <div className="container-leev text-center">
        <div className="mx-auto mb-8 h-px w-16 bg-gold" />
        <h2 className="mx-auto max-w-3xl text-[28px] font-medium leading-tight text-warm-white sm:text-[34px] lg:text-[44px]">
          {t(ui.finalCta.title)}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-warm-white/70">
          {t(ui.finalCta.text)}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToSection('propiedades')}
            className="btn-gold group"
          >
            {t(ui.finalCta.primary)}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href={whatsappPrefilled}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/30 px-7 py-3.5 text-sm font-medium tracking-wide text-warm-white transition-all duration-300 hover:border-warm-white hover:bg-warm-white hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <MessageCircle size={16} />
            {t(ui.finalCta.secondary)}
          </a>
        </div>
      </div>
    </section>
  );
}
