import { useState, type MouseEvent } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
        <motion.img
          src={hero4Bg}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: -35, scale: 1.02 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
        />

        <div className="relative z-10 grid grid-cols-1 items-start gap-0 px-[clamp(1.25rem,4vw,4rem)] pt-[clamp(1.5rem,6vh,5rem)] pb-[clamp(1.5rem,4vh,3rem)] lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[55%_45%]">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
            >
              <motion.h2
                className="font-['Poppins',sans-serif] text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-normal text-white sm:whitespace-nowrap"
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

            <div className="mt-[clamp(1.2rem,3.5vh,3rem)] flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
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
                  className={`rounded-xl bg-white px-4 py-2 font-['Poppins',sans-serif] text-[clamp(0.75rem,1vw,0.95rem)] font-bold text-[#0E6AF3] shadow-[0_4px_10px_rgba(0,24,74,0.28)] sm:px-6 sm:py-2.5 ${
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
                className="mt-6 max-w-[38rem] text-center sm:mt-8 lg:mt-[clamp(7rem,18vh,13rem)] lg:text-left"
              >
                <h3
                  className="font-['Poppins',sans-serif] text-[clamp(1.8rem,4.8vw,4.2rem)] font-bold leading-none tracking-normal text-[#0E6AF3]"
                >
                  {activeService.title}
                </h3>
                <p
                  className="mt-3 font-['Poppins',sans-serif] text-[clamp(0.88rem,1.5vw,1.25rem)] font-normal leading-relaxed text-[#00184A] sm:mt-5"
                >
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ x: 4, y: -3 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 inline-flex items-center font-['Poppins',sans-serif] text-sm font-medium text-[#0E6AF3] sm:mt-8"
            >
              Learn more <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: -12, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handlePhoneMove}
            onMouseLeave={resetPhoneTilt}
            className="flex items-center justify-center cursor-grab active:cursor-grabbing mt-6 lg:mt-0 lg:max-h-[calc(100svh-6rem)] self-center"
            style={{ transformPerspective: 1400, transformStyle: 'preserve-3d' }}
          >
            <AnimatePresence mode="wait">
              {activeService.device === 'phone' ? (
                <motion.img
                  key="phone"
                  src={phone}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.92, rotateY: -12 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -10, 0] }}
                  exit={{ opacity: 0, scale: 0.92, rotateY: 12 }}
                  transition={{ duration: 0.45, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
                  className="h-auto w-full max-w-[14rem] sm:max-w-[18rem] lg:max-w-[clamp(16rem,26vw,26rem)] max-h-[50vh] lg:max-h-[calc(100svh-8rem)] object-contain"
                  style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }}
                />
              ) : activeService.device === 'laptop' ? (
                <motion.img
                  key="laptop"
                  src={laptop}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.92, rotateY: -12 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -8, 0] }}
                  exit={{ opacity: 0, scale: 0.92, rotateY: 12 }}
                  transition={{ duration: 0.45, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' } }}
                  className="h-auto w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[clamp(22rem,38vw,42rem)]"
                  style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }}
                />
              ) : (
                <motion.img
                  key="system"
                  src={systemImg}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.92, rotateY: -12 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -8, 0] }}
                  exit={{ opacity: 0, scale: 0.92, rotateY: 12 }}
                  transition={{ duration: 0.45, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' } }}
                  className="h-auto w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[clamp(22rem,38vw,42rem)]"
                  style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="https://wa.me/639000000000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 p-3 shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/50 sm:bottom-6 sm:right-6 sm:h-13 sm:w-13"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </section>
  );
};

export default Services;
