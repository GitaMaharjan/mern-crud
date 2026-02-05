require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors middleware (allows frontend to talk to backend)

const connectDB = require("./config/db"); // Import database connection function

const app = express(); // Create an Express application
connectDB(); // Connect to MongoDB

// Middleware

// Allow requests from other origins (e.g. React app on localhost:5173)
app.use(cors()); // Enable CORS for all routes

//allow server to read JSON data from request body
//without this, req.body would be undefined when we try to access it in our routes
app.use(express.json()); // Parse JSON request bodies

// Routes

// Test route to check if server is running
app.get("/", (req, res) => {
  res.send("API is running");
});

// Use PORT from .env, or fallback to 5000
const PORT = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
