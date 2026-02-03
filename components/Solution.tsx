const steps = [
  {
    number: '01',
    title: 'CLARIDAD',
    subtitle: 'Oferta y Posicionamiento',
    description: 'Definimos a quién ayudas, qué problema específico resuelves y cómo diferenciarte. Ya no le hablas a todo el mundo.',
    color: 'from-amber-400 to-orange-500'
  },
  {
    number: '02',
    title: 'SISTEMA WINNER',
    subtitle: 'Contenido Estratégico',
    description: 'Mi metodología exclusiva para identificar videos ganadores, analizarlos y adaptarlos a tu oferta. No copias, aprendes a pensar contenido.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    number: '03',
    title: 'GUIONIZACIÓN',
    subtitle: '8 Sesiones 1:1',
    description: 'Construimos juntos tus guiones en vivo. 2 sesiones por semana: una de guionización, otra de claridad y dudas. Aprendes un método propio.',
    color: 'from-rose-400 to-orange-500'
  },
  {
    number: '04',
    title: 'CONVERSIÓN',
    subtitle: 'Sistema de Ventas',
    description: 'Montamos tu página web de ventas con IA, VSL automático y flujo claro: contenido → conversación → cliente. No viralidad, conversaciones.',
    color: 'from-amber-300 to-yellow-500'
  }
]

export default function Solution() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            El sistema Done-With-You
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            En 30 días construimos tu sistema de atracción de clientes, paso a paso, sesión a sesión
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-teal-400 to-orange-400 transform -translate-x-1/2" />
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="p-8 panel hover:border-amber-300/50 transition-all duration-300 hover:scale-[1.01]">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold text-stone-900 shadow-lg`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-stone-100 mb-2">
                          {step.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-amber-200 mb-3">
                          {step.subtitle}
                        </h4>
                        <p className="text-stone-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Circle Indicator (Desktop only) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-stone-950 border-4 border-amber-300 z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="https://whop.com/checkout/plan_PGgPby3Msd1w8"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary text-lg"
          >
            estoy listo para unirme
          </a>
        </div>
      </div>
    </section>
  )
}
