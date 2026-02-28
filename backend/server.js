const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/api/report", (req, res) => {
  res.json([]);
});

// POST ROUTE
app.post("/api/report", (req, res) => {
  console.log(req.body);
  res.json({ message: "Report saved", data: req.body });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});