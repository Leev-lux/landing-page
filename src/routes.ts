/**
 * Páginas del sitio. Cada apartado tiene su propia dirección
 * (leev.do/estadias, leev.do/guia, ...) en lugar de una sola página larga.
 */

export type PageId = 'home' | 'stays' | 'services' | 'guide' | 'gallery' | 'faq';

export interface PageDef {
  id: PageId;
  path: string;
  /** Section ids that live on this page, so links to them can jump here. */
  sections: string[];
}

export const pages: PageDef[] = [
  { id: 'home', path: '/', sections: ['inicio', 'comunidades', 'apartados'] },
  { id: 'stays', path: '/estadias', sections: ['propiedades', 'recorridos'] },
  { id: 'services', path: '/servicios', sections: ['servicios', 'estandar'] },
  { id: 'guide', path: '/guia', sections: ['guia'] },
  { id: 'gallery', path: '/galeria', sections: ['galeria'] },
  { id: 'faq', path: '/preguntas', sections: ['faq'] },
];

export const legalPaths = ['/privacy-policy', '/terms-and-conditions'];

export function pageForPath(path: string): PageDef | undefined {
  const clean = path.replace(/\/+$/, '') || '/';
  return pages.find((p) => p.path === clean);
}

export function pageForSection(sectionId: string): PageDef | undefined {
  return pages.find((p) => p.sections.includes(sectionId));
}

/** Client-side navigation: updates the address bar and tells the app to re-render. */
export function navigateTo(path: string, hash = '') {
  const target = path + (hash ? `#${hash}` : '');
  if (window.location.pathname + window.location.search + window.location.hash === target) return;
  window.history.pushState({}, '', target);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
