# 🚀 Modern Graphic Design & Web Specialist Portfolio

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A premium, modern, fully responsive portfolio website built with **React**, **Vite**, **Vanilla CSS**, and an integrated **Express + MongoDB Atlas** serverless backend.

---

## ✨ Key Features & Highlights

- **🎨 3D Figma Pop-Out Avatar Effect**: Seamless, zero-slice 3D pop-out avatars in Hero and About sections over custom Dark Circle Disc and Archway Dome backdrops with rotating neon auras and backlight glowing orbs.
- **💎 Glassmorphic & Modern Aesthetic**: Premium dark mode UI tailored with vibrant gradients, custom typography, micro-interactions, and glassmorphism.
- **📱 100% Mobile & Device Responsive**: Custom responsive breakpoints (4K, Laptop, Tablet, Mobile) with a full glassmorphic mobile navigation overlay drawer.
- **💼 Interactive Project Showcase & Modal**: Filterable project portfolio (UI/UX, Graphic Design, Web Apps) with fluid modal popups, live demo links, and tag filtering.
- **📊 Skills & Services Display**: Organized skills display covering both Graphic Design (Figma, Adobe XD, Photoshop, Illustrator, Premiere) and Web Development (React, Django, HTML5, CSS3, JS).
- **🛡️ Secure Admin Management Portal**: Authenticated admin dashboard to edit bio, add/edit/delete projects, manage skills, read contact messages, and update portfolio state.
- **⚡ Dual Storage System (MongoDB Atlas + Fallback)**: Serverless API integrated with MongoDB Atlas and automatic local storage fallback cache for 100% offline resilience.

---

## 🛠️ Technology Stack

| Component | Technologies & Libraries |
| :--- | :--- |
| **Frontend Framework** | React 19, Vite 8 |
| **Styling & Design System** | Vanilla CSS (CSS Grid, Flexbox, Glassmorphism, CSS Variables) |
| **Icons & UI Extras** | Lucide React Icons |
| **Backend Framework** | Node.js, Express.js (Vercel Serverless Functions) |
| **Database & ORM** | MongoDB Atlas, Mongoose ORM |
| **Deployment** | Vercel |

---

## 📁 Project Directory Structure

```
graphic-design-portfolio/
├── api/                      # Express Serverless Backend API
│   ├── db.js                 # MongoDB Atlas Connection Middleware
│   ├── models.js             # Mongoose Schemas (Profile, Project, Skill, Message)
│   └── index.js              # Express REST Endpoints & Seeding Logic
├── public/                   # Static Assets & Profile PNG Images
│   └── profile.png           # Transparent Portrait PNG
├── src/                      # Frontend Source Code
│   ├── components/           # Modular React Components
│   │   ├── Navbar.jsx        # Navigation Header & Mobile Drawer
│   │   ├── Hero.jsx          # Hero Banner & Circle Disc Pop-Out Avatar
│   │   ├── About.jsx         # About Bio & Archway Dome Pop-Out Avatar
│   │   ├── Services.jsx      # Design & Development Services
│   │   ├── Projects.jsx      # Filterable Project Portfolio Grid
│   │   ├── Skills.jsx        # Skills Display & Progress Ratings
│   │   ├── Contact.jsx       # Interactive Contact Form
│   │   ├── Footer.jsx        # Footer Links & Copyright
│   │   ├── ProjectModal.jsx  # Detailed Project Viewer Modal
│   │   └── AdminPanel.jsx    # Authenticated Portfolio Management Dashboard
│   ├── data/                 # Portfolio Initial Data & Fallback State
│   │   └── initialData.js
│   ├── App.jsx               # Main Application Hub
│   ├── index.css             # Global CSS Tokens, Glassmorphism & Responsive Rules
│   └── main.jsx              # React Entry Point
├── package.json              # Project Dependencies & NPM Scripts
├── vite.config.js            # Vite Build Configuration
└── vercel.json               # Vercel Deployment Route Rewrites
```

---

## 🚀 Quick Start & Local Setup

Follow these simple steps to run the portfolio locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/graphic-design-portfolio.git
cd graphic-design-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to: `http://localhost:5173`

### 4. Build for Production
To create an optimized production build in the `dist/` directory:
```bash
npm run build
```

---

## 🔐 Admin Panel Management

The website includes a built-in admin dashboard accessible directly from the navbar or footer:
- **Default Admin Password**: `admin123`
- **Dashboard Capabilities**:
  - Update profile name, title, bio text, completed projects counter, and social links.
  - Create new portfolio projects with image URLs, tags, and category filters.
  - Edit or remove existing skills and add new skill entries.
  - View and delete incoming client contact messages.

---

## 🌐 Deployment to Vercel

This repository is optimized for one-click deployment on **Vercel**:

1. Push your repository to GitHub.
2. Import the project into your Vercel Dashboard.
3. Configure the environment variable `MONGODB_URI` (optional, for cloud database syncing):
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```
4. Deploy! Vercel automatically handles frontend static assets and `api/` serverless functions.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p center>
Developed with ❤️ for <b>Prottoy Kumar Biswas</b> (Mohammad Tanvir) - Graphic Designer & UI Specialist.
</p>
