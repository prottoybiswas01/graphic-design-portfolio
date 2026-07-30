import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact = () => {
  const { sendMessage } = usePortfolio();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'UI/UX Design',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill out all required fields.');
      return;
    }

    sendMessage(form);
    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      phone: '',
      service: 'UI/UX Design',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            Contact me
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Cultivate your audience with targeted digital solutions
          </p>
        </div>

        {/* Form Container */}
        <div>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', background: '#1E1E1E', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#FD6F00', marginBottom: '8px' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Thank you for reaching out. Your message has been received.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    background: '#1E1E1E',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />

                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    background: '#1E1E1E',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input
                  type="text"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    background: '#1E1E1E',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />

                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    background: '#1E1E1E',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                >
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Web Design">Web Design</option>
                  <option value="App Design">App Design</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Brand Identity">Brand Identity</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={5}
                  required
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    background: '#1E1E1E',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    background: '#FD6F00',
                    color: '#FFFFFF',
                    padding: '12px 42px',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                >
                  Contact
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

