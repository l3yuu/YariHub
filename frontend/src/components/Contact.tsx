import { CheckCircle2, Loader2, Phone } from 'lucide-react';
import { useState } from 'react';
import { SiViber } from 'react-icons/si';
import API_URL from '../config';

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
  'POS Systems',
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: '',
  });

  const resetForm = () => {
    setFormData({ name: '', email: '', projectType: 'UI/UX Design', message: '' });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        resetForm();
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

  return (
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
            Ready to take your digital presence to the next level? Let&apos;s talk.
          </p>
        </div>

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
                    onChange={(value) => setFormData({ ...formData, email: value })}
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
                    <input
                      id="message"
                      required
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="h-9 w-full max-w-[399px] rounded-[14px] border border-[#dedede] px-[11px] text-[12px] font-normal text-black outline-none placeholder:text-[#8a8a8a] focus:border-[#2367ed] sm:h-[27px] sm:text-[11px]"
                    />
                    <p className="mt-[8px] text-[9px] font-normal leading-none text-[#808080]">
                      Maximum 500 characters
                    </p>
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
};

const Field = ({ id, label, placeholder, requiredText, value, onChange, type = 'text' }: FieldProps) => (
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
      className="h-9 w-full max-w-[399px] rounded-[14px] border border-[#dedede] px-[11px] text-[12px] font-normal text-black outline-none placeholder:text-[#8a8a8a] focus:border-[#2367ed] sm:h-[27px] sm:text-[11px]"
    />
    <p className="mt-[8px] text-[9px] font-normal leading-none text-[#808080]">{requiredText}</p>
  </div>
);

export default Contact;
