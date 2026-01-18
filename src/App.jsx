import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg text-text">
      <Hero />
      <Statement />
      <Bio />
      <Gallery />
      <Footer />
    </div>
  );
}
