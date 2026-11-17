# Fahmiya Nishad — Personal Portfolio

A responsive personal portfolio starter built for the Frontend Development Assessment.

## Features
- React + TypeScript + Vite
- Hash-based React Router navigation (suitable for GitHub Pages refreshes)
- Home, About, Skills, Projects, Education and Contact sections
- Project detail pages
- Project category filtering
- Dark/light theme saved in localStorage
- Responsive layouts
- Jest + React Testing Library test example
- ESLint and Prettier configuration

## Before submitting
1. Replace the sample email, GitHub and LinkedIn URLs in `src/pages/HomePage.tsx`.
2. Review every project description in `src/data/projects.ts`. Keep only work you actually completed and accurately describe your contribution.
3. Confirm your education dates and completion status.
4. Add real GitHub/demo URLs to project data when available.
5. Add your CV only if you want it publicly downloadable and it contains no private information.

## Setup
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually `http://localhost:5173`.

## Quality checks
```bash
npm test
npm run lint
npm run build
```

## GitHub Pages deployment
1. Create a GitHub repository.
2. If it is a project repository, edit `base` in `vite.config.ts` to `'/YOUR-REPOSITORY-NAME/'`. If the repository is named `YOUR-USERNAME.github.io`, keep `/`.
3. Add the workflow file `.github/workflows/deploy.yml`.
4. Push the project to the `main` branch.
5. In GitHub, open Settings → Pages and choose GitHub Actions as the source.
6. Open Actions and wait for the deployment workflow to finish.
7. Copy the published URL from Settings → Pages and test it on mobile and desktop.

## Folder structure
```text
src/
  components/    Reusable UI components
  data/          Project content
  pages/         Home and project detail pages
  styles/        Global responsive styling
  tests/         Jest setup
  types/         TypeScript interfaces
  App.tsx
  main.tsx
.github/
  workflows/
```
