# Mortgage React - Interactive Mortgage Simulator

## Overview

A modern, interactive mortgage calculator built with **React** and **TypeScript**. This application enables users to calculate detailed mortgage payments estimates, explore different scenarios, and maintain a calculation history.

---

## Key Features

✅ **Real-time Mortgage Calculation** - Instant results as users adjust parameters  
✅ **Fixed & Variable Rate Support** - Toggle between rate types  
✅ **Calculation History** - All simulations automatically saved to localStorage  
✅ **Scenario Comparison** - Select multiple scenarios for side-by-side analysis  
✅ **Dark Mode** - Automatic theme switching based on system preferences  
✅ **Responsive Design** - Fully functional on desktop, tablet, and mobile

---

## React + TypeScript + Vite

### Project Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`

---

### State Management with Context API

This project uses React's native **Context API** combined with a custom hook (`useData`) to manage global state in a clean, centralized, and scalable way:

- **Decoupled Business Logic**: Encapsulates complex logic and side-effects (like mortgage calculations and `localStorage` persistence) within the Context Provider, keeping components highly reusable and strictly focused on UI.
- **No Prop Drilling**: Provides seamless data access to deeply nested sibling components (like form fields, result cards, and the history table) without manually passing props down the tree.

---

### Mortgage Calculation Formula

The **monthly payment** `M` is calculated using the following standard amortization formula:

```
M = P × [r(1 + r)^n / ((1 + r)^n - 1)]
```

Where:

- `M` = **Monthly payment**
- `P` = **Principal amount**
- `r` = **Monthly interest rate** (annual rate / 12 / 100)
- `n` = **Total number of payments** (duration × frequency)

From this, the simulator derives:

- **Total amount paid** = `M` × `n`
- **Total interest** = (`M` × `n`) - `P`

---

## Styling: Tailwind CSS with CSS Variables

### Tailwind Integration

The project combines Tailwind CSS 4 with CSS custom properties for a flexible theming system. CSS variables define colors (text, backgrounds, borders, accents) that respect the user's system color scheme preference (light/dark mode).

### Custom CSS Variables

The application implements a **theming system** using CSS custom properties defined in `src/styles/style.css`. This approach provides both light and dark mode support with semantic color naming:

**Light Mode:**

- `--text`: #404146; (regular text)
- `--text-h`: #111827; (headings)
- `--bg`: #ffffff; (background)
- `--border`: #F0F1F5; (borders)
- `--code-bg`: #ffffff; (code blocks)

- `--accent`: hsl(230, 92%, 52%); (primary accent - blue)
- `--accent-bg`: hsla(230, 92%, 52%, 1); (accent background)
- `--accent-border`: hsl(230, 92%, 52%); (accent borders)

- `--danger`: hsl(353, 92%, 61%); (primary danger - red)
- `--danger-bg`: hsla(353, 92%, 61%, 1); (danger background)
- `--danger-border`: hsl(353, 92%, 61%); (danger borders)
- `--warning`: hsl(40, 92%, 52%); (primary warning - yellow)
- `--warning-bg`: hsla(40, 92%, 52%, 1); (warning background)
- `--warning-border`: hsl(40, 92%, 52%); (warning borders)
- `--success`: hsl(154, 92%, 32%); (primary success - green)
- `--success-bg`: hsla(154, 92%, 32%, 1); (success background)
- `--success-border`: hsl(154, 92%, 32%); (success borders)

- `--shadow`: Optimized shadow stack

**Dark Mode:**

- Automatically switches via CSS media query `@media (prefers-color-scheme: dark)`
- Adjusted colors for better contrast and readability

- `--text`: #a0a1a6; (regular text)
- `--text-h`: #e0e1e6; (headings)
- `--bg`: #0A0B10; (background)
- `--border`: #27282d; (borders)
- `--code-bg`: #16171B; (code blocks)

- `--accent`: hsl(226, 91%, 62%); (primary accent - blue)
- `--accent-bg`: hsla(226, 91%, 62%, 0.1); (accent background)
- `--accent-border`: hsl(226, 91%, 62%); (accent borders)

- `--danger`: hsl(353, 92%, 62%); (primary danger - blue)
- `--danger-bg`: hsla(353, 92%, 62%, 0.1); (danger background)
- `--danger-border`: hsl(353, 92%, 62%); (danger borders)

- `--warning`: hsl(40, 92%, 62%); (primary warning - blue)
- `--warning-bg`: hsla(40, 92%, 62%, 0.1); (warning background)(accent background)
- `--warning-border`: hsl(40, 92%, 62%); (warning borders)

- `--success`: hsl(154, 92%, 62%); (primary success - blue)
- `--success-bg`: hsla(154, 92%, 62%, 0.1); (success background)
- `--success-border`: hsl(154, 92%, 62%); (success borders)

- `--shadow`: Optimized shadow stack

This hybrid approach provides:

- **Flexibility**: CSS variables enable runtime theme switching
- **Consistency**: Tailwind utilities ensure responsive design
- **Performance**: Optimized utility-first CSS with zero runtime overhead
- **Accessibility**: Respects user's system color scheme preference

---

## Development Notes

- **LocalStorage integration** ensures data persistence across browser sessions
  EOF
