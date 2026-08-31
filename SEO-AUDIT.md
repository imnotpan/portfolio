# Auditoría SEO, posicionamiento y conversión — IMNOTAPAN

**Fecha de auditoría:** 31 de agosto de 2026  
**Dominio evaluado:** `https://www.imnotapan.com` y `https://imnotapan.com`  
**Alcance:** web pública, HTML exportado existente y código actual del repositorio.  
**Naturaleza del documento:** auditoría y recomendaciones; no se implementó ninguna recomendación.

---

## 1. Resumen ejecutivo

La web tiene un producto creativo fuerte —una identidad visual reconocible, una cantidad importante de trabajo y señales de experiencia real—, pero actualmente **no convierte ese activo visual en visibilidad orgánica ni en un recorrido comercial suficientemente eficaz**.

El problema principal no es una etiqueta SEO aislada. Existe una **desalineación crítica entre la web pública y el estado actual del repositorio**:

- La web pública sirve una compilación anterior con solo Home y About operativas.
- Las rutas españolas y las páginas de proyecto presentes en el repositorio devuelven `404` en producción.
- `robots.txt` y `sitemap.xml` devuelven `404` en producción.
- Las versiones HTTPS con y sin `www` sirven el mismo HTML con estado `200`, sin redirección canónica.
- La Home pública no tiene un `<h1>`, declara `lang="es"` aunque su contenido inicial está en inglés y carece de canonical, hreflang, Open Graph, Twitter Cards y datos estructurados.
- About reutiliza el mismo title y description de la Home pública.

El repositorio ya contiene avances relevantes —metadatos únicos, canonical, hreflang, sitemap, robots, páginas de proyecto, Open Graph, Twitter Cards y JSON-LD—, pero estos beneficios **todavía no están publicados** y conservan varios defectos importantes que deberían resolverse antes o inmediatamente después de desplegar.

### Diagnóstico general

| Área | Web pública actual | Estado preparado en repositorio | Diagnóstico |
|---|---:|---:|---|
| Accesibilidad para buscadores | Muy baja | Media-alta | Producción no expone la arquitectura nueva |
| SEO on-page | Bajo | Medio-alto | Los fundamentos existen localmente, no en producción |
| Contenido posicionable | Bajo | Medio | Mucha obra visual, poco contenido indexable y pocas URLs |
| Autoridad y prueba comercial | Media | Media-alta | Hay señales fuertes, pero están enterradas o poco desarrolladas |
| Conversión a contacto | Baja-media | Media | Falta una vía principal de contacto desde Home y más reducción de fricción |
| Rendimiento potencial | Bajo-medio | Medio | Recursos visuales pesados, GIF grandes y caché pública deficiente |
| SEO internacional | Muy bajo | Medio | La arquitectura bilingüe existe, pero el idioma raíz sigue siendo incorrecto |

Estas valoraciones son diagnósticas, no puntuaciones de Google ni resultados de Lighthouse.

### Efectividad actual para conseguir trabajos y clientes

- **Tráfico referido o contactos que ya conocen al artista:** eficacia media. La obra y la identidad pueden convencer a alguien que llega predispuesto.
- **Captación orgánica de nuevos clientes:** eficacia baja. La web pública ofrece muy pocas páginas indexables y señales semánticas insuficientes.
- **Conversión de visitantes fríos:** eficacia baja-media. La Home invita a “ver trabajo”, pero no ofrece un CTA de contacto visible ni explica el siguiente paso comercial.
- **Estudios y recruiters de videojuegos:** eficacia media. El crédito de Hayaku y la amplitud visual ayudan, pero faltan casos con proceso, responsabilidades, pipeline, herramientas y resultados.
- **Marcas, agencias y música:** eficacia media-baja. La prueba de más de 27 millones de visualizaciones es potente, pero está en About o detrás del filtro de animación y no forma parte del argumento principal de la Home.
- **Mercado hispanohablante:** eficacia muy baja en producción. No existen URLs españolas públicas y el cambio de idioma actual no genera contenido indexable independiente.

---

## 2. Metodología y límites

Se realizaron comprobaciones de solo lectura sobre:

- estados HTTP de rutas públicas;
- variantes HTTP/HTTPS, con/sin `www` y barra final;
- HTML y metadatos realmente servidos;
- `robots.txt`, `sitemap.xml` y una URL inexistente de control;
- cabeceras de caché de HTML, JavaScript e imágenes;
- estructura App Router de Next.js 16.3.3;
- HTML estático existente en `out/`;
- metadata, contenido, enlazado, imágenes, responsive CSS, accesibilidad y CTAs del código actual;
- tamaño de los recursos del directorio `public/`.

