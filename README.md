# Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and achievements as a Computer Science student at University of the Arts London.

## Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Theme switcher with persistent preferences
- **Project Showcase** - Interactive grid displaying 5+ projects with live demos and GitHub links
- **Contact Form** - Functional email contact form
- **Dynamic Navigation** - Smooth navigation with active route highlighting
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode support

### Backend
- **Email Service**: Resend API
- **Form Handling**: React Hook Form with Zod validation
- **Server Actions**: Next.js Server Actions

### Deployment
- **Platform**: Vercel
- **Analytics**: Vercel Analytics

## Project Structure

\`\`\`
portfolio-website/
├── app/
│   ├── about/          # About page with education, skills, achievements
│   ├── contact/        # Contact form page
│   ├── projects/       # Projects showcase page
│   ├── actions/        # Server actions (email sending)
│   ├── layout.jsx      # Root layout with navigation
│   ├── page.jsx        # Home page
│   └── globals.css     # Global styles and theme tokens
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── navigation.jsx  # Main navigation component
│   ├── social-links.jsx # Social media links
│   ├── theme-provider.jsx
│   └── theme-toggle.jsx
├── lib/
│   ├── projects-data.js # Project data configuration
│   └── utils.ts        # Utility functions
├── public/             # Static assets (images, logos)
└── package.json
\`\`\`

## Featured Projects

1. **Smart Irrigation System** - IoT-based automated irrigation using Arduino
2. **F1 2024 Season Data Explorer** - Flask + React data visualization app
3. **Retro Asteroids** - 2D Unity game with classic arcade gameplay
4. **Coordinate Systems Visualization** - Interactive mathematical pattern generator
5. **Future Holborn** - Speculative urban planning guide

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
