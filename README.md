# Landing Page Coach Factory - Next.js

Una landing page de ventas directa para Coach Factory, programa Done-With-You de 30 días para coaches fitness. Construida con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- ✨ VSL (Video Sales Letter) prominente al inicio
- 💰 CTAs directos a checkout de Whop (no waitlist)
- 📱 Totalmente responsiva (mobile-first)
- ⚡ Optimizada para rendimiento con Next.js 14
- 🎨 Tipografía amarilla estilo script (Georgia italic)
- 📊 Secciones de prueba social y testimonios
- ❓ FAQ con acordeón interactivo
- 💳 Sección de garantías
- 🎯 Copywriting directo al dolor del coach fitness

## 🎯 Diferencias vs Versión Waitlist

Esta NO es una landing de waitlist. Es una página de ventas directa:

✅ **Botones de compra directos** en lugar de captura de email
✅ **VSL al inicio** para calentar al prospecto
✅ **Checkout de Whop** integrado en todos los CTAs
✅ **Tipografía amarilla** en minúsculas (estilo Monetise)
✅ **Triggers de venta** como "obtener acceso ahora", "unirme hoy mismo"

## 📦 Estructura del Proyecto

```
landing-waitlist/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página home
│   └── globals.css      # Estilos globales + tipografía amarilla
├── components/
│   ├── Hero.tsx         # VSL + CTA principal
│   ├── Stats.tsx        # Estadísticas del programa
│   ├── Problem.tsx      # Dolor del coach
│   ├── Solution.tsx     # Sistema de 4 pasos
│   ├── Features.tsx     # Qué incluye
│   ├── Testimonials.tsx # Resultados reales
│   ├── Pricing.tsx      # Garantía
│   ├── FAQ.tsx          # Preguntas frecuentes
│   └── CTA.tsx          # CTA final + footer
├── VSL_GUIDE.md         # 🔥 Guía para agregar tu video
├── COACH_FACTORY_GUIDE.md  # Estrategia y psicología
└── README.md            # Este archivo
```

## 🛠️ Instalación

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Pasos de Instalación

1. **Clona o descarga el proyecto**

```bash
cd landing-waitlist
```

2. **Instala las dependencias**

```bash
npm install
# o
yarn install
```

3. **Configura tu checkout de Whop**

El link de checkout ya está configurado en:
- `components/Hero.tsx`
- `components/Solution.tsx`
- `components/CTA.tsx`

**Actual:** `https://whop.com/checkout/plan_PGgPby3Msd1w8`

**Para cambiar a tu propio link:**
Busca y reemplaza en todos los archivos:
```typescript
const CHECKOUT_URL = 'https://whop.com/checkout/plan_TU_PLAN_ID'
```

4. **Agrega tu VSL (Video Sales Letter)**

Sigue la guía completa en `VSL_GUIDE.md`

Quick start:
```tsx
// En components/Hero.tsx, reemplaza el placeholder con:
<iframe
  src="https://www.youtube.com/embed/TU_VIDEO_ID"
  className="absolute inset-0 w-full h-full"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

5. **Ejecuta el servidor de desarrollo**

```bash
npm run dev
# o
yarn dev
```

6. **Abre tu navegador**

Navega a [http://localhost:3000](http://localhost:3000)

## 🎨 Personalización

### Colores y Estilos

Los colores principales están definidos en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Personaliza tus colores aquí
      }
    }
  }
}
```

**Tipografía Amarilla (estilo Monetise):**
La clase `.yellow-script` está definida en `globals.css`:
```css
.yellow-script {
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  text-transform: lowercase;
  font-weight: 600;
  color: #fbbf24; /* yellow-400 */
}
```

Úsala así:
```tsx
<span className="yellow-script">texto en amarillo cursiva</span>
```

### Contenido

Cada componente tiene su contenido específico para Coach Factory:

1. **Hero Section** (`components/Hero.tsx`):
   - VSL placeholder (agregar tu video)
   - CTA principal: "obtener acceso ahora"

2. **Stats** (`components/Stats.tsx`):
   - 30 días, 8 sesiones, 10-15 videos, garantía

3. **Problem** (`components/Problem.tsx`):
   - Dolor específico del coach fitness
   - 3 frustraciones clave

4. **Features** (`components/Features.tsx`):
   - Sistema Winner, sesiones 1:1, bonos

5. **Testimonials** (`components/Testimonials.tsx`):
   - Actualiza con testimonios reales + fotos
   - Usa casos específicos de coaches

6. **FAQ** (`components/FAQ.tsx`):
   - 8 preguntas pre-cargadas
   - Enfocadas en objeciones reales

### Checkout de Whop

Para actualizar el link de checkout globalmente:

**Opción 1: Búsqueda y reemplazo**
```bash
# En VS Code o tu editor, busca:
https://whop.com/checkout/plan_PGgPby3Msd1w8

# Y reemplaza con tu plan:
https://whop.com/checkout/plan_TU_PLAN_ID
```

**Opción 2: Variable de entorno**
Crea `.env.local`:
```
NEXT_PUBLIC_CHECKOUT_URL=https://whop.com/checkout/plan_TU_PLAN_ID
```

Luego usa en los componentes:
```typescript
const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL
```

## 📊 Analytics

Para agregar Google Analytics o similar:

1. Instala el paquete:
```bash
npm install @next/third-parties
```

2. Agrega en `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js y lo desplegará

### Netlify

```bash
npm run build
# Sube la carpeta .next y out/
```

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🎯 Optimizaciones de Conversión

Esta landing incluye elementos probados para aumentar conversión:

- ✅ Hero con CTA claro en los primeros segundos
- ✅ Prueba social con números específicos
- ✅ Sistema paso a paso fácil de entender
- ✅ Beneficios claros (no solo características)
- ✅ Testimonios con resultados específicos
- ✅ Garantía fuerte y clara
- ✅ FAQ para eliminar objeciones
- ✅ Multiple CTAs a lo largo de la página
- ✅ Urgencia y escasez (lista de espera cerrada)

## 📝 SEO

Para optimizar SEO:

1. **Actualiza metadata** en `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Tu Título - Keyword Principal',
  description: 'Descripción optimizada con keywords',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'Tu Título',
    description: 'Descripción para redes sociales',
    images: ['/og-image.jpg'],
  }
}
```

2. **Agrega structured data** para rich snippets

3. **Optimiza imágenes** usando Next.js Image component

## 🤝 Contribuciones

Si encuentras bugs o tienes sugerencias, por favor abre un issue.

## 📄 Licencia

Este proyecto es de código abierto bajo licencia MIT.

## 🔗 Recursos Adicionales

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

---

Hecho con ❤️ usando Next.js y Tailwind CSS
