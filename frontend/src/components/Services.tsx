import { useState, type MouseEvent } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero4Bg from '../assets/hero4bg.png';
import phone from '../assets/cp.png';
import laptop from '../assets/laptop.png';
import systemImg from '../assets/system.png';

const services = [
  {
    id: 'uiux',
    label: 'UI/UX Design',
    title: 'UI/UX Design',
    description:
      'We create intuitive and visually engaging user experiences that improve usability, customer interaction, and overall digital performance across web and mobile platforms.',
    device: 'phone',
  },
  {
    id: 'web',
    label: 'Web Development',
    title: 'Web Development',
    description:
      'Custom-built websites designed for performance, responsiveness, scalability, and seamless user experience tailored to your business needs.',
    device: 'laptop',
  },
  {
    id: 'system',
    label: 'System Development',
    title: 'System Development',
    description:
      'Reliable business systems built to streamline operations, automate workflows, and support long-term growth with scalable architecture.',
    device: 'system',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggered: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const phoneRotateX = useMotionValue(0);
  const phoneRotateY = useMotionValue(0);
  const smoothRotateX = useSpring(phoneRotateX, { stiffness: 220, damping: 22 });
  const smoothRotateY = useSpring(phoneRotateY, { stiffness: 220, damping: 22 });

  const handlePhoneMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    phoneRotateX.set(y * -16);
    phoneRotateY.set(x * 18);
  };

  const resetPhoneTilt = () => {
    phoneRotateX.set(0);
    phoneRotateY.set(0);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-white text-[#00184A]">
      <div className="relative w-full overflow-hidden min-h-[auto] lg:min-h-[calc(100svh-4rem)]">
        {/* Background image — on mobile it only covers the top blue zone */}
        <motion.img
          src={hero4Bg}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: -35, scale: 1.02 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-top lg:object-fill"
        />

        {/* ===== DESKTOP: original grid layout (lg+) ===== */}
        <div className="relative z-10 hidden lg:grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[55%_45%] items-start gap-0 px-[clamp(1.25rem,4vw,4rem)] pt-[clamp(2rem,6vh,5rem)] pb-[clamp(2rem,4vh,3rem)]">
          <div className="flex flex-col items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
            >
              <motion.h2
                className="font-['Poppins',sans-serif] text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-normal text-white whitespace-nowrap"
                style={{ translateZ: 54, textShadow: '0 2px 0 rgba(0,24,74,0.16)' }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className="mt-2 max-w-md font-['Poppins',sans-serif] text-[clamp(0.82rem,1.45vw,1.15rem)] font-normal leading-tight text-white"
                style={{ translateZ: 34 }}
              >
                End-to-end digital solutions tailored for Filipino businesses at every stage.
              </motion.p>
            </motion.div>

            <div className="mt-[clamp(1.5rem,3.5vh,3rem)] flex flex-wrap gap-4">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveService(service)}
                  custom={index}
                  variants={staggered}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  whileHover={{ y: -5, rotateX: 8, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-xl bg-white px-6 py-2.5 font-['Poppins',sans-serif] text-sm font-bold text-[#0E6AF3] shadow-[0_4px_10px_rgba(0,24,74,0.28)] ${
                    activeService.id === service.id ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0E6AF3]' : ''
                  }`}
                  style={{ transformPerspective: 900, transformStyle: 'preserve-3d' }}
                >
                  {service.label}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-[clamp(7rem,18vh,13rem)] max-w-[38rem] text-left"
              >
                <h3
                  className="font-['Poppins',sans-serif] text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold leading-none tracking-normal text-[#0E6AF3]"
                >
                  {activeService.title}
                </h3>
                <p
                  className="mt-5 font-['Poppins',sans-serif] text-lg font-normal leading-relaxed text-[#00184A]"
                >
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center font-['Poppins',sans-serif] text-sm font-medium text-[#0E6AF3] transition-colors hover:text-[#0D5DD3]"
            >
              Learn more <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Desktop device image */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: -12, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handlePhoneMove}
            onMouseLeave={resetPhoneTilt}
            className="flex items-center justify-center cursor-grab active:cursor-grabbing lg:max-h-[calc(100svh-6rem)] self-center"
            style={{ transformPerspective: 1400, transformStyle: 'preserve-3d' }}
          >
            <AnimatePresence mode="wait">
              {activeService.device === 'phone' ? (
                <motion.img key="phone" src={phone} alt="" aria-hidden="true" initial={{ opacity: 0, scale: 0.92, rotateY: -12 }} animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -10, 0] }} exit={{ opacity: 0, scale: 0.92, rotateY: 12 }} transition={{ duration: 0.45, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }} className="h-auto w-full max-w-[clamp(16rem,26vw,26rem)] max-h-[calc(100svh-8rem)] object-contain" style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }} />
              ) : activeService.device === 'laptop' ? (
                <motion.img key="laptop" src={laptop} alt="" aria-hidden="true" initial={{ opacity: 0, scale: 0.92, rotateY: -12 }} animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -8, 0] }} exit={{ opacity: 0, scale: 0.92, rotateY: 12 }} transition={{ duration: 0.45, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' } }} className="h-auto w-full max-w-[clamp(22rem,38vw,42rem)]" style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }} />
              ) : (
                <motion.img key="system" src={systemImg} alt="" aria-hidden="true" initial={{ opacity: 0, scale: 0.92, rotateY: -12 }} animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -8, 0] }} exit={{ opacity: 0, scale: 0.92, rotateY: 12 }} transition={{ duration: 0.45, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' } }} className="h-auto w-full max-w-[clamp(22rem,38vw,42rem)]" style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }} />
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ===== MOBILE: stacked layout (<lg) ===== */}
        <div className="relative z-10 lg:hidden">
          {/* Blue header zone */}
          <div className="px-5 pt-6 pb-8 text-center sm:px-8 sm:pt-8 sm:pb-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
            >
              <motion.h2
                className="font-['Poppins',sans-serif] text-3xl font-semibold leading-[0.92] tracking-normal text-white sm:text-4xl"
                style={{ translateZ: 54, textShadow: '0 2px 0 rgba(0,24,74,0.16)' }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className="mt-2 mx-auto max-w-sm font-['Poppins',sans-serif] text-xs font-normal leading-tight text-white/90 sm:text-sm"
                style={{ translateZ: 34 }}
              >
                End-to-end digital solutions tailored for Filipino businesses at every stage.
              </motion.p>
            </motion.div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveService(service)}
                  custom={index}
                  variants={staggered}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-lg bg-white px-3 py-1.5 font-['Poppins',sans-serif] text-[11px] font-bold text-[#0E6AF3] shadow-[0_3px_8px_rgba(0,24,74,0.25)] sm:rounded-xl sm:px-4 sm:py-2 sm:text-xs ${
                    activeService.id === service.id ? 'ring-2 ring-white ring-offset-1 ring-offset-[#0E6AF3]' : ''
                  }`}
                  style={{ transformPerspective: 900, transformStyle: 'preserve-3d' }}
                >
                  {service.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* White content zone */}
          <div className="relative bg-white px-5 pt-6 pb-8 text-center sm:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-['Poppins',sans-serif] text-2xl font-bold leading-none tracking-normal text-[#0E6AF3] sm:text-3xl">
                  {activeService.title}
                </h3>
                <p className="mt-3 mx-auto max-w-md font-['Poppins',sans-serif] text-sm font-normal leading-relaxed text-[#00184A] sm:text-base">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <Link
              to="/services"
              className="mt-4 inline-flex items-center font-['Poppins',sans-serif] text-sm font-medium text-[#0E6AF3] transition-colors hover:text-[#0D5DD3]"
            >
              Learn more <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
            </Link>

            {/* Mobile device image */}
            <div className="mt-6 flex justify-center">
              <AnimatePresence mode="wait">
                {activeService.device === 'phone' ? (
                  <motion.img key="phone-m" src={phone} alt="" aria-hidden="true" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }} className="h-auto w-full max-w-[10rem] sm:max-w-[12rem] object-contain" />
                ) : activeService.device === 'laptop' ? (
                  <motion.img key="laptop-m" src={laptop} alt="" aria-hidden="true" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' } }} className="h-auto w-full max-w-[14rem] sm:max-w-[18rem] object-contain" />
                ) : (
                  <motion.img key="system-m" src={systemImg} alt="" aria-hidden="true" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' } }} className="h-auto w-full max-w-[14rem] sm:max-w-[18rem] object-contain" />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Services;
