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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {data.services.map((service, index) => (
            <div
              key={service.id || index}
              className="animate-fade-up"
              style={{
                background: '#1E1E1E',
                padding: '40px 32px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                animationDelay: `${index * 0.1}s`,
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FD6F00';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(253, 111, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>{getServiceIcon(service.icon)}</div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FD6F00' }}>
                {service.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

