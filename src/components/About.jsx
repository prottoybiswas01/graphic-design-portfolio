import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Download } from 'lucide-react';

export const About = () => {
  const { data } = usePortfolio();
  const { profile } = data;

  const skillsList = [
    { id: 's1', name: 'Figma', level: 100 },
    { id: 's2', name: 'Adobe XD', level: 100 },
    { id: 's3', name: 'Adobe Photoshop', level: 85 },
    { id: 's4', name: 'Adobe Illustrator', level: 60 },
    { id: 's5', name: 'Adobe Premiere', level: 70 }
  ];

  const getToolLogo = (skillName) => {
    switch (skillName) {
      case 'Figma':
        return (
          <svg width="28" height="28" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
        );
      case 'Adobe XD':
        return (
          <div style={{ border: '2px solid #470137', borderRadius: '6px', padding: '2px 5px', background: '#2e0023' }}>
            <span style={{ color: '#FF61F6', fontWeight: 800, fontSize: '0.95rem', fontFamily: 'sans-serif' }}>Xd</span>
          </div>
        );
      case 'Adobe Photoshop':
        return (
          <div style={{ border: '2px solid #001E36', borderRadius: '6px', padding: '2px 6px', background: '#001c38' }}>
            <span style={{ color: '#31A8FF', fontWeight: 800, fontSize: '0.95rem', fontFamily: 'sans-serif' }}>Ps</span>
          </div>
        );
      case 'Adobe Illustrator':
        return (
          <div style={{ border: '2px solid #330000', borderRadius: '6px', padding: '2px 7px', background: '#260000' }}>
            <span style={{ color: '#FF9A00', fontWeight: 800, fontSize: '0.95rem', fontFamily: 'sans-serif' }}>Ai</span>
          </div>
        );
      case 'Adobe Premiere':
        return (
          <div style={{ border: '2px solid #00005C', borderRadius: '6px', padding: '2px 6px', background: '#140036' }}>
            <span style={{ color: '#9999FF', fontWeight: 800, fontSize: '0.95rem', fontFamily: 'sans-serif' }}>Pr</span>
          </div>
        );
      default:
        return <span style={{ fontWeight: 800, color: '#FD6F00' }}>Tool</span>;
    }
  };

  const renderSkillGauge = (skill) => {
    const radius = 52;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <div key={skill.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: '130px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Circular SVG Ring */}
          <svg width="130" height="130" viewBox="0 0 130 130" style={{ transform: 'rotate(-90deg)', position: 'absolute', inset: 0 }}>
            <circle
              cx="65"
              cy="65"
              r={radius}
              fill="none"
              stroke="#2B2B2B"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="65"
              cy="65"
              r={radius}
              fill="none"
              stroke="#FD6F00"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            />
          </svg>

          {/* Inner White Round Badge */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
              zIndex: 2
            }}
          >
            {getToolLogo(skill.name)}
          </div>
        </div>

        {/* Level & Name */}
        <div style={{ marginTop: '14px' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FD6F00', lineHeight: 1.2 }}>
            {skill.level}%
          </div>
          <div style={{ fontSize: '0.9rem', color: '#9E9E9E', marginTop: '4px', fontWeight: 500 }}>
            {skill.name}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header & Subtitle */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
            About Me
          </h2>
          <p style={{ color: '#9E9E9E', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem', fontWeight: 500 }}>
            User Interface And User Experience And Also Video Editing
          </p>
        </div>

        {/* Grid Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '50px',
            alignItems: 'center',
            marginBottom: '80px'
          }}
          className="about-grid"
        >
          {/* Left: 3D Pop-Out Avatar */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '440px', position: 'relative' }}>
            {/* Dark Circle Background Disc */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                background: '#1B1B1B',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)',
                zIndex: 1,
                border: '1px solid rgba(255, 255, 255, 0.04)'
              }}
            />

            {/* Layer 1: Body masked INSIDE circle at bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '340px',
                height: '340px',
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
                  height: '420px',
                  maxWidth: 'none',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>

            {/* Layer 2: Head popping OUT of circle at top */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '340px',
                height: '420px',
                overflow: 'hidden',
                zIndex: 3,
                pointerEvents: 'none',
                clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
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
                  height: '420px',
                  maxWidth: 'none',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Right: Bio Text & Download CV Button */}
          <div>
            <p
              style={{
                color: '#9E9E9E',
                fontSize: '0.92rem',
                lineHeight: 1.85,
                marginBottom: '32px',
                textAlign: 'justify'
              }}
            >
              A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions. Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs. In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs. In this digital atelier.
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
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Download size={18} /> Download CV
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
          {skillsList.map((skill) => renderSkillGauge(skill))}
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


