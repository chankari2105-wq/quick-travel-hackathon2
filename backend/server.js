const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send("Quick Travel Backend Running 🚦");
});

// Temporary in-memory storage (for hackathon demo)
let reports = [];

// Add new traffic disruption report
app.post('/api/report', (req, res) => {
  const { location, issue, description } = req.body;

  if (!location || !issue) {
    return res.status(400).json({ message: "Location and Issue required" });
  }

  const newReport = {
    id: reports.length + 1,
    location,
    issue,
    description,
    time: new Date()
  };

  reports.push(newReport);
  res.json({ message: "Report added successfully", data: newReport });
});

// Get all reports
app.get('/api/report', (req, res) => {
  res.json(reports);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
