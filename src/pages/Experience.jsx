import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Software Development Engineer Intern',
    company: 'miniOrange Security Software Pvt. Ltd.',
    duration: 'April 2026 – Present',
    points: [
      'Researched and developed proof-of-concept agentic AI systems using LLMs, RAG, and tool-calling architectures to automate enterprise workflows.',
      'Built scalable backend services and REST APIs in Python and FastAPI for integrating AI-driven automation into internal business processes.',
      'Developed a middleware payroll automation platform integrating Zoho People and Zoho Payroll to streamline employee reimbursement and payroll record management.',
      'Implemented OCR-based document processing pipelines for automated extraction and validation of reimbursement bills and payroll-related records.',
      'Worked on AI-driven document classification and anomaly detection systems to identify inconsistent claims, duplicate entries, and payroll irregularities.',
      'Reduced manual intervention by consolidating payroll, reimbursement verification, and approval workflows into a centralized platform.',
    ],
  },
  {
    id: 2,
    role: 'Data Science Intern',
    company: 'Paarsh Infotech Pvt. Ltd.',
    duration: '6 Months',
    points: [
      'Improved predictive analysis accuracy by 15% by developing and tuning ML models for business insight generation using Python, Scikit-learn, and SQL optimization techniques.',
      'Accelerated reporting turnaround by 30% by building interactive dashboards in Power BI and Tableau, translating complex data pipelines into stakeholder-ready visualizations.',
      'Enhanced data pipeline efficiency by 20% by performing systematic data preprocessing, feature engineering, and exploratory analysis using Pandas, NumPy, and Matplotlib.',
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <div className="page-header">
        <h2>Experience</h2>
      </div>

      {experiences.map(exp => (
        <article className="experience-item" key={exp.id}>
          <h3 className="experience-header">{exp.role}</h3>
          <div className="experience-meta">
            <span>{exp.company}</span>
            <span>{exp.duration}</span>
          </div>
          <ul style={{ paddingLeft: '20px', marginTop: '0' }}>
            {exp.points.map((point, i) => (
              <li key={i} className="experience-description" style={{ marginBottom: '10px' }}>
                {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
