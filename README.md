# Website Next.js 15 Template

A modern Next.js 15 template with React 19, TypeScript, Tailwind CSS 4, and Builder.io integration ready.

## 🚀 Features

- **Next.js 15.5.2** - Latest version with App Router
- **React 19.1.0** - Latest React with new features
- **TypeScript 5** - Full type safety
- **Tailwind CSS 4** - Latest styling framework
- **ESLint 9** - Code quality and consistency
- **Builder.io Ready** - Visual page builder integration
- **Turbopack** - Fast development builds
- **Modern Tooling** - Latest development experience

## 📋 Prerequisites

- Node.js 18.17 or later (you're using 22.16.0 ✅)
- npm, yarn, pnpm, or bun

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd website-nextjs-15
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables
```bash
cp env.example .env.local
# Edit .env.local with your configuration
```

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Builder.io Integration

This template is ready for Builder.io integration. To set up Builder.io:

1. Push this project to GitHub
2. Connect your GitHub repository to Builder.io
3. Builder.io will automatically:
   - Install Builder.io dependencies
   - Configure the integration
   - Set up component registry
   - Create Builder.io models

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── src/                   # Source code (if using src directory)
├── .gitignore            # Git ignore rules
├── env.example           # Environment variables template
├── LICENSE               # MIT License
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Styling
- Modify `app/globals.css` for global styles
- Use Tailwind CSS classes in your components
- Configure Tailwind in `tailwind.config.js`

### Components
- Create new components in `app/components/` or `src/components/`
- Register components with Builder.io for visual editing

### Pages
- Add new pages in the `app/` directory
- Use the App Router file-based routing system

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Other Platforms
- **Netlify** - Supports Next.js with proper configuration
- **Railway** - Easy deployment with GitHub integration
- **AWS Amplify** - Full-stack deployment solution

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React 19 Documentation](https://react.dev) - learn about React 19 features
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [Builder.io Documentation](https://www.builder.io/c/docs) - learn about Builder.io
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - learn about TypeScript

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Search existing [GitHub issues](https://github.com/vercel/next.js/issues)
3. Create a new issue with detailed information

---

Built with ❤️ using Next.js 15, React 19, and modern web technologies.
