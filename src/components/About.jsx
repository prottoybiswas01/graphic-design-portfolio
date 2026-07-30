import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const About = () => {
  const { data } = usePortfolio();
  const { profile, skills } = data;

  // Helper for Circular Gauge SVG Calculation
  const renderCircleGauge = (percent, label) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percent / 100) * circumference;

    return (
      <div key={label} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="circle-gauge">
          <svg viewBox="0 0 100 100">
            <circle className="circle-bg" cx="50" cy="50" r={radius} />
            <circle
              className="circle-progress"
              cx="50"
              cy="50"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="circle-value">{percent}%</div>
        </div>
        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF', marginTop: '10px' }}>
          {label}
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            About Me
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '0.92rem' }}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '50px',
            alignItems: 'center',
            marginBottom: '70px'
          }}
          className="about-grid"
        >
          {/* Left: Circular Dark Avatar Arc */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '360px',
                height: '360px',
                borderRadius: '50%',
                background: '#1E1E1E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
              }}
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                style={{
                  width: '320px',
                  height: '320px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>
          </div>

          {/* Right: Bio Text & Download Button */}
          <div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                marginBottom: '32px'
              }}
            >
              {profile.aboutBio ||
                "A software engineer, also known as a computer programmer, writes the code that allows computer applications and software programs to function smoothly. They analyze users' needs, design and test software, and modify existing applications to ensure peak efficiency. Software engineers work across various industries creating tudo from operating systems to computer games."}
            </p>

            <a
              href="#about"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading CV...');
              }}
              style={{
                background: '#FD6F00',
                color: '#ffffff',
                padding: '12px 32px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Circular Skill Gauges Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '30px',
            paddingTop: '20px'
          }}
        >
          {skills.map((skill) => renderCircleGauge(skill.level, skill.name))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

