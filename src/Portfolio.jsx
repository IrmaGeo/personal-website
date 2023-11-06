import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './components/ProjectCard';
import CategoryName from './components/CategoryName';
import './portfolio.css';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [categoryNames, setCategoryNames] = useState({});

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving projects:', error);
      });

    axios
      .get(`${apiUrl}/api/categories`)
      .then((response) => {
        const categoryData = {};
        response.data.forEach((category) => {
          categoryData[category.Id] = category.Name;
        });
        setCategoryNames(categoryData);
      })
      .catch((error) => {
        console.error('Error retrieving categories:', error);
      });
  }, []);

  const groupProjectsByCategory = () => {
    const groupedProjects = {};

    projects.forEach((project) => {
      if (!groupedProjects[project.CategoryId]) {
        groupedProjects[project.CategoryId] = [];
      }
      groupedProjects[project.CategoryId].push(project);
    });

    return groupedProjects;
  };

  const renderProjects = () => {
    const groupedProjects = groupProjectsByCategory();

    return Object.keys(groupedProjects).map((categoryId) => (
      <div key={categoryId} className="category-container">
      <h2> <CategoryName Id={categoryId} /> Projects</h2>
        <div className="project-list">
          {groupedProjects[categoryId].map((project) => (
            <ProjectCard key={project.Id} project={project} />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="portfolio">
      {renderProjects()}
    </div>
  );
}

export default Portfolio;
