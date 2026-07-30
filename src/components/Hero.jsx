import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sparkles, ArrowRight, Download, Award, CheckCircle, ExternalLink, Star } from 'lucide-react';

export const Hero = () => {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <section
      id="hero"
      style={{
        paddingTop: '160px',
        paddingBottom: '90px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Glow Circles */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'var(--gradient-glow)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Intro & Text */}
          <div className="animate-slide-left">
            {/* Certification Badge Pill */}
            <div className="badge-pill" style={{ marginBottom: '20px' }}>
              <Award size={16} color="var(--accent-primary)" />
              <span>{profile.nsdaLevel} Assessment Portfolio</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                lineHeight: 1.15,
                marginBottom: '20px'
              }}
            >
              Creative Graphic Designer & <br />
              <span className="gradient-text">{profile.title.split('&')[1] || 'UI/UX Specialist'}</span>
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                maxWidth: '580px',
                lineHeight: 1.7
              }}
            >
              {profile.heroBio}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '45px' }}>
              <a href="#projects" className="btn-primary">
                Explore Works <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Hire Me
              </a>
              <a
                href="#about"
                className="btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Downloading Level 3 Certified Resume (CV)...');
                }}
              >
                <Download size={16} /> CV
              </a>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  {profile.completedProjects}+
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Projects Completed</div>
              </div>

              <div>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>
                  {profile.clientSatisfaction}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Satisfied Clients</div>
              </div>

              <div>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--accent-rose)' }}>
                  {profile.experienceYears}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column: Avatar Portrait Showcase */}
          <div className="animate-slide-right" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px'
              }}
            >
              {/* Outer Glowing Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '30px',
                  background: 'var(--gradient-primary)',
                  opacity: 0.4,
                  filter: 'blur(20px)',
                  animation: 'pulseGlow 4s infinite ease-in-out'
                }}
              />

              {/* Avatar Frame Card */}
              <div
                className="glass-panel"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '28px',
                  padding: '12px',
                  background: 'var(--bg-surface)'
                }}
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                  }}
                />

                {/* Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    padding: '14px 18px',
                    background: 'rgba(17, 24, 39, 0.85)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-highlight)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{profile.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent-secondary)' }}>Level 3 Certified Freelancer</div>
                  </div>
                  <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#F59E0B" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Tool Badge 1: Photoshop */}
              <div
                className="glass-panel animate-float"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-20px',
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#31A8FF',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <span>Ps</span> Photoshop Pro
              </div>

              {/* Floating Tool Badge 2: Illustrator */}
              <div
                className="glass-panel animate-float"
                style={{
                  position: 'absolute',
                  bottom: '70px',
                  right: '-25px',
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#FF9A00',
                  animationDelay: '1.5s',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <span>Ai</span> Vector Specialist
              </div>
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
            flexDirection: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};
