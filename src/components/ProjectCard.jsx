import React, { useState, useEffect } from 'react';
import CategoryName from './CategoryName';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectCard = ({ project, onNavigateNext, onNavigatePrevious }) => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}/api/achievements/${project.Id}`)
      .then((response) => {
        setAchievements(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching achievements:', error);
        setLoading(false);
      });
  }, []); // Run this effect when the component mounts

  return (
    <div className='project-card'>
      <div className="image-container">
        <a href={project.Links} target="_blank" rel="noopener noreferrer">
          <img src={project.ImageLink} alt={project.Name} />
        </a>
      </div>

      <div className="content-container">
        <h3>{project.Name}</h3>
        <h4>Problem Statement:</h4>
        <p>{project.Description}</p>
        <h4>Tools/Libraries:</h4>
        <p>{project.Technics}</p>
        <h4>Skills:</h4>
        <p>{project.Skills}</p>
        <h4>Achievements:</h4>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement.Name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
