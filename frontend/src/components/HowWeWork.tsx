<<<<<<< HEAD
import { PhoneCall, PenTool, Terminal, Rocket, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
=======
import { motion, type Variants } from 'framer-motion';
import { Compass, PenTool, RefreshCw, ShieldCheck, Rocket } from 'lucide-react';
>>>>>>> origin/main

const steps = [
  {
    title: 'Discover & Align',
    description:
      'We start by understanding your goals, users, and challenges to define a clear product direction. Through collaborative planning and strategic discovery, we align technology with real business outcomes.',
    icon: Compass,
    highlighted: true,
  },
  {
    title: 'Design & Prototype',
    description:
      'We turn ideas into intuitive digital experiences through thoughtful UI/UX design and rapid prototyping. Every interaction is designed to be functional, engaging, and user-focused from the very beginning.',
    icon: PenTool,
    highlighted: false,
  },
  {
    title: 'Build & Iterate',
    description:
      'Using Agile development practices, we build scalable digital solutions through continuous testing, feedback, and iteration. Every sprint is focused on delivering measurable progress with clean, reliable engineering.',
    icon: RefreshCw,
    highlighted: true,
  },
  {
    title: 'Test & Deploy',
    description:
      'We validate every detail through testing, optimization, and quality assurance to ensure your product is secure, reliable, and ready for launch.',
    icon: ShieldCheck,
    highlighted: false,
  },
  {
    title: 'Launch & Grow',
    description:
      'We launch with confidence and continue supporting your product as it evolves. From optimization to long-term maintenance, we help your platform scale, adapt, and grow with your business.',
    icon: Rocket,
    highlighted: true,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 42, rotateX: 16, scale: 0.96 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const HowWeWork = () => {
  return (
<<<<<<< HEAD
    <section id="how-we-work" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />
=======
    <section id="how-we-work" className="relative overflow-hidden bg-white text-[#00184A]">
      <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-b from-transparent via-[#BBD8FF] to-[#006CF6]" />
>>>>>>> origin/main

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          className="text-center"
          style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
        >
          <motion.h2
            className="font-['Poppins',sans-serif] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight tracking-normal text-[#00184A]"
            style={{ translateZ: 52 }}
          >
            How We Work
          </motion.h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const cardClasses = step.highlighted
              ? 'border-[#0E6AF3] bg-[#0E6AF3] text-white shadow-[0_24px_55px_-28px_rgba(0,108,246,0.9)]'
              : 'border-[#0E6AF3] bg-white text-[#00184A] shadow-[0_18px_45px_-30px_rgba(0,24,74,0.55)]';
            const iconClasses = step.highlighted
              ? 'border-white/40 bg-[#0E6AF3] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]'
              : 'border-[#0E6AF3] bg-white text-[#0E6AF3]';
            const progressTrack = step.highlighted ? 'bg-white/85' : 'bg-[#0E6AF3]';
            const progressDot = step.highlighted ? 'bg-white' : 'bg-[#0E6AF3]';

            return (
              <motion.article
                key={`${step.title}-${index}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{
                  y: -14,
                  rotateX: 8,
                  rotateY: index % 2 === 0 ? -7 : 7,
                  scale: 1.025,
                }}
                className={`group flex min-h-[280px] flex-col rounded-2xl border px-5 py-6 transition-colors sm:min-h-[340px] lg:min-h-[430px] ${cardClasses}`}
                style={{ transformPerspective: 1100, transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  whileHover={{ rotateZ: -5, scale: 1.08 }}
                  className={`mb-8 flex h-12 w-12 items-center justify-center rounded-lg border ${iconClasses}`}
                  style={{ translateZ: 48 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                <motion.h3
                  className={`font-['Poppins',sans-serif] text-[clamp(1.35rem,2vw,1.75rem)] font-bold leading-tight ${
                    step.highlighted ? 'text-white' : 'text-[#0E6AF3]'
                  }`}
                  style={{ translateZ: 42 }}
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  className={`mt-3 text-sm font-normal leading-relaxed ${
                    step.highlighted ? 'text-white' : 'text-[#00184A]'
                  }`}
                  style={{ translateZ: 30 }}
                >
                  {step.description}
                </motion.p>

                <div className="mt-auto flex items-center pt-8" style={{ transform: 'translateZ(22px)' }}>
                  <span className={`h-4 w-4 rounded-full ${progressDot}`} />
                  <span className={`h-px flex-1 ${progressTrack}`} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-4xl text-center font-['Poppins',sans-serif] text-[clamp(1.15rem,2.3vw,1.6rem)] font-normal leading-tight text-white"
          style={{ textShadow: '0 1px 2px rgba(0,24,74,0.22)' }}
        >
<<<<<<< HEAD
           {/* Decorative ring */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
           
           <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Ready to build something extraordinary?</h3>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-lg font-bold text-white overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 group-hover:from-blue-700 group-hover:to-violet-700 transition-all" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] blur-xl transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Launch Your Project <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
              <p className="mt-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Initial consultation is free</p>
           </div>
        </motion.div>
=======
          A collaborative approach designed to turn ambitious ideas into scalable digital solutions.
        </motion.p>
>>>>>>> origin/main
      </div>
    </section>
  );
};

export default HowWeWork;
