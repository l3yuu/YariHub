import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Palette,
  PenTool,
  Code2,
  Smartphone,
  Globe,
  ShoppingCart,
  Building2,
  Users2,
  BarChart3,
  Cloud,
  Workflow,
  Monitor,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

/* ─────────── DATA ─────────── */

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  listTitle: string;
  items: string[];
  icon: React.ReactNode;
}

const designServices: Service[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    shortDesc:
      'We create intuitive and visually engaging user experiences that improve usability, customer interaction, and overall digital performance across web and mobile platforms.',
    longDesc:
      'We design intuitive digital experiences that combine aesthetics with functionality. Our UI/UX design process focuses on understanding user behavior, business objectives, and product usability to create interfaces that are both visually engaging and easy to navigate. From wireframes and prototypes to polished user interfaces, we ensure every interaction feels seamless and purposeful. Whether it\'s a website, web platform, or mobile application, we create designs that improve customer satisfaction, increase engagement, and strengthen your brand identity.',
    listTitle: "What's Included:",
    items: [
      'User Interface (UI) Design',
      'User Experience (UX) Strategy',
      'Wireframing & Prototyping',
      'Responsive Design for All Devices',
      'User Flow & Journey Mapping',
      'Interactive Design Systems',
      'Design Optimization & Usability Improvements',
    ],
    icon: <Palette className="h-6 w-6" />,
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    shortDesc:
      'Professional and creative visual designs that strengthen your brand identity and communicate your message effectively across digital and print media.',
    longDesc:
      "Your brand's visual identity is often the first impression customers remember. We create modern, professional, and impactful graphic designs that communicate your brand message clearly and consistently. From digital assets to marketing materials, our designs are crafted to strengthen your brand presence and leave a lasting impression on your audience.",
    listTitle: 'We Offer:',
    items: [
      'Brand Identity & Logo Design',
      'Social Media Graphics',
      'Marketing & Promotional Materials',
      'Business Presentations',
      'Corporate Branding Assets',
      'Digital Advertisements & Banners',
      'Creative Visual Content',
    ],
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    id: 'webdev',
    title: 'Web Development',
    shortDesc:
      'Custom-built websites designed for performance, responsiveness, scalability, and seamless user experience tailored to your business needs.',
    longDesc:
      'We develop high-performance websites that are modern, responsive, and built to scale. Our web development solutions are tailored to your business goals, ensuring your online presence is not only visually impressive but also secure, fast, and optimized for user engagement. Whether you need a company website, portfolio, landing page, or custom platform, we build solutions that combine functionality with clean design.',
    listTitle: 'We Offer:',
    items: [
      'Custom Website Development',
      'Responsive & Mobile-Friendly Design',
      'Frontend & Backend Development',
      'CMS Integration',
      'SEO-Friendly Structure',
      'Secure & Scalable Architecture',
      'Performance Optimization',
      'API & Third-Party Integrations',
    ],
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    shortDesc:
      'Modern Android applications built for reliability, functionality, and smooth user experiences across a wide range of mobile devices.',
    longDesc:
      'We build powerful Android applications designed to provide smooth user experiences and reliable performance across devices. Our development approach focuses on scalability, intuitive functionality, and modern mobile standards. Whether you need a business application, customer service platform, or custom mobile solution, we create Android apps that align with your business objectives and user expectations.',
    listTitle: 'We Offer:',
    items: [
      'Native Android App Development',
      'User-Centered Mobile UI/UX',
      'API & Cloud Integration',
      'Real-Time Features & Notifications',
      'Secure Authentication Systems',
      'Performance Optimization',
      'App Deployment Assistance',
    ],
    icon: <Smartphone className="h-6 w-6" />,
  },
];

