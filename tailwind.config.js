export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0faf8',
          100: '#deede8',
          200: '#50b3a2',
          300: '#4a9b89',
          400: '#3d8776',
        },
        dark: {
          50: '#f8f9fa',
          100: '#ecf0f1',
          200: '#bdc3c7',
          300: '#95a5a6',
          400: '#2c3e50',
          500: '#34495e',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
