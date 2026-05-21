import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { aboutMenuItems } from '../data/aboutMenu';

type AboutMegaMenuProps = {
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
};

const AboutMegaMenu = ({ variant = 'desktop', onNavigate }: AboutMegaMenuProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isAboutActive = location.pathname === '/about';

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), 120);
  };

  const handleOpen = () => {
    clearCloseTimer();
    setOpen(true);
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (variant !== 'desktop') return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        containerRef.current?.contains(target) ||
        layerRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      clearCloseTimer();
    };
  }, [variant]);

  const triggerClass =
    variant === 'desktop'
      ? `inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
          isAboutActive || open
            ? 'text-[#2563EB]'
            : 'text-slate-600 hover:text-slate-900'
        }`
      : `flex w-full items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${
          isAboutActive || open
            ? 'text-[#2563EB] bg-blue-50'
            : 'text-slate-700 hover:bg-slate-50'
        }`;

  const AboutItem = ({ slug, title, description, icon: Icon }: (typeof aboutMenuItems)[0]) => (
    <Link
      to={`/about#${slug}`}
      onClick={() => {
        setOpen(false);
        onNavigate?.();
      }}
      className="group flex gap-4 rounded-xl p-3 transition-colors hover:bg-slate-50"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#2563EB] transition-colors group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-wide text-slate-900 group-hover:text-[#2563EB] transition-colors">
          {title}
        </span>
        <span className="mt-1 block text-sm leading-snug text-slate-500">{description}</span>
      </span>
    </Link>
  );

  if (variant === 'mobile') {
    return (
      <div className="space-y-1">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={triggerClass}
          aria-expanded={open}
        >
          About Us
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="ml-2 space-y-0.5 border-l-2 border-blue-100 pl-3 pb-2">
                {aboutMenuItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/about#${item.slug}`}
                    onClick={() => {
                      setOpen(false);
                      onNavigate?.();
                    }}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2563EB]"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  to="/about"
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#2563EB]"
                >
                  View about page
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
    >
      <Link
        to="/about"
        className={triggerClass}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={handleOpen}
      >
        About Us
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={layerRef}
            key="about-mega-layer"
            className="nav-mega-menu-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onMouseEnter={handleOpen}
            onMouseLeave={scheduleClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="about-mega-menu"
            >
              <div className="about-mega-menu-list">
                {aboutMenuItems.map((item) => (
                  <AboutItem key={item.slug} {...item} />
                ))}
              </div>
              <div className="nav-mega-menu-footer">
                <Link
                  to="/about"
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                  className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8]"
                >
                  Explore about us →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMegaMenu;