const customServices: Service[] = [
  {
    id: 'webapp',
    title: 'Web-Based Applications',
    shortDesc:
      'We engineer complex, data-driven web applications designed to streamline your unique business operations.',
    longDesc:
      'Whether you need a custom internal portal, a SaaS platform, or a robust customer dashboard, we build scalable and secure web applications that transform complicated workflows into seamless digital experiences. Our solutions are designed with flexibility, performance, and future growth in mind.',
    listTitle: 'Ideal For:',
    items: [
      'Business Process Automation',
      'Customer Portals',
      'Enterprise Platforms',
      'Internal Management Systems',
      'Cloud-Based Business Solutions',
    ],
    icon: <Globe className="h-6 w-6" />,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Online Shops',
    shortDesc:
      'We build high-converting online stores that combine modern design with powerful functionality.',
    longDesc:
      'Our e-commerce solutions focus on delivering seamless shopping experiences, secure payment systems, and optimized product management tools that help businesses grow online. From startup stores to enterprise-level platforms, we create scalable digital storefronts tailored to your brand.',
    listTitle: 'Features may include:',
    items: [
      'Custom Online Store Design',
      'Shopping Cart & Checkout Systems',
      'Secure Payment Gateway Integration',
      'Inventory & Product Management',
      'Mobile-Responsive Shopping Experience',
      'Order Tracking & Customer Accounts',
      'Sales & Analytics Integration',
    ],
    icon: <ShoppingCart className="h-6 w-6" />,
  },
  {
    id: 'bms',
    title: 'Business Management Systems',
    shortDesc:
      'Streamline operations with custom management platforms tailored to your workflow.',
    longDesc:
      'Manage your operations more efficiently with custom-built systems tailored specifically to your workflow. We develop centralized management platforms that help businesses organize data, improve collaboration, monitor operations, and simplify day-to-day processes through automation and intelligent reporting.',
    listTitle: 'Solutions May Include:',
    items: [
      'Employee Management',
      'Attendance & Scheduling',
      'Inventory Monitoring',
      'Financial Tracking',
      'Reporting & Analytics',
      'Operational Dashboards',
    ],
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    id: 'portal',
    title: 'Internal Company Portals',
    shortDesc:
      'Centralized digital platforms that improve team communication, collaboration, and access to important company resources in one secure system.',
    longDesc:
      'Improve internal communication, collaboration, and productivity with centralized company portals designed for your organization. These systems provide employees with secure access to tools, announcements, files, reports, and operational resources from one unified platform.',
    listTitle: 'Solutions may include:',
    items: [
      'Centralized Information Access',
      'Team Collaboration Tools',
      'Document & File Management',
      'Employee Communication Channels',
      'Secure Role-Based Access',
      'Workflow Coordination',
    ],
    icon: <Users2 className="h-6 w-6" />,
  },
  {
    id: 'crm',
    title: 'CRM & Dashboard Solutions',
    shortDesc:
      'Manage customer data and monitor business performance with ease.',
    longDesc:
      'We create intelligent CRM systems and interactive dashboards that help businesses manage customer relationships, monitor sales performance, and make data-driven decisions. Our solutions centralize business information into easy-to-use interfaces that improve visibility and operational efficiency.',
    listTitle: 'Core Features:',
    items: [
      'Customer Data Management',
      'Sales & Lead Tracking',
      'Analytics & Reporting',
      'Real-Time Business Insights',
      'Interactive Dashboards',
      'Performance Monitoring Tools',
    ],
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    id: 'saas',
    title: 'Custom SaaS Platforms',
    shortDesc:
      'Scalable cloud-based software built around your business model.',
    longDesc:
      'We develop scalable Software-as-a-Service (SaaS) platforms tailored to your business model. From subscription-based systems to enterprise cloud applications, our SaaS solutions are built with security, scalability, and long-term growth in mind. We help transform innovative ideas into reliable cloud-based software products.',
    listTitle: 'Key Advantages:',
    items: [
      'Cloud-Based Accessibility',
      'Multi-User Architecture',
      'Subscription & Billing Systems',
      'Secure Data Management',
      'Scalable Infrastructure',
      'API & Third-Party Integrations',
    ],
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    shortDesc:
      'Reduce repetitive manual tasks and improve operational efficiency through smart automation solutions.',
    longDesc:
      'We design systems that automate workflows, notifications, approvals, data handling, and repetitive processes, allowing your team to focus on higher-value work while improving accuracy and productivity.',
    listTitle: 'Automation Solutions may include:',
    items: [
      'Automated Approval Processes',
      'Data Synchronization',
      'Task & Notification Automation',
      'Workflow Optimization',
      'System Integrations',
      'Operational Efficiency Improvements',
    ],
    icon: <Workflow className="h-6 w-6" />,
  },
];

const categories = [
  { id: 'design', label: 'Design & Engineering', services: designServices },
  { id: 'custom', label: 'Custom Solutions', services: customServices },
];

/* ─────────── ANIMATIONS ─────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ─────────── SERVICE CARD ─────────── */

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/8 hover:border-blue-200"
    >
      {/* Card header */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0E6AF3] to-[#4F46E5] text-white shadow-md shadow-blue-500/20">
            {service.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-['Poppins',sans-serif] text-lg font-bold text-[#00184A] sm:text-xl">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Expandable detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 px-6 pb-6 pt-5 sm:px-8 sm:pb-8">
              <p className="text-sm leading-relaxed text-slate-600">
                {service.longDesc}
              </p>
              <h4 className="mt-5 text-sm font-bold text-[#00184A]">
                {service.listTitle}
              </h4>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0E6AF3]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact"
                className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-[#0E6AF3] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#0D5DD3] hover:shadow-lg"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-center gap-1.5 border-t border-slate-100 py-3 text-xs font-medium text-[#0E6AF3] transition-colors hover:bg-blue-50/50"
      >
        {expanded ? 'Show Less' : 'Learn More'}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
    </motion.div>
  );
};

/* ─────────── PAGE ─────────── */

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('design');
  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <div className="relative min-h-screen bg-slate-50">
      <Navbar />
      <div className="h-16" aria-hidden="true" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E6AF3] via-[#1a5cd4] to-[#4F46E5] px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 sm:text-sm">
              What We Do
            </p>
            <h1 className="font-['Poppins',sans-serif] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
              End-to-end digital solutions tailored for Filipino businesses at every stage — from design to deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#0E6AF3] shadow-lg shadow-black/10 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category tabs */}
      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-1 px-4 py-2 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-all sm:px-6 ${
                activeCategory === cat.id
                  ? 'bg-[#0E6AF3] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-[#0E6AF3]'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
                  {cat.services.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Service cards */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-8 sm:mb-10">
              <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#00184A] sm:text-3xl">
                {currentCategory.label}
              </h2>
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                {activeCategory === 'design'
                  ? 'Creative and technical services to bring your ideas to life.'
                  : 'Tailored software systems built for your specific business needs.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-5 sm:gap-6 justify-center">
              {currentCategory.services.map((service, index) => (
                <div key={service.id} className="w-full sm:w-[calc(50%-12px)]">
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0E6AF3] to-[#4F46E5] px-4 py-16 text-center text-white sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="font-['Poppins',sans-serif] text-3xl font-bold sm:text-4xl">
            Ready to Build Something Great?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-blue-100 sm:text-lg">
            Let's discuss your project and find the perfect solution for your business.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#0E6AF3] shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ServicesPage;
