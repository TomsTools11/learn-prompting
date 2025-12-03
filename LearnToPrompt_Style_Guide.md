# LearnToPrompt.us Style Guide

> **Version:** 1.0  
> **Last Updated:** December 3, 2025  
> **Status:** Active

---

## Quick Reference

```
Primary Colors:
  --dark-navy:    #021A2E  │  rgb(2, 26, 46)
  --navy:         #014379  │  rgb(1, 67, 121)
  --bright-blue:  #0D91FD  │  rgb(13, 145, 253)
  --light-blue:   #5DB5FE  │  rgb(93, 181, 254)
  --pale-blue:    #C2E3FE  │  rgb(194, 227, 254)

Fonts:
  Headings:  Inter (600-800)
  Body:      Inter (400-500)
  Code:      JetBrains Mono (400-700)

Breakpoints:
  Mobile:   < 768px
  Tablet:   768px - 1279px
  Desktop:  ≥ 1280px
```

---

## 1.0 Introduction

### Purpose

This style guide defines the visual language and component specifications for the LearnToPrompt.us website redesign. It ensures consistency across all pages, supports both dark and light themes, and incorporates Claude Code terminal aesthetics.

### Target Audience

- Frontend developers implementing the design
- Designers extending the component library
- Content creators maintaining brand consistency

### Design Inspiration

The redesign draws from **SkillsMP.com's** developer-focused aesthetic:

- Terminal-style UI elements with command prompts
- Code-like syntax formatting for metadata
- IDE-inspired layouts and interactions
- Claude Code command interface patterns

---

## 1.1 Mission & Vision

### Mission

To democratize AI literacy by providing comprehensive, accessible prompt engineering education that empowers developers, researchers, and business professionals to effectively communicate with Large Language Models.

### Vision

To become the premier destination for prompt engineering education, recognized for practical, hands-on learning experiences.

### Brand Positioning

| Attribute | Expression |
|-----------|------------|
| Technical | Developer-friendly, code-centric UI |
| Educational | Clear hierarchy, progressive disclosure |
| Modern | Contemporary aesthetics, smooth interactions |
| Accessible | WCAG AA compliant, inclusive design |

---

## 1.2 Design Principles

### 1. Clarity Through Structure

Information is organized with clear visual hierarchy. Terminal-style formatting creates scannable, digestible content native to developers.

### 2. Technical Authenticity

The design embraces Claude Code aesthetics—command prompts, syntax highlighting, and IDE-inspired layouts that resonate with technical users.

### 3. Accessibility First

Both dark and light modes maintain WCAG AA contrast ratios. All interactive elements are keyboard-navigable and screen reader compatible.

### 4. Progressive Disclosure

Content unfolds naturally from overview to detail. Collapsible sections prevent cognitive overload while enabling deep exploration.

### 5. Responsive Excellence

Every component is designed mobile-first, scaling gracefully across devices without sacrificing functionality.

### 6. Performance Minded

Lightweight, optimized assets ensure fast load times for learners on varying connection speeds.

---

## 2.0 Brand Identity

## 2.1 Color Palette

### Primary Colors (Dark Theme)

| Role | Name | HEX | RGB | CSS Variable |
|------|------|-----|-----|--------------|
| Background | Deep Navy | `#021A2E` | 2, 26, 46 | `--color-bg-primary` |
| Surface | Navy | `#014379` | 1, 67, 121 | `--color-bg-secondary` |
| Primary Action | Bright Blue | `#0D91FD` | 13, 145, 253 | `--color-accent` |
| Secondary Action | Light Blue | `#5DB5FE` | 93, 181, 254 | `--color-accent-hover` |
| Highlight | Pale Blue | `#C2E3FE` | 194, 227, 254 | `--color-highlight` |

### Light Theme Colors

| Role | Name | HEX | RGB | CSS Variable |
|------|------|-----|-----|--------------|
| Background | White | `#FFFFFF` | 255, 255, 255 | `--color-bg-primary` |
| Surface | Cool Gray | `#F5F7FA` | 245, 247, 250 | `--color-bg-secondary` |
| Text Primary | Dark Gray | `#1F2937` | 31, 41, 55 | `--color-text-primary` |
| Text Secondary | Medium Gray | `#6B7280` | 107, 114, 128 | `--color-text-secondary` |
| Border | Light Gray | `#E5E7EB` | 229, 231, 235 | `--color-border` |

### Semantic Colors

| Role | HEX | Usage |
|------|-----|-------|
| Success | `#10B981` | Completion, positive states |
| Warning | `#F59E0B` | Cautions, important notices |
| Error | `#EF4444` | Errors, destructive actions |
| Info | `#0D91FD` | Tips, guidance |

### Contrast Ratios (WCAG Compliance)

```
✓ #FFFFFF on #021A2E  →  18.2:1  (AAA)
✓ #C2E3FE on #021A2E  →  12.8:1  (AAA)
✓ #0D91FD on #021A2E  →   6.2:1  (AA)
✓ #1F2937 on #FFFFFF  →  15.8:1  (AAA)
✓ #014379 on #FFFFFF  →   8.6:1  (AAA)
⚠ #0D91FD on #FFFFFF  →   3.1:1  (AA Large Text Only)
```

---

## 2.2 Typography

### Font Stack

```css
/* Headings & Display */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Body Text */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Code & Terminal */
font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
```

### Type Scale (1.25 Ratio)

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| Hero Title | Inter | 800 | 56px | 1.1 | -0.025em |
| H1 | Inter | 700 | 40px | 1.2 | -0.02em |
| H2 | Inter | 700 | 32px | 1.25 | -0.015em |
| H3 | Inter | 600 | 24px | 1.3 | -0.01em |
| H4 | Inter | 600 | 20px | 1.4 | 0 |
| H5 | Inter | 600 | 16px | 1.4 | 0 |
| Body Large | Inter | 400 | 18px | 1.7 | 0 |
| Body | Inter | 400 | 16px | 1.6 | 0 |
| Body Small | Inter | 400 | 14px | 1.5 | 0 |
| Caption | Inter | 500 | 12px | 1.4 | 0.02em |
| Code | JetBrains Mono | 400 | 14px | 1.6 | 0 |
| Terminal Prompt | JetBrains Mono | 500 | 15px | 1.5 | 0 |

### Mobile Adjustments

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero | 56px | 36px |
| H1 | 40px | 28px |
| H2 | 32px | 24px |
| H3 | 24px | 20px |
| Body | 16px | 16px |

---

## 2.3 Iconography

### Icon Style

| Property | Value |
|----------|-------|
| Style | Outlined |
| Stroke Weight | 1.5px |
| Grid | 24×24px with 2px padding |
| Corner Radius | 2px |
| Library | Lucide Icons |

### Icon Sizes

| Context | Size |
|---------|------|
| Inline (text) | 16px |
| Buttons | 20px |
| Navigation | 24px |
| Features | 32px |

### Claude Code Terminal Symbols

| Symbol | Name | Unicode | Usage |
|--------|------|---------|-------|
| `>` | Prompt Chevron | U+003E | Command prompt prefix |
| `$` | Dollar Sign | U+0024 | Shell prompt indicator |
| `//` | Comment | — | Single-line comments |
| `/**/` | Block Comment | — | Multi-line comments |
| `▶` | Play Triangle | U+25B6 | Toggle/expandable sections |
| `⏎` | Return | U+23CE | Enter key indicator |
| `⇧` | Shift | U+21E7 | Shift key modifier |
| `⌘` | Command | U+2318 | Mac command key |
| `│` | Vertical Line | U+2502 | Code borders, tree structure |
| `├` | Tree Branch | U+251C | File tree structure |
| `└` | Tree End | U+2514 | Final tree item |

### Syntax Highlighting

| Token Type | Dark Mode | Light Mode |
|------------|-----------|------------|
| Keywords | `#0D91FD` | `#014379` |
| Strings | `#10B981` | `#047857` |
| Comments | `#6B7280` | `#9CA3AF` |
| Numbers | `#F59E0B` | `#D97706` |
| Properties | `#5DB5FE` | `#0D91FD` |

---

## 2.4 Imagery

### Photography Guidelines

- **Subject:** Developers at work, collaborative environments
- **Style:** Natural lighting, candid, authentic
- **Treatment:** Subtle blue color grading
- **Avoid:** Stock clichés, staged scenes, outdated tech

### Illustration Style

- **Style:** Flat design with subtle gradients
- **Elements:** Abstract AI, neural networks, code structures
- **Animation:** Typing cursors, loading states, progress
- **Consistency:** 2px stroke, rounded corners

---

## 3.0 UI Components

## 3.1 Buttons

### Button Variants

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | `#0D91FD` | `#FFFFFF` | none |
| Primary Hover | `#5DB5FE` | `#FFFFFF` | none |
| Secondary | transparent | `#0D91FD` | 1px `#0D91FD` |
| Secondary Hover | `#0D91FD` 10% | `#0D91FD` | 1px `#0D91FD` |
| Ghost | transparent | `#6B7280` | none |
| Disabled | `#E5E7EB` | `#9CA3AF` | none |

### Button Sizes

| Size | Height | Padding | Font Size | Radius |
|------|--------|---------|-----------|--------|
| Small | 32px | 12px 16px | 13px | 6px |
| Medium | 40px | 10px 20px | 14px | 8px |
| Large | 48px | 14px 28px | 16px | 10px |

### Button CSS

```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.btn-primary:hover {
  background: var(--color-accent-hover);
}

.btn-primary:active {
  transform: scale(0.98);
}
```

---

## 3.2 Form Inputs

### Input States

| State | Border | Background | Text |
|-------|--------|------------|------|
| Default | 1px `#E5E7EB` | `#FFFFFF` | `#1F2937` |
| Default (Dark) | 1px `#374151` | `#021A2E` | `#E5E7EB` |
| Focus | 2px `#0D91FD` | `#FFFFFF` | `#1F2937` |
| Focus (Dark) | 2px `#0D91FD` | `#014379` 20% | `#E5E7EB` |
| Error | 2px `#EF4444` | `#FEF2F2` | `#1F2937` |
| Disabled | 1px `#E5E7EB` | `#F3F4F6` | `#9CA3AF` |

### Input Specifications

| Property | Value |
|----------|-------|
| Height | 44px |
| Padding | 12px horizontal, 10px vertical |
| Border Radius | 8px |
| Font Size | 16px (prevents iOS zoom) |
| Label Font | Inter 14px Medium |
| Label Margin | 8px bottom |
| Helper Text | Inter 12px, `#6B7280` |
| Error Text | Inter 12px, `#EF4444` |

### Input CSS

```css
.input {
  height: 44px;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(13, 145, 253, 0.1);
}
```

---

## 3.3 Cards

### Card Variants

| Variant | Background | Border | Shadow |
|---------|------------|--------|--------|
| Default (Light) | `#FFFFFF` | 1px `#E5E7EB` | 0 1px 3px rgba(0,0,0,0.1) |
| Default (Dark) | `#014379` 30% | 1px `#014379` | 0 4px 6px rgba(0,0,0,0.3) |
| Interactive Hover | — | — | 0 4px 12px rgba(0,0,0,0.15) |
| Terminal Style | `#021A2E` | 1px `#014379` | inset glow `#0D91FD` 20% |
| Feature | gradient | none | 0 10px 40px rgba(0,0,0,0.2) |

### Card Specifications

| Property | Value |
|----------|-------|
| Border Radius | 12px outer, 8px inner |
| Padding | 24px desktop, 16px mobile |
| Hover Transform | translateY(-4px) |
| Transition | transform 0.2s ease, box-shadow 0.2s ease |

### Card CSS

```css
.card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card--interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Terminal-style card */
.card--terminal {
  background: #021A2E;
  border: 1px solid #014379;
  font-family: 'JetBrains Mono', monospace;
  box-shadow: inset 0 0 20px rgba(13, 145, 253, 0.1);
}
```

---

## 3.4 Dark/Light Mode

### Theme Toggle

| Property | Specification |
|----------|---------------|
| Position | Top nav, right-aligned |
| Icons | ☀️ (light) / 🌙 (dark) |
| Size | 32×32px clickable area |
| Animation | 0.3s rotation transition |
| Default | Respect `prefers-color-scheme`, fallback dark |

### CSS Custom Properties (Tokens)

```css
:root {
  /* Dark theme (default) */
  --color-bg-primary: #021A2E;
  --color-bg-secondary: #014379;
  --color-bg-elevated: rgba(1, 67, 121, 0.5);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #C2E3FE;
  --color-text-muted: #6B7280;
  --color-border: #014379;
  --color-accent: #0D91FD;
  --color-accent-hover: #5DB5FE;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.5);
}

[data-theme="light"] {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F7FA;
  --color-bg-elevated: #FFFFFF;
  --color-text-primary: #1F2937;
  --color-text-secondary: #6B7280;
  --color-text-muted: #9CA3AF;
  --color-border: #E5E7EB;
  --color-accent: #0D91FD;
  --color-accent-hover: #014379;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.2);
}
```

### Theme Toggle Implementation

```javascript
// Theme toggle logic
const toggle = document.querySelector('[data-theme-toggle]');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Initialize from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDark.matches ? 'dark' : 'light');
}

toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});
```

---

## 4.0 Layout & Grid

### Grid System

| Property | Desktop (1280px+) | Tablet (768-1279px) | Mobile (<768px) |
|----------|-------------------|---------------------|-----------------|
| Columns | 12 | 8 | 4 |
| Gutter | 32px | 24px | 16px |
| Margin | auto (centered) | 32px | 16px |
| Max Width | 1200px | 100% | 100% |

### Spacing Scale (8px Base)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing, icon padding |
| `--space-2` | 8px | Related elements, button gaps |
| `--space-3` | 16px | Default component spacing |
| `--space-4` | 24px | Card padding, form groups |
| `--space-5` | 32px | Section padding (mobile) |
| `--space-6` | 48px | Section padding (tablet) |
| `--space-7` | 64px | Section padding (desktop) |
| `--space-8` | 96px | Hero sections, major breaks |

### Breakpoints

| Name | Min Width | Target |
|------|-----------|--------|
| xs | 0px | Small phones |
| sm | 640px | Large phones |
| md | 768px | Tablets (portrait) |
| lg | 1024px | Tablets (landscape) |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large displays |

### Grid CSS

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
}

.grid {
  display: grid;
  gap: var(--space-4);
}

/* 12-column grid */
.grid-cols-12 {
  grid-template-columns: repeat(12, 1fr);
}

