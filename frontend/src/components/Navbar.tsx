import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const location = useLocation();

  useEffect(() => {
    const updateLocationState = () => {
      setScrolled(window.scrollY > 10);
      setActiveHash(window.location.hash);
    };

    updateLocationState();
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#about' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/' && activeHash === '') return true;
    if (href !== '/' && activeHash === href) return true;
    return false;
  };

  return (
    <nav className={`fixed left-0 right-0 top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex shrink-0 items-center"
          >
            <img src="/logo.png" alt="YariHub" className="h-9 sm:h-10 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 xl:flex items-center gap-10 2xl:gap-12">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-[#106FF4]'
                    : 'text-[#162E93] hover:text-[#106FF4]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden xl:flex items-center ml-auto">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#162E93' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile: hamburger */}
          <div className="ml-auto xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="w-9 h-9 flex items-center justify-center rounded-lg text-[#162E93] hover:bg-gray-100 transition-colors">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-1">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-[#106FF4] bg-blue-50'
                  : 'text-[#162E93] hover:bg-gray-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-200 mt-3">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#162E93' }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
