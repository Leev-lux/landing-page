import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LandingPage } from './components/LandingPage';
import { LegalPage } from './components/LegalPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { privacySections, termsSections } from './data/legal';
import { ui } from './i18n/ui';

type Route = 'home' | 'privacy' | 'terms';

function getRouteFromPath(path: string): Route {
  if (path === '/privacy-policy') return 'privacy';
  if (path === '/terms-and-conditions') return 'terms';
  return 'home';
}

function App() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? getRouteFromPath(window.location.pathname) : 'home',
  );

  useEffect(() => {
    const onPop = () => setRoute(getRouteFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    if (route !== 'home') {
      window.scrollTo(0, 0);
    }
  }, [route]);

  const navigate = (path: string) => {
    if (path === window.location.pathname) return;
    window.history.pushState({}, '', path);
    setRoute(getRouteFromPath(path));
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;
      if (href === '/privacy-policy' || href === '/terms-and-conditions') {
        e.preventDefault();
        navigate(href);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <LanguageProvider>
      {route === 'home' && (
        <>
          <LandingPage />
          <WhatsAppButton />
        </>
      )}
      {route === 'privacy' && (
        <LegalPage title={ui.legal.privacyTitle} sections={privacySections} />
      )}
      {route === 'terms' && (
        <LegalPage title={ui.legal.termsTitle} sections={termsSections} />
      )}
    </LanguageProvider>
  );
}

export default App;
