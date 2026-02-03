const features = [
  {
    title: "Sistema Winner de Contenido",
    value: "Metodología Exclusiva",
    price: "$590",
    description:
      "Aprende a identificar videos ganadores en tu mercado, analizarlos y adaptarlos a tu oferta.",
    icon: "🎯",
    benefits: [
      "Cómo identificar videos que SÍ funcionan",
      "Análisis de hooks, formato e idea ganadora",
      "Re-enfoque a tu propia oferta",
      "Tipos de contenido: viral, confianza, autoridad y ventas",
    ],
  },
  {
    title: "8 Sesiones 1:1",
    value: "Trabajo Directo",
    price: "$720",
    description:
      "Acompañamiento activo donde construimos juntos los guiones y refinamos tu mensaje.",
    icon: "🤝",
    benefits: [
      "2 sesiones por semana durante 30 días",
      "1 sesión de guionización",
      "1 sesión de claridad y dudas",
      "Aprendes un método propio para tu contenido",
    ],
  },
  {
    title: "Claridad de Oferta",
    value: "Posicionamiento Real",
    price: "$390",
    description:
      "Definimos juntos a quién ayudas, qué problema resuelves y cómo explicarlo en una frase.",
    icon: "💡",
    benefits: [
      "A quién ayudas y a quién NO",
      "Problema específico que resuelves",
      "Cómo explicarlo claramente",
      "Diferenciación vs otros coaches",
    ],
  },
  {
    title: "Sistema de Conversión",
    value: "Ventas en Automático",
    price: "$590",
    description:
      "Montamos tu sistema completo: página web, VSL y flujo de conversión.",
    icon: "💰",
    benefits: [
      "Página web de ventas con IA",
      "VSL (video de ventas) automático",
      "Agendamiento de llamadas en automatico",
      "Flujo: contenido → conversación → cliente",
    ],
  },
  {
    title: "Bono #1: Sistema en Notion",
    value: "Organización Total",
    price: "$150",
    description:
      "El mismo sistema que uso para mi contenido, adaptado para coaches fitness.",
    icon: "📋",
    benefits: [
      "Calendario de contenido",
      "Seguimiento de clientes",
      "Todo en un solo lugar",
      "Listo para usar desde día 1",
    ],
  },
  {
    title: "Bono #2: Banco de Formatos",
    value: "Ideas Probadas",
    price: "$200",
    description:
      "Formatos que SÍ funcionan en el nicho fitness. Nunca más te quedas en blanco.",
    icon: "🎬",
    benefits: [
      "Formatos probados específicos para fitness",
      "Ideas reutilizables",
      "Estructuras de video ganadoras",
      "Inspiración constante",
    ],
  },
  {
    title: "Bono #3: Guía Rápida de Grabación",
    value: "Grabación Pro",
    price: "$120",
    description:
      "Cómo grabar contenido con tu celular sin verte amateur. Posición, luz, duración. Sin excusas técnicas.",
    icon: "🎁",
    benefits: [
      "Guía práctica en minutos",
      "Checklist de luz y ángulos",
      "Duración ideal por formato",
      "Grabación sin equipo pro",
    ],
  },
];

export default function Features() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-normal mb-6">
            Esto es exactamente lo que recibes al unirte a Coach
            Accelerator
          </h2>
          <p className="text-xl text-stone-400">
            Incluye el programa Coach Factory y todo lo que necesitas
            para construir tu sistema en 30 días
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 panel hover:border-amber-300/50 transition-all duration-300 hover:-translate-y-1">
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-3xl shadow-lg text-stone-900">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-stone-100 mb-2">
                    {feature.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-300/10 border border-amber-300/20">
                      <span className="text-sm font-semibold text-amber-200">
                        {feature.value}
                      </span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40">
                      <span className="text-sm font-semibold text-amber-100">
                        Valor: {feature.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-300 mb-6">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-stone-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-300/10 to-orange-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Result Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-amber-300/10 to-orange-400/10 border border-amber-300/20 rounded-2xl">
            <p className="text-stone-400 mb-2">
              Resultado al final de 30 días:
            </p>
            <p className="text-3xl md:text-4xl font-semibold text-stone-100 mb-2">
              <span className="text-amber-200">
                10-15 videos estratégicos publicados
              </span>
            </p>
            <p className="text-xl font-bold">+</p>
            <p className="text-xl text-stone-300">
              Un sistema claro para seguir atrayendo clientes
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-stone-100 mb-6">
            Una Revisada Rápida a Todo Lo Que Obtienes al Unirte a
            Coach Accelerator:
          </p>
        </div>

        {/* Quick Recap */}
        <div className="mt-14">
          <div className="relative panel p-6 md:p-7 overflow-hidden max-w-5xl mx-auto">
            {/* Edge Glow */}
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl border border-amber-300/25 shadow-[0_0_40px_rgba(245,194,90,0.12)]" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-300/10 via-transparent to-transparent opacity-60" />

            <div className="relative">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <img
                    src="/images/IsotipoNoBG.svg"
                    alt="Coach Factory"
                    className="h-16 w-auto sm:h-20 -mt-1"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="h-px w-full bg-stone-800/70 mb-4" />
              <div className="space-y-3 text-sm text-stone-300">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 pb-0">
                    <div className="flex items-center gap-3 text-stone-300 shrink-0">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-300/40 text-amber-200">
                        ✓
                      </span>
                      <span>{feature.title}</span>
                    </div>
                    <span className="hidden md:block mx-3 h-px flex-1 border-b border-dashed border-stone-700/70" />
                    <div className="ml-auto text-amber-200 font-medium line-through">
                      {feature.price}
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px w-full bg-stone-800/70 mt-4" />

              <div className="mt-2 flex items-center justify-center gap-2 text-stone-300">
                <span className="text-2xl md:text-3xl">Total:</span>
                <span className="text-2xl md:text-3xl font-medium text-amber-200 line-through">
                  $2,640
                </span>
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://whop.com/checkout/plan_PGgPby3Msd1w8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary text-sm">
                  UNIRME AHORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
