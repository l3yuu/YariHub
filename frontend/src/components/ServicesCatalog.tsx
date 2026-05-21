import { motion } from 'framer-motion';
import { servicesMenuItems } from '../data/servicesMenu';

const ServicesCatalog = () => (
  <section className="py-16 bg-slate-50 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-3">
          All services
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What we offer
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {servicesMenuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.slug}
              id={item.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="scroll-mt-28 flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#2563EB]">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesCatalog;
