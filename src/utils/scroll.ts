import { navigateTo, pageForSection } from '../routes';

/**
 * Goes to a section. If it is on the current page it scrolls smoothly;
 * otherwise it opens the page that contains it and scrolls there.
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  const page = pageForSection(id);
  if (page) navigateTo(page.path, page.sections[0] === id ? '' : id);
}
