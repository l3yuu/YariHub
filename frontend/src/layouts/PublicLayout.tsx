import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import ScrollToTopOnNavigate from '../components/ScrollToTopOnNavigate';
import { useTheme } from '../context/ThemeContext';

const PublicLayout = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    return () => {
      if (theme === 'dark') document.documentElement.classList.add('dark');
    };
  }, [theme]);

  return (
    <SmoothScroll>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default PublicLayout;
