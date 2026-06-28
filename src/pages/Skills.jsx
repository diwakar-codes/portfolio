import React from 'react';

const skillGroups = [
  {
    category: 'Programming & Scripting',
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Intermediate' },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    skills: [
      { name: 'Pandas', level: 'Expert' },
      { name: 'NumPy', level: 'Expert' },
      { name: 'Matplotlib', level: 'Intermediate' },
      { name: 'Scikit-learn', level: 'Intermediate' },
      { name: 'spaCy', level: 'Intermediate' },
      { name: 'FastAPI', level: 'Intermediate' },
      { name: 'LangChain', level: 'Intermediate' },
      { name: 'LangGraph', level: 'Beginner' },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 'Intermediate' },
      { name: 'Jupyter Notebook', level: 'Expert' },
      { name: 'Google Colab', level: 'Expert' },
      { name: 'Tableau', level: 'Intermediate' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Postman', level: 'Intermediate' },
    ],
  },
  {
    category: 'Core Concepts',
    skills: [
      { name: 'Predictive Modeling', level: 'Intermediate' },
      { name: 'Machine Learning', level: 'Intermediate' },
      { name: 'Natural Language Processing', level: 'Intermediate' },
      { name: 'Data Pipelines', level: 'Intermediate' },
      { name: 'Data Visualization', level: 'Intermediate' },
      { name: 'Statistics', level: 'Intermediate' },
      { name: 'Deep Learning', level: 'Beginner' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Team Collaboration', level: '' },
      { name: 'Problem-Solving', level: '' },
      { name: 'Time Management', level: '' },
      { name: 'Adaptability', level: '' },
      { name: 'Communication', level: '' },
    ],
  },
];

export default function Skills() {
  return (
    <div>
      <div className="page-header">
        <h2>Skills</h2>
      </div>

      {skillGroups.map(group => (
        <div key={group.category} className="skills-list">
          <h3 className="skills-category-title">{group.category}</h3>
          {group.skills.map(skill => (
            <div className="skill-item" key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              {skill.level && <span className="skill-level">{skill.level}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
