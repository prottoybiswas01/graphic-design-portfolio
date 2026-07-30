import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialData } from '../data/initialData';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  // Admin session state
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('portfolio_admin_auth') === 'true';
  });

  // Main Portfolio Data persistent state
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved portfolio data', e);
      }
    }
    return initialData;
  });

  // Toast notification state
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('portfolio_data_v2', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Admin Auth functions
  const loginAdmin = (password) => {
    // Secret password or default 'admin123' or 'admin'
    if (password === 'admin123' || password === 'admin' || password === '123456') {
      setIsAdmin(true);
      localStorage.setItem('portfolio_admin_auth', 'true');
      showToast('Welcome Admin! You can now edit all portfolio sections.', 'success');
      return true;
    } else {
      showToast('Invalid admin password! Try: admin123', 'error');
      return false;
    }
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('portfolio_admin_auth');
    showToast('Logged out from Admin mode', 'info');
  };

  // Profile / Hero update
  const updateProfile = (updatedProfile) => {
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...updatedProfile }
    }));
    showToast('Profile information updated successfully!');
  };

  // Project Management
  const addProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: 'p_' + Date.now()
    };
    setData(prev => ({
      ...prev,
      projects: [projectWithId, ...prev.projects]
    }));
    showToast('New project added to portfolio!');
  };

  const updateProject = (id, updatedFields) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => (p.id === id ? { ...p, ...updatedFields } : p))
    }));
    showToast('Project updated successfully!');
  };

  const deleteProject = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
    showToast('Project deleted from portfolio.', 'info');
  };

  // Skill Management
  const addSkill = (newSkill) => {
    const skillWithId = {
      ...newSkill,
      id: 's_' + Date.now()
    };
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, skillWithId]
    }));
    showToast('Skill added successfully!');
  };

  const updateSkill = (id, updatedFields) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map(s => (s.id === id ? { ...s, ...updatedFields } : s))
    }));
    showToast('Skill updated!');
  };

  const deleteSkill = (id) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
    showToast('Skill removed.', 'info');
  };

  // Contact Messages
  const sendMessage = (messageForm) => {
    const newMessage = {
      ...messageForm,
      id: 'm_' + Date.now(),
      date: new Date().toLocaleString(),
      read: false
    };
    setData(prev => ({
      ...prev,
      messages: [newMessage, ...prev.messages]
    }));
    showToast('Thank you! Your message has been sent to the designer.', 'success');
  };

  const markMessageRead = (id) => {
    setData(prev => ({
      ...prev,
      messages: prev.messages.map(m => (m.id === id ? { ...m, read: true } : m))
    }));
  };

  const deleteMessage = (id) => {
    setData(prev => ({
      ...prev,
      messages: prev.messages.filter(m => m.id !== id)
    }));
    showToast('Message deleted', 'info');
  };

  // Reset to default sample data
  const resetToDefault = () => {
    setData(initialData);
    localStorage.removeItem('portfolio_data_v2');
    showToast('Portfolio data reset to default sample data.', 'info');
  };

  // Export JSON for MongoDB / Backup
  const exportMongoDBJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `portfolio_mongodb_dump_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Downloaded MongoDB JSON data payload!', 'success');
  };

  return (
    <PortfolioContext.Provider
      value={{
        theme,
        toggleTheme,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        data,
        updateProfile,
        addProject,
        updateProject,
        deleteProject,
        addSkill,
        updateSkill,
        deleteSkill,
        sendMessage,
        markMessageRead,
        deleteMessage,
        resetToDefault,
        exportMongoDBJSON,
        toast,
        showToast
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
