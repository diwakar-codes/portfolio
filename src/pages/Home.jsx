import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const roles = [
  'Data Analyst',
  'Data Scientist',
  'Software Engineer',
  'Backend Developer',
];

const linkedinPosts = [
  '7372552471035961344',
  '7415036541376573440',
  '7340284008175411200',
  '7442495328328523776',
];

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let speed;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        speed = 100;
        const t = setTimeout(() => setCharIndex(c => c + 1), speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsDeleting(true), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        speed = 50;
        const t = setTimeout(() => setCharIndex(c => c - 1), speed);
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    }

    setDisplayText(currentRole.substring(0, charIndex));
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    setDisplayText(roles[roleIndex].substring(0, charIndex));
  }, [charIndex, roleIndex]);

  return (
    <div>
      <div className="hero">
        <h1>Diwakar Singh</h1>

        <div className="typing-container">
          <span className="typing-text">{displayText}</span>
          <span className="cursor" />
        </div>

        <p className="subtitle">
          Software Engineer with hands-on expertise in building data-driven applications,
          end-to-end ML pipelines, and scalable REST APIs. Passionate about transforming
          complex datasets into intelligent, production-ready systems.
        </p>

        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
        </div>
      </div>

      <section className="linkedin-section" aria-label="LinkedIn Updates">
        <h2 className="linkedin-heading">LinkedIn Updates</h2>
        <div className="linkedin-grid">
          {linkedinPosts.map(id => (
            <div className="linkedin-card" key={id}>
              <iframe
                src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}`}
                width="100%"
                height="480"
                frameBorder="0"
                allowFullScreen
                title={`LinkedIn post ${id}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <h2>Resume</h2>
        <p className="subtitle">
          Download my latest resume to explore my full experience, projects, and skills.
        </p>
        <a
          href="/Diwakar_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