No se modificó ni regeneró el build. La única escritura realizada fue este informe.

### Límites de la auditoría

No se dispuso de:

- Google Search Console o Bing Webmaster Tools;
- analítica web ni datos de conversiones;
- perfil de backlinks o herramienta externa de keywords;
- datos CrUX/Core Web Vitals de campo;
- una medición Lighthouse reproducible. La consulta a PageSpeed Insights no estuvo disponible por límite de cuota.

Por tanto, el informe no puede confirmar impresiones, clics, posiciones, consultas reales, leads, tasa de conversión, backlinks ni Core Web Vitals de usuarios reales. Una consulta de control `site:imnotapan.com` no devolvió resultados durante la auditoría; es una señal preocupante, pero **no sustituye** el informe de indexación de Search Console.

---

## 3. Inventario observado

### Producción pública

| URL | Estado | Observación |
|---|---:|---|
| `https://www.imnotapan.com/` | 200 | Home antigua |
| `https://imnotapan.com/` | 200 | Contenido idéntico al host `www` |
| `https://www.imnotapan.com/about` | 200 | About antigua |
| `https://www.imnotapan.com/es` | 404 | No publicada |
| `https://www.imnotapan.com/es/about` | 404 | No publicada |
| `https://www.imnotapan.com/work/celtic-fantasy-world` | 404 | Páginas de proyecto no publicadas |
| `https://www.imnotapan.com/robots.txt` | 404 | Devuelve la página 404 de Azure |
| `https://www.imnotapan.com/sitemap.xml` | 404 | Devuelve la página 404 de Azure |
| URL inexistente de control | 404 | Respuesta correcta, pero página genérica de Azure |

### Export estático actual del repositorio

El export existente contiene 12 URLs propuestas para sitemap:

- Home inglesa y española;
- About inglesa y española;
- ocho páginas de proyecto bajo `/work/[slug]`.

También contiene `robots.txt`, `sitemap.xml`, metadatos sociales y una 404 personalizada. Este inventario **no debe considerarse publicado** mientras las rutas públicas sigan respondiendo como se indica arriba.

---

## 4. Hallazgos críticos — P0

### P0.1 — La versión correcta no está desplegada

**Evidencia**

- Producción ofrece un title genérico: `Kevin Medina — Pixel Artist & Animator`.
- El repositorio/export actual ofrece titles específicos, rutas españolas y páginas de proyecto.
- `/es`, `/es/about`, `/work/...`, `/robots.txt` y `/sitemap.xml` responden `404` en producción.
- La respuesta pública indica una versión anterior, con `last-modified` del 27 de agosto de 2026.

**Impacto**

- Las mejoras SEO locales no tienen efecto real.
- Los buscadores no pueden indexar las páginas de proyecto ni las versiones en español.
- Los enlaces que apunten a las nuevas rutas terminan en 404.
- El dominio proyecta una arquitectura mucho más pequeña y débil de la que ya existe en el repositorio.

**Recomendación concreta**

Revisar el pipeline de despliegue y confirmar que el host público publica el `out/` correspondiente al commit aprobado, incluidos archivos anidados, `robots.txt`, `sitemap.xml`, 404 y recursos estáticos. Como el dominio responde desde Azure Static Web Apps pero el repositorio solo muestra configuración de Vercel, se debe aclarar cuál es el proveedor real y eliminar la ambigüedad del proceso de publicación.

**Criterio de aceptación**

- Las 12 URLs del sitemap responden `200`.
- `robots.txt` responde `200` con `text/plain`.
- `sitemap.xml` responde `200` con XML válido.
- Una URL inexistente responde `404` y muestra la 404 propia.
- Los metadatos del HTML público coinciden con el export aprobado.

### P0.2 — Duplicidad completa entre dominio con y sin `www`

**Evidencia**

- `https://www.imnotapan.com/` y `https://imnotapan.com/` responden `200`.
- El hash del HTML de ambas variantes fue idéntico.
- La web pública no incluye canonical.
- `http://imnotapan.com/` redirige primero a `http://www.imnotapan.com/` y después requiere otra redirección a HTTPS.

**Impacto**

- Dos URLs compiten por el mismo contenido.
- Señales de enlaces, rastreo e indexación pueden dividirse.
- El doble salto HTTP añade latencia y complejidad.
- Los canonicals preparados en el repositorio apuntan a `www`, pero no compensan completamente una mala normalización del host.

**Recomendación concreta**

