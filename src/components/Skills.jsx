import React from 'react';

function Skills() {
  const skillGroups = [
    {
      group: 'Programming Languages',
      items: [
        'Python',
        'SQL (PostgreSQL, MySQL)',
        'Python Libraries (numpy, pandas, scikit-learn, streamlit, matplotlib, Pytorch, Seaborn, ONNX, Sqlalchemy)',
        'Javascript',
        'HTML',
        'CSS',
      ],
    },
    {
      group: 'Machine Learning (ML)',
      items: [
        'Linear and Logistic Regression',
        'Random Forests',
        'PCA',
        'Gradient Boosting',
        'K-means',
        'Deep Learning',
        'NLP (nltk, SpaCy, Word2Vec, GloVe, TF-IDF)',
        'Time Series Forecasting (Facebook Prophet, SARIMA models)',
        'PyTorch',
        'TensorFlow 2.0',
        'HuggingFace',
        'PyCaret',
      ],
    },
    {
      group: 'Data',
      items: [
        'Data Visualization (Tableau, AWS QuickSight, Vizro, Atoti)',
        'Processing Large Data Sets',
        'A/B testing',
        'Experimentation',
        'Distributed Computing (PySpark)',
        'Product Analytics',
      ],
    },
    {
      group: 'Cloud Computing',
      items: [
        'Amazon Web Services (AWS)',
        'EMR, EC2, S3',
        'SageMaker, AWS Glue, BigQuery',
        'Docker, Docker Compose, Git',
        'Model Orchestration (Mage AI)',
      ],
    },
  ];

  return (
    <div className='skills'>
      <h3>SKILLS</h3>
      <ul>
        {skillGroups.map((group, groupIndex) => (
          <li key={groupIndex}>
            <div className='skill-group'>
              <span className='skills-group'>{group.group}:</span>
              <span>{group.items.join(', ')}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
