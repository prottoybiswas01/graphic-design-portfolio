import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, Calendar, Building, Award } from 'lucide-react';

export const Experience = () => {
  const { data } = usePortfolio();

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <Briefcase size={14} /> Career Milestone & Timeline
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Experience & <span className="gradient-text">Certification</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            My journey through National Skill Assessment Level 3 and professional freelancing experience.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Center Line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: 'var(--border-highlight)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {data.experience.map((exp) => (
              <div
                key={exp.id}
                style={{
                  position: 'relative',
                  paddingLeft: '60px'
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '6px',
                    top: '4px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: 'var(--shadow-glow)'
                  }}
                >
                  <Award size={15} />
                </div>

                <div className="glass-panel" style={{ padding: '24px 28px', borderRadius: 'var(--radius-md)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--accent-secondary)',
                        background: 'rgba(6, 182, 212, 0.1)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Calendar size={13} /> {exp.period}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Building size={14} /> {exp.company}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
