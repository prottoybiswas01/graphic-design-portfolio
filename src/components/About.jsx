import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, CheckCircle2, FileCheck, Layers, Cpu, Compass } from 'lucide-react';

export const About = () => {
  const { data } = usePortfolio();

  const workflowSteps = [
    {
      num: '01',
      title: 'Asset & Layout Planning',
      desc: 'Analyzing client requirements, target demographic, color psychology, and wireframe grid structures.'
    },
    {
      num: '02',
      title: 'Vector & Raster Execution',
      desc: 'Creating crisp vector logos in Illustrator, photo manipulations in Photoshop, and UI design components in Figma.'
    },
    {
      num: '03',
      title: 'NSD Standard Compliance',
      desc: 'Ensuring resolution, typography scale, spot colors, bleed lines, and responsive layout standards for Level 3 certification.'
    },
    {
      num: '04',
      title: 'Delivery & Asset Handoff',
      desc: 'Exporting print-ready CMYK PDFs, vector SVG/EPS assets, web-ready PNGs, and organized PSD/Figma source files.'
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textTransform: 'center', textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <Award size={14} /> National Skill Development (NSD) Certified
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            About My <span className="gradient-text">Design Practice</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Dedicated Graphic Designer with Level 3 NSDA Certification, transforming brand ideas into visually captivating, production-ready designs.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '70px'
          }}
          className="about-grid"
        >
          {/* Left: Certificate & Highlights Card */}
          <div className="glass-panel" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Award size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem' }}>NSDA Level 3 Certification</h3>
                <div style={{ color: 'var(--accent-secondary)', fontSize: '0.88rem', fontWeight: 600 }}>
                  Graphic Design for Freelancing (Level 3)
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              This portfolio represents the comprehensive practical assessment for Graphic Design for Freelancing Level 3. It demonstrates industry-standard competencies in digital branding, advertising asset creation, UI wireframing, color management, and client freelancing workflow.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Expertise in Photoshop, Illustrator, Figma & InDesign',
                'NSD Level 3 Standard Color Management & Typography',
                'Ad Banner Planning & Social Media Campaign Design',
                'High-Fidelity UI/UX Prototyping & Component Systems',
                '100% Client Satisfaction & Production-Ready Asset Delivery'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} color="var(--accent-emerald)" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Workflow Grid */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Layers color="var(--accent-secondary)" size={22} /> Creative Workflow & Methodology
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {workflowSteps.map((step) => (
                <div
                  key={step.num}
                  className="glass-panel"
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>{step.title}</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
