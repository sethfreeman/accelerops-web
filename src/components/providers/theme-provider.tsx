'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * Theme provider component that wraps the application with next-themes.
 * Provides theme switching functionality with proper SSR support and
 * smooth transitions between light and dark modes.
 * 
 * @param children - Child components to wrap
 * @param props - Additional props to pass to NextThemesProvider
 * @returns JSX.Element - Theme provider wrapper
 */
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}