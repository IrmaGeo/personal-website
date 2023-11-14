// src/components/Skills.js
import React, { useState, useEffect } from 'react';

function Skills({ dataPath }) {
  const [skillGroups, setSkillGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + dataPath);
        const data = await response.json();
        setSkillGroups(data.skillGroups);
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };

    fetchData();
  }, [dataPath]);

  return (
    <div className='skills'>
      <h3>SKILLS</h3>
      <ul>
        {skillGroups.map((group, groupIndex) => (
          <li key={groupIndex}>
            <div className='skill-group'>
              <span className='skills-group'>{group.group}:</span>
              <span className='skills-item'>{group.items.join(', ')}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
