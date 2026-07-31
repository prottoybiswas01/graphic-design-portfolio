import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  X,
  LayoutDashboard,
  FolderKanban,
  Cpu,
  UserCheck,
  MessageSquare,
  Database,
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  Download,
  Lock,
  RefreshCw,
  Sparkles,
  Save
} from 'lucide-react';

export const AdminPanel = ({ isOpen, onClose }) => {
  const {
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
    markMessageRead,
    deleteMessage,
    resetToDefault,
    exportMongoDBJSON,
    showToast
  } = usePortfolio();

  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Edit Profile Form state
  const [profileForm, setProfileForm] = useState(data.profile);

  // Add/Edit Project Form state
  const [projectEditingId, setProjectEditingId] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'Branding',
    description: '',
    image: '',
    client: '',
    date: '',
    link: '',
    tags: ''
  });

  // Add Skill Form state
  const [skillForm, setSkillForm] = useState({
    name: '',
    category: 'Software',
    level: 90,
    icon: 'PenTool',
    color: '#8B5CF6'
  });

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginAdmin(passwordInput);
    setPasswordInput('');
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    const tagsArray = typeof projectForm.tags === 'string'
      ? projectForm.tags.split(',').map(t => t.trim()).filter(Boolean)
      : projectForm.tags;

    if (projectEditingId) {
      updateProject(projectEditingId, { ...projectForm, tags: tagsArray });
      setProjectEditingId(null);
    } else {
      addProject({ ...projectForm, tags: tagsArray });
    }

    setProjectForm({
      title: '',
      category: 'Branding',
      description: '',
      image: '',
      client: '',
      date: '',
      link: '',
      tags: ''
    });
  };

  const handleEditProjectClick = (p) => {
    setProjectEditingId(p.id);
    setProjectForm({
      title: p.title,
      category: p.category,
      description: p.description,
      image: p.image,
      client: p.client || '',
      date: p.date || '',
      link: p.link || '',
      tags: p.tags?.join(', ') || ''
    });
  };

  const handleSaveSkill = (e) => {
    e.preventDefault();
    if (!skillForm.name) return;
    addSkill(skillForm);
    setSkillForm({
      name: '',
      category: 'Software',
      level: 90,
      icon: 'PenTool',
      color: '#8B5CF6'
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: 'var(--bg-surface)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '18px 28px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--gradient-primary)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <UserCheck size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                Portfolio Admin Management Portal
              </h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-secondary)' }}>
                {isAdmin ? 'Authenticated Session Active' : 'Enter Admin Password to Unlock'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {isAdmin && (
              <button
                onClick={logoutAdmin}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: 'rgba(244, 63, 94, 0.15)',
                  color: 'var(--accent-rose)',
                  border: '1px solid rgba(244, 63, 94, 0.3)'
                }}
              >
                Logout
              </button>
            )}
            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Login Guard Screen if not Admin */}
        {!isAdmin ? (
          <div style={{ padding: '60px 30px', textAlign: 'center', maxWidth: '440px', margin: '0 auto' }}>
            <Lock size={48} color="var(--accent-primary)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Admin Authentication</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Enter your portfolio management password to access the admin portal.
            </p>

            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                type="password"
                placeholder="Enter password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                style={{
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  textAlign: 'center'
                }}
              />
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                Unlock Admin Dashboard <UserCheck size={18} />
              </button>
            </form>
          </div>
        ) : (
          /* Main Admin Interface */
          <div className="admin-main-container" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            {/* Sidebar Navigation */}
            <div
              className="admin-sidebar"
              style={{
                width: '230px',
                borderRight: '1px solid var(--border-color)',
                padding: '20px 12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                background: 'rgba(0, 0, 0, 0.15)',
                flexShrink: 0
              }}
            >
              {[
                { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
                { id: 'profile', label: 'Edit Profile & Bio', icon: <Edit3 size={18} /> },
                { id: 'projects', label: `Projects (${data.projects.length})`, icon: <FolderKanban size={18} /> },
                { id: 'skills', label: `Skills (${data.skills.length})`, icon: <Cpu size={18} /> },
                { id: 'messages', label: `Messages (${data.messages.filter(m => !m.read).length})`, icon: <MessageSquare size={18} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    background: activeTab === tab.id ? 'var(--gradient-primary)' : 'transparent',
                    color: activeTab === tab.id ? '#ffffff' : 'var(--text-secondary)',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content Tab Panel */}
            <div className="admin-content-panel" style={{ flex: 1, padding: '28px', overflowY: 'auto' }}>
              {/* Tab 1: Dashboard Overview */}
              {activeTab === 'dashboard' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Portfolio Overview & Stats</h3>

                  <div className="admin-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
                    <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Total Projects</div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                        {data.projects.length}
                      </div>
                    </div>

                    <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Total Skills</div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>
                        {data.skills.length}
                      </div>
                    </div>

                    <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Received Inquiries</div>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-rose)' }}>
                        {data.messages.length}
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)' }}>
                    <h4 style={{ marginBottom: '12px' }}>NSD Level 3 Assessment Info</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      This admin portal gives you 100% full control over your portfolio website. All changes are saved live into persistent local state and can be exported as a MongoDB JSON collection at any time!
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Edit Profile & Hero */}
              {activeTab === 'profile' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Edit Profile & Hero Banner Info</h3>

                  <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="admin-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Name</label>
                        <input
                          type="text"
                          value={profileForm.name}
                          onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Professional Title</label>
                        <input
                          type="text"
                          value={profileForm.title}
                          onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Hero Bio / Summary</label>
                      <textarea
                        rows={3}
                        value={profileForm.heroBio}
                        onChange={(e) => setProfileForm({ ...profileForm, heroBio: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                      />
                    </div>

                    <div className="admin-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Email</label>
                        <input
                          type="text"
                          value={profileForm.email}
                          onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Phone</label>
                        <input
                          type="text"
                          value={profileForm.phone}
                          onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Location</label>
                        <input
                          type="text"
                          value={profileForm.location}
                          onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                      Save Profile Changes <Save size={16} />
                    </button>
                  </form>
                </div>
              )}

              {/* Tab 3: Manage Projects */}
              {activeTab === 'projects' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>
                    {projectEditingId ? 'Edit Project' : 'Add New Portfolio Project'}
                  </h3>

                  {/* Add / Edit Form */}
                  <form onSubmit={handleSaveProject} className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '30px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Project Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Modern Brand Logo Kit"
                          value={projectForm.title}
                          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Category</label>
                        <select
                          value={projectForm.category}
                          onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: '#fff' }}
                        >
                          <option value="Branding">Branding</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Banners & Social">Banners & Social</option>
                          <option value="Vector Art">Vector Art</option>
                          <option value="Print & Marketing">Print & Marketing</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Description *</label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Detailed project explanation..."
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                      <div>
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Image URL</label>
                        <input
                          type="text"
                          placeholder="https://..."
                          value={projectForm.image}
                          onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Live Showcase Link</label>
                        <input
                          type="text"
                          placeholder="https://behance.net..."
                          value={projectForm.link}
                          onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tags (comma separated)</label>
                        <input
                          type="text"
                          placeholder="Figma, UI, Branding"
                          value={projectForm.tags}
                          onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button type="submit" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                        {projectEditingId ? 'Update Project' : 'Add Project'} <Plus size={16} />
                      </button>
                      {projectEditingId && (
                        <button
                          type="button"
                          className="btn-secondary"
                          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                          onClick={() => {
                            setProjectEditingId(null);
                            setProjectForm({ title: '', category: 'Branding', description: '', image: '', client: '', date: '', link: '', tags: '' });
                          }}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Existing Projects Table/List */}
                  <h4 style={{ marginBottom: '14px' }}>Existing Portfolio Projects ({data.projects.length})</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {data.projects.map((p) => (
                      <div
                        key={p.id}
                        className="glass-panel"
                        style={{
                          padding: '14px 20px',
                          borderRadius: 'var(--radius-sm)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <img
                            src={p.image}
                            alt=""
                            style={{ width: '45px', height: '45px', borderRadius: '8px', objectFit: 'cover' }}
                          />
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{p.title}</div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--accent-secondary)' }}>{p.category}</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => handleEditProjectClick(p)}
                            style={{ padding: '6px', color: 'var(--accent-primary)' }}
                          >
                            <Edit3 size={18} />
                          </button>
                          <button
                            onClick={() => deleteProject(p.id)}
                            style={{ padding: '6px', color: 'var(--accent-rose)' }}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Manage Skills */}
              {activeTab === 'skills' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Manage Technical Skills & Tools</h3>

                  <form onSubmit={handleSaveSkill} className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '30px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Skill Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Adobe InDesign"
                          value={skillForm.name}
                          onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: '#fff' }}
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Category</label>
                        <select
                          value={skillForm.category}
                          onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: '#fff' }}
                        >
                          <option value="Software">Software</option>
                          <option value="Core Skill">Core Skill</option>
                          <option value="Theory">Theory</option>
                          <option value="Print">Print</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Level % ({skillForm.level}%)</label>
                        <input
                          type="range"
                          min="50"
                          max="100"
                          value={skillForm.level}
                          onChange={(e) => setSkillForm({ ...skillForm, level: parseInt(e.target.value) })}
                          style={{ width: '100%', marginTop: '10px' }}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                      Add Skill <Plus size={16} />
                    </button>
                  </form>

                  {/* Skills List */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {data.skills.map((s) => (
                      <div key={s.id} className="glass-panel" style={{ padding: '12px 18px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{s.name} ({s.level}%)</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.category}</div>
                        </div>
                        <button onClick={() => deleteSkill(s.id)} style={{ color: 'var(--accent-rose)', padding: '4px' }}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: Messages Inbox */}
              {activeTab === 'messages' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Inquiries & Client Messages ({data.messages.length})</h3>

                  {data.messages.length === 0 ? (
                    <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px 0' }}>No messages in inbox.</div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {data.messages.map((m) => (
                        <div
                          key={m.id}
                          className="glass-panel"
                          style={{
                            padding: '20px',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: `4px solid ${m.read ? 'var(--border-color)' : 'var(--accent-primary)'}`
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <div>
                              <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>{m.name}</span>
                              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginLeft: '10px' }}>({m.email})</span>
                            </div>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.date}</span>
                          </div>

                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-secondary)', marginBottom: '8px' }}>
                            Service: {m.service}
                          </div>

                          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
                            "{m.message}"
                          </p>

                          <div style={{ display: 'flex', gap: '10px' }}>
                            {!m.read && (
                              <button
                                onClick={() => markMessageRead(m.id)}
                                style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
                              >
                                <CheckCircle size={14} /> Mark Read
                              </button>
                            )}
                            <button
                              onClick={() => deleteMessage(m.id)}
                              style={{ fontSize: '0.8rem', color: 'var(--accent-rose)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
                            >
                              <Trash2 size={14} /> Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admin-main-container {
            flex-direction: column !important;
            overflow-y: auto !important;
          }
          .admin-sidebar {
            width: 100% !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border-color) !important;
            padding: 8px !important;
          }
          .admin-content-panel {
            padding: 16px !important;
          }
          .admin-grid-2, .admin-grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
