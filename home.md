# Arquitectura y Especificaciones: Home Page - Hospitales MAC 2026

## 1. Tech Stack Oficial
- **Framework:** Next.js (App Router, React Compiler activado).
- **Estilos:** Tailwind CSS.
- **UI/Componentes:** shadcn/ui (para accesibilidad y bases modulares).
- **Animaciones:** Framer Motion (transiciones fluidas y hover effects).
- **CMS (Headless):** Sanity.io (Fetch de datos desde Server Components para SEO óptimo).
- **Mapas:** Mapbox GL JS (React Map GL).
- **Íconos:** Lucide React (Grosor de línea: 1.5px, estilo outline elegante).
- **Tipografía:** `next/font/google` (Plus Jakarta Sans para Headings, Inter para Párrafos y UI).

## 2. Sistema de Diseño (High-Tech Warmth)
- **Fondo Principal:** Off-White / Snow (`bg-slate-50` o `#F5F7FA`).
- **Primario (Acción/Acentos):** Verde MAC (`#00B7B0`).
- **Secundario (Textos/Footer):** Gris Carbón (`#1A1A1A`).
- **Efectos:** Uso de *Glassmorphism* (fondos semitransparentes con `backdrop-blur`) en el buscador, header y tarjetas elevadas. Bordes redondeados (radios amplios tipo Apple/Bento).

## 3. Esquemas de Datos (Sanity.io)
Para que la página sea administrable, Sanity deberá proveer los siguientes esquemas de contenido:
1. `hero`: Título (H1), Subtítulo, URL del video/imagen de fondo.
2. `bentoService`: Título del servicio, descripción breve, URL de imagen, tamaño en el grid, link de destino.
3. `trustSignal`: Título del beneficio, nombre del ícono de Lucide.
4. `hospitalLocation`: Nombre (H3), Coordenadas (Lat/Lng), Dirección física, URL de foto de fachada.

## 4. Estructura de Componentes (Jerarquía de Bloques)

### Bloque 0: La Navegación Central (`<Header />`)
- **Top Bar (Menú Secundario - Utilidades):**
  - **UI:** Altura reducida (`h-10`), fondo Gris Carbón (`bg-[#1A1A1A]`), texto en gris muy claro (`text-xs font-medium text-gray-300`).
  - **Links Estratégicos:** Portal de Pacientes | Portal de Médicos | Facturación | Inversionistas.
- **Main Navbar (Menú Principal):**
  - **UI:** Altura estándar (`h-20`), fondo *Glassmorphism* (`bg-white/80 backdrop-blur-md border-b border-gray-100`). Debe ser pegajoso (`sticky top-0 z-50`) para acompañar el scroll. Logo corporativo a la izquierda.
  - **Links de Navegación (Centrados, usando `NavigationMenu` de shadcn/ui):**
    - **Especialidades:** (Dropdown tipo Mega-menú visual con íconos).
    - **Directorio Médico:** (Link a la ruta de búsqueda de doctores).
    - **Nuestros Hospitales:** (Link ancla hacia el Bloque 4).
    - **Check-ups y Promociones.**
  - **CTA Principal (Derecha):** Botón sólido en Verde MAC (`bg-[#00B7B0] hover:bg-[#009B95] text-white`). Texto: "Agendar Cita". A su lado, indicador rojo discreto para "Urgencias 24/7".
- **Comportamiento Móvil:** Menú hamburguesa que abre un panel lateral (Off-canvas) animado con `framer-motion`.

### Bloque 1: Hero Cinemático (`<Hero />`)
- **UI:** Imagen/Video con *overlay* oscuro al 40% (`bg-black/40`) para contraste. En el centro, el H1 y subtítulo (vienen de Sanity). 
- **Interacción:** Barra de búsqueda central con Glassmorphism (`bg-white/10 backdrop-blur-md border border-white/20`). Botón de buscar en Verde MAC.
- **SEO:** `<h1>` Centro de Alta Especialidad Médica, Imagenología y Laboratorio.

