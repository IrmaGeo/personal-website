import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';


function ResumeActions() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Replace 'YOUR_RESUME_FILE_URL' with the actual URL of your resume file
    window.open('https://drive.google.com/file/d/1YLUVXGKDHKBveGF3MbXwDxwtoEnz1kya/view?usp=drive_link', '_blanck');

  };

  return (
    <div className='resume-actions'>
      <button onClick={handlePrint}>
      <FontAwesomeIcon icon={faPrint} /> Print</button>

      <button onClick={handleDownload}>
      <FontAwesomeIcon icon={faDownload} /> Download</button>

    </div>
  );
}

export default ResumeActions;
