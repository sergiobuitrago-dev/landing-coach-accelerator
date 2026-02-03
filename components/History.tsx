export default function History() {
  return (
    <section className="section-pad">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-stone-100">
            Cómo Descubrí Por Qué El 90% De Los Coaches Mejor
            Preparados Fracasan Online
          </h2>
          {/* Espacio para foto */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <div className="absolute -inset-3 rounded-3xl bg-amber-300/15 blur-2xl" />
              <img
                src="/images/Sergio-history2.svg"
                alt="Sergio"
                className="relative w-full rounded-3xl border border-amber-300/40 object-cover bg-stone-900/40 shadow-[0_30px_80px_rgba(245,194,90,0.18)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-stone-300">
          <p>
            He entrenado toda clase de deportes desde hace más de 15
            años y llevo más de 6 años entrenando de forma constante
            en gimnasios.
          </p>
          <p>
            Durante este tiempo he tomado en varios programas
            personalizados con distintos entrenadores, en gimnasios
            comerciales y privados, y he estado muy metido tanto en el
            mundo del fitness como en el de las redes sociales.
          </p>
          <p>Y vi siempre el mismo patrón.</p>
          <p>
            Coaches muy buenos entrenando, dandole transformaciones
            reales a sus clientes pero completamente estancados en
            redes. No porque no supieran lo que hacían, sino porque
            nadie les había enseñado cómo comunicar su valor sin
            convertirse en influencers.
          </p>
          <p>
            Mientras algunos crecían online sin ser los mejores
            entrenando, otros —mucho mejor preparados— seguían
            atrapados cambiando tiempo por dinero.
          </p>
          <p className="text-stone-100 font-medium">
            Ahí entendí que el problema no era el conocimiento del
            entrenador. Era el sistema genérico que les enseñaron a
            usar.
          </p>
          <p className="text-stone-100 font-semibold">
            Coach Factory nace de ahí: de construir una forma clara y
            realista para que coaches fitness conviertan lo que ya
            saben en contenido que atrae clientes, sin perder su
            identidad profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
