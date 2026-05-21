import type { LucideIcon } from 'lucide-react';
import {
  PenTool,
  Palette,
  Monitor,
  Smartphone,
  LayoutDashboard,
  ShoppingCart,
  Building2,
  Network,
  LineChart,
  Cloud,
  Workflow,
  RefreshCw,
  Wrench,
  Server,
} from 'lucide-react';

export type ServiceMenuItem = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const servicesMenuItems: ServiceMenuItem[] = [
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered interfaces and flows that look polished and feel effortless to use.',
    icon: PenTool,
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'Logos, brand assets, social creatives, and marketing visuals aligned with your identity.',
    icon: Palette,
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Fast, responsive websites and web apps built with modern, maintainable stacks.',
    icon: Monitor,
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps tailored for iOS and Android users.',
    icon: Smartphone,
  },
  {
    slug: 'web-based-applications',
    title: 'Web-Based Applications',
    description: 'Custom web software that streamlines operations and scales with your team.',
    icon: LayoutDashboard,
  },
  {
    slug: 'ecommerce-online-shops',
    title: 'E-Commerce & Online Shops (Web-based)',
    description: 'Online stores with secure checkout, inventory-friendly flows, and conversion-focused UX.',
    icon: ShoppingCart,
  },
  {
    slug: 'business-management-systems',
    title: 'Business Management Systems',
    description: 'Centralized tools to manage operations, records, and day-to-day business workflows.',
    icon: Building2,
  },
  {
    slug: 'internal-company-portals',
    title: 'Internal Company Portals',
    description: 'Private hubs for teams—documents, announcements, tools, and access in one place.',
    icon: Network,
  },
  {
    slug: 'crm-dashboard-solutions',
    title: 'CRM & Dashboard Solutions',
    description: 'Track leads, clients, and performance with dashboards built around how you work.',
    icon: LineChart,
  },
  {
    slug: 'custom-saas-platforms',
    title: 'Custom SaaS Platforms',
    description: 'Subscription-ready products with accounts, billing hooks, and multi-tenant architecture.',
    icon: Cloud,
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Reduce manual work with automated approvals, notifications, and integrations.',
    icon: Workflow,
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    description: 'Refresh outdated sites with modern design, improved speed, and clearer messaging.',
    icon: RefreshCw,
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Ongoing updates, fixes, security patches, and content changes so you stay current.',
    icon: Wrench,
  },
  {
    slug: 'hosting-domain',
    title: 'Hosting & Domain',
    description: 'Reliable hosting setup, domain configuration, and deployment support you can depend on.',
    icon: Server,
  },
];
