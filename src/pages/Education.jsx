import React from 'react';

const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Jawaharlal Nehru Engineering College, MGM University',
    location: 'Chh. Sambhajinagar, India',
    year: '2024 – 2026',
    note: 'SGPA: 8.47 (3rd Semester)',
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Hi-tech College of Management & Computer Science, BAMU University',
    location: 'Chh. Sambhajinagar, India',
    year: '2021 – 2024',
    note: 'CGPA: 7.05',
  },
  {
    id: 3,
    degree: 'HSC (12th) — PCM',
    institution: 'Saraswati Intermediate College, U.P. State Board',
    location: 'Prayagraj, India',
    year: '2019 – 2021',
    note: 'Percentage: 72%',
  },
  {
    id: 4,
    degree: 'SSC (10th)',
    institution: 'Eureka Infosys School, M.H. State Board',
    location: 'Chh. Sambhajinagar, India',
    year: '2019',
    note: 'Percentage: 77%',
  },
];

const certifications = [
  'Statistics for Data Science',
  'Complete Django Framework',
  'Complete Scikit-learn for Machine Learning',
];

const achievements = [
  '5-Star HackerRank SQL',
  '1st Place — Department Glance',
  'First Prize — Speech Competition',
];

export default function Education() {
  return (
    <div>
      <div className="page-header">
        <h2>Education</h2>
      </div>

      {education.map(edu => (
        <div className="education-item" key={edu.id}>
          <div className="education-header">
            <h3 className="education-degree">{edu.degree}</h3>
            <span className="education-year">{edu.year}</span>
          </div>
          <p className="education-institution">{edu.institution}</p>
          <p style={{ color: '#6e6e73', fontSize: '14px', marginTop: '4px' }}>
            {edu.location} &nbsp;·&nbsp; {edu.note}
          </p>
        </div>
      ))}

      <div style={{ marginTop: '80px' }}>
        <h2>Certifications &amp; Achievements</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', maxWidth: '800px' }}>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#1d1d1f' }}>Certifications</h3>
            {certifications.map(cert => (
              <div className="skill-item" key={cert}>
                <span className="skill-name">{cert}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#1d1d1f' }}>Achievements</h3>
            {achievements.map(ach => (
              <div className="skill-item" key={ach}>
                <span className="skill-name">{ach}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
