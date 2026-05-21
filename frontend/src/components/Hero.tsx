import { motion } from 'framer-motion';
import CircuitPattern from './CircuitPattern';
import DashboardMockup from './DashboardMockup';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-0 overflow-hidden bg-white">
      <CircuitPattern side="left" />
      <CircuitPattern side="right" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#2563EB] mb-8">
            Built for Filipino Innovators
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
            Freelance-first.
            <br />
            <span className="text-[#2563EB]">Built to grow.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-14 leading-relaxed">
            We build systems that work for you — empowering Filipino businesses and innovators
            with premium digital infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative pb-24"
        >
          <DashboardMockup />
        </motion.div>
      </div>

      {/* Hero bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-blue-100/40 to-blue-200/70 pointer-events-none" />
    </section>
  );
};

export default Hero;
