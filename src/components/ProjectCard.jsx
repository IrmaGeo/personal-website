// ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <div className="image-container">
        <a href={project.Links} target="_blank" rel="noopener noreferrer">
          <img src={project.ImageLink} alt={project.Name} />
        </a>
      </div>
      <div className="content-container">
        console.log("ddd", {project.ImageLink})
        <h3>{project.Name}</h3>
        <h4>Problem Statement:</h4>
        <p>{project.Description}</p>
        {/* Add an image element here */}
        <h4>Tools/Libraries:</h4>
        <p>{project.Technics}</p>
        <h4>Skills:</h4>
        <p>{project.Skills}</p>
        <h4>Achievements:</h4>
        <ul>
          {project.Achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
