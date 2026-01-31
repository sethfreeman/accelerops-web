# Contributing to AccelerOps Website

Thank you for your interest in contributing to the AccelerOps website! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- A code editor (VS Code recommended)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/accelerops-website.git
   cd accelerops-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open http://localhost:3000** to view the site

## 📋 Development Guidelines

### Code Standards

- **TypeScript**: All code must be written in TypeScript with strict mode
- **ESLint**: Follow the configured ESLint rules
- **Prettier**: Code must be formatted with Prettier
- **JSDoc**: All functions and components must have comprehensive JSDoc comments

### Component Guidelines

1. **File Naming**: Use kebab-case for files, PascalCase for components
2. **Props Interface**: Always define TypeScript interfaces for component props
3. **Documentation**: Include JSDoc comments with examples
4. **Accessibility**: Ensure all components meet WCAG 2.1 AA standards

### Example Component Structure

```tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props interface for the ExampleComponent
 */
export interface ExampleComponentProps {
  /** Component title */
  title: string;
  /** Optional description */
  description?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Example component that demonstrates proper structure.
 * 
 * @param props - Component props
 * @returns JSX.Element - Rendered component
 * 
 * @example
 * ```tsx
 * <ExampleComponent 
 *   title="Hello World"
 *   description="This is an example"
 * />
 * ```
 */
export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={cn('base-styles', className)}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};
```

## 🧪 Testing Requirements

### Test Coverage

- All new components must have unit tests
- Aim for 90%+ test coverage on critical components
- Include accessibility tests for interactive components

### Test Structure

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExampleComponent } from './example-component';

describe('ExampleComponent', () => {
  it('renders with required props', () => {
    render(<ExampleComponent title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('handles optional props correctly', () => {
    render(
      <ExampleComponent 
        title="Test Title" 
        description="Test Description" 
      />
    );
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🎨 Design System

### Tailwind CSS Usage

- Use design tokens from `tailwind.config.js`
- Prefer utility classes over custom CSS
- Use the `cn()` utility for conditional classes

### Color Palette

```tsx
// Primary colors
className="bg-primary text-primary-foreground"

// Secondary colors
className="bg-secondary text-secondary-foreground"

// Semantic colors
className="bg-destructive text-destructive-foreground"
```

### Responsive Design

```tsx
// Mobile-first approach
className="text-sm md:text-base lg:text-lg"

// Grid layouts
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## 📝 Commit Guidelines

### Commit Message Format

Use conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(hero): add animated background pattern
fix(navigation): resolve mobile menu accessibility issue
docs(readme): update installation instructions
style(button): improve hover state transitions
```

## 🔄 Pull Request Process

### Before Submitting

1. **Run the checklist**:
   ```bash
   npm run lint      # Check for linting errors
   npm run test      # Run all tests
   npm run build     # Ensure build succeeds
   ```

2. **Update documentation** if needed
3. **Add tests** for new functionality
4. **Test accessibility** with screen readers

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Accessibility testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests pass
```

### Review Process

1. **Automated checks** must pass (linting, tests, build)
2. **Code review** by maintainers
3. **Accessibility review** for UI changes
4. **Performance review** for significant changes

## 🐛 Bug Reports

### Before Reporting

1. Check existing issues
2. Reproduce the bug
3. Test in multiple browsers if applicable

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the issue

**To Reproduce**
Steps to reproduce the behavior

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g. macOS, Windows]
- Browser: [e.g. Chrome, Firefox]
- Version: [e.g. 22]
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
Clear description of what you want to happen

**Describe alternatives you've considered**
Alternative solutions or features considered

**Additional context**
Any other context or screenshots
```

## 📚 Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Tools

- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🤝 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain professional communication

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the project maintainers.

## 📞 Getting Help

- **Documentation**: Check README.md and this guide
- **Issues**: Search existing GitHub issues
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact hello@accelerops.com for urgent matters

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes for significant contributions
- Project documentation

Thank you for contributing to AccelerOps! 🚀