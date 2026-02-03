'use client'

const testimonials = [
  {
    result: '12 clientes',
    time: 'en 45 días',
    quote: 'Pasé de esperar que me contacten en el gimnasio a tener conversaciones todos los días por Instagram. El sistema funciona.',
    author: 'Carlos M.',
    role: 'Coach Fitness - México'
  },
  {
    result: 'Sistema claro',
    time: 'en 30 días',
    quote: 'Finalmente entendí QUÉ contenido hacer y CÓMO hacerlo sin verme amateur. Ya no copio, tengo mi propio método.',
    author: 'Laura S.',
    role: 'Entrenadora Personal - Colombia'
  },
  {
    result: '8 consultas',
    time: 'primera semana',
    quote: 'Nunca pensé que mi contenido iba a generar conversaciones reales. Ahora entiendo por qué lo que hacía antes no funcionaba.',
    author: 'Diego R.',
    role: 'Coach Online - Argentina'
  },
  {
    result: '+50%',
    time: 'en ingresos',
    quote: 'Dejé de depender solo del gimnasio. Ahora tengo clientes online que vienen por mi contenido, no por voz a voz.',
    author: 'Ana P.',
    role: 'Coach Híbrida - Chile'
  }
]

const demoImages = [
  { type: 'screenshot', color: 'from-amber-300/20 to-orange-400/20' },
  { type: 'screenshot', color: 'from-emerald-400/20 to-teal-400/20' },
  { type: 'screenshot', color: 'from-amber-200/20 to-yellow-400/20' },
  { type: 'screenshot', color: 'from-rose-400/20 to-orange-400/20' },
]

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Coaches como tú ya lo están logrando
          </h2>
          <p className="text-xl text-stone-400">
            Resultados reales de coaches que dejaron de depender solo del gimnasio
          </p>
        </div>

        {/* Demo Screenshots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {demoImages.map((img, index) => (
            <div
              key={index}
              className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${img.color} border border-white/10 flex items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform`}
            >
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📊</div>
                <div className="text-sm text-white/60">
                  Resultado Screenshot
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 panel hover:border-amber-300/50 transition-all duration-300"
            >
              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 mb-6">
                <span className="text-2xl font-semibold text-emerald-300">
                  {testimonial.result}
                </span>
                <span className="text-sm text-emerald-300/80">
                  {testimonial.time}
                </span>
              </div>

              {/* Quote */}
              <p className="text-lg text-stone-300 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center text-stone-900 font-semibold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-stone-100">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-stone-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-300/10 to-teal-400/10 border border-amber-300/20 rounded-2xl text-center">
          <p className="text-2xl md:text-3xl font-semibold text-stone-100 mb-4">
            Únete a los coaches que ya <span className="text-amber-200">dejaron de depender solo del gimnasio</span>
          </p>
          <p className="text-lg text-stone-300">
            Tu testimonio podría ser el siguiente
          </p>
        </div>
      </div>
    </section>
  )
}
