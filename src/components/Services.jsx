import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, Layout, Printer, Sparkles, Check, ArrowRight } from 'lucide-react';

export const Services = () => {
  const { data } = usePortfolio();

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award size={26} color="var(--accent-primary)" />;
      case 'Layout': return <Layout size={26} color="var(--accent-secondary)" />;
      case 'Printer': return <Printer size={26} color="var(--accent-rose)" />;
      default: return <Sparkles size={26} color="var(--accent-amber)" />;
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge-pill" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} /> Professional Offerings
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Graphic & UI <span className="gradient-text">Design Services</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto' }}>
            Tailored design solutions designed to help startups, agencies, and businesses build strong visual identities and digital products.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '30px'
          }}
        >
          {data.services.map((service) => (
            <div
              key={service.id}
              className="glass-panel"
              style={{
                padding: '32px 28px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getServiceIcon(service.icon)}
                </div>

                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--accent-emerald)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  {service.price}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
                {service.description}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  What's Included:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {service.deliverables?.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                      <Check size={14} color="var(--accent-primary)" />
                      <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)'
                  }}
                >
                  Order Service <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
