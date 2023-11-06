const express = require('express');
const router = express.Router();
const db = require('/Users/irmamodzgvrishvili/personal-website/database/db.js')

// Get all projects
router.get('/projects', (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error fetching projects');
      }
      res.json(results);
    });
  });

// Get all project categories
router.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error fetching categories');
      }
      res.json(results);
    });
  });

  // Get all projects with categories
router.get('/projectsWithCategories', (req, res) => {
    const query = `
      SELECT p.*, c.category
      FROM projects p
      LEFT JOIN categories c ON p.id = c.id
    `;
  
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error fetching projects with categories');
      }
      res.json(results);
    });
  });

  // Get all projects with categories

  router.get('/categories/:id', (req, res) => {
    const categoryId = req.params.id;
  
    db.query('SELECT * FROM categories WHERE Id = ?', [categoryId], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error fetching category');
      }
  
      if (results.length === 0) {
        return res.status(404).send('Category not found');
      }
  
      res.json(results[0]);
    });
  });

  // Get achievements by project ID
router.get('/achievements/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  // Query the database to get achievements for the specified project ID
  db.query('SELECT * FROM achievements WHERE project_id = ?', [projectId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error fetching achievements');
    }

    res.json(results);
  });
});

  
  
  module.exports = router;
