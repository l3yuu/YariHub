import { Loader2, CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import API_URL from '../config';
import type { SectionPageProps } from '../types/section';

const brandBlue = '#0E6AF3';

const PHONE_DISPLAY = '0960 521 5327';
const PHONE_TEL = '+639605215327';

const contactCards: {
  title: string;
  detail: string;
  href: string;
  titleColor: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Viber',
    detail: PHONE_DISPLAY,
    href: 'viber://chat?number=639605215327',
    titleColor: brandBlue,
    icon: MessageCircle,
  },
  {
    title: 'Email Us',
    detail: 'yarihubitsolutions@gmail.com',
    href: 'mailto:yarihubitsolutions@gmail.com',
    titleColor: brandBlue,
    icon: Mail,
  },
  {
    title: 'Book a Call',
    detail: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    titleColor: brandBlue,
    icon: Phone,
  },
];

const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud & DevOps',
];

const Contact = ({ standalone = false }: SectionPageProps) => {
  const sectionPad = standalone ? 'pt-28 pb-20 lg:pb-24' : 'py-20 lg:py-24';
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectType) {
      setError('Please select a service interest.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          projectType: formData.projectType,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Connection error. Please check your internet and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', projectType: '', message: '' });
    setError('');
  };

  return (
    <section id="contact" className={sectionPad} style={{ backgroundColor: brandBlue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let&apos;s Build Something Great
          </h2>
          <p
            className="text-white/90 text-sm sm:text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to take your digital presence to the next level? Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Left — contact cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
              <motion.a
                key={card.title}
                href={card.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center gap-4 p-4 sm:p-5 bg-white rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#0E6AF3] transition-all duration-200 group-hover:border-[#0E6AF3] group-hover:bg-[#0E6AF3] group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/25"
                  aria-hidden
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4
                    className="font-semibold text-sm mb-0.5"
                    style={{ fontFamily: "'Poppins', sans-serif", color: card.titleColor }}
                  >
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-500 truncate" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {card.detail}
                  </p>
                </div>
              </motion.a>
            );
            })}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-2xl"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-200" aria-hidden />
              <div>
                <h4
                  className="font-bold text-sm text-slate-900 mb-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Fast response time
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — inquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-500 max-w-sm mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Thank you for reaching out. We&apos;ve received your inquiry and will get back to you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                    style={{ backgroundColor: brandBlue, fontFamily: "'Poppins', sans-serif" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3
                      className="text-lg font-bold text-slate-900 mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Fill in the details below to request a quotation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-900 mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E6AF3]/30 focus:border-[#0E6AF3] text-sm"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                      <p className="text-xs text-slate-400 mt-1.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Required
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-900 mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E6AF3]/30 focus:border-[#0E6AF3] text-sm"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                      <p className="text-xs text-slate-400 mt-1.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Required
                      </p>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold text-slate-900 mb-3"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Service Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: service })}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                              formData.projectType === service
                                ? 'bg-[#0E6AF3] text-white'
                                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                            }`}
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400 mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Select one
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-900 mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        maxLength={500}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E6AF3]/30 focus:border-[#0E6AF3] text-sm resize-none"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                      <p className="text-xs text-slate-400 mt-1.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Maximum 500 characters ({formData.message.length}/500)
                      </p>
                    </div>

                    {error && (
                      <p className="text-sm font-medium text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                        {error}
                      </p>
                    )}

                    <div className="flex flex-wrap justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleClear}
                        className="px-6 py-2.5 rounded-xl text-sm font-semibold border-2 transition-colors hover:bg-blue-50"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: brandBlue,
                          borderColor: brandBlue,
                        }}
                      >
                        Clear
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                        style={{ backgroundColor: brandBlue, fontFamily: "'Poppins', sans-serif" }}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
