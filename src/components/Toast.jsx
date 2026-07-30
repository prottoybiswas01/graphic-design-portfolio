import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = usePortfolio();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={20} color="#10B981" />,
    error: <AlertCircle size={20} color="#F43F5E" />,
    info: <Info size={20} color="#06B6D4" />
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        background: 'var(--bg-surface)',
        color: 'var(--text-primary)',
        padding: '14px 22px',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-highlight)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        maxWidth: '400px',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {icons[toast.type] || icons.info}
      <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{toast.message}</span>
    </div>
  );
};
