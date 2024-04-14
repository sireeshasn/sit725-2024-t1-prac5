const express = require('express');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./dbconnection');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/api', routes);

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
