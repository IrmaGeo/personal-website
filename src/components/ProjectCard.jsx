// ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  const fullImageUrl = `${process.env.REACT_APP_PUBLIC_URL}${project.image}`;

  return (
    <div className='project-card'>
      <div className="image-container">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <img src={fullImageUrl} alt={project.name} />
        </a>
      </div>
      <div className="content-container">
        <h3>{project.name}</h3>
        <h4>Problem Statement:</h4>
        <p>{project.description}</p>
        {/* Add an image element here */}
        <h4>Tools/Libraries:</h4>
        <p>{project.tools}</p>
        <h4>Skills:</h4>
        <p>{project.skills}</p>
        <h4>Achievements:</h4>
        <ul>
          {project.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
