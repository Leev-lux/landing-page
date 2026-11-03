import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Lang } from '../data/properties';
import { ui, type BilingualField } from '../i18n/ui';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (field: BilingualField) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'leev-lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') return stored;
  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'es'
      ? 'Leev Luxury Stays | Apartamentos amueblados en Santiago'
      : 'Leev Luxury Stays | Furnished Apartments in Santiago';
    setMetaDescription(
      lang === 'es'
        ? 'Descubre apartamentos amueblados en Santiago, República Dominicana, para estadías cortas y largas con Leev Luxury Stays.'
        : 'Discover furnished apartments in Santiago, Dominican Republic, for short-term and long-term stays with Leev Luxury Stays.',
    );
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === 'es' ? 'en' : 'es';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const tFn = useCallback(
    (field: BilingualField) => (lang === 'es' ? field.es : field.en),
    [lang],
  );

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, toggle, t: tFn }),
    [lang, setLang, toggle, tFn],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

export { ui };
