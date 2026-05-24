import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Inquiries from './pages/admin/Inquiries';
import Projects from './pages/admin/Projects';
import Clients from './pages/admin/Clients';
import Testimonials from './pages/admin/Testimonials';
import Blog from './pages/admin/Blog';
import NewBlogPost from './pages/admin/NewBlogPost';
import Team from './pages/admin/Team';
import Settings from './pages/admin/Settings';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="projects" element={<Projects />} />
              <Route path="clients" element={<Clients />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/new" element={<NewBlogPost />} />
              <Route path="team" element={<Team />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;
