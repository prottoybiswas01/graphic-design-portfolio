import React from 'react';
import { X, ExternalLink, Calendar, User, Tag, ArrowUpRight } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: 'clamp(16px, 4vw, 32px)',
          borderRadius: 'var(--radius-lg)',
          position: 'relative',
          background: 'var(--bg-surface)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.6)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Project Image */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '20px' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: 'clamp(180px, 35vh, 340px)', objectFit: 'cover' }}
          />
        </div>

        {/* Category Pill */}
        <div className="badge-pill" style={{ marginBottom: '12px' }}>
          {project.category}
        </div>

        <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{project.title}</h2>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
          {project.description}
        </p>

        {/* Info Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '24px'
          }}
        >
          {project.client && (
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={13} /> Client
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{project.client}</div>
            </div>
          )}

          {project.date && (
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={13} /> Completion Date
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{project.date}</div>
            </div>
          )}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {project.tags?.map((tag, idx) => (
            <span
              key={idx}
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(139, 92, 246, 0.1)',
                color: 'var(--accent-primary)',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* External Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            View Live Project Showcase <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </div>
  );
};
