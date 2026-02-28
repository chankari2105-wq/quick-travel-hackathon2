const express = require("express");
const router = express.Router();

let reports = []; // temporary memory storage

// 👉 POST route (save report)
router.post("/", (req, res) => {
  const report = req.body;
  reports.push(report);
  res.json({ message: "Report saved", report });
});

// 👉 GET route (fetch reports)
router.get("/", (req, res) => {
  res.json(reports);
});

module.exports = router;