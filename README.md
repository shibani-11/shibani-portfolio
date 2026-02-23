# Shibani Kumar Portfolio

A modern, minimal portfolio website built with React + Vite + Tailwind CSS.

## Features

- 🎨 Minimal, modern, premium dark theme
- 📱 Fully responsive design
- ✨ Smooth scrolling with fade-in animations
- 🚀 Fast performance with Vite
- 💅 Tailwind CSS for styling

## Sections

- **Hero** - Introduction with call-to-action buttons
- **About** - Personal background and highlights
- **Skills** - Technical skills and expertise
- **Experience** - Professional work history
- **Projects** - Technical projects showcase
- **Research** - Research interests and work
- **Leadership** - Awards and recognition
- **Contact** - Get in touch links

## Prerequisites

- Node.js 18+ 
- npm 9+

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
shibani-portfolio/
├── public/
│   └── assets/
│       └── images/
│           └── profile.jpg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Leadership.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   ├── Research.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Customization

Edit `src/data/portfolio.js` to update:
- Name and title
- Contact information (email, LinkedIn, GitHub)
- About section content
- Skills and expertise
- Experience entries
- Projects
- Research work
- Leadership and awards

## Design System

- **Colors:** Dark theme with teal accent (#64ffda)
- **Fonts:** Inter (sans-serif), Playfair Display (headings)
- **Animations:** Fade-in, fade-in-up with staggered delays

## License

MIT
