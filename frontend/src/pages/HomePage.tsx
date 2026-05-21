import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import HowWeWork from '../components/HowWeWork';
import SelectedWork from '../components/SelectedWork';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => (
  <main>
    <Hero />
    <AboutUs preview moreHref="/about" />
    <Services preview moreHref="/services" />
    <HowWeWork />
    <SelectedWork preview moreHref="/portfolio" />
    <Team />
    <Testimonials preview moreHref="/testimonials" />
    <Contact />
  </main>
);

export default HomePage;