Elegir `https://www.imnotapan.com` como host preferido —es el valor actual de `siteUrl`— y configurar redirecciones permanentes de un solo salto desde cualquier combinación alternativa hacia su URL equivalente en HTTPS + `www`.

**Criterio de aceptación**

- `https://imnotapan.com/*` devuelve `301` o `308` a `https://www.imnotapan.com/*`.
- Toda variante HTTP llega al destino HTTPS final en un único salto.
- Solo el host preferido responde `200`.

### P0.3 — Producción no ofrece robots ni sitemap

**Evidencia**

Ambos endpoints públicos devuelven `404` y HTML genérico de Azure.

**Impacto**

- La ausencia de `robots.txt` no bloquea por sí sola el rastreo, pero elimina la referencia al sitemap y una señal técnica básica.
- La ausencia del sitemap dificulta descubrir la nueva arquitectura, especialmente páginas con poco enlazado interno.
- Search Console no podrá procesar el sitemap esperado.

**Recomendación concreta**

Publicar los archivos ya generados, comprobar sus content-types y enviar `https://www.imnotapan.com/sitemap.xml` a Google Search Console y Bing Webmaster Tools.

**Criterio de aceptación**

- Ambos endpoints devuelven `200`.
- El sitemap solo contiene URLs canónicas que también devuelven `200`.
- Search Console informa que el sitemap fue leído correctamente.

### P0.4 — Señales on-page críticas ausentes en la web pública

**Evidencia**

La Home pública:

- no tiene `<h1>`;
- declara `<html lang="es">` mientras el contenido inicial está en inglés;
- no incluye canonical ni hreflang;
- no incluye Open Graph ni Twitter Cards;
- no incluye JSON-LD;
- usa un selector de idioma controlado por JavaScript, sin una URL española pública.

About pública:

- reutiliza el mismo title y description de la Home;
- también declara `lang="es"` con contenido inglés.

**Impacto**

- Menor claridad temática y peor comprensión internacional.
- About compite con Home y puede aparecer con un snippet irrelevante.
- El contenido español no tiene una URL indexable propia.
- Las comparticiones sociales tienen previews pobres o inconsistentes.

**Recomendación concreta**

Publicar la metadata preparada y verificarla sobre el HTML servido, no solo en el código. Cada URL indexable debe tener un title, description, canonical, H1 e idioma coherentes; las parejas EN/ES deben tener hreflang recíproco y autocanónico.

---

## 5. SEO técnico del repositorio actual — P1 y P2

### P1.1 — `lang` sigue siendo incorrecto en las páginas españolas

**Evidencia**

`app/layout.tsx` fija `<html lang="en">`. El export actual de `/es` y `/es/about` también genera `<html lang="en">`; añadir `lang="es"` al `<main>` no corrige el idioma principal del documento.

**Impacto**

- Señal internacional inconsistente con title, description y hreflang.
- Peor comportamiento de lectores de pantalla, traducción y clasificación lingüística.

**Solución propuesta**

Hacer que el atributo del elemento `<html>` dependa de la ruta/locale mediante una estructura de layouts compatible con la versión actual de Next.js. Mantener `en` en `/` y `/about`; usar `es` en `/es` y `/es/about`.

### P1.2 — Las páginas de proyecto están casi huérfanas

**Evidencia**

- Las tarjetas de la galería son botones, no enlaces.
- El enlace a `/work/[slug]` solo aparece después de abrir el lightbox de un mockup.
- La Home renderiza inicialmente la categoría `PERSONAJES`; los mockups y sus enlaces no están en el HTML inicial.
- El sitemap permite descubrir las páginas, pero no transmite el mismo contexto ni autoridad que un enlace interno visible.

**Impacto**

- Descubrimiento y distribución de PageRank interno deficientes.
- Menor asociación entre la Home, los servicios y cada caso de estudio.
- El usuario necesita varias interacciones para llegar al contenido que mejor puede convertir.

**Solución propuesta**

Convertir cada proyecto con página propia en un enlace rastreable visible desde la galería o añadir una sección “Selected case studies” con enlaces directos, títulos y una breve propuesta de valor. Mantener el lightbox como mejora visual, no como única puerta de entrada.

### P1.3 — El contenido de categorías depende de estado cliente

**Evidencia**

Characters es el filtro inicial. Animations, Mockups, Environments e Illustration se insertan al cambiar estado en el cliente; el contenido no forma parte de la representación inicial relevante de Home.

**Impacto**

- Los buscadores reciben inicialmente una visión sesgada hacia personajes.
- La prueba comercial de animación —incluidos 26M+ y 1.3M+ views— queda enterrada.
- No existen URLs indexables para las intenciones de servicio principales.

