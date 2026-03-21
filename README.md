# Brian Maweu Portfolio - React

A beautiful, professional portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui.

![Portfolio Preview](./public/images/profile.jpg)

## 🌟 Features

- **Modern Design**: Clean, attractive UI with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Custom cursor, hover effects, and scroll animations
- **Single Page Application**: Smooth scrolling between sections
- **Sections Included**:
  - Hero with typing animation
  - About with profile image
  - Skills with animated progress bars
  - Projects with filtering
  - Philosophy/Quote section
  - Contact form with FAQ
  - Footer with social links

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
app/
├── public/
│   └── images/
│       └── profile.jpg      # Your profile photo
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   ├── BackToTop.tsx    # Back to top button
│   │   └── CustomCursor.tsx # Custom cursor effect
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section with typing animation
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills with progress bars
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Philosophy.tsx   # Quote section
│   │   └── Contact.tsx      # Contact form & FAQ
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies
```

## ✏️ Customization Guide

### Update Personal Information

1. **Name & Details**: Edit files in `src/sections/`
2. **Profile Photo**: Replace `public/images/profile.jpg`
3. **Social Links**: Update in `src/components/Footer.tsx` and `src/sections/Hero.tsx`
4. **Projects**: Edit `src/sections/Projects.tsx`

### Change Colors

Edit `src/index.css`:

```css
:root {
  --primary: 239 84% 67%;    /* Change primary color */
  --secondary: 187 94% 43%;  /* Change secondary color */
  --accent: 38 92% 50%;      /* Change accent color */
}
```

Or edit Tailwind classes directly in components.

## 🚀 Deployment

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📝 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by Brian Maweu**
