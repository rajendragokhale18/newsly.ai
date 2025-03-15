import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Needed for dark mode toggle
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(240, 5%, 84%)',
        input: 'hsl(240, 5%, 96%)',
        ring: 'hsl(240, 5%, 70%)',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(240, 10%, 10%)',
        primary: 'hsl(240, 100%, 60%)',
        'primary-foreground': 'hsl(0, 0%, 100%)',
        secondary: 'hsl(240, 5%, 95%)',
        'secondary-foreground': 'hsl(240, 10%, 10%)',
        destructive: 'hsl(0, 100%, 60%)',
        'destructive-foreground': 'hsl(0, 0%, 100%)',
        muted: 'hsl(240, 5%, 90%)',
        'muted-foreground': 'hsl(240, 5%, 30%)',
        accent: 'hsl(240, 5%, 85%)',
        'accent-foreground': 'hsl(240, 10%, 10%)',
        popover: 'hsl(0, 0%, 100%)',
        'popover-foreground': 'hsl(240, 10%, 10%)',
        card: 'hsl(0, 0%, 100%)',
        'card-foreground': 'hsl(240, 10%, 10%)',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [
    // Commented these out to prevent errors
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};

export default config;
