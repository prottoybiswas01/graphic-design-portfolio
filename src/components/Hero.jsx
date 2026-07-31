import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero = () => {
  const { data } = usePortfolio();
  const { profile } = data;

  const titles = [
    'UI/UX Designer',
    'Graphic Designer',
    'Figma & Adobe Specialist',
    'Brand Identity Creator'
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[titleIndex];
    const typingSpeed = isDeleting ? 65 : 125;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 3200);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);


  return (
    <section
      id="hero"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-main)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '40px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column */}
          <div className="animate-fade-up">
            <span style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
              {profile.greeting || "Hi! I'm"}
            </span>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#FD6F00', marginBottom: '2px' }}>
              {profile.name}
            </h2>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                color: '#FD6F00',
                lineHeight: 1.15,
                marginBottom: '20px',
                letterSpacing: '-1px',
                minHeight: '1.2em'
              }}
            >
              {currentText}
              <span style={{ animation: 'blinkCursor 0.8s infinite', color: '#FFFFFF', marginLeft: '4px' }}>|</span>
            </h1>


            {/* Social Icons (Facebook, LinkedIn, Behance, Email) */}
            <div style={{ display: 'flex', gap: '14px', marginBottom: '28px' }}>
              <a
                href={profile.socials?.facebook || 'https://www.facebook.com/prottoy57'}
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
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
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
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
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
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
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
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
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
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
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.101 0-5-2.084-5-5.044 0-3.087 1.947-5.043 4.887-5.043 2.855 0 4.549 1.875 4.792 4.087h-2.617c-.104-.811-.84-1.89-2.175-1.89-1.399 0-2.235 1.055-2.235 2.812 0 1.637.771 2.836 2.247 2.836 1.488 0 2.102-1.026 2.245-1.758h2.582zm-15.726-2.906h-3.447v-2.316h3.292c.983 0 1.614.409 1.614 1.139 0 .762-.684 1.177-1.459 1.177zm-.382 3.864c1.157 0 1.956-.453 1.956-1.378 0-.913-.771-1.316-1.732-1.316h-3.289v2.694h3.065zm-5.618-8.958h6.541c2.148 0 3.738.995 3.738 2.658 0 1.085-.623 1.944-1.63 2.37 1.342.399 2.172 1.439 2.172 2.766 0 2.054-1.791 3.206-4.103 3.206h-6.718v-11z"/></svg>
              </a>

              <a
                href={`mailto:${profile.email}`}
                title="Send Email"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
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
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>


            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  background: '#FD6F00',
                  color: '#ffffff',
                  padding: '12px 32px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                Hire Me
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1oLDTucuVrr2fwt3e5jAsGoFr6tpCfT51"
                download="Prottoy_Kumar_Biswas_CV.pdf"
                className="btn-secondary"
                style={{
                  padding: '12px 28px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  fontSize: '0.95rem',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Download CV
              </a>


            </div>

            {/* Stats Row Box */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                background: '#1E1E1E',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                maxWidth: '460px',
                width: '100%'
              }}
            >
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FD6F00', lineHeight: 1 }}>
                  {profile.experienceYears}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Experience
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FD6F00', lineHeight: 1 }}>
                  {profile.completedProjects}+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Projects Done
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FD6F00', lineHeight: 1 }}>
                  {profile.clientSatisfaction}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Pop-Out Avatar matching Demo Image 2 */}
          <div className="hero-avatar-container">

            {/* Rotating Lighting Aura Ring */}
            <div
              className="animate-spin-aura"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '88%',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #FD6F00, transparent 40%, #00E5FF, transparent 80%, #FD6F00)',
                filter: 'blur(20px)',
                opacity: 0.7,
                zIndex: 0
              }}
            />

            {/* Ambient Orange Backlight Glow */}
            <div
              className="animate-float-orb"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '92%',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(253, 111, 0, 0.38) 0%, rgba(253, 111, 0, 0) 70%)',
                filter: 'blur(45px)',
                zIndex: 0
              }}
            />

            {/* Dark Circle Disc Backdrop (Matches Demo Image 2) */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '85%',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                background: '#181818',
                border: '1px solid rgba(253, 111, 0, 0.25)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75)',
                zIndex: 1
              }}
            />

            {/* Single Continuous Person PNG (Head pops out above circle) */}
            <img
              src={profile.avatar}
              alt={profile.name}
              style={{
                position: 'relative',
                height: '100%',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                zIndex: 2,
                display: 'block',
                filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.5))'
              }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
              }}
            />
          </div>




        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};




