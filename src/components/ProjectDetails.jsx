// ProjectDetails.js

import React from 'react';
import ProjectCard from './ProjectCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectDetails = ({ category, projects }) => (
  <div className="category-container">
    <h2>{category} Projects</h2>
    <Carousel
      showArrows
      infiniteLoop
      showThumbs={false}
      autoPlay
      interval={5000}
      stopOnHover={false}
      className="custom-carousel"
    >
      {projects.map((project) => (
        <ProjectCard key={project.Id} project={project} />
      ))}
    </Carousel>
  </div>
);

export default ProjectDetails;