**Solución propuesta**

Renderizar una selección representativa y semántica de todas las capacidades en Home. Para objetivos de posicionamiento, crear páginas o secciones enlazables estables para Character Art, Environment/Tileset Art, Pixel Animation y Game Art Mockups.

### P1.4 — SEO internacional incompleto

**Aspectos positivos**

- Hay canonicals y hreflang EN/ES recíprocos para Home y About.
- El sitemap replica las alternates.

**Problemas**

- `html lang` incorrecto en español.
- No hay versiones españolas de los ocho proyectos.
- Desde la Home española, los proyectos llevan a páginas exclusivamente inglesas sin advertencia ni alternate.
- La redacción española de About omite numerosas tildes: “tambien”, “musica”, “interes”, “produccion”, “formacion”, “Ingenieria”, “artistico”, “tecnico”, “mas”; también aparecen etiquetas como “SOBRE MI”, “ILUSTRACION” y “ANIMACION”.
- El asunto del mailto español permanece en inglés.

**Solución propuesta**

Corregir primero idioma y calidad editorial. Después decidir explícitamente si los proyectos serán solo ingleses o bilingües. Si se traducen, cada pareja debe tener canonical propio, hreflang recíproco y contenido realmente localizado; no crear traducciones superficiales solo para ampliar URLs.

### P1.5 — Open Graph no está preparado para maximizar el CTR social

**Evidencia**

- Home y páginas generales usan una imagen cuadrada de `384 × 384`.
- La tarjeta declarada es `summary_large_image`, pensada para formato horizontal grande.
- Los proyectos reutilizan la propia obra con relaciones de aspecto muy variables y sin una plantilla consistente.

**Impacto**

- Recortes impredecibles y previews poco profesionales.
- Menor reconocimiento de marca y menor CTR al compartir en X, LinkedIn, Discord, Slack u otras plataformas.

**Solución propuesta**

Diseñar una imagen general de `1200 × 630` y plantillas específicas por proyecto con nombre, especialidad, obra y marca. Validar cada URL con los depuradores de las plataformas.

### P1.6 — Datos estructurados útiles pero incompletos o mal modelados

**Aspectos positivos**

- Existe WebSite JSON-LD.
- About inglesa incluye identidad, ocupación, imagen y perfiles sociales.

**Problemas**

- About modela el mismo nodo como `ProfilePage` y `Person`; semánticamente es preferible una `ProfilePage` cuyo `mainEntity` sea `Person`.
- About española no recibe el esquema específico definido en `app/about/layout.tsx`.
- Las páginas de proyecto no usan `CreativeWork` o `VisualArtwork`.
- No hay breadcrumbs estructurados en los proyectos.

**Solución propuesta**

Separar ProfilePage y Person; reutilizar el Person consistente en ambos idiomas; añadir `CreativeWork`/`VisualArtwork` solo con datos verdaderos y visibles; añadir BreadcrumbList cuando exista una jerarquía visible equivalente.

### P1.7 — Conflicto de directivas robots en la 404 exportada

**Evidencia**

`out/404.html` contiene a la vez `noindex` e `index, follow`, debido a la metadata robots global y la metadata automática de la 404.

**Impacto**

Los buscadores suelen aplicar la directiva más restrictiva, pero la salida es contradictoria y evitable.

**Solución propuesta**

No declarar `index, follow` globalmente si crea conflictos con páginas especiales; comprobar que la 404 final contiene únicamente una directiva inequívoca `noindex` y responde `404`.

### P2.1 — Sitemap sin fechas de modificación

El sitemap del repositorio incluye las URLs y las imágenes de proyecto, lo cual es positivo, pero no incluye `lastmod`. `changefreq` y `priority` aportan poco a los principales buscadores si no se acompañan de señales reales.

**Solución propuesta:** añadir fechas de modificación auténticas y actualizarlas solo cuando cambie materialmente el contenido. No usar la fecha de cada build para fingir frescura.

### P2.2 — Titles y descriptions preparados son mejorables

Medidas del export actual:

- Home EN: title 57 caracteres; description 189.
- Home ES: title 67; description 193.
- About EN: title 56; description 131.
- About ES: title 64; description 151.
- Varios proyectos tienen titles de 60–63 caracteres.

La longitud visible depende de píxeles y dispositivo, no de una cifra rígida, pero las descriptions de Home probablemente se truncarán y algunos titles compiten con un sufijo largo.

**Solución propuesta:** priorizar intención y beneficio en los primeros 50–60 caracteres, reducir redundancias y redactar descriptions de aproximadamente 140–160 caracteres con diferenciación real entre páginas.

