# 🎥 CÓMO AGREGAR TU VSL (VIDEO SALES LETTER)

## Ubicación del VSL

El VSL está en el Hero (primera sección) de la landing page.
**Archivo:** `components/Hero.tsx`

## Opciones para Agregar tu Video

### Opción 1: YouTube (Recomendado)

1. **Sube tu video a YouTube**
2. **Cópiala el ID del video**
   - URL: `https://www.youtube.com/watch?v=ABC123XYZ`
   - ID: `ABC123XYZ`

3. **Reemplaza el placeholder en Hero.tsx:**

```tsx
{/* Encuentra esta sección en Hero.tsx: */}
<div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 shadow-2xl">
  {/* REEMPLAZA todo el contenido con: */}
  <iframe
    src="https://www.youtube.com/embed/TU_VIDEO_ID"
    className="absolute inset-0 w-full h-full"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

**Parámetros útiles de YouTube:**
```
https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1&mute=1&controls=0
```
- `autoplay=1` → Se reproduce automáticamente
- `mute=1` → Inicia sin sonido (necesario para autoplay)
- `controls=0` → Oculta controles de YouTube
- `rel=0` → No muestra videos relacionados al final

### Opción 2: Vimeo (Más Profesional)

```tsx
<iframe
  src="https://player.vimeo.com/video/TU_VIDEO_ID?autoplay=1&loop=1&autopause=0"
  className="absolute inset-0 w-full h-full"
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
/>
```

### Opción 3: Wistia (Mejor para Marketing)

```tsx
<iframe
  src="https://fast.wistia.net/embed/iframe/TU_VIDEO_ID?autoplay=1"
  className="absolute inset-0 w-full h-full"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
/>
```

### Opción 4: Video Auto-Hospedado

```tsx
<video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/videos/coach-factory-vsl.mp4" type="video/mp4" />
</video>
```

**Nota:** Sube el video a la carpeta `/public/videos/`

## 📊 Mejores Prácticas para el VSL

### Duración Ideal
- **Landing Page:** 2-5 minutos
- **Webinar completo:** Ponlo en otra página

### Estructura Sugerida (3 minutos)

**0:00-0:20** - Hook
- "si eres coach fitness y odias depender del gimnasio..."
- Captura atención inmediata

**0:20-1:00** - Problema
- "estás cansado de cambiar tiempo por dinero"
- "ves a otros coaches ganando online y no sabes cómo"
- "tienes miedo de hacer el ridículo en redes"

**1:00-2:00** - Solución
- "coach factory es un programa done-with-you"
- "8 sesiones 1:1 en 30 días"
- "sistema winner de contenido"
- Muestra tu pantalla con Notion/ejemplos

**2:00-2:40** - Prueba Social
- "mira estos resultados de coaches como tú"
- Screenshots de testimonios/conversaciones

**2:40-3:00** - CTA
- "haz clic en el botón de abajo para unirte"
- "nos vemos del otro lado"

## 🎬 Tips de Grabación

### Equipo Necesario
- ✅ Celular moderno (iPhone 11+, cualquier Android reciente)
- ✅ Micrófono de solapa (~$20 en Amazon)
- ✅ Luz natural o aro de luz
- ❌ NO necesitas cámara profesional

### Configuración
1. **Graba en horizontal** (16:9)
2. **Resolución:** 1080p mínimo
3. **Audio:** Silencio total en la habitación
4. **Fondo:** Pared blanca o setup de gym profesional

### Plataformas de Edición Simple
- **CapCut** (gratis, móvil y desktop)
- **Descript** (transcripción automática + edición)
- **iMovie** (Mac)
- **DaVinci Resolve** (gratis, avanzado)

## 🎨 Thumbnail del Video

Si tu plataforma permite custom thumbnail:

**Elementos:**
- Tu foto (confianza, no sonrisa forzada)
- Texto: "para coaches fitness que ganan $500-$1,000/mes"
- Contraste alto (texto amarillo sobre fondo oscuro)
- NO uses flechas rojas ni clickbait

## 📈 Analytics del Video

### YouTube
Revisa en YouTube Studio:
- Retención promedio (meta: >50%)
- Punto de caída (dónde se van)
- Clicks en CTA

### Wistia/Vimeo
Métricas más detalladas:
- Heatmaps de reproducción
- % que llega al final
- Re-watches

## 🚨 Errores Comunes a Evitar

❌ Video muy largo (>7 minutos)
❌ Audio de mala calidad
❌ Demasiado texto en pantalla
❌ No mencionar el CTA
❌ Producción MUY pulida (se ve falso)
❌ Hablar muy lento o muy rápido

✅ Autenticidad > Perfección
✅ Audio claro > Video 4K
✅ Directo al grano

## 🔧 Troubleshooting

**"Mi video no se reproduce"**
- Verifica que el ID está correcto
- Checa que el video sea público (YouTube) o sin password (Vimeo)
- Abre la consola del navegador (F12) para ver errores

**"El video tarda mucho en cargar"**
- Usa una plataforma de hosting (YouTube/Vimeo)
- Si es auto-hospedado, comprime el video
- Considera lazy loading

**"Quiero que el video se vea más grande"**
- El tamaño actual está optimizado
- Si quieres cambiarlo, edita `max-w-4xl` a `max-w-5xl` o `max-w-6xl`

## 📝 Script Template para tu VSL

```
[0:00 - HOOK]
"si eres coach fitness y estás cansado de depender del gimnasio...
y odias perseguir clientes todo el tiempo...
esto es para ti."

[0:20 - AGITACIÓN]
"ves a coaches en instagram ganando online...
trabajando desde casa...
con clientes constantes...

y tú sigues atrapado en el ciclo de:
- si no estás presente, no ganas
- voz a voz que no escala
- miedo de hacer el ridículo en redes

sé exactamente cómo te sientes.
porque yo ayudo a coaches como tú todos los días."

[1:00 - SOLUCIÓN]
"coach factory es un programa done-with-you de 30 días
donde construimos JUNTOS tu sistema de contenido.

no es un curso grabado donde te dejo solo.
son 8 sesiones 1:1 en vivo conmigo.

te enseño mi sistema winner:
- cómo identificar videos que SÍ funcionan en fitness
- cómo analizarlos sin copiarlos
- cómo adaptarlos a TU oferta

construimos tus guiones juntos.
montamos tu página de ventas.
dejamos tu flujo completo:
contenido → conversación → cliente."

[2:00 - PRUEBA]
"mira estos resultados de coaches que ya pasaron por coach factory
[muestra screenshots]

no son influencers.
son coaches normales como tú.
que ahora tienen un sistema que funciona."

[2:40 - CTA]
"si estás listo para dejar de depender solo del gimnasio...
haz clic en el botón de abajo.

nos vemos del otro lado."
```

---

**Recuerda:** El VSL no tiene que ser perfecto. Tiene que ser AUTÉNTICO y hablar directo al dolor de tu cliente ideal.
