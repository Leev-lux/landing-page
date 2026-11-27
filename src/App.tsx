import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LandingPage } from './components/LandingPage';
import { LegalPage } from './components/LegalPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { privacySections, termsSections } from './data/legal';
import { ui } from './i18n/ui';
import { legalPaths, navigateTo, pageForPath, type PageId } from './routes';

type Route = PageId | 'privacy' | 'terms';

function getRoute(path: string): Route {
  if (path === '/privacy-policy') return 'privacy';
  if (path === '/terms-and-conditions') return 'terms';
  return pageForPath(path)?.id ?? 'home';
}

function App() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? getRoute(window.location.pathname) : 'home',
  );

  // Back/forward buttons and in-app navigation.
  useEffect(() => {
    const onPop = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // New page: start at the top, or at the requested section (#id).
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    requestAnimationFrame(() => {
      const el = hash ? document.getElementById(hash) : null;
      // 'instant' skips the page-wide smooth scrolling when switching pages.
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, [route]);

  // Internal links (<a href="/estadias">) change page without reloading.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as HTMLElement)?.closest('a');
      if (!a || a.target === '_blank') return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      const [pathAndQuery, hash = ''] = href.split('#');
      const path = pathAndQuery.split('?')[0];
      if (pageForPath(path) || legalPaths.includes(path)) {
        e.preventDefault();
        navigateTo(pathAndQuery, hash);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <LanguageProvider>
      {route === 'privacy' ? (
        <LegalPage title={ui.legal.privacyTitle} sections={privacySections} />
      ) : route === 'terms' ? (
        <LegalPage title={ui.legal.termsTitle} sections={termsSections} />
      ) : (
        <>
          <LandingPage page={route} />
          <WhatsAppButton />
        </>
      )}
    </LanguageProvider>
  );
}

export default App;
