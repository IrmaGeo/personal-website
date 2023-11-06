const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3006; // Use process.env.PORT for Heroku compatibility

app.use(cors()); 

// Import your API route
const projectsRouter = require('./routes/projects');

// Define your API routes here
app.use('/api', projectsRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
