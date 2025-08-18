# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm install` - Install project dependencies
- `pnpm run dev` - Start development server on localhost:3000 with auto-open browser
- `pnpm run build` - Build production version (TypeScript compilation + Vite build)
- `pnpm run preview` - Preview production build locally
- `pnpm run lint` - Run ESLint with TypeScript rules

### Testing and Quality
Run `pnpm run lint` before committing changes to ensure code quality.

## Project Architecture

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with custom theme
- **Animation**: Framer Motion
- **Internationalization**: react-i18next with browser language detection
- **Icons**: Lucide React and Tabler Icons
- **Package Manager**: pnpm

### Key Architecture Patterns

#### Component Structure
The application follows a modular component architecture:
- `src/App.tsx` - Main application with page layout and language initialization
- `src/components/` - Reusable React components for different sections
- Components are organized by functionality (Navigation, Hero, Features, etc.)

#### Internationalization System
- Supports Chinese (zh), English (en), and Japanese (ja)
- Auto-detects browser language with fallback to Chinese
- Language files stored in `src/locales/`
- Uses `getRecommendedLanguage()` utility for language selection logic
- Language preference cached in localStorage

#### Styling System
- Custom Tailwind theme with game-specific color palette:
  - **capy**: Capybara warm orange tones (#ff6b2b family)
  - **lotus**: Lotus pink-purple tones (#ec4aff family) 
  - **pond**: Pond green-teal tones (#1fc2e5 family)
- Custom font families for different languages (AlibabaHealthFont2.0CN for CJK)
- Custom animations: float, bounce-slow, wiggle, pulse-slow

#### Game Integration
- Global `window.GameEvent` interface for game engine communication
- Supports game events: 'press-pet', 'change-random-skin', 'render-skin'
- `ClickEffect` component for interactive feedback

### File Organization
```
src/
├── components/           # React components by feature
├── i18n/                # Internationalization setup
├── locales/             # Translation files (zh.json, en.json, ja.json)
├── utils/               # Utility functions (language detection, version)
├── data/                # Static data (costumes configuration)
└── assets/              # Static assets (fonts, images)
```

### Configuration Files
- `vite.config.ts` - Vite configuration with '@' alias for src/
- `tailwind.config.js` - Custom Tailwind theme and animations
- `tsconfig.json` - TypeScript with strict mode and path mapping
- Server runs on port 3000 with auto-open browser

### Public Assets Structure
The `public/` directory contains extensive game assets:
- `capy_skins/` - Character skin previews and assets
- `pet-item/` - Game item assets with Cocos2d integration
- `images/` - Marketing and promotional images
- `versions/` - Application version downloads

This is a marketing website for "敲好运 BongBongCapy", a cute capybara dress-up idle game. When making changes, maintain the cute, healing aesthetic and ensure proper internationalization support.