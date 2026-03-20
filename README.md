# Type A Continuous Employment Support Facility — Website

Front end for a **single-page landing site** introducing a Japanese **Type A** (*shurok keizoku shien A-gata*) continuous employment support service. Sections such as hero, facility overview, eligibility, a typical day, and contact are built with **React**.

> **Note:** The repository folder name contains `remix`, but this project is **not** the [Remix](https://remix.run/) framework. It is a client-side **SPA** built with **Vite**.

---

## Tech stack

| Area | Choice |
| ---- | ------ |
| Build & dev server | [Vite](https://vitejs.dev/) 6, [vite-imagetools](https://github.com/JonasKruckenberg/imagetools) (build-time image transforms) |
| UI library | [React](https://react.dev/) 18 |
| Routing | [React Router](https://reactrouter.com/) 7 (`createBrowserRouter`) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 (`@tailwindcss/vite`) |
| Components | [Radix UI](https://www.radix-ui.com/), [MUI](https://mui.com/) (Material UI / Icons), shadcn-style primitives under `src/app/components/ui` |

Additional dependencies for forms, animation, charts, and more are listed in `package.json`. The page content is composed mainly of **Tailwind** utilities and custom SVG illustrations in `src/app/components/illustrations`.

---

## Prerequisites

- **Node.js** (LTS recommended)
- Package manager: the lockfile is **pnpm** (`pnpm-lock.yaml`). **pnpm** is recommended for reproducible installs; **npm** and **yarn** can work as well.

---

## Setup

From the repository root, install dependencies:

```bash
pnpm install
```

With npm:

```bash
npm install
```

---

## Development server

```bash
pnpm dev
```

or:

```bash
npm run dev
```

This starts the Vite dev server. Open the URL printed in the terminal (often `http://localhost:5173`).

---

## Production build

Outputs static assets to `dist/`:

```bash
pnpm build
```

or:

```bash
npm run build
```

### SSG-like prerender for `/` (top page)

This project now prerenders the **top page (`/`) at build time** to improve first paint on static hosting (including **Cloudflare Pages**):

- `build` runs `vite build`
- then `postbuild` runs `vite-node --config vite.config.ts scripts/prerender-index.tsx` (so `vite-imagetools` and other Vite transforms apply during prerender)
- the script renders the `/` route to HTML and injects it into `dist/index.html` (`#root`)
- on the client, `src/main.tsx` uses `hydrateRoot` when prerendered markup exists

This means:

- `dist/index.html` includes real HTML content for `/` (instead of an empty root container)
- hydration keeps SPA behavior after the initial load
- routes other than `/` are still handled as client-side routing

You can deploy `dist/` to static hosts such as Cloudflare Pages, S3 + CloudFront, Netlify, or Vercel static hosting.  
If you later add non-root client routes, configure **fallback to `index.html`** on your host.

---

## Project layout (key files)

```text
├── index.html              # Entry HTML (document title: Japanese facility site title)
├── vite.config.ts          # Vite: React, Tailwind, `@` → `src` alias
├── package.json
├── scripts/
│   └── prerender-index.tsx # Build-time prerender for `/`
├── src/
│   ├── main.tsx            # React root mount, loads `index.css`
│   ├── styles/
│   │   └── index.css       # Global styles (Tailwind, etc.)
│   └── app/
│       ├── App.tsx         # RouterProvider
│       ├── routes.tsx      # Routes: `/` → Root + HomePage
│       └── components/
│           ├── Root.tsx    # Layout: Header / main / Footer
│           ├── HomePage.tsx
│           ├── Header.tsx
│           ├── Footer.tsx
│           ├── illustrations/   # Section SVG illustrations
│           ├── ui/              # Shared UI (Radix-based, etc.)
```

---

## Adding routes

Routes are defined in the `createBrowserRouter` array in `src/app/routes.tsx`. To add pages, append `{ path: "...", Component: ... }` under `Root`’s `children` and place the corresponding components under `src/app/components/` for consistency.

---

## npm scripts

| Script | Description |
| ------ | ----------- |
| `dev` | Start dev server (`vite`) |
| `build` | Production build (`vite build`) |
| `postbuild` | Prerender `/` into `dist/index.html` (`vite-node --config vite.config.ts scripts/prerender-index.tsx`) |

---

## License & content notice

The `name` field in `package.json` is still `@figma/my-make-file` from a template. If you publish this repo, update the package name and license metadata to match your use case.

Copy, contact details, and facility names may be **placeholder or sample** data. Replace everything with accurate information before using the site in production.
