import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "../styles/styles.css";

const Home = () => {
  return (
    <div className='flex-container'>
      <div className='profile-info'>
        <img src="/images/profile.jpg" alt="profile" />

        {/* Name */}
        <h1>Irma Modzgvrishvili</h1>

        {/* Occupation or Title */}
        <p>Machine Learning Explorer | AI Visionary | Data Artisan</p>

        {/* Email Link */}
        <i className="fa fa-hand-o-down fa-4x" aria-hidden="true"></i>
        <br />
        <br />
        <a href="mailto:modzgvrishviliirma@email.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/irmamodzgvrishvili" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* GitHub Link */}
        <a href="https://github.com/IrmaGeo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
     </div>
<div>
        <h1>About Me</h1>
        {/* Introduction: Describes the role and skills */}
        <p>
          Welcome! I'm Irma, a data magician skilled in the art of transforming raw data into captivating stories and actionable insights. 📊
        </p>

        {/* Greeting and mission statement */}
        <p>
          My journey through the ever-expanding data cosmos has equipped me with the superpowers to analyze, visualize, and unearth valuable treasures from complex datasets. With a passion for unraveling data's hidden secrets, I'm here to weave wonders with information just for you!
        </p>

        {/* Skills and purpose */}
        <p>
          Beyond my data adventures, I'm an avid explorer of the AI and machine learning realms. I stay on the cutting edge, continuously learning and adapting to the latest trends. My education includes a degree in Data Science from Data University, where I honed my craft and ignited my passion for the world of numbers and patterns.
        </p>

        {/* Interests and call to action */}
        <p>
          Join me on this data-driven odyssey, and together, we'll shape a smarter, brighter future!
        </p>

        <h2>Interest</h2>
        <ul>
          <li>Deep Learning</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
          <li>Artificial Intelligence</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
