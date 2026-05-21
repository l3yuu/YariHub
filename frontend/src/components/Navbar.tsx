import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import AboutMegaMenu from './AboutMegaMenu';
import ServicesMegaMenu from './ServicesMegaMenu';

/** Scroll distance (px) to fully morph navbar — tied 1:1 to Lenis scroll position */
export const NAV_SCROLL_RANGE = 120;

const links = [
  { label: 'Home', to: '/' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact Us', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { user } = useAuth();
  const location = useLocation();
  const lenis = useLenis();

  const setNavProgress = (scrollY: number) => {
    const progress = Math.min(1, Math.max(0, scrollY / NAV_SCROLL_RANGE));
    navRef.current?.style.setProperty('--nav-progress', String(progress));
  };

  useLenis((instance) => setNavProgress(instance.scroll), []);

  useEffect(() => {
    if (lenis) setNavProgress(lenis.scroll);
  }, [lenis]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-[#2563EB]' : 'text-slate-600 hover:text-slate-900'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-[#2563EB] bg-blue-50' : 'text-slate-700 hover:bg-slate-50'
    }`;

  const handleHomeClick = (e: React.MouseEvent, isActive: boolean) => {
    if (location.pathname === '/' && isActive) {
      e.preventDefault();
      lenis?.scrollTo(0, { duration: 1.35 });
    }
    setIsOpen(false);
  };

  const closeMobile = () => setIsOpen(false);

  return (
    <header className="navbar-shell">
      <nav ref={navRef} className="navbar-dock">
        <div className="navbar-dock-inner">
          <div className="navbar-dock-row">
            <Link to="/" onClick={closeMobile} className="justify-self-start">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center gap-8 justify-self-center">
              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={(e) => handleHomeClick(e, location.pathname === '/')}
              >
                Home
              </NavLink>
              <AboutMegaMenu variant="desktop" />
              <ServicesMegaMenu variant="desktop" />
              {links.slice(1).map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={navLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3 justify-self-end">
              {user && (
                <Link
                  to="/admin/dashboard"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300"
                >
                  Dashboard
                </Link>
              )}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1d4ed8] transition-colors duration-300 shadow-sm shadow-blue-500/20"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden justify-self-end w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="px-4 pt-4 pb-6 space-y-1">
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to="/"
                    end
                    onClick={(e) => {
                      closeMobile();
                      handleHomeClick(e, location.pathname === '/');
                    }}
                    className={mobileNavLinkClass}
                  >
                    Home
                  </NavLink>
                </motion.div>
                <AboutMegaMenu variant="mobile" onNavigate={closeMobile} />
                <ServicesMegaMenu variant="mobile" onNavigate={closeMobile} />
                {links.slice(1).map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + 3) * 0.04, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={closeMobile}
                      className={mobileNavLinkClass}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="pt-3 mt-3 border-t border-slate-100">
                  {user && (
                    <Link
                      to="/admin/dashboard"
                      onClick={closeMobile}
                      className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg mb-2"
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to="/contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-[#2563EB]"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
