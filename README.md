# 🚀 Siddhartha Tiwari — Portfolio

A modern 3D portfolio built with **React.js**, featuring animated backgrounds, custom cursor, scroll animations, and a fully responsive design.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Cursor.jsx         ← Custom dual-layer cursor
│   │   ├── Cursor.css
│   │   ├── Navbar.jsx         ← Sticky nav with mobile menu
│   │   ├── Navbar.css
│   │   ├── ThreeBackground.jsx ← Animated canvas background
│   │   ├── ThreeBackground.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── sections/
│   │   ├── Hero.jsx           ← Hero with typewriter effect
│   │   ├── Hero.css
│   │   ├── About.jsx          ← About + education card
│   │   ├── About.css
│   │   ├── Projects.jsx       ← 3 project cards with hover tilt
│   │   ├── Projects.css
│   │   ├── Skills.jsx         ← Animated progress bars
│   │   ├── Skills.css
│   │   ├── Contact.jsx        ← Form with validation
│   │   └── Contact.css
│   ├── data/
│   │   ├── projects.js        ← Project data
│   │   └── skills.js          ← Skills data
│   ├── hooks/
│   │   └── useReveal.js       ← Scroll reveal hook
│   ├── styles/
│   │   └── global.css         ← CSS variables, reset, shared styles
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```

### 3. Build for production
```bash
npm run build
```

---

## ✨ Features

- 🎨 **Dark theme** with blue/purple/teal gradient palette
- 🖱️ **Custom cursor** — dot + ring with lag effect
- 🌌 **Animated canvas background** — particles, shapes, grid
- ⌨️ **Typewriter effect** in Hero section
- 📜 **Scroll reveal animations** on all sections
- 🃏 **3D hover tilt** on project cards
- 📊 **Animated skill bars** triggered on scroll
- 📱 **Fully responsive** — mobile hamburger menu
- ✅ **Contact form** with live validation

---

## 🎨 Customization

- Edit **`src/data/projects.js`** to update your projects
- Edit **`src/data/skills.js`** to update skills & percentages
- Change colors in **`src/styles/global.css`** CSS variables
- Update your name/tagline in **`src/sections/Hero.jsx`**
- Update social links in **`src/sections/Contact.jsx`**

---

## 🛠️ Tech Stack

- React 18
- CSS3 (custom properties, animations, grid, flexbox)
- Canvas API (custom particle + shape animation)
- IntersectionObserver (scroll reveals + bar animations)
