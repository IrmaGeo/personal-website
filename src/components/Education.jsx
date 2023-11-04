import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';


function Education() {
  const educationData = [
    {
        degree: 'Certified',
        organization: 'Columbia Engineering Boot Camps',
        program: 'AI Engineer',
        GPA: 'A+',
        date: 'November 2023 - Current',
        location: 'New York, NY',
      },
    {
        degree: 'Certified',
        organization: 'Per Scholas',
        program:"AWS practitioner",
        GPA: 'A+',
        date: 'September 2022',
        location: 'New York, NY',
        skills: [
          'S3', 'EC2', 'Redshift', 'Glue', 'QuickSight', 'Lambda', 'SageMaker',
        ],
      },
    {
      degree: 'Master of Mathematics',
      program: 'Computer Science and Mathematics',
      GPA: '3.9',
      school: 'Ivane Javakhishvili Tbilisi State University',
      location: 'Tbilisi, Georgia',
    },
    {
      degree: 'Bachelor of Mathematics',
      program: 'Computer Science and Mathematics',
      GPA: '3.9',
      school: 'Ivane Javakhishvili Tbilisi State University',
      location: 'Tbilisi, Georgia',
    },
   
  
  ];

  return (
    <div className='education'>
      <h3>
      <FontAwesomeIcon icon={faGraduationCap} /> EDUCATION and CERTIFICATIONS</h3>

      {educationData.map((entry, index) => (
       <div key={index}>
       
       <p>
         <span className='education-degree'>{entry.degree},</span> {entry.program}, GPA: {entry.GPA} | {entry.school}, {entry.location}
         {entry.date && ` | ${entry.date}`}
         {entry.skills && (
      <p style={{ fontSize: 'smaller', fontStyle:'italic' }}>
        skills:
        {entry.skills.join(', ')}
      </p>
    )}

       </p>
     
      
     </div>
     

      ))}
    </div>
  );
}

export default Education;
