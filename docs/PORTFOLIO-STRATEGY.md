# Estrategia del portfolio — IMNOTAPAN (octubre 2026)

Documento de decisiones del rediseño. Complementa `SEO-AUDIT.md` (estado anterior).

## 1. Qué dice la investigación

**Cómo revisan los compradores**
- Directores de arte y recruiters dedican **30–60 segundos** por portfolio; ven decenas al día. La primera pieza debe ser la mejor, no la más reciente, y dejar claro el foco ([ArtStation Magazine — GDC "Killer Portfolio"](https://magazine.artstation.com/2021/07/9-portfolio-tips-for-game-artists-2021/), [Game Industry Career Guide](https://www.gameindustrycareerguide.com/artist)).
- Piden **trabajo en contexto de juego** ("no contrato a nadie sin trabajo real-time"): sprites dentro de escenas, mockups de gameplay, assets listos para producción y conciencia de pipeline ([ArtStation 2019](https://magazine.artstation.com/2019/03/games-portfolio-top-10/)).
- **Curaduría**: 3–5 piezas pulidas pesan más que 10 a medias; una pieza "ok" baja la media ([ArtStation](https://magazine.artstation.com/2021/07/9-portfolio-tips-for-game-artists-2021/), [Blizzard — Overwatch 2 AD](https://newsroom.activisionblizzard.com/p/blizzard-dion-rogers-videogames-jobs-portfolio)).
- Miniaturas con **alto contraste y siluetas claras**; presentación simple y contacto visible ([Keywords Studios](https://www.keywordsstudios.com/en/about-us/news-events/news/tips-for-building-an-outstanding-game-art-portfolio/)).
- **Agencias y marcas** buscan estilo consistente pero versátil, casos de estudio con problema → solución, proceso (WIP) y trabajo para marcas concretas ([Dribbble](https://content-hub.dribbble.com/career/illustration-portfolio-guide), [Raj Kaur](https://rajkaur.substack.com/p/illustrating-for-brands-tips-for)).

**Vocabulario que usan los clientes** (base para keywords): sprites, sprite sheets, tilesets, fondos/parallax, animación por cuadros, GIF/MP4, archivos listos para Unity/Godot/GameMaker, Aseprite ([CGHero](https://cghero.com/hire/pixel-artists), [Fiverr Pro](https://pro.fiverr.com/cat/creative/pixel-art-illustrator)).

**SEO de imágenes**: el hero suele ser el LCP; metadatos de imagen (creator/credit) y sitemap de imágenes ayudan a Google Images ([Google — image metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata)).

## 2. Posicionamiento y palabras clave

Propuesta: *"Pixel art y animación para videojuegos, marcas y música"* + prueba inmediata (26M+ reproducciones, Hayaku! en Steam, CNN Chile).

| Intención | EN | ES | Dónde vive |
|---|---|---|---|
| Rol principal | freelance pixel artist, pixel art animator | artista de pixel art freelance, animador pixel art | Home (title, H1, lead) |
| Juegos | sprite animation, character design, tileset / background artist, game mockups | animación de sprites, diseño de personajes, tilesets, fondos | Servicios + casos Hayaku, Nuclear Dome, Anomaly Rat, Tiny Golf |
| Música / marcas | pixel art music video, brand animation | videoclip pixel art, animación de marca | Sección animación + casos Minina, Esencia, Esa Noche, Zapping |
| Marca personal | Kevin Medina, IMNOTAPAN | Kevin Medina, IMNOTAPAN | Todas (title, schema Person, sameAs) |
| Local | pixel artist Chile | artista pixel art Chile | About, footer, schema `addressCountry: CL` |

Cada caso de estudio es una URL indexable bilingüe (`/work/…` y `/es/work/…`) con hreflang recíproco, OG propia, `CreativeWork` (+ `VideoObject` en videoclips) y breadcrumbs.

## 3. Arquitectura de la home (orientada al descubrimiento)

1. **Pantalla de título** — parallax del atardecer en bucle, logo grande al centro y personajes corriendo a los lados. Cada personaje es un enlace a su proyecto (tooltip al pasar). H1 de una línea + "PRESS START" + "Hablemos de tu proyecto".
2. **Ticker de credenciales** (pausable) — disponibilidad, 27M+ reproducciones, Hayaku!, CNN Chile.
3. **Animación para música y marcas** — la prueba más fuerte primero: 4 videoclips con cifras (miniaturas propias, el reproductor de YouTube solo carga al clic).
4. **Proyectos de juego y marca** — 5 casos (bento 2 + 3).
5. **Archivo** — 31 piezas curadas sin duplicados, 24 visibles + "Ver todo", filtros compartibles (`?f=characters`), visor con datos de animación (cuadros, fps, resolución nativa).
6. **Servicios con arte + formatos para marcas + proceso en 4 pasos + tipos de cliente.**
7. **Contacto** — sobre otra escena animada; el correo llega con una plantilla de brief.
8. **404 jugable** — minijuego de la rata de laboratorio.

## 4. Rendimiento

- `scripts/build-media.mjs` detecta la cuadrícula real de cada pieza (×3, ×6…) y la guarda a resolución nativa en WebP sin pérdida; el navegador la escala con `image-rendering: pixelated`. **67,6 MB → 6,3 MB** (p. ej. un GIF de 2,6 MB → 23 KB, píxeles idénticos).
- Los GIF de parallax pasan a MP4/WebM a 2× nativo (5,4 MB → 169 KB el del hero); se cargan solo en pantalla y el del hero espera al evento `load`.
- Animaciones con póster estático si el sistema pide movimiento reducido.
- Los originales viven en `assets/` y no se despliegan: export de 137 MB → 18 MB.
- Lighthouse (export local, throttling simulado): escritorio 100/100/100/100 en home, casos y About; móvil 92–98 en rendimiento según página, 100 en accesibilidad, buenas prácticas y SEO, CLS 0.

## 5. Flujo de trabajo

```bash
npm run media      # tras añadir/cambiar arte en public/ (requiere ffmpeg)
npm run og         # regenera las tarjetas Open Graph
npm run build      # export estático en out/
npm run validate   # comprueba lang, canonical, hreflang, OG, JSON-LD, 404…
```

Para añadir una pieza: agrega el archivo fuente a `public/`, su ruta a la lista de `scripts/build-media.mjs` si está fuera de las carpetas escaneadas, y una entrada en `artworks` (o un caso en `caseStudies`) de `app/data/work.ts`.

## 6. Crítica adversarial (ronda 1) y decisiones

Cuatro revisores independientes: director de arte de estudio AA, director creativo de agencia, auditor técnico SEO/rendimiento y jurado de diseño/UX.

| Hallazgo | Decisión |
|---|---|
| El hero era un titular genérico; la identidad (logo) quedaba pequeña | **Aceptado** — pantalla de título centrada, como el sitio original |
| El trabajo para música/marcas quedaba enterrado bajo el archivo | **Aceptado** — sección de videoclips justo después del hero |
| Piezas repetidas (Minina, Esencia, parallax, portadas) | **Aceptado** — archivo sin duplicados |
| Archivo de 50 piezas con relleno; uso de imagen de Haaland; piezas con fondo de transparencia horneado | **Aceptado** — curado a 31; se retiró el retrato de Haaland por derechos de imagen |
| Recortes que destruían hojas y piezas verticales | **Aceptado** — `fit: contain` sobre el color de borde de cada obra |
| Cifras inconsistentes (26M vs 27M); "2026" caducaría | **Aceptado** — 27M+ combinadas / 26M+ Minina; disponibilidad sin año |
| Sin términos comerciales; Godot prometido sin evidencia | **Aceptado** — línea de formatos para marcas; se quitó Godot; correo con plantilla de brief |
| Ticker sin pausa (WCAG 2.2.2); fuente pixel a tamaños fraccionarios | **Aceptado** — botón de pausa; tamaños múltiplos de 10 px |
| VideoObject sin `uploadDate`; títulos de casos sin "pixel art"; alt en inglés en páginas ES | **Aceptado** — fechas reales de YouTube, títulos con keyword, alt localizados |
| 120 MB de originales desplegados como duplicados | **Aceptado** — movidos a `assets/` |
| Títulos siempre visibles en el mosaico de escritorio | **Rechazado** — compite con el arte; se muestran al pasar/enfocar y siempre en móvil |
| Formulario de contacto propio | **Pospuesto** — el sitio es estático; el `mailto` con plantilla cubre el caso sin backend |
| Precios/plazos, testimonios, email con dominio, cliente real de los proyectos conceptuales, más material de Hayaku!, sprite sheets y capturas en motor | **Requiere al dueño** — no se inventan datos |

## 7. Verificación adversarial (ronda 2)

Un revisor independiente comprobó la v2 contra los hallazgos de la ronda 1. Puntuaciones: estudio 6,5 · agencia 7 · SEO/rendimiento 7,5 · diseño 7 (v1: diseño 6,5). Corregido después de esa revisión:

- Visor: el pixel art se mostraba a 1×; ahora usa el mayor zoom entero que cabe (p. ej. ×5 en escritorio, ×2 en móvil), el foco abre en "cerrar" y la navegación no entra en piezas ocultas.
- Sprite duplicado mal etiquetado (`enemy-a`) y piezas con fondo de transparencia horneado, retirados.
- Rodi Garrido presentado como intro de película (no videoclip); la cobertura de CNN Chile se atribuye a la película.
- Hayaku!: "próximamente en Steam" (Steam indica *Coming soon / To be announced*).
- Arte de servicios sin repetir el del hero ni el de los destacados; fuente pixel en WOFF2 (29 KB → 4,5 KB).

Lighthouse final (export local): escritorio 99–100 en rendimiento y 100 en el resto; móvil 92–99 en rendimiento, 100 en accesibilidad, buenas prácticas y SEO; CLS 0 en todas.

## 8. Pendiente del dueño (no se resuelve con código)

1. **Despliegue**: hoy `www.imnotapan.com` sirve otro sitio ("Independent Game Development & Technology Studio"). Publicar esta versión reemplazaría ese sitio: decidir antes de hacer push a `main`.
2. Redirección `imnotapan.com` → `www.imnotapan.com` en Azure (dominio por defecto) y alta en Search Console / Bing con el sitemap.
3. Email con dominio propio, testimonios, cliente real (o etiqueta "personal") de Nuclear Dome, Anomaly Rat y Tiny Golf, más material de Hayaku!, sprite sheets y capturas en motor, rangos de precio y plazos.
4. `.next/` está versionado en git: conviene sacarlo del repositorio y añadirlo a `.gitignore`.
