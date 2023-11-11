import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Use free-brands-svg-icons for social icons
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function ContactInfo({ email, phone, github, linkedin }) {

  return (
    <div className='contact-info'>
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
        <span className="contact-value">{email}</span>

        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
        <span className="contact-value">{phone}</span>

        <FontAwesomeIcon icon={faGithub} className="contact-icon" />
        <a href={github} target="_blank" rel="noopener noreferrer">
          <span className="contact-value">{github}</span>
        </a>

        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <span className="contact-value">{linkedin}</span>
        </a>
    </div>
  );
}

export default ContactInfo;
