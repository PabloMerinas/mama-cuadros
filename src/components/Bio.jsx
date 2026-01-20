import { useInView } from '../hooks/useInView';

export default function Bio() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className={`bg-gradient-to-b from-bg via-bgLight to-bg text-text px-4 sm:px-6 md:px-20 py-12 sm:py-20 md:py-28 relative animate-in-view ${isInView ? 'in-view' : ''}`}>
      {/* Decoración de fondo */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/4 rounded-full blur-3xl -z-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 line-accent">
            Sobre la artista
          </h2>

          <p className="text-muted leading-relaxed mb-4 sm:mb-5 max-w-prose text-sm sm:text-base">
            Llevo años explorando el color, la materia y la emoción a través de
            la pintura. Cada obra nace de un proceso íntimo y pausado.
          </p>

          <p className="text-muted leading-relaxed max-w-prose text-sm sm:text-base">
            Si te interesa una pieza o un encargo, escríbeme y lo hablamos sin
            compromiso.
          </p>

          <div className="mt-8 sm:mt-10">
            <a
              href="https://wa.me/629939631"
              target="_blank"
              rel="noreferrer"
              className="inline-block border-2 border-accent text-accent hover:bg-accent/10 transition px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-xs tracking-[0.2em] uppercase btn-hover"
            >
              Contactar
            </a>
          </div>
        </div>

        <img
          src="/obras/bio.png"
          alt="Proceso"
          className="w-full h-[300px] sm:h-[400px] md:h-[420px] lg:h-[520px] object-contain rounded-2xl order-1 md:order-2 card-shadow hover:shadow-2xl transition-shadow duration-500"
        />
      </div>
    </section>
  );
}
