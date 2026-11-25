export type Lang = 'es' | 'en';

export type Bilingual = { es: string; en: string };

export interface PropertyRecord {
  id: string;
  airbnbId: string;
  title: string;
  airbnbUrl: string;
  /** Replace this string with a confirmed Leev image path. */
  image?: string;
  imageAlt?: Bilingual;
  location?: string;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  /** true si el anuncio de Airbnb está desactivado: la tarjeta lleva a WhatsApp. */
  unlisted?: boolean;
}

/**
 * Centralized property catalog for Leev Luxury Stays.
 *
 * To add or edit a property, modify the records below.
 * Replace `image` with a confirmed property image path when available.
 * Leaving optional fields unset renders only the verified information.
 */
export const properties: PropertyRecord[] = [
  {
    id: 'LEEV-01',
    airbnbId: '54195008',
    title: 'Lujosa Estadía | Soha Suites A11',
    location: 'Soha Suites, Santiago',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1.5,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-54195008/original/ad454885-8236-46fa-b641-8cdd2c61ffe9.jpeg?im_w=960',
    imageAlt: { es: 'Soha Suites A11 — Soha Suites, Santiago', en: 'Soha Suites A11 — Soha Suites, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/54195008',
  },
  {
    id: 'LEEV-02',
    airbnbId: '1752233341333580825',
    title: 'Lujosa Vista | Soha Suites II B14',
    location: 'Soha Suites II, Santiago',
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1752233341333580825/original/ac787396-54cc-4281-b603-89ccecc2b5e1.jpeg?im_w=960',
    imageAlt: { es: 'Soha Suites II B14 — Soha Suites II, Santiago', en: 'Soha Suites II B14 — Soha Suites II, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1752233341333580825',
  },
  {
    id: 'LEEV-03',
    airbnbId: '549129435277308587',
    title: 'Confort Urbano | Soha II A5',
    location: 'Soha Suites II, Santiago',
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-549129435277308587/original/ce7b023d-661e-4e71-86ae-56e941f9f598.jpeg?im_w=960',
    imageAlt: { es: 'Soha II A5 — Soha Suites II, Santiago', en: 'Soha II A5 — Soha Suites II, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/549129435277308587',
  },
  {
    id: 'LEEV-04',
    airbnbId: '545529207234719975',
    title: 'Bonito Apartamento | Soha Suites I C1',
    location: 'Soha Suites I, Santiago',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1.5,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-545529207234719975/original/2b667579-29ec-4e6f-b44a-4fbcf551e541.jpeg?im_w=960',
    imageAlt: { es: 'Soha Suites I C1 — Soha Suites I, Santiago', en: 'Soha Suites I C1 — Soha Suites I, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/545529207234719975',
  },
  {
    id: 'LEEV-05',
    airbnbId: '545498928051919866',
    title: 'Soha Panorama A07',
    location: 'Soha Panorama, Santiago',
    bedrooms: 2,
    beds: 2,
    bathrooms: 2.5,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-545498928051919866/original/0b690437-14ed-4a46-80bd-d82d134b8eae.jpeg?im_w=960',
    imageAlt: { es: 'Soha Panorama A07 — Soha Panorama, Santiago', en: 'Soha Panorama A07 — Soha Panorama, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/545498928051919866',
  },
  {
    id: 'LEEV-06',
    airbnbId: '655753195260415817',
    title: 'Encantador y Acogedor | Soha Panorama A14',
    location: 'Soha Panorama, Santiago',
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-655753195260415817/original/3c0c446f-b653-45ce-b903-18a7f1a9b467.jpeg?im_w=960',
    imageAlt: { es: 'Soha Panorama A14 — Soha Panorama, Santiago', en: 'Soha Panorama A14 — Soha Panorama, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/655753195260415817',
  },
  {
    id: 'LEEV-07',
    airbnbId: '692030630299002134',
    title: 'Apartamento de Lujo | Soha Panorama D2',
    location: 'Soha Panorama, Santiago',
    bedrooms: 1,
    beds: 1,
    bathrooms: 0.5,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-692030630299002134/original/30267f8f-3586-4c1a-b89d-67ea589ae63a.png?im_w=960',
    imageAlt: { es: 'Soha Panorama D2 — Soha Panorama, Santiago', en: 'Soha Panorama D2 — Soha Panorama, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/692030630299002134',
  },
  {
    id: 'LEEV-08',
    airbnbId: '786820800834863617',
    title: 'Departamento de Lujo | Soha Panorama C13',
    location: 'Soha Panorama, Santiago',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1.5,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-786820800834863617/original/42156cab-ce0e-4bbd-99c1-51125ed1f960.jpeg?im_w=960',
    imageAlt: { es: 'Soha Panorama C13 — Soha Panorama, Santiago', en: 'Soha Panorama C13 — Soha Panorama, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/786820800834863617',
  },
  {
    id: 'LEEV-09',
    airbnbId: '1351486858160113261',
    title: 'Piscina en la Azotea | TH Trinitaria A5',
    location: 'TH Trinitaria, Santiago',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1.5,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1351486858160113261/original/62bddafd-86b2-4a93-bd9d-0b1247443208.jpeg?im_w=960',
    imageAlt: { es: 'TH Trinitaria A5 — TH Trinitaria, Santiago', en: 'TH Trinitaria A5 — TH Trinitaria, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1351486858160113261',
  },
  {
    id: 'LEEV-10',
    airbnbId: '1766902402599087141',
    title: 'Espacio Familiar | 8 Brothers Tower A6',
    location: '8 Brothers Tower, Santiago',
    guests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2.5,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1766902402599087141/original/cad40371-ff86-4af3-bccc-3a5df8cd9dbe.jpeg?im_w=960',
    imageAlt: { es: '8 Brothers Tower A6 — 8 Brothers Tower, Santiago', en: '8 Brothers Tower A6 — 8 Brothers Tower, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1766902402599087141',
  },
  {
    id: 'LEEV-11',
    airbnbId: '1769816300096020740',
    title: 'Hogar Familiar | 8 Brothers Tower A5',
    location: '8 Brothers Tower, Santiago',
    bedrooms: 3,
    beds: 3,
    bathrooms: 2.5,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1769816300096020740/original/3e6249b9-877c-4d60-abd8-569fb77bb527.jpeg?im_w=960',
    imageAlt: { es: '8 Brothers Tower A5 — 8 Brothers Tower, Santiago', en: '8 Brothers Tower A5 — 8 Brothers Tower, Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1769816300096020740',
  },
  {
    id: 'LEEV-12',
    airbnbId: '1131828491006453848',
    title: 'Vista de Santiago | Barletta A10',
    location: 'Torre Barletta, Santiago',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2.5,
    image: '/Captura_de_pantalla_2026-10-27_a_la(s)_11.40.27_a.m..png',
    imageAlt: { es: 'Sala de Barletta A10 en Santiago', en: 'Living room at Barletta A10 in Santiago' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1131828491006453848',
    unlisted: true,
  },
  {
    id: 'LEEV-13',
    airbnbId: '792636543021249639',
    title: 'Suite Especial 01 | Villas Sixteen',
    location: 'Villas Sixteen, Moca',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-792636543021249639/original/f548f972-5fc7-4bc6-bc22-ef500ede729c.jpeg?im_w=960',
    imageAlt: { es: 'Villas Sixteen — Villas Sixteen, Moca', en: 'Villas Sixteen — Villas Sixteen, Moca' },
    airbnbUrl: 'https://www.airbnb.com/rooms/792636543021249639',
  },
  {
    id: 'LEEV-14',
    airbnbId: '1015810667406770695',
    title: 'Suite Especial 02 | Villas Sixteen',
    location: 'Villas Sixteen, Moca',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1015810667406770695/original/4759abbf-9bee-454f-a8dd-3074f693e240.jpeg?im_w=960',
    imageAlt: { es: 'Villas Sixteen — Villas Sixteen, Moca', en: 'Villas Sixteen — Villas Sixteen, Moca' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1015810667406770695',
  },
  {
    id: 'LEEV-15',
    airbnbId: '1086948751039018652',
    title: 'Suite Superior 03 | Villas Sixteen',
    location: 'Villas Sixteen, Moca',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1086948751039018652/original/95d9ca05-efff-4021-90b9-7a8dce4263a2.jpeg?im_w=960',
    imageAlt: { es: 'Villas Sixteen — Villas Sixteen, Moca', en: 'Villas Sixteen — Villas Sixteen, Moca' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1086948751039018652',
  },
  {
    id: 'LEEV-16',
    airbnbId: '1087594010023957905',
    title: 'Suite Superior 04 | Villas Sixteen',
    location: 'Villas Sixteen, Moca',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1087594010023957905/original/92b52e80-f9a2-4129-8ab4-cc6e4a69398d.jpeg?im_w=960',
    imageAlt: { es: 'Villas Sixteen — Villas Sixteen, Moca', en: 'Villas Sixteen — Villas Sixteen, Moca' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1087594010023957905',
  },
  {
    id: 'LEEV-17',
    airbnbId: '1429711843610828548',
    title: 'Villa Santorini',
    location: 'La Romana',
    bedrooms: 6,
    beds: 6,
    bathrooms: 4.5,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1429711843610828548/original/1e4306bc-5f65-4f85-bf42-8896179c7d00.jpeg?im_w=960',
    imageAlt: { es: 'Villa Santorini — La Romana', en: 'Villa Santorini — La Romana' },
    airbnbUrl: 'https://www.airbnb.com/rooms/1429711843610828548',
  },
];

export const whatsappPrimary = 'https://wa.me/18492148400';
export const whatsappPrefilled =
  'https://wa.me/18492148400?text=Hola%20Leev%20Luxury%20Stays%2C%20quisiera%20ayuda%20para%20encontrar%20una%20estad%C3%ADa.';

export const phonePrimary = '849-214-8400';
export const phoneSecondary = '849-357-5827';

export const instagramUrl = 'https://www.instagram.com/leev.do/';
export const airbnbHostUrl = 'https://es-l.airbnb.com/users/show/438497780';

export const whatsappOwners =
  'https://wa.me/18492148400?text=Hola%20Leev%2C%20tengo%20un%20apartamento%20y%20quisiera%20informaci%C3%B3n%20sobre%20la%20administraci%C3%B3n%20de%20mi%20propiedad.';
