<<<<<<< HEAD
# Personal Portfolio Website

A clean, minimal, and professional personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS
- **Dark/Light Theme**: Persistent theme toggle with system preference detection
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Metadata, OpenGraph, structured data, sitemap, and robots.txt
- **Performance**: Fast load times with static generation
- **Accessibility**: Semantic HTML and proper ARIA labels

## Pages

- **Home**: Hero section with introduction and call-to-actions
- **About**: Professional narrative, experience timeline, education, and skills
- **Projects**: Technical projects and startups with detailed descriptions
- **Publications**: Academic-style listing of research papers and publications
- **Contact**: Contact information and social media links

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Content

1. **Personal Information**: Update metadata in `app/layout.tsx`
2. **About Page**: Edit `app/about/page.tsx` with your experience and education
3. **Projects**: Add your projects in `app/projects/page.tsx`
4. **Publications**: Add your publications in `app/publications/page.tsx`
5. **Contact**: Update contact information in `app/contact/page.tsx`
6. **Social Links**: Update links in `components/footer.tsx` and `app/contact/page.tsx`

### Update Domain

Replace `https://mutakilu.dev` with your actual domain in:
- `app/layout.tsx` (metadata)
- `app/sitemap.ts`
- `app/robots.ts`
- `components/structured-data.tsx`

### Theme Colors

The theme uses teal as the accent color. To change it, update the `teal` color values in `tailwind.config.ts` and replace references throughout the codebase.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with default settings

The site will be automatically deployed and updated on every push to the main branch.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## License

MIT
=======

