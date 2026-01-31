import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'AccelerOps - Accelerate Your DevOps Transformation',
  description: 'Elite DevOps consulting firm specializing in modern infrastructure practices, cloud migrations, and platform engineering.',
  keywords: ['DevOps', 'Cloud Migration', 'Platform Engineering', 'Infrastructure as Code', 'AWS', 'Azure', 'GCP'],
  authors: [{ name: 'AccelerOps' }],
  creator: 'AccelerOps',
  publisher: 'AccelerOps',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://accelerops.com',
    title: 'AccelerOps - Accelerate Your DevOps Transformation',
    description: 'Elite DevOps consulting firm specializing in modern infrastructure practices.',
    siteName: 'AccelerOps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AccelerOps - Accelerate Your DevOps Transformation',
    description: 'Elite DevOps consulting firm specializing in modern infrastructure practices.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}