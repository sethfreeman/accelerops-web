import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Project Configuration Tests', () => {
  describe('Next.js Configuration', () => {
    it('should have Next.js 15+ configured', () => {
      const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
      const nextVersion = packageJson.dependencies.next;
      
      // Extract version number from semver string
      const versionMatch = nextVersion.match(/(\d+)\./);
      const majorVersion = versionMatch ? parseInt(versionMatch[1]) : 0;
      
      expect(majorVersion).toBeGreaterThanOrEqual(15);
    });

    it('should have App Router enabled with typedRoutes', () => {
      const nextConfig = readFileSync(join(process.cwd(), 'next.config.js'), 'utf-8');
      expect(nextConfig).toContain('typedRoutes: true');
    });

    it('should have proper Next.js directory structure', () => {
      const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
      expect(packageJson.scripts.dev).toBe('next dev');
      expect(packageJson.scripts.build).toBe('next build');
      expect(packageJson.scripts.start).toBe('next start');
    });
  });

  describe('TypeScript Configuration', () => {
    it('should have TypeScript configured with strict mode', () => {
      const tsConfig = JSON.parse(readFileSync(join(process.cwd(), 'tsconfig.json'), 'utf-8'));
      expect(tsConfig.compilerOptions.strict).toBe(true);
    });

    it('should have proper module resolution for App Router', () => {
      const tsConfig = JSON.parse(readFileSync(join(process.cwd(), 'tsconfig.json'), 'utf-8'));
      expect(tsConfig.compilerOptions.moduleResolution).toBe('bundler');
      expect(tsConfig.compilerOptions.jsx).toBe('preserve');
    });

    it('should have path aliases configured', () => {
      const tsConfig = JSON.parse(readFileSync(join(process.cwd(), 'tsconfig.json'), 'utf-8'));
      expect(tsConfig.compilerOptions.paths).toHaveProperty('@/*');
      expect(tsConfig.compilerOptions.paths['@/*']).toEqual(['./src/*']);
    });

    it('should include Next.js types', () => {
      const tsConfig = JSON.parse(readFileSync(join(process.cwd(), 'tsconfig.json'), 'utf-8'));
      expect(tsConfig.include).toContain('next-env.d.ts');
      expect(tsConfig.include).toContain('**/*.ts');
      expect(tsConfig.include).toContain('**/*.tsx');
    });
  });

  describe('Tailwind CSS Configuration', () => {
    it('should have Tailwind CSS configured with custom design tokens', () => {
      const tailwindConfig = readFileSync(join(process.cwd(), 'tailwind.config.js'), 'utf-8');
      expect(tailwindConfig).toContain('darkMode: [\'class\']');
      expect(tailwindConfig).toContain('extend:');
      expect(tailwindConfig).toContain('colors:');
    });

    it('should have proper content paths for App Router', () => {
      const tailwindConfig = readFileSync(join(process.cwd(), 'tailwind.config.js'), 'utf-8');
      expect(tailwindConfig).toContain('./src/app/**/*.{js,ts,jsx,tsx,mdx}');
      expect(tailwindConfig).toContain('./src/components/**/*.{js,ts,jsx,tsx,mdx}');
    });

    it('should have custom design tokens defined', () => {
      const tailwindConfig = readFileSync(join(process.cwd(), 'tailwind.config.js'), 'utf-8');
      expect(tailwindConfig).toContain('primary:');
      expect(tailwindConfig).toContain('secondary:');
      expect(tailwindConfig).toContain('background:');
      expect(tailwindConfig).toContain('foreground:');
    });

    it('should have PostCSS configured', () => {
      const postcssConfig = readFileSync(join(process.cwd(), 'postcss.config.js'), 'utf-8');
      expect(postcssConfig).toContain('tailwindcss');
      expect(postcssConfig).toContain('autoprefixer');
    });
  });

  describe('Testing Infrastructure', () => {
    it('should have Vitest configured', () => {
      const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
      expect(packageJson.devDependencies).toHaveProperty('vitest');
      expect(packageJson.scripts.test).toBe('vitest --run');
    });

    it('should have React Testing Library configured', () => {
      const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
      expect(packageJson.devDependencies).toHaveProperty('@testing-library/react');
      expect(packageJson.devDependencies).toHaveProperty('@testing-library/jest-dom');
    });

    it('should have test setup file configured', () => {
      const vitestConfig = readFileSync(join(process.cwd(), 'vitest.config.ts'), 'utf-8');
      expect(vitestConfig).toContain('setupFiles: [\'./src/test/setup.ts\']');
      expect(vitestConfig).toContain('environment: \'jsdom\'');
    });
  });

  describe('Project Structure', () => {
    it('should have required dependencies', () => {
      const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
      
      // Core dependencies
      expect(packageJson.dependencies).toHaveProperty('next');
      expect(packageJson.dependencies).toHaveProperty('react');
      expect(packageJson.dependencies).toHaveProperty('react-dom');
      expect(packageJson.dependencies).toHaveProperty('framer-motion');
      expect(packageJson.dependencies).toHaveProperty('lucide-react');
      expect(packageJson.dependencies).toHaveProperty('next-themes');
      
      // Dev dependencies
      expect(packageJson.devDependencies).toHaveProperty('typescript');
      expect(packageJson.devDependencies).toHaveProperty('tailwindcss');
      expect(packageJson.devDependencies).toHaveProperty('eslint');
    });
  });
});