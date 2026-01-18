import { useInView } from '../hooks/useInView';

export default function Commissions() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="encargos" className={`bg-gradient-to-b from-bg via-bgLight to-bg text-text px-4 sm:px-6 md:px-20 py-12 sm:py-20 relative animate-in-view ${isInView ? 'in-view' : ''}`}>
      {/* Decoración de fondo */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 line-accent">Encargos personalizados</h2>
        <p className="text-muted mb-4 text-sm sm:text-base">
          Si quieres una obra única, puedes solicitar un encargo personalizado. El proceso es sencillo:
        </p>
        <ul className="list-disc pl-5 sm:pl-6 mb-6 text-muted space-y-2 text-sm sm:text-base">
          <li>Cuéntame tu idea, tamaño y colores preferidos.</li>
          <li>Te enviaré una propuesta y presupuesto sin compromiso.</li>
          <li>El plazo de entrega depende de la complejidad (normalmente 2-4 semanas).</li>
          <li>Los precios varían según el tamaño y técnica.</li>
        </ul>
        <p className="text-muted mb-6 text-sm sm:text-base">
          Para más información o dudas, puedes usar el formulario de contacto o escribirme directamente.
        </p>
        <a href="#contacto" className="inline-block border-2 border-accent text-accent hover:bg-accent/10 transition px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-xs tracking-[0.2em] uppercase btn-hover">
          Solicitar encargo
        </a>
      </div>
    </section>
  );
}
