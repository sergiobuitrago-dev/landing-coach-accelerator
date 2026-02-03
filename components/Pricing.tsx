import Image from "next/image";

export default function Pricing() {
  return (
    <section className="section-pad pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Guarantee Card */}
          <div className="relative p-8 sm:p-10 md:p-12 bg-gradient-to-br from-amber-950/60 via-stone-950 to-stone-950 border-2 border-amber-300/50 rounded-3xl overflow-hidden">
            {/* Gold Grid */}
            <div className="absolute inset-0 opacity-35">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(245,194,90,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(245,194,90,0.2)_1px,transparent_1px)] bg-[size:70px_70px]" />
            </div>
            {/* Background Glow */}
            <div className="ambient-blob absolute -top-20 right-0 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl" />
            <div className="ambient-blob absolute -bottom-24 left-0 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              {/* Guarantee Badge Image */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40">
                  <Image
                    src="/images/guarantee-badge.svg"
                    alt="Garantía 100%"
                    fill
                    sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 160px"
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>

              {/* Badge */}
              {/*<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-300/15 border border-amber-300/40 mb-6 mx-auto">
                <svg
                  className="w-5 h-5 text-amber-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                 <span className="text-base sm:text-lg font-semibold text-amber-200">
                  100% Garantizado
                </span> 
              </div>*/}

              {/* Main Headline */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-amber-200 mb-6">
                Construye Un Sistema Real Para Conseguir Clientes
                Online o Seguimos Trabajando Contigo Hasta Que Lo
                Logres
              </h3>

              {/* Expanded Guarantee Copy */}
              <div className="space-y-5 text-base sm:text-lg text-stone-200/90 max-w-3xl mx-auto">
                <p>
                  Por su puesto, tienes una garantía estándar de 7
                  días: si decides que no es para ti, te devolvemos el
                  100% del dinero. Sin preguntas.
                </p>
                <p className="mt-6">
                  Pero tenemos una garantía mucho mejor que
                  <span className="italic">
                    "devolver el total de la inversion":
                  </span>
                </p>
                <p>
                  Si al final de 30 días no tienes la base real para
                  conseguir clientes online, seguimos trabajando
                  contigo 1:1 hasta que lo consigas. Sin costo
                  adicional y sin límite de tiempo.
                </p>
                <p className="text-stone-300">
                  Esto no es un curso grabado. Es acompañamiento real
                  hasta que lo logres.
                </p>
              </div>

              {/* Requirements */}
              <div className="mt-6 space-y-3 text-stone-200 max-w-3xl mx-auto">
                <p className="text-lg font-semibold text-amber-100">
                  Si al final de 30 días no tienes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 justify-center">
                    <span className="text-amber-200">✓</span>
                    Una oferta clara
                  </li>
                  <li className="flex items-start gap-2 justify-center">
                    <span className="text-amber-200">✓</span>
                    Un sistema de contenido definido
                  </li>
                  <li className="flex items-start gap-2 justify-center">
                    <span className="text-amber-200">✓</span>
                    Al menos 10-15 piezas de contenido publicadas
                  </li>
                </ul>
              </div>

              {/* Bottom Statement */}
              <div className="mt-8 text-center">
                <p className="font-semibold text-stone-100">
                  Mientras tú sigas en el proceso,
                </p>
                <p className="font-semibold">
                  <span className="text-amber-200">
                    yo sigo contigo.
                  </span>
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 flex justify-center">
                <a
                  href="https://whop.com/checkout/plan_PGgPby3Msd1w8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary text-lg">
                  Quiero construir mi sistema
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-stone-400">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Pago Seguro</span>
            </div>
            <div>•</div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
