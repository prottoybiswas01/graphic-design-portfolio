import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Smartphone, Globe, Layout, Image, Award, Megaphone } from 'lucide-react';

export const Services = () => {
  const { data } = usePortfolio();

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone size={32} color="#FD6F00" />;
      case 'Globe': return <Globe size={32} color="#FD6F00" />;
      case 'Layout': return <Layout size={32} color="#FD6F00" />;
      case 'Image': return <Image size={32} color="#FD6F00" />;
      case 'Award': return <Award size={32} color="#FD6F00" />;
      case 'Megaphone': return <Megaphone size={32} color="#FD6F00" />;
      default: return <Smartphone size={32} color="#FD6F00" />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            Services
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '0.92rem' }}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '24px'
          }}
        >
          {data.services.map((service, index) => (
            <div
              key={service.id || index}
              className="animate-fade-up"
              style={{
                background: 'linear-gradient(135deg, rgba(253, 111, 0, 0.14) 0%, rgba(22, 22, 22, 0.98) 100%)',
                padding: 'clamp(24px, 4vw, 40px) clamp(20px, 3vw, 32px)',
                borderRadius: '16px',
                border: '1px solid rgba(253, 111, 0, 0.18)',
                animationDelay: `${index * 0.1}s`,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(253, 111, 0, 0.28) 0%, rgba(28, 20, 15, 0.98) 100%)';
                e.currentTarget.style.borderColor = 'rgba(253, 111, 0, 0.5)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(253, 111, 0, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(253, 111, 0, 0.14) 0%, rgba(22, 22, 22, 0.98) 100%)';
                e.currentTarget.style.borderColor = 'rgba(253, 111, 0, 0.18)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>{getServiceIcon(service.icon)}</div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FD6F00' }}>
                {service.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.65 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

