import { motion, type Variants } from 'framer-motion';
import { Layers, Users } from 'lucide-react';
import rectangleBg from '../assets/rectangle.png';

const statCards = [
  {
    value: '120',
    label: 'Clients Served',
    icon: Users,
  },
  {
    value: '200',
    label: 'Projects Delivered',
    icon: Layers,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const card3d: Variants = {
  hidden: { opacity: 0, y: 24, rotateX: 12, scale: 0.96 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AboutPreview = () => {
  return (
    <section id="about" className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-white text-[#00184A]">
      <motion.img
        src={rectangleBg}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-start pt-12 sm:pt-16 lg:pt-24 px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="w-full max-w-3xl lg:max-w-[65%]"
          style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
        >
          <motion.p
            className="font-['Poppins',sans-serif] text-2xl font-bold leading-tight text-[#00184A] sm:text-3xl"
            style={{ translateZ: 28 }}
          >
            About Us
          </motion.p>
          <motion.h2
            className="mt-1 font-['Poppins',sans-serif] text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-normal text-[#0E6AF3]"
            style={{ translateZ: 56 }}
          >
            We Craft Your Vision
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl font-['Poppins',sans-serif] text-base font-medium leading-relaxed text-[#00184A] sm:text-lg"
            style={{ translateZ: 34 }}
          >
            YariHub is a collaborative freelance studio based in the Philippines, focused on delivering practical and well-crafted digital solutions.
          </motion.p>

          <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-12">
            {['Portfolio', 'Github', 'Linked In', 'Projects'].map(item => (
              <motion.a
                key={item}
                href="#portfolio"
                whileHover={{ y: -4, rotateX: 8, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-8 items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-bold text-[#0E6AF3] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ transformPerspective: 900, transformStyle: 'preserve-3d' }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="mt-8 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={card3d}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -8, rotateX: 8, rotateY: index === 0 ? -8 : 8, scale: 1.03 }}
                className="rounded-2xl border-4 sm:border-[8px] border-[#0E6AF3] bg-white p-4 shadow-[inset_0_0_0_2px_rgba(14,106,243,0.16)]"
                style={{ transformPerspective: 900, transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    className="font-['Poppins',sans-serif] text-4xl font-bold leading-none text-[#0E6AF3]"
                    style={{ translateZ: 34 }}
                  >
                    {stat.value}
                  </motion.span>
                  <stat.icon className="h-5 w-5 text-neutral-700" style={{ transform: 'translateZ(24px)' }} />
                </div>
                <p className="mt-2 text-sm text-slate-600" style={{ transform: 'translateZ(18px)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
