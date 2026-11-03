import type { Bilingual } from './properties';

export interface ServiceItem {
  id: string;
  tagline: Bilingual;
  description: Bilingual;
  ctaLabel: Bilingual;
  ctaHref: string;
  ctaType: 'anchor' | 'whatsapp';
  /** Replace with a real Leev photo path when available. */
  image?: string;
  imageAlt?: Bilingual;
}

export const services: ServiceItem[] = [
  {
    id: 'short-term',
    tagline: { es: 'Tu escapada, a tu manera.', en: 'Your getaway, your way.' },
    description: {
      es: 'Descubre apartamentos amueblados ideales para escapadas, viajes de trabajo y visitas a Santiago, República Dominicana. Disfruta de comodidad, privacidad y un espacio donde sentirte como en casa.',
      en: 'Discover furnished apartments designed for weekend escapes, business trips, and memorable visits to Santiago, Dominican Republic. Enjoy comfort, privacy, and a place that feels like home.',
    },
    ctaLabel: { es: 'Explorar propiedades', en: 'Explore Properties' },
    ctaHref: '#propiedades',
    ctaType: 'anchor',
    image: '/Captura_de_pantalla_2026-10-27_a_la(s)_10.28.15_a.m..png',
    imageAlt: { es: 'Escapada corta en Leev', en: 'Short-term stay at Leev' },
  },
  {
    id: 'long-term',
    tagline: { es: 'Siéntete en casa por más tiempo.', en: 'Feel at home for longer.' },
    description: {
      es: 'Encuentra un espacio amueblado para una estadía prolongada en Santiago. Explora opciones de alojamiento que se adapten a tus necesidades y disfruta de un lugar cómodo para instalarte.',
      en: 'Find a furnished space for an extended stay in Santiago. Explore accommodation options suited to your needs and enjoy a comfortable place to settle in.',
    },
    ctaLabel: { es: 'Consultar estadías largas', en: 'Ask About Long Stays' },
    ctaHref: 'whatsapp',
    ctaType: 'whatsapp',
    image: '/Captura_de_pantalla_2026-10-27_a_la(s)_10.28.56_a.m..png',
    imageAlt: { es: 'Estadía larga en Leev', en: 'Long-term stay at Leev' },
  },
  {
    id: 'assistance',
    tagline: { es: 'Atención personalizada en cada paso.', en: 'Thoughtful service, every step of the way.' },
    description: {
      es: 'Desde las consultas sobre reservas hasta la información de llegada, nuestro equipo te orienta durante el proceso para que puedas planificar tu estadía con mayor tranquilidad y facilidad.',
      en: 'From reservation inquiries to arrival information, our team helps guide you through the process so you can plan your stay with greater confidence and ease.',
    },
    ctaLabel: { es: 'Contactar', en: 'Contact Us' },
    ctaHref: 'whatsapp',
    ctaType: 'whatsapp',
    image: '/Captura_de_pantalla_2026-10-27_a_la(s)_10.29.10_a.m..png',
    imageAlt: { es: 'Atención personalizada Leev', en: 'Personalized assistance at Leev' },
  },
  {
    id: 'different-needs',
    tagline: { es: 'El espacio ideal para cada viaje.', en: 'The right space for your kind of stay.' },
    description: {
      es: 'Ya viajes solo, en pareja, en familia o por trabajo, explora los apartamentos disponibles y elige una opción según tus necesidades y las características de cada propiedad.',
      en: 'Whether you’re traveling solo, as a couple, with family, or for business, explore available apartments and choose an option based on your needs and each property’s features.',
    },
    ctaLabel: { es: 'Encuentra tu estadía', en: 'Find Your Stay' },
    ctaHref: '#propiedades',
    ctaType: 'anchor',
    image: '/Captura_de_pantalla_2026-10-27_a_la(s)_10.30.10_a.m..png',
    imageAlt: { es: 'Espacios para cada tipo de viaje', en: 'Spaces for every type of trip' },
  },
  {
    id: 'cleanliness',
    tagline: { es: 'Espacios impecables. Detalles que importan.', en: 'Fresh spaces. Thoughtful details.' },
    description: {
      es: 'Cada detalle importa. Valoramos los espacios limpios, ordenados y cuidadosamente preparados para ofrecerte una estadía acogedora y confortable.',
      en: 'Every detail matters. We value clean, orderly, and thoughtfully prepared spaces that help create a welcoming and comfortable stay.',
    },
    ctaLabel: { es: '', en: '' },
    ctaHref: '',
    ctaType: 'anchor',
    image: '/Captura_de_pantalla_2026-10-27_a_la(s)_10.30.22_a.m..png',
    imageAlt: { es: 'Espacios impecables en Leev', en: 'Impeccable spaces at Leev' },
  },
];

