import { motion } from 'framer-motion';
import { aboutMenuItems } from '../data/aboutMenu';

const AboutSections = () => (
  <section className="py-16 bg-slate-50 border-t border-slate-100">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {aboutMenuItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.slug}
            id={item.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="scroll-mt-28 flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#2563EB]">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          </motion.article>
        );
      })}
    </div>
  </section>
);

export default AboutSections;
