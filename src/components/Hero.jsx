import { useInView } from '../hooks/useInView';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-bg via-bg to-bgLight text-text px-4 sm:px-6 md:px-20 py-12 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <img
          src="/mama-cuadros/obras/sobre.png"
          alt="Obra principal"
          className="w-full h-[400px] sm:h-[450px] md:h-[520px] lg:h-[800px] object-contain rounded-2xl order-1 md:order-1"
        />

        <div className="order-2 md:order-2">
          <p className="text-accent tracking-[0.2em] uppercase text-xs mb-3 sm:mb-4 font-semibold">
            Pintura original
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6 sm:mb-8 line-accent">
            Carmen Soto
          </h1>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-md mb-8 sm:mb-10">
            Obras únicas, hechas a mano. Colección disponible y encargos por
            petición.
          </p>

          <a
            href="#galeria"
            className="inline-block border-2 border-accent text-accent hover:bg-accent/10 transition px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-xs tracking-[0.2em] uppercase btn-hover"
          >
            Ver obras
          </a>
        </div>
      </div>
    </section>
  );
}