### P2.3 — Falta verificación y medición visible en el repositorio

No se encontraron etiquetas o integraciones visibles de Search Console, Bing Webmaster Tools ni analítica de uso/conversión. Una verificación DNS podría existir fuera del repositorio, por lo que debe confirmarse.

**Solución propuesta:** verificar ambas herramientas de webmaster y medir al menos clics de email, clics de CTA, aperturas de proyecto, reproducciones, envío de formulario y cambios de idioma. Definir un lead cualificado como conversión principal.

---

## 6. Rendimiento y experiencia técnica

### P1.8 — Caché pública excesivamente corta

**Evidencia en producción**

- HTML, JavaScript con hash e imágenes responden `cache-control: public, must-revalidate, max-age=30`.
- Incluso los recursos versionados solo pueden reutilizarse durante 30 segundos.

**Impacto**

- Visitas repetidas descargan o revalidan recursos innecesariamente.
- Mayor latencia y transferencia, especialmente relevante en un portfolio visual.

**Solución propuesta**

- HTML: caché corta con revalidación, según el flujo de despliegue.
- Recursos con hash de `/_next/static/`: caché larga, idealmente un año e `immutable`.
- Imágenes versionadas o con estrategia de invalidación: caché larga.

### P1.9 — Biblioteca visual pesada y GIF de gran tamaño

**Evidencia del repositorio**

- `public/` ocupa aproximadamente 98 MB.
- `public/images/` ocupa aproximadamente 88 MB.
- Los originales de `public/characters/` suman aproximadamente 9.2 MB.
- Sus thumbnails todavía suman aproximadamente 1.9 MB.
- El directorio completo de thumbnails suma aproximadamente 13 MB.
- Existe un GIF original de entorno de aproximadamente 9.4 MB y una versión thumbnail de aproximadamente 6.8 MB.
- Un GIF representativo servido en producción pesa aproximadamente 488 KB.

Estos tamaños no equivalen al peso inicial de una página porque existe lazy loading, pero aumentan notablemente el coste al recorrer la galería.

**Solución propuesta**

- Sustituir animaciones GIF grandes por WebM/MP4 con poster cuando no se necesite el comportamiento propio de GIF.
- Usar WebP/AVIF para imágenes estáticas cuando se conserve la fidelidad de pixel art.
- Generar thumbnails realmente ajustados al tamaño renderizado.
- Mantener el original solo para el lightbox o la página de detalle.
- Definir un presupuesto por recurso y por vista antes de regenerar.

### P1.10 — Demasiados preloads visuales en la cabecera

La Home pública precarga seis imágenes del hero. Precargar todos los personajes y logos puede competir con CSS, fuentes y el recurso LCP.

**Solución propuesta:** identificar mediante Lighthouse cuál es el LCP real y precargar únicamente el recurso verdaderamente crítico. El resto debe cargar de forma normal o diferida.

### P1.11 — Export estático sin optimización dinámica de imágenes

`next.config.ts` usa `output: "export"` y `images.unoptimized: true`. Es coherente con un host estático sin `/_next/image`, pero obliga a realizar toda la optimización en build o mediante CDN.

**Solución propuesta:** mantener el export estático solo si el pipeline genera variantes responsivas optimizadas; de lo contrario, usar un CDN de imágenes o un despliegue que soporte optimización. No depender de imágenes originales grandes como recurso final.

### P2.4 — Riesgo de CLS en imágenes decorativas del hero

Varios `<img>` del hero no declaran `width` y `height`. El logo central reserva proporción mediante CSS, pero los runners laterales dependen de su carga y del layout CSS.

**Solución propuesta:** reservar dimensiones/aspect-ratio explícitos para todos los elementos visuales principales y confirmar CLS en móvil y escritorio.

### Objetivos de rendimiento recomendados

Después del despliegue, medir móvil y escritorio con Lighthouse y datos de campo. Objetivos en percentil 75:

- LCP ≤ 2,5 s;
- INP ≤ 200 ms;
- CLS ≤ 0,1;
- ausencia de recursos visuales individuales desproporcionados para su tamaño renderizado;
- caché larga para assets versionados.

No se debe afirmar que la web cumple o incumple hoy estos Core Web Vitals sin datos de campo.

---

## 7. Contenido y posicionamiento orgánico

### Fortalezas actuales

