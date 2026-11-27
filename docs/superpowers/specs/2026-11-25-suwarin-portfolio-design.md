# Suwarin Portfolio Design

## Intent

Build a responsive, factual portfolio for Suwarin Photak to support team interviews and frontend developer applications. The site presents two featured projects, earlier academic work, education, internship responsibilities, exact technical skills, technical training, learning notes, and contact information.

## Goals and constraints

- Use React, Vite, Tailwind CSS v4, React Router, Motion for React, Lucide React, and ESLint.
- Keep all editable content centralized in data modules and keep the app frontend-only.
- Build the required home, work, two project case study, notes index, note detail, and not-found routes.
- Use the Forest & Form palette, editorial layouts, restrained neumorphism, and glass navigation.
- Reference supplied project screenshots, portrait, and resume PDF directly.
- Describe only supplied project facts and responsibilities. Mark notes pending when details were not supplied.
- Support keyboard navigation, reduced motion, mobile layouts, and Vercel SPA routes.

## Approaches

1. One long page with modal case studies and notes. Rejected because direct routes and deep linking are required.
2. Separate route pages with shared data, layouts, and section-navigation primitives. Selected because it supports the requested routes and reuse while keeping the portfolio maintainable.

## Implementation decisions

- Use React Router with a shared site shell and dedicated page components.
- Use IntersectionObserver for active section state, sticky project image state, and scroll reveals; disable motion when reduced motion is requested.
- Keep supplied screenshot paths alongside project records and render those images directly.
- Keep article structures data-driven and use pending content for topics without supplied material.
- Use Vite and Tailwind CSS v4 via `@tailwindcss/vite`; add no backend or artificial API calls.

## Out of scope

- Creating personal or project screenshots, a resume file, backend services, or database integrations.
- Inventing unavailable case-study challenges, metrics, experience, feature details, or demo URLs.
