
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

export default Projects;
