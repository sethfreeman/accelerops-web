import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Services } from './services';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
  },
}));

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

describe('Services Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockQuerySelector.mockReturnValue({
      scrollIntoView: mockScrollIntoView,
    });
  });

  it('renders with default services', () => {
    render(<Services />);
    
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('DevOps Assessments')).toBeInTheDocument();
    expect(screen.getByText('Cloud Migrations')).toBeInTheDocument();
    expect(screen.getByText('Platform Engineering')).toBeInTheDocument();
    expect(screen.getByText('Team Augmentation')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(<Services title="Custom Services Title" />);
    
    expect(screen.getByText('Custom Services Title')).toBeInTheDocument();
  });

  it('renders with custom services', () => {
    const customServices = [
      {
        id: 'custom-service',
        title: 'Custom Service',
        description: 'Custom service description',
        features: ['Feature 1', 'Feature 2'],
        icon: <div data-testid="custom-icon">Icon</div>,
      },
    ];

    render(<Services services={customServices} />);
    
    expect(screen.getByText('Custom Service')).toBeInTheDocument();
    expect(screen.getByText('Custom service description')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    render(<Services />);
    
    const section = screen.getByRole('region', { name: /services section/i });
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'services');
  });

  it('displays service features correctly', () => {
    render(<Services />);
    
    // Check DevOps Assessments features
    expect(screen.getByText('Current state analysis')).toBeInTheDocument();
    expect(screen.getByText('Gap identification')).toBeInTheDocument();
    expect(screen.getByText('Roadmap development')).toBeInTheDocument();
    expect(screen.getByText('ROI projections')).toBeInTheDocument();
  });

  it('displays service descriptions', () => {
    render(<Services />);
    
    expect(screen.getByText(/Comprehensive evaluation of your current DevOps practices/)).toBeInTheDocument();
    expect(screen.getByText(/Seamless migration to AWS, Azure, or GCP/)).toBeInTheDocument();
    expect(screen.getByText(/Build robust, scalable platforms/)).toBeInTheDocument();
    expect(screen.getByText(/Expert DevOps engineers who integrate seamlessly/)).toBeInTheDocument();
  });

  it('renders call to action button', () => {
    render(<Services />);
    
    const ctaButton = screen.getByRole('button', { name: /get started/i });
    expect(ctaButton).toBeInTheDocument();
  });

  it('handles CTA button click', () => {
    render(<Services />);
    
    const ctaButton = screen.getByRole('button', { name: /get started/i });
    fireEvent.click(ctaButton);
    
    expect(mockQuerySelector).toHaveBeenCalledWith('#contact');
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('applies custom className', () => {
    render(<Services className="custom-services" />);
    
    const section = screen.getByRole('region', { name: /services section/i });
    expect(section).toHaveClass('custom-services');
  });

  it('has responsive grid layout', () => {
    render(<Services />);
    
    // Find the grid container
    const gridContainer = screen.getByText('DevOps Assessments').closest('.grid');
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-2',
      'lg:grid-cols-2',
      'gap-8'
    );
  });

  it('renders service cards with hover effects', () => {
    render(<Services />);
    
    const serviceCard = screen.getByText('DevOps Assessments').closest('.group');
    expect(serviceCard).toHaveClass('group', 'hover:shadow-lg');
  });

  it('displays section description', () => {
    render(<Services />);
    
    expect(screen.getByText(/Comprehensive DevOps solutions designed to accelerate/)).toBeInTheDocument();
  });

  it('renders all default service icons', () => {
    render(<Services />);
    
    // Each service should have an icon (SVG elements)
    const serviceCards = screen.getAllByText(/Key Features/);
    expect(serviceCards).toHaveLength(4); // 4 default services
  });

  it('handles empty services array', () => {
    render(<Services services={[]} />);
    
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  it('renders service features with bullet points', () => {
    render(<Services />);
    
    // Features should be rendered as list items with bullet points
    const featuresSection = screen.getByText('Current state analysis').closest('ul');
    expect(featuresSection).toBeInTheDocument();
  });

  it('has proper semantic heading structure', () => {
    render(<Services />);
    
    const mainHeading = screen.getByRole('heading', { level: 2, name: 'Our Services' });
    expect(mainHeading).toBeInTheDocument();
    
    const serviceHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(serviceHeadings).toHaveLength(4); // 4 service titles
  });
});