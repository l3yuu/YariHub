import { motion } from 'framer-motion';
import { Users, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import CircuitPattern from './CircuitPattern';
import SectionMoreLink from './SectionMoreLink';
import type { SectionPageProps } from '../types/section';

const brandBlue = '#0E6AF3';

const stats = [
  { value: '120', label: 'Clients Served', icon: Users },
  { value: '200', label: 'Projects Delivered', icon: Layers },
];

const links = [
  { label: 'Portfolio', to: '/portfolio', external: false },
  { label: 'Github', href: 'https://github.com', external: true },
  { label: 'Linked In', href: 'https://linkedin.com', external: true },
  { label: 'Projects', to: '/portfolio', external: false },
];

const AboutUs = ({ standalone = false, preview = false, moreHref = '/about' }: SectionPageProps) => {
  const headerPad = standalone
    ? 'pt-28 pb-10 lg:pt-32 lg:pb-12'
    : 'pt-16 pb-10 lg:pt-20 lg:pb-12';

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* Header — blue gradient fade */}
      <div className={`relative ${headerPad}`}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(14, 106, 243, 0.12) 0%, rgba(14, 106, 243, 0.04) 40%, #ffffff 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-sm font-bold text-slate-900 mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              About Us
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif", color: brandBlue }}
            >
              We Craft Your Vision
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4fae?auto=format&fit=crop&w=1400&h=560&q=80"
            alt="YariHub team collaborating in the office"
            className="w-full aspect-[21/9] sm:aspect-[2.2/1] object-cover rounded-2xl lg:rounded-3xl shadow-md"
          />
        </motion.div>
      </div>

      {/* Bottom content — circuit pattern background */}
      <div className="relative pb-20 lg:pb-28">
        <CircuitPattern side="left" className="opacity-20 top-0 h-full" />
        <CircuitPattern side="right" className="opacity-20 top-0 h-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4 sm:gap-5"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl px-4 sm:px-5 py-5 border border-slate-200/80 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-3xl sm:text-4xl font-bold leading-none"
                      style={{ fontFamily: "'Poppins', sans-serif", color: brandBlue }}
                    >
                      {stat.value}
                    </span>
                    <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-300 shrink-0" strokeWidth={1.5} />
                  </div>
                  <p
                    className="text-xs sm:text-sm text-slate-500 font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Right — description + links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p
                className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                YariHub is a collaborative freelance studio based in the Philippines, focused on
                delivering practical and well-crafted digital solutions.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-white border border-slate-200 hover:border-[#0E6AF3] hover:shadow-sm transition-all"
                      style={{ fontFamily: "'Poppins', sans-serif", color: brandBlue }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.to!}
                      className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-white border border-slate-200 hover:border-[#0E6AF3] hover:shadow-sm transition-all"
                      style={{ fontFamily: "'Poppins', sans-serif", color: brandBlue }}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {preview && moreHref && <SectionMoreLink to={moreHref} label="Read more about us" />}
    </section>
  );
};

export default AboutUs;
