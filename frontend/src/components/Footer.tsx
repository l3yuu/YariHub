<<<<<<< HEAD
import { Send } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import type { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const brandBlue = '#0E6AF3';

const iconClass = 'w-[18px] h-[18px] transition-colors group-hover:text-white';

const socialLinks: { label: string; href: string; icon: IconType }[] = [
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'LinkedIn', href: '#', icon: FaLinkedin },
  { label: 'GitHub', href: '#', icon: FaGithub },
  { label: 'X (Twitter)', href: '#', icon: FaXTwitter },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Web Development', to: '/services' },
  { label: 'Mobile Apps', to: '/services' },
  { label: 'System Dev', to: '/services' },
  { label: 'UI/UX Design', to: '/services' },
  { label: 'Consulting', to: '/services' },
=======
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiFacebook, SiGithub, SiInstagram } from 'react-icons/si';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/about' },
  { label: 'Blog', href: '/' },
  { label: 'Documentation', href: '/' },
  { label: 'Support', href: '/#contact' },
];

const serviceLinks = [
  { label: 'Web Development', href: '/services' },
  { label: 'Mobile Apps', href: '/services' },
  { label: 'System Dev', href: '/services' },
  { label: 'UI/UX Design', href: '/services' },
  { label: 'Consulting', href: '/services' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/yarihubitsolutions/',
    icon: <SiInstagram className="h-6 w-6" />,
    hoverColor: 'hover:text-[#e1306c]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/yarihub',
    icon: <FaLinkedinIn className="h-6 w-6" />,
    hoverColor: 'hover:text-[#0a66c2]',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/l3yuu/YariHub',
    icon: <SiGithub className="h-[25px] w-[25px]" />,
    hoverColor: 'hover:text-[#24292e]',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61589468530687',
    icon: <SiFacebook className="h-6 w-6" />,
    hoverColor: 'hover:text-[#1877f2]',
  },
>>>>>>> origin/main
];

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-white">
      {/* Main footer — white */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Link to="/">
              <Logo />
            </Link>
            <p
              className="text-sm text-slate-500 leading-relaxed max-w-xs"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              YariHub is a collaborative freelance studio based in the Philippines, focused on
              delivering practical and well-crafted digital solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group w-10 h-10 flex items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#0E6AF3] transition-all duration-200 hover:border-[#0E6AF3] hover:bg-[#0E6AF3] hover:text-white hover:shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  >
                    <Icon className={iconClass} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-wide mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", color: brandBlue }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-500 hover:text-[#0E6AF3] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-wide mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", color: brandBlue }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-500 hover:text-[#0E6AF3] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4
              className="text-sm font-bold uppercase tracking-wide mb-5"
              style={{ fontFamily: "'Poppins', sans-serif", color: brandBlue }}
            >
              Newsletter
            </h4>
            <p
              className="text-sm text-slate-500 mb-4 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Stay updated with our latest news and tech insights.
            </p>
            <form
              className="flex items-center gap-2 rounded-xl px-4 py-2"
              style={{ backgroundColor: brandBlue }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 min-w-0 bg-transparent text-sm text-white placeholder:text-white/80 outline-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              />
              <button
                type="submit"
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-white hover:bg-white/90 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" style={{ color: brandBlue }} />
              </button>
            </form>
=======
    <footer className="bg-white font-sans text-[#071d3c]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 sm:py-14 md:gap-12 lg:grid-cols-[1.45fr_0.7fr_0.75fr_1fr] lg:gap-14 lg:px-[50px] lg:pb-[58px] lg:pt-[154px]">
        <div className="flex min-h-0 flex-col justify-between gap-8 sm:col-span-2 lg:col-span-1 lg:min-h-[268px] lg:gap-10">
          <div>
            <Link to="/" aria-label="Yari Hub home" className="inline-flex w-fit">
              <img src="/logo.png" alt="Yari Hub IT Solutions" className="h-auto w-[170px] sm:w-[190px] lg:w-[205px]" />
            </Link>
            <p className="mt-5 max-w-[420px] font-['Sora'] text-[14px] font-extralight leading-[20px] tracking-[0] text-[#071d3c] sm:text-[15px] lg:max-w-[342px]">
              YariHub is a collaborative freelance studio based in the Philippines, focused on
              delivering practical and well-crafted digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 lg:pl-[15px]">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-[#071d3c]/60 transition-all duration-300 hover:-translate-y-1 ${social.hoverColor}`}
              >
                {social.icon}
              </a>
            ))}
>>>>>>> origin/main
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Bottom bar — blue */}
      <div className="text-white text-sm" style={{ backgroundColor: brandBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          <p className="text-white/95 whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
            © 2026 YariHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="#"
              className="text-white/95 hover:text-white transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/95 hover:text-white transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a
              href="mailto:yarihubitsolutions@gmail.com"
              className="text-white/95 hover:text-white hover:underline transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              yarihubitsolutions@gmail.com
            </a>
          </div>
=======
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Services" links={serviceLinks} />

        <div className="lg:pl-[4px]">
          <h2 className="mb-3 text-[14px] font-extrabold uppercase leading-none tracking-[-0.01em] text-[#071d3c] sm:text-[15px] lg:mb-[14px]">
            Newsletter
          </h2>
          <p className="mb-4 max-w-[300px] text-[13px] font-medium leading-[1.25] tracking-[0] text-[#071d3c] sm:text-[14px] lg:mb-[19px] lg:text-[14px] lg:leading-[1.05]">
            Stay updated with our latest news and tech insights.
          </p>
          <form className="flex h-[43px] w-full max-w-[320px] overflow-hidden rounded-[9px] bg-[#176ef2] shadow-[0_3px_8px_rgba(0,0,0,0.3)] lg:max-w-[239px]">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email Address"
              className="min-w-0 flex-1 bg-transparent px-3 text-[14px] font-normal text-white outline-none placeholder:text-white"
            />
            <button
              type="button"
              aria-label="Subscribe with Gmail"
              className="grid h-[43px] w-[49px] shrink-0 place-items-center rounded-[9px] bg-white transition-colors hover:bg-[#f4f7fb]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" className="h-[24px] w-[32px]">
                <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#176ef2] text-[#d9d9d9]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-6 text-center text-[12px] font-normal leading-[1.35] sm:px-8 sm:text-[13px] md:flex-row md:flex-wrap md:text-left lg:flex-nowrap lg:px-[90px] lg:py-[20px] lg:text-[14px] lg:leading-none">
          <p>© 2026 YariHub. All rights reserved.</p>
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Terms of Service
          </a>
          <a href="mailto:yarihubitsolutions@gmail.com" className="transition-colors hover:text-white">
            Support: yarihubitsolutions@gmail.com
          </a>
>>>>>>> origin/main
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <h2 className="mb-4 text-[14px] font-extrabold uppercase leading-none tracking-[-0.01em] text-[#071d3c] sm:text-[15px] lg:mb-[25px]">
      {title}
    </h2>
    <ul className="space-y-3 text-[13px] font-medium leading-none tracking-[0] text-[#071d3c] sm:text-[14px] lg:space-y-[18px] lg:text-[14px]">
      {links.map((link) => (
        <li key={link.label}>
          {link.href.startsWith('/#') || link.href.startsWith('mailto:') ? (
            <a href={link.href} className="transition-colors hover:text-[#176ef2]">
              {link.label}
            </a>
          ) : (
            <Link to={link.href} className="transition-colors hover:text-[#176ef2]">
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
