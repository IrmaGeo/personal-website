// Portfolio.js

import React from 'react';
import ProjectDetails from "../components/ProjectDetails"
import "../styles/portfolio.css"

const Projects = () => {
  // Hardcoded projects and categories
  const projects = [
    {
      Id: 1,
      CategoryId: 3,
      Name: 'QMATIC System',
      Description:
        'Implemented the QMATIC system with the goal to enhance customer service efficiency. The primary objectives of the project were to reduce customer service time, minimize delays, automate processes, and enhance employee capacity',
      Technics: 'Tableau,SQL, Qudini',
      Skills: 'PM (Project Management), Data Analytics, Staff Training, Process Automation',
      Achievements: [
        'Reduced customer service time from 40 minutes to 20 minutes',
        'Decreased delay periods from 1 hour to 10 minutes',
        "Automated various manual processes",
        "Increased the capacity and efficiency of employees"
      ],
      ImageLink: `${process.env.PUBLIC_URL}/resources/images/Qmatic.jpeg`

    },
    {
        Id: 2,
        CategoryId: 3,
        Name: 'Agile transformation',
        Description:"A Company with 7,000 employees (TBC BANK) needed to change its corporate culture and management methodology",
        Technics: 'Jira',
        Skills: "SAFe 5.1, Change management, Collaborative teamwork",
        Achievements: [
            "Increased project delivery rate by 30%",
            "Enhanced team efficiency by 10%",
            "Implemented agile methodologies with McKinsey for substantial organizational improvements",

        ],
      },
      {
        Id: 3,
        CategoryId: 3,
        Name: 'Multi-Currency Loan',
        Description:"Mitigated currency risk and customer dissatisfaction by introducing a multi-currency loan product with fixed monthly payments",
        Technics: '',
        Skills: "Financial Analysis, Product Development, Risk Management, Customer Satisfaction",
        Achievements: [
            "Reduced portfolio risk with fixed payments",
            "Increased sales by 3%",
            "Implemented agile methodologies with McKinsey for substantial organizational improvements",

        ],
      },
      {
        Id: 4,
        CategoryId: 2,
        Name: 'Loan Management System(LMS)',
        Description:"",
        Technics: '',
        Skills: "",
        Achievements: [

        ],
      },
      {
        Id: 5,
        CategoryId: 2,
        Name: 'Personal Website',
        Description:"",
        Technics: '',
        Skills: "",
        Achievements: [

        ],
      },
      {
        Id: 6,
        CategoryId: 2,
        Name: 'Data Migration',
        Description:"",
        Technics: '',
        Skills: "",
        Achievements: [

        ],
      },
      {
        Id: 7,
        CategoryId: 2,
        Name: 'Emoployee Tracker',
        Description:"",
        Technics: '',
        Skills: "",
        Achievements: [

        ],
      },
  ];

  const categoryNames = {
    1: 'Data',
    2: 'Technical',
    3: 'Business',
    // Add more categories as needed
  };

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
      <ProjectDetails
        key={categoryId}
        category={categoryNames[categoryId]}
        projects={groupedProjects[categoryId]}
      />
    ));
  };

  return <div className="portfolio">{renderProjects()}</div>;
};

export default Projects;
