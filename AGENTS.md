# Repository Guidelines

## Project Structure & Module Organization
- `src/` houses React components, shared utilities, localization files, datasets, and the `i18n` bootstrapping; keep new features co-located with their domain.
- `public/` stores shipping-ready assets. Keep downloads in `public/pet-item/` and visual media in `public/images/` (skins remain under the existing subfolder).
- Tooling lives in `vite.config.ts`, `tailwind.config.js`, and `tsconfig*.json`; update them alongside build or styling changes to prevent mismatches.

## Build, Test, and Development Commands
- `pnpm install`: Install or update dependencies after lockfile changes.
- `pnpm run dev`: Start the Vite dev server with hot module reload.
- `pnpm run lint`: Run ESLint with strict TypeScript checks; fix or suppress nothing by default.
- `pnpm run build`: Run `tsc` for type safety, then produce the optimized bundle.
- `pnpm run preview`: Serve the production build locally for final QA passes.

## Coding Style & Naming Conventions
- Use TypeScript with ES modules, 2-space indentation, single quotes, and trailing commas where ESLint permits.
- Name React components and file exports with `PascalCase`; keep utility modules and variables in `camelCase`.
- Favor inline Tailwind utility classes, extracting shared bundles into lightweight wrapper components instead of global CSS.

## Testing Guidelines
- Automated tests are not yet provisioned; combine linting with manual verification in `pnpm run preview` until Vitest suites arrive.
- Add future specs under `src/__tests__/ComponentName.test.tsx`, keeping fixtures beside the features they validate.
- Spot-check zh, en, and ja flows plus analytics triggers whenever copy, routing, or downloads change.

## Commit & Pull Request Guidelines
- Follow the Conventional Commit pattern (`feat:`, `fix:`, `chore:`, `docs:`) used in Git history.
- Keep commits surgical, reference related issues with `#ID`, and prefer merge commits over squash-only workflows.
- PRs should include a crisp summary, test evidence (commands run, locales checked), and UI screenshots for visual tweaks.

## Localization & Asset Notes
- Update all `src/locales/*.json` variants in tandem, adding keys alphabetically to stay aligned across languages.
- Compress imagery before storing it in `public/images/`; prefer WebP for large banners and PNG for transparent icons.
- Coordinate analytics updates in `src/utils/analytics.ts` with the reporting team so dashboards remain accurate.
