const cuadro1 = new URL('../assets/obras/cuadro1.png', import.meta.url).href;
const cuadro2 = new URL('../assets/obras/cuadro2.png', import.meta.url).href;
const cuadro3 = new URL('../assets/obras/cuadro3.png', import.meta.url).href;

export const artworks = [
  {
    title: "Rojo Intenso",
    image: cuadro1,
    technique: "Óleo",
    size: "80×60 cm",
    year: 2024,
  },
  {
    title: "Azul Noche",
    image: cuadro2,
    technique: "Acrílico",
    size: "70×50 cm",
    year: 2023,
  },
  {
    title: "Luz y Sombra",
    image: cuadro3,
    technique: "Mixta",
    size: "60×60 cm",
    year: 2024,
  },
];
