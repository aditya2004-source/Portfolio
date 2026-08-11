# Aditya Choudhary — Portfolio

Personal portfolio site for Aditya Choudhary (Business Analyst | Data & Product Analytics),
built with Astro, TypeScript, and Tailwind CSS as a fully static site.

## Structure

- `src/pages/index.astro` — home page (Hero, About, Experience, Skills, Featured Projects
  preview, Analytics Projects preview, Contact)
- `src/pages/projects/index.astro` — full projects listing
- `src/pages/projects/[slug].astro` — project detail page, rendered from the content collection
- `src/content/projects/*.md` — one file per project (frontmatter drives the detail page;
  add a new file here to add a new project)
- `src/data/site.ts` — single source of truth for name, contact info, resume link
- `src/data/profile.ts` — experience, education, certifications, skills

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start the local dev server                   |
| `npm run build`     | Build the production site to `./dist/`       |
| `npm run preview`   | Preview the production build locally         |

Requires Node 22+ (`nvm use 22`).

## Adding a project

Add a new Markdown file to `src/content/projects/`, following the schema in
`src/content.config.ts`. Set `status: "featured"` for a full case-study page, or
`status: "in-progress"` for a lightweight placeholder shown only as a short note.
