import type { LucideIcon } from 'lucide-react';
import { ClipboardList, Target, UserSearch } from 'lucide-react';

export type AboutMenuItem = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aboutMenuItems: AboutMenuItem[] = [
  {
    slug: 'company-profile',
    title: 'Company Profile',
    description:
      'Philippines-based freelance studio focused on practical, well-crafted digital solutions for innovators and growing businesses.',
    icon: ClipboardList,
  },
  {
    slug: 'mission-vision-values',
    title: 'Mission, Vision, & Values',
    description: "Read about YariHub's culture, goals, and what guides how we work with every client.",
    icon: Target,
  },
  {
    slug: 'careers',
    title: 'Careers',
    description: 'Have what it takes to build with us? We are open to talented collaborators and new team members.',
    icon: UserSearch,
  },
];
