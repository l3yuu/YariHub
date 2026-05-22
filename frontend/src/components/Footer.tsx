import { FaLinkedinIn } from 'react-icons/fa6';
import { SiGithub, SiGmail, SiInstagram, SiX } from 'react-icons/si';

const companyLinks = ['About Us', 'Careers', 'Blog', 'Documentation', 'Support'];

const serviceLinks = ['Web Development', 'Mobile Apps', 'System Dev', 'UI/UX Design', 'Consulting'];

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: <SiInstagram className="h-[30px] w-[30px]" />,
    className:
      'text-white bg-[radial-gradient(circle_at_30%_105%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]',
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: <FaLinkedinIn className="h-[30px] w-[30px]" />,
    className: 'text-[#0a66c2] bg-white',
  },
  {
    label: 'GitHub',
    href: '#',
    icon: <SiGithub className="h-[33px] w-[33px]" />,
    className: 'text-black bg-white',
  },
  {
    label: 'X',
    href: '#',
    icon: <SiX className="h-[27px] w-[27px]" />,
    className: 'text-black bg-white',
  },
];

const Footer = () => {
  return (
    <footer className="bg-white font-sans text-[#071d3c]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 py-16 sm:px-12 md:grid-cols-[1.45fr_0.7fr_0.75fr_1fr] md:gap-14 lg:px-[50px] lg:pb-[58px] lg:pt-[154px]">
        <div className="flex min-h-[268px] flex-col justify-between gap-10">
          <div>
            <a href="#" aria-label="Yari Hub home" className="inline-flex w-fit">
              <img src="/logo.png" alt="Yari Hub IT Solutions" className="h-auto w-[205px]" />
            </a>
            <p className="mt-6 max-w-[342px] font-['Sora'] text-[15px] font-extralight leading-[20px] tracking-[0] text-[#071d3c]">
              YariHub is a collaborative freelance studio based in the Philippines, focused on
              delivering practical and well-crafted digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-[22px] sm:pl-[15px]">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-[53px] w-[58px] place-items-center rounded-[8px] border border-[#cfd2d7] bg-[#e8e8e8] shadow-[inset_0_0_0_3px_#d9d9d9] transition-transform hover:-translate-y-0.5"
              >
                <span
                  className={`grid h-[36px] w-[36px] place-items-center overflow-hidden rounded-[7px] ${social.className}`}
                >
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Services" links={serviceLinks} />

        <div className="lg:pl-[4px]">
          <h2 className="mb-[14px] text-[20px] font-extrabold uppercase leading-none tracking-[-0.01em] text-[#071d3c]">
            Newsletter
          </h2>
          <p className="mb-[19px] max-w-[300px] text-[19px] font-medium leading-[1.05] tracking-[0] text-[#071d3c]">
            Stay updated with our latest news and tech insights.
          </p>
          <form className="flex h-[43px] w-full max-w-[239px] overflow-hidden rounded-[9px] bg-[#176ef2] shadow-[0_3px_8px_rgba(0,0,0,0.3)]">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email Address"
              className="min-w-0 flex-1 bg-transparent px-3 text-[16px] font-normal text-white outline-none placeholder:text-white"
            />
            <button
              type="button"
              aria-label="Subscribe with Gmail"
              className="grid h-[43px] w-[49px] shrink-0 place-items-center rounded-[9px] bg-white text-[28px] text-[#ea4335] transition-colors hover:bg-[#f4f7fb]"
            >
              <SiGmail />
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#176ef2] text-[#d9d9d9]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-8 py-[33px] text-center text-[22px] font-normal leading-none sm:px-12 md:flex-row md:text-left lg:px-[90px]">
          <p>© 2026 Company. All rights reserved.</p>
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Terms of Service
          </a>
          <a href="mailto:support@company.com" className="transition-colors hover:text-white">
            Support: support@company.com
          </a>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  links: string[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <h2 className="mb-[25px] text-[20px] font-extrabold uppercase leading-none tracking-[-0.01em] text-[#071d3c]">
      {title}
    </h2>
    <ul className="space-y-[18px] text-[19px] font-medium leading-none tracking-[0] text-[#071d3c]">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="transition-colors hover:text-[#176ef2]">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
