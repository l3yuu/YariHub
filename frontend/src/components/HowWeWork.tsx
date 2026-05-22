import { motion, type Variants } from 'framer-motion';
import { Headphones, PenTool, Search, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Discovery call',
    description:
      'We dive deep into your vision, target audience, and business goals to define the perfect technical roadmap.',
    icon: Headphones,
    highlighted: true,
  },
  {
    title: 'Design & Prototype',
    description:
      'We dive deep into your vision, target audience, and business goals to define the perfect technical roadmap.',
    icon: PenTool,
    highlighted: false,
  },
  {
    title: 'Discovery call',
    description:
      'We dive deep into your vision, target audience, and business goals to define the perfect technical roadmap.',
    icon: Search,
    highlighted: true,
  },
  {
    title: 'Launch & Support',
    description:
      'We dive deep into your vision, target audience, and business goals to define the perfect technical roadmap.',
    icon: Rocket,
    highlighted: false,
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
    <section id="how-we-work" className="relative overflow-hidden bg-white text-[#00184A]">
      <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-b from-[#BBD8FF] via-[#2D8CFF] to-[#006CF6]" />

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
            Engineered for Results
          </motion.h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
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
          A transparent, structured methodology designed to transform your ambitious ideas into
          industry-leading digital products.
        </motion.p>
      </div>
    </section>
  );
};

export default HowWeWork;
