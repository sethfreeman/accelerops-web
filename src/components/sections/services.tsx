'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Cloud, 
  Settings, 
  Users,
  ArrowRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Service data interface
 * 
 * @interface Service
 */
export interface Service {
  /** Service identifier */
  id: string;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** Service features list */
  features: string[];
  /** Service icon component */
  icon: React.ReactNode;
}

/**
 * Props interface for the Services component
 * 
 * @interface ServicesProps
 */
export interface ServicesProps {
  /** Array of services to display */
  services?: Service[];
  /** Section title */
  title?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default services data for AccelerOps
 */
const defaultServices: Service[] = [
  {
    id: 'devops-assessments',
    title: 'DevOps Assessments',
    description: 'Comprehensive evaluation of your current DevOps practices, identifying bottlenecks and optimization opportunities.',
    features: [
      'Current state analysis',
      'Gap identification',
      'Roadmap development',
      'ROI projections'
    ],
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    id: 'cloud-migrations',
    title: 'Cloud Migrations',
    description: 'Seamless migration to AWS, Azure, or GCP with zero-downtime strategies and cost optimization.',
    features: [
      'Multi-cloud expertise',
      'Zero-downtime migrations',
      'Cost optimization',
      'Security compliance'
    ],
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    id: 'platform-engineering',
    title: 'Platform Engineering',
    description: 'Build robust, scalable platforms that empower your development teams with self-service capabilities.',
    features: [
      'Infrastructure as Code',
      'CI/CD pipelines',
      'Monitoring & observability',
      'Developer experience'
    ],
    icon: <Settings className="h-6 w-6" />,
  },
  {
    id: 'team-augmentation',
    title: 'Team Augmentation',
    description: 'Expert DevOps engineers who integrate seamlessly with your team to accelerate delivery.',
    features: [
      'Senior-level expertise',
      'Rapid onboarding',
      'Knowledge transfer',
      'Flexible engagement'
    ],
    icon: <Users className="h-6 w-6" />,
  },
];

/**
 * Services section component displaying AccelerOps service offerings.
 * Features a responsive grid layout with animated cards and detailed
 * service information including features and capabilities.
 * 
 * @param props - Services component props
 * @returns JSX.Element - Rendered services section
 * 
 * @example
 * ```tsx
 * <Services 
 *   title="Our Services"
 *   services={customServices}
 * />
 * ```
 */
export const Services: React.FC<ServicesProps> = ({
  services = defaultServices,
  title = 'Our Services',
  className,
}) => {
  return (
    <section
      id="services"
      className={cn('py-24 bg-background', className)}
      aria-label="Services section"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive DevOps solutions designed to accelerate your digital transformation
            and optimize your infrastructure for peak performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to transform your DevOps practices?
          </p>
          <Button
            size="lg"
            className="group"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Individual service card component
 */
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="h-full group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {service.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};