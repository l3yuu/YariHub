import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutHero from '../components/AboutHero';
import HowWeWork from '../components/HowWeWork';
import Services from '../components/Services';
import SelectedWork from '../components/SelectedWork';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SoftAurora from '../components/SoftAurora';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#060a12] transition-colors duration-500">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60">
        <SoftAurora
          speed={0.4}
          scale={1.2}
          brightness={0.8}
          color1="#3b82f6"
          color2="#8b5cf6"
          noiseFrequency={2.0}
          noiseAmplitude={0.8}
          bandHeight={0.6}
          bandSpread={1.2}
          enableMouseInteraction={false}
          mouseInfluence={0}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <div className="h-16" aria-hidden="true" />
        <main>
          <Hero />
          <AboutHero />
          <HowWeWork />
          <Services />
          <SelectedWork />
          <Team />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
