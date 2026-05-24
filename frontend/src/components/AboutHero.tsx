import { motion, type Variants } from 'framer-motion';
import { Layers, Users } from 'lucide-react';
import rectangleBg from '../assets/rectangle.png';
import triangle from '../assets/triangle.png';

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

const coreValues = [
  {
    letter: 'Y',
    title: 'Yielding Excellence',
    description:
      'Yielding Excellence Every solution is crafted beyond expectations - built with precision, intentional design, and a standard where good enough is never enough.',
  },
  {
    letter: 'A',
    title: 'Adaptive Innovative',
    description:
      'Adaptive Innovation Challenges are turned into opportunities by staying agile and embracing modern tools to deliver solutions that are practical and built for the real world.',
  },
  {
    letter: 'R',
    title: 'Relentless Partnership',
    description:
      'Relentless Partnership Built on deep collaboration, honest communication, and full accountability - every project is treated as a shared commitment to success.',
  },
  {
    letter: 'I',
    title: 'Intuitive Design',
    description:
      'Intuitive Design Every solution is built with people in mind - making complex technology feel simple, seamless, and purposeful for every user served.',
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

const AboutHero = () => {
  return (
    <>
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

      <section className="relative isolate bg-white text-[#00184A]">
        <div className="relative aspect-[1441/1024] min-h-[480px] w-full overflow-hidden sm:min-h-[560px] lg:min-h-0">
          <motion.img
            src={triangle}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, y: 70, rotateX: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0 z-10 h-full w-full object-fill"
            style={{ transformPerspective: 1400, transformStyle: 'preserve-3d' }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.55 }}
            className="absolute inset-x-0 top-[23%] z-20 px-5 text-center sm:px-8"
            style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
          >
            <div className="mx-auto max-w-5xl">
              <motion.h2
                className="font-['Poppins',sans-serif] text-[clamp(2rem,4.2vw,3.25rem)] font-bold uppercase leading-none tracking-normal text-[#00184A]"
                style={{ translateZ: 44 }}
              >
                Mission
              </motion.h2>
              <motion.p
                className="mx-auto mt-7 max-w-4xl font-['Poppins',sans-serif] text-base font-normal leading-relaxed text-[#00184A] sm:text-lg lg:text-[1.18rem]"
                style={{ translateZ: 26 }}
              >
                YariHub is committed to building meaningful digital solutions while empowering
                aspiring Filipino developers through real-world collaboration and experience.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.55 }}
            className="absolute inset-x-0 top-[54%] z-20 px-5 text-center sm:px-8"
            style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
          >
            <div className="mx-auto max-w-5xl">
              <motion.h2
                className="font-['Poppins',sans-serif] text-[clamp(2rem,4.2vw,3.25rem)] font-bold uppercase leading-none tracking-normal text-[#00184A]"
                style={{ translateZ: 44 }}
              >
                Vision
              </motion.h2>
              <motion.p
                className="mx-auto mt-7 max-w-4xl font-['Poppins',sans-serif] text-base font-normal leading-relaxed text-[#00184A] sm:text-lg lg:text-[1.18rem]"
                style={{ translateZ: 26 }}
              >
                To become a leading Filipino digital studio and innovation hub that empowers young
                developers to create impactful solutions and compete confidently in the global tech
                industry.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#00184A] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col items-center text-center">
            <h2 className="font-['Poppins',sans-serif] text-[clamp(2.25rem,6vw,4rem)] font-bold uppercase leading-none tracking-[0.08em] sm:tracking-[0.18em] lg:tracking-[0.28em] text-[#0E6AF3]">
              Core Values
            </h2>
            <div className="mt-3 h-0.5 w-full max-w-md bg-[#0E6AF3]" aria-hidden="true" />
          </div>

          <div className="grid gap-9 lg:grid-cols-2 lg:gap-x-20">
            {coreValues.map((value, index) => (
              <motion.article
                key={value.letter}
                custom={index}
                variants={card3d}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{
                  y: -10,
                  rotateX: 7,
                  rotateY: index % 2 === 0 ? -7 : 7,
                  boxShadow: '0 24px 55px -28px rgba(14,106,243,0.75)',
                }}
                className="rounded-xl border border-[#0E6AF3] bg-white px-6 py-5 text-center"
                style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <motion.p
                  className="font-['Poppins',sans-serif] text-5xl font-bold leading-none text-[#0E6AF3]"
                  style={{ translateZ: 46 }}
                >
                  {value.letter}
                </motion.p>
                <motion.h3
                  className="mt-2 font-['Poppins',sans-serif] text-xl font-bold uppercase leading-tight text-[#00184A] sm:text-2xl"
                  style={{ translateZ: 34 }}
                >
                  {value.title}
                </motion.h3>
                <motion.p
                  className="mx-auto mt-2 max-w-md font-['Poppins',sans-serif] text-sm leading-relaxed text-[#00184A] sm:text-base"
                  style={{ translateZ: 22 }}
                >
                  {value.description}
                </motion.p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
