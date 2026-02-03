'use client'

export default function Problem() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            ¿Te suena familiar?
          </h2>
          
          <div className="space-y-6 text-lg text-stone-300 mb-12">
            <p className="text-2xl font-semibold text-stone-100">
              "Sé entrenar mejor que muchos coaches que veo en redes..."
            </p>
            
            <p className="text-xl">
              "Pero ellos tienen clientes online, trabajan desde casa y yo sigo dependiendo del gimnasio."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '😓',
                title: 'Cansado del tiempo x dinero',
                desc: 'Si no estás presente, no ganas'
              },
              {
                icon: '📱',
                title: 'Frustrado con las redes',
                desc: 'Subes videos pero no pasa nada'
              },
              {
                icon: '😰',
                title: 'Miedo a hacer el ridículo',
                desc: 'No quieres verte amateur'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 panel-soft hover:border-amber-300/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-stone-100 mb-2">{item.title}</h3>
                <p className="text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-r from-amber-300/10 to-teal-400/10 border border-amber-300/20 rounded-2xl">
            <p className="text-xl md:text-2xl font-semibold text-stone-100 mb-4">
              El problema NO es tu conocimiento
            </p>
            <p className="text-lg text-stone-300">
              Es que nadie te ha enseñado <span className="text-amber-200 font-semibold">cómo convertir ese conocimiento en contenido que SÍ atrae clientes</span> sin perder tu identidad como coach profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
