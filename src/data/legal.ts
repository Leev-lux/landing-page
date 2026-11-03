import type { Bilingual } from '../data/properties';

export interface LegalSection {
  heading: Bilingual;
  body: Bilingual;
}

export const privacySections: LegalSection[] = [
  {
    heading: { es: 'Introducción', en: 'Introduction' },
    body: {
      es: 'Leev Luxury Stays (en adelante, "Leev") se compromete a proteger la privacidad de los visitantes de este sitio web. Esta política describe qué información recopilamos y cómo la utilizamos.',
      en: 'Leev Luxury Stays ("Leev") is committed to protecting the privacy of visitors to this website. This policy describes what information we collect and how we use it.',
    },
  },
  {
    heading: { es: 'Información que recopilamos', en: 'Information We Collect' },
    body: {
      es: 'Este sitio web no requiere que los visitantes creen una cuenta. No solicitamos directamente información personal a través de formularios. Cualquier información personal que compartas con Leev a través de WhatsApp u otros canales de contacto se gestionará según esta política.',
      en: 'This website does not require visitors to create an account. We do not directly request personal information through forms. Any personal information you share with Leev through WhatsApp or other contact channels will be handled in accordance with this policy.',
    },
  },
  {
    heading: { es: 'Enlaces a terceros', en: 'Third-Party Links' },
    body: {
      es: 'Nuestro sitio web contiene enlaces a listados de Airbnb y a otras plataformas de terceros. Leev no es responsable de las prácticas de privacidad de estos sitios externos. Te recomendamos revisar sus políticas de privacidad.',
      en: 'Our website contains links to Airbnb listings and other third-party platforms. Leev is not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies.',
    },
  },
  {
    heading: { es: 'Cookies y tecnologías similares', en: 'Cookies and Similar Technologies' },
    body: {
      es: 'Este sitio puede utilizar cookies o almacenamiento local para recordar tu preferencia de idioma. No utilizamos cookies con fines publicitarios de terceros.',
      en: 'This site may use cookies or local storage to remember your language preference. We do not use cookies for third-party advertising purposes.',
    },
  },
  {
    heading: { es: 'Tus derechos', en: 'Your Rights' },
    body: {
      es: 'Puedes contactarnos en cualquier momento para solicitar información sobre los datos que podamos tener sobre ti o para solicitar su eliminación.',
      en: 'You may contact us at any time to request information about any data we may hold about you or to request its deletion.',
    },
  },
  {
    heading: { es: 'Cambios a esta política', en: 'Changes to This Policy' },
    body: {
      es: 'Podemos actualizar esta política de privacidad periódicamente. Te recomendamos revisar esta página para estar al tanto de cualquier cambio.',
      en: 'We may update this privacy policy periodically. We recommend reviewing this page to stay informed of any changes.',
    },
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: { es: 'Aceptación de los términos', en: 'Acceptance of Terms' },
    body: {
      es: 'Al acceder y utilizar este sitio web, aceptas los presentes términos y condiciones. Si no estás de acuerdo, te pedimos que no utilices el sitio.',
      en: 'By accessing and using this website, you agree to these terms and conditions. If you do not agree, please do not use the site.',
    },
  },
  {
    heading: { es: 'Naturaleza del sitio', en: 'Nature of the Website' },
    body: {
      es: 'Este sitio web es una página promocional informativa. No constituye una plataforma de reservas ni un sistema de pago. Todas las reservas y transacciones se realizan a través de Airbnb.',
      en: 'This website is an informational promotional page. It does not constitute a booking platform or a payment system. All reservations and transactions are carried out through Airbnb.',
    },
  },
  {
    heading: { es: 'Propiedad de las listings', en: 'Listing Accuracy' },
    body: {
      es: 'Los detalles de cada propiedad, incluida la disponibilidad, las tarifas y las condiciones, se confirman en el anuncio correspondiente de Airbnb. Leev no se hace responsable de discrepancias entre la información mostrada aquí y la publicada en Airbnb.',
      en: 'Property details, including availability, rates, and conditions, are confirmed on the corresponding Airbnb listing. Leev is not responsible for discrepancies between information shown here and that published on Airbnb.',
    },
  },
  {
    heading: { es: 'Uso aceptable', en: 'Acceptable Use' },
    body: {
      es: 'Te comprometes a utilizar este sitio web únicamente con fines lícitos y de manera que no infrinja los derechos de terceros ni restrinja su uso.',
      en: 'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use.',
    },
  },
  {
    heading: { es: 'Limitación de responsabilidad', en: 'Limitation of Liability' },
    body: {
      es: 'En la medida permitida por la ley, Leev no será responsable de ningún daño directo, indirecto o consecuente derivado del uso o la imposibilidad de uso de este sitio web.',
      en: 'To the extent permitted by law, Leev shall not be liable for any direct, indirect, or consequential damages arising from the use or inability to use this website.',
    },
  },
  {
    heading: { es: 'Cambios a estos términos', en: 'Changes to These Terms' },
    body: {
      es: 'Podemos modificar estos términos en cualquier momento. La versión vigente será la publicada en esta página.',
      en: 'We may modify these terms at any time. The current version will be the one published on this page.',
    },
  },
];
