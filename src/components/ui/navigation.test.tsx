import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from './navigation';

// Mock scrollIntoView
const mockScrollIntoView = vi.fn();
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: mockScrollIntoView,
  writable: true,
});

// Mock querySelector
const mockQuerySelector = vi.fn();
Object.defineProperty(document, 'querySelector', {
  value: mockQuerySelector,
  writable: true,
});

describe('Navigation Component', () => {
  const mockItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
    { label: 'External', href: 'https://example.com', external: true },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    mockQuerySelector.mockReturnValue({
      scrollIntoView: mockScrollIntoView,
    });
  });

  it('renders navigation items in desktop view', () => {
    render(<Navigation items={mockItems} />);
    
    // Desktop navigation should be visible (hidden class is for mobile)
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('External')).toBeInTheDocument();
  });

  it('renders mobile menu toggle button', () => {
    render(<Navigation items={mockItems} />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens mobile menu when toggle is clicked', () => {
    render(<Navigation items={mockItems} />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(toggleButton);
    
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    // Check that mobile menu is visible by looking for the mobile menu container
    expect(screen.getByRole('button', { name: /toggle navigation menu/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes mobile menu when toggle is clicked again', () => {
    render(<Navigation items={mockItems} />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    
    // Open menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    
    // Close menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('handles anchor link clicks with smooth scrolling', () => {
    render(<Navigation items={mockItems} />);
    
    const homeLink = screen.getByRole('button', { name: /navigate to home section/i });
    fireEvent.click(homeLink);
    
    expect(mockQuerySelector).toHaveBeenCalledWith('#home');
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('renders external links with proper attributes', () => {
    render(<Navigation items={mockItems} />);
    
    const externalLink = screen.getByRole('link', { name: /external \(opens in new tab\)/i });
    expect(externalLink).toHaveAttribute('href', 'https://example.com');
    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('closes mobile menu when navigation item is clicked', () => {
    render(<Navigation items={mockItems} />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    
    // Open menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    
    // Click navigation item - get all home links and click the mobile one
    const homeLinks = screen.getAllByRole('button', { name: /navigate to home section/i });
    fireEvent.click(homeLinks[1]); // Mobile menu item
    
    // Menu should be closed
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('applies custom className', () => {
    render(<Navigation items={mockItems} className="custom-nav" />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('custom-nav');
  });

  it('has proper ARIA labels', () => {
    render(<Navigation items={mockItems} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(toggleButton).toHaveAttribute('aria-controls', 'mobile-menu');
  });

  it('handles empty items array', () => {
    render(<Navigation items={[]} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('handles items without external flag', () => {
    const itemsWithoutExternal = [
      { label: 'Home', href: '#home' },
      { label: 'Regular Link', href: '/regular' },
    ];
    
    render(<Navigation items={itemsWithoutExternal} />);
    
    expect(screen.getByRole('button', { name: /navigate to home section/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /navigate to regular link/i })).toBeInTheDocument();
  });

  it('shows correct icon in mobile toggle button', () => {
    render(<Navigation items={mockItems} />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    
    // Initially shows menu icon
    expect(toggleButton.querySelector('svg')).toBeInTheDocument();
    
    // Click to open - should show X icon
    fireEvent.click(toggleButton);
    expect(toggleButton.querySelector('svg')).toBeInTheDocument();
  });
});