import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Cpu, Image, PenTool, Layout, Award, Type, Sparkles, Printer } from 'lucide-react';

export const Skills = () => {
  const { data } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Software', 'Core Skill', 'Theory', 'Print'];

  const filteredSkills =
    activeCategory === 'All'
      ? data.skills
      : data.skills.filter((s) => s.category === activeCategory);

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Image': return <Image size={20} />;
      case 'PenTool': return <PenTool size={20} />;
      case 'Figma': return <Layout size={20} />;
      case 'Award': return <Award size={20} />;
      case 'Layout': return <Layout size={20} />;
      case 'Type': return <Type size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Printer': return <Printer size={20} />;
      default: return <Cpu size={20} />;
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <Cpu size={14} /> Technical Competencies
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Design Tools & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Mastery over industry-standard design tools and core design principles assessed under NSD Level 3 criteria.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '30px',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  background: activeCategory === cat ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--border-color)'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: skill.color || 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem' }}>{skill.name}</h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{skill.category}</span>
                  </div>
                </div>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-full)',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: skill.color
                      ? `linear-gradient(90deg, ${skill.color}, var(--accent-primary))`
                      : 'var(--gradient-primary)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
