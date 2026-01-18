import { useInView } from '../hooks/useInView';

export default function Statement() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className={`bg-gradient-to-b from-bgLight via-bg to-bgLight px-4 sm:px-6 md:px-20 py-12 sm:py-24 md:py-36 relative animate-in-view ${isInView ? 'in-view' : ''}`}>
      {/* Decoración de fondo */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl -z-10"></div>
      
      <p className="font-serif text-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-5xl relative">
        <span className="text-accent">„</span> La pintura es una forma de escuchar el silencio y transformarlo en
        color. <span className="text-accent">"</span>
      </p>
    </section>
  );
}
