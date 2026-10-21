# 🛍️ Aura Bazar (`bazar-online`)

**Autor:** Roberto Alejandro Chagra Martínez  
**Tecnologías:** React 19, Vite 8, Lucide React, CSS3 Moderno (Glassmorphism & Metal Gradients)  
**Licencia:** MIT License (2026)

---

## 📋 Descripción General

**Aura Bazar (`bazar-online`)** es una tienda e-commerce interactiva tipo *Single Page Application (SPA)* especializada en moda vintage, estética Y2K, accesorios de colección y artículos retro para el hogar. Construida con **React 19** y empaquetada con **Vite 8**, ofrece una experiencia visual inmersiva con iluminación ambiental dinámica (*orbs*), tipografía editorial (*Playfair Display*), gradientes metálicos y un carrito de compras lateral (*drawer*) reactivo en tiempo real.

---

## ✨ Funcionalidades Principales

- **Catálogo Curado con Etiquetas Dinámicas (*Badges*)**: Visualización en cuadrícula responsiva (*CSS Grid*) de productos exclusivos con distintivos cromáticos (`Nuevo Drop`, `Único`, `Retro`, `Trending`, `Colección`) y calificación por estrellas.
- **Carrito de Compras Interactivo (*Slide-over Drawer*)**:
  - Apertura automática al agregar artículos o mediante el ícono de bolsa en la barra de navegación.
  - Contador numérico dinámico en tiempo real en el encabezado.
  - Eliminación individual de artículos e interfaz de cierre rápido con *overlay* traslúcido.
- **Navegación y Exploración Fluida**:
  - Barra de navegación superior con accesos de menú, búsqueda e indicador de estado del carrito.
  - *Hero Section* con desplazamiento suave (*smooth scroll*) directo hacia la colección (`#shop`).
- **Diseño Visual Y2K / Metálico**: Sistema de diseño basado en variables CSS personalizadas, efectos de desenfoque (*backdrop-filter*) y esferas luminosas animadas en segundo plano.

---

## 🗂️ Estructura del Proyecto

```text
bazar-online/
├── public/                     # Activos estáticos públicos
├── src/
│   ├── assets/                 # Recursos gráficos locales
│   ├── App.jsx                 # Componente raíz: catálogo, estado del carrito y vistas
│   ├── App.css                 # Hoja de estilos auxiliar de componente
│   ├── index.css               # Sistema de diseño global (variables CSS, animaciones, layout)
│   └── main.jsx                # Punto de montaje de React 19 (createRoot)
├── index.html                  # Plantilla HTML5 principal
├── package.json                # Manifiesto de dependencias y scripts NPM
├── vite.config.js              # Configuración del bundler Vite y plugin React
├── eslint.config.js            # Reglas de linting (ESLint 10 + React Hooks/Refresh)
├── requirements.txt            # Especificación de entorno y dependencias
├── DOCUMENTACION_TECNICA.md    # Arquitectura detallada y flujo técnico
├── .gitignore                  # Reglas de exclusión de Git
└── LICENSE                     # Licencia MIT
```

---

## 🚀 Instalación y Ejecución Local

### 1. Prerrequisitos
- **Node.js** `>= 18.0.0` (recomendado `v20+` LTS)
- **npm** `>= 9.0.0`

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo (con HMR)
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

### 4. Compilar para producción
```bash
npm run build
npm run preview
```

---

## 📄 Documentación Adicional

Consulta el archivo [`DOCUMENTACION_TECNICA.md`](file:///g:/Mi%20unidad/Drive.alumno.udg.mx/Proyectos/bazar-online/DOCUMENTACION_TECNICA.md) para revisar el diagrama de arquitectura de componentes, el modelo de datos del catálogo y el flujo de estado del carrito.
