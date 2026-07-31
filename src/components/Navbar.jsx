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
          <img
            src="/logo.png"
            alt="kodl.uk"
            style={{
              height: '52px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />

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

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: scrolled ? '72px' : '84px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 70px)',
            background: 'rgba(18, 18, 18, 0.98)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 999,
            borderTop: '1px solid var(--border-color)',
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'block'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{
              marginTop: '16px',
              justifyContent: 'center',
              padding: '12px 24px',
              fontSize: '0.95rem',
              fontWeight: 600
            }}
          >
            Hire Me
          </a>
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

