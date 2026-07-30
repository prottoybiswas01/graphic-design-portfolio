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
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
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


            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '14px', marginBottom: '28px' }}>
              <a
                href={profile.socials?.facebook || '#'}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>

              <a
                href={profile.socials?.twitter || '#'}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/></svg>
              </a>

              <a
                href={profile.socials?.dribbble || '#'}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm9.841 10.741c-2.616-.505-5.228-.352-7.795.143 1.258-2.695 2.684-5.344 4.062-7.854 2.197 1.83 3.593 4.594 3.733 7.711zM16.59 2.176c-1.393 2.502-2.83 5.144-4.1 7.828-2.646-1.177-5.59-1.89-8.73-2.127C5.352 4.792 8.358 2.553 12 2.553c1.614 0 3.167.433 4.59 1.176zM2.553 12c0-.285.024-.564.053-.841 3.277.243 6.347.986 9.112 2.213-1.077 2.871-2.07 5.797-2.894 8.718-3.666-1.073-6.271-4.496-6.271-8.542zm8.01 9.421c.828-2.868 1.821-5.748 2.894-8.571 2.457-.464 4.966-.606 7.48-.124-.658 3.57-3.238 6.46-6.624 7.552-1.222.71-2.456 1.143-3.75 1.143z"/></svg>
              </a>

              <a
                href={profile.socials?.linkedin || '#'}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
                gap: '20px',
                background: '#1E1E1E',
                padding: '20px 24px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                maxWidth: '460px'
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

          {/* Right Column: Much Larger Portrait Photo with Large Circle Backdrop */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '620px', position: 'relative' }}>
            {/* Ambient Orange Backlight Glow */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                width: '520px',
                height: '520px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(253, 111, 0, 0.28) 0%, rgba(253, 111, 0, 0) 70%)',
                filter: 'blur(45px)',
                zIndex: 0
              }}
            />

            {/* Large Dark Circle Disc */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '480px',
                height: '480px',
                borderRadius: '50%',
                background: '#181818',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75)',
                zIndex: 1,
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            />

            {/* Layer 1: Body masked INSIDE circle at bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '480px',
                height: '480px',
                borderRadius: '50%',
                overflow: 'hidden',
                zIndex: 2
              }}
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: '620px',
                  maxWidth: 'none',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>

            {/* Layer 2: Head popping OUT significantly above circle top */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '480px',
                height: '620px',
                overflow: 'hidden',
                zIndex: 3,
                pointerEvents: 'none',
                clipPath: 'polygon(0 0, 100% 0, 100% 42%, 0 42%)'
              }}
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: '620px',
                  maxWidth: 'none',
                  objectFit: 'cover'
                }}
              />
            </div>
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




