import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Human Resource and Workforce Analytics',
    company: 'Paarsh Infotech Pvt. Ltd.',
    duration: 'Jan 2026 – May 2026',
    tech_stack: 'Python · Scikit-learn · OpenCV · PostgreSQL · Pandas',
    points: [
      'Built an attrition prediction model on the IBM HR Analytics Employee Attrition Dataset achieving 88% accuracy using Random Forest and Scikit-learn.',
      'Developed an automated attendance and leave management system using OpenCV for face-based check-ins with real-time leave tracking and approval workflows.',
      'Designed interactive workforce analytics dashboards to surface attrition risk, headcount trends, and leave patterns for HR decision-making.',
    ],
    github_link: 'https://github.com/diwakar-codes',
  },
  {
    id: 2,
    title: 'AI-Powered Quiz Generator from PDF with Performance Analytics',
    company: null,
    duration: 'Jul 2025 – Oct 2025',
    tech_stack: 'Python · Gemini API · spaCy · Scikit-learn · Streamlit · Firebase',
    points: [
      'Achieved 90% quiz relevance accuracy by integrating the Gemini API with custom NLP pipelines using spaCy and Scikit-learn to extract and classify content from PDF inputs.',
      'Improved student performance tracking by 40% by building real-time sentiment analysis and analytics dashboards powered by Streamlit and a Firebase backend.',
      'Implemented adaptive difficulty scoring so generated questions align with the cognitive complexity of the source material.',
    ],
    github_link: 'https://github.com/diwakar-codes',
  },
  {
    id: 3,
    title: 'Handsign Learning Application',
    company: null,
    duration: 'Jan 2025 – Apr 2025',
    tech_stack: 'TensorFlow Lite · Google ML Kit · Android · Java',
    points: [
      'Reached 92% hand-sign recognition accuracy by training a TensorFlow Lite deep learning model integrated with Google ML Kit for real-time on-device inference on Android.',
      'Enhanced learning outcomes by 35% by incorporating text translation and video tutorial features, validated through user testing across 50+ sessions.',
      'Optimized the model for mobile deployment, reducing inference latency while maintaining recognition accuracy.',
    ],
    github_link: 'https://github.com/diwakar-codes',
  },
];

export default function Projects() {
  return (
    <div>
      <div className="page-header">
        <h2>Projects</h2>
      </div>

      {projects.map(project => (
        <article className="project-item" key={project.id}>
          <h3 className="project-title">{project.title}</h3>
          {project.company && (
            <p style={{ color: '#1d1d1f', fontSize: '15px', marginBottom: '4px', fontWeight: '500' }}>
              {project.company}
            </p>
          )}
          <p className="project-tech">{project.duration} &nbsp;·&nbsp; {project.tech_stack}</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
            {project.points.map((point, i) => (
              <li key={i} className="project-description" style={{ marginBottom: '8px' }}>
                {point}
              </li>
            ))}
          </ul>
          {project.github_link && (
            <a
              href={project.github_link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
