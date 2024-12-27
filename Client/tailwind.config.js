/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
        floatSlower: 'float 12s ease-in-out infinite',
        driftSlower: 'drift 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(15px)' },
        },
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to right, #03045E, #03346E, #021526)',
        'gradient-radial': 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent)',
      },
    },
  },
  plugins: [],
};
