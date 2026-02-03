'use client'

const stats = [
  {
    value: '30 Días',
    label: 'Sistema Completo',
    subtext: 'Done-With-You'
  },
  {
    value: '8 Sesiones',
    label: 'Trabajo 1:1',
    subtext: '2 sesiones por semana'
  },
  {
    value: '10-15',
    label: 'Videos Creados',
    subtext: 'Contenido estratégico'
  },
  {
    value: '100%',
    label: 'Garantía Real',
    subtext: 'Seguimos hasta lograrlo'
  }
]

export default function Stats() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Coach Factory en números
          </h2>
          <p className="text-xl text-stone-400">
            Programa de acompañamiento 1:1 para coaches fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 panel hover:border-amber-300/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-semibold text-amber-200 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-stone-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-stone-400">
                  {stat.subtext}
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-300/10 to-copper-500/0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
