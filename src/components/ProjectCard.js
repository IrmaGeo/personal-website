import React, { useState, useEffect } from 'react';
import CategoryName from './CategoryName';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectCard = ({ project, onNavigateNext, onNavigatePrevious }) => {
  const [expanded, setExpanded] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    if (!expanded) {
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
    }
  };

  return (
    <div className={`project-card ${expanded ? 'expanded' : ''}`}>
      <h3 onClick={toggleExpanded}>{project.Name}</h3>

      {project.Links ? (
        <a href={project.Links} target="_blank" rel="noopener noreferrer">
          <img src={project.ImageLink} alt={project.Name} />
        </a>
      ) : (
        <img src={project.ImageLink} alt={project.Name} />
      )}

      <div className="nav-container">
        <div
          id="navl"
          class="nav nofocus"
          tabindex="0"
          role="button"
          onClick={onNavigatePrevious}
        >
          <span class="icon" title="Previous project result"></span>
        </div>

        <div
          id="navr"
          class="nav nofocus"
          tabindex="0"
          role="button"
          onClick={onNavigateNext}
        >
          <span class="icon" title="Next project result"></span>
        </div>
      </div>

      {expanded && (
        <div>
          <h4>Problem Statement:</h4>
          <p>{project.Description}</p>
          <h4>Tools/Libraries:</h4>
          <p>{project.Technics}</p>
          <h4>Skills:</h4>
          <p>{project.Skills}</p>
          <h4>Achievements:</h4>
          {loading ? (
            <p>Loading achievements...</p>
          ) : (
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement.Name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
