import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';

describe('Card Component', () => {
  it('renders with basic props', () => {
    render(
      <Card title="Test Title" description="Test Description">
        <p>Card content</p>
      </Card>
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders without title and description', () => {
    render(
      <Card>
        <p>Only content</p>
      </Card>
    );
    
    expect(screen.getByText('Only content')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(
      <Card 
        title="With Icon" 
        icon={<CheckCircle data-testid="card-icon" />}
      >
        Content
      </Card>
    );
    
    expect(screen.getByTestId('card-icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Card className="custom-card-class" title="Custom Card">
        Content
      </Card>
    );
    
    // Find the actual card container (outermost div)
    const cardContainer = screen.getByText('Custom Card').closest('.custom-card-class');
    expect(cardContainer).toBeInTheDocument();
  });

  it('has proper default styling', () => {
    render(
      <Card title="Styled Card">
        Content
      </Card>
    );
    
    // Find the actual card container by traversing up from title
    const titleElement = screen.getByText('Styled Card');
    const cardContainer = titleElement.closest('[class*="rounded-lg"]');
    expect(cardContainer).toHaveClass(
      'rounded-lg',
      'border',
      'bg-card',
      'text-card-foreground',
      'shadow-sm'
    );
  });
});

describe('CardHeader Component', () => {
  it('renders children correctly', () => {
    render(
      <CardHeader>
        <h2>Header Content</h2>
      </CardHeader>
    );
    
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <CardHeader className="custom-header">
        <h2>Header</h2>
      </CardHeader>
    );
    
    const headerElement = screen.getByText('Header').closest('div');
    expect(headerElement).toHaveClass('custom-header');
  });
});

describe('CardTitle Component', () => {
  it('renders as h3 element', () => {
    render(<CardTitle>Card Title</CardTitle>);
    
    const titleElement = screen.getByRole('heading', { level: 3 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Card Title');
  });

  it('applies proper styling', () => {
    render(<CardTitle>Styled Title</CardTitle>);
    
    const titleElement = screen.getByRole('heading', { level: 3 });
    expect(titleElement).toHaveClass(
      'text-2xl',
      'font-semibold',
      'leading-none',
      'tracking-tight'
    );
  });
});

describe('CardDescription Component', () => {
  it('renders description text', () => {
    render(<CardDescription>This is a description</CardDescription>);
    
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('applies proper styling', () => {
    render(<CardDescription>Styled Description</CardDescription>);
    
    const descElement = screen.getByText('Styled Description');
    expect(descElement).toHaveClass('text-sm', 'text-muted-foreground');
  });
});

describe('CardContent Component', () => {
  it('renders content correctly', () => {
    render(
      <CardContent>
        <p>Card content here</p>
      </CardContent>
    );
    
    expect(screen.getByText('Card content here')).toBeInTheDocument();
  });

  it('applies proper padding', () => {
    render(
      <CardContent>
        <p>Content</p>
      </CardContent>
    );
    
    const contentElement = screen.getByText('Content').closest('div');
    expect(contentElement).toHaveClass('p-6', 'pt-0');
  });
});

describe('CardFooter Component', () => {
  it('renders footer content', () => {
    render(
      <CardFooter>
        <button>Footer Button</button>
      </CardFooter>
    );
    
    expect(screen.getByRole('button', { name: 'Footer Button' })).toBeInTheDocument();
  });

  it('applies flex layout', () => {
    render(
      <CardFooter>
        <span>Footer</span>
      </CardFooter>
    );
    
    const footerElement = screen.getByText('Footer').closest('div');
    expect(footerElement).toHaveClass('flex', 'items-center', 'p-6', 'pt-0');
  });
});