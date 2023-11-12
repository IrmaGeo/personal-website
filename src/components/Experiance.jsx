import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


function Experience() {
  const experiences = [
    {
      title: 'Data Scientist',
      company: 'TBC BANK',
      location: 'Tbilisi, Georgia',
      date: 'February 2022 - Current',
      description: [
        'Created a customer propensity scoring model utilizing ML gradient boosting (xgboost) to identify critical site features, which was then leveraged by the digital team to enhance the website and improve conversion rates.',
        'Combined SQL and Tableau for ad hoc data analysis of payment methods visualized in a dashboard that delivered data-driven insights which were leveraged by the digital marketing team on a daily basis.',
        'Utilized Pytorch and product data to train a neural network to produce product embeddings, which were leveraged for a recommendation system on website product pages - increasing page views for the recommended products by ~2-6%.',
        'Leveraged an artificial neural network in statistical modeling of repeat purchase behavior which accurately predicted second purchases with a 97% test accuracy rate, enabling the organization to improve customer retention by ~4%.',
      ],
    },
    {
      title: 'System Analyst',
      company: 'TBC BANK',
      location: 'Tbilisi, Georgia',
      date: 'May 2018 - February 2022',
      description: [
        'Upgraded SDLC by implementing Agile methodology, reducing software development time by 30% and reducing customer-reported bugs by 25% over 9 months.',
        'Orchestrated successful data migrations and optimized processes, securing $1 million in vendor discounts within 4 months.',
        'Created and developed predictive models using statistical analysis and SQL to forecast sales and revenue; improved forecasting accuracy by 20% over 1 month and helped the company make data-driven sales decisions.',
        'Engineered automated solutions for 10+ manual processes and automated 10+ processes, reducing manual errors by 50% and saving 40+ hours of work per week for the business operation team.',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'TBC BANK',
      location: 'Tbilisi, Georgia',
      date: 'December 2014 - May 2018',
      description: [
        'Built a real-time data and reporting system using SQL, Tableau, Access, and Excel, reducing report time by 25% and enabling data-driven decisions by senior management, leading to a 20% revenue increase.',
        'Formulated machine learning models to forecast customer demand and optimized inventory management, achieved an outstanding 60% reduction in inventory shortages, leading to a remarkable increase in revenue by $500K within a 6-month period.',
        'Deployed new tools, ETL, and middleware, while improving customer value-based pricing by 13% through a long-term experiment.',
      ],
    },
    // Add more experiences here
  ];

  return (
    <div className='experience'>
      <h3>
      <FontAwesomeIcon icon={faBriefcase} /> PROFESSIONAL EXPERIENCE</h3>

      {experiences.map((experience, index) => (
        <div key={index}>
          <p>
            <span className="experience-title">{experience.title}</span>,{' '}
            <span className="experience-company">{experience.company}</span> |{' '}
            <span className="experience-date">{experience.date}</span> |{' '}
            <span className="experience-location">{experience.location}</span>
          </p>
          <ul>
            {experience.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
