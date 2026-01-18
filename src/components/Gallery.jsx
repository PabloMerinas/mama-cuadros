import { artworks } from "../data/artworks";
import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

export default function Gallery() {
  const [selectedArt, setSelectedArt] = useState(null);
  const closeModal = () => setSelectedArt(null);
  const [ref, isInView] = useInView();

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (selectedArt) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.scrollSnapType = 'none';
      // Prevenir scroll wheel y touch
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.scrollSnapType = 'y mandatory';
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.scrollSnapType = 'y mandatory';
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [selectedArt]);

  return (
    <>
      <section ref={ref} id="galeria" className={`bg-gradient-to-b from-bgLight via-bg to-bgLight text-text px-4 sm:px-6 md:px-20 py-12 sm:py-20 animate-in-view ${isInView ? 'in-view' : ''}`}>
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl -z-10"></div>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-8 md:mb-14">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl line-accent">Obras</h2>
          <p className="text-muted text-sm sm:text-base max-w-md">
            Haz clic para ver cada pieza con calma.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((art) => (
            <article key={art.title} className="group cursor-pointer animate-fade-in" onClick={() => setSelectedArt(art)}>
              <div className="overflow-hidden rounded-2xl border border-borderSoft hover:border-accent/50 transition-all duration-300 card-shadow hover:shadow-2xl">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-[320px] object-contain group-hover:scale-[1.05] transition duration-300"
                  loading="lazy"
                />
              </div>

              <div className="mt-3 sm:mt-4">
                <h3 className="text-base sm:text-lg text-text group-hover:text-accent transition duration-300">{art.title}</h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  {art.technique} · {art.size} · {art.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedArt && (
        <div className="fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur-sm" onClick={closeModal}>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bgLight text-text rounded-2xl p-4 sm:p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-accent/30 card-shadow" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-4 text-2xl text-accent hover:text-white/50 transition" onClick={closeModal}>&times;</button>
            <img src={selectedArt.image} alt={selectedArt.title} className="w-full h-auto max-h-[50vh] object-contain rounded-xl mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-serif mb-2 text-accent">{selectedArt.title}</h3>
            <p className="text-muted text-sm sm:text-base">{selectedArt.technique} · {selectedArt.size} · {selectedArt.year}</p>
          </div>
        </div>
      )}
    </>
  );
}
