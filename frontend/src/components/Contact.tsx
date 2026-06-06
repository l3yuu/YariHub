<<<<<<< HEAD
import { Loader2, CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
=======
import { CheckCircle2, Loader2, Phone } from 'lucide-react';
>>>>>>> origin/main
import { useState } from 'react';
import { SiViber } from 'react-icons/si';
import API_URL from '../config';
import type { SectionPageProps } from '../types/section';

<<<<<<< HEAD
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
=======
const serviceOptions = [
  'UI/UX Design',
  'Graphic Design',
  'Web Development',
  'Mobile App Development',
  'Web-Based Applications',
  'E-Commerce & Online Shops',
  'Business Management Systems',
  'Internal Company Portals',
  'CRM & Dashboard Solutions',
  'Custom SaaS Platforms',
  'Workflow Automation',
];

const Contact = () => {
>>>>>>> origin/main
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
<<<<<<< HEAD
    projectType: '',
=======
    projectType: 'UI/UX Design',
>>>>>>> origin/main
    message: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    message: '',
  });

  const resetForm = () => {
    setFormData({ name: '', email: '', projectType: 'UI/UX Design', message: '' });
    setValidationErrors({ email: '', message: '' });
    setError('');
  };

  const handleEmailChange = (val: string) => {
    setFormData((prev) => ({ ...prev, email: val }));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val && !emailRegex.test(val)) {
      setValidationErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
    } else {
      setValidationErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handleMessageChange = (val: string) => {
    const newlineCount = (val.match(/\n/g) || []).length;
    if (newlineCount > 2) {
      setValidationErrors((prev) => ({ ...prev, message: 'Maximum 2 paragraph breaks allowed' }));
    } else {
      setValidationErrors((prev) => ({ ...prev, message: '' }));
    }
    setFormData((prev) => ({ ...prev, message: val }));
  };

  const handleMessageKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const newlineCount = (formData.message.match(/\n/g) || []).length;
      if (newlineCount >= 2) {
        e.preventDefault();
        setValidationErrors((prev) => ({ ...prev, message: 'Maximum 2 paragraph breaks allowed' }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    if (!formData.projectType) {
      setError('Please select a service interest.');
      return;
    }
=======
    
    // Check validation errors
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;
    let emailError = '';
    let messageError = '';

    if (!emailRegex.test(formData.email)) {
      emailError = 'Please enter a valid email address';
      hasError = true;
    }

    const newlineCount = (formData.message.match(/\n/g) || []).length;
    if (newlineCount > 2) {
      messageError = 'Maximum 2 paragraph breaks allowed';
      hasError = true;
    }

    if (hasError) {
      setValidationErrors({
        email: emailError,
        message: messageError,
      });
      return;
    }

>>>>>>> origin/main
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
<<<<<<< HEAD
        setFormData({ name: '', email: '', projectType: '', message: '' });
=======
        resetForm();
>>>>>>> origin/main
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
<<<<<<< HEAD
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
=======
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-4 pb-20 pt-12 font-['Sora'] text-[#06122b] sm:px-6 sm:pb-28 sm:pt-14 lg:px-5 lg:pb-[150px] lg:pt-[58px]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0E6AF3_0%,#0E6AF3_12%,#2368ed_42%,#8bb8f6_72%,#ffffff_100%)]" />

      <div className="relative mx-auto max-w-[1000px]">
        <div className="mb-8 text-center text-white sm:mb-10 lg:mb-[43px]">
          <h2 className="text-[clamp(32px,8vw,50px)] font-bold leading-[1.05] tracking-[0]">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[15px] font-normal leading-[1.35] tracking-[0] sm:text-[17px] md:text-[19px] md:leading-none">
>>>>>>> origin/main
            Ready to take your digital presence to the next level? Let&apos;s talk.
          </p>
        </div>

<<<<<<< HEAD
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
=======
        <div className="grid items-start gap-9 md:gap-12 lg:grid-cols-[396px_524px] lg:gap-[58px]">
          <div className="space-y-4 sm:space-y-5 lg:space-y-[29px]">
            <ContactCard
              icon={
                <span className="grid h-[45px] w-[45px] place-items-center rounded-[9px] bg-[#894aaa] text-white">
                  <SiViber className="h-[27px] w-[27px]" />
                </span>
              }
              title="Viber"
              detail="0900-000-000"
              href="viber://chat?number=0900000000"
            />

            <ContactCard
              icon={
                <span className="grid h-[45px] w-[45px] place-items-center rounded-[8px] border border-[#a8a8a8] bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" className="h-[21px] w-[28px]">
                    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                  </svg>
                </span>
              }
              title="Email Us"
              detail="yarihubitsolutions@gmail.com"
              href="mailto:yarihubitsolutions@gmail.com"
            />

            <ContactCard
              icon={
                <span className="grid h-[45px] w-[45px] place-items-center rounded-[9px] bg-[#36b835] text-white">
                  <Phone className="h-[27px] w-[27px] fill-current" />
                </span>
              }
              title="Book a Call"
              detail="0900-000-0000"
              href="tel:09000000000"
            />

            <div className="flex min-h-[80px] items-center rounded-[14px] bg-white px-5 shadow-none sm:px-[21px]">
              <div className="mr-[18px] h-[48px] w-[48px] shrink-0 rounded-[8px] bg-[#bfbfbf]" />
              <div>
                <h3 className="text-[14px] font-extrabold leading-tight text-[#06122b]">Fast response time</h3>
                <p className="mt-[3px] text-[11px] font-normal leading-[13px] text-[#06122b]">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>

            <div className="pt-4 text-center sm:pt-6 lg:pt-[31px]">
              <a
                href="#contact-form"
                className="inline-flex h-[40px] min-w-[169px] items-center justify-center rounded-[14px] bg-[#2367ed] px-7 text-[17px] font-bold leading-none text-white transition-colors hover:bg-[#1656d5] sm:h-[36px] sm:text-[19px]"
              >
                Get Started
              </a>
            </div>
          </div>

          <div
            id="contact-form"
            className="w-full rounded-[14px] border border-[#dcdcdc] bg-white px-5 pb-7 pt-8 shadow-[0_2px_3px_rgba(0,0,0,0.35)] sm:px-8 sm:pb-[33px] sm:pt-10 lg:px-[37px] lg:pt-[50px]"
          >
            {submitted ? (
              <div className="flex min-h-[340px] flex-col items-center justify-center text-center sm:min-h-[440px]">
                <CheckCircle2 className="mb-5 h-16 w-16 text-[#2367ed]" />
                <h3 className="text-[24px] font-extrabold leading-none text-black sm:text-[28px]">Message Sent!</h3>
                <p className="mt-4 max-w-[340px] text-[13px] leading-[18px] text-[#333]">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 h-[36px] rounded-[14px] bg-[#2367ed] px-8 text-[13px] text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[28px] sm:leading-none">
                  Project Inquiry Form
                </h3>
                <p className="mt-4 text-[13px] font-normal leading-[1.35] text-black sm:mt-[27px] sm:leading-none">
                  Fill in the details below to request a quotation.
                </p>

                <div className="mt-6 space-y-6 sm:mt-[30px] sm:space-y-[31px]">
                  <Field
                    id="name"
                    label="Name"
                    placeholder="Full Name"
                    requiredText="Required"
                    value={formData.name}
                    onChange={(value) => setFormData({ ...formData, name: value })}
                  />

                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="email"
                    requiredText="Required"
                    value={formData.email}
                    onChange={handleEmailChange}
                    error={validationErrors.email}
                  />


                  <div>
                    <label htmlFor="serviceInterest" className="mb-[5px] block text-[11px] font-normal leading-none text-black">
                      Service Interest
                    </label>
                    <select
                      id="serviceInterest"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="h-9 w-full max-w-[399px] rounded-[14px] border border-[#dedede] bg-white px-[11px] text-[12px] font-normal text-black outline-none focus:border-[#2367ed] sm:h-[27px] sm:text-[11px] appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <p className="mt-[7px] text-[9px] font-normal leading-none text-[#808080]">Select one</p>
                  </div>


                  <div>
                    <label htmlFor="message" className="mb-[5px] block text-[11px] font-normal leading-none text-black">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => handleMessageChange(e.target.value)}
                      onKeyDown={handleMessageKeyDown}
                      placeholder="Tell us about your project..."
                      className={`w-full max-w-[399px] rounded-[14px] border px-[11px] py-[8px] text-[12px] font-normal text-black outline-none placeholder:text-[#8a8a8a] sm:text-[11px] min-h-[80px] resize-y ${
                        validationErrors.message ? 'border-red-500 focus:border-red-500' : 'border-[#dedede] focus:border-[#2367ed]'
                      }`}
                    />
                    {validationErrors.message ? (
                      <p className="mt-[8px] text-[9px] font-medium leading-none text-red-500">
                        {validationErrors.message}
                      </p>
                    ) : (
                      <p className="mt-[8px] text-[9px] font-normal leading-none text-[#808080]">
                        Maximum 500 characters & 2 paragraph breaks
                      </p>
                    )}
                  </div>
                </div>

                {error && <p className="mt-5 text-[11px] font-medium text-red-600">{error}</p>}

                <div className="mt-7 flex flex-col justify-end gap-3 sm:mt-[29px] sm:flex-row sm:gap-[8px]">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="h-[40px] w-full rounded-[13px] border border-[#2367ed] bg-white text-[13px] font-normal text-[#2367ed] sm:h-[37px] sm:w-[185px]"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-[40px] w-full items-center justify-center rounded-[13px] bg-[#2367ed] text-[13px] font-normal text-white disabled:opacity-70 sm:h-[37px] sm:w-[185px]"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </section>
  );
};

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
};

const ContactCard = ({ icon, title, detail, href }: ContactCardProps) => (
  <a
    href={href}
    className="flex min-h-[80px] items-center rounded-[14px] bg-white px-5 transition-transform hover:-translate-y-0.5 sm:px-[26px]"
  >
    <span className="mr-4 shrink-0 sm:mr-[28px]">{icon}</span>
    <span className="min-w-0">
      <span className="block text-[12px] font-bold leading-none text-[#1163ff]">{title}</span>
      <span className="mt-[5px] block break-words text-[11px] font-normal leading-[1.25] text-[#808080]">{detail}</span>
    </span>
  </a>
);

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  requiredText: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
};

const Field = ({ id, label, placeholder, requiredText, value, onChange, type = 'text', error }: FieldProps) => (
  <div>
    <label htmlFor={id} className="mb-[5px] block text-[11px] font-normal leading-none text-black">
      {label}
    </label>
    <input
      id={id}
      type={type}
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`h-9 w-full max-w-[399px] rounded-[14px] border px-[11px] text-[12px] font-normal text-black outline-none placeholder:text-[#8a8a8a] sm:h-[27px] sm:text-[11px] ${
        error ? 'border-red-500 focus:border-red-500' : 'border-[#dedede] focus:border-[#2367ed]'
      }`}
    />
    {error ? (
      <p className="mt-[8px] text-[9px] font-medium leading-none text-red-500">{error}</p>
    ) : (
      <p className="mt-[8px] text-[9px] font-normal leading-none text-[#808080]">{requiredText}</p>
    )}
  </div>
);

export default Contact;