- Posicionamiento profesional comprensible: Pixel Artist & Animator.
- Identidad IMNOTAPAN diferenciable y memorable.
- Especialización visual coherente.
- Experiencia actual en `Hayaku! Island of Darkness`.
- Prueba cuantitativa fuerte: trabajos con más de 27 millones de visualizaciones combinadas.
- Nombres reconocibles en música y creación digital.
- Oferta aplicable a videojuegos, marcas, música y producciones digitales.
- Ocho URLs de proyecto ya preparadas en el repositorio.

### P1.12 — Los casos de estudio son demasiado delgados

Cada página de proyecto contiene básicamente:

- un título;
- una descripción genérica breve;
- el mismo rol “Pixel Artist & Animator”;
- una lista corta de servicios;
- una sola imagen;
- un CTA por email.

Faltan, cuando sean publicables:

- cliente o tipo de cliente;
- fecha y contexto;
- objetivo o problema;
- alcance y entregables;
- responsabilidad exacta;
- restricciones técnicas;
- proceso, iteraciones y decisiones;
- herramientas y pipeline;
- colaboración con equipo;
- varias imágenes, detalles o fases;
- resultado cuantitativo o cualitativo;
- enlace al producto publicado;
- crédito verificable o testimonio.

**Impacto**

El contenido demuestra estilo, pero no demuestra con suficiente profundidad cómo trabaja Kevin, qué problema resuelve ni qué riesgo elimina para un cliente. También limita el número de consultas long-tail por las que cada proyecto puede posicionarse.

**Solución propuesta**

Convertir los mejores 4–6 proyectos en casos de estudio completos y diferentes. Priorizar proyectos reales con resultado verificable frente a mockups sin contexto comercial.

### P1.13 — Solo los mockups tienen páginas propias

Characters, Environments, Illustrations y los proyectos musicales de animación no tienen URLs de detalle. Esto desaprovecha las áreas con mayor demanda comercial y las pruebas de autoridad más fuertes.

**Solución propuesta:** crear páginas únicamente para piezas con suficiente historia, evidencia y demanda de búsqueda; en especial Hayaku, Minina/Carre & Spreen, Marcianeke y uno o dos ejemplos fuertes de character animation/environment art.

### P1.14 — Arquitectura de intención demasiado plana

La Home intenta cubrir a la vez juegos, marcas, música, personajes, animación, entornos, mockups e ilustración. Los filtros no crean superficies indexables.

**Oportunidades de intención**

| Intención | Superficie recomendada | Evidencia que debería contener |
|---|---|---|
| Pixel artist for games | Home o página de servicio principal | Proyectos reales, rol, pipeline y CTA |
| Pixel art character designer | Servicio/categoría enlazable | Sprites, expresiones, turnaround, animación |
| Pixel art environment / tileset artist | Servicio/caso Hayaku | Tilesets, parallax, modularidad, producción |
| Pixel art animator | Servicio/casos musicales | Reels, entregables, views y proceso |
| Pixel art for music videos / brands | Landing o cluster de casos | Clientes, resultados, licencias y formatos |
| Artista pixel art para videojuegos | Versión española equivalente | Contenido localizado, no traducción literal débil |

**Solución propuesta**

Crear una arquitectura pequeña y de alta calidad: Home → servicios/capacidades → casos de estudio → contacto. Evitar páginas casi vacías o creadas solo para keywords.

### P1.15 — Propuesta de valor demasiado descriptiva

“Pixel Artist & Animator for Games, Brands & Music” explica qué hace, pero no qué obtiene el cliente ni por qué elegirlo frente a otro artista.

**Solución propuesta**

Complementar el rol con un beneficio comprobable: visuales con personalidad, legibilidad de gameplay, experiencia integrándose en producción, combinación de criterio artístico y formación técnica, y resultados/alcance de trabajos publicados. No afirmar beneficios que no puedan demostrarse.

### P2.5 — Falta contenido para reducir objeciones

No se explican claramente:

- tipos de encargos aceptados;
- disponibilidad y zona horaria;
- modalidad remota;
- proceso de briefing y entregas;
- tiempos habituales o cómo se cotiza;
- herramientas y formatos;
- revisiones;
- derechos/licencias;
- respuesta esperada tras contactar.

**Solución propuesta:** añadir un bloque conciso de proceso/FAQ o una página de servicios. La finalidad no es publicar tarifas obligatoriamente, sino reducir incertidumbre antes del contacto.

---

## 8. Conversión y captación de clientes

### P1.16 — La Home no tiene un CTA comercial principal

El CTA visible es `VIEW WORK`/`VER TRABAJO`, que desplaza al usuario dentro de la misma página. Para contactar hay que descubrir About o entrar en una página de proyecto.

**Impacto**

- El visitante convencido no tiene una acción comercial inmediata.
- Se añaden pasos innecesarios al embudo.
- La Home funciona como galería, no como página de captación.

