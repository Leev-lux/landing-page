/**
 * Guía de Santiago.
 * Coordenadas y place_id tomados de Google Maps (noviembre 2026).
 * Las distancias se calculan en la página a partir de estas coordenadas,
 * así que para agregar un lugar basta con copiar su latitud/longitud.
 */

type Text = { es: string; en: string };

export interface GuideBuilding {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export type GuideCategory = 'see' | 'eat' | 'groceries' | 'pharmacy' | 'cars' | 'essentials';

export interface GuidePlace {
  name: string;
  category: GuideCategory;
  lat: number;
  lng: number;
  placeId: string;
  note: Text;
  /** Si se indica, el lugar solo se muestra para estos edificios. */
  only?: string[];
}

export const guideBuildings: GuideBuilding[] = [
  { id: 'soha-1', name: 'Soha Suites I', lat: 19.4572765, lng: -70.6814381 },
  { id: 'soha-2', name: 'Soha Suites II', lat: 19.4547923, lng: -70.6840784 },
  { id: 'soha-panorama', name: 'Soha Panorama', lat: 19.4594199, lng: -70.6906562 },
  { id: 'trinitaria', name: 'TH Trinitaria', lat: 19.4549332, lng: -70.6892935 },
  { id: 'barletta', name: 'Torre Barletta', lat: 19.4484904, lng: -70.6870296 },
  { id: '8-brothers', name: '8 Brothers Tower', lat: 19.3844517, lng: -70.6097652 },
];

const CENTRAL = ['soha-1', 'soha-2', 'soha-panorama', 'trinitaria', 'barletta'];
const AIRPORT = ['8-brothers'];

export const guideCategories: { id: GuideCategory; label: Text }[] = [
  { id: 'see', label: { es: 'Qué ver', en: 'Things to see' } },
  { id: 'eat', label: { es: 'Dónde comer', en: 'Where to eat' } },
  { id: 'groceries', label: { es: 'Supermercados', en: 'Groceries' } },
  { id: 'pharmacy', label: { es: 'Farmacias', en: 'Pharmacies' } },
  { id: 'cars', label: { es: 'Rent a car', en: 'Car rental' } },
  { id: 'essentials', label: { es: 'Esenciales', en: 'Essentials' } },
];

export const guidePlaces: GuidePlace[] = [
  // Qué ver
  {
    name: 'Monumento a los Héroes de la Restauración',
    category: 'see',
    lat: 19.4509278,
    lng: -70.6947761,
    placeId: 'ChIJRWCDdV7PsY4RQ-tuY-VvRec',
    note: {
      es: 'El símbolo de Santiago, con mirador y la mejor vista de la ciudad.',
      en: "Santiago's landmark, with a lookout and the best view of the city.",
    },
  },
  {
    name: 'Centro León',
    category: 'see',
    lat: 19.4641228,
    lng: -70.6708635,
    placeId: 'ChIJweuj7ILFsY4Rp8lQD7riDMk',
    note: {
      es: 'Museo de arte e identidad dominicana. Cierra los lunes.',
      en: 'Museum of Dominican art and identity. Closed on Mondays.',
    },
  },
  {
    name: 'Calle del Sol',
    category: 'see',
    lat: 19.4508028,
    lng: -70.7028919,
    placeId: 'ChIJ3Y48MFrPsY4RUe0EULpVsPg',
    note: {
      es: 'La calle comercial del centro histórico, ideal para caminar.',
      en: 'The main shopping street of the historic center, great for a walk.',
    },
  },
  {
    name: 'Estadio Cibao',
    category: 'see',
    lat: 19.4669188,
    lng: -70.7091531,
    placeId: 'ChIJs5gFD_vFsY4R7kd7JwIwWWs',
    note: {
      es: 'Casa de las Águilas Cibaeñas. Vale la pena un juego en temporada.',
      en: 'Home of the Águilas Cibaeñas. Worth a game during the season.',
    },
  },

  // Dónde comer
  {
    name: 'Campuno',
    category: 'eat',
    lat: 19.4524209,
    lng: -70.6756523,
    placeId: 'ChIJi2MWjWbPsY4RIBpj1ErKH6A',
    note: {
      es: 'Comida típica dominicana: mofongo, chivo y café de la casa.',
      en: 'Classic Dominican food: mofongo, goat and great coffee.',
    },
    only: CENTRAL,
  },
  {
    name: 'La Taberna de Pepe',
    category: 'eat',
    lat: 19.4567198,
    lng: -70.6961217,
    placeId: 'ChIJhZrBgfXFsY4Ra_clbq0nMVI',
    note: {
      es: 'Cocina mediterránea con música en vivo. Mejor reservar.',
      en: 'Mediterranean cooking with live music. Booking recommended.',
    },
    only: CENTRAL,
  },
  {
    name: 'Pascale',
    category: 'eat',
    lat: 19.4556091,
    lng: -70.6753523,
    placeId: 'ChIJh9EcVNHPsY4RUQ3pVzEOw58',
    note: {
      es: 'Cena elegante en Villa Olga, con piano en vivo.',
      en: 'Elegant dinner in Villa Olga, with live piano.',
    },
    only: CENTRAL,
  },
  {
    name: 'La Locanda – Los Jardines',
    category: 'eat',
    lat: 19.4623531,
    lng: -70.6883665,
    placeId: 'ChIJG2tdEozFsY4RLlGxDh6alZs',
    note: {
      es: 'Pizzas y pastas italianas, ambiente tranquilo.',
      en: 'Italian pizza and pasta in a relaxed setting.',
    },
    only: CENTRAL,
  },
  {
    name: 'Barceloneta',
    category: 'eat',
    lat: 19.4610612,
    lng: -70.6927077,
    placeId: 'ChIJgdk2_tXFsY4R2Nhh_y-YgJI',
    note: {
      es: 'Tapas y paella al estilo español.',
      en: 'Spanish-style tapas and paella.',
    },
    only: CENTRAL,
  },
  {
    name: 'Mr Grilled',
    category: 'eat',
    lat: 19.3876156,
    lng: -70.6082716,
    placeId: 'ChIJJz9DIwDRsY4R5o08edwMSis',
    note: {
      es: 'Abierto 24 horas, a la entrada del aeropuerto. Parrilla y hamburguesas.',
      en: 'Open 24 hours by the airport entrance. Grill and burgers.',
    },
    only: AIRPORT,
  },
  {
    name: 'Rancho Chito',
    category: 'eat',
    lat: 19.3770539,
    lng: -70.6079272,
    placeId: 'ChIJjxUtR-jRsY4Rje5og_TKO1I',
    note: {
      es: 'Comida típica en un ambiente de rancho, con música en vivo.',
      en: 'Traditional Dominican food in a ranch setting, with live music.',
    },
    only: AIRPORT,
  },
  {
    name: 'Campuno',
    category: 'eat',
    lat: 19.4524209,
    lng: -70.6756523,
    placeId: 'ChIJi2MWjWbPsY4RIBpj1ErKH6A',
    note: {
      es: 'El clásico de comida dominicana en la ciudad, vale el viaje.',
      en: "The city's Dominican-food classic, worth the drive.",
    },
    only: AIRPORT,
  },

  // Supermercados
  {
    name: 'Jumbo Ágora',
    category: 'groceries',
    lat: 19.4573059,
    lng: -70.6861803,
    placeId: 'ChIJXeIZZgDFsY4RZjV39i5xEhg',
    note: {
      es: 'Dentro del Ágora Mall, con tiendas, cine y restaurantes.',
      en: 'Inside Ágora Mall, with shops, cinema and restaurants.',
    },
    only: CENTRAL,
  },
  {
    name: 'Supermercados Nacional',
    category: 'groceries',
    lat: 19.4617794,
    lng: -70.6853257,
    placeId: 'ChIJMwSWQb7FsY4R3RlaKi7ElnU',
    note: {
      es: 'Amplio, con farmacia, panadería y productos importados.',
      en: 'Large store with pharmacy, bakery and imported goods.',
    },
    only: CENTRAL,
  },
  {
    name: 'Bravo',
    category: 'groceries',
    lat: 19.4534089,
    lng: -70.68561,
    placeId: 'ChIJnSsMSWLPsY4R_Hot089xdVw',
    note: {
      es: 'Buenos precios y gran variedad. Cerrado los domingos.',
      en: 'Good prices and wide selection. Closed on Sundays.',
    },
    only: CENTRAL,
  },
  {
    name: 'Supermercado Central',
    category: 'groceries',
    lat: 19.4610389,
    lng: -70.6845523,
    placeId: 'ChIJJ_CFLInFsY4RpfsGT0wlkpI',
    note: {
      es: 'Abierto 24 horas, con cafetería de comida criolla.',
      en: 'Open 24 hours, with a Dominican food cafeteria.',
    },
    only: CENTRAL,
  },
  {
    name: 'Mercafem',
    category: 'groceries',
    lat: 19.3761032,
    lng: -70.6059042,
    placeId: 'ChIJvX4GBgDRsY4RVXFQl70HsJk',
    note: {
      es: 'Supermercado de la zona, buena carnicería.',
      en: 'Local supermarket with a good butcher counter.',
    },
    only: AIRPORT,
  },
  {
    name: 'Veras Super Market',
    category: 'groceries',
    lat: 19.3760541,
    lng: -70.6007432,
    placeId: 'ChIJf_529urRsY4RrXC8IG5tIvY',
    note: {
      es: 'Abierto hasta tarde los fines de semana.',
      en: 'Open late on weekends.',
    },
    only: AIRPORT,
  },

  // Farmacias
  {
    name: 'Farmacia Carol',
    category: 'pharmacy',
    lat: 19.4681331,
    lng: -70.686775,
    placeId: 'ChIJuWS18JHFsY4RNAOkH2NMjUw',
    note: { es: 'Abierta 24 horas.', en: 'Open 24 hours.' },
    only: CENTRAL,
  },
  {
    name: 'Farma Extra La Moraleja',
    category: 'pharmacy',
    lat: 19.4583139,
    lng: -70.6726346,
    placeId: 'ChIJe327DIHFsY4RtCU0iDLEMdw',
    note: { es: 'Abierta 24 horas.', en: 'Open 24 hours.' },
    only: CENTRAL,
  },
  {
    name: 'Farmacia Farmatompal',
    category: 'pharmacy',
    lat: 19.3908746,
    lng: -70.609924,
    placeId: 'ChIJxSS91kTRsY4RUPoadCRyOtg',
    note: {
      es: 'La más cercana. Lunes a sábado; domingo hasta el mediodía.',
      en: 'The closest one. Monday to Saturday; Sunday until noon.',
    },
    only: AIRPORT,
  },
  {
    name: 'Farmacia GBC Santiago V',
    category: 'pharmacy',
    lat: 19.3988896,
    lng: -70.6287882,
    placeId: 'ChIJv2JnnybPsY4RTnkClx71xSo',
    note: {
      es: 'Abierta todos los días hasta las 10:00 p. m.',
      en: 'Open every day until 10:00 p.m.',
    },
    only: AIRPORT,
  },

  // Rent a car
  {
    name: 'AmeriRent Santiago',
    category: 'cars',
    lat: 19.4592731,
    lng: -70.6948348,
    placeId: 'ChIJCaQy1H3FsY4REgl44g7wcgI',
    note: {
      es: 'En la Av. 27 de Febrero, muy bien valorado. Lunes a viernes 8:00 a. m.–5:00 p. m.; sábado hasta el mediodía.',
      en: 'On Av. 27 de Febrero, highly rated. Mon–Fri 8:00 a.m.–5:00 p.m.; Saturday until noon.',
    },
  },
  {
    name: 'Alamo – Santiago Center',
    category: 'cars',
    lat: 19.457049,
    lng: -70.685775,
    placeId: 'ChIJx6xtDcLFsY4Ra1pMn5s7scg',
    note: {
      es: 'Dentro del Ágora Mall. Lunes a viernes 8:00 a. m.–5:00 p. m.; sábado hasta la 1:00 p. m.',
      en: 'Inside Ágora Mall. Mon–Fri 8:00 a.m.–5:00 p.m.; Saturday until 1:00 p.m.',
    },
  },
  {
    name: 'Rosario R Rent Car',
    category: 'cars',
    lat: 19.3873407,
    lng: -70.6070506,
    placeId: 'ChIJg4kRbW_FsY4RW5VBNzBbIxU',
    note: {
      es: 'Empresa local muy bien valorada, abierta 24 horas. Te recoge y te lleva al aeropuerto.',
      en: 'Highly rated local company, open 24 hours. Airport pick-up and drop-off.',
    },
  },
  {
    name: 'Sabaneta Rent Car',
    category: 'cars',
    lat: 19.4005814,
    lng: -70.6000772,
    placeId: 'ChIJCdqQMjXQsY4R8xXFM_lF8bA',
    note: {
      es: 'Frente al aeropuerto, abierta 24 horas. Reservas por WhatsApp.',
      en: 'Across from the airport, open 24 hours. Bookings via WhatsApp.',
    },
  },
  {
    name: 'Alamo, Enterprise y National – Aeropuerto',
    category: 'cars',
    lat: 19.4021957,
    lng: -70.6027661,
    placeId: 'ChIJz3C3PjHPsY4RknbyxFyvFcU',
    note: {
      es: 'Mostradores dentro del aeropuerto del Cibao, abiertos 24 horas.',
      en: 'Counters inside Cibao airport, open 24 hours.',
    },
  },
  {
    name: 'Hertz – Aeropuerto',
    category: 'cars',
    lat: 19.402158,
    lng: -70.602033,
    placeId: 'ChIJpQu7wTTQsY4RNKqd_5n2Hsk',
    note: {
      es: 'En el aeropuerto del Cibao, todos los días de 7:00 a. m. a 10:00 p. m.',
      en: 'At Cibao airport, every day from 7:00 a.m. to 10:00 p.m.',
    },
  },

  // Esenciales
  {
    name: 'Aeropuerto Internacional del Cibao (STI)',
    category: 'essentials',
    lat: 19.4021334,
    lng: -70.6019104,
    placeId: 'ChIJl0hj7DPQsY4RwkG9FooGVcw',
    note: {
      es: 'El aeropuerto de Santiago, con vuelos directos a EE. UU. y el Caribe.',
      en: "Santiago's airport, with direct flights to the US and the Caribbean.",
    },
  },
  {
    name: 'Hospital Metropolitano de Santiago (HOMS)',
    category: 'essentials',
    lat: 19.4361409,
    lng: -70.6610997,
    placeId: 'ChIJI5s_opvPsY4RMAXbbRXCwb0',
    note: {
      es: 'Hospital privado con emergencias 24 horas.',
      en: 'Private hospital with a 24-hour emergency room.',
    },
  },
  {
    name: 'Colinas Mall',
    category: 'essentials',
    lat: 19.4733475,
    lng: -70.7142835,
    placeId: 'ChIJw-nJU-LFsY4R5bskuj3IFsA',
    note: {
      es: 'Centro comercial con cine, tiendas y supermercado Jumbo.',
      en: 'Shopping mall with cinema, shops and a Jumbo supermarket.',
    },
  },
];
