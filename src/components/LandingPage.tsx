import { useEffect } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Communities } from './Communities';
import { SectionTeasers } from './SectionTeasers';
import { VirtualTours } from './VirtualTours';
import { Properties } from './Properties';
import { Services } from './Services';
import { LeevStandard } from './LeevStandard';
import { SantiagoGuide } from './SantiagoGuide';
import { Gallery } from './Gallery';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';
import { useLang, ui } from '../context/LanguageContext';
import type { PageId } from '../routes';

const titles: Record<Exclude<PageId, 'home'>, keyof typeof ui.nav> = {
  stays: 'stays',
  services: 'services',
  guide: 'guide',
  gallery: 'gallery',
  faq: 'faq',
};

export function LandingPage({ page }: { page: PageId }) {
  const { t } = useLang();

  // Each page gets its own browser-tab title.
  useEffect(() => {
    const base = 'Leev Luxury Stays';
    document.title =
      page === 'home'
        ? `${base} | ${t(ui.meta.homeTitle)}`
        : `${t(ui.nav[titles[page]])} | ${base}`;
  }, [page, t]);

  return (
    <>
      <Header current={page} />
      <main className={page === 'home' ? '' : 'pt-[72px]'}>
        {page === 'home' && (
          <>
            <Hero />
            <Communities />
            <SectionTeasers />
            <LeevStandard />
          </>
        )}
        {page === 'stays' && (
          <>
            <Properties />
            <VirtualTours />
          </>
        )}
        {page === 'services' && (
          <>
            <Services />
            <LeevStandard />
          </>
        )}
        {page === 'guide' && <SantiagoGuide />}
        {page === 'gallery' && <Gallery />}
        {page === 'faq' && <FAQ />}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
