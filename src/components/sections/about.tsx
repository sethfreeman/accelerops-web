'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Shield, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

/**
 * Methodology data interface
 * 
 * @interface Methodology
 */
export interface Methodology {
  /** Methodology identifier */
  id: string;
  /** Methodology title */
  title: string;
  /** Methodology description */
  description: string;
  /** Core principles */
  principles: string[];
  /** Methodology icon component */
  icon: React.ReactNode;
}

/**
 * Props interface for the About component
 * 
 * @interface AboutProps
 */
export interface AboutProps {
  /** Array of methodologies to display */
  methodologies?: Methodology[];
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default methodologies data for AccelerOps
 */
const defaultMethodologies: Methodology[] = [
  {
    id: 'infrastructure-as-code',
    title: 'Infrastructure as Code',
    description: 'Declarative infrastructure management that ensures consistency, repeatability, and version control across all environments.',
    principles: [
      'Immutable infrastructure',
      'Version-controlled configurations',
      'Automated provisioning',
      'Environment parity'
    ],
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    id: 'continuous-verification',
    title: 'Continuous Verification',
    description: 'Automated testing and validation at every stage of the pipeline to ensure quality and reliability.',
    principles: [
      'Shift-left testing',
      'Automated quality gates',
      'Performance monitoring',
      'Compliance validation'
    ],
    icon: <Zap className="h-6 w-6" />,
  },
  {
    id: 'security-left',
    title: 'Security-Left Principles',
    description: 'Embedding security practices throughout the development lifecycle, not as an afterthought.',
    principles: [
      'Security by design',
      'Automated vulnerability scanning',
      'Compliance as code',
      'Zero-trust architecture'
    ],
    icon: <Shield className="h-6 w-6" />,
  },
];

/**
 * About section component focusing on AccelerOps methodology.
 * Presents the company's core principles and approach in an
 * elite, abstracted manner without revealing team details.
 * 
 * @param props - About component props
 * @returns JSX.Element - Rendered about section
 * 
 * @example
 * ```tsx
 * <About 
 *   title="Our Methodology"
 *   description="Our proven approach to DevOps transformation"
 *   methodologies={customMethodologies}
 * />
 * ```
 */
export const About: React.FC<AboutProps> = ({
  methodologies = defaultMethodologies,
  title = 'Our Methodology',
  description = 'We leverage battle-tested principles and cutting-edge practices to deliver transformational results. Our methodology is built on three foundational pillars that ensure sustainable, scalable, and secure DevOps implementations.',
  className,
}) => {
  return (
    <section
      id="about"
      className={cn('py-24 bg-muted/30', className)}
      aria-label="About section"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Methodologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {methodologies.map((methodology, index) => (
            <motion.div
              key={methodology.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <MethodologyCard methodology={methodology} />
            </motion.div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-background to-primary/5 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Elite Engineering, Proven Results
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our approach combines deep technical expertise with strategic thinking. 
                We don&apos;t just implement tools—we architect solutions that scale with your business, 
                reduce operational overhead, and empower your teams to deliver with confidence.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Methodology-driven transformation</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Individual methodology card component
 */
interface MethodologyCardProps {
  methodology: Methodology;
}

const MethodologyCard: React.FC<MethodologyCardProps> = ({ methodology }) => {
  return (
    <Card className="h-full group hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {methodology.icon}
          </div>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {methodology.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {methodology.description}
        </p>

        {/* Principles */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Core Principles
          </h4>
          <ul className="space-y-2">
            {methodology.principles.map((principle, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                <span className="leading-relaxed">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};