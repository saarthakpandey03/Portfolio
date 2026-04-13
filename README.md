# Saarthak Pandey — Portfolio (React + Tailwind)

**Stack:** React 18 · Vite · Tailwind CSS v3 · CSS custom properties

---

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → production  dist/
npm run preview  # → preview build locally
```

---

## Project Structure

```
src/
├── context/
│   └── ThemeContext.jsx        ← global theme state + localStorage sync
│
├── hooks/
│   ├── useThemeToggle.js       ← thin wrapper: { theme, toggleTheme }
│   ├── useScrollAnimation.js   ← IntersectionObserver for .rv elements
│   └── useCounter.js           ← animated count-up on scroll into view
│
├── utils/
│   └── constants.js            ← ALL portfolio content (edit here only)
│
├── layout/
│   └── MainLayout.jsx          ← page order, bg layers, scroll hook
│
├── components/
│   ├── common/
│   │   ├── Background.jsx      ← <Particles /> + <Blobs />
│   │   ├── background.css
│   │   ├── SectionHeader.jsx   ← shared label/title/sub heading
│   │   ├── sectionHeader.css
│   │   ├── Footer.jsx
│   │   └── footer.css
│   │
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── navbar.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── hero.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── about.css
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   ├── SkillBar.jsx        ← animated bar sub-component
│   │   └── skills.css
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx     ← single project card
│   │   └── projects.css
│   ├── Achievements/
│   │   ├── Achievements.jsx
│   │   └── achievements.css
│   └── Connect/
│       ├── Connect.jsx
│       └── connect.css
│
├── App.jsx                     ← ThemeProvider + MainLayout only
├── main.jsx                    ← anti-flicker script + React root
├── globals.css                 ← CSS vars, keyframes, shared utilities
└── index.css                   ← Tailwind directives + .wrap / .section-pad
```

---

## Dark / Light Mode — How It Works

| Step | What happens |
|---|---|
| `main.jsx` IIFE | Reads `localStorage('sp-theme')`, falls back to `prefers-color-scheme`, sets `<html data-theme="…">` **before** React renders — zero flicker |
| `ThemeContext.jsx` | Manages React state; on every change writes to `localStorage` AND calls `document.documentElement.setAttribute('data-theme', theme)` |
| `globals.css` | Defines all CSS variables under `:root` (dark) and `[data-theme="light"]` overrides — every element inherits them automatically |
| `Navbar.jsx` | Calls `useThemeToggle()` → `toggleTheme()`; updates propagate instantly to the whole document |

**Bug fixes applied:**
- ✅ Theme persists across refresh
- ✅ Entire document (background, cards, text) responds — not just the navbar
- ✅ No flicker on load (IIFE runs before paint)
- ✅ System colour scheme detected as default

---

## Customise Content

All portfolio data lives in **`src/utils/constants.js`**:

| Export | What it controls |
|---|---|
| `TYPEWRITER_WORDS` | Hero typewriter phrases |
| `NAV_LINKS` | Navigation items |
| `SKILL_CATEGORIES` | Tech badge rows |
| `SKILL_BARS` | Proficiency bar data |
| `FOCUS_AREAS` | Focus cards in Skills |
| `LEARNING_BADGES` | "Currently Learning" chips |
| `PROJECTS` | Project cards (title, desc, pills, feats…) |
| `ACHIEVEMENTS` | Counter cards |
| `SOCIAL_LINKS` | Connect section cards |
| `QUICK_LINKS` | About section quick links |
| `RESUME_TEXT` | Downloaded CV content |

---

## Deploy

```bash
npm run build
# Upload  dist/  to Vercel, Netlify, or any static host
```
