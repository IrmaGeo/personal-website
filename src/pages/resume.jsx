import React from 'react';
import ResumeActions from "../components/ResumeActions";
import Skills from '../components/Skills';
import Experience from '../components/Experiance';
import Education from '../components/Education';
import ContactInfo from '../components/ContactInfo';
import "../styles/resume.css";



function Resume() {
  const email = 'modzgvrishviliirma@gmail.com';
  const phone = '(347) 641-1970';
  const github = 'https://github.com/IrmaGeo';
  const linkedin = 'https://www.linkedin.com/in/irmamodzgvrishvili';

  return (
    <div className='resume'>
      <ResumeActions />

      <h1>IRMA MODZGVRISHVILI </h1>
      <h4> Data Scientist | Data Engineer</h4>
      

      <ContactInfo
        email={email}
        phone={phone}
        github={github}
        linkedin={linkedin}
      />

      <Skills />
      <Experience />
      <Education />
    </div>
  );
}


export default Resume;
