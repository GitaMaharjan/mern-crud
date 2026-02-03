const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); //express ko instance banako ho
app.use(cors()); //middleware to enable CORS
app.use(express.json()); //middleware to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello from Express backend!");
});

const PORT = 5000;
try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to start server:", error);
}
