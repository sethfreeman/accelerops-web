'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './button';
import { cn } from '@/lib/utils';

/**
 * Props interface for the ThemeToggle component
 * 
 * @interface ThemeToggleProps
 */
export interface ThemeToggleProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Theme toggle component that switches between light and dark modes.
 * Uses next-themes for theme management with smooth transitions and
 * proper state persistence across page loads.
 * 
 * @param props - ThemeToggle component props
 * @returns JSX.Element - Rendered theme toggle button
 * 
 * @example
 * ```tsx
 * <ThemeToggle className="ml-auto" />
 * ```
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className={cn('h-9 w-9 px-0', className)}
        disabled
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={cn('h-9 w-9 px-0', className)}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};