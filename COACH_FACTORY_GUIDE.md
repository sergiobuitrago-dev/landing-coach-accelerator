# GUÍA ESPECÍFICA - COACH FACTORY

## 🎯 Sobre Tu Landing

Esta landing está diseñada específicamente para tu cliente ideal:
**Coach fitness híbrido de Latinoamérica (23-35 años) que gana $500-$1,000/mes**

## 🧠 Psicología Implementada

### Dolor Principal Abordado
"Quiero ganar más como coach, pero sin hacer el ridículo en redes ni sentir que estoy perdiendo el tiempo."

### Miedos que Eliminamos
1. **Miedo a hacer el ridículo** → "Sin hacer el ridículo en redes"
2. **Miedo a ser amateur** → "Contenido estratégico, no viralidad vacía"
3. **Miedo a perder tiempo** → "Sistema claro en 30 días"
4. **Miedo al abandono** → "Done-With-You, no curso solo"

### Driver Principal
**DINERO** como salida del ciclo tiempo x dinero, no como lujo.

## 📝 Mensajes Clave Usados

### Hero Section
- "Atrae Clientes con Contenido Sin Hacer el Ridículo"
- Habla directo al miedo #1

### Problem Section
- "¿Te suena familiar?" → Empatía inmediata
- "Sé entrenar mejor que muchos..." → Valida su frustración
- Tres dolores específicos con emojis

### Solution
- "Done-With-You" repetido → No te dejo solo
- "8 Sesiones 1:1" → Acompañamiento real
- Sistema Winner → Método propio (no copias)

### Garantía
- "No es marketing" → Credibilidad
- "Seguimos hasta que funcione" → Compromiso real
- Sin tiempo límite → Seguridad

## 🎨 Elementos de Diseño Estratégicos

### Colores
- Azul/Púrpura → Profesionalismo + Aspiración
- Verde en checkmarks → Progreso/Logro
- Naranja en CTAs → Acción/Urgencia moderada

### Animaciones
- Suaves, no agresivas
- No distraen del mensaje
- Refuerzan profesionalismo

### Estructura
1. Hero con promesa clara
2. Stats que establecen credibilidad
3. Problem (empatía)
4. Solution (sistema)
5. Features (qué incluye)
6. Testimonials (prueba social)
7. Garantía (elimina riesgo)
8. FAQ (maneja objeciones)
9. CTA final

## 📧 Captura de Emails

Actualmente los formularios solo muestran un mensaje de éxito.

**Para conectar a tu email service:**

### Opción 1: ConvertKit (Recomendado)
```typescript
// Crear archivo: app/api/subscribe/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email: email,
        tags: ['coach-factory', 'landing-page']
      })
    }
  )
  
  return NextResponse.json({ success: response.ok })
}
```

Luego en los componentes Hero.tsx y CTA.tsx:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  
  if (response.ok) {
    setIsSubmitted(true)
  }
}
```

### Opción 2: Mailchimp
Similar al anterior pero con endpoint de Mailchimp.

### Opción 3: Zapier/Make
Webhook a cualquier plataforma.

## 🔥 Próximos Pasos Recomendados

### 1. Contenido a Agregar
- [ ] Tu foto profesional en alguna sección
- [ ] Screenshots reales de conversaciones con clientes
- [ ] Video testimonial corto (30-60 seg)
- [ ] Antes/Después de contenido de un cliente

### 2. Optimizaciones Técnicas
- [ ] Conectar formulario a email service
- [ ] Agregar Google Analytics
- [ ] Configurar Facebook Pixel (si usas ads)
- [ ] Implementar chat (Tidio, Intercom, o WhatsApp)

### 3. Testing A/B Sugerido
**Headline del Hero:**
- Versión A (actual): "Atrae Clientes con Contenido Sin Hacer el Ridículo"
- Versión B: "De $500 a $2,000/mes con Contenido Estratégico"
- Versión C: "Deja de Depender del Gimnasio en 30 Días"

**CTA Button:**
- Versión A: "Unirme a la Lista"
- Versión B: "Quiero Empezar Ya"
- Versión C: "Reservar Mi Llamada"

### 4. Elementos que Podrías Agregar
- [ ] Timer de cuenta regresiva (si abres/cierras inscripciones)
- [ ] Popup de salida (exit intent)
- [ ] Comparación "Antes/Después" de aplicar el sistema
- [ ] Video de 2 minutos explicando el programa
- [ ] Sección "Por qué NO es para ti" (filtro de calidad)

## 🎯 Copy Específico para Tu Audiencia

### Frases que Resuenan con Tu Cliente
✅ "Sin hacer el ridículo"
✅ "Sin perder tu identidad como coach"
✅ "Dejar de depender del gimnasio"
✅ "Contenido estratégico, no viralidad vacía"
✅ "No copias, aprendes un método propio"
✅ "Done-With-You, no curso solo"
✅ "Seguimos hasta que funcione"

### Palabras que Evitar
❌ "Hacerte viral"
❌ "Influencer"
❌ "Millonario"
❌ "Fácil" o "automático"
❌ "Sin esfuerzo"
❌ Jerga técnica de marketing

## 📊 Métricas Clave para Rastrear

### Conversión
- Visitantes → Emails capturados (Meta: 20-30%)
- Emails → Llamadas agendadas (Meta: 15-25%)
- Llamadas → Clientes (Meta: 30-50%)

### Engagement
- Tiempo promedio en página (Meta: >3 minutos)
- Scroll depth (Meta: >80% llegan al final)
- % que abre FAQ (indica interés real)

### Tráfico
- Fuentes principales: Instagram, YouTube, anuncios
- Páginas de salida (dónde se van)
- Dispositivos (probablemente 80% mobile)

## 🚀 Estrategia de Lanzamiento

### Semana 1: Pre-Lanzamiento
- Anuncia en redes que "algo viene"
- Stories mostrando el sistema
- Testimonials breves de clientes actuales

### Semana 2: Apertura
- Email masivo a lista
- Posts en todas las plataformas
- Video explicando el programa

### Semana 3-4: Seguimiento
- Webinar o live de Q&A
- Casos de éxito detallados
- Últimas 48 horas (urgencia)

### Post-Cierre
- Email de agradecimiento
- Apertura de lista de espera para próxima ronda
- Nurture a los que no entraron

## 💡 Tips de Copywriting para Futuros Ajustes

1. **Habla como tu cliente piensa**
   - No: "Optimiza tu funnel de conversión"
   - Sí: "Haz que la gente te escriba por Instagram"

2. **Usa números específicos**
   - No: "Muchos clientes"
   - Sí: "12 clientes en 45 días"

3. **Elimina palabras de relleno**
   - No: "Realmente podrías llegar a conseguir clientes"
   - Sí: "Consigues clientes"

4. **Una promesa por sección**
   - Cada sección debe tener un mensaje claro
   - Si tiene 3 ideas, divídela en 3 secciones

5. **CTA claro siempre visible**
   - Hero, después de Features, después de Testimonials, final
   - Mismo mensaje consistente

## 🎬 Contenido de Apoyo Sugerido

### Para Instagram/TikTok
1. "3 errores que cometes en tu contenido fitness" → Link a landing
2. "Por qué tu contenido no atrae clientes" → Link a landing
3. Testimonial en video de 30 seg → Link a landing
4. "Así entreno a coaches como tú" → Link a landing

### Para Email
1. Secuencia de 5 emails post-captura
   - Email 1: Bienvenida + video de presentación
   - Email 2: "Por qué creé Coach Factory"
   - Email 3: Caso de estudio detallado
   - Email 4: Objeción común respondida
   - Email 5: Llamada a la acción directa

## 🔧 Herramientas Recomendadas

### Email Marketing
- **ConvertKit**: Mejor para creadores
- **MailerLite**: Buena opción gratuita
- **ActiveCampaign**: Si quieres automatizaciones avanzadas

### Analytics
- **Plausible**: Simple, privacy-friendly
- **Google Analytics 4**: Completo, gratis
- **Hotjar**: Para heatmaps y grabaciones

### Llamadas/Agenda
- **Calendly**: Básico, funciona bien
- **TidyCal**: Alternativa económica
- **Cal.com**: Open source

### Chat/Soporte
- **WhatsApp Business**: Directo y personal
- **Tidio**: Chat + bots simple
- **ManyChat**: Si quieres automatización

## ✅ Checklist Pre-Lanzamiento

### Técnico
- [ ] Formularios conectados a email service
- [ ] Analytics configurado
- [ ] Test en móvil (iOS y Android)
- [ ] Velocidad de carga <3 segundos
- [ ] SSL activo (https)

### Contenido
- [ ] Todos los textos revisados (typos)
- [ ] Links funcionando
- [ ] Imágenes optimizadas
- [ ] FAQs completas
- [ ] Garantía clara

### Legal
- [ ] Política de privacidad
- [ ] Términos y condiciones
- [ ] Aviso de cookies (si usas)
- [ ] Descargo de responsabilidad

### Marketing
- [ ] Pixel de Facebook instalado
- [ ] Audiencias creadas
- [ ] Email de bienvenida listo
- [ ] Secuencia post-captura lista
- [ ] Contenido de promoción preparado

---

**Recuerda**: Esta landing está diseñada para hablarle directamente al miedo y dolor de tu cliente ideal. Cada palabra fue elegida intencionalmente. Al modificar, mantén el tono directo, honesto y sin bullshit que conecta con coaches fitness frustrados.
