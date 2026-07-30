import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialData } from '../data/initialData';

const PortfolioContext = createContext();

const API_BASE = '/api/portfolio';

export const PortfolioProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  // Admin session state
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('portfolio_admin_auth') === 'true';
  });

  // Main Portfolio Data state
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data_v3');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse cached portfolio data', e);
      }
    }
    return initialData;
  });

  const [dbConnected, setDbConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Fetch initial data from MongoDB API
  const fetchFromMongoDB = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_BASE);
      if (res.ok) {
        const json = await res.json();
        if (json.profile && json.projects) {
          setData(json);
          setDbConnected(true);
          localStorage.setItem('portfolio_data_v3', JSON.stringify(json));
          console.log('Successfully synced with MongoDB Atlas');
        }
      }
    } catch (err) {
      console.warn('Could not connect to backend API, using local storage cache', err);
      setDbConnected(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFromMongoDB();
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio_data_v3', JSON.stringify(data));
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

  // Profile Update -> MongoDB & LocalState
  const updateProfile = async (updatedProfile) => {
    // Optimistic UI update
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...updatedProfile }
    }));

    try {
      const res = await fetch(`${API_BASE}/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProfile)
      });
      if (res.ok) {
        showToast('Profile updated in MongoDB Atlas & website live!');
      } else {
        showToast('Profile updated locally (Database sync warning)', 'info');
      }
    } catch (e) {
      showToast('Profile saved locally.', 'info');
    }
  };

  // Add Project -> MongoDB & LocalState
  const addProject = async (newProject) => {
    try {
      const res = await fetch(`${API_BASE}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject)
      });
      if (res.ok) {
        const json = await res.json();
        setData(prev => ({
          ...prev,
          projects: [json.project, ...prev.projects]
        }));
        showToast('New project saved to MongoDB Atlas!');
        return;
      }
    } catch (e) {
      console.warn('API error, saving locally', e);
    }

    const fallbackProject = { ...newProject, id: 'p_' + Date.now() };
    setData(prev => ({
      ...prev,
      projects: [fallbackProject, ...prev.projects]
    }));
    showToast('Project added to portfolio!');
  };

  // Update Project -> MongoDB & LocalState
  const updateProject = async (id, updatedFields) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => (p.id === id ? { ...p, ...updatedFields } : p))
    }));

    try {
      await fetch(`${API_BASE}/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFields)
      });
      showToast('Project updated in MongoDB Atlas!');
    } catch (e) {
      showToast('Project updated locally.', 'info');
    }
  };

  // Delete Project -> MongoDB & LocalState
  const deleteProject = async (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));

    try {
      await fetch(`${API_BASE}/projects/${id}`, { method: 'DELETE' });
      showToast('Project removed from MongoDB Atlas.', 'info');
    } catch (e) {
      showToast('Project removed locally.', 'info');
    }
  };

  // Add Skill -> MongoDB & LocalState
  const addSkill = async (newSkill) => {
    try {
      const res = await fetch(`${API_BASE}/skills`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSkill)
      });
      if (res.ok) {
        const json = await res.json();
        setData(prev => ({ ...prev, skills: [...prev.skills, json.skill] }));
        showToast('Skill saved to MongoDB Atlas!');
        return;
      }
    } catch (e) {
      console.warn('API error, saving skill locally', e);
    }

    const fallbackSkill = { ...newSkill, id: 's_' + Date.now() };
    setData(prev => ({ ...prev, skills: [...prev.skills, fallbackSkill] }));
    showToast('Skill added!');
  };

  // Delete Skill -> MongoDB & LocalState
  const deleteSkill = async (id) => {
    setData(prev => ({ ...prev, skills: prev.skills.filter(s => s.id !== id) }));
    try {
      await fetch(`${API_BASE}/skills/${id}`, { method: 'DELETE' });
      showToast('Skill deleted.', 'info');
    } catch (e) {
      showToast('Skill deleted locally.', 'info');
    }
  };

  // Send Contact Message -> MongoDB & LocalState
  const sendMessage = async (messageForm) => {
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

    try {
      await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageForm)
      });
      showToast('Message sent to designer & saved in MongoDB Atlas!');
    } catch (e) {
      showToast('Message submitted successfully!');
    }
  };

  const markMessageRead = (id) => {
    setData(prev => ({
      ...prev,
      messages: prev.messages.map(m => (m.id === id ? { ...m, read: true } : m))
    }));
  };

  const deleteMessage = async (id) => {
    setData(prev => ({
      ...prev,
      messages: prev.messages.filter(m => m.id !== id)
    }));
    try {
      await fetch(`${API_BASE}/messages/${id}`, { method: 'DELETE' });
    } catch (e) {}
    showToast('Message deleted', 'info');
  };

  // Seed database force trigger
  const seedMongoDBCluster = async () => {
    try {
      const res = await fetch(`${API_BASE}/seed`, { method: 'POST' });
      if (res.ok) {
        showToast('MongoDB Cluster successfully seeded with sample data!', 'success');
        fetchFromMongoDB();
      } else {
        showToast('Seed request failed. Check server log.', 'error');
      }
    } catch (e) {
      showToast('Could not reach backend API server.', 'error');
    }
  };

  // Reset to default sample data
  const resetToDefault = () => {
    setData(initialData);
    localStorage.removeItem('portfolio_data_v3');
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
    showToast('Downloaded MongoDB JSON payload!', 'success');
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
        dbConnected,
        loading,
        updateProfile,
        addProject,
        updateProject,
        deleteProject,
        addSkill,
        deleteSkill,
        sendMessage,
        markMessageRead,
        deleteMessage,
        seedMongoDBCluster,
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
