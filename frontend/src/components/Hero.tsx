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
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-white text-black">
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
            Built for Filipino Innovators
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-['Poppins',sans-serif] text-[clamp(2.75rem,8vw,5.75rem)] font-bold leading-[0.92] tracking-normal text-black"
          >
            <span className="block">Freelance-first.</span>
            <span className="block text-[#0E6AF3]">Built to grow.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-4xl text-balance text-sm leading-tight text-black sm:text-base md:text-lg"
          >
            We build systems that work for you — empowering Filipino businesses and innovators with
            premium digital infrastructure.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
