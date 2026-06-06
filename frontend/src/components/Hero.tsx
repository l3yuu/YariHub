<<<<<<< HEAD
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
=======
import { motion, type Variants } from 'framer-motion';
import hero1Bg from '../assets/hero1bg.png';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-white text-black">
      <img
        src={hero1Bg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col items-center justify-start px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-5xl flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex max-w-full items-center rounded-lg bg-[#0E6AF3] px-4 py-1.5 text-[11px] font-bold text-white shadow-sm sm:text-xs"
          >
            Modern Web & Digital Solutions 
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-['Poppins',sans-serif] text-[clamp(2.75rem,8vw,5.75rem)] font-bold leading-[0.92] tracking-normal text-black"
          >
            <span className="block">We Craft.</span>
            <span className="block text-[#0E6AF3]">Your Vision.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-4xl text-balance text-sm leading-tight text-black sm:text-base md:text-lg"
          >
            Crafting scalable digital experiences through modern web and custom software solutions. We help businesses and innovators transform ideas into reliable, high-performing systems designed for growth, efficiency, and long-term impact
          </motion.p>
>>>>>>> origin/main
        </motion.div>
      </div>

      {/* Hero bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-blue-100/40 to-blue-200/70 pointer-events-none" />
    </section>
  );
};

export default Hero;
