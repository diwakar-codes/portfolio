import React, { useState } from 'react';

// Get your free key at https://web3forms.com → enter rajputdiwakar2002@gmail.com → check inbox
const ACCESS_KEY = 'YOUR_WEB3FORMS_KEY';

export default function Contact() {
  const [form, setForm] = useState({ email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'New message from your portfolio',
          from_name: 'Portfolio Visitor',
          replyto: form.email,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
      if (data.success) setForm({ email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Get in Touch</h2>
      </div>

      {status === 'success' && (
        <div className="contact-form">
          <div className="message-box">
            Message sent! I&apos;ll get back to you soon.
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="contact-form">
          <div className="message-box" style={{ borderColor: '#ff3b30' }}>
            Something went wrong. Email me directly at{' '}
            <a href="mailto:rajputdiwakar2002@gmail.com" style={{ color: '#0066cc' }}>
              rajputdiwakar2002@gmail.com
            </a>
          </div>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === 'sending' || status === 'success'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="What would you like to say?"
            value={form.message}
            onChange={handleChange}
            required
            disabled={status === 'sending' || status === 'success'}
          />
        </div>

        <button
          type="submit"
          className="form-button"
          disabled={status === 'sending' || status === 'success'}
          style={{
            opacity: status === 'sending' || status === 'success' ? 0.6 : 1,
            cursor: status === 'sending' || status === 'success' ? 'not-allowed' : 'pointer',
          }}
        >
          {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent ✓' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
