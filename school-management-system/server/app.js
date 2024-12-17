const express =require('express');
const helmet=require('helmet');
const cors=require('cors');
const dotenv =require('dotenv');
require('dotenv').config();

dotenv.config();

const app=express();

app.use(express.json());

// Security middleware to protect against various vulnerabilities
app.use(helmet());

// Enable Cross-Origin Request Sharing (CORS)
app.use(cors());

// Import the route definitions from routes/index.js
const routes = require('./routes');

// Use routes defined in the routes/index.js
app.use('/', routes);


module.exports = app;