import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Primary Palette (Navy/Blue)
        "dark-navy": "var(--color-dark-navy)",
        navy: "var(--color-navy)",
        "bright-blue": "var(--color-bright-blue)",
        "light-blue": "var(--color-light-blue)",
        "pale-blue": "var(--color-pale-blue)",

        // Neutrals
        "gray-50": "var(--color-gray-50)",
        "gray-100": "var(--color-gray-100)",
        "gray-200": "var(--color-gray-200)",
        "gray-300": "var(--color-gray-300)",
        "gray-400": "var(--color-gray-400)",
        "gray-500": "var(--color-gray-500)",
        "gray-600": "var(--color-gray-600)",
        "gray-700": "var(--color-gray-700)",
        "gray-800": "var(--color-gray-800)",
        "gray-900": "var(--color-gray-900)",

        // Semantic Colors
        success: "var(--color-success)",
        "success-light": "var(--color-success-light)",
        warning: "var(--color-warning)",
        "warning-light": "var(--color-warning-light)",
        error: "var(--color-error)",
        "error-light": "var(--color-error-light)",
        info: "var(--color-info)",
        "info-light": "var(--color-info-light)",

        // Theme Tokens (map to CSS variables)
        background: "var(--color-bg-primary)",
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "bg-elevated": "var(--color-bg-elevated)",
        "bg-overlay": "var(--color-bg-overlay)",
        foreground: "var(--color-text-primary)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        "border-subtle": "var(--color-border-subtle)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-muted": "var(--color-accent-muted)",

        // shadcn/ui compatibility
        primary: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-white)",
        },
        secondary: {
          DEFAULT: "var(--color-bg-secondary)",
          foreground: "var(--color-text-primary)",
        },
        destructive: {
          DEFAULT: "var(--color-error)",
          foreground: "var(--color-white)",
        },
        muted: {
          DEFAULT: "var(--color-bg-secondary)",
          foreground: "var(--color-text-muted)",
        },
        popover: {
          DEFAULT: "var(--color-bg-elevated)",
          foreground: "var(--color-text-primary)",
        },
        card: {
          DEFAULT: "var(--color-bg-secondary)",
          foreground: "var(--color-text-primary)",
        },
        input: "var(--color-border)",
        ring: "var(--color-accent)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        heading: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
        base: ["1rem", { lineHeight: "1.6" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.7" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.4" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1.3" }], // 24px
        "3xl": ["2rem", { lineHeight: "1.25" }], // 32px
        "4xl": ["2.5rem", { lineHeight: "1.2" }], // 40px
        "5xl": ["3.5rem", { lineHeight: "1.1" }], // 56px
      },
      spacing: {
        "space-1": "0.25rem", // 4px
        "space-2": "0.5rem", // 8px
        "space-3": "1rem", // 16px
        "space-4": "1.5rem", // 24px
        "space-5": "2rem", // 32px
        "space-6": "3rem", // 48px
        "space-7": "4rem", // 64px
        "space-8": "6rem", // 96px
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
        "card-hover": "0 12px 24px rgba(0, 0, 0, 0.15)",
        terminal: "inset 0 0 20px rgba(13, 145, 253, 0.1)",
      },
      transitionDuration: {
        fast: "100ms",
        base: "200ms",
        slow: "300ms",
      },
      zIndex: {
        dropdown: "50",
        sticky: "60",
        fixed: "70",
        "modal-backdrop": "80",
        modal: "90",
        tooltip: "100",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "none" },
        },
        shimmer: {
          "0%, 90%, 100%": {
            backgroundPosition: "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            backgroundPosition: "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(13, 145, 253, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(13, 145, 253, 0.4)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease forwards",
        "fade-up": "fade-up 0.5s ease forwards",
        shimmer: "shimmer 8s infinite",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        typing: "typing 2s steps(20) forwards",
        blink: "blink 1s step-end infinite",
      },
      backdropBlur: {
        xs: "2px",
        nav: "12px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