### Bloque 2: Bento Grid de Servicios (`<BentoGrid />`)
- **UI:** Cuadrícula CSS asimétrica (Grid). 
- **Interacción:** Tarjetas con `framer-motion` para escalar ligeramente al hacer hover (`whileHover={{ scale: 1.02 }}`) y revelar un resplandor sutil (box-shadow) en Verde MAC.
- **SEO:** `<h2>` Estudios Médicos y Servicios de Alta Demanda. `<h3>` para los nombres de servicios.

### Bloque 3: Señales de Confianza (`<TrustSignals />`)
- **UI:** Franja horizontal minimalista.
- **Contenido:** Íconos de Lucide React renderizados dinámicamente, en color Verde MAC. Textos en Gris Carbón.
- **SEO:** `<h2>` oculto visualmente (`sr-only`). `<h4>` para cada beneficio.

### Bloque 4: Mapa de Ubicaciones (`<LocationsMap />`)
- **UI:** Contenedor interactivo con Mapbox. Estilo del mapa: Escala de grises.
- **Interacción:** Marcadores personalizados en color `#00B7B0`. Al hacer clic, muestran un *popup* con la foto de la fachada en la "Hora Dorada".
- **SEO:** `<h2>` Encuentra tu Hospital MAC más cercano.

### Bloque 5: Mega Footer (`<Footer />`)
- **UI:** Fondo Gris Carbón (`bg-[#1A1A1A]`). Texto en gris claro (`text-gray-300`). 
- **Interacción:** Enlaces cambian a Verde MAC al hacer hover con transición suave.
- **SEO:** Listas organizadas con `<h4>` para las columnas.

## 5. Gestión de Assets y Placeholders (Fase 1)
- **Regla de Oro:** Prohibido usar imágenes genéricas grises, rectángulos vacíos o imágenes aleatorias descontextualizadas. El diseño debe lucir finalizado para las evaluaciones.
- **Origen de Imágenes:** Utilizaremos URLs de **Unsplash** de alta resolución, enfocadas estrictamente en el contexto médico moderno (`modern-hospital`, `doctor-technology`, `mri-scan`, `glass-architecture`).
- **Implementación Técnica:** - Toda imagen debe renderizarse obligatoriamente con el componente `next/image`.
  - Incluir clases `object-cover` y `object-center` para mantener la proporción.

## 6. Estrategia SEO Técnico y AIO (AI-Optimization)
Para garantizar que Hospitales MAC sea indexado correctamente por motores de búsqueda tradicionales y modelos de Lenguaje (LLMs):
- **Metadata API (Next.js):** Uso estricto de la API de metadatos de Next.js en `layout.tsx` y `page.tsx` para definir títulos dinámicos, descripciones, OpenGraph (Facebook/LinkedIn) y Twitter Cards.
- **Structured Data (JSON-LD):** - Toda página de ubicación debe inyectar un script de Schema.org tipo `Hospital` y `LocalBusiness`.
  - Debe incluir atributos clave: `name`, `address`, `telephone`, `geo` (coordenadas), `url`, y `logo`.
  - Menciones a entidades de salud reconocidas (ej. certificaciones) deben estar semánticamente vinculadas en el contenido.
- **Accesibilidad (A11y) como factor SEO:** Uso estricto de etiquetas `aria-label` en botones sin texto explícito, atributos `alt` descriptivos en TODAS las imágenes (pasando por el componente `next/image`), y contraste de color validado.

## 7. Reglas Estrictas para Agentes de Código
1. **Rendimiento:** Priorizar Server Components. Usar `'use client'` estrictamente solo en componentes interactivos (Framer Motion, Mapbox, Buscador).
2. **Modularidad:** Cada bloque de la Home debe ser un componente independiente dentro de `src/components/home/`.
3. **Tipado:** Todo el código debe usar TypeScript estricto e interfaces claras.
