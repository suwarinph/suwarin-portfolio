# Suwarin Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a responsive React portfolio for Suwarin Photak from the supplied factual content.

**Architecture:** A Vite SPA with shared layout and UI components, centralized profile/project/skill/training/note data, and separate home, work, case study, notes, and not-found pages. IntersectionObserver powers active section navigation and project previews; supplied project images are rendered directly.

**Tech Stack:** React, Vite, Tailwind CSS v4, React Router, Motion for React, Lucide React, ESLint.

**Spec:** `docs/superpowers/specs/2026-11-25-suwarin-portfolio-design.md` and the user task brief.

## Global Constraints

- Work only in the current `suwarin-portfolio` workspace.
- Do not change any MegaMuii Works or MegaMuii E-Commerce project.
- Do not add a backend or database.
- Do not invent professional experience, project features, performance metrics, or technical skills.
- Do not use stock imagery or fabricate screenshot files.
- Use Tailwind v4 CSS-first setup with `@tailwindcss/vite`.
- Add no artificial API calls; no Axios integration is needed.
- Respect reduced motion, semantic navigation, focus visibility, and responsive layouts.

## Review Focus

- Every referenced project image must exist in `public/assets/projects/`; do not add runtime file-existence checks or missing-image instructions.
- Link the supplied portrait and resume directly; keep the e-commerce demo unavailable without a verified URL.
- Unknown learning note details must render as pending; check article data and detail route.
- Direct navigation and refresh must work on nested paths; check Vercel rewrite and HTTP routes.
- Sticky and active-section navigation must respond to real scroll position and remain usable on mobile.

## File Structure

- `src/data/`: editable profile, portfolio, skill, training, and note content.
- `src/components/`: shared shell, navigation, project image, section headings, and feature components.
- `src/pages/`: route-level home, projects, case studies, notes, and not-found pages.
- `src/hooks/`: reusable intersection and scroll behavior.
- `src/styles/`: global tokens and reusable surface treatments.
- `public/assets/projects/`: supplied screenshots for the two featured projects.

---

### Task 1: Scaffold and shared foundation

**Files:** `package.json`, `index.html`, `vite.config.js`, `eslint.config.js`, `src/main.jsx`, `src/App.jsx`, `src/styles/index.css`, `vercel.json`

- [ ] Create the Vite React app setup with the required scripts and dependencies.
- [ ] Configure Tailwind v4, routing, theme tokens, accessible document metadata, and SPA fallback.
- [ ] Run ESLint and production build to confirm the foundation works.

### Task 2: Centralized portfolio data and reusable UI

**Files:** `src/data/*`, `src/components/*`, `src/hooks/*`

- [ ] Add factual profile, project, feature, screenshot path, skills, internship, timeline, and note structures.
- [ ] Build shared nav/footer, semantic section heading, ProjectImage, pills, sticky section selector, and reveal primitives.
- [ ] Confirm project image references resolve and reduced-motion disables entrance effects.

### Task 3: Home portfolio sections

**Files:** `src/pages/HomePage.jsx`, `src/components/home/*`

- [ ] Implement hero and two-project immersive preview with mobile vertical flow.
- [ ] Implement earlier works, about/education, internship, exact skill bento, training timeline, and contact/footer.
- [ ] Confirm all text matches supplied facts and all project media uses configured image data.

### Task 4: Work, case studies, and notes routes

**Files:** `src/pages/ProjectsPage.jsx`, `src/pages/CaseStudyPage.jsx`, `src/pages/NotesPage.jsx`, `src/pages/NotePage.jsx`, `src/pages/NotFoundPage.jsx`, `src/components/case-study/*`, `src/components/notes/*`

- [ ] Implement project archive, reusable case study sections, architecture diagrams, and next-project navigation.
- [ ] Implement note listing/detail pages with pending states and sticky/compact table of contents.
- [ ] Implement all required routes and section tracking.

### Task 5: Documentation and verification

**Files:** `README.md`, `public/assets/**`

- [ ] Document content edits, local startup, and Vercel deployment.
- [ ] Run ESLint and production build.
- [ ] Start the dev server and verify routes, navigation, project images, mobile layout, reduced motion, and scroll behavior in a browser.