/* Responsive columns */
@media (max-width: 1279px) {
  .grid-cols-12 {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (max-width: 767px) {
  .grid-cols-12 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 5.0 Claude Code UI Elements

### 5.1 Terminal Prompt Block

Used for displaying commands, prompts, and interactive examples.

| Property | Value |
|----------|-------|
| Background | `#021A2E` |
| Border | 1px solid `#014379` |
| Border Radius | 8px |
| Font | JetBrains Mono 14px |
| Line Height | 1.6 |
| Padding | 16px 20px |
| Prompt Character | `>` in `#0D91FD` |
| Output Prefix | `$` in `#5DB5FE` |
| Comment Color | `#6B7280` |

### Terminal Block CSS

```css
.terminal {
  background: #021A2E;
  border: 1px solid #014379;
  border-radius: 8px;
  padding: 16px 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  overflow-x: auto;
}

.terminal__prompt {
  color: #0D91FD;
}

.terminal__command {
  color: #FFFFFF;
}

.terminal__output {
  color: #5DB5FE;
}

.terminal__comment {
  color: #6B7280;
  font-style: italic;
}
```

### Terminal Example

```
> claude code

$ Discover open-source Claude skills from GitHub

// Search with AI semantics or keywords
// Browse by category, sort by popularity

$ cd modules && ls -la

module-1/
├── name: "Foundations of LLMs"
├── lessons: 6
└── status: ready

$ start --module 1
```

---

### 5.2 Module Cards (SkillsMP Style)

Category/module cards styled as code blocks with syntax highlighting.

```
module-1/
├── module
├── "name": "Foundations of LLMs"
├── "lessons": 6
└── $ cd module-1 && start
```

### Module Card Structure

| Element | Specification |
|---------|---------------|
| Header | Folder icon + module name (monospace) |
| Properties | JSON-style key-value pairs |
| Footer | Terminal command (clickable) |
| Hover | Subtle glow (`#0D91FD` at 20% opacity) |
| Border | Left accent bar (4px) in category color |

### Module Card CSS

```css
.module-card {
  background: #021A2E;
  border: 1px solid #014379;
  border-left: 4px solid #0D91FD;
  border-radius: 8px;
  padding: 20px;
  font-family: 'JetBrains Mono', monospace;
  transition: box-shadow 0.2s ease;
}

.module-card:hover {
  box-shadow: 0 0 20px rgba(13, 145, 253, 0.2);
}

.module-card__name {
  color: #FFFFFF;
  font-weight: 500;
}

.module-card__prop-key {
  color: #5DB5FE;
}

.module-card__prop-value {
  color: #10B981;
}

.module-card__command {
  color: #6B7280;
  cursor: pointer;
}

.module-card__command:hover {
  color: #0D91FD;
}
```

---

### 5.3 Progress Indicators

| Status | Symbol | Color | Terminal Style |
|--------|--------|-------|----------------|
| Not Started | ○ | `#6B7280` | `[ ] pending` |
| In Progress | ◐ | `#F59E0B` | `[~] loading...` |
| Completed | ● | `#10B981` | `[✓] complete` |
| Locked | 🔒 | `#374151` | `[x] locked` |

---

### 5.4 Navigation Bar

| Element | Specification |
|---------|---------------|
| Height | 64px desktop, 56px mobile |
| Background (Dark) | `#021A2E` 80% opacity, backdrop-blur |
| Background (Light) | `#FFFFFF` 90% opacity, backdrop-blur |
| Logo | Terminal prompt style: `> LearnToPrompt` |
| Nav Items | Monospace, hover underline animation |
| Theme Toggle | Sun/Moon icon, 32px, rotates on click |
| Mobile Menu | Slide-in drawer from right |

### Navigation CSS

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: rgba(2, 26, 46, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

[data-theme="light"] .navbar {
  background: rgba(255, 255, 255, 0.9);
}

.navbar__logo {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  color: var(--color-text-primary);
}

.navbar__logo::before {
  content: '> ';
  color: var(--color-accent);
}

.navbar__link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--color-text-secondary);
  text-decoration: none;
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width 0.2s ease;
}

.navbar__link:hover::after {
  width: 100%;
}
```

---

## 6.0 Accessibility

### 6.1 Color & Contrast

- All text meets **4.5:1** contrast ratio
- Interactive elements maintain **3:1** contrast in all states
- Color is never the sole indicator of meaning
- Focus states have visible **2px outline** in `#0D91FD`
- Both themes tested independently for WCAG AA

### 6.2 Keyboard Navigation

- All interactive elements reachable via **Tab**
- Logical tab order following visual layout
- **Skip-to-main-content** link as first focusable element
- **Escape** closes modals/dropdowns
- **Arrow keys** navigate within menus
- **Enter/Space** activate buttons and links

### 6.3 Screen Reader Support

- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
- Proper heading hierarchy (single H1 per page)
- ARIA labels for icons and non-text elements
- Live regions for dynamic content
- Descriptive link text (no "click here")
- Alt text for all meaningful images

### 6.4 Motion & Animation

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus Styles

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Remove default outline, rely on focus-visible */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## 7.0 Complete CSS Variables

```css
:root {
  /* === COLORS === */
  
  /* Primary Palette */
  --color-dark-navy: #021A2E;
  --color-navy: #014379;
  --color-bright-blue: #0D91FD;
  --color-light-blue: #5DB5FE;
  --color-pale-blue: #C2E3FE;
  
  /* Neutrals */
  --color-white: #FFFFFF;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F5F7FA;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;
  
  /* Semantic */
  --color-success: #10B981;
  --color-success-light: #D1FAE5;
  --color-warning: #F59E0B;
  --color-warning-light: #FEF3C7;
  --color-error: #EF4444;
  --color-error-light: #FEE2E2;
  --color-info: #0D91FD;
  --color-info-light: #DBEAFE;
  
  /* === THEME TOKENS (Dark Default) === */
  --color-bg-primary: #021A2E;
  --color-bg-secondary: #014379;
  --color-bg-elevated: rgba(1, 67, 121, 0.5);
  --color-bg-overlay: rgba(2, 26, 46, 0.8);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #C2E3FE;
  --color-text-muted: #6B7280;
  --color-border: #014379;
  --color-border-subtle: rgba(1, 67, 121, 0.5);
  --color-accent: #0D91FD;
  --color-accent-hover: #5DB5FE;
  --color-accent-muted: rgba(13, 145, 253, 0.1);
  
  /* === TYPOGRAPHY === */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 2rem;      /* 32px */
  --text-4xl: 2.5rem;    /* 40px */
  --text-5xl: 3.5rem;    /* 56px */
  
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.75;
  
  /* === SPACING === */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 1rem;      /* 16px */
  --space-4: 1.5rem;    /* 24px */
  --space-5: 2rem;      /* 32px */
  --space-6: 3rem;      /* 48px */
  --space-7: 4rem;      /* 64px */
  --space-8: 6rem;      /* 96px */
  
  /* === BORDERS === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* === SHADOWS === */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 20px rgba(13, 145, 253, 0.2);
  
  /* === TRANSITIONS === */
  --transition-fast: 0.1s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
  
  /* === Z-INDEX === */
  --z-dropdown: 50;
  --z-sticky: 60;
  --z-fixed: 70;
  --z-modal-backdrop: 80;
  --z-modal: 90;
  --z-tooltip: 100;
}

/* Light Theme Overrides */
[data-theme="light"] {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F7FA;
  --color-bg-elevated: #FFFFFF;
  --color-bg-overlay: rgba(255, 255, 255, 0.9);
  --color-text-primary: #1F2937;
  --color-text-secondary: #6B7280;
  --color-text-muted: #9CA3AF;
  --color-border: #E5E7EB;
  --color-border-subtle: #F3F4F6;
  --color-accent: #0D91FD;
  --color-accent-hover: #014379;
  --color-accent-muted: rgba(13, 145, 253, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.2);
}
```

---

## 8.0 Resources

### Design Files

| Resource | Location |
|----------|----------|
| Figma | [Link when created] |
| Component Library | [Storybook URL] |
| Icons | [Lucide Icons](https://lucide.dev) |
| Fonts | [Google Fonts](https://fonts.google.com) - Inter, JetBrains Mono |

### Code Repository

| Resource | Path |
|----------|------|
| CSS Tokens | `/src/styles/tokens.css` |
| Components | `/src/components/` |
| Tailwind Config | `tailwind.config.js` |

### Reference

| Resource | URL |
|----------|-----|
| Inspiration | [SkillsMP.com](https://skillsmp.com) |
| Color Generator | [Coolors.co](https://coolors.co) |
| Type Scale | [Type-scale.com](https://type-scale.com) |
| A11y Testing | WebAIM WAVE, axe DevTools |

---

## 9.0 Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-12-03 | Initial release: color system, typography, components, dark/light mode, Claude Code elements, accessibility |

---

**End of Style Guide**

```
> style-guide --status
$ complete ✓
```
