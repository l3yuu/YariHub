import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesMenuItems } from '../data/servicesMenu';

type ServicesMegaMenuProps = {
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
};

const ServicesMegaMenu = ({ variant = 'desktop', onNavigate }: ServicesMegaMenuProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isServicesActive = location.pathname === '/services';

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
          isServicesActive || open
            ? 'text-[#2563EB]'
            : 'text-slate-600 hover:text-slate-900'
        }`
      : `flex w-full items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${
          isServicesActive || open
            ? 'text-[#2563EB] bg-blue-50'
            : 'text-slate-700 hover:bg-slate-50'
        }`;

  const leftColumn = servicesMenuItems.slice(0, 7);
  const rightColumn = servicesMenuItems.slice(7);

  const ServiceItem = ({ slug, title, description, icon: Icon }: (typeof servicesMenuItems)[0]) => (
    <Link
      to={`/services#${slug}`}
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
          Services
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
                {servicesMenuItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services#${item.slug}`}
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
                  to="/services"
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#2563EB]"
                >
                  View all services
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
        to="/services"
        className={triggerClass}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={handleOpen}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={layerRef}
            key="services-mega-layer"
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
              className="services-mega-menu"
            >
              <div className="services-mega-menu-grid">
                <div className="space-y-1">
                  {leftColumn.map((item) => (
                    <ServiceItem key={item.slug} {...item} />
                  ))}
                </div>
                <div className="space-y-1">
                  {rightColumn.map((item) => (
                    <ServiceItem key={item.slug} {...item} />
                  ))}
                </div>
              </div>
              <div className="nav-mega-menu-footer">
                <Link
                  to="/services"
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                  className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8]"
                >
                  Explore all services →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesMegaMenu;
