import React, { useState, useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import '../styles/portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects
        const projectsResponse = await fetch('/personal-website/data/projects.json');
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);

        // Fetch categories
        const categoriesResponse = await fetch('/personal-website/data/categories.json');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        // Data fetched, set loading to false
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const groupProjectsByCategory = () => {
    const groupedProjects = {};

    projects.forEach((project) => {
      const category = project.categoryId;
      if (!groupedProjects[category]) {
        groupedProjects[category] = [];
      }
      groupedProjects[category].push(project);
    });

    return groupedProjects;
  };

  const renderProjects = () => {
    const groupedProjects = groupProjectsByCategory();
  
    return Object.keys(groupedProjects).map((categoryId) => {
      const foundCategory = categories.find((category) => category.id === Number(categoryId));
      const categoryName = foundCategory?.name || '';
      return (
        <ProjectDetails
          key={categoryId} // Use categoryId directly as the key
          category={categoryName}
          projects={groupedProjects[categoryId]}
        />
      );
    });
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div className="portfolio">{renderProjects()}</div>;
};

export default Portfolio;
