import React from 'react';
import './resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';


function Resume() {
  return (
    <div className='resume'>
      <h1>IRMA MODZGVRISHVILI</h1>
      <p>Data Scientist | Machine Learning | NLP | SQL | Tableau | AWS | Python | Data Visualization | Deep Learning</p>
      <p>modzgvrishviliirma@gmail.com ● (347) 641-1970</p>

{/* section for Skills */}

  

  <div className='skills'> 
  <h3>SKILLS</h3>
  </div>



{/* section for Professional Experiance*/}
      <div className='experiance'>
      <h3>

      <FontAwesomeIcon icon={faBriefcase} /> PROFESSIONAL EXPERIENCE
      </h3>
      <p>Data Scientist, TBC BANK | February 2022 - Current | Tbilisi, Georgia</p>
      <ul>
        <li>Created a customer propensity scoring model utilizing ML gradient boosting (xgboost) to identify critical site features, which was then leveraged by the digital team to enhance the website and improve conversion rates</li>
        <li>Combined SQL and Tableau for ad hoc data analysis of payment methods visualized in a dashboard that delivered data-driven insights which were leveraged by the digital marketing team on a daily basis</li>
        <li>Utilized Pytorch and product data to train a neural network to produce product embeddings, which were leveraged for a recommendation system on website product pages - increasing page views for the recommended products by ~2-6%</li>
        <li>Leveraged an artificial neural network in statistical modeling of repeat purchase behavior which accurately predicted second purchases with a 97% test accuracy rate, enabling the organization to improve customer retention by ~4%</li>
      </ul>
      <p>System Analyst, TBC BANK | May 2018 - February 2022 | Tbilisi, Georgia</p>
      <ul>
        <li>Upgraded SDLC by implementing Agile methodology, reducing software development time by 30% and reducing customer-reported bugs by 25% over 9 months</li>
        <li>Orchestrated successful data migrations and optimized processes, securing $1 million in vendor discounts within 4 months</li>
        <li>Created and developed predictive models using statistical analysis and SQL to forecast sales and revenue; improved forecasting accuracy by 20% over 1 months and helped the company make data-driven sales decisions</li>
        <li>Engineered automated solutions for 10+ manual processes and automated 10+ processes, reducing manual errors by 50% and saving 40+ hours of work per week for the business operation team</li>
      </ul>
      <p>Data Analyst, TBC BANK | December 2014 - May 2018 | Tbilisi, Georgia</p>
      <ul>
        <li>Built a real-time data and reporting system using SQL, Tableau, Access, and Excel, reducing report time by 25% and enabling data-driven decisions by senior management, leading to a 20% revenue increase</li>
        <li>Formulated machine learning models to forecast customer demand and optimized inventory management, achieved an outstanding 60% reduction in inventory shortages, leading to a remarkable increase in revenue by $500K within a 6-month period</li>
        <li>Deployed new tools, ETL, and middleware, while improving customer value-based pricing by 13% through a long-term experiment</li>
      </ul>

      </div>

     
{/* section for Education and Certificates */}

<div className='education'>
<h3><FontAwesomeIcon icon={faGraduationCap} /> EDUCATION and CERTIFICATIONS</h3>

      <p>Master of Mathematics, Computer Science and Mathematics, GPA: 3.9 | Ivane Javakhishvili Tbilisi State University, Tbilisi, Georgia</p>
      <p>Bachelor of Mathematics, Computer Science and Mathematics, GPA: 3.9 | Ivane Javakhishvili Tbilisi State University, Tbilisi, Georgia</p>
      <p>Columbia Engineering Boot Camps, New York, NY | November 2023 - Current | AI</p>
      <p>Certified AWS practitioner, Per Scolas, New York, NY | September 2022 | S3, EC2, Redshift, Glue, QuickSight, Lambda, SageMaker</p>


</div>
    </div>
  );
}

export default Resume;
