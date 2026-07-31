import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const { data } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'UI/UX Design', 'Web Design', 'App Design', 'Branding'];

  const filteredProjects = data.projects.filter((project) => {
    return selectedCategory === 'All' || project.category === selectedCategory;
  });

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            Portfolio
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '0.92rem' }}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '28px'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  background: selectedCategory === cat ? '#FD6F00' : '#1E1E1E',
                  color: selectedCategory === cat ? '#FFFFFF' : '#9E9E9E',
                  border: `1px solid ${selectedCategory === cat ? '#FD6F00' : 'rgba(255, 255, 255, 0.05)'}`,
                  transition: 'all 0.25s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3x3 Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
            gap: '24px'
          }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id || index}
              className="hover-lift-card animate-fade-up"
              onClick={() => setActiveModalProject(project)}
              style={{
                background: '#1E1E1E',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                cursor: 'pointer',
                animationDelay: `${index * 0.08}s`
              }}
            >
              {/* Image Preview Container */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Card Title & Category */}
              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.8rem', color: '#FD6F00', fontWeight: 600, marginBottom: '4px' }}>
                  {project.category}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
};