**Solución propuesta**

Usar dos acciones complementarias en el hero y repetirlas tras la prueba principal:

1. primaria: `Start a project` / `Hablemos de tu proyecto`;
2. secundaria: `View selected work` / `Ver trabajo seleccionado`.

Añadir contacto persistente en navegación o footer sin convertir toda la interfaz en una llamada a la acción.

### P1.17 — Mailto como única vía de conversión

About y las páginas de proyecto dependen de enlaces `mailto:`. Esto falla o genera fricción cuando el usuario no tiene un cliente de correo configurado, especialmente en equipos compartidos o navegadores de escritorio.

**Solución propuesta**

Ofrecer una página o formulario breve con:

- nombre y email;
- empresa/proyecto;
- tipo de trabajo;
- plazo aproximado;
- rango de presupuesto opcional;
- mensaje;
- consentimiento y expectativas de respuesta.

Mantener el email visible como alternativa. Medir ambos caminos como conversiones.

### P1.18 — La mejor prueba social está enterrada

La experiencia en Hayaku aparece en Home, pero la cifra de 27M+ y los clientes musicales aparecen principalmente en About o al activar Animations.

**Solución propuesta:** colocar cerca del hero un bloque breve y verificable de credenciales —por ejemplo, proyecto actual, views combinadas y tipos de clientes— con enlaces a casos. No usar logos sin permiso.

### P1.19 — No hay testimonios ni validación del modo de trabajo

La web muestra resultados visuales, pero no evidencia cómo fue colaborar con Kevin, si cumplió plazos, cómo comunicó o cómo se integró en un equipo.

**Solución propuesta:** solicitar 2–4 testimonios específicos a clientes/colaboradores y acompañarlos de nombre, rol, proyecto y enlace verificable cuando exista autorización.

### P1.20 — Los proyectos no ofrecen navegación de continuidad

Las páginas de proyecto terminan en CTA, pero no muestran proyecto anterior/siguiente, proyectos relacionados, categoría ni breadcrumbs visibles.

**Impacto:** menor profundidad de sesión, menos descubrimiento y menor enlazado interno.

**Solución propuesta:** añadir navegación contextual y 2–3 casos relacionados antes del CTA.

### P2.6 — Perfiles sociales limitados

Solo se enlazan Instagram y Twitter. El perfil se denomina “Twitter” y usa `twitter.com`; conviene verificar si sigue siendo el canal correcto y activo. Para contratación profesional podrían ser más útiles LinkedIn, ArtStation, Behance, itch.io o una página de créditos, pero solo deben añadirse perfiles reales y mantenidos.

### P2.7 — Falta medición del embudo

No existe evidencia en el repositorio de medición de:

- clic en CTA principal;
- clic en email;
- inicio y envío de formulario;
- apertura de caso de estudio;
- reproducción de video;
- cambio de idioma;
- fuente del lead.

**Solución propuesta:** definir eventos y revisar mensualmente tráfico orgánico → caso visto → contacto iniciado → lead cualificado → proyecto ganado.

---

## 9. Accesibilidad y UX con impacto comercial

### P1.21 — Se eliminan todos los indicadores de foco

El CSS aplica `outline: none` y `box-shadow: none` globalmente a enlaces y botones, también en `:focus-visible`.

**Impacto**

- Usuarios de teclado no pueden identificar de forma consistente dónde están.
- Peor accesibilidad y menor capacidad de navegar/contactar.

**Solución propuesta:** restaurar un foco visible, contrastado y coherente para todos los controles. Los cambios de color pueden complementar, pero no deberían ser la única señal.

### P1.22 — Texto demasiado pequeño o comprimido en móvil

La descripción del hero puede bajar aproximadamente a 9,6 px efectivos y algunos bloques usan una tipografía pixel con line-height cercano a `1.02`.

**Impacto:** lectura difícil, menor comprensión de la propuesta y abandono en móvil.

**Solución propuesta:** elevar el tamaño mínimo del texto de contenido, aumentar interlineado y reservar las fuentes pixel más densas para títulos/acentos, no para párrafos largos.

### P2.8 — Movimiento sin preferencia de reducción

El hero usa animaciones continuas de logo, personajes, fondo y CTA; no se detectó una regla `prefers-reduced-motion`.

**Solución propuesta:** detener o reducir movimiento cuando el sistema lo solicite y evitar que múltiples animaciones compitan con el mensaje comercial.

### P2.9 — Lightbox con detalles de accesibilidad pendientes

