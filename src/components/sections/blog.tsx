'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Blog post data interface
 * 
 * @interface BlogPost
 */
export interface BlogPost {
  /** Post slug/identifier */
  slug: string;
  /** Post title */
  title: string;
  /** Post excerpt */
  excerpt: string;
  /** Publication date */
  date: string;
  /** Estimated read time */
  readTime: string;
  /** Post tags */
  tags: string[];
  /** Post author */
  author?: string;
}

/**
 * Props interface for the Blog component
 * 
 * @interface BlogProps
 */
export interface BlogProps {
  /** Array of blog posts to display */
  posts?: BlogPost[];
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Placeholder blog posts for demonstration
 */
const placeholderPosts: BlogPost[] = [
  {
    slug: 'infrastructure-as-code-best-practices',
    title: 'Infrastructure as Code: Best Practices for Enterprise Scale',
    excerpt: 'Discover proven strategies for implementing IaC at scale, including modular design patterns, state management, and team collaboration workflows.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Infrastructure', 'DevOps', 'Terraform'],
  },
  {
    slug: 'zero-downtime-kubernetes-deployments',
    title: 'Achieving Zero-Downtime Deployments with Kubernetes',
    excerpt: 'Learn advanced deployment strategies including blue-green, canary, and rolling updates to ensure seamless application releases.',
    date: '2024-01-08',
    readTime: '12 min read',
    tags: ['Kubernetes', 'Deployment', 'CI/CD'],
  },
  {
    slug: 'observability-monitoring-strategy',
    title: 'Building a Comprehensive Observability Strategy',
    excerpt: 'Explore the three pillars of observability and how to implement effective monitoring, logging, and tracing for modern applications.',
    date: '2024-01-01',
    readTime: '10 min read',
    tags: ['Observability', 'Monitoring', 'SRE'],
  },
];

/**
 * Blog section component with markdown-ready infrastructure.
 * Provides a clean, professional layout for technical content
 * with placeholder posts ready for future content addition.
 * 
 * @param props - Blog component props
 * @returns JSX.Element - Rendered blog section
 * 
 * @example
 * ```tsx
 * <Blog 
 *   title="Technical Insights"
 *   subtitle="Deep-dive articles on DevOps practices"
 *   posts={blogPosts}
 * />
 * ```
 */
export const Blog: React.FC<BlogProps> = ({
  posts = placeholderPosts,
  title = 'Technical Insights',
  subtitle = 'Deep-dive articles on modern DevOps practices, infrastructure patterns, and engineering excellence.',
  className,
}) => {
  return (
    <section
      id="blog"
      className={cn('py-24 bg-background', className)}
      aria-label="Blog section"
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
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              {title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-muted/50 to-muted/30 border-dashed">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Coming Soon</span>
              </div>
              <h3 className="text-xl font-semibold">
                More Technical Content
              </h3>
              <p className="text-muted-foreground">
                We&apos;re preparing in-depth technical articles covering advanced DevOps patterns, 
                infrastructure automation, and platform engineering best practices. 
                Stay tuned for expert insights and practical guides.
              </p>
              <Button
                variant="ghost"
                className="group"
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Notified
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Individual blog post card component
 */
interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card className="h-full group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
          {post.title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Read More Link */}
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          <span>Read Article</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
};