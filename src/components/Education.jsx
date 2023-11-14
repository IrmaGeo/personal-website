// src/components/Education.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education({ dataPath }) {
  const [educationData, setEducationData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + dataPath);
        const data = await response.json();
        setEducationData(data);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchData();
  }, [dataPath]);

  return (
    <div className='education'>
      <h3>
        <FontAwesomeIcon icon={faGraduationCap} /> EDUCATION and CERTIFICATIONS
      </h3>

      {educationData.map((entry, index) => (
        <div key={index}>
          <p className='education-details'>
            <span className='education-degree'>{entry.degree},</span> {entry.program}, GPA: {entry.GPA} | {entry.school}, {entry.location}
            {entry.date && ` | ${entry.date}`}
            {entry.skills && (
              <p style={{ fontSize: 'smaller', fontStyle:'italic' }}>
                skills: {entry.skills.join(', ')}
              </p>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Education;
