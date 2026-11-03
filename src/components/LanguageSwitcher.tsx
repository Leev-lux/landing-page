import { useLang } from '../context/LanguageContext';
import type { Lang } from '../data/properties';

export function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { lang, setLang } = useLang();

  const base =
    'inline-flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-semibold tracking-wide transition-colors';
  const border = variant === 'dark' ? 'border-charcoal/20' : 'border-warm-white/30';
  const pillActive =
    variant === 'dark' ? 'bg-charcoal text-warm-white' : 'bg-warm-white text-charcoal';
  const pillIdle =
    variant === 'dark' ? 'text-charcoal/70 hover:text-charcoal' : 'text-warm-white/80 hover:text-warm-white';

  const options: Lang[] = ['es', 'en'];

  return (
    <div className={`${base} ${border}`} role="group" aria-label="Language selector">
      {options.map((opt) => {
        const active = opt === lang;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLang(opt)}
            className={`rounded-full px-2.5 py-1 uppercase transition-all duration-200 ${
              active ? pillActive : pillIdle
            }`}
            aria-pressed={active}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
