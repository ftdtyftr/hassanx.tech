## HassanTech – Portfolio (Next.js 15 + React 19 + Tailwind CSS)

Modern, fast, and responsive developer portfolio built with Next.js App Router, React 19, Tailwind CSS v4, and Framer Motion.

- Live: https://hassanx.tech (Vercel)
- Repo: https://github.com/HassanXTech/Portfolio

## ✨ Features

- Sticky glassmorphism header (desktop) and mobile header with blurred, dark overlay menu
- Smooth animations with Framer Motion
- Responsive design with Tailwind CSS v4
- Social links (GitHub, Instagram, TikTok, LinkedIn, Blog)
- “Reach Me” CTA linking to Instagram DM

## 🧱 Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion

## 🚀 Getting Started

Prerequisites:
- Node.js 18+ (LTS recommended)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Build and run production:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## 🗂️ Project Structure

```
portfolio-nextjs/
├─ public/
│  ├─ hassan.png
│  ├─ globe.svg
│  └─ ...assets
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ globals.css
│  └─ components/
│     ├─ Header.tsx
│     ├─ Hero.tsx
│     ├─ About.tsx
│     ├─ WorkExperience.tsx
│     ├─ Newsletter.tsx
│     ├─ Contact.tsx
│     └─ Footer.tsx
├─ next.config.ts
├─ tsconfig.json
└─ package.json
```

## 🔧 Available Scripts

- dev: `next dev --turbopack`
- build: `next build`
- start: `next start`
- lint: `next lint`

## ☁️ Deployment

This project is optimized for Vercel. To deploy:

1. Push to GitHub (main branch)
2. Import the repo in Vercel
3. Deploy with default Next.js settings

Custom domain configuration is supported (e.g., hassanx.tech via Vercel).

## 📫 Contact

- Instagram: https://instagram.com/hassantech
- GitHub: https://github.com/HassanXTech
- LinkedIn: https://www.linkedin.com/in/HassanTech
- Blog: https://hassanx.tech

— Built with ♥ using Next.js and Vercel
