import React from 'react';
import ProjectCard from './ProjectCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectDetails = ({ category, projects }) => {

  return (
    <div className="category-container">
      <h2>{category} Projects</h2>
      <Carousel
        showArrows
        infiniteLoop
        showThumbs={false}
        interval={5000}
        stopOnHover={false}
        className="custom-carousel"
      >
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectDetails;
