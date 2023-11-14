// src/components/ContactInfo.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function ContactInfo({ dataPath }) {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + dataPath);
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contactInfo data:', error);
      }
    };

    fetchData();
  }, [dataPath]);

  return (
    <div className='contact-info'>
      <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
      <span className="contact-value">{contactInfo.email}</span>

      <FontAwesomeIcon icon={faPhone} className="contact-icon" />
      <span className="contact-value">{contactInfo.phone}</span>

      <FontAwesomeIcon icon={faGithub} className="contact-icon" />
      <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
        <span className="contact-value">{contactInfo.github}</span>
      </a>

      <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
        <span className="contact-value">{contactInfo.linkedin}</span>
      </a>
    </div>
  );
}

export default ContactInfo;
