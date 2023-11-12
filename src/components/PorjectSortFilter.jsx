import React from "react";

function ProjectSortFilter({ onSortChange, onFilterChange }) {
  // Implement your sorting and filtering controls here

  return (
    <div className="project-sort-filter">
      {/* Sorting options */}
      <label>Sort By: </label>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Name</option>
        <option value="date">Date</option>
        <option value="category">Category</option>
      </select>

      {/* Filtering options */}
      <label>Filter By: </label>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="data">Data</option>
        <option value="business">Business Process</option>
        <option value="technical">Technical</option>
      </select>
    </div>
  );
}

export default ProjectSortFilter;
