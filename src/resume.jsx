import React from 'react';
import ResumeActions from './ResumeActions';
import Skills from './components/Skills'; // Import the Skills component
import Experience from './components/Experiance';
import Education from './components/Education';
import './resume.css';

function Resume() {
  return (
    <div className='resume'>
      <ResumeActions />

      <h1>IRMA MODZGVRISHVILI</h1>
      <p>Data Scientist | Machine Learning | NLP | SQL | Tableau | AWS | Python | Data Visualization | Deep Learning</p>
      <p>modzgvrishviliirma@gmail.com ● (347) 641-1970</p>

      <Skills />
      <Experience />
      <Education/>

    </div>
  );
}

export default Resume;
