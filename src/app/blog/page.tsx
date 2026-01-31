import { Blog } from '@/components/sections/blog';

/**
 * Blog page component that displays all blog posts.
 * This page is ready for markdown content integration.
 * 
 * @returns JSX.Element - Blog page
 */
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <Blog />
    </main>
  );
}