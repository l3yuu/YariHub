import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#about' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && (location.pathname.includes(href) || window.location.hash.includes(href))) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <img src="/logo.png" alt="YariHub" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
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
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#162E93' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="w-9 h-9 flex items-center justify-center rounded-lg text-[#162E93] hover:bg-gray-100 transition-colors">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-1">
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
