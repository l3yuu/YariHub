import { CheckCircle2, Loader2, Phone } from 'lucide-react';
import { useState } from 'react';
import { SiGmail, SiViber } from 'react-icons/si';
import API_URL from '../config';

const serviceOptions = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud & DevOps'];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });

  const resetForm = () => {
    setFormData({ name: '', email: '', projectType: 'Web Development', message: '' });
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
      className="relative overflow-hidden bg-white px-5 pb-[150px] pt-[58px] font-['Sora'] text-[#06122b]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#5f9cf6_0%,#5f9cf6_12%,#2368ed_42%,#8bb8f6_72%,#ffffff_100%)]" />

      <div className="relative mx-auto max-w-[1000px]">
        <div className="mb-[43px] text-center text-white">
          <h2 className="text-[clamp(36px,5.1vw,50px)] font-bold leading-[1.05] tracking-[0]">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-[11px] text-[19px] font-normal leading-none tracking-[0]">
            Ready to take your digital presence to the next level? Let&apos;s talk.
          </p>
        </div>

        <div className="grid items-start gap-[58px] lg:grid-cols-[396px_524px]">
          <div className="space-y-[29px]">
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
                <span className="grid h-[45px] w-[45px] place-items-center rounded-[8px] border border-[#a8a8a8] bg-white text-[29px] text-[#ea4335]">
                  <SiGmail />
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

            <div className="flex min-h-[80px] items-center rounded-[14px] bg-white px-[21px] shadow-none">
              <div className="mr-[18px] h-[48px] w-[48px] shrink-0 rounded-[8px] bg-[#bfbfbf]" />
              <div>
                <h3 className="text-[14px] font-extrabold leading-none text-[#06122b]">Fast response time</h3>
                <p className="mt-[3px] text-[11px] font-normal leading-[13px] text-[#06122b]">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>

            <div className="pt-[31px] text-center">
              <a
                href="#contact-form"
                className="inline-flex h-[36px] min-w-[169px] items-center justify-center rounded-[14px] bg-[#2367ed] px-7 text-[19px] font-bold leading-none text-white transition-colors hover:bg-[#1656d5]"
              >
                Get Started
              </a>
            </div>
          </div>

          <div
            id="contact-form"
            className="rounded-[14px] border border-[#dcdcdc] bg-white px-[37px] pb-[33px] pt-[50px] shadow-[0_2px_3px_rgba(0,0,0,0.35)]"
          >
            {submitted ? (
              <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-5 h-16 w-16 text-[#2367ed]" />
                <h3 className="text-[28px] font-extrabold leading-none text-black">Message Sent!</h3>
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
                <h3 className="text-[28px] font-extrabold leading-none text-black">Project Inquiry Form</h3>
                <p className="mt-[27px] text-[13px] font-normal leading-none text-black">
                  Fill in the details below to request a quotation.
                </p>

                <div className="mt-[30px] space-y-[31px]">
                  <Field
                    id="name"
                    label="Name"
                    placeholder="John Doe"
                    requiredText="Required"
                    value={formData.name}
                    onChange={(value) => setFormData({ ...formData, name: value })}
                  />

                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="john@company.com"
                    requiredText="Required"
                    value={formData.email}
                    onChange={(value) => setFormData({ ...formData, email: value })}
                  />

                  <div>
                    <label className="mb-[5px] block text-[11px] font-normal leading-none text-black">
                      Service Interest
                    </label>
                    <div className="flex max-w-[426px] gap-[7px] overflow-hidden">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: service })}
                          className={`h-[29px] shrink-0 rounded-[13px] px-[10px] text-[10px] font-normal leading-none text-black ${
                            formData.projectType === service ? 'bg-[#e9e9e9]' : 'bg-[#f2f2f2]'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
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
                      className="h-[27px] w-full max-w-[399px] rounded-[14px] border border-[#dedede] px-[11px] text-[11px] font-normal text-black outline-none placeholder:text-[#8a8a8a] focus:border-[#2367ed]"
                    />
                    <p className="mt-[8px] text-[9px] font-normal leading-none text-[#808080]">
                      Maximum 500 characters
                    </p>
                  </div>
                </div>

                {error && <p className="mt-5 text-[11px] font-medium text-red-600">{error}</p>}

                <div className="mt-[29px] flex justify-end gap-[8px]">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="h-[37px] w-[185px] rounded-[13px] border border-[#2367ed] bg-white text-[13px] font-normal text-[#2367ed]"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-[37px] w-[185px] items-center justify-center rounded-[13px] bg-[#2367ed] text-[13px] font-normal text-white disabled:opacity-70"
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
  <a href={href} className="flex min-h-[80px] items-center rounded-[14px] bg-white px-[26px] transition-transform hover:-translate-y-0.5">
    <span className="mr-[28px] shrink-0">{icon}</span>
    <span>
      <span className="block text-[12px] font-bold leading-none text-[#1163ff]">{title}</span>
      <span className="mt-[5px] block text-[11px] font-normal leading-none text-[#808080]">{detail}</span>
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
      className="h-[27px] w-full max-w-[399px] rounded-[14px] border border-[#dedede] px-[11px] text-[11px] font-normal text-black outline-none placeholder:text-[#8a8a8a] focus:border-[#2367ed]"
    />
    <p className="mt-[8px] text-[9px] font-normal leading-none text-[#808080]">{requiredText}</p>
  </div>
);

export default Contact;
