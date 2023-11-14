// src/pages/Resume.js
import React from 'react';
import ResumeActions from '../components/ResumeActions';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ContactInfo from '../components/ContactInfo';
import Experience from '../components/Experiance';
import '../styles/resume.css';

function Resume() {
  const dataPaths = {
    contactInfo: '/data/contactInfo.json',
    experiences: '/data/experiences.json',
    education: '/data/education.json',
    skills: '/data/skills.json' // Add the path to skills data
  };

  return (
    <div className='resume'>
      <ResumeActions />

      <h1>IRMA MODZGVRISHVILI </h1>
      <h4> Data Scientist | Data Engineer</h4>

      <ContactInfo dataPath={dataPaths.contactInfo} />

      <Skills dataPath={dataPaths.skills} />
      <Experience dataPath={dataPaths.experiences} />
      <Education dataPath={dataPaths.education} />
    </div>
  );
}

export default Resume;
