import React, { useState, useEffect } from 'react';
import CategoryName from './CategoryName';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;


const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(false);


  const toggleExpanded = () => {
    setExpanded(!expanded);
    if (!expanded) {
      // When expanding, fetch achievements for the project
      setLoading(true);
      axios
        .get(`${apiUrl}/api/achievements/${project.Id} `)
        .then((response) => {
          setAchievements(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching achievements:', error);
          setLoading(false);
        });
    }
  };

  return (
    <div className={`project-card ${expanded ? 'expanded' : ''}`}>
      <img src={project.ImageLink} alt={project.Name} />
      <h3>{project.Name}</h3>
      <p>Technics: {project.Technics}</p>
      <button onClick={toggleExpanded}>
        {expanded ? 'more...' : 'more...'}
      </button>
      {expanded && (
        <div>
          {loading ? (
            <p>Loading achievements...</p>
          ) : (
            <ul>Achievements:
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement.Name}</li>
      
              ))};
            </ul>
            
          )};
          <p>Description: {project.Description}</p>

        </div>
      )};
    </div>
  );
};

export default ProjectCard;
