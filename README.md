# 🏥 Hospitales MAC 2026 - Portal Corporativo

Plataforma de alta especialidad médica construida con los últimos estándares de performance, SEO técnico y diseño corporativo *"High-Tech Warmth"*. 

Este repositorio contiene el código fuente del portal frontend, integrado nativamente con **Sanity.io** como CMS Headless y **Mapbox** para entornos interactivos (geolocalizaciones 3D).

## 🚀 Arquitectura Técnica (Tech Stack Oficial)

* **Framework Base:** Next.js 16 (App Router) + React Compiler (Turbopack)
* **Estilizado & Grids:** Tailwind CSS (Especialidad: CSS Grids asimétricos y Carruseles CSS *snap-mandatory*)
* **Componentes Modulares & UI Access:** `shadcn/ui` + `lucide-react` (Íconos vectoriales dinámicos)
* **Animaciones Reactivas:** Framer Motion (Glassmorphism, Hover Layers, Smooth Scrolling)
* **Base de Datos / Gestor (CMS):** Sanity.io (Generación de esquemas dinámicos para Next.js Server Components)
* **Mapas Geolocalizados:** Mapbox GL JS (`react-map-gl` v8.x)

## 🏢 Estructura de Componentes Front-End (Home Page)

La arquitectura de la página de inicio fue dividida meticulosamente en 6 micro-bloques independientes (SSR Server Components y CSR Interactive Components) para facilitar la escalabilidad al nuevo equipo de desarrollo:

1. **`<Header />`**: (Layout.tsx) Navegación inteligente, "Sticky Top" con efecto *Glassmorphism* esmerilado, logo svg reestructurado y botones CTA.
2. **`<Hero />`**: Portada cinemática en full-width con barra tipo Spotlight para el buscador de especialidades.
3. **`<BentoServices />`**: Grid fluido tipo "Bento Asimétrico (Cols 4)" con 6 tarjetas de exhibición para especialidades de alta relevancia médica (Maternidad, Cardiología, Laboratorio, etc). Conectividad completa con Sanity via GROQ Query.
4. **`<TrustSignals />`**: Franja minimalista CSS-Grid que renderiza señales corporativas (Urgencias 24/7, Certificaciones) extrayendo un "String" de la BD para instanciar iconos dinámicos Lucide Component (`<Activity />`, `<Microscope />`).
5. **`<LocationsMap />`**: Módulo interactivo "Híbrido". Arquitectura tolerante a fallos: Si carece de token de mapa, colapsa en un hermoso "Grid de Sucursales". Con token: levanta el motor de *Mapbox* conectando el Sidebar "Slider scroll-snap" nativo inferior a animaciones *flyTo* en un canvas cinemático de ubicaciones geográficas. Soporte de Deep Links (GPS Universal) nativos para apps de usuario externo.
6. **`<Footer />`**: (Layout.tsx) Mega-enlace oscuro encapsulando la navegación profunda, marca y legales (Dark Mode natural).

## ⚙️ Configuración y Puesta en Marcha Rápida (Developer Onboarding)

Sigue estos pasos precisos si es la primera vez que configuras la web para iniciar el desarrollo localmente:

### 1. Requisitos Previos e Inicialización
Se requiere un moderno entorno de Node (Versión 18+ idealmente 20.x LTS).
Asegúrate de ejecutar desde la raíz de este proyecto:

```bash
# Instalar los paquetes base requeridos del árbol de dependencias
npm install
```

### 2. Variables de Entorno y Capa Geográfica
Clona o crea el archivo sensible `.env.local` en este root directory del proyecto. 
El **Bloque 4 (LocationsMap)** depende de la API de *Mapbox*. Tu token debería ir configurado de la siguiente manera:

```env
# Remplaza el valor con el Token Público o Secreto de tu cuenta de desarrollador
NEXT_PUBLIC_MAPBOX_TOKEN="pk.ey..."
```

### 3. Entorno de Desarrollo y Turbopack
Inicia el entorno del compilador acelerado de rust / React (Turbo).

```bash
npm run dev
```

La aplicación se enlazará localmente de manera segura en el puerto predeterminado clásico de Next.js:
[http://localhost:3000](http://localhost:3000)

## 📡 Estructura GROQ y Modelo de Sanity (Schemas)

Este proyecto está dotado con `next-sanity`. Entra al folder estructural de schemas de base de datos (`/src/sanity/schemaTypes/`) o despliega [http://localhost:3000/studio](http://localhost:3000/studio) para alimentar tu base de datos de producción con estos 4 esquemas clave:
*   `hero` (Títulos de página y background overlay)
*   `bentoService` (Grid paramétrico)
*   `trustSignal` (Nombre de icono lucide-react y descriptor)
*   `hospitalLocation` (Lat/Lng Objecto geoespacial geocódigable, Fotos de fachada corporativas).

---
*Arquitectado bajo los estrictos estándares visuales conceptualizados en `home.md` y `task.md` por el equipo de ingeniería Front-End 2026.*
