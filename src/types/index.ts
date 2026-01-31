/**
 * Core type definitions for the AccelerOps website.
 * These types will be expanded in subsequent tasks as components are added.
 */

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}