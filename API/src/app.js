// src/app.js
const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');
const projectRoutes = require('./routes/projectRoutes');

const { sequelize, connectToDb } = require('./config/database');

const app = express();

// Enable CORS with specific origin
app.use(cors({
    origin: 'http://localhost:9000', // Replace with your frontend URL
}));

// Middleware to parse JSON requests
app.use(express.json());

// Set up routes
app.use('/api/customers', customerRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server running on port: ${PORT}`);
    await connectToDb();
});
