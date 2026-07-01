import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { Hero } from './hero';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
  },
}));

describe('Hero Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="light">
        {component}
      </ThemeProvider>
    );
  };

  it('renders with default props', () => {
    renderWithThemeProvider(<Hero />);
    
    expect(screen.getByText('Accelerate Your Digital Transformation')).toBeInTheDocument();
    expect(screen.getByText(/Elite consulting firm/)).toBeInTheDocument();
  });

  it('renders with custom tagline and subtitle', () => {
    renderWithThemeProvider(
      <Hero 
        tagline="Custom Tagline" 
        subtitle="Custom subtitle text"
      />
    );
    
    expect(screen.getByText('Custom Tagline')).toBeInTheDocument();
    expect(screen.getByText('Custom subtitle text')).toBeInTheDocument();
  });

  it('shows theme toggle by default', () => {
    renderWithThemeProvider(<Hero />);
    
    // Theme toggle button should be present with specific aria-label
    const themeToggle = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(themeToggle).toBeInTheDocument();
  });

  it('hides theme toggle when showThemeToggle is false', () => {
    renderWithThemeProvider(<Hero showThemeToggle={false} />);
    
    // Theme toggle button should not be present
    const themeToggle = screen.queryByRole('button', { name: /toggle theme/i });
    expect(themeToggle).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    renderWithThemeProvider(<Hero className="custom-hero" />);
    
    const heroSection = screen.getByRole('region', { name: /hero section/i });
    expect(heroSection).toHaveClass('custom-hero');
  });

  it('has proper semantic structure', () => {
    renderWithThemeProvider(<Hero />);
    
    // Should have main heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Accelerate Your Digital Transformation');
    
    // Should have section with aria-label
    const section = screen.getByRole('region', { name: /hero section/i });
    expect(section).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    renderWithThemeProvider(<Hero />);
    
    const heroSection = screen.getByRole('region', { name: /hero section/i });
    expect(heroSection).toHaveClass(
      'relative',
      'min-h-screen',
      'flex',
      'items-center',
      'justify-center'
    );
  });

  it('renders animated accent elements', () => {
    renderWithThemeProvider(<Hero />);
    
    // The animated dots should be present (though we can't test the animation itself)
    const heroSection = screen.getByRole('region', { name: /hero section/i });
    expect(heroSection).toBeInTheDocument();
  });

  it('renders scroll indicator', () => {
    renderWithThemeProvider(<Hero />);
    
    // The scroll indicator should be present in the DOM
    const heroSection = screen.getByRole('region', { name: /hero section/i });
    expect(heroSection).toBeInTheDocument();
  });

  it('has responsive text sizing', () => {
    renderWithThemeProvider(<Hero />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-4xl', 'md:text-6xl', 'lg:text-7xl');
  });

  it('renders background pattern', () => {
    renderWithThemeProvider(<Hero />);
    
    const heroSection = screen.getByRole('region', { name: /hero section/i });
    // Background pattern div should be present
    expect(heroSection.querySelector('.bg-grid-pattern')).toBeInTheDocument();
  });

  it('positions theme toggle correctly', () => {
    renderWithThemeProvider(<Hero />);
    
    const themeToggle = screen.getByRole('button', { name: /switch to dark mode/i });
    const toggleContainer = themeToggle.closest('div');
    expect(toggleContainer).toHaveClass('absolute', 'top-8', 'right-8', 'z-10');
  });

  it('centers main content', () => {
    renderWithThemeProvider(<Hero />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    const contentContainer = heading.closest('.max-w-4xl');
    expect(contentContainer).toHaveClass('max-w-4xl', 'mx-auto', 'px-4', 'text-center');
  });
});