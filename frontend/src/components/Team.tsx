import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ProfileCard from './ProfileCard';
import type { SectionPageProps } from '../types/section';

const teamMembers = [
  { name: 'Ara Nina Legaspi', title: 'Business Analyst', handle: 'aranina', status: 'Online' },
  { name: 'Leumar Binas', title: 'Project Manager', handle: 'leumar', status: 'Online' },
  { name: 'Christian John Jimenez', title: 'Frontend Developer', handle: 'cjjimenez', status: 'Online' },
  { name: 'Luigi Avila', title: 'Frontend Developer', handle: 'luigi', status: 'Online' },
  { name: 'Lloyd Mangilog', title: 'Backend Developer', handle: 'lloydm', status: 'Online' },
  { name: 'John Louise Ernest Denila', title: 'Backend Developer', handle: 'jdenila', status: 'Online' },
  { name: 'Jasmine Mikaella Aninion', title: 'UI/UX Designer', handle: 'jasmine', status: 'Online' },
  { name: 'Carlos Miguel Adem', title: 'QA Engineer', handle: 'carlos', status: 'Online' },
];

const Team = ({ standalone = false }: SectionPageProps) => {
  const sectionPad = standalone ? 'pt-28 pb-24' : 'py-24';
  const { theme } = useTheme();

  return (
    <section id="team" className={`${sectionPad} bg-white relative overflow-hidden`}>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 35s linear infinite;
        }
        .animate-infinite-scroll:hover,
        .animate-infinite-scroll:active {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">The Minds Behind YariHub</p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Meet Our Team</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            A diverse group of innovators, designers, and engineers dedicated to building the future of digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Profile Card Carousel - Infinite Scroll */}
      <div className="w-full overflow-hidden pb-12 pt-4 relative flex">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-slate-50 dark:from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-infinite-scroll">
          {/* Group 1 */}
          <div className="flex gap-6 sm:gap-8 px-3 sm:px-4 flex-none">
            {teamMembers.map((member, idx) => (
              <div key={`g1-${idx}`} className="flex-none w-[240px] sm:w-[280px]">
                <ProfileCard
                  {...member}
                  enableTilt={true}
                  enableMobileTilt={false}
                  behindGlowEnabled={true}
                  behindGlowColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.2)'}
                />
              </div>
            ))}
          </div>

          {/* Group 2 (Duplicate for seamless loop) */}
          <div className="flex gap-6 sm:gap-8 px-3 sm:px-4 flex-none" aria-hidden="true">
            {teamMembers.map((member, idx) => (
              <div key={`g2-${idx}`} className="flex-none w-[240px] sm:w-[280px]">
                <ProfileCard
                  {...member}
                  enableTilt={true}
                  enableMobileTilt={false}
                  behindGlowEnabled={true}
                  behindGlowColor={theme === 'dark' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.2)'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-slate-50 dark:from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Instruction Tip */}
      <div className="text-center mt-4 relative z-20">
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium italic">
          Tip: Hover over the cards to pause the carousel
        </p>
      </div>
    </section>
  );
};

export default Team;
