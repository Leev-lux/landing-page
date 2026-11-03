import { MessageCircle } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { whatsappPrefilled } from '../data/properties';

export function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      href={whatsappPrefilled}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(ui.whatsapp.label)}
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
    >
      <MessageCircle size={26} className="transition-transform group-hover:scale-110" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-charcoal px-3 py-1.5 text-xs font-medium text-warm-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        {t(ui.whatsapp.label)}
      </span>
    </a>
  );
}
