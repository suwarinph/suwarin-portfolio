# Suwarin Portfolio

A responsive React portfolio for Suwarin Photak, Frontend Developer and Computer Science graduate from Khon Kaen University. The site is a frontend-only Vite app with editable content modules and project screenshots stored in `public/assets/projects/`.

## Technologies

- React 19 and Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- Motion for React
- Lucide React
- ESLint

Axios is not installed because the portfolio has no API request to make. No backend or database is required.

## Run locally

Requires Node.js 20.19+.

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run lint
npm run build
npm run preview
```

## Routes

- `/` — portfolio homepage
- `/projects` — featured projects and earlier work
- `/projects/megamuii-works` — MegaMuii Works case study
- `/projects/megamuii-ecommerce` — MegaMuii E-Commerce case study
- Other paths — not-found page

`vercel.json` rewrites deep links to the Vite SPA entry point.

## Project structure

```text
src/
  components/      Shared navigation, layout, image, and section UI
    home/          Homepage sections and project showcase
  data/            Editable profile, projects, skills, experience, and training
  hooks/           Scroll-position helpers
  pages/           Home, work, case study, and not-found pages
  styles/          Tailwind v4 import, design tokens, and component styling
public/assets/projects/
  megamuii-works/       Project screenshots
  megamuii-ecommerce/   Storefront screenshots
public/assets/resume/
  suwarin-resume.pdf    Resume PDF
  profile-personal.png Home portrait
```

## Update content

Edit the data modules in `src/data/`:

- `profile.js` — name, role, summary, education, email, GitHub, resume path, and contact copy
- `projects.js` — project copy, technology tags, demo links, feature descriptions, and screenshot paths
- `skills.js` — skill categories and level labels
- `experience.js` — internship responsibilities and training topics

The homepage and case study pages render from these shared records.

## Update a live demo URL

In `src/data/projects.js`, set a project's `demo` value to a verified URL. Keep it `null` if no URL is available; the site then shows “Coming Soon” without a link.

## Deploy to Vercel

1. Push this workspace to a Git repository.
2. Import the repository into Vercel.
3. Use the default Vite settings: build command `npm run build`, output directory `dist`.
4. Deploy. The included `vercel.json` handles direct visits and refreshes on nested routes.

No environment variables are needed.