El lightbox declara `role="dialog"` y `aria-modal="true"`, lo cual es positivo, pero no se aprecia gestión completa de foco: mover el foco al abrir, atraparlo dentro y devolverlo al control de origen al cerrar.

**Solución propuesta:** completar el patrón de diálogo accesible y asociar un nombre al modal.

---

## 10. Aspectos positivos que conviene conservar

- HTTPS activo y HSTS presente.
- Normalización de barra final en las rutas públicas comprobadas.
- 404 con estado HTTP correcto, aunque todavía genérica de Azure.
- Arquitectura App Router estática y sencilla.
- Titles, descriptions, canonical y hreflang ya preparados para las rutas nuevas.
- Sitemap del repositorio incluye las ocho imágenes principales de proyecto.
- Alt text descriptivo en gran parte de la galería actual.
- Lazy loading en galería y videos de YouTube activados bajo interacción.
- Uso de thumbnails en la versión nueva para reducir el coste respecto a originales.
- `rel="noopener noreferrer"` en enlaces externos.
- Un H1 por página en el export nuevo.
- Identidad de marca consistente entre Kevin Medina e IMNOTAPAN.
- CTA de proyecto en las páginas de detalle.
- Pruebas reales de autoridad que pueden sostener una propuesta comercial más fuerte.

---

## 11. Plan priorizado

### P0 — Bloqueadores de indexación y despliegue

1. Alinear proveedor/pipeline y publicar la versión correcta.
2. Comprobar `200` en las 12 URLs previstas.
3. Publicar `robots.txt` y `sitemap.xml`.
4. Redirigir apex a `www` y normalizar todas las variantes en un salto.
5. Confirmar metadata, H1, canonical y hreflang en el HTML público.
6. Verificar Search Console/Bing y enviar sitemap.

### P1 — Mayor impacto en posicionamiento y leads

1. Corregir `<html lang>` en español y revisar la localización editorial.
2. Enlazar directamente las páginas de proyecto desde Home.
3. Hacer visibles/indexables todas las capacidades prioritarias.
4. Desarrollar 4–6 casos de estudio con contexto, proceso y resultados.
5. Añadir CTA de contacto primario en Home y una vía alternativa al mailto.
6. Subir la prueba de Hayaku, 27M+ views y clientes al recorrido principal.
7. Crear arquitectura de servicios/capacidades basada en intención real.
8. Preparar imágenes OG horizontales y corregir schema.
9. Optimizar GIF/imágenes y configurar caché larga de assets versionados.
10. Restaurar foco visible y mejorar legibilidad móvil.

### P2 — Consolidación y crecimiento

1. Añadir lastmod real al sitemap.
2. Refinar titles y descriptions.
3. Añadir navegación entre proyectos, relacionados y breadcrumbs.
4. Incorporar testimonios verificables y perfiles profesionales relevantes.
5. Explicar proceso, disponibilidad, formatos y expectativas de contacto.
6. Medir el embudo y revisar consultas/landing pages mensualmente.
7. Añadir reduced motion y completar accesibilidad del lightbox.

---

## 12. Orden recomendado de validación tras una futura implementación

1. **HTTP y hosting:** estados, redirecciones, host canónico, content-types y 404.
2. **Rastreo:** robots, sitemap, enlaces internos y ausencia de páginas huérfanas.
3. **Indexación:** inspección de URL y cobertura en Search Console.
4. **On-page:** title, description, H1, canonical, hreflang, idioma y schema.
5. **Social:** previews de Home, About y cada caso principal.
6. **Rendimiento:** Lighthouse móvil/escritorio y posteriormente CrUX de campo.
7. **Accesibilidad:** teclado, foco, contraste, tamaño de texto, reduced motion y diálogo.
8. **Conversión:** eventos, formulario/email, tasa de contacto y leads cualificados.

---

## 13. Conclusión

La web tiene suficiente calidad artística y credibilidad para funcionar como una herramienta comercial fuerte, pero hoy la infraestructura pública reduce drásticamente su alcance: **el sitio publicado no representa el estado actual del repositorio y no expone la arquitectura que podría posicionar y convertir**.

La primera decisión debe ser operativa: publicar correctamente, consolidar el dominio y recuperar rastreo/indexación. Después, el mayor retorno no vendrá de añadir más galerías, sino de transformar una selección de trabajos en casos de estudio rastreables, demostrar resultados y ofrecer un camino de contacto inmediato y medible.

No se recomienda implementar todas las ideas al mismo tiempo. El orden P0 → P1 → P2 evita invertir en contenido o CRO sobre una base que todavía no está accesible para buscadores ni usuarios en producción.
