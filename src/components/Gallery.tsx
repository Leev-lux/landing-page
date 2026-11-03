import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang, ui } from '../context/LanguageContext';
import { galleryImages } from '../data/content';
import { ImagePlaceholder } from './ImagePlaceholder';

export function Gallery() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)),
    [],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex, close, prev, next]);

  return (
    <section id="galeria" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="container-leev">
        <p className="section-eyebrow text-center">{t(ui.gallery.eyebrow)}</p>
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-tight text-charcoal sm:text-[34px] lg:text-[40px]">
          {t(ui.gallery.title)}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm italic text-charcoal/55">
          {t(ui.gallery.caption)}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="group relative overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label={`${t(ui.gallery.eyebrow)} ${idx + 1}`}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={t(item.alt)}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <ImagePlaceholder
                  aspect="aspect-square"
                  className="rounded-none transition-all duration-300 group-hover:bg-beige/60"
                />
              )}
              <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={t(ui.gallery.title)}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={t(ui.gallery.close)}
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:left-6"
            aria-label={t(ui.gallery.prev)}
          >
            <ChevronLeft size={26} />
          </button>

          <figure
            className="mx-auto max-h-[80vh] max-w-4xl px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages[openIndex].src ? (
              <img
                src={galleryImages[openIndex].src}
                alt={t(galleryImages[openIndex].alt)}
                className="max-h-[80vh] w-auto rounded-xl object-contain"
              />
            ) : (
              <ImagePlaceholder
                aspect="aspect-[4/3]"
                className="max-h-[80vh] w-[80vw] max-w-4xl rounded-xl"
              />
            )}
            <figcaption className="mt-4 text-center text-sm text-warm-white/70">
              {t(galleryImages[openIndex].alt)}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-6"
            aria-label={t(ui.gallery.next)}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}
