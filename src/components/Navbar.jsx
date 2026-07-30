import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sun, Moon, Lock, Menu, X } from 'lucide-react';

export const Navbar = ({ onOpenAdmin }) => {
  const { theme, toggleTheme, isAdmin, data } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About Me', href: '#about' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact Me', href: '#contact' }
  ];

  return (
    <header
      className="glass-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '14px 0' : '22px 0',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FD6F00', letterSpacing: '0.5px' }}>
            LOGO
          </span>
        </a>

        {/* Center Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#FD6F00')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              background: '#FD6F00',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          >
            Hire Me
          </a>

          {/* Admin & Theme Toggle Controls */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#FD6F00" /> : <Moon size={18} color="#FD6F00" />}
          </button>

          <button
            onClick={onOpenAdmin}
            style={{
              background: 'rgba(253, 111, 0, 0.15)',
              color: '#FD6F00',
              border: '1px solid rgba(253, 111, 0, 0.3)',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Lock size={13} /> Admin
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              color: 'var(--text-primary)',
              padding: '6px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-surface)',
            padding: '24px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

