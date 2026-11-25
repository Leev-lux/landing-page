# Leev Luxury Stays — landing page

Sitio de [Leev Luxury Stays](https://www.instagram.com/leev.do/): apartamentos amueblados en Santiago, Moca y La Romana.

Hecho con React, Vite y Tailwind CSS.

## Dónde se edita qué

| Qué | Archivo |
|---|---|
| Apartamentos (nombre, foto, habitaciones, enlace de Airbnb) | `src/data/properties.ts` |
| Teléfonos, WhatsApp, Instagram | `src/data/properties.ts` (al final) |
| Textos de la página (español e inglés) | `src/i18n/ui.ts` |
| Servicios, galería, preguntas frecuentes | `src/data/content.ts` |
| Privacidad y términos | `src/data/legal.ts` |
| Fotos y logo | carpeta `public/` |

## Publicación

El sitio se publica solo cada vez que hay cambios en la rama `main`
(Netlify lee `netlify.toml`; Vercel lee `vercel.json`).

Para probarlo en una computadora:

```
npm install
npm run dev
```
