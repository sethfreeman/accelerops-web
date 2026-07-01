'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Social link data interface
 * 
 * @interface SocialLink
 */
export interface SocialLink {
  /** Platform name */
  platform: string;
  /** Platform URL */
  url: string;
  /** Platform icon component */
  icon: React.ReactNode;
  /** Platform description */
  description: string;
}

/**
 * Props interface for the Contact component
 * 
 * @interface ContactProps
 */
export interface ContactProps {
  /** Contact email address */
  email?: string;
  /** Array of social links */
  socialLinks?: SocialLink[];
  /** Section title */
  title?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default social links for AccelerOps
 */
const defaultSocialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/accelerops',
    icon: <Github className="h-5 w-5" />,
    description: 'Open source projects and contributions',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/accelerops',
    icon: <Linkedin className="h-5 w-5" />,
    description: 'Professional network and company updates',
  },
];

/**
 * Contact section component with professional presentation.
 * Provides multiple contact methods including email and social links
 * with consistent styling and accessibility features.
 * 
 * @param props - Contact component props
 * @returns JSX.Element - Rendered contact section
 * 
 * @example
 * ```tsx
 * <Contact 
 *   title="Get In Touch"
 *   email="hello@accelerops.com"
 *   socialLinks={customSocialLinks}
 * />
 * ```
 */
export const Contact: React.FC<ContactProps> = ({
  email = 'hello@accelerops.com',
  socialLinks = defaultSocialLinks,
  title = 'Get In Touch',
  className,
}) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=DevOps Consultation Inquiry`;
  };

  return (
    <section
      id="contact"
      className={cn('py-24 bg-muted/30', className)}
      aria-label="Contact section"
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              {title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to accelerate your digital transformation? Let&apos;s discuss how we can 
            help optimize your infrastructure and empower your development teams.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Direct Communication
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Reach out directly for consultation inquiries, project discussions, 
                    or technical questions. We respond within 24 hours.
                  </p>
                  <Button
                    onClick={handleEmailClick}
                    className="group/btn"
                    size="lg"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {email}
                    <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6">
                    <ExternalLink className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Connect & Follow
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Stay updated with our latest projects, insights, and contributions 
                    to the DevOps community.
                  </p>
                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <SocialLinkButton key={link.platform} link={link} />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/5 via-background to-primary/5 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Transform Your DevOps?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you&apos;re looking to optimize existing infrastructure, migrate to the cloud, 
                or build a world-class platform engineering practice, we&apos;re here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleEmailClick}
                  size="lg"
                  className="group"
                >
                  Start a Conversation
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    const servicesSection = document.querySelector('#services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Our Services
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Individual social link button component
 */
interface SocialLinkButtonProps {
  link: SocialLink;
}

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors group"
      aria-label={`Visit AccelerOps on ${link.platform} (opens in new tab)`}
    >
      <div className="flex items-center gap-3">
        <div className="text-primary">
          {link.icon}
        </div>
        <div className="text-left">
          <div className="font-medium">{link.platform}</div>
          <div className="text-sm text-muted-foreground">
            {link.description}
          </div>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
    </a>
  );
};