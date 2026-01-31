import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props interface for the Card component
 * 
 * @interface CardProps
 */
export interface CardProps {
  /** Card title */
  title?: string;
  /** Card description */
  description?: string;
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Card content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Flexible Card component for displaying services, methodologies, and other content.
 * Provides consistent styling and layout for content cards throughout the application.
 * 
 * @param props - Card component props
 * @returns JSX.Element - Rendered card element
 * 
 * @example
 * ```tsx
 * <Card 
 *   title="DevOps Assessment" 
 *   description="Comprehensive evaluation of your current DevOps practices"
 *   icon={<CheckCircle />}
 * >
 *   Additional content here
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      <div className="p-6">
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        
        {title && (
          <h3 className="mb-2 text-xl font-semibold leading-none tracking-tight">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-sm text-muted-foreground mb-4">
            {description}
          </p>
        )}
        
        {children}
      </div>
    </div>
  );
};

/**
 * Card Header component for structured card layouts
 */
export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)}>
    {children}
  </div>
);

/**
 * Card Title component for consistent title styling
 */
export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)}>
    {children}
  </h3>
);

/**
 * Card Description component for consistent description styling
 */
export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <p className={cn('text-sm text-muted-foreground', className)}>
    {children}
  </p>
);

/**
 * Card Content component for main card content area
 */
export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div className={cn('p-6 pt-0', className)}>
    {children}
  </div>
);

/**
 * Card Footer component for action areas
 */
export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div className={cn('flex items-center p-6 pt-0', className)}>
    {children}
  </div>
);