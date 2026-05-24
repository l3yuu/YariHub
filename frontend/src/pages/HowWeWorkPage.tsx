import Navbar from '../components/Navbar';
import HowWeWork from '../components/HowWeWork';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const HowWeWorkPage = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#060a12] transition-colors duration-500">
      <div className="relative z-10">
        <Navbar />
        <div className="h-16" aria-hidden="true" />
        <main>
          <HowWeWork />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
};

export default HowWeWorkPage;