export interface PrincipleItem {
  title: Bilingual;
  description: Bilingual;
}

export const principles: PrincipleItem[] = [
  {
    title: { es: 'Limpieza impecable', en: 'Impeccable Cleanliness' },
    description: {
      es: 'Espacios limpios, ordenados y cuidadosamente preparados para recibirte.',
      en: 'Clean, orderly, thoughtfully prepared spaces that help you feel welcome.',
    },
  },
  {
    title: { es: 'Precios justos y transparentes', en: 'Fair, Transparent Pricing' },
    description: {
      es: 'Información clara sobre tarifas y condiciones, confirmada según cada propiedad y estadía.',
      en: 'Clear information about rates and conditions, confirmed for each property and stay.',
    },
  },
  {
    title: { es: 'Comodidad real', en: 'Genuine Comfort' },
    description: {
      es: 'Espacios amueblados pensados para que disfrutes de una estadía más cómoda.',
      en: 'Furnished spaces designed to make your time away from home more comfortable.',
    },
  },
  {
    title: { es: 'Atención personalizada', en: 'Personalized Assistance' },
    description: {
      es: 'Orientación y atención durante las consultas de reserva y el proceso de llegada.',
      en: 'Helpful guidance throughout the reservation inquiry and arrival process.',
    },
  },
  {
    title: { es: 'Información clara sobre reservas', en: 'Clear Reservation Information' },
    description: {
      es: 'Información clara sobre dónde consultar disponibilidad, confirmar detalles y realizar tu reserva.',
      en: 'Understand where to check availability, confirm details, and complete your reservation.',
    },
  },
];

export interface FaqItem {
  question: Bilingual;
  answer: Bilingual;
}

export const faqs: FaqItem[] = [
  {
    question: {
      es: '¿Cómo puedo reservar una propiedad de Leev?',
      en: 'How do I book a Leev property?',
    },
    answer: {
      es: 'Explora nuestras propiedades y selecciona el anuncio que mejor se adapte a tus necesidades. Te redirigiremos a su página de Airbnb para consultar los detalles y completar tu reserva a través de Airbnb.',
      en: 'Explore our properties and select the listing that suits your needs. You’ll be redirected to its Airbnb page to review the details and complete your reservation through Airbnb.',
    },
  },
  {
    question: {
      es: '¿Cómo puedo confirmar la disponibilidad?',
      en: 'How can I confirm availability?',
    },
    answer: {
      es: 'La disponibilidad y las tarifas dependen de la propiedad y de las fechas de tu viaje. Consulta el anuncio correspondiente en Airbnb para ver la información actualizada o contacta a Leev si necesitas orientación.',
      en: 'Availability and rates depend on the property and your travel dates. Check the individual Airbnb listing for the most current information, or contact Leev for assistance.',
    },
  },
  {
    question: {
      es: '¿Cuál es la diferencia entre una estadía corta y una larga?',
      en: 'What is the difference between a short-term and long-term stay?',
    },
    answer: {
      es: 'Las estadías cortas son ideales para visitas breves y escapadas, mientras que las largas están dirigidas a quienes necesitan alojamiento durante un período prolongado. Las tarifas y condiciones dependen de la propiedad y de la duración de la estadía.',
      en: 'Short-term stays are suited to brief visits and getaways, while long-term stays are intended for guests who need accommodation for an extended period. Rates and conditions depend on the property and the length of stay.',
    },
  },
];

/**
 * Replaceable gallery images.
 * Set each `src` to a real Leev photo path (e.g. "/images/gallery-1.jpg") to swap it in.
 * Leaving `src` unset renders a neutral placeholder.
 */
export interface GalleryItem {
  src?: string;
  alt: Bilingual;
}

export const galleryImages: GalleryItem[] = [
  { alt: { es: 'Espacio Leev 1', en: 'Leev space 1' } },
  { alt: { es: 'Espacio Leev 2', en: 'Leev space 2' } },
  { alt: { es: 'Espacio Leev 3', en: 'Leev space 3' } },
  { alt: { es: 'Espacio Leev 4', en: 'Leev space 4' } },
  { alt: { es: 'Espacio Leev 5', en: 'Leev space 5' } },
  { alt: { es: 'Espacio Leev 6', en: 'Leev space 6' } },
  { alt: { es: 'Espacio Leev 7', en: 'Leev space 7' } },
  { alt: { es: 'Espacio Leev 8', en: 'Leev space 8' } },
];
