# AccelerOps Website

A modern, professional website for AccelerOps - an elite DevOps consulting firm specializing in modern infrastructure practices, cloud migrations, and platform engineering.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15+, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes (320px to 1920px+)
- **Dark/Light Mode**: Complete theme system with smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized with Next.js App Router and code splitting
- **Animations**: Smooth Framer Motion animations for enhanced UX

## 🛠 Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages and routing
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── navigation.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/          # Page sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx
│   │   ├── blog.tsx
│   │   └── contact.tsx
│   └── providers/         # Context providers
│       └── theme-provider.tsx
├── lib/                   # Utilities and constants
│   ├── utils.ts
│   └── constants.ts
└── types/                 # TypeScript definitions
    └── index.ts
```

## 🎨 Design System

The website uses a comprehensive design system built with Tailwind CSS:

- **Colors**: Primary, secondary, accent, and semantic colors with dark mode variants
- **Typography**: Inter for body text, JetBrains Mono for code
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants and sizes

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1919px
- **Large Desktop**: 1920px+

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Proper semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Other Platforms

The built application in the `.next` folder can be deployed to any platform that supports Node.js.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add environment variables as needed
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Customization

- **Colors**: Modify `tailwind.config.js` and `globals.css`
- **Content**: Update constants in `src/lib/constants.ts`
- **Components**: Extend or modify components in `src/components/`

## 📝 Content Management

### Blog Posts

The blog infrastructure is ready for markdown content:

1. Add markdown files to a `content/blog/` directory
2. Implement markdown processing in `src/app/blog/[slug]/page.tsx`
3. Update the blog section with real content

### Services & Methodology

Update service and methodology content in:
- `src/components/sections/services.tsx`
- `src/components/sections/about.tsx`

## 🧪 Testing

- **Unit Tests**: Test individual components
- **Integration Tests**: Test component interactions
- **Accessibility Tests**: Automated a11y testing
- **Property-Based Tests**: Comprehensive property validation

Run tests:
```bash
npm run test
npm run test:coverage
```

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📞 Support

For support and questions, please contact:
- Email: hello@accelerops.com
- GitHub: [AccelerOps](https://github.com/accelerops)
- LinkedIn: [AccelerOps](https://linkedin.com/company/accelerops)

---

Built with ❤️ by AccelerOps
The engineering-first web presence for AccelerOps. Showcasing TDD-driven Next.js 15 architecture and automated deployment workflows.
