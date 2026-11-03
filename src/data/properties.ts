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
    title: 'Luxury Stay | Soha Suites A11',
    location: 'La Esmeralda, Santiago',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1.5,
    image: '/Captura_de_pantalla_2026-10-27_a_la(s)_10.28.15_a.m..png',
    imageAlt: {
      es: 'Aurora Suite en Santiago',
      en: 'Aurora Suite in Santiago',
    },
    airbnbUrl: 'https://www.airbnb.com/rooms/54195008',
  },
  {
    id: 'LEEV-02',
    airbnbId: '1131828491006453848',
    title: 'View of Santiago | Barletta A10',
    location: 'Torre Barletta, Santiago',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2.5,
    image: '/Captura_de_pantalla_2026-10-27_a_la(s)_11.40.27_a.m..png',
    imageAlt: {
      es: 'Vista panorámica desde Mirador Barletta en Santiago',
      en: 'Panoramic view from Mirador Barletta in Santiago',
    },
    airbnbUrl: 'https://www.airbnb.com/rooms/1131828491006453848',
  },
  {
    id: 'LEEV-03',
    airbnbId: '54097155',
    title: 'Amazing view | Soha Suites B14',
    location: 'La Esmeralda, Santiago',
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1.5,
    image: '/image.png',
    imageAlt: {
      es: 'Interior de Cielo 14 en Santiago',
      en: 'Interior of Cielo 14 in Santiago',
    },
    airbnbUrl: 'https://www.airbnb.com/rooms/54097155',
  },
  {
    id: 'LEEV-04',
    airbnbId: '1766902402599087141',
    title: 'Espacio Familiar | 8 Brothers Tower A6',
    location: 'Cerca del aeropuerto, Santiago',
    guests: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2.5,
    image: '/Captura_de_pantalla_2026-11-03_a_la(s)_3.48.25_p.m..png',
    imageAlt: {
      es: 'Imagen de Espacio Familiar en 8 Brothers Tower A6',
      en: 'Image of Espacio Familiar at 8 Brothers Tower A6',
    },
    airbnbUrl: 'https://www.airbnb.com/rooms/1766902402599087141',
  },
  {
    id: 'LEEV-05',
    airbnbId: '796961132636426916',
    title: 'Tu Estancia Ideal | Soha Panorama A2',
    location: 'Soha Panorama, Santiago',
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2.5,
    image: '/image.png',
    imageAlt: {
      es: 'Sala amplia de Tu Estancia Ideal en Soha Panorama A2',
      en: 'Spacious living room at Tu Estancia Ideal in Soha Panorama A2',
    },
    airbnbUrl: 'https://www.airbnb.com/rooms/796961132636426916',
  },
  {
    id: 'LEEV-06',
    airbnbId: '786820800834863617',
    title: 'Altura 13 - Lujo en Soha Panorama',
    airbnbUrl: 'https://www.airbnb.com/rooms/786820800834863617',
  },
  {
    id: 'LEEV-07',
    airbnbId: '1775606766850390270',
    title: 'Nido Cozy - Apartamento de 1 habitación',
    airbnbUrl: 'https://www.airbnb.com/rooms/1775606766850390270',
  },
  {
    id: 'LEEV-08',
    airbnbId: '1769816300096020740',
    title: 'Espacio Moderno - 3 habitaciones con estilo',
    airbnbUrl: 'https://www.airbnb.com/rooms/1769816300096020740',
  },
  {
    id: 'LEEV-09',
    airbnbId: '1766035551796424984',
    title: 'Rincón Privado - Habitación privada',
    airbnbUrl: 'https://www.airbnb.com/rooms/1766035551796424984',
  },
  {
    id: 'LEEV-10',
    airbnbId: '1752233341333580825',
    title: 'Torre Alta 14 - Lujo a 2 min de Ágora',
    airbnbUrl: 'https://www.airbnb.com/rooms/1752233341333580825',
  },
  {
    id: 'LEEV-11',
    airbnbId: '550715788063297187',
    title: 'Horizonte 13 - Vista panorámica, Soha Panorama',
    airbnbUrl: 'https://www.airbnb.com/rooms/550715788063297187',
  },
  {
    id: 'LEEV-12',
    airbnbId: '1162313630839868672',
    title: 'Mirador D09 - Vista increíble, Soha Suites II',
    airbnbUrl: 'https://www.airbnb.com/rooms/1162313630839868672',
  },
  {
    id: 'LEEV-13',
    airbnbId: '1679134570467968087',
    title: 'Refugio Navonna - Calma y calidez en la Torre',
    airbnbUrl: 'https://www.airbnb.com/rooms/1679134570467968087',
  },
  {
    id: 'LEEV-14',
    airbnbId: '549129435277308587',
    title: 'Amplitud A5 - Comodidad en Soha Suites II',
    airbnbUrl: 'https://www.airbnb.com/rooms/549129435277308587',
  },
  {
    id: 'LEEV-15',
    airbnbId: '1375539035192677827',
    title: 'Panorama Deluxe B1 - Lujo en Soha Panorama',
    airbnbUrl: 'https://www.airbnb.com/rooms/1375539035192677827',
  },
  {
    id: 'LEEV-16',
    airbnbId: '655753195260415817',
    title: 'Cima A14 - Vista increíble, Soha Panorama',
    airbnbUrl: 'https://www.airbnb.com/rooms/655753195260415817',
  },
  {
    id: 'LEEV-17',
    airbnbId: '1746506475083547797',
    title: 'Escala Moderna - A 4 min del aeropuerto',
    airbnbUrl: 'https://www.airbnb.com/rooms/1746506475083547797',
  },
  {
    id: 'LEEV-18',
    airbnbId: '1064398121899183759',
    title: 'Propiedad LEEV-18',
    airbnbUrl: 'https://www.airbnb.com/rooms/1064398121899183759',
  },
  {
    id: 'LEEV-19',
    airbnbId: '1688728441025361991',
    title: 'Propiedad LEEV-19',
    airbnbUrl: 'https://www.airbnb.com/rooms/1688728441025361991',
  },
  {
    id: 'LEEV-20',
    airbnbId: '660682595089721584',
    title: 'Propiedad LEEV-20',
    airbnbUrl: 'https://www.airbnb.com/rooms/660682595089721584',
  },
  {
    id: 'LEEV-21',
    airbnbId: '1719601019298342905',
    title: 'Propiedad LEEV-21',
    airbnbUrl: 'https://www.airbnb.com/rooms/1719601019298342905',
  },
  {
    id: 'LEEV-22',
    airbnbId: '692030630299002134',
    title: 'Propiedad LEEV-22',
    airbnbUrl: 'https://www.airbnb.com/rooms/692030630299002134',
  },
  {
    id: 'LEEV-23',
    airbnbId: '1086948751039018652',
    title: 'Propiedad LEEV-23',
    airbnbUrl: 'https://www.airbnb.com/rooms/1086948751039018652',
  },
  {
    id: 'LEEV-24',
    airbnbId: '1015810667406770695',
    title: 'Propiedad LEEV-24',
    airbnbUrl: 'https://www.airbnb.com/rooms/1015810667406770695',
  },
  {
    id: 'LEEV-25',
    airbnbId: '792636543021249639',
    title: 'Propiedad LEEV-25',
    airbnbUrl: 'https://www.airbnb.com/rooms/792636543021249639',
  },
  {
    id: 'LEEV-26',
    airbnbId: '1351486858160113261',
    title: 'Propiedad LEEV-26',
    airbnbUrl: 'https://www.airbnb.com/rooms/1351486858160113261',
  },
  {
    id: 'LEEV-27',
    airbnbId: '1429711843610828548',
    title: 'Propiedad LEEV-27',
    airbnbUrl: 'https://www.airbnb.com/rooms/1429711843610828548',
  },
  {
    id: 'LEEV-28',
    airbnbId: '970200236153044741',
    title: 'Propiedad LEEV-28',
    airbnbUrl: 'https://www.airbnb.com/rooms/970200236153044741',
  },
  {
    id: 'LEEV-29',
    airbnbId: '559396609765907593',
    title: 'Propiedad LEEV-29',
    airbnbUrl: 'https://www.airbnb.com/rooms/559396609765907593',
  },
  {
    id: 'LEEV-30',
    airbnbId: '1674114200848615968',
    title: 'Propiedad LEEV-30',
    airbnbUrl: 'https://www.airbnb.com/rooms/1674114200848615968',
  },
  {
    id: 'LEEV-31',
    airbnbId: '1732107288892967637',
    title: 'Propiedad LEEV-31',
    airbnbUrl: 'https://www.airbnb.com/rooms/1732107288892967637',
  },
  {
    id: 'LEEV-32',
    airbnbId: '545498928051919866',
    title: 'Propiedad LEEV-32',
    airbnbUrl: 'https://www.airbnb.com/rooms/545498928051919866',
  },
];

export const whatsappPrimary = 'https://wa.me/18492148400';
export const whatsappPrefilled =
  'https://wa.me/18492148400?text=Hola%20Leev%20Luxury%20Stays%2C%20quisiera%20ayuda%20para%20encontrar%20una%20estad%C3%ADa.';

export const phonePrimary = '849-214-8400';
export const phoneSecondary = '849-357-5827';

export const instagramUrl = 'https://www.instagram.com/leev.do/';
export const airbnbHostUrl = 'https://es-l.airbnb.com/users/show/438497780';
