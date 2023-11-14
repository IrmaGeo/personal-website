// src/components/Experience.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Experience({ dataPath }) {
  const [experiences, setExperiences] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + dataPath);
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchData();
  }, [dataPath]);

  return (
    <div className='experience'>
      <h3>
        <FontAwesomeIcon icon={faBriefcase} /> PROFESSIONAL EXPERIENCE
      </h3>

      {experiences.map((experience, index) => (
        <div key={index}>
          <p>
            <span className="experience-title">{experience.title}</span>,{' '}
            <span className="experience-company">{experience.company}</span> |{' '}
            <span className="experience-date">{experience.date}</span> |{' '}
            <span className="experience-location">{experience.location}</span>
          </p>
          <ul>
            {experience.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
