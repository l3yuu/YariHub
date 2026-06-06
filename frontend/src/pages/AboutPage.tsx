<<<<<<< HEAD
import AboutUs from '../components/AboutUs';
import AboutSections from '../components/AboutSections';
import Team from '../components/Team';

const AboutPage = () => (
  <main>
    <AboutUs standalone />
    <AboutSections />
    <Team standalone />
  </main>
);
=======
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#060a12] transition-colors duration-500">
      <div className="relative z-10">
        <Navbar />
        <div className="h-16" aria-hidden="true" />
        <main>
          <AboutHero />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
};
>>>>>>> origin/main

export default AboutPage;
