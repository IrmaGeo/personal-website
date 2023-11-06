import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryName({ Id }) {
  const [categoryName, setCategoryName] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/categories/${Id}`)
      .then((response) => {
        setCategoryName(response.data.Name);
      })
      .catch((error) => {
        console.error('Error retrieving category name:', error);
      });
  }, [Id]);

  return <span>{categoryName || 'Loading...'}</span>;
}

export default CategoryName;
