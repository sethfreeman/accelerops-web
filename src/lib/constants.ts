/**
 * Site-wide constants and configuration values for the AccelerOps website.
 * These constants will be expanded in subsequent tasks as content is added.
 */

import { NavigationItem } from '@/types';

export const SITE_CONFIG = {
  name: 'AccelerOps',
  description: 'Accelerate Your Digital Transformation',
  url: 'https://accelerops.com',
  author: 'AccelerOps',
  social: {
    github: 'https://github.com/accelerops',
    linkedin: 'https://linkedin.com/company/accelerops',
  },
} as const;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Methodology', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];