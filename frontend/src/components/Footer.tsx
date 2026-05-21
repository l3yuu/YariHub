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
];

const Footer = () => {
  return (
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
          </div>
        </div>
      </div>

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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
