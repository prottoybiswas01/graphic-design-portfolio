import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import { Toast } from './components/Toast';

function PortfolioApp() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/admin' || path === '/admin-panel' || path.includes('/admin') || hash === '#admin') {
        setIsAdminOpen(true);
      }
    };
    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);
    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-main)' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => {
          setIsAdminOpen(false);
          if (window.location.pathname.includes('/admin')) {
            window.history.pushState({}, '', '/');
          }
        }}
      />
      <Toast />
    </div>
  );
}


export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}

