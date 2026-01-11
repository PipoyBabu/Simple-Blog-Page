# CodeJourney Blog

A modern, responsive blog documenting a programming journey through C++, Java, and Web Development. Built with HTML5 semantics, Tailwind CSS, and Vite.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **HTML5 Semantics**: Proper use of semantic HTML elements for accessibility and SEO
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Vite**: Next-generation frontend build tool with instant module replacement
- **Modern JavaScript**: ES6+ modules with organized code structure
- **Accessible**: WCAG compliant with proper ARIA labels and semantic elements

## Tech Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first styling
- **JavaScript (ES6+)**: Modern interactive features
- **Vite**: Fast build tool and dev server
- **Node.js & npm**: Package management

## Project Structure

```
├── index.html              # Main HTML file
├── src/
│   ├── main.js            # JavaScript entry point
│   └── style.css          # Tailwind CSS with custom components
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── .gitignore            # Git ignore rules
```

## Installation

1. **Clone or download the project**
   ```bash
   cd Simple-Blog-Page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The development server will open at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Development

### Hot Module Replacement (HMR)
The development server includes HMR support. Any changes to HTML, CSS, or JavaScript files will automatically refresh the browser.

### CSS Architecture
- Uses Tailwind CSS utility classes for styling
- Custom components defined in `src/style.css` using `@layer components`
- Responsive design with Tailwind's breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

### JavaScript Modules
Code is organized into modular classes:
- `MobileMenu`: Hamburger menu functionality
- `SearchEnhancement`: Search input interactions
- `SmoothScroll`: Smooth scrolling for anchor links

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: 320px - 767px (single column)
- **Tablet**: 768px - 1023px (two columns)
- **Desktop**: 1024px+ (three columns)
- **Large Desktop**: 1440px+ (expanded layouts)

## Accessibility Features

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`)
- ARIA labels and attributes for better screen reader support
- Proper heading hierarchy (h1, h2, h3, h4)
- Focus states for interactive elements
- Alt text for all images
- Skip links and landmarks
- Keyboard navigation support

## Performance

- Lazy loading for images
- Optimized Tailwind CSS (only used classes are included in production)
- Minified production builds
- Efficient CSS and JavaScript bundling with Vite

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    200: '#50b3a2',
    300: '#4a9b89',
    400: '#3d8776',
  }
}
```

### Typography
Tailwind's default typography scale is used. Customize in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
}
```

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory. The build includes:
- Minified HTML, CSS, and JavaScript
- Optimized assets
- Source maps (can be disabled in config)

## Deployment

The `dist/` folder can be deployed to any static hosting service:
- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting
- Any web server

## Contributing

Feel free to fork this project and make improvements!

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Author

Created by Alex Chen - A Sophomore's Programming Adventure

---

**Happy coding!** 🚀
