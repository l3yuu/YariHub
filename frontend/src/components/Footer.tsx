import { FaLinkedinIn } from 'react-icons/fa6';
import { SiFacebook, SiGithub, SiInstagram } from 'react-icons/si';

const companyLinks = ['About Us', 'Careers', 'Blog', 'Documentation', 'Support'];

const serviceLinks = ['Web Development', 'Mobile Apps', 'System Dev', 'UI/UX Design', 'Consulting'];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/yarihubitsolutions/',
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
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CDKeAWiSe/',
    icon: <SiFacebook className="h-[27px] w-[27px]" />,
    className: 'text-[#1877f2] bg-white',
  },
];

const Footer = () => {
  return (
    <footer className="bg-white font-sans text-[#071d3c]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 sm:py-14 md:gap-12 lg:grid-cols-[1.45fr_0.7fr_0.75fr_1fr] lg:gap-14 lg:px-[50px] lg:pb-[58px] lg:pt-[154px]">
        <div className="flex min-h-0 flex-col justify-between gap-8 sm:col-span-2 lg:col-span-1 lg:min-h-[268px] lg:gap-10">
          <div>
            <a href="#" aria-label="Yari Hub home" className="inline-flex w-fit">
              <img src="/logo.png" alt="Yari Hub IT Solutions" className="h-auto w-[170px] sm:w-[190px] lg:w-[205px]" />
            </a>
            <p className="mt-5 max-w-[420px] font-['Sora'] text-[14px] font-extralight leading-[20px] tracking-[0] text-[#071d3c] sm:text-[15px] lg:max-w-[342px]">
              YariHub is a collaborative freelance studio based in the Philippines, focused on
              delivering practical and well-crafted digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-[22px] lg:pl-[15px]">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-[48px] w-[52px] place-items-center rounded-[8px] border border-[#cfd2d7] bg-[#e8e8e8] shadow-[inset_0_0_0_3px_#d9d9d9] transition-transform hover:-translate-y-0.5 sm:h-[53px] sm:w-[58px]"
              >
                <span
                  className={`grid h-[34px] w-[34px] place-items-center overflow-hidden rounded-[7px] sm:h-[36px] sm:w-[36px] ${social.className}`}
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
    <h2 className="mb-4 text-[14px] font-extrabold uppercase leading-none tracking-[-0.01em] text-[#071d3c] sm:text-[15px] lg:mb-[25px]">
      {title}
    </h2>
    <ul className="space-y-3 text-[13px] font-medium leading-none tracking-[0] text-[#071d3c] sm:text-[14px] lg:space-y-[18px] lg:text-[14px]">
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
