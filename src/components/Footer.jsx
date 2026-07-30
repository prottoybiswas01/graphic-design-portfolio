import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  const { data } = usePortfolio();
  const { profile } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        padding: '50px 0 30px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '36px'
          }}
        >
          {/* Left Brand */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
              {profile.name}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {profile.nsdaLevel} Assessment Portfolio
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href={profile.socials.behance}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.05)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontWeight: 600
              }}
            >
              Behance
            </a>

            <a
              href={profile.socials.dribbble}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.05)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontWeight: 600
              }}
            >
              Dribbble
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.05)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontWeight: 600
              }}
            >
              LinkedIn
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {profile.name}. Designed for NSD Graphic Design Freelancing Level 3.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Built with React & Vite <Heart size={14} color="var(--accent-rose)" fill="var(--accent-rose)" />
          </div>
        </div>
      </div>
    </footer>
  );
};
