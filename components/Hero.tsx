"use client";

const CHECKOUT_URL = "https://whop.com/checkout/plan_PGgPby3Msd1w8";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-veil opacity-40" />
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute top-40 -right-10 w-[28rem] h-[28rem] rounded-full bg-teal-400/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[36rem] h-[20rem] bg-gradient-to-r from-amber-500/10 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-stone-900/70 border border-amber-300/20 animate-slide-up">
            <span className="eyebrow">Coach Factory</span>
            <span className="text-xs text-amber-200/80">
              para coaches fitness que ganan $500-$1,000/mes
            </span>
          </div>
        </div>

        {/* Main Heading with yellow accent text */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-normal mb-6 animate-slide-up">
          <span className="block text-stone-100 text-balance">
            Atrae Clientes Con Contenido
          </span>
          <span className="block text-amber-300 mt-2">
            Sin Hacer El Ridículo En Redes
          </span>
        </h1>

        {/* VSL Container */}
        <div
          className="max-w-4xl mx-auto mb-12 animate-slide-up"
          style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-stone-900/70 border border-stone-700/60 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            {/* Video placeholder - reemplaza con tu video real */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-400/15 border border-amber-300/40 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-amber-200"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-stone-300">
                  Mira este video para entender cómo funciona Coach
                  Factory
                </p>
                <p className="text-sm text-stone-500 mt-2">
                  (Reemplaza este div con tu iframe de
                  YouTube/Vimeo/Wistia)
                </p>
              </div>
            </div>

            {/* Ejemplo de cómo agregar tu video real:
            <iframe
              src="https://www.youtube.com/embed/TU_VIDEO_ID"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="text-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary text-lg mb-4">
            obtener acceso ahora
          </a>

          <p className="text-stone-400 text-sm">
            programa done-with-you • 30 días • 8 sesiones 1:1
          </p>
        </div>

        {/* Trust Indicators */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-stone-400 text-sm animate-slide-up"
          style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-amber-300"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>acompañamiento real 1:1</span>
          </div>
          <div>•</div>
          <div>30 días intensivos</div>
          <div>•</div>
          <div>especializado en fitness</div>
        </div>
      </div>
    </section>
  );
}
