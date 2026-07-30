import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <footer
      style={{
        background: '#0B0B0B',
        padding: '60px 0 30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center'
      }}
    >
      <div className="container">
        {/* LOGO */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/logo.png"
            alt="kodl.uk"
            style={{
              height: '56px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>



        {/* Center Nav Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            marginBottom: '28px',
            fontSize: '0.95rem'
          }}
        >
          <a href="#hero" style={{ color: 'var(--text-primary)' }}>Home</a>
          <a href="#services" style={{ color: 'var(--text-primary)' }}>Services</a>
          <a href="#about" style={{ color: 'var(--text-primary)' }}>About Me</a>
          <a href="#projects" style={{ color: 'var(--text-primary)' }}>Portfolio</a>
          <a href="#contact" style={{ color: 'var(--text-primary)' }}>Contact Me</a>
        </div>

        {/* Social Icons (Facebook, LinkedIn, Behance, Email) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
          <a
            href={profile.socials?.facebook || 'https://www.facebook.com/prottoy57'}
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FD6F00';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>

          <a
            href={profile.socials?.linkedin || 'https://www.linkedin.com/in/prottoy-kumar-biswas/'}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FD6F00';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>

          <a
            href={profile.socials?.behance || 'https://www.behance.net/prottoybiswas'}
            target="_blank"
            rel="noreferrer"
            title="Behance"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FD6F00';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.101 0-5-2.084-5-5.044 0-3.087 1.947-5.043 4.887-5.043 2.855 0 4.549 1.875 4.792 4.087h-2.617c-.104-.811-.84-1.89-2.175-1.89-1.399 0-2.235 1.055-2.235 2.812 0 1.637.771 2.836 2.247 2.836 1.488 0 2.102-1.026 2.245-1.758h2.582zm-15.726-2.906h-3.447v-2.316h3.292c.983 0 1.614.409 1.614 1.139 0 .762-.684 1.177-1.459 1.177zm-.382 3.864c1.157 0 1.956-.453 1.956-1.378 0-.913-.771-1.316-1.732-1.316h-3.289v2.694h3.065zm-5.618-8.958h6.541c2.148 0 3.738.995 3.738 2.658 0 1.085-.623 1.944-1.63 2.37 1.342.399 2.172 1.439 2.172 2.766 0 2.054-1.791 3.206-4.103 3.206h-6.718v-11z"/></svg>
          </a>

          <a
            href={`mailto:${profile.email}`}
            title="Send Email"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FD6F00';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>


        {/* Contact info bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            marginBottom: '30px',
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={16} color="#FD6F00" />
            <span>{profile.email}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={16} color="#FD6F00" />
            <span>{profile.phone}</span>
          </div>
        </div>

        {/* Copyright bar */}
        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          Designed with precision — All Rights Reserved. © {new Date().getFullYear()} {profile.name}
        </div>
      </div>
    </footer>
  );
};


