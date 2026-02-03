"use client";

import { useState } from "react";
import Script from "next/script";

const faqs = [
  {
    question: "¿Esto es para mí si nunca he hecho contenido?",
    answer:
      "Sí. De hecho, muchas personas empiezan desde cero. El sistema está pensado para gente que no viene del marketing, pero que sí está dispuesta a hacer el trabajo paso a paso. No necesitas experiencia previa, solo constancia.",
  },
  {
    question: "¿Tengo que mostrar mi cara o hacer reels bailando?",
    answer:
      "No. Aquí no se trata de volverte influencer ni de seguir trends ridículos. La idea es crear contenido simple y claro, alineado contigo, enfocado en generar conversaciones reales, no likes.",
  },
  {
    question: "¿Funciona aunque tenga pocos seguidores?",
    answer:
      "Sí. No trabajamos con volumen, trabajamos con claridad. Con pocos seguidores bien enfocados es suficiente para empezar a generar oportunidades reales. No necesitas miles de seguidores para que esto funcione.",
  },
  {
    question: "¿Cómo sé que esto no es solo otro curso más?",
    answer:
      "Sí hay contenido grabado donde explicamos la metodología y el paso a paso. Pero eso es solo una parte. La diferencia está en el acompañamiento y el seguimiento durante la implementación, para que no te quedes solo viendo videos. Y si después de 30 días no tienes la base real para conseguir clientes online, seguimos trabajando contigo hasta que lo logres.",
  },
  {
    question: "¿Qué pasa si no tengo mucho tiempo disponible?",
    answer:
      "El sistema está pensado para personas que ya trabajan o tienen clientes. No necesitas pasar horas creando contenido ni estar todo el día en redes. Con 30 a 60 minutos al día, bien enfocados, es suficiente para avanzar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-blob absolute -top-32 left-1/2 h-[38rem] w-[52rem] -translate-x-1/2 rounded-full bg-blue-500/18 blur-[180px]" />
        <div className="ambient-blob absolute top-48 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-blue-400/16 blur-[190px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Book a Call Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-stone-900/70 border border-stone-700/60 text-xs uppercase tracking-[0.3em] text-amber-200/80 mb-6">
            Programa una llamada
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Nuestro equipo está listo para ayudarte
          </h2>
          <p className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto">
            Resolvemos tus dudas y te guiamos en cada paso. Agenda una
            llamada y recibe apoyo personalizado cuando lo necesites.
          </p>
          <div className="mt-8">
            {!isCalendlyLoaded ? (
              <div className="w-full max-w-3xl mx-auto rounded-2xl border border-stone-800/60 bg-stone-950/40 p-8">
                <p className="text-stone-300 mb-6">
                  Haz clic para cargar el calendario y elegir tu
                  horario.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCalendlyLoaded(true)}
                  className="cta-primary">
                  Agendar una Llamada
                </button>
              </div>
            ) : (
              <>
                <div
                  className="calendly-inline-widget w-full max-w-3xl mx-auto rounded-2xl border border-stone-800/60 bg-stone-950/40 overflow-hidden"
                  data-url="https://calendly.com/sbuitrago-rrss/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=e7e5e4&primary_color=fbbf24"
                  data-resize="true"
                  style={{ minWidth: "320px", height: "520px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </>
            )}
          </div>
        </div>

        {/* FAQ Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-stone-900/70 border border-stone-700/60 text-[0.65rem] uppercase tracking-[0.35em] text-amber-200/80 mb-4">
            FAQS
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-stone-400">
            Todo lo que necesitas saber antes de unirte
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border-b border-stone-800/70 overflow-hidden transition-all duration-300">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-6 flex items-center justify-between text-left transition-colors">
                <span className="text-lg md:text-xl font-light text-stone-100 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-amber-200 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <div className="px-6 pb-6">
                  <p className="text-stone-300 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Card */}
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-300/10 to-teal-400/10 border border-amber-300/20 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold text-stone-100 mb-4">
            ¿Aún tienes preguntas?
          </h3>
          <p className="text-stone-300 mb-6">
            Estamos listos para ayudarte por WhatsApp
          </p>
          <a
            href="https://wa.me/message/P3HR2B3VXADPM1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-400 hover:bg-emerald-300 rounded-full font-semibold text-stone-900 transition-colors">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Enviar Mensaje de WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
