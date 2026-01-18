import Hero from "../components/Hero";
import Statement from "../components/Statement";
import Bio from "../components/Bio";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Commissions from "../components/Commissions";
import SmoothScroll from "../components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Hero />
      <Statement />
      <Bio />
      <Gallery />
      <Commissions />
      <Footer />
    </>
  );
}
