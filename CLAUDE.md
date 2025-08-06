# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `pnpm install` - Install dependencies
- `pnpm run dev` - Start development server on port 3000 (auto-opens browser)
- `pnpm run build` - Build for production (runs TypeScript check then Vite build)
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint with TypeScript support

### Package Manager
This project uses **pnpm** as the package manager, not npm or yarn.

## Architecture Overview

### Technology Stack
- **React 18** with TypeScript for type safety
- **Vite** as build tool with alias support (`@/` → `./src/`)
- **Tailwind CSS** with custom theme colors and animations
- **Framer Motion** for smooth animations and transitions
- **i18next** for internationalization (Chinese, English, Japanese)

### Project Structure
```
src/
├── components/           # React components
│   ├── Navigation.tsx    # Main navigation with language switching
│   ├── Hero.tsx         # Landing hero section
│   ├── Features.tsx     # Game features showcase
│   ├── CostumeGallery.tsx # Interactive costume showcase
│   ├── Download.tsx     # Game download section
│   ├── Footer.tsx       # Site footer
│   └── FloatingCapy.tsx # Animated floating capybara
├── data/
│   └── costumes.ts      # Game costume data with i18n support
├── i18n/
│   └── index.ts         # i18next configuration
├── locales/             # Translation files (zh/en/ja)
├── utils/
│   ├── languageUtils.ts # Language detection utilities
│   └── version.ts       # Version management
└── assets/              # Static assets (fonts, etc.)
```

### Custom Theme System

The project uses a custom Tailwind theme with game-specific colors:
- **Capy colors**: Orange tones for capybara theming (`capy-500: #ec6d16`)
- **Lotus colors**: Purple tones for lotus/zen theming (`lotus-500: #d946ef`)
- **Pond colors**: Teal tones for water/pond theming (`pond-500: #14b8a6`)

Custom animations available:
- `animate-float` - Floating motion (6s cycle)
- `animate-bounce-slow` - Slow bounce effect
- `animate-wiggle` - Wiggle rotation effect
- `animate-pulse-slow` - Slow pulse effect

### Internationalization

The app supports three languages with automatic detection:
- **Chinese (zh)** - Default language
- **English (en)**
- **Japanese (ja)**

Language detection priority: localStorage → sessionStorage → browser language → default (zh)

### Game Integration

The app includes a global `GameEvent` interface for game engine communication:
```typescript
window.GameEvent.emit('press-pet')                    // Trigger pet interaction
window.GameEvent.emit('change-random-skin', {owned: false})  // Random costume
window.GameEvent.emit('render-skin', {type: 'ownId'})        // Specific costume
```

## Development Guidelines

### Component Patterns
- All components use TypeScript with proper typing
- Framer Motion is used for animations - follow existing patterns
- i18n is handled via `useTranslation()` hook from react-i18next
- Costume data is typed and includes multi-language support

### Styling Conventions
- Use Tailwind utility classes
- Custom colors follow the capy/lotus/pond theme
- Responsive design with mobile-first approach
- Custom fonts: Different font families for each language locale

### Asset Management
- Game assets are located in `public/capy_skins/` directory
- Costume images follow structured naming: `qf_hz{category}_{id}_{name}.png`
- All asset paths are relative from public directory

## Game Context

This is the official website for "敲好运" (BongBongCapy), a casual dress-up idle game featuring capybaras. The site showcases:
- Game features and mechanics
- Costume collection system with 6 categories
- Download links for different platforms
- Multi-language support for global audience

The website serves as both marketing material and a companion to the actual game, with potential for future game integration features.