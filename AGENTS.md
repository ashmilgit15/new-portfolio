# AGENTS.md

## Purpose
This repo is a personal portfolio built with Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and a few shadcn/ui-style primitives.
This file is for coding agents working in this repository.
Prefer small, targeted edits that preserve the current visual style and structure.

## Repo Snapshot
- Package manager: `npm`
- Lockfile: `package-lock.json`
- Source root: `src/`
- Alias: `@/*` -> `src/*`
- App Router entrypoints: `src/app/*`
- Shared UI primitives: `src/components/ui/*`
- Utilities: `src/lib/*`
- Main global styles: `src/app/globals.css`
- React Compiler: enabled in `next.config.ts`
- TypeScript: `strict: true`

## Rule Files
No extra agent rule files were found during analysis.
- No prior `AGENTS.md` existed here.
- No `.cursorrules` file exists.
- No `.cursor/rules/` files exist.
- No `.github/copilot-instructions.md` file exists.
If any of those files are added later, treat them as higher-priority guidance and update this document.

## Install And Run
Install dependencies first: `npm install`
Start dev server: `npm run dev`
Create a production build: `npm run build`
Start production server: `npm run start`
Run lint for the whole repo: `npm run lint`
Lint a single file: `npx eslint "src/components/contact.tsx"`

## Tests
There is no test runner configured today.
- No `test` script exists in `package.json`.
- No Jest, Vitest, Playwright, or Cypress config was found.
- No `*.test.*` or `*.spec.*` files were found.
There is currently no valid single-test command.
If tests are added later, update this file with the full test command, single-test command, watch command, and coverage command.

## Verified Commands
These commands were verified after installing dependencies:
- `npm run lint`
- `npx eslint "src/components/contact.tsx"`
- `npm run build`
`npm run build` currently succeeds with a non-fatal Next.js warning about multiple lockfiles because `C:\Users\Ashmil P\package-lock.json` also exists above this repo.

## Project Layout
- `src/app/layout.tsx`: root layout, fonts, metadata, shell
- `src/app/page.tsx`: home page composition
- `src/app/globals.css`: theme tokens, utilities, animations
- `src/components/`: site sections like hero, navigation, projects, contact
- `src/components/ui/`: reusable primitives such as button, badge, input
- `src/lib/utils.ts`: shared helpers such as `cn()`
- `public/`: static assets

## Imports
- Use absolute `@/` imports for internal modules.
- Prefer external imports first, then a blank line, then internal imports.
- Keep CSS side-effect imports near the top.
- Use `import type` or inline `type` imports where appropriate.
- Match the surrounding file's style when editing existing code.
Examples already present:
- `import type { Metadata } from "next";`
- `import { cn } from "@/lib/utils"`
- `import { clsx, type ClassValue } from "clsx"`

## Formatting
- No Prettier config exists.
- ESLint does not enforce a strict code format here.
- Preserve the local formatting style of the file you touch.
- Do not mass-reformat unrelated files.
- Prefer double quotes unless the surrounding file consistently differs.
- Semicolons are mixed across the repo; keep each file internally consistent.
- Indentation is mixed too; match the file instead of normalizing it.
- Keep long Tailwind class strings and motion props readable.

## TypeScript
- Keep new code fully type-safe.
- Avoid `any` unless there is no practical alternative.
- Prefer explicit prop typing for exported components.
- For DOM wrapper components, use `React.ComponentProps<"tag">`.
- Reuse `VariantProps<typeof ...>` for CVA-backed components.
- Keep types close to the component or module that owns them.
- `Readonly<{ ... }>` is already used in `layout.tsx` and is acceptable where helpful.

## Naming
- Use PascalCase for React components and named interfaces.
- Use camelCase for functions, variables, hooks, and helpers.
- Use descriptive constant names such as `navLinks`, `socialLinks`, `projects`, `buttonVariants`.
- Prefer clear section IDs like `about`, `projects`, and `contact`.
- Avoid unnecessary abbreviations.

## React And Next.js
- Default to Server Components.
- Add `"use client";` only when hooks, browser APIs, Framer Motion, or event-heavy UI require it.
- Keep page composition light in `src/app/page.tsx`; place feature sections in `src/components/`.
- Keep metadata in `src/app/layout.tsx` unless route-specific metadata is needed.
- Use named exports for reusable components.
- Keep default exports for App Router entrypoints like `page.tsx` and `layout.tsx`.
- Do not add memoization helpers by default; React Compiler is enabled.

## Styling
- Prefer Tailwind utilities for component styling.
- Use `cn()` for conditional class merging.
- Use `cva()` for variant-based UI primitives.
- Reuse existing tokens from `globals.css` like `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `from-primary`, and `to-accent`.
- Preserve the current dark, glassmorphism, gradient-heavy visual language.
- Add shared visual utilities to `src/app/globals.css` only when they are truly cross-cutting.
- Do not introduce a second styling system.

## Motion
- Framer Motion is already used throughout section components.
- Match the current animation tone: soft fades, small translates, gentle scale, smooth gradients.
- Keep motion props readable and close to the element they affect.
- Avoid noisy or aggressive motion changes.

## Error Handling And UX
- Handle async flows explicitly with loading and error states.
- Prefer inline feedback over blocking browser dialogs for new UX.
- Guard browser-only APIs inside client components.
- Fail safely when querying the DOM; null checks are already used before scrolling.
- External links should use `target="_blank"` with `rel="noopener noreferrer"`.
- Do not silently swallow errors that affect user actions.

## Accessibility
- Use semantic elements like `main`, `section`, `nav`, `button`, and `a`.
- Keep all interactive elements keyboard-usable.
- Preserve visible focus states already provided by shared primitives.
- Give images meaningful `alt` text.
- Keep heading order logical inside each section.

## Editing Guidance
- Make the smallest correct change.
- Preserve surrounding code patterns and the existing visual language.
- Do not replace alias imports with deep relative paths.
- Do not move files or rename public interfaces without a clear reason.
- Do not add dependencies unless current packages cannot solve the problem.
- If you touch `src/components/ui/*`, keep the shadcn-style API shape intact.
- If you add new commands, configs, or a test tool, update this file in the same change.

## Verification Checklist
Before finishing a code change, run what applies:
- `npm run lint`
- `npm run build`
- `npx eslint "path/to/changed-file.tsx"` for quick file-level validation
If a test framework is added later, extend this checklist with the real test commands.
