'use client';

import * as React from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

/**
 * Navigation item interface
 * 
 * @interface NavigationItem
 */
export interface NavigationItem {
  /** Display label for the navigation item */
  label: string;
  /** URL or anchor href */
  href: string;
  /** Whether the link is external */
  external?: boolean;
}

/**
 * Props interface for the Navigation component
 * 
 * @interface NavigationProps
 */
export interface NavigationProps {
  /** Array of navigation items */
  items: NavigationItem[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Responsive navigation component with mobile menu support.
 * Provides smooth scrolling for anchor links and proper handling
 * of external links with accessibility features.
 * 
 * @param props - Navigation component props
 * @returns JSX.Element - Rendered navigation component
 * 
 * @example
 * ```tsx
 * <Navigation 
 *   items={[
 *     { label: 'Services', href: '#services' },
 *     { label: 'About', href: '#about' },
 *     { label: 'Contact', href: '#contact' }
 *   ]} 
 * />
 * ```
 */
export const Navigation: React.FC<NavigationProps> = ({ items, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (href: string) => {
    closeMenu();
    
    // Smooth scroll for anchor links
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={cn('relative', className)} role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex md:items-center md:space-x-8">
        {items.map((item) => (
          <NavigationLink
            key={item.href}
            item={item}
            onClick={() => handleLinkClick(item.href)}
          />
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          className="h-9 w-9 px-0"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute right-0 top-12 z-50 w-48 rounded-md border bg-popover p-2 shadow-md md:hidden"
        >
          <div className="flex flex-col space-y-1">
            {items.map((item) => (
              <NavigationLink
                key={item.href}
                item={item}
                onClick={() => handleLinkClick(item.href)}
                mobile
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

/**
 * Individual navigation link component
 */
interface NavigationLinkProps {
  item: NavigationItem;
  onClick: () => void;
  mobile?: boolean;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ item, onClick, mobile = false }) => {
  const baseClasses = mobile
    ? 'flex w-full items-center rounded-sm px-2 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none'
    : 'text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none';

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(baseClasses, 'inline-flex items-center gap-1')}
        aria-label={`${item.label} (opens in new tab)`}
      >
        {item.label}
        <ExternalLink className="h-3 w-3" />
      </a>
    );
  }

  if (item.href.startsWith('#')) {
    return (
      <button
        onClick={onClick}
        className={cn(baseClasses, 'text-left')}
        aria-label={`Navigate to ${item.label} section`}
      >
        {item.label}
      </button>
    );
  }

  return (
    <a
      href={item.href}
      onClick={onClick}
      className={baseClasses}
      aria-label={`Navigate to ${item.label}`}
    >
      {item.label}
    </a>
  );
};