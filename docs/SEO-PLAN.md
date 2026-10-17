# Plan SEO y keywords — imnotapan.com (2026-10-16)

## Diagnóstico (medido hoy)

- Producción ya sirve la versión actual: `/`, `/es`, `/about`, `/es/about`, 30 páginas `/work/*` → 200; `robots.txt` y `sitemap.xml` → 200; 404 propia con `noindex`.
- Lighthouse móvil (home): SEO 100, Best Practices 100, Accesibilidad 96 (contraste del kicker "Portfolio": 4.14:1).
- Title, description, canonical, hreflang, OG 1200×630, JSON-LD (WebSite, Person, ProfilePage, CollectionPage, CreativeWork+VideoObject, BreadcrumbList) presentes.
- **Problema real:** una búsqueda de marca ("imnotapan pixel art Kevin Medina") no devuelve el sitio → indexación nula o mínima. Además todas las URLs apuntan a la marca o a proyectos; ninguna página apunta a una intención de búsqueda de cliente ("hire pixel artist", "pixel art music video", "pixel art para videojuegos").
- `https://imnotapan.com/` responde 200 (duplicado del host www; el canonical lo mitiga).
- Descriptions de home > 200 caracteres (se truncan); descriptions de casos 69–118 (cortas, sin keyword de servicio).

## Mapa de keywords → URL

| URL | Keyword principal | Secundarias |
|---|---|---|
| `/` | freelance pixel artist (+ marca) | pixel art animator |
| `/es` | pixel artist freelance (Chile) | artista de pixel art, animador pixel art, pixel art Chile |
| `/pixel-art-music-videos` (nueva) | pixel art music video | pixel art animation for musicians, animated pixel art video, lyric/visualizer |
| `/es/pixel-art-music-videos` (nueva) | videoclip en pixel art | animación pixel art para músicos, video musical pixel art |
| `/game-pixel-art` (nueva) | pixel art for games | game pixel artist, sprite artist, tileset artist, pixel art environments |
| `/es/game-pixel-art` (nueva) | pixel art para videojuegos | artista de sprites, tilesets, escenarios pixel art |
| `/about` | Kevin Medina pixel artist | IMNOTAPAN |
| `/work/*` | nombre del proyecto + tipo | cliente + "pixel art" |

Criterio: solo intenciones que el portafolio demuestra con trabajo real (4 videos con 27M+ vistas; Hayaku! en Steam + 10 mockups de juego). Nada de páginas puerta vacías.

## Revisión adversarial (aplicada)

- Home deja de apuntar a "pixel art for games" (canibalizaba la página de juegos) y a "hire pixel artist" (dominada por Fiverr/Upwork).
- Las páginas de servicio llevan texto propio de proceso + stills, no repiten la sección de la home.
- Breadcrumb de servicio solo en casos que encajan (Zapping y los afiches no).
- Añadido: rendimiento — solo una imagen con `fetchPriority="high"` por página.
- Slugs ES: se mantiene `/es/<slug-en>` como el resto del sitio.
- Descartado: Service schema (sin rich result), renombrar "Game Art", `lastmod` (no hay fechas reales de modificación; inventarlas resta confianza).
- Prioridad realista: español + nombres de proyecto ("videoclip pixel art", "animador pixel art Chile", "Minina pixel art", "Hayaku pixel art") antes que términos genéricos en inglés.

## Cambios en código (aplicados)

1. **Dos páginas de servicio bilingües** (`/game-pixel-art`, `/pixel-art-music-videos` + `/es/...`): H1 con la keyword, intro corta, qué entrego (datos ya publicados en el sitio: formatos, Aseprite, derechos por brief), grid de casos reales enlazados, CTA email. Mismo lenguaje visual que los casos (minimal, arte primero). Sin inventar tarifas, plazos ni disponibilidad.
2. **Enlazado interno:** enlaces a las páginas de servicio en el footer, en la cabecera de las secciones de la home ("Pixel art work" → juegos, "Music videos" → videoclips) y en el breadcrumb de cada caso (Inicio › Servicio › Proyecto), visible y en JSON-LD.
3. **JSON-LD** `CollectionPage` + `ItemList` de casos + `BreadcrumbList` en cada página de servicio.
4. **Metadata:** home EN/ES con descripción ≤160 (ES con "Chile"); descriptions de casos = resumen + entregables cuando cabe en 160.
5. **OG:** declarar `width`/`height` de las imágenes OG.
6. **Sitemap:** añadir las 4 URLs nuevas con alternates.
7. **Rendimiento:** `PixelArt` distingue `priority` (alta prioridad, 1 por página) de `eager`.
8. (No-SEO) Contraste ≥4.5:1 en kicker de la banda y etiquetas de ficha → Lighthouse 100/100/100.

## Fuera del código (tareas del dueño — mayor impacto real)

0. **Antes que nada:** Azure Static Web Apps → Custom domains → `www.imnotapan.com` → *Set default*. Comprobar: `curl -sI https://imnotapan.com/` debe dar 301 a `https://www.imnotapan.com/`.
1. **Google Search Console** (propiedad de dominio por DNS) → enviar `https://www.imnotapan.com/sitemap.xml` → "Inspeccionar URL" + "Solicitar indexación" para `/`, `/es`, las 2 páginas de servicio y Minina.
2. **Bing Webmaster Tools** (importar desde GSC, 2 minutos).
3. **Azure Static Web Apps → Custom domains:** marcar `www.imnotapan.com` como *default* para que `imnotapan.com` redirija 301.
4. **Backlinks propios (los más fáciles y fuertes):** enlace a la web en las descripciones de los videos de YouTube (Minina 26M+, Marcianeke, Zapping, Esencia) y pedir a Carre & Spreen / Marcianeke / Le'Kays el crédito con link; perfil de itch.io, Instagram, X, Steam (créditos de Hayaku!), ArtStation/Behance/LinkedIn con link a `/game-pixel-art`.
5. **Comunidades (captación directa, no SEO: enlaces nofollow):** r/PixelArt, Lospec, r/gameDevClassifieds, r/HungryArtists [FOR HIRE].
6. Revisar GSC a las 4–6 semanas: consultas con impresiones y CTR bajo → ajustar titles.
