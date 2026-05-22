import { useEffect, useState } from 'react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import API_URL from '../config';

interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating: number;
  isVisible: boolean;
}

const fallbackTestimonials: Testimonial[] = [
  {
    _id: 'fallback-1',
    name: 'Local Business Owner',
    role: 'Founder',
    company: 'Growth Partner',
    quote: 'YariHub helped us turn a scattered idea into a polished system our team can actually use every day.',
    rating: 5,
    isVisible: true,
  },
  {
    _id: 'fallback-2',
    name: 'Startup Lead',
    role: 'Product Manager',
    company: 'Digital Venture',
    quote: 'The team moved quickly, communicated clearly, and shipped a clean product without losing sight of our users.',
    rating: 5,
    isVisible: true,
  },
  {
    _id: 'fallback-3',
    name: 'Operations Manager',
    role: 'Manager',
    company: 'Service Company',
    quote: 'Our internal workflow is easier to track now, and the admin tools feel simple enough for the whole team.',
    rating: 5,
    isVisible: true,
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_URL}/testimonials`);
        if (!response.ok) return;

        const data = await response.json();
        const visibleTestimonials = data.filter((testimonial: Testimonial) => testimonial.isVisible);
        if (visibleTestimonials.length > 0) {
          setTestimonials(visibleTestimonials);
        }
      } catch {
        setTestimonials(fallbackTestimonials);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 dark:opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Client Stories</p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Trusted by Teams That Ship
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            Real feedback from partners building practical digital products with YariHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.article
              key={testimonial._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-7 shadow-sm flex flex-col min-h-[300px]"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md">
                  <MessageSquareQuote className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-4 h-4 ${starIndex < testimonial.rating ? 'fill-current' : 'text-slate-300 dark:text-slate-700'}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-7 flex-1">
                {testimonial.quote}
              </p>

              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {[testimonial.role, testimonial.company].filter(Boolean).join(' • ') || 'YariHub Client'}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
